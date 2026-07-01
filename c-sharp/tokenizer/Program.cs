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

public static partial class TsqlTokenizer
{
    [JSExport]
    public static string TokenizeJson(string sql)
    {
        var parser = new TSql160Parser(initialQuotedIdentifiers: false);

        try
        {
            var tokens = parser.GetTokenStream(
                new StringReader(sql),
                out IList<ParseError> errors
            );

            return WriteTokenizeResultJson(sql.Length, tokens, errors);
        }
        catch
        {
            return WriteExceptionResultJson();
        }
    }

    private static string WriteTokenizeResultJson(
        int sqlLength,
        IList<TSqlParserToken> tokens,
        IList<ParseError> errors
    )
    {
        using var output = new MemoryStream();
        using (var writer = new Utf8JsonWriter(output))
        {
            writer.WriteStartObject();
            writer.WriteBoolean("failed", errors.Count > 0);
            writer.WriteStartArray("tokens");

            for (var index = 0; index < tokens.Count; index += 1)
            {
                var token = tokens[index];
                if (token.TokenType == TSqlTokenType.EndOfFile)
                {
                    continue;
                }

                var offset = ClampOffset(token.Offset, sqlLength);

                writer.WriteStartObject();
                writer.WriteNumber("type", (int)token.TokenType);
                writer.WriteNumber("offset", offset);
                writer.WriteNumber("length", GetTokenLength(tokens, index, offset, sqlLength));
                writer.WriteNumber("line", Math.Max(0, token.Line));
                writer.WriteNumber("column", Math.Max(0, token.Column));
                writer.WriteEndObject();
            }

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
            writer.WriteStartArray("tokens");
            writer.WriteEndArray();
            writer.WriteStartArray("errors");
            WriteError(writer, 0, 0, 0, 0);
            writer.WriteEndArray();
            writer.WriteEndObject();
        }

        return Encoding.UTF8.GetString(output.GetBuffer(), 0, checked((int)output.Length));
    }

    private static int GetTokenLength(
        IList<TSqlParserToken> tokens,
        int tokenIndex,
        int offset,
        int sqlLength
    )
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
