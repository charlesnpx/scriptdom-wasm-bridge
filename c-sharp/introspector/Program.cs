using System.Globalization;
using System.Runtime.InteropServices.JavaScript;
using System.Runtime.Versioning;
using System.Text;
using System.Text.Json;
using Microsoft.SqlServer.TransactSql.ScriptDom;

[assembly: SupportedOSPlatform("browser")]

namespace ScriptDom.WasmBridge;

public static class Program
{
    public static void Main()
    {
    }
}

public static partial class TsqlIntrospector
{
    private const string EmptyOptionsJson = "{}";
    private const string IncludeSpansOptionsJson = "{\"includeSpans\":true}";
    private const string IncludeTokensOptionsJson = "{\"includeTokens\":true}";
    private const string IncludeSpansAndTokensOptionsJson =
        "{\"includeSpans\":true,\"includeTokens\":true}";

    [JSExport]
    public static string GetIntrospectorAbiJson()
    {
        using var output = new MemoryStream();
        using (var writer = new Utf8JsonWriter(output))
        {
            writer.WriteStartObject();
            writer.WriteString("parser", IntrospectorProjectionManifest.Parser);
            writer.WriteNumber("projectionVersion", IntrospectorProjectionManifest.ProjectionVersion);
            writer.WriteString("manifestSha256", IntrospectorProjectionManifest.ManifestSha256);
            writer.WriteString("resultSchemaSha256", IntrospectorProjectionManifest.ResultSchemaSha256);
            writer.WriteString("allowlistSha256", IntrospectorProjectionManifest.AllowlistSha256);
            writer.WriteEndObject();
        }

        return Encoding.UTF8.GetString(output.GetBuffer(), 0, checked((int)output.Length));
    }

    [JSExport]
    public static string InspectJson(string sql, string optionsJson)
    {
        InspectOptions options;

        try
        {
            options = ParseOptions(optionsJson);

            if (sql.Length > IntrospectorProjectionManifest.MaxSqlUtf16CodeUnits)
            {
                throw new ProjectionLimitExceededException();
            }

            var parser = new TSql160Parser(initialQuotedIdentifiers: false, SqlEngineType.All);
            var fragment = parser.Parse(new StringReader(sql), out IList<ParseError> errors);

            if (errors.Count > 0 || fragment is null)
            {
                return WriteInspectResultJson(
                    failed: true,
                    nodes: Array.Empty<ProjectedNode>(),
                    tokens: Array.Empty<ProjectedToken>(),
                    errors,
                    options,
                    sql.Length);
            }

            IReadOnlyList<ProjectedToken> tokens = options.IncludeTokens
                ? ProjectTokens(sql)
                : Array.Empty<ProjectedToken>();
            var nodes = ProjectNodes(fragment, options);

            return WriteInspectResultJson(
                failed: false,
                nodes,
                tokens,
                Array.Empty<ParseError>(),
                options,
                sql.Length);
        }
        catch
        {
            return WritePrivateFailureEnvelope(TryParseOptionsForEnvelope(optionsJson));
        }
    }

    private static InspectOptions ParseOptions(string optionsJson)
    {
        if (optionsJson.Length > IntrospectorProjectionManifest.MaxPrivateOptionsJsonUtf16CodeUnits)
        {
            throw new ProjectionLimitExceededException();
        }

        return optionsJson switch
        {
            EmptyOptionsJson => new InspectOptions(false, false),
            IncludeSpansOptionsJson => new InspectOptions(true, false),
            IncludeTokensOptionsJson => new InspectOptions(false, true),
            IncludeSpansAndTokensOptionsJson => new InspectOptions(true, true),
            _ => throw new ProjectionLimitExceededException(),
        };
    }

    private static InspectOptions TryParseOptionsForEnvelope(string optionsJson)
    {
        try
        {
            return ParseOptions(optionsJson);
        }
        catch
        {
            return new InspectOptions(false, false);
        }
    }

