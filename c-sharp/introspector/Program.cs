using System.Runtime.CompilerServices;
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
    [JSExport]
    public static string InspectJson(string sql)
    {
        var parser = new TSql160Parser(initialQuotedIdentifiers: false);

        try
        {
            var fragment = parser.Parse(new StringReader(sql), out IList<ParseError> errors);

            if (errors.Count > 0 || fragment is null)
            {
                return WriteFailureResultJson(errors);
            }

            var visitor = new IntrospectionVisitor(sql.Length);
            visitor.AddStatementsFromScript(fragment);
            fragment.Accept(visitor);

            return WriteSuccessResultJson(visitor);
        }
        catch
        {
            return WriteExceptionResultJson();
        }
    }

    private static string WriteSuccessResultJson(IntrospectionVisitor visitor)
    {
        using var output = new MemoryStream();
        using (var writer = new Utf8JsonWriter(output))
        {
            writer.WriteStartObject();
            writer.WriteBoolean("failed", false);
            WriteStatements(writer, visitor.Statements);
            WriteObjectReferences(writer, visitor.ObjectReferences);
            WriteNamedRanges(writer, "functionCalls", visitor.FunctionCalls);
            WriteNamedRanges(writer, "procedureCalls", visitor.ProcedureCalls);
            WriteConstructs(writer, visitor.Constructs);
            writer.WriteStartArray("errors");
            writer.WriteEndArray();
            writer.WriteEndObject();
        }

        return Encoding.UTF8.GetString(output.GetBuffer(), 0, checked((int)output.Length));
    }

    private static string WriteFailureResultJson(IList<ParseError> errors)
    {
        using var output = new MemoryStream();
        using (var writer = new Utf8JsonWriter(output))
        {
            writer.WriteStartObject();
            writer.WriteBoolean("failed", true);
            writer.WriteStartArray("statements");
            writer.WriteEndArray();
            writer.WriteStartArray("objectReferences");
            writer.WriteEndArray();
            writer.WriteStartArray("functionCalls");
            writer.WriteEndArray();
            writer.WriteStartArray("procedureCalls");
            writer.WriteEndArray();
            writer.WriteStartArray("constructs");
            writer.WriteEndArray();
            writer.WriteStartArray("errors");

            foreach (var error in errors)
            {
                WriteError(writer, error.Number, error.Offset, error.Line, error.Column);
            }

            writer.WriteEndArray();
            writer.WriteEndObject();
        }

        return Encoding.UTF8.GetString(output.GetBuffer(), 0, checked((int)output.Length));
    }

    private static string WriteExceptionResultJson()
    {
        using var output = new MemoryStream();
        using (var writer = new Utf8JsonWriter(output))
        {
            writer.WriteStartObject();
            writer.WriteBoolean("failed", true);
            writer.WriteStartArray("statements");
            writer.WriteEndArray();
            writer.WriteStartArray("objectReferences");
            writer.WriteEndArray();
            writer.WriteStartArray("functionCalls");
            writer.WriteEndArray();
            writer.WriteStartArray("procedureCalls");
            writer.WriteEndArray();
            writer.WriteStartArray("constructs");
            writer.WriteEndArray();
            writer.WriteStartArray("errors");
            WriteError(writer, 0, 0, 0, 0);
            writer.WriteEndArray();
            writer.WriteEndObject();
        }

        return Encoding.UTF8.GetString(output.GetBuffer(), 0, checked((int)output.Length));
    }

    private static void WriteStatements(Utf8JsonWriter writer, IReadOnlyList<StatementProjection> statements)
    {
        writer.WriteStartArray("statements");

        foreach (var statement in statements)
        {
            writer.WriteStartObject();
            writer.WriteString("kind", statement.Kind);
            writer.WriteNumber("offset", statement.Offset);
            writer.WriteNumber("length", statement.Length);
            writer.WriteEndObject();
        }

        writer.WriteEndArray();
    }

    private static void WriteObjectReferences(
        Utf8JsonWriter writer,
        IReadOnlyList<ObjectReferenceProjection> objectReferences
    )
    {
        writer.WriteStartArray("objectReferences");

        foreach (var objectReference in objectReferences)
        {
            writer.WriteStartObject();
            writer.WriteString("context", objectReference.Context);
            WriteNameParts(writer, objectReference.NameParts);
            WriteOptionalSpan(writer, objectReference.Span);
            writer.WriteEndObject();
        }

        writer.WriteEndArray();
    }

    private static void WriteNamedRanges(
        Utf8JsonWriter writer,
        string propertyName,
        IReadOnlyList<NamedRangeProjection> namedRanges
    )
    {
        writer.WriteStartArray(propertyName);

        foreach (var namedRange in namedRanges)
        {
            writer.WriteStartObject();
            WriteNameParts(writer, namedRange.NameParts);
            WriteOptionalSpan(writer, namedRange.Span);
            writer.WriteEndObject();
        }

        writer.WriteEndArray();
    }

    private static void WriteConstructs(Utf8JsonWriter writer, IReadOnlyList<ConstructProjection> constructs)
    {
        writer.WriteStartArray("constructs");

        foreach (var construct in constructs)
        {
            writer.WriteStartObject();
            writer.WriteString("kind", construct.Kind);
            WriteOptionalSpan(writer, construct.Span);
            writer.WriteEndObject();
        }

        writer.WriteEndArray();
    }

    private static void WriteNameParts(Utf8JsonWriter writer, IReadOnlyList<string> nameParts)
    {
        writer.WriteStartArray("nameParts");

        foreach (var namePart in nameParts)
        {
            writer.WriteStringValue(namePart);
        }

        writer.WriteEndArray();
    }

    private static void WriteOptionalSpan(Utf8JsonWriter writer, FragmentSpan? span)
    {
        if (span is null)
        {
            return;
        }

        writer.WriteNumber("offset", span.Value.Offset);
        writer.WriteNumber("length", span.Value.Length);
    }

    private static void WriteError(
        Utf8JsonWriter writer,
        int number,
        int offset,
        int line,
        int column
    )
    {
        writer.WriteStartObject();
        writer.WriteNumber("number", number);
        writer.WriteNumber("offset", Math.Max(0, offset));
        writer.WriteNumber("line", Math.Max(0, line));
        writer.WriteNumber("column", Math.Max(0, column));
        writer.WriteEndObject();
    }
}

