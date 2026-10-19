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
    public static void Main() { }
}

public static partial class TsqlParser
{
    [JSExport]
    public static string GetParserAbiJson() => ParserProjection.AbiJson;

    [JSExport]
    public static string ParseJson(string sql, string quotedIdentifiers)
    {
        try
        {
            if (sql.Length > ParserProjection.SqlUtf16CodeUnits)
                throw new ProjectionLimitException();
            if (quotedIdentifiers != "true" && quotedIdentifiers != "false")
                return Failure("internal-error");

            var parser = new TSql160Parser(quotedIdentifiers == "true", SqlEngineType.All);
            var fragment = parser.Parse(new StringReader(sql), out IList<ParseError> errors);
            if (errors.Count > ParserProjection.ParseErrors)
                throw new ProjectionLimitException();

            using var stream = new CappedStream();
            using (var writer = new Utf8JsonWriter(stream))
            {
                writer.WriteStartObject();
                writer.WriteString("parser", ParserProjection.Parser);
                writer.WriteNumber("projectionVersion", ParserProjection.Version);
                if (errors.Count > 0) writer.WriteString("failure", "parse-error");
                else if (fragment is null) writer.WriteString("failure", "internal-error");
                else writer.WriteNull("failure");
                writer.WriteStartArray("nodes");
                if (errors.Count == 0 && fragment is not null) WriteNodes(writer, fragment, sql.Length);
                writer.WriteEndArray();
                writer.WriteStartArray("errors");
                foreach (var error in errors)
                {
                    writer.WriteStartObject();
                    writer.WriteNumber("number", error.Number);
                    ParserJson.WriteSpan(writer, error.Offset, 0, error.Line, error.Column, sql.Length);
                    writer.WriteEndObject();
                }
                writer.WriteEndArray();
                writer.WriteEndObject();
            }
            var result = Encoding.UTF8.GetString(stream.GetBuffer(), 0, checked((int)stream.Length));
            if (result.Length > ParserProjection.EnvelopeUtf16CodeUnits) throw new ProjectionLimitException();
            return result;
        }
        catch (ProjectionLimitException) { return Failure("resource-limit"); }
        catch (UnsupportedNodeException) { return Failure("unsupported-node"); }
        catch { return Failure("internal-error"); }
    }

    private static string Failure(string failure) =>
        "{\"parser\":\"" + ParserProjection.Parser + "\",\"projectionVersion\":" +
        ParserProjection.Version.ToString(CultureInfo.InvariantCulture) +
        ",\"failure\":\"" + failure + "\",\"nodes\":[],\"errors\":[]}";

    private static void WriteNodes(Utf8JsonWriter writer, TSqlFragment root, int sqlLength)
    {
        var pending = new Stack<Frame>();
        pending.Push(new Frame(root, null, null, -1, 0));
        var count = 0;
        while (pending.Count > 0)
        {
            var frame = pending.Pop();
            if (count >= ParserProjection.Nodes || frame.Depth > ParserProjection.TraversalDepth)
                throw new ProjectionLimitException();
            var id = count++;
            writer.WriteStartObject();
            writer.WriteNumber("id", id);
            writer.WriteString("kind", ParserProjection.GetKind(frame.Node));
            if (frame.ParentId is int parentId) writer.WriteNumber("parentId", parentId);
            else writer.WriteNull("parentId");
            writer.WriteStartArray("pathFromParent");
            if (frame.Edge is not null)
            {
                writer.WriteStringValue(frame.Edge);
                if (frame.Index >= 0) writer.WriteStringValue(frame.Index.ToString(CultureInfo.InvariantCulture));
            }
            writer.WriteEndArray();
            ParserJson.WriteSpan(writer, frame.Node.StartOffset, frame.Node.FragmentLength,
                frame.Node.StartLine, frame.Node.StartColumn, sqlLength);
            ParserProjection.WriteAttributes(writer, frame.Node);
            writer.WriteEndObject();
            var children = new List<StructuralChildEdge>();
            foreach (var child in ParserProjection.GetChildren(frame.Node))
            {
                if (count + pending.Count + children.Count >= ParserProjection.Nodes)
                    throw new ProjectionLimitException();
                children.Add(child);
            }
            for (var index = children.Count - 1; index >= 0; index--)
            {
                var child = children[index];
                pending.Push(new Frame(child.Child, id, child.Name, child.Index, frame.Depth + 1));
            }
        }
    }
}

internal static class ParserJson
{
    public static void WriteAttribute(Utf8JsonWriter writer, string name, string kind, object? value)
    {
        writer.WriteStartObject();
        writer.WriteString("name", name);
        writer.WriteString("kind", kind);
        if (value is null) writer.WriteNull("value");
        else if (kind == "boolean") writer.WriteBoolean("value", (bool)value);
        else if (kind == "integer") writer.WriteNumber("value", Convert.ToInt64(value, CultureInfo.InvariantCulture));
        else
        {
            var text = kind == "string" ? (string)value : value.ToString();
            if (text?.Length > ParserProjection.StringUtf16CodeUnits) throw new ProjectionLimitException();
            writer.WriteString("value", text);
        }
        writer.WriteEndObject();
    }

    public static void WriteSpan(Utf8JsonWriter writer, int offset, int length, int line, int column, int sqlLength)
    {
        if (offset < 0 || length < 0 || (long)offset + length > sqlLength || line <= 0 || column <= 0)
        {
            writer.WriteNull("span");
            return;
        }
        writer.WriteStartObject("span");
        writer.WriteNumber("offset", offset);
        writer.WriteNumber("length", length);
        writer.WriteNumber("line", line);
        writer.WriteNumber("column", column);
        writer.WriteEndObject();
    }
}

internal readonly record struct Frame(TSqlFragment Node, int? ParentId, string? Edge, int Index, int Depth);
internal sealed class UnsupportedNodeException : Exception;
internal sealed class ProjectionLimitException : Exception;

internal sealed class CappedStream : MemoryStream
{
    public override void Write(byte[] buffer, int offset, int count)
    {
        Check(count);
        base.Write(buffer, offset, count);
    }
    public override void Write(ReadOnlySpan<byte> buffer)
    {
        Check(buffer.Length);
        base.Write(buffer);
    }
    public override void WriteByte(byte value)
    {
        Check(1);
        base.WriteByte(value);
    }
    private void Check(int count)
    {
        if (Length + count > ParserProjection.EnvelopeUtf8Bytes) throw new ProjectionLimitException();
    }
}