    private static List<ProjectedNode> ProjectNodes(TSqlFragment fragment, InspectOptions options)
    {
        var nodes = new List<ProjectedNode>();
        var stack = new Stack<TraversalFrame>();
        var traversedFragments = 0;
        var pathSegments = 0;

        stack.Push(
            new TraversalFrame(
                fragment,
                ParentId: null,
                PathFromParent: Array.Empty<string>(),
                Depth: 0,
                LiteralOrigin: false));

        while (stack.Count > 0)
        {
            var frame = stack.Pop();
            traversedFragments += 1;

            if (
                traversedFragments > IntrospectorProjectionManifest.MaxTraversedFragments ||
                frame.Depth > IntrospectorProjectionManifest.MaxTraversalDepth ||
                nodes.Count >= IntrospectorProjectionManifest.MaxNodes
            )
            {
                throw new ProjectionLimitExceededException();
            }

            var nodeKind = IntrospectorProjectionAccessors.GetNodeKind(frame.Node);
            if (nodeKind.Length == 0 || IntrospectorProjectionAccessors.GetNodeKindId(frame.Node) < 0)
            {
                throw new ProjectionLimitExceededException();
            }

            pathSegments += frame.PathFromParent.Length;
            if (pathSegments > IntrospectorProjectionManifest.MaxPathSegments)
            {
                throw new ProjectionLimitExceededException();
            }

            var node = new ProjectedNode(
                Id: nodes.Count,
                Kind: nodeKind,
                ParentId: frame.ParentId,
                PathFromParent: frame.PathFromParent,
                Span: options.IncludeSpans ? TryGetSpan(frame.Node) : null,
                Fragment: frame.Node,
                LiteralOrigin: frame.LiteralOrigin);
            nodes.Add(node);

            var children = IntrospectorProjectionAccessors.GetChildren(frame.Node).ToArray();
            for (var index = children.Length - 1; index >= 0; index -= 1)
            {
                var child = children[index];
                stack.Push(
                    new TraversalFrame(
                        child.Child,
                        node.Id,
                        GetPathFromParent(child),
                        frame.Depth + 1,
                        frame.LiteralOrigin || IsLiteralOrigin(frame.Node, child)));
            }
        }

        return nodes;
    }

    private static List<ProjectedToken> ProjectTokens(string sql)
    {
        var parser = new TSql160Parser(initialQuotedIdentifiers: false, SqlEngineType.All);
        var tokens = parser.GetTokenStream(new StringReader(sql), out _);
        var projectedTokens = new List<ProjectedToken>();

        for (var index = 0; index < tokens.Count; index += 1)
        {
            var token = tokens[index];
            if (token.TokenType == TSqlTokenType.EndOfFile)
            {
                continue;
            }

            if (projectedTokens.Count >= IntrospectorProjectionManifest.MaxTokens)
            {
                throw new ProjectionLimitExceededException();
            }

            var offset = ClampOffset(token.Offset, sql.Length);
            var length = GetTokenLength(tokens, index, offset, sql.Length);

            if (length <= 0 || token.Line <= 0 || token.Column <= 0)
            {
                throw new ProjectionLimitExceededException();
            }

            projectedTokens.Add(
                new ProjectedToken(
                    Type: (int)token.TokenType,
                    Offset: offset,
                    Length: length,
                    Line: token.Line,
                    Column: token.Column));
        }

        return projectedTokens;
    }

    private static string WriteInspectResultJson(
        bool failed,
        IReadOnlyList<ProjectedNode> nodes,
        IReadOnlyList<ProjectedToken> tokens,
        IList<ParseError> errors,
        InspectOptions options,
        int sqlLength)
    {
        using var output = new CappedMemoryStream(
            IntrospectorProjectionManifest.MaxSerializedEnvelopeUtf8Bytes);
        using (var writer = new Utf8JsonWriter(output))
        {
            writer.WriteStartObject();
            writer.WriteBoolean("failed", failed);
            writer.WriteString("parser", IntrospectorProjectionManifest.Parser);
            writer.WriteNumber("projectionVersion", IntrospectorProjectionManifest.ProjectionVersion);
            WriteNodes(writer, nodes, options);

            if (options.IncludeTokens)
            {
                WriteTokens(writer, tokens);
            }

            WriteErrors(writer, errors, sqlLength);
            writer.WriteEndObject();
        }

        var result = Encoding.UTF8.GetString(output.GetBuffer(), 0, checked((int)output.Length));
        if (result.Length > IntrospectorProjectionManifest.MaxProjectedOutputUtf16CodeUnits)
        {
            throw new ProjectionLimitExceededException();
        }

        return result;
    }

    private static string WritePrivateFailureEnvelope(InspectOptions options)
    {
        using var output = new MemoryStream();
        using (var writer = new Utf8JsonWriter(output))
        {
            writer.WriteStartObject();
            writer.WriteBoolean("failed", true);
            writer.WriteString("parser", IntrospectorProjectionManifest.Parser);
            writer.WriteNumber("projectionVersion", IntrospectorProjectionManifest.ProjectionVersion);
            writer.WriteStartArray("nodes");
            writer.WriteEndArray();

            if (options.IncludeTokens)
            {
                writer.WriteStartArray("tokens");
                writer.WriteEndArray();
            }

            writer.WriteStartArray("errors");
            WriteUnavailableError(writer, 0);
            writer.WriteEndArray();
            writer.WriteEndObject();
        }

        return Encoding.UTF8.GetString(output.GetBuffer(), 0, checked((int)output.Length));
    }