internal sealed class IntrospectionVisitor : TSqlFragmentVisitor
{
    private readonly int _sqlLength;
    private readonly HashSet<string> _constructKeys = new();
    private readonly HashSet<string> _functionCallKeys = new();
    private readonly HashSet<string> _objectReferenceKeys = new();
    private readonly HashSet<string> _procedureCallKeys = new();
    private readonly HashSet<string> _statementKeys = new();

    public IntrospectionVisitor(int sqlLength)
    {
        _sqlLength = sqlLength;
    }

    public List<StatementProjection> Statements { get; } = new();
    public List<ObjectReferenceProjection> ObjectReferences { get; } = new();
    public List<NamedRangeProjection> FunctionCalls { get; } = new();
    public List<NamedRangeProjection> ProcedureCalls { get; } = new();
    public List<ConstructProjection> Constructs { get; } = new();

    public void AddStatementsFromScript(TSqlFragment fragment)
    {
        if (fragment is not TSqlScript script)
        {
            if (fragment is TSqlStatement statement)
            {
                AddStatement(statement);
            }

            return;
        }

        foreach (var batch in script.Batches)
        {
            foreach (var statement in batch.Statements)
            {
                AddStatement(statement);
            }
        }
    }

    public override void ExplicitVisit(TSqlStatement node)
    {
        AddStatement(node);
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(NamedTableReference node)
    {
        AddObjectReference("table", GetNameParts(node.SchemaObject), TryGetSpan(node));
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(CreateTableStatement node)
    {
        AddObjectReference("create-table", GetNameParts(node.SchemaObjectName), TryGetSpan(node.SchemaObjectName));
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(FunctionCall node)
    {
        AddNamedRange(FunctionCalls, _functionCallKeys, GetNameParts(node.FunctionName), TryGetSpan(node));
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(BuiltInFunctionTableReference node)
    {
        AddNamedRange(FunctionCalls, _functionCallKeys, GetNameParts(node.Name), TryGetSpan(node));
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(ExecutableProcedureReference node)
    {
        var procedureReference = node.ProcedureReference?.ProcedureReference;

        if (procedureReference is not null)
        {
            AddNamedRange(
                ProcedureCalls,
                _procedureCallKeys,
                GetNameParts(procedureReference.Name),
                TryGetSpan(node)
            );
        }

        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(ExecuteStatement node)
    {
        AddConstruct("execute", node);
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(ExecutableStringList node)
    {
        AddConstruct("dynamic-execute", node);
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(OpenRowsetTableReference node)
    {
        AddConstruct("open-rowset", node);
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(BulkOpenRowset node)
    {
        AddConstruct("open-rowset", node);
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(InternalOpenRowset node)
    {
        AddConstruct("open-rowset", node);
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(OpenRowsetCosmos node)
    {
        AddConstruct("open-rowset", node);
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(OpenQueryTableReference node)
    {
        AddConstruct("open-query", node);
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(OpenJsonTableReference node)
    {
        AddConstruct("open-json", node);
        base.ExplicitVisit(node);
    }

    public override void ExplicitVisit(OpenXmlTableReference node)
    {
        AddConstruct("open-xml", node);
        base.ExplicitVisit(node);
    }

    private void AddStatement(TSqlStatement node)
    {
        var span = GetSpan(node);
        var key = GetProjectionKey(node.GetType().Name, span);

        if (!_statementKeys.Add(key))
        {
            return;
        }

        Statements.Add(new StatementProjection(node.GetType().Name, span.Offset, span.Length));
    }

    private void AddObjectReference(
        string context,
        IReadOnlyList<string> nameParts,
        FragmentSpan? span
    )
    {
        if (nameParts.Count == 0)
        {
            return;
        }

        var key = GetProjectionKey(context, nameParts, span);

        if (!_objectReferenceKeys.Add(key))
        {
            return;
        }

        ObjectReferences.Add(new ObjectReferenceProjection(context, nameParts, span));
    }

    private void AddNamedRange(
        List<NamedRangeProjection> projections,
        HashSet<string> keys,
        IReadOnlyList<string> nameParts,
        FragmentSpan? span
    )
    {
        if (nameParts.Count == 0)
        {
            return;
        }

        var key = GetProjectionKey("named-range", nameParts, span);

        if (!keys.Add(key))
        {
            return;
        }

        projections.Add(new NamedRangeProjection(nameParts, span));
    }

    private void AddConstruct(string kind, TSqlFragment node)
    {
        var span = TryGetSpan(node);
        var key = GetProjectionKey(kind, span);

        if (!_constructKeys.Add(key))
        {
            return;
        }

        Constructs.Add(new ConstructProjection(kind, span));
    }

    private FragmentSpan GetSpan(TSqlFragment node)
    {
        return TryGetSpan(node) ?? new FragmentSpan(0, 0);
    }

    private FragmentSpan? TryGetSpan(TSqlFragment? node)
    {
        if (node is null || node.StartOffset < 0 || node.FragmentLength < 0)
        {
            return null;
        }

        var offset = ClampOffset(node.StartOffset);
        var end = ClampOffset(node.StartOffset + node.FragmentLength);

        return new FragmentSpan(offset, Math.Max(0, end - offset));
    }

    private int ClampOffset(int offset)
    {
        return Math.Min(Math.Max(offset, 0), _sqlLength);
    }

    private static IReadOnlyList<string> GetNameParts(SchemaObjectName? name)
    {
        var nameParts = new List<string>();

        AddIdentifier(nameParts, name?.ServerIdentifier);
        AddIdentifier(nameParts, name?.DatabaseIdentifier);
        AddIdentifier(nameParts, name?.SchemaIdentifier);
        AddIdentifier(nameParts, name?.BaseIdentifier);

        return nameParts;
    }

    private static IReadOnlyList<string> GetNameParts(Identifier? identifier)
    {
        var nameParts = new List<string>();
        AddIdentifier(nameParts, identifier);
        return nameParts;
    }

    private static void AddIdentifier(List<string> nameParts, Identifier? identifier)
    {
        if (!string.IsNullOrEmpty(identifier?.Value))
        {
            nameParts.Add(identifier.Value);
        }
    }

    private static string GetProjectionKey(string kind, FragmentSpan? span)
    {
        return $"{kind}:{span?.Offset ?? -1}:{span?.Length ?? -1}";
    }

    private static string GetProjectionKey(
        string kind,
        IReadOnlyList<string> nameParts,
        FragmentSpan? span
    )
    {
        return $"{kind}:{string.Join(".", nameParts)}:{span?.Offset ?? -1}:{span?.Length ?? -1}";
    }
}

internal readonly record struct FragmentSpan(int Offset, int Length);

internal sealed record StatementProjection(string Kind, int Offset, int Length);

internal sealed record ObjectReferenceProjection(
    string Context,
    IReadOnlyList<string> NameParts,
    FragmentSpan? Span
);

internal sealed record NamedRangeProjection(IReadOnlyList<string> NameParts, FragmentSpan? Span);

internal sealed record ConstructProjection(string Kind, FragmentSpan? Span);