    private static void WriteNodes(
        Utf8JsonWriter writer,
        IReadOnlyList<ProjectedNode> nodes,
        InspectOptions options)
    {
        writer.WriteStartArray("nodes");

        foreach (var node in nodes)
        {
            writer.WriteStartObject();
            writer.WriteNumber("id", node.Id);
            writer.WriteString("kind", node.Kind);

            if (node.ParentId is null)
            {
                writer.WriteNull("parentId");
            }
            else
            {
                writer.WriteNumber("parentId", node.ParentId.Value);
            }

            writer.WriteStartArray("pathFromParent");
            foreach (var segment in node.PathFromParent)
            {
                writer.WriteStringValue(segment);
            }
            writer.WriteEndArray();

            if (options.IncludeSpans && node.Span is not null)
            {
                writer.WritePropertyName("span");
                WriteSpan(writer, node.Span.Value);
            }

            IntrospectorProjectionAccessors.WriteAttributes(
                writer,
                node.Fragment,
                new StructuralProjectionContext(node.LiteralOrigin));
            writer.WriteEndObject();
        }

        writer.WriteEndArray();
    }

    private static void WriteTokens(Utf8JsonWriter writer, IReadOnlyList<ProjectedToken> tokens)
    {
        writer.WriteStartArray("tokens");

        foreach (var token in tokens)
        {
            writer.WriteStartObject();
            writer.WriteNumber("type", token.Type);
            writer.WriteNumber("offset", token.Offset);
            writer.WriteNumber("length", token.Length);
            writer.WriteNumber("line", token.Line);
            writer.WriteNumber("column", token.Column);
            writer.WriteEndObject();
        }

        writer.WriteEndArray();
    }

    private static void WriteErrors(Utf8JsonWriter writer, IList<ParseError> errors, int sqlLength)
    {
        writer.WriteStartArray("errors");

        foreach (var error in errors.Take(IntrospectorProjectionManifest.MaxParseErrors))
        {
            WriteError(writer, error.Number, error.Offset, error.Line, error.Column, sqlLength);
        }

        writer.WriteEndArray();
    }

    private static void WriteSpan(Utf8JsonWriter writer, FragmentSpan span)
    {
        writer.WriteStartObject();
        writer.WriteNumber("offset", span.Offset);
        writer.WriteNumber("length", span.Length);
        writer.WriteNumber("line", span.Line);
        writer.WriteNumber("column", span.Column);
        writer.WriteEndObject();
    }

    private static void WriteError(
        Utf8JsonWriter writer,
        int number,
        int offset,
        int line,
        int column,
        int sqlLength)
    {
        if (offset < 0 || offset > sqlLength || line <= 0 || column <= 0)
        {
            WriteUnavailableError(writer, number);
            return;
        }

        writer.WriteStartObject();
        writer.WriteNumber("number", number);
        writer.WriteNumber("offset", offset);
        writer.WriteNumber("line", line);
        writer.WriteNumber("column", column);
        writer.WriteString("coordinateState", "available");
        writer.WriteEndObject();
    }

    private static void WriteUnavailableError(Utf8JsonWriter writer, int number)
    {
        writer.WriteStartObject();
        writer.WriteNumber("number", number);
        writer.WriteNumber("offset", 0);
        writer.WriteNumber("line", 1);
        writer.WriteNumber("column", 1);
        writer.WriteString("coordinateState", "unavailable");
        writer.WriteEndObject();
    }

    private static FragmentSpan? TryGetSpan(TSqlFragment node)
    {
        if (
            node.StartOffset < 0 ||
            node.FragmentLength <= 0 ||
            node.StartLine <= 0 ||
            node.StartColumn <= 0
        )
        {
            return null;
        }

        return new FragmentSpan(node.StartOffset, node.FragmentLength, node.StartLine, node.StartColumn);
    }

    private static string[] GetPathFromParent(StructuralChildEdge edge)
    {
        return edge.Index < 0
            ? new[] { edge.Name }
            : new[] { edge.Name, edge.Index.ToString(CultureInfo.InvariantCulture) };
    }

    private static bool IsLiteralOrigin(TSqlFragment parent, StructuralChildEdge edge)
    {
        return parent.GetType().Name.Contains("Literal", StringComparison.Ordinal) ||
            edge.Name.Contains("Literal", StringComparison.Ordinal);
    }

    private static int GetTokenLength(
        IList<TSqlParserToken> tokens,
        int tokenIndex,
        int offset,
        int sqlLength)
    {
        if (tokenIndex + 1 >= tokens.Count)
        {
            return Math.Max(0, sqlLength - offset);
        }

        var nextOffset = ClampOffset(tokens[tokenIndex + 1].Offset, sqlLength);
        if (nextOffset < offset)
        {
            nextOffset = sqlLength;
        }

        return Math.Max(0, nextOffset - offset);
    }

    private static int ClampOffset(int offset, int sqlLength)
    {
        return Math.Min(Math.Max(offset, 0), sqlLength);
    }
}

internal static class StructuralJsonWriter
{
    public static void WriteIdentifierAttribute(
        Utf8JsonWriter writer,
        string name,
        string? value,
        StructuralProjectionContext context)
    {
        if (string.IsNullOrEmpty(value))
        {
            return;
        }

        writer.WriteStartObject();
        writer.WriteString("name", name);
        writer.WriteString("kind", "identifier");

        if (context.LiteralOrigin)
        {
            writer.WriteString("state", "redacted");
            writer.WriteString("profile", IntrospectorProjectionManifest.IdentifierRedactionProfile);
            writer.WriteString("reason", "literal-origin");
        }
        else if (IsSensitiveIdentifier(value))
        {
            writer.WriteString("state", "redacted");
            writer.WriteString("profile", IntrospectorProjectionManifest.IdentifierRedactionProfile);
            writer.WriteString("reason", "secret-pattern");
        }
        else
        {
            writer.WriteString("state", "present");
            writer.WriteString("value", value);
        }

        writer.WriteEndObject();
    }

    public static void WriteScalarAttribute(
        Utf8JsonWriter writer,
        string name,
        string kind,
        string value)
    {
        writer.WriteStartObject();
        writer.WriteString("name", name);
        writer.WriteString("kind", kind);
        writer.WriteString("value", value);
        writer.WriteEndObject();
    }

    public static void WriteBooleanAttribute(Utf8JsonWriter writer, string name, bool value)
    {
        writer.WriteStartObject();
        writer.WriteString("name", name);
        writer.WriteString("kind", "boolean");
        writer.WriteBoolean("value", value);
        writer.WriteEndObject();
    }

    private static bool IsSensitiveIdentifier(string value)
    {
        foreach (var fragment in IntrospectorProjectionManifest.SensitiveIdentifierFragments)
        {
            if (value.Contains(fragment, StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }
        }

        return false;
    }
}

internal readonly record struct InspectOptions(bool IncludeSpans, bool IncludeTokens);

internal readonly record struct StructuralProjectionContext(bool LiteralOrigin);

internal readonly record struct TraversalFrame(
    TSqlFragment Node,
    int? ParentId,
    string[] PathFromParent,
    int Depth,
    bool LiteralOrigin);

internal readonly record struct FragmentSpan(int Offset, int Length, int Line, int Column);

internal readonly record struct ProjectedNode(
    int Id,
    string Kind,
    int? ParentId,
    string[] PathFromParent,
    FragmentSpan? Span,
    TSqlFragment Fragment,
    bool LiteralOrigin);

internal readonly record struct ProjectedToken(
    int Type,
    int Offset,
    int Length,
    int Line,
    int Column);

internal sealed class ProjectionLimitExceededException : Exception;

internal sealed class CappedMemoryStream : MemoryStream
{
    private readonly long _maxBytes;

    public CappedMemoryStream(long maxBytes)
    {
        _maxBytes = maxBytes;
    }

    public override void Write(byte[] buffer, int offset, int count)
    {
        ThrowIfWriteExceedsLimit(count);
        base.Write(buffer, offset, count);
    }

    public override void Write(ReadOnlySpan<byte> buffer)
    {
        ThrowIfWriteExceedsLimit(buffer.Length);
        base.Write(buffer);
    }

    public override void WriteByte(byte value)
    {
        ThrowIfWriteExceedsLimit(1);
        base.WriteByte(value);
    }

    private void ThrowIfWriteExceedsLimit(int byteCount)
    {
        if (Length + byteCount > _maxBytes)
        {
            throw new ProjectionLimitExceededException();
        }
    }
}
