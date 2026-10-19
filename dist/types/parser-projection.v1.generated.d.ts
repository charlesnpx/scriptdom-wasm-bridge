export declare const PARSER_ABI: {
    readonly parser: "TSql160Parser";
    readonly projectionVersion: 1;
    readonly manifestSha256: "99f8556c8d4f08a382aef3df1343f8d87e6f07dd1548ccb4170c88655402a41a";
    readonly policySha256: "e6300d157fdd1826d791e78b0dc3ae61ad724bdf29fcb960d71dcace3d81b678";
    readonly schemaSha256: "54bb9e670e352567868f4a38a3a77976578bcc40d55a76570b389c412a0e82ca";
};
export declare const PARSER_LIMITS: {
    readonly sqlUtf16CodeUnits: 2097152;
    readonly nodes: 100000;
    readonly traversalDepth: 1000;
    readonly parseErrors: 1000;
    readonly stringUtf16CodeUnits: 2097152;
    readonly envelopeUtf16CodeUnits: 16777216;
    readonly envelopeUtf8Bytes: 33554432;
};
export declare const PARSER_NODE_POLICIES: readonly [{
    readonly kind: "AIAnalyzeSentimentFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Input";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AIClassifyFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Input";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Labels";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AIExtractFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Input";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Labels";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AIFixGrammarFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Input";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AIGenerateChunksTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ChunkType";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Source";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AIGenerateEmbeddingsFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Input";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "ModelName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "OptionalParameters";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AIGenerateFixedChunksTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ChunkSize";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "ChunkType";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "EnableChunkSetId";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Overlap";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Source";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AIGenerateResponseFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PromptPart1";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "PromptPart2";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AISummarizeFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Input";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AITranslateFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Input";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Language";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AcceleratedDatabaseRecoveryDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AdHocDataSource";
    readonly edges: readonly [{
        readonly name: "InitString";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "ProviderName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AdHocTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataSource";
        readonly array: false;
        readonly kinds: readonly ["AdHocDataSource"];
    }, {
        readonly name: "Object";
        readonly array: false;
        readonly kinds: readonly ["SchemaObjectNameOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AddAlterFullTextIndexAction";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["FullTextIndexColumn"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithNoPopulation";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AddFileSpec";
    readonly edges: readonly [{
        readonly name: "File";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "FileName";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AddMemberAlterRoleAction";
    readonly edges: readonly [{
        readonly name: "Member";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AddSearchPropertyListAction";
    readonly edges: readonly [{
        readonly name: "Description";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Guid";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Id";
        readonly array: false;
        readonly kinds: readonly ["IntegerLiteral"];
    }, {
        readonly name: "PropertyName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AddSensitivityClassificationStatement";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["SensitivityClassificationOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AddSignatureStatement";
    readonly edges: readonly [{
        readonly name: "Cryptos";
        readonly array: true;
        readonly kinds: readonly ["CryptoMechanism"];
    }, {
        readonly name: "Element";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ElementKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Assembly", "Database", "NotSpecified", "Object"];
        readonly flags: false;
    }, {
        readonly name: "IsCounter";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlgorithmKeyOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Algorithm";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Aes128", "Aes192", "Aes256", "Des", "DesX", "None", "RC2", "RC4", "RC4_128", "Rsa1024", "Rsa2048", "Rsa3072", "Rsa4096", "Rsa512", "TripleDes", "TripleDes3Key"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Algorithm", "CreationDisposition", "IdentityValue", "KeySource", "ProviderKeyName"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterApplicationRoleStatement";
    readonly edges: readonly [{
        readonly name: "ApplicationRoleOptions";
        readonly array: true;
        readonly kinds: readonly ["ApplicationRoleOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterAssemblyStatement";
    readonly edges: readonly [{
        readonly name: "AddFiles";
        readonly array: true;
        readonly kinds: readonly ["AddFileSpec"];
    }, {
        readonly name: "DropFiles";
        readonly array: true;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AssemblyOption", "OnOffAssemblyOption", "PermissionSetAssemblyOption"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsDropAll";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterAsymmetricKeyStatement";
    readonly edges: readonly [{
        readonly name: "AttestedBy";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "DecryptionPassword";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "EncryptionPassword";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AttestedBy", "None", "RemoveAttestedOption", "RemovePrivateKey", "WithActiveForBeginDialog", "WithPrivateKey"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterAuthorizationStatement";
    readonly edges: readonly [{
        readonly name: "PrincipalName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SecurityTargetObject";
        readonly array: false;
        readonly kinds: readonly ["SecurityTargetObject"];
    }];
    readonly attributes: readonly [{
        readonly name: "ToSchemaOwner";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterAvailabilityGroupAction";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "ActionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Failover", "ForceFailoverAllowDataLoss", "Join", "Offline", "Online"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterAvailabilityGroupFailoverAction";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AlterAvailabilityGroupFailoverOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "ActionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Failover", "ForceFailoverAllowDataLoss", "Join", "Offline", "Online"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterAvailabilityGroupFailoverOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Target"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterAvailabilityGroupStatement";
    readonly edges: readonly [{
        readonly name: "Action";
        readonly array: false;
        readonly kinds: readonly ["AlterAvailabilityGroupAction", "AlterAvailabilityGroupFailoverAction"];
    }, {
        readonly name: "Databases";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["LiteralAvailabilityGroupOption"];
    }, {
        readonly name: "Replicas";
        readonly array: true;
        readonly kinds: readonly ["AvailabilityReplica"];
    }];
    readonly attributes: readonly [{
        readonly name: "AlterAvailabilityGroupStatementType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Action", "AddDatabase", "AddReplica", "ModifyReplica", "RemoveDatabase", "RemoveReplica", "Set"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterBrokerPriorityStatement";
    readonly edges: readonly [{
        readonly name: "BrokerPriorityParameters";
        readonly array: true;
        readonly kinds: readonly ["BrokerPriorityParameter"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterCertificateStatement";
    readonly edges: readonly [{
        readonly name: "AttestedBy";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "DecryptionPassword";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "EncryptionPassword";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PrivateKeyPath";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ActiveForBeginDialog";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AttestedBy", "None", "RemoveAttestedOption", "RemovePrivateKey", "WithActiveForBeginDialog", "WithPrivateKey"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterColumnAlterFullTextIndexAction";
    readonly edges: readonly [{
        readonly name: "Column";
        readonly array: false;
        readonly kinds: readonly ["FullTextIndexColumn"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithNoPopulation";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterColumnEncryptionKeyStatement";
    readonly edges: readonly [{
        readonly name: "ColumnEncryptionKeyValues";
        readonly array: true;
        readonly kinds: readonly ["ColumnEncryptionKeyValue"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "AlterType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Add", "Drop"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterCredentialStatement";
    readonly edges: readonly [{
        readonly name: "Identity";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Secret";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsDatabaseScoped";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterCryptographicProviderStatement";
    readonly edges: readonly [{
        readonly name: "File";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Option";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Disable", "Enable", "None"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterDatabaseAddFileGroupStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FileGroup";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "ContainsFileStream";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "ContainsMemoryOptimizedData";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseAddFileStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FileDeclarations";
        readonly array: true;
        readonly kinds: readonly ["FileDeclaration"];
    }, {
        readonly name: "FileGroup";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsLog";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseAuditSpecificationStatement";
    readonly edges: readonly [{
        readonly name: "AuditName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parts";
        readonly array: true;
        readonly kinds: readonly ["AuditSpecificationPart"];
    }, {
        readonly name: "SpecificationName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "AuditState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterDatabaseCollateStatement";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseEncryptionKeyStatement";
    readonly edges: readonly [{
        readonly name: "Encryptor";
        readonly array: false;
        readonly kinds: readonly ["CryptoMechanism"];
    }];
    readonly attributes: readonly [{
        readonly name: "Algorithm";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Aes128", "Aes192", "Aes256", "None", "TripleDes3Key"];
        readonly flags: false;
    }, {
        readonly name: "Regenerate";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseModifyFileGroupStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FileGroup";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "NewFileGroupName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Termination";
        readonly array: false;
        readonly kinds: readonly ["AlterDatabaseTermination"];
    }];
    readonly attributes: readonly [{
        readonly name: "MakeDefault";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "UpdatabilityOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AutogrowAllFiles", "AutogrowSingleFile", "None", "ReadOnly", "ReadOnlyOld", "ReadWrite", "ReadWriteOld"];
        readonly flags: false;
    }, {
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseModifyFileStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FileDeclaration";
        readonly array: false;
        readonly kinds: readonly ["FileDeclaration"];
    }];
    readonly attributes: readonly [{
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseModifyNameStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "NewDatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabasePerformCutoverStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseRebuildLogStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FileDeclaration";
        readonly array: false;
        readonly kinds: readonly ["FileDeclaration"];
    }];
    readonly attributes: readonly [{
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseRemoveFileGroupStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FileGroup";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseRemoveFileStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "File";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseScopedConfigurationClearStatement";
    readonly edges: readonly [{
        readonly name: "Option";
        readonly array: false;
        readonly kinds: readonly ["DatabaseConfigurationClearOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "Secondary";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseScopedConfigurationSetStatement";
    readonly edges: readonly [{
        readonly name: "Option";
        readonly array: false;
        readonly kinds: readonly ["DWCompatibilityLevelConfigurationOption", "DatabaseConfigurationSetOption", "GenericConfigurationOption", "MaxDopConfigurationOption", "OnOffPrimaryConfigurationOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "Secondary";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseSetStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AcceleratedDatabaseRecoveryDatabaseOption", "AutoCreateStatisticsDatabaseOption", "AutomaticTuningDatabaseOption", "CatalogCollationOption", "ChangeTrackingDatabaseOption", "ContainmentDatabaseOption", "CursorDefaultDatabaseOption", "DatabaseOption", "DelayedDurabilityDatabaseOption", "ElasticPoolSpecification", "FileStreamDatabaseOption", "HadrAvailabilityGroupDatabaseOption", "HadrDatabaseOption", "IdentifierDatabaseOption", "LedgerOption", "LiteralDatabaseOption", "MaxSizeDatabaseOption", "OnOffDatabaseOption", "OptimizedLockingDatabaseOption", "PageVerifyDatabaseOption", "ParameterizationDatabaseOption", "PartnerDatabaseOption", "QueryStoreDatabaseOption", "RecoveryDatabaseOption", "RemoteDataArchiveDatabaseOption", "TargetRecoveryTimeDatabaseOption", "WitnessDatabaseOption"];
    }, {
        readonly name: "Termination";
        readonly array: false;
        readonly kinds: readonly ["AlterDatabaseTermination"];
    }];
    readonly attributes: readonly [{
        readonly name: "UseCurrent";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "WithManualCutover";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterDatabaseTermination";
    readonly edges: readonly [{
        readonly name: "RollbackAfter";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ImmediateRollback";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "NoWait";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterEndpointStatement";
    readonly edges: readonly [{
        readonly name: "Affinity";
        readonly array: false;
        readonly kinds: readonly ["EndpointAffinity"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PayloadOptions";
        readonly array: true;
        readonly kinds: readonly ["AuthenticationPayloadOption", "CharacterSetPayloadOption", "EnabledDisabledPayloadOption", "EncryptionPayloadOption", "LiteralPayloadOption", "LoginTypePayloadOption", "RolePayloadOption", "SchemaPayloadOption", "SessionTimeoutPayloadOption", "SoapMethod", "WsdlPayloadOption"];
    }, {
        readonly name: "ProtocolOptions";
        readonly array: true;
        readonly kinds: readonly ["AuthenticationEndpointProtocolOption", "CompressionEndpointProtocolOption", "ListenerIPEndpointProtocolOption", "LiteralEndpointProtocolOption", "PortsEndpointProtocolOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "EndpointType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DatabaseMirroring", "NotSpecified", "ServiceBroker", "Soap", "TSql"];
        readonly flags: false;
    }, {
        readonly name: "Protocol";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Http", "None", "Tcp"];
        readonly flags: false;
    }, {
        readonly name: "State";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Disabled", "NotSpecified", "Started", "Stopped"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterEventSessionStatement";
    readonly edges: readonly [{
        readonly name: "DropEventDeclarations";
        readonly array: true;
        readonly kinds: readonly ["EventSessionObjectName"];
    }, {
        readonly name: "DropTargetDeclarations";
        readonly array: true;
        readonly kinds: readonly ["EventSessionObjectName"];
    }, {
        readonly name: "EventDeclarations";
        readonly array: true;
        readonly kinds: readonly ["EventDeclaration"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SessionOptions";
        readonly array: true;
        readonly kinds: readonly ["EventRetentionSessionOption", "LiteralSessionOption", "MaxDispatchLatencySessionOption", "MemoryPartitionSessionOption", "OnOffSessionOption"];
    }, {
        readonly name: "TargetDeclarations";
        readonly array: true;
        readonly kinds: readonly ["TargetDeclaration"];
    }];
    readonly attributes: readonly [{
        readonly name: "SessionScope";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Database", "Server"];
        readonly flags: false;
    }, {
        readonly name: "StatementType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AddEventDeclarationOptionalSessionOptions", "AddTargetDeclarationOptionalSessionOptions", "AlterStateIsStart", "AlterStateIsStop", "DropEventSpecificationOptionalSessionOptions", "DropTargetSpecificationOptionalSessionOptions", "RequiredSessionOptions", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterExternalDataSourceStatement";
    readonly edges: readonly [{
        readonly name: "ExternalDataSourceOptions";
        readonly array: true;
        readonly kinds: readonly ["ExternalDataSourceLiteralOrIdentifierOption"];
    }, {
        readonly name: "Location";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "DataSourceType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BLOB_STORAGE", "EXTERNAL_GENERICS", "HADOOP", "RDBMS", "SHARD_MAP_MANAGER"];
        readonly flags: false;
    }, {
        readonly name: "PreviousPushDownOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["OFF", "ON"];
        readonly flags: false;
    }, {
        readonly name: "PushdownOption";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["OFF", "ON"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterExternalFunctionStatement";
    readonly edges: readonly [{
        readonly name: "ExternalName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ProcedureParameter"];
    }, {
        readonly name: "ReturnType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterExternalLanguageStatement";
    readonly edges: readonly [{
        readonly name: "ExternalLanguageFiles";
        readonly array: true;
        readonly kinds: readonly ["ExternalLanguageFileOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Operation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Platform";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterExternalLibraryStatement";
    readonly edges: readonly [{
        readonly name: "ExternalLibraryFiles";
        readonly array: true;
        readonly kinds: readonly ["ExternalLibraryFileOption"];
    }, {
        readonly name: "Language";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterExternalModelStatement";
    readonly edges: readonly [{
        readonly name: "ApiFormat";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Credential";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "LocalRuntimePath";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Location";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "ModelName";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ModelType";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["EMBEDDINGS"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterExternalResourcePoolStatement";
    readonly edges: readonly [{
        readonly name: "ExternalResourcePoolParameters";
        readonly array: true;
        readonly kinds: readonly ["ExternalResourcePoolParameter"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterFederationStatement";
    readonly edges: readonly [{
        readonly name: "Boundary";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "DistributionName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DropHigh", "DropLow", "Split", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterFullTextCatalogStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["OnOffFullTextCatalogOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "Action";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AsDefault", "None", "Rebuild", "Reorganize"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterFullTextIndexStatement";
    readonly edges: readonly [{
        readonly name: "Action";
        readonly array: false;
        readonly kinds: readonly ["AddAlterFullTextIndexAction", "AlterColumnAlterFullTextIndexAction", "DropAlterFullTextIndexAction", "SetSearchPropertyListAlterFullTextIndexAction", "SetStopListAlterFullTextIndexAction", "SimpleAlterFullTextIndexAction"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterFullTextStopListStatement";
    readonly edges: readonly [{
        readonly name: "Action";
        readonly array: false;
        readonly kinds: readonly ["FullTextStopListAction"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterFunctionStatement";
    readonly edges: readonly [{
        readonly name: "MethodSpecifier";
        readonly array: false;
        readonly kinds: readonly ["MethodSpecifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ExecuteAsFunctionOption", "FunctionOption", "InlineFunctionOption"];
    }, {
        readonly name: "OrderHint";
        readonly array: false;
        readonly kinds: readonly ["OrderBulkInsertOption"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ProcedureParameter"];
    }, {
        readonly name: "ReturnType";
        readonly array: false;
        readonly kinds: readonly ["ScalarFunctionReturnType", "SelectFunctionReturnType", "TableValuedFunctionReturnType"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterIndexStatement";
    readonly edges: readonly [{
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Partition";
        readonly array: false;
        readonly kinds: readonly ["PartitionSpecifier"];
    }, {
        readonly name: "PromotedPaths";
        readonly array: true;
        readonly kinds: readonly ["SelectiveXmlIndexPromotedPath"];
    }, {
        readonly name: "XmlNamespaces";
        readonly array: false;
        readonly kinds: readonly ["XmlNamespaces"];
    }];
    readonly attributes: readonly [{
        readonly name: "All";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "AlterIndexType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Abort", "Disable", "Pause", "Rebuild", "Reorganize", "Resume", "Set", "UpdateSelectiveXmlPaths"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterLoginAddDropCredentialStatement";
    readonly edges: readonly [{
        readonly name: "CredentialName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsAdd";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterLoginEnableDisableStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsEnable";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterLoginOptionsStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterMasterKeyStatement";
    readonly edges: readonly [{
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Option";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AddEncryptionByPassword", "AddEncryptionByServiceMasterKey", "DropEncryptionByPassword", "DropEncryptionByServiceMasterKey", "ForceRegenerate", "None", "Regenerate"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterMessageTypeStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "XmlSchemaCollectionName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ValidationMethod";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Empty", "None", "NotSpecified", "ValidXml", "WellFormedXml"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterPartitionFunctionStatement";
    readonly edges: readonly [{
        readonly name: "Boundary";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsSplit";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterPartitionSchemeStatement";
    readonly edges: readonly [{
        readonly name: "FileGroup";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterProcedureStatement";
    readonly edges: readonly [{
        readonly name: "MethodSpecifier";
        readonly array: false;
        readonly kinds: readonly ["MethodSpecifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ExecuteAsProcedureOption", "ProcedureOption"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ProcedureParameter"];
    }, {
        readonly name: "ProcedureReference";
        readonly array: false;
        readonly kinds: readonly ["ProcedureReference"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterQueueStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "QueueOptions";
        readonly array: true;
        readonly kinds: readonly ["QueueExecuteAsOption", "QueueOption", "QueueProcedureOption", "QueueStateOption", "QueueValueOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterRemoteServiceBindingStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["OnOffRemoteServiceBindingOption", "UserRemoteServiceBindingOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterResourceGovernorStatement";
    readonly edges: readonly [{
        readonly name: "ClassifierFunction";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "Command";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ClassifierFunction", "Disable", "Reconfigure", "ResetStatistics", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterResourcePoolStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ResourcePoolParameters";
        readonly array: true;
        readonly kinds: readonly ["ResourcePoolParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterRoleStatement";
    readonly edges: readonly [{
        readonly name: "Action";
        readonly array: false;
        readonly kinds: readonly ["AddMemberAlterRoleAction", "DropMemberAlterRoleAction", "RenameAlterRoleAction"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterRouteStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "RouteOptions";
        readonly array: true;
        readonly kinds: readonly ["RouteOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterSchemaStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ObjectKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ApplicationRole", "Assembly", "AsymmetricKey", "AvailabilityGroup", "Certificate", "Contract", "Database", "Endpoint", "ExternalModel", "FullTextCatalog", "FullTextStopList", "Login", "MessageType", "NotSpecified", "Object", "RemoteServiceBinding", "Role", "Route", "Schema", "SearchPropertyList", "Server", "ServerRole", "Service", "SymmetricKey", "Type", "User", "XmlSchemaCollection"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterSearchPropertyListStatement";
    readonly edges: readonly [{
        readonly name: "Action";
        readonly array: false;
        readonly kinds: readonly ["AddSearchPropertyListAction", "DropSearchPropertyListAction"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterSecurityPolicyStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SecurityPolicyOptions";
        readonly array: true;
        readonly kinds: readonly ["SecurityPolicyOption"];
    }, {
        readonly name: "SecurityPredicateActions";
        readonly array: true;
        readonly kinds: readonly ["SecurityPredicateAction"];
    }];
    readonly attributes: readonly [{
        readonly name: "ActionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AlterPredicates", "AlterReplication", "AlterState", "Create"];
        readonly flags: false;
    }, {
        readonly name: "NotForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterSequenceStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SequenceOptions";
        readonly array: true;
        readonly kinds: readonly ["DataTypeSequenceOption", "ScalarExpressionSequenceOption", "SequenceOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterServerAuditSpecificationStatement";
    readonly edges: readonly [{
        readonly name: "AuditName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parts";
        readonly array: true;
        readonly kinds: readonly ["AuditSpecificationPart"];
    }, {
        readonly name: "SpecificationName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "AuditState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerAuditStatement";
    readonly edges: readonly [{
        readonly name: "AuditName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "AuditTarget";
        readonly array: false;
        readonly kinds: readonly ["AuditTarget"];
    }, {
        readonly name: "NewName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AuditGuidAuditOption", "OnFailureAuditOption", "OperatorAuditOption", "QueueDelayAuditOption", "StateAuditOption"];
    }, {
        readonly name: "PredicateExpression";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }];
    readonly attributes: readonly [{
        readonly name: "RemoveWhere";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationBufferPoolExtensionContainerOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    }, {
        readonly name: "Suboptions";
        readonly array: true;
        readonly kinds: readonly ["AlterServerConfigurationBufferPoolExtensionContainerOption", "AlterServerConfigurationBufferPoolExtensionOption", "AlterServerConfigurationBufferPoolExtensionSizeOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FileName", "None", "OnOff", "Size"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationBufferPoolExtensionOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FileName", "None", "OnOff", "Size"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationBufferPoolExtensionSizeOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FileName", "None", "OnOff", "Size"];
        readonly flags: false;
    }, {
        readonly name: "SizeUnit";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Bytes", "EB", "GB", "KB", "MB", "PB", "Percent", "TB", "Unspecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationDiagnosticsLogMaxSizeOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["MaxFiles", "MaxSize", "None", "OnOff", "Path"];
        readonly flags: false;
    }, {
        readonly name: "SizeUnit";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Bytes", "EB", "GB", "KB", "MB", "PB", "Percent", "TB", "Unspecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationDiagnosticsLogOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["MaxFiles", "MaxSize", "None", "OnOff", "Path"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationExternalAuthenticationContainerOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    }, {
        readonly name: "Suboptions";
        readonly array: true;
        readonly kinds: readonly ["AlterServerConfigurationExternalAuthenticationContainerOption", "AlterServerConfigurationExternalAuthenticationOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CredentialName", "None", "OnOff", "UseIdentity"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationExternalAuthenticationOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CredentialName", "None", "OnOff", "UseIdentity"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationFailoverClusterPropertyOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FailureConditionLevel", "HealthCheckTimeout", "None", "SqlDumperDumpFlags", "SqlDumperDumpPath", "SqlDumperDumpTimeout", "VerboseLogging"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationHadrClusterOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsLocal";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Context", "None"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationSetBufferPoolExtensionStatement";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AlterServerConfigurationBufferPoolExtensionContainerOption", "AlterServerConfigurationBufferPoolExtensionOption", "AlterServerConfigurationBufferPoolExtensionSizeOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterServerConfigurationSetDiagnosticsLogStatement";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AlterServerConfigurationDiagnosticsLogMaxSizeOption", "AlterServerConfigurationDiagnosticsLogOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterServerConfigurationSetExternalAuthenticationStatement";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AlterServerConfigurationExternalAuthenticationContainerOption", "AlterServerConfigurationExternalAuthenticationOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterServerConfigurationSetFailoverClusterPropertyStatement";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AlterServerConfigurationFailoverClusterPropertyOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterServerConfigurationSetHadrClusterStatement";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AlterServerConfigurationHadrClusterOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterServerConfigurationSetSoftNumaStatement";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AlterServerConfigurationSoftNumaOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterServerConfigurationSoftNumaOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["None", "OnOff"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerConfigurationStatement";
    readonly edges: readonly [{
        readonly name: "ProcessAffinityRanges";
        readonly array: true;
        readonly kinds: readonly ["ProcessAffinityRange"];
    }];
    readonly attributes: readonly [{
        readonly name: "ProcessAffinity";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Cpu", "CpuAuto", "NumaNode"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServerRoleStatement";
    readonly edges: readonly [{
        readonly name: "Action";
        readonly array: false;
        readonly kinds: readonly ["AddMemberAlterRoleAction", "DropMemberAlterRoleAction", "RenameAlterRoleAction"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterServiceMasterKeyStatement";
    readonly edges: readonly [{
        readonly name: "Account";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ForceRegenerate", "None", "Regenerate", "WithNewAccount", "WithOldAccount"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterServiceStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "QueueName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "ServiceContracts";
        readonly array: true;
        readonly kinds: readonly ["ServiceContract"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterSymmetricKeyStatement";
    readonly edges: readonly [{
        readonly name: "EncryptingMechanisms";
        readonly array: true;
        readonly kinds: readonly ["CryptoMechanism"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsAdd";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterTableAddClusterByStatement";
    readonly edges: readonly [{
        readonly name: "ClusterByOption";
        readonly array: false;
        readonly kinds: readonly ["ClusterByTableOption"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterTableAddTableElementStatement";
    readonly edges: readonly [{
        readonly name: "Definition";
        readonly array: false;
        readonly kinds: readonly ["TableDefinition"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ExistingRowsCheckEnforcement";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Check", "NoCheck", "NotSpecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterTableAlterColumnStatement";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ColumnIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "Encryption";
        readonly array: false;
        readonly kinds: readonly ["ColumnEncryptionDefinition"];
    }, {
        readonly name: "MaskingFunction";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "StorageOptions";
        readonly array: false;
        readonly kinds: readonly ["ColumnStorageOptions"];
    }];
    readonly attributes: readonly [{
        readonly name: "AlterTableAlterColumnOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AddHidden", "AddMaskingFunction", "AddNotForReplication", "AddPersisted", "AddRowGuidCol", "AddSparse", "DropHidden", "DropMaskingFunction", "DropNotForReplication", "DropPersisted", "DropRowGuidCol", "DropSparse", "Encryption", "NoOptionDefined", "NotNull", "Null"];
        readonly flags: false;
    }, {
        readonly name: "GeneratedAlways";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["RowEnd", "RowStart", "SequenceNumberEnd", "SequenceNumberStart", "TransactionIdEnd", "TransactionIdStart", "UserIdEnd", "UserIdStart", "UserNameEnd", "UserNameStart"];
        readonly flags: false;
    }, {
        readonly name: "IsHidden";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsMasked";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterTableAlterIndexStatement";
    readonly edges: readonly [{
        readonly name: "IndexIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "AlterIndexType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Abort", "Disable", "Pause", "Rebuild", "Reorganize", "Resume", "Set", "UpdateSelectiveXmlPaths"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterTableAlterPartitionStatement";
    readonly edges: readonly [{
        readonly name: "BoundaryValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsSplit";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterTableChangeTrackingModificationStatement";
    readonly edges: readonly [{
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsEnable";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "TrackColumnsUpdated";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterTableConstraintModificationStatement";
    readonly edges: readonly [{
        readonly name: "ConstraintNames";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "All";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "ConstraintEnforcement";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Check", "NoCheck", "NotSpecified"];
        readonly flags: false;
    }, {
        readonly name: "ExistingRowsCheckEnforcement";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Check", "NoCheck", "NotSpecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterTableDropTableElement";
    readonly edges: readonly [{
        readonly name: "DropClusteredConstraintOptions";
        readonly array: true;
        readonly kinds: readonly ["DropClusteredConstraintMoveOption", "DropClusteredConstraintStateOption", "DropClusteredConstraintValueOption", "DropClusteredConstraintWaitAtLowPriorityLockOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "TableElementType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Column", "Constraint", "Index", "NotSpecified", "Period"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterTableDropTableElementStatement";
    readonly edges: readonly [{
        readonly name: "AlterTableDropTableElements";
        readonly array: true;
        readonly kinds: readonly ["AlterTableDropTableElement"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterTableFileTableNamespaceStatement";
    readonly edges: readonly [{
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsEnable";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterTableRebuildStatement";
    readonly edges: readonly [{
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "Partition";
        readonly array: false;
        readonly kinds: readonly ["PartitionSpecifier"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterTableSetStatement";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ClusterByTableOption", "DataRetentionTableOption", "DurabilityTableOption", "FileStreamOnTableOption", "FileTableCollateFileNameTableOption", "FileTableConstraintNameTableOption", "FileTableDirectoryTableOption", "LedgerTableOption", "LedgerViewOption", "LocationOption", "LockEscalationTableOption", "MemoryOptimizedTableOption", "RemoteDataArchiveAlterTableOption", "RemoteDataArchiveTableOption", "SystemVersioningTableOption", "TableDataCompressionOption", "TableDistributionOption", "TableIndexOption", "TablePartitionOption", "TableXmlCompressionOption"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterTableSwitchStatement";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["LowPriorityLockWaitTableSwitchOption", "TruncateTargetTableSwitchOption"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SourcePartitionNumber";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "TargetPartitionNumber";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "TargetTable";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterTableTriggerModificationStatement";
    readonly edges: readonly [{
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "TriggerNames";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "All";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "TriggerEnforcement";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Disable", "Enable"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AlterTriggerStatement";
    readonly edges: readonly [{
        readonly name: "MethodSpecifier";
        readonly array: false;
        readonly kinds: readonly ["MethodSpecifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ExecuteAsTriggerOption", "TriggerOption"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }, {
        readonly name: "TriggerActions";
        readonly array: true;
        readonly kinds: readonly ["TriggerAction"];
    }, {
        readonly name: "TriggerObject";
        readonly array: false;
        readonly kinds: readonly ["TriggerObject"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsNotForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "TriggerType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["After", "For", "InsteadOf", "Unknown"];
        readonly flags: false;
    }, {
        readonly name: "WithAppend";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterUserStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "UserOptions";
        readonly array: true;
        readonly kinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterViewStatement";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SelectStatement";
        readonly array: false;
        readonly kinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    }, {
        readonly name: "ViewOptions";
        readonly array: true;
        readonly kinds: readonly ["ViewDistributionOption", "ViewForAppendOption", "ViewOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsDisable";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsMaterialized";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsRebuild";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "WithCheckOption";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AlterWorkloadGroupStatement";
    readonly edges: readonly [{
        readonly name: "ExternalPoolName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PoolName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "WorkloadGroupParameters";
        readonly array: true;
        readonly kinds: readonly ["WorkloadGroupImportanceParameter", "WorkloadGroupResourceParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AlterXmlSchemaCollectionStatement";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ApplicationRoleOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DefaultSchema", "Login", "Name", "Password"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AssemblyEncryptionSource";
    readonly edges: readonly [{
        readonly name: "Assembly";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AssemblyName";
    readonly edges: readonly [{
        readonly name: "ClassName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AssemblyOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["PermissionSet", "UncheckedData", "Visibility"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AssignmentSetClause";
    readonly edges: readonly [{
        readonly name: "Column";
        readonly array: false;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "NewValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Variable";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "AssignmentKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AddEquals", "BitwiseAndEquals", "BitwiseOrEquals", "BitwiseXorEquals", "ConcatEquals", "DivideEquals", "Equals", "ModEquals", "MultiplyEquals", "SubtractEquals"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AsymmetricKeyCreateLoginSource";
    readonly edges: readonly [{
        readonly name: "Credential";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Key";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AtTimeZoneCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DateValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "TimeZone";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AuditActionGroupReference";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Group";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ApplicationRoleChangePassword", "AuditChange", "BackupRestore", "BatchCompletedGroup", "BatchStartedGroup", "BrokerLogin", "DatabaseChange", "DatabaseLogoutGroup", "DatabaseMirroringLogin", "DatabaseObjectAccess", "DatabaseObjectChange", "DatabaseObjectOwnershipChange", "DatabaseObjectPermissionChange", "DatabaseOperation", "DatabaseOwnershipChange", "DatabasePermissionChange", "DatabasePrincipalChange", "DatabasePrincipalImpersonation", "DatabaseRoleMemberChange", "Dbcc", "FailedDatabaseAuthenticationGroup", "FailedLogin", "LoginChangePassword", "Logout", "None", "SchemaObjectAccess", "SchemaObjectChange", "SchemaObjectOwnershipChange", "SchemaObjectPermissionChange", "ServerObjectChange", "ServerObjectOwnershipChange", "ServerObjectPermissionChange", "ServerOperation", "ServerPermissionChange", "ServerPrincipalChange", "ServerPrincipalImpersonation", "ServerRoleMemberChange", "ServerStateChange", "StatementRollback", "SuccessfulDatabaseAuthenticationGroup", "SuccessfulLogin", "TraceChange", "TransactionBegin", "TransactionCommit", "TransactionGroup", "TransactionRollback", "UserChangePasswordGroup", "UserDefinedAuditGroup"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AuditActionSpecification";
    readonly edges: readonly [{
        readonly name: "Actions";
        readonly array: true;
        readonly kinds: readonly ["DatabaseAuditAction"];
    }, {
        readonly name: "Principals";
        readonly array: true;
        readonly kinds: readonly ["SecurityPrincipal"];
    }, {
        readonly name: "TargetObject";
        readonly array: false;
        readonly kinds: readonly ["SecurityTargetObject"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "AuditGuidAuditOption";
    readonly edges: readonly [{
        readonly name: "Guid";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AuditGuid", "OnFailure", "OperatorAudit", "QueueDelay", "State"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AuditSpecificationPart";
    readonly edges: readonly [{
        readonly name: "Details";
        readonly array: false;
        readonly kinds: readonly ["AuditActionGroupReference", "AuditActionSpecification"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsDrop";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AuditTarget";
    readonly edges: readonly [{
        readonly name: "TargetOptions";
        readonly array: true;
        readonly kinds: readonly ["LiteralAuditTargetOption", "MaxRolloverFilesAuditTargetOption", "MaxSizeAuditTargetOption", "OnOffAuditTargetOption", "RetentionDaysAuditTargetOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "TargetKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ApplicationLog", "ExternalMonitor", "File", "SecurityLog", "Url"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AuthenticationEndpointProtocolOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "AuthenticationTypes";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Basic", "Digest", "Integrated", "Kerberos", "None", "Ntlm"];
        readonly flags: true;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["HttpAuthentication", "HttpAuthenticationRealm", "HttpClearPort", "HttpCompression", "HttpDefaultLogonDomain", "HttpOptions", "HttpPath", "HttpPorts", "HttpSite", "HttpSslPort", "None", "TcpListenerIP", "TcpListenerPort", "TcpOptions"];
        readonly flags: true;
    }];
}, {
    readonly kind: "AuthenticationPayloadOption";
    readonly edges: readonly [{
        readonly name: "Certificate";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }, {
        readonly name: "Protocol";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSpecified", "Windows", "WindowsKerberos", "WindowsNegotiate", "WindowsNtlm"];
        readonly flags: false;
    }, {
        readonly name: "TryCertificateFirst";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AutoCleanupChangeTrackingOptionDetail";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsOn";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "AutoCreateStatisticsDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "HasIncremental";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IncrementalState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AutomaticTuningCreateIndexOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Create_Index", "Drop_Index", "Force_Last_Good_Plan", "Maintain_Index"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Default", "Off", "On"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AutomaticTuningDatabaseOption";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AutomaticTuningCreateIndexOption", "AutomaticTuningDropIndexOption", "AutomaticTuningForceLastGoodPlanOption", "AutomaticTuningMaintainIndexOption", "AutomaticTuningOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "AutomaticTuningState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Auto", "Custom", "Inherit", "NotSet"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AutomaticTuningDropIndexOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Create_Index", "Drop_Index", "Force_Last_Good_Plan", "Maintain_Index"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Default", "Off", "On"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AutomaticTuningForceLastGoodPlanOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Create_Index", "Drop_Index", "Force_Last_Good_Plan", "Maintain_Index"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Default", "Off", "On"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AutomaticTuningMaintainIndexOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Create_Index", "Drop_Index", "Force_Last_Good_Plan", "Maintain_Index"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Default", "Off", "On"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AutomaticTuningOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Create_Index", "Drop_Index", "Force_Last_Good_Plan", "Maintain_Index"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Default", "Off", "On"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AvailabilityModeReplicaOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ApplyDelay", "AvailabilityMode", "EndpointUrl", "FailoverMode", "PrimaryRole", "SecondaryRole", "SessionTimeout"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AsynchronousCommit", "SynchronousCommit"];
        readonly flags: false;
    }];
}, {
    readonly kind: "AvailabilityReplica";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AvailabilityModeReplicaOption", "FailoverModeReplicaOption", "LiteralReplicaOption", "PrimaryRoleReplicaOption", "SecondaryRoleReplicaOption"];
    }, {
        readonly name: "ServerName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BackupCertificateStatement";
    readonly edges: readonly [{
        readonly name: "DecryptionPassword";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "EncryptionPassword";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "File";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PrivateKeyPath";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ActiveForBeginDialog";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BackupDatabaseStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "Devices";
        readonly array: true;
        readonly kinds: readonly ["DeviceInfo"];
    }, {
        readonly name: "Files";
        readonly array: true;
        readonly kinds: readonly ["BackupRestoreFileInfo"];
    }, {
        readonly name: "MirrorToClauses";
        readonly array: true;
        readonly kinds: readonly ["MirrorToClause"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["BackupEncryptionOption", "BackupOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BackupEncryptionOption";
    readonly edges: readonly [{
        readonly name: "Encryptor";
        readonly array: false;
        readonly kinds: readonly ["CryptoMechanism"];
    }, {
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "Algorithm";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Aes128", "Aes192", "Aes256", "Des", "DesX", "None", "RC2", "RC4", "RC4_128", "Rsa1024", "Rsa2048", "Rsa3072", "Rsa4096", "Rsa512", "TripleDes", "TripleDes3Key"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BlockSize", "BufferCount", "Checksum", "Compression", "ContinueAfterError", "CopyOnly", "Description", "Differential", "Encryption", "EnhancedIntegrity", "ExpireDate", "Format", "Init", "MaxTransferSize", "MediaDescription", "MediaName", "MediaPassword", "Name", "NoChecksum", "NoCompression", "NoFormat", "NoInit", "NoLog", "NoRecovery", "NoRewind", "NoSkip", "NoTruncate", "NoUnload", "None", "Password", "Restart", "RetainDays", "Rewind", "Skip", "Snapshot", "Standby", "Stats", "StopOnError", "TruncateOnly", "Unload"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BackupMasterKeyStatement";
    readonly edges: readonly [{
        readonly name: "File";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BackupOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BlockSize", "BufferCount", "Checksum", "Compression", "ContinueAfterError", "CopyOnly", "Description", "Differential", "Encryption", "EnhancedIntegrity", "ExpireDate", "Format", "Init", "MaxTransferSize", "MediaDescription", "MediaName", "MediaPassword", "Name", "NoChecksum", "NoCompression", "NoFormat", "NoInit", "NoLog", "NoRecovery", "NoRewind", "NoSkip", "NoTruncate", "NoUnload", "None", "Password", "Restart", "RetainDays", "Rewind", "Skip", "Snapshot", "Standby", "Stats", "StopOnError", "TruncateOnly", "Unload"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BackupRestoreFileInfo";
    readonly edges: readonly [{
        readonly name: "Items";
        readonly array: true;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ItemKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FileGroups", "Files", "None", "Page", "ReadWriteFileGroups"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BackupServiceMasterKeyStatement";
    readonly edges: readonly [{
        readonly name: "File";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BackupTransactionLogStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "Devices";
        readonly array: true;
        readonly kinds: readonly ["DeviceInfo"];
    }, {
        readonly name: "MirrorToClauses";
        readonly array: true;
        readonly kinds: readonly ["MirrorToClause"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["BackupEncryptionOption", "BackupOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BackwardsCompatibleDropIndexClause";
    readonly edges: readonly [{
        readonly name: "Index";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BeginConversationTimerStatement";
    readonly edges: readonly [{
        readonly name: "Handle";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Timeout";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BeginDialogStatement";
    readonly edges: readonly [{
        readonly name: "ContractName";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "Handle";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }, {
        readonly name: "InitiatorServiceName";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "InstanceSpec";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["OnOffDialogOption", "ScalarExpressionDialogOption"];
    }, {
        readonly name: "TargetServiceName";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsConversation";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "BeginEndAtomicBlockStatement";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["IdentifierAtomicBlockOption", "LiteralAtomicBlockOption", "OnOffAtomicBlockOption"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BeginEndBlockStatement";
    readonly edges: readonly [{
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BeginTransactionStatement";
    readonly edges: readonly [{
        readonly name: "MarkDescription";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "Distributed";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "MarkDefined";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "BinaryExpression";
    readonly edges: readonly [{
        readonly name: "FirstExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SecondExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "BinaryExpressionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Add", "BitwiseAnd", "BitwiseOr", "BitwiseXor", "Concat", "Divide", "LeftShift", "Modulo", "Multiply", "RightShift", "Subtract"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BinaryLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsLargeObject";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "BinaryQueryExpression";
    readonly edges: readonly [{
        readonly name: "FirstQueryExpression";
        readonly array: false;
        readonly kinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    }, {
        readonly name: "ForClause";
        readonly array: false;
        readonly kinds: readonly ["BrowseForClause", "JsonForClause", "JsonForClauseOption", "ReadOnlyForClause", "UpdateForClause", "XmlForClause", "XmlForClauseOption"];
    }, {
        readonly name: "OffsetClause";
        readonly array: false;
        readonly kinds: readonly ["OffsetClause"];
    }, {
        readonly name: "OrderByClause";
        readonly array: false;
        readonly kinds: readonly ["OrderByClause"];
    }, {
        readonly name: "SecondQueryExpression";
        readonly array: false;
        readonly kinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    }];
    readonly attributes: readonly [{
        readonly name: "All";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "BinaryQueryExpressionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Except", "Intersect", "Union"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BooleanBinaryExpression";
    readonly edges: readonly [{
        readonly name: "FirstExpression";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "SecondExpression";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }];
    readonly attributes: readonly [{
        readonly name: "BinaryExpressionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["And", "Or"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BooleanComparisonExpression";
    readonly edges: readonly [{
        readonly name: "FirstExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SecondExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ComparisonType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Equals", "GreaterThan", "GreaterThanOrEqualTo", "IsDistinctFrom", "IsNotDistinctFrom", "LeftOuterJoin", "LessThan", "LessThanOrEqualTo", "NotEqualToBrackets", "NotEqualToExclamation", "NotGreaterThan", "NotLessThan", "NotLike", "RightOuterJoin"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BooleanExpressionSnippet";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Script";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "BooleanIsNullExpression";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsNot";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "BooleanNotExpression";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BooleanParenthesisExpression";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BooleanTernaryExpression";
    readonly edges: readonly [{
        readonly name: "FirstExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SecondExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "ThirdExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "TernaryExpressionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Between", "NotBetween"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BoundingBoxParameter";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "Parameter";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["None", "XMax", "XMin", "YMax", "YMin"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BoundingBoxSpatialIndexOption";
    readonly edges: readonly [{
        readonly name: "BoundingBoxParameters";
        readonly array: true;
        readonly kinds: readonly ["BoundingBoxParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BreakStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "BrokerPriorityParameter";
    readonly edges: readonly [{
        readonly name: "ParameterValue";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsDefaultOrAny";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Any", "Default", "None"];
        readonly flags: false;
    }, {
        readonly name: "ParameterType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ContractName", "LocalServiceName", "PriorityLevel", "RemoteServiceName", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BrowseForClause";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "BuiltInFunctionTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "BulkInsertOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BatchSize", "CheckConstraints", "CodePage", "DataCompression", "DataFileFormat", "DataFileType", "DataSource", "ErrorDataSource", "ErrorFile", "EscapeChar", "FieldQuote", "FieldTerminator", "FireTriggers", "FirstRow", "FormatDataSource", "FormatFile", "HeaderRow", "IncludeHidden", "KeepIdentity", "KeepNulls", "KilobytesPerBatch", "LastRow", "MaxErrors", "NoTriggers", "None", "Order", "ParserVersion", "RowTerminator", "RowsPerBatch", "RowsetOptions", "SingleBlob", "SingleClob", "SingleNClob", "TabLock"];
        readonly flags: false;
    }];
}, {
    readonly kind: "BulkInsertStatement";
    readonly edges: readonly [{
        readonly name: "From";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["BulkInsertOption", "LiteralBulkInsertOption", "OrderBulkInsertOption"];
    }, {
        readonly name: "To";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "BulkOpenRowset";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataFiles";
        readonly array: true;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["BulkInsertOption", "LiteralBulkInsertOption", "OrderBulkInsertOption"];
    }, {
        readonly name: "WithColumns";
        readonly array: true;
        readonly kinds: readonly ["OpenRowsetColumnDefinition"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CastCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "Parameter";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CatalogCollationOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "CatalogCollation";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["Database_Default", "Latin1_General_100_CI_AS_KS_WS_SC", "SQL_Latin1_General_CP1_CI_AS"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CellsPerObjectSpatialIndexOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CertificateCreateLoginSource";
    readonly edges: readonly [{
        readonly name: "Certificate";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Credential";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CertificateOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ExpiryDate", "None", "StartDate", "Subject"];
        readonly flags: true;
    }];
}, {
    readonly kind: "ChangeRetentionChangeTrackingOptionDetail";
    readonly edges: readonly [{
        readonly name: "RetentionPeriod";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Unit";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Days", "Hours", "Minutes", "Seconds"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ChangeTableChangesTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SinceVersion";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "Target";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "ForceSeek";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ChangeTableVersionTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PrimaryKeyColumns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PrimaryKeyValues";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Target";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "ForceSeek";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ChangeTrackingDatabaseOption";
    readonly edges: readonly [{
        readonly name: "Details";
        readonly array: true;
        readonly kinds: readonly ["AutoCleanupChangeTrackingOptionDetail", "ChangeRetentionChangeTrackingOptionDetail"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ChangeTrackingFullTextIndexOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ChangeTracking", "SearchPropertyList", "StopList"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Auto", "Manual", "NotSpecified", "Off", "OffNoPopulation"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CharacterSetPayloadOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsSql";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }];
}, {
    readonly kind: "CheckConstraintDefinition";
    readonly edges: readonly [{
        readonly name: "CheckCondition";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "ConstraintIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "NotForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CheckpointStatement";
    readonly edges: readonly [{
        readonly name: "Duration";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ChildObjectName";
    readonly edges: readonly [{
        readonly name: "BaseIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ChildIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DatabaseIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Identifiers";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SchemaIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ServerIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Count";
        readonly kind: "integer";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ClassifierEndTimeOption";
    readonly edges: readonly [{
        readonly name: "Time";
        readonly array: false;
        readonly kinds: readonly ["WlmTimeLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EndTime", "Importance", "MemberName", "StartTime", "WlmContext", "WlmLabel", "WorkloadGroup"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ClassifierImportanceOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Importance";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Above_Normal", "Below_Normal", "High", "Low", "Medium", "Normal", "Unknown"];
        readonly flags: false;
    }, {
        readonly name: "OptionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EndTime", "Importance", "MemberName", "StartTime", "WlmContext", "WlmLabel", "WorkloadGroup"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ClassifierMemberNameOption";
    readonly edges: readonly [{
        readonly name: "MemberName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EndTime", "Importance", "MemberName", "StartTime", "WlmContext", "WlmLabel", "WorkloadGroup"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ClassifierStartTimeOption";
    readonly edges: readonly [{
        readonly name: "Time";
        readonly array: false;
        readonly kinds: readonly ["WlmTimeLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EndTime", "Importance", "MemberName", "StartTime", "WlmContext", "WlmLabel", "WorkloadGroup"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ClassifierWlmContextOption";
    readonly edges: readonly [{
        readonly name: "WlmContext";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EndTime", "Importance", "MemberName", "StartTime", "WlmContext", "WlmLabel", "WorkloadGroup"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ClassifierWlmLabelOption";
    readonly edges: readonly [{
        readonly name: "WlmLabel";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EndTime", "Importance", "MemberName", "StartTime", "WlmContext", "WlmLabel", "WorkloadGroup"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ClassifierWorkloadGroupOption";
    readonly edges: readonly [{
        readonly name: "WorkloadGroupName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EndTime", "Importance", "MemberName", "StartTime", "WlmContext", "WlmLabel", "WorkloadGroup"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CloseCursorStatement";
    readonly edges: readonly [{
        readonly name: "Cursor";
        readonly array: false;
        readonly kinds: readonly ["CursorId"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CloseMasterKeyStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "CloseSymmetricKeyStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "All";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ClusterByTableOption";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CoalesceExpression";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Expressions";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ColumnDefinition";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ColumnIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ComputedColumnExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Constraints";
        readonly array: true;
        readonly kinds: readonly ["CheckConstraintDefinition", "DefaultConstraintDefinition", "ForeignKeyConstraintDefinition", "GraphConnectionConstraintDefinition", "NullableConstraintDefinition", "UniqueConstraintDefinition"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "DefaultConstraint";
        readonly array: false;
        readonly kinds: readonly ["DefaultConstraintDefinition"];
    }, {
        readonly name: "Encryption";
        readonly array: false;
        readonly kinds: readonly ["ColumnEncryptionDefinition"];
    }, {
        readonly name: "IdentityOptions";
        readonly array: false;
        readonly kinds: readonly ["IdentityOptions"];
    }, {
        readonly name: "Index";
        readonly array: false;
        readonly kinds: readonly ["IndexDefinition"];
    }, {
        readonly name: "MaskingFunction";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "StorageOptions";
        readonly array: false;
        readonly kinds: readonly ["ColumnStorageOptions"];
    }];
    readonly attributes: readonly [{
        readonly name: "GeneratedAlways";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["RowEnd", "RowStart", "SequenceNumberEnd", "SequenceNumberStart", "TransactionIdEnd", "TransactionIdStart", "UserIdEnd", "UserIdStart", "UserNameEnd", "UserNameStart"];
        readonly flags: false;
    }, {
        readonly name: "IsHidden";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsMasked";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsPersisted";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsRowGuidCol";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ColumnDefinitionBase";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ColumnIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ColumnEncryptionAlgorithmNameParameter";
    readonly edges: readonly [{
        readonly name: "Algorithm";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ColumnMasterKeyName", "EncryptedValue", "EncryptionAlgorithmName"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ColumnEncryptionAlgorithmParameter";
    readonly edges: readonly [{
        readonly name: "EncryptionAlgorithm";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Algorithm", "ColumnEncryptionKey", "EncryptionType"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ColumnEncryptionDefinition";
    readonly edges: readonly [{
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ColumnEncryptionAlgorithmParameter", "ColumnEncryptionKeyNameParameter", "ColumnEncryptionTypeParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ColumnEncryptionKeyNameParameter";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Algorithm", "ColumnEncryptionKey", "EncryptionType"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ColumnEncryptionKeyValue";
    readonly edges: readonly [{
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ColumnEncryptionAlgorithmNameParameter", "ColumnMasterKeyNameParameter", "EncryptedValueParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ColumnEncryptionTypeParameter";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "EncryptionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Deterministic", "Randomized"];
        readonly flags: false;
    }, {
        readonly name: "ParameterKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Algorithm", "ColumnEncryptionKey", "EncryptionType"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ColumnMasterKeyEnclaveComputationsParameter";
    readonly edges: readonly [{
        readonly name: "Signature";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowEnclaveComputations", "KeyPath", "KeyStoreProviderName", "Signature"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ColumnMasterKeyNameParameter";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ColumnMasterKeyName", "EncryptedValue", "EncryptionAlgorithmName"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ColumnMasterKeyPathParameter";
    readonly edges: readonly [{
        readonly name: "Path";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowEnclaveComputations", "KeyPath", "KeyStoreProviderName", "Signature"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ColumnMasterKeyStoreProviderNameParameter";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowEnclaveComputations", "KeyPath", "KeyStoreProviderName", "Signature"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ColumnReferenceExpression";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "MultiPartIdentifier";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ColumnType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["IdentityCol", "PseudoColumnAction", "PseudoColumnCuid", "PseudoColumnGraphEdgeId", "PseudoColumnGraphFromId", "PseudoColumnGraphNodeId", "PseudoColumnGraphToId", "PseudoColumnIdentity", "PseudoColumnRowGuid", "Regular", "RowGuidCol", "Wildcard"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ColumnStorageOptions";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsFileStream";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "SparseOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ColumnSetForAllSparseColumns", "None", "Sparse"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ColumnWithSortOrder";
    readonly edges: readonly [{
        readonly name: "Column";
        readonly array: false;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "SortOrder";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Ascending", "Descending", "NotSpecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CommandSecurityElement80";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "All";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "CommandOptions";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BackupDatabase", "BackupLog", "CreateDatabase", "CreateDefault", "CreateFunction", "CreateProcedure", "CreateRule", "CreateTable", "CreateView", "None"];
        readonly flags: true;
    }];
}, {
    readonly kind: "CommitTransactionStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "DelayedDurabilityOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CommonTableExpression";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ExpressionName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "QueryExpression";
        readonly array: false;
        readonly kinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    }, {
        readonly name: "WithCtesAndXmlNamespaces";
        readonly array: false;
        readonly kinds: readonly ["WithCtesAndXmlNamespaces"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CompositeGroupingSpecification";
    readonly edges: readonly [{
        readonly name: "Items";
        readonly array: true;
        readonly kinds: readonly ["CompositeGroupingSpecification", "CubeGroupingSpecification", "ExpressionGroupingSpecification", "GrandTotalGroupingSpecification", "GroupingSetsGroupingSpecification", "RollupGroupingSpecification"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CompressionDelayIndexOption";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "TimeUnit";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Minute", "Minutes", "Unitless"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CompressionEndpointProtocolOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsEnabled";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["HttpAuthentication", "HttpAuthenticationRealm", "HttpClearPort", "HttpCompression", "HttpDefaultLogonDomain", "HttpOptions", "HttpPath", "HttpPorts", "HttpSite", "HttpSslPort", "None", "TcpListenerIP", "TcpListenerPort", "TcpOptions"];
        readonly flags: true;
    }];
}, {
    readonly kind: "CompressionPartitionRange";
    readonly edges: readonly [{
        readonly name: "From";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "To";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ComputeClause";
    readonly edges: readonly [{
        readonly name: "ByExpressions";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "ComputeFunctions";
        readonly array: true;
        readonly kinds: readonly ["ComputeFunction"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ComputeFunction";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ComputeFunctionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Avg", "ChecksumAgg", "Count", "CountBig", "Max", "Min", "ModularSum", "NotSpecified", "Stdev", "Stdevp", "Sum", "Var", "Varp"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ContainmentDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["None", "Partial"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ContinueStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "ContractMessage";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "SentBy";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Any", "Initiator", "None", "Target"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ConvertCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "Parameter";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Style";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CopyColumnOption";
    readonly edges: readonly [{
        readonly name: "ColumnName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DefaultValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "FieldNumber";
        readonly array: false;
        readonly kinds: readonly ["IntegerLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CopyCredentialOption";
    readonly edges: readonly [{
        readonly name: "Identity";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Secret";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CopyOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["CopyColumnOption", "CopyCredentialOption", "ListTypeCopyOption", "SingleValueTypeCopyOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ColumnOptions", "Compression", "Credential", "DateFormat", "Encoding", "ErrorFile", "ErrorFileCredential", "FieldQuote", "FieldTerminator", "File_Format", "File_Type", "FirstRow", "Identity_Insert", "MaxErrors", "RowTerminator", "0"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CopyStatement";
    readonly edges: readonly [{
        readonly name: "From";
        readonly array: true;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Into";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "OptimizerHints";
        readonly array: true;
        readonly kinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["CopyOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateAggregateStatement";
    readonly edges: readonly [{
        readonly name: "AssemblyName";
        readonly array: false;
        readonly kinds: readonly ["AssemblyName"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ProcedureParameter"];
    }, {
        readonly name: "ReturnType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateApplicationRoleStatement";
    readonly edges: readonly [{
        readonly name: "ApplicationRoleOptions";
        readonly array: true;
        readonly kinds: readonly ["ApplicationRoleOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateAssemblyStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AssemblyOption", "OnOffAssemblyOption", "PermissionSetAssemblyOption"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateAsymmetricKeyStatement";
    readonly edges: readonly [{
        readonly name: "KeySource";
        readonly array: false;
        readonly kinds: readonly ["AssemblyEncryptionSource", "FileEncryptionSource", "ProviderEncryptionSource"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "EncryptionAlgorithm";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Aes128", "Aes192", "Aes256", "Des", "DesX", "None", "RC2", "RC4", "RC4_128", "Rsa1024", "Rsa2048", "Rsa3072", "Rsa4096", "Rsa512", "TripleDes", "TripleDes3Key"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateAvailabilityGroupStatement";
    readonly edges: readonly [{
        readonly name: "Databases";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["LiteralAvailabilityGroupOption"];
    }, {
        readonly name: "Replicas";
        readonly array: true;
        readonly kinds: readonly ["AvailabilityReplica"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateBrokerPriorityStatement";
    readonly edges: readonly [{
        readonly name: "BrokerPriorityParameters";
        readonly array: true;
        readonly kinds: readonly ["BrokerPriorityParameter"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateCertificateStatement";
    readonly edges: readonly [{
        readonly name: "CertificateOptions";
        readonly array: true;
        readonly kinds: readonly ["CertificateOption"];
    }, {
        readonly name: "CertificateSource";
        readonly array: false;
        readonly kinds: readonly ["AssemblyEncryptionSource", "FileEncryptionSource", "ProviderEncryptionSource"];
    }, {
        readonly name: "DecryptionPassword";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "EncryptionPassword";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PrivateKeyPath";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ActiveForBeginDialog";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateColumnEncryptionKeyStatement";
    readonly edges: readonly [{
        readonly name: "ColumnEncryptionKeyValues";
        readonly array: true;
        readonly kinds: readonly ["ColumnEncryptionKeyValue"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateColumnMasterKeyStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ColumnMasterKeyEnclaveComputationsParameter", "ColumnMasterKeyPathParameter", "ColumnMasterKeyStoreProviderNameParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateColumnStoreIndexStatement";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "FilterPredicate";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnFileGroupOrPartitionScheme";
        readonly array: false;
        readonly kinds: readonly ["FileGroupOrPartitionScheme"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "OrderedColumns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "Clustered";
        readonly kind: "boolean";
        readonly nullable: true;
    }];
}, {
    readonly kind: "CreateContractStatement";
    readonly edges: readonly [{
        readonly name: "Messages";
        readonly array: true;
        readonly kinds: readonly ["ContractMessage"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateCredentialStatement";
    readonly edges: readonly [{
        readonly name: "CryptographicProviderName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Identity";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Secret";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsDatabaseScoped";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateCryptographicProviderStatement";
    readonly edges: readonly [{
        readonly name: "File";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateDatabaseAuditSpecificationStatement";
    readonly edges: readonly [{
        readonly name: "AuditName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parts";
        readonly array: true;
        readonly kinds: readonly ["AuditSpecificationPart"];
    }, {
        readonly name: "SpecificationName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "AuditState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateDatabaseEncryptionKeyStatement";
    readonly edges: readonly [{
        readonly name: "Encryptor";
        readonly array: false;
        readonly kinds: readonly ["CryptoMechanism"];
    }];
    readonly attributes: readonly [{
        readonly name: "Algorithm";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Aes128", "Aes192", "Aes256", "None", "TripleDes3Key"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateDatabaseStatement";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Containment";
        readonly array: false;
        readonly kinds: readonly ["ContainmentDatabaseOption"];
    }, {
        readonly name: "CopyOf";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DatabaseSnapshot";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FileGroups";
        readonly array: true;
        readonly kinds: readonly ["FileGroupDefinition"];
    }, {
        readonly name: "LogOn";
        readonly array: true;
        readonly kinds: readonly ["FileDeclaration"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AcceleratedDatabaseRecoveryDatabaseOption", "AutoCreateStatisticsDatabaseOption", "AutomaticTuningDatabaseOption", "CatalogCollationOption", "ChangeTrackingDatabaseOption", "ContainmentDatabaseOption", "CursorDefaultDatabaseOption", "DatabaseOption", "DelayedDurabilityDatabaseOption", "ElasticPoolSpecification", "FileStreamDatabaseOption", "HadrAvailabilityGroupDatabaseOption", "HadrDatabaseOption", "IdentifierDatabaseOption", "LedgerOption", "LiteralDatabaseOption", "MaxSizeDatabaseOption", "OnOffDatabaseOption", "OptimizedLockingDatabaseOption", "PageVerifyDatabaseOption", "ParameterizationDatabaseOption", "PartnerDatabaseOption", "QueryStoreDatabaseOption", "RecoveryDatabaseOption", "RemoteDataArchiveDatabaseOption", "TargetRecoveryTimeDatabaseOption", "WitnessDatabaseOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "AttachMode";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Attach", "AttachForceRebuildLog", "AttachRebuildLog", "Load", "None"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateDefaultStatement";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateEndpointStatement";
    readonly edges: readonly [{
        readonly name: "Affinity";
        readonly array: false;
        readonly kinds: readonly ["EndpointAffinity"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PayloadOptions";
        readonly array: true;
        readonly kinds: readonly ["AuthenticationPayloadOption", "CharacterSetPayloadOption", "EnabledDisabledPayloadOption", "EncryptionPayloadOption", "LiteralPayloadOption", "LoginTypePayloadOption", "RolePayloadOption", "SchemaPayloadOption", "SessionTimeoutPayloadOption", "SoapMethod", "WsdlPayloadOption"];
    }, {
        readonly name: "ProtocolOptions";
        readonly array: true;
        readonly kinds: readonly ["AuthenticationEndpointProtocolOption", "CompressionEndpointProtocolOption", "ListenerIPEndpointProtocolOption", "LiteralEndpointProtocolOption", "PortsEndpointProtocolOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "EndpointType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DatabaseMirroring", "NotSpecified", "ServiceBroker", "Soap", "TSql"];
        readonly flags: false;
    }, {
        readonly name: "Protocol";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Http", "None", "Tcp"];
        readonly flags: false;
    }, {
        readonly name: "State";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Disabled", "NotSpecified", "Started", "Stopped"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateEventNotificationStatement";
    readonly edges: readonly [{
        readonly name: "BrokerInstanceSpecifier";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "BrokerService";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "EventTypeGroups";
        readonly array: true;
        readonly kinds: readonly ["EventGroupContainer", "EventTypeContainer"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Scope";
        readonly array: false;
        readonly kinds: readonly ["EventNotificationObjectScope"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithFanIn";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateEventSessionStatement";
    readonly edges: readonly [{
        readonly name: "EventDeclarations";
        readonly array: true;
        readonly kinds: readonly ["EventDeclaration"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SessionOptions";
        readonly array: true;
        readonly kinds: readonly ["EventRetentionSessionOption", "LiteralSessionOption", "MaxDispatchLatencySessionOption", "MemoryPartitionSessionOption", "OnOffSessionOption"];
    }, {
        readonly name: "TargetDeclarations";
        readonly array: true;
        readonly kinds: readonly ["TargetDeclaration"];
    }];
    readonly attributes: readonly [{
        readonly name: "SessionScope";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Database", "Server"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateExternalDataSourceStatement";
    readonly edges: readonly [{
        readonly name: "ExternalDataSourceOptions";
        readonly array: true;
        readonly kinds: readonly ["ExternalDataSourceLiteralOrIdentifierOption"];
    }, {
        readonly name: "Location";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "DataSourceType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BLOB_STORAGE", "EXTERNAL_GENERICS", "HADOOP", "RDBMS", "SHARD_MAP_MANAGER"];
        readonly flags: false;
    }, {
        readonly name: "PushdownOption";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["OFF", "ON"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateExternalFileFormatStatement";
    readonly edges: readonly [{
        readonly name: "ExternalFileFormatOptions";
        readonly array: true;
        readonly kinds: readonly ["ExternalFileFormatContainerOption", "ExternalFileFormatLiteralOption", "ExternalFileFormatUseDefaultTypeOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "FormatType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DelimitedText", "Delta", "JSON", "Orc", "Parquet", "RcFile"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateExternalFunctionStatement";
    readonly edges: readonly [{
        readonly name: "ExternalName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ProcedureParameter"];
    }, {
        readonly name: "ReturnType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateExternalLanguageStatement";
    readonly edges: readonly [{
        readonly name: "ExternalLanguageFiles";
        readonly array: true;
        readonly kinds: readonly ["ExternalLanguageFileOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateExternalLibraryStatement";
    readonly edges: readonly [{
        readonly name: "ExternalLibraryFiles";
        readonly array: true;
        readonly kinds: readonly ["ExternalLibraryFileOption"];
    }, {
        readonly name: "Language";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateExternalModelStatement";
    readonly edges: readonly [{
        readonly name: "ApiFormat";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Credential";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "LocalRuntimePath";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Location";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "ModelName";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ModelType";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["EMBEDDINGS"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateExternalResourcePoolStatement";
    readonly edges: readonly [{
        readonly name: "ExternalResourcePoolParameters";
        readonly array: true;
        readonly kinds: readonly ["ExternalResourcePoolParameter"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateExternalStreamStatement";
    readonly edges: readonly [{
        readonly name: "ExternalStreamOptions";
        readonly array: true;
        readonly kinds: readonly ["ExternalStreamLiteralOrIdentifierOption"];
    }, {
        readonly name: "InputOptions";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Location";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OutputOptions";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateExternalStreamingJobStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Statement";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateExternalTableStatement";
    readonly edges: readonly [{
        readonly name: "ColumnDefinitions";
        readonly array: true;
        readonly kinds: readonly ["ExternalTableColumnDefinition"];
    }, {
        readonly name: "DataSource";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ExternalTableOptions";
        readonly array: true;
        readonly kinds: readonly ["ExternalTableDistributionOption", "ExternalTableLiteralOrIdentifierOption", "ExternalTableRejectTypeOption"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SelectStatement";
        readonly array: false;
        readonly kinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateFederationStatement";
    readonly edges: readonly [{
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "DistributionName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateFullTextCatalogStatement";
    readonly edges: readonly [{
        readonly name: "FileGroup";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["OnOffFullTextCatalogOption"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Path";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsDefault";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateFullTextIndexStatement";
    readonly edges: readonly [{
        readonly name: "CatalogAndFileGroup";
        readonly array: false;
        readonly kinds: readonly ["FullTextCatalogAndFileGroup"];
    }, {
        readonly name: "FullTextIndexColumns";
        readonly array: true;
        readonly kinds: readonly ["FullTextIndexColumn"];
    }, {
        readonly name: "KeyIndexName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ChangeTrackingFullTextIndexOption", "SearchPropertyListFullTextIndexOption", "StopListFullTextIndexOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateFullTextStopListStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SourceStopListName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsSystemStopList";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateFunctionStatement";
    readonly edges: readonly [{
        readonly name: "MethodSpecifier";
        readonly array: false;
        readonly kinds: readonly ["MethodSpecifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ExecuteAsFunctionOption", "FunctionOption", "InlineFunctionOption"];
    }, {
        readonly name: "OrderHint";
        readonly array: false;
        readonly kinds: readonly ["OrderBulkInsertOption"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ProcedureParameter"];
    }, {
        readonly name: "ReturnType";
        readonly array: false;
        readonly kinds: readonly ["ScalarFunctionReturnType", "SelectFunctionReturnType", "TableValuedFunctionReturnType"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateIndexStatement";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnWithSortOrder"];
    }, {
        readonly name: "FileStreamOn";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "FilterPredicate";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "IncludeColumns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnFileGroupOrPartitionScheme";
        readonly array: false;
        readonly kinds: readonly ["FileGroupOrPartitionScheme"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "Clustered";
        readonly kind: "boolean";
        readonly nullable: true;
    }, {
        readonly name: "Translated80SyntaxTo90";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Unique";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateJsonIndexStatement";
    readonly edges: readonly [{
        readonly name: "ForJsonPaths";
        readonly array: true;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "JsonColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateLoginStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Source";
        readonly array: false;
        readonly kinds: readonly ["AsymmetricKeyCreateLoginSource", "CertificateCreateLoginSource", "ExternalCreateLoginSource", "PasswordCreateLoginSource", "WindowsCreateLoginSource"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateMasterKeyStatement";
    readonly edges: readonly [{
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateMessageTypeStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "XmlSchemaCollectionName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ValidationMethod";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Empty", "None", "NotSpecified", "ValidXml", "WellFormedXml"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateOrAlterExternalFunctionStatement";
    readonly edges: readonly [{
        readonly name: "ExternalName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ProcedureParameter"];
    }, {
        readonly name: "ReturnType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateOrAlterFunctionStatement";
    readonly edges: readonly [{
        readonly name: "MethodSpecifier";
        readonly array: false;
        readonly kinds: readonly ["MethodSpecifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ExecuteAsFunctionOption", "FunctionOption", "InlineFunctionOption"];
    }, {
        readonly name: "OrderHint";
        readonly array: false;
        readonly kinds: readonly ["OrderBulkInsertOption"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ProcedureParameter"];
    }, {
        readonly name: "ReturnType";
        readonly array: false;
        readonly kinds: readonly ["ScalarFunctionReturnType", "SelectFunctionReturnType", "TableValuedFunctionReturnType"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateOrAlterProcedureStatement";
    readonly edges: readonly [{
        readonly name: "MethodSpecifier";
        readonly array: false;
        readonly kinds: readonly ["MethodSpecifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ExecuteAsProcedureOption", "ProcedureOption"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ProcedureParameter"];
    }, {
        readonly name: "ProcedureReference";
        readonly array: false;
        readonly kinds: readonly ["ProcedureReference"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateOrAlterTriggerStatement";
    readonly edges: readonly [{
        readonly name: "MethodSpecifier";
        readonly array: false;
        readonly kinds: readonly ["MethodSpecifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ExecuteAsTriggerOption", "TriggerOption"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }, {
        readonly name: "TriggerActions";
        readonly array: true;
        readonly kinds: readonly ["TriggerAction"];
    }, {
        readonly name: "TriggerObject";
        readonly array: false;
        readonly kinds: readonly ["TriggerObject"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsNotForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "TriggerType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["After", "For", "InsteadOf", "Unknown"];
        readonly flags: false;
    }, {
        readonly name: "WithAppend";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateOrAlterViewStatement";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SelectStatement";
        readonly array: false;
        readonly kinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    }, {
        readonly name: "ViewOptions";
        readonly array: true;
        readonly kinds: readonly ["ViewDistributionOption", "ViewForAppendOption", "ViewOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsMaterialized";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "WithCheckOption";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreatePartitionFunctionStatement";
    readonly edges: readonly [{
        readonly name: "BoundaryValues";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ParameterType";
        readonly array: false;
        readonly kinds: readonly ["PartitionParameterType"];
    }];
    readonly attributes: readonly [{
        readonly name: "Range";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Left", "NotSpecified", "Right"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreatePartitionSchemeStatement";
    readonly edges: readonly [{
        readonly name: "FileGroups";
        readonly array: true;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PartitionFunction";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsAll";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateProcedureStatement";
    readonly edges: readonly [{
        readonly name: "MethodSpecifier";
        readonly array: false;
        readonly kinds: readonly ["MethodSpecifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ExecuteAsProcedureOption", "ProcedureOption"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ProcedureParameter"];
    }, {
        readonly name: "ProcedureReference";
        readonly array: false;
        readonly kinds: readonly ["ProcedureReference"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateQueueStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "OnFileGroup";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "QueueOptions";
        readonly array: true;
        readonly kinds: readonly ["QueueExecuteAsOption", "QueueOption", "QueueProcedureOption", "QueueStateOption", "QueueValueOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateRemoteServiceBindingStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["OnOffRemoteServiceBindingOption", "UserRemoteServiceBindingOption"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Service";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateResourcePoolStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ResourcePoolParameters";
        readonly array: true;
        readonly kinds: readonly ["ResourcePoolParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateRoleStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateRouteStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "RouteOptions";
        readonly array: true;
        readonly kinds: readonly ["RouteOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateRuleStatement";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateSchemaStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateSearchPropertyListStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SourceSearchPropertyList";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateSecurityPolicyStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SecurityPolicyOptions";
        readonly array: true;
        readonly kinds: readonly ["SecurityPolicyOption"];
    }, {
        readonly name: "SecurityPredicateActions";
        readonly array: true;
        readonly kinds: readonly ["SecurityPredicateAction"];
    }];
    readonly attributes: readonly [{
        readonly name: "ActionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AlterPredicates", "AlterReplication", "AlterState", "Create"];
        readonly flags: false;
    }, {
        readonly name: "NotForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateSelectiveXmlIndexStatement";
    readonly edges: readonly [{
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "PathName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PromotedPaths";
        readonly array: true;
        readonly kinds: readonly ["SelectiveXmlIndexPromotedPath"];
    }, {
        readonly name: "UsingXmlIndexName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "XmlColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "XmlNamespaces";
        readonly array: false;
        readonly kinds: readonly ["XmlNamespaces"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsSecondary";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateSemanticIndexStatement";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["SemanticIndexColumn"];
    }, {
        readonly name: "ExternalModelName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ExternalModelParameters";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "FulltextStoplistOption";
        readonly array: false;
        readonly kinds: readonly ["StopListFullTextIndexOption"];
    }, {
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnFileGroupOrPartitionScheme";
        readonly array: false;
        readonly kinds: readonly ["FileGroupOrPartitionScheme"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "VectorIndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateSequenceStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SequenceOptions";
        readonly array: true;
        readonly kinds: readonly ["DataTypeSequenceOption", "ScalarExpressionSequenceOption", "SequenceOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateServerAuditSpecificationStatement";
    readonly edges: readonly [{
        readonly name: "AuditName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parts";
        readonly array: true;
        readonly kinds: readonly ["AuditSpecificationPart"];
    }, {
        readonly name: "SpecificationName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "AuditState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateServerAuditStatement";
    readonly edges: readonly [{
        readonly name: "AuditName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "AuditTarget";
        readonly array: false;
        readonly kinds: readonly ["AuditTarget"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["AuditGuidAuditOption", "OnFailureAuditOption", "OperatorAuditOption", "QueueDelayAuditOption", "StateAuditOption"];
    }, {
        readonly name: "PredicateExpression";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateServerRoleStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateServiceStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "QueueName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "ServiceContracts";
        readonly array: true;
        readonly kinds: readonly ["ServiceContract"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateSpatialIndexStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Object";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "OnFileGroup";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "SpatialColumnName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SpatialIndexOptions";
        readonly array: true;
        readonly kinds: readonly ["BoundingBoxSpatialIndexOption", "CellsPerObjectSpatialIndexOption", "GridsSpatialIndexOption", "SpatialIndexRegularOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "SpatialIndexingScheme";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["GeographyAutoGrid", "GeographyGrid", "GeometryAutoGrid", "GeometryGrid", "None"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateStatisticsStatement";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "FilterPredicate";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "StatisticsOptions";
        readonly array: true;
        readonly kinds: readonly ["LiteralStatisticsOption", "OnOffStatisticsOption", "ResampleStatisticsOption", "StatisticsOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateSymmetricKeyStatement";
    readonly edges: readonly [{
        readonly name: "EncryptingMechanisms";
        readonly array: true;
        readonly kinds: readonly ["CryptoMechanism"];
    }, {
        readonly name: "KeyOptions";
        readonly array: true;
        readonly kinds: readonly ["AlgorithmKeyOption", "CreationDispositionKeyOption", "IdentityValueKeyOption", "KeySourceKeyOption", "ProviderKeyNameKeyOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Provider";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateSynonymStatement";
    readonly edges: readonly [{
        readonly name: "ForName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateTableStatement";
    readonly edges: readonly [{
        readonly name: "ClonePointInTime";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "CloneSource";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "CtasColumns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Definition";
        readonly array: false;
        readonly kinds: readonly ["TableDefinition"];
    }, {
        readonly name: "FederationScheme";
        readonly array: false;
        readonly kinds: readonly ["FederationScheme"];
    }, {
        readonly name: "FileStreamOn";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "OnFileGroupOrPartitionScheme";
        readonly array: false;
        readonly kinds: readonly ["FileGroupOrPartitionScheme"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ClusterByTableOption", "DataRetentionTableOption", "DurabilityTableOption", "FileStreamOnTableOption", "FileTableCollateFileNameTableOption", "FileTableConstraintNameTableOption", "FileTableDirectoryTableOption", "LedgerTableOption", "LedgerViewOption", "LocationOption", "LockEscalationTableOption", "MemoryOptimizedTableOption", "RemoteDataArchiveAlterTableOption", "RemoteDataArchiveTableOption", "SystemVersioningTableOption", "TableDataCompressionOption", "TableDistributionOption", "TableIndexOption", "TablePartitionOption", "TableXmlCompressionOption"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SelectStatement";
        readonly array: false;
        readonly kinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    }, {
        readonly name: "TextImageOn";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "AsEdge";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "AsFileTable";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "AsNode";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateTriggerStatement";
    readonly edges: readonly [{
        readonly name: "MethodSpecifier";
        readonly array: false;
        readonly kinds: readonly ["MethodSpecifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ExecuteAsTriggerOption", "TriggerOption"];
    }, {
        readonly name: "StatementList";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }, {
        readonly name: "TriggerActions";
        readonly array: true;
        readonly kinds: readonly ["TriggerAction"];
    }, {
        readonly name: "TriggerObject";
        readonly array: false;
        readonly kinds: readonly ["TriggerObject"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsNotForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "TriggerType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["After", "For", "InsteadOf", "Unknown"];
        readonly flags: false;
    }, {
        readonly name: "WithAppend";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateTypeTableStatement";
    readonly edges: readonly [{
        readonly name: "Definition";
        readonly array: false;
        readonly kinds: readonly ["TableDefinition"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ClusterByTableOption", "DataRetentionTableOption", "DurabilityTableOption", "FileStreamOnTableOption", "FileTableCollateFileNameTableOption", "FileTableConstraintNameTableOption", "FileTableDirectoryTableOption", "LedgerTableOption", "LedgerViewOption", "LocationOption", "LockEscalationTableOption", "MemoryOptimizedTableOption", "RemoteDataArchiveAlterTableOption", "RemoteDataArchiveTableOption", "SystemVersioningTableOption", "TableDataCompressionOption", "TableDistributionOption", "TableIndexOption", "TablePartitionOption", "TableXmlCompressionOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateTypeUddtStatement";
    readonly edges: readonly [{
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "NullableConstraint";
        readonly array: false;
        readonly kinds: readonly ["NullableConstraintDefinition"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateTypeUdtStatement";
    readonly edges: readonly [{
        readonly name: "AssemblyName";
        readonly array: false;
        readonly kinds: readonly ["AssemblyName"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateUserStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "UserLoginOption";
        readonly array: false;
        readonly kinds: readonly ["UserLoginOption"];
    }, {
        readonly name: "UserOptions";
        readonly array: true;
        readonly kinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateVectorIndexStatement";
    readonly edges: readonly [{
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnFileGroupOrPartitionScheme";
        readonly array: false;
        readonly kinds: readonly ["FileGroupOrPartitionScheme"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "VectorColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateViewStatement";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SelectStatement";
        readonly array: false;
        readonly kinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    }, {
        readonly name: "ViewOptions";
        readonly array: true;
        readonly kinds: readonly ["ViewDistributionOption", "ViewForAppendOption", "ViewOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsMaterialized";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "WithCheckOption";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CreateWorkloadClassifierStatement";
    readonly edges: readonly [{
        readonly name: "ClassifierName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ClassifierEndTimeOption", "ClassifierImportanceOption", "ClassifierMemberNameOption", "ClassifierStartTimeOption", "ClassifierWlmContextOption", "ClassifierWlmLabelOption", "ClassifierWorkloadGroupOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateWorkloadGroupStatement";
    readonly edges: readonly [{
        readonly name: "ExternalPoolName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PoolName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "WorkloadGroupParameters";
        readonly array: true;
        readonly kinds: readonly ["WorkloadGroupImportanceParameter", "WorkloadGroupResourceParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreateXmlIndexStatement";
    readonly edges: readonly [{
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnFileGroupOrPartitionScheme";
        readonly array: false;
        readonly kinds: readonly ["FileGroupOrPartitionScheme"];
    }, {
        readonly name: "OnName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SecondaryXmlIndexName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "XmlColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Primary";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "SecondaryXmlIndexType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSpecified", "Path", "Property", "Value"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CreateXmlSchemaCollectionStatement";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CreationDispositionKeyOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsCreateNew";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Algorithm", "CreationDisposition", "IdentityValue", "KeySource", "ProviderKeyName"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CryptoMechanism";
    readonly edges: readonly [{
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PasswordOrSignature";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "CryptoMechanismType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AsymmetricKey", "Certificate", "Password", "SymmetricKey"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CubeGroupingSpecification";
    readonly edges: readonly [{
        readonly name: "Arguments";
        readonly array: true;
        readonly kinds: readonly ["CompositeGroupingSpecification", "CubeGroupingSpecification", "ExpressionGroupingSpecification", "GrandTotalGroupingSpecification", "GroupingSetsGroupingSpecification", "RollupGroupingSpecification"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CursorDefaultDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsLocal";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "CursorDefinition";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["CursorOption"];
    }, {
        readonly name: "Select";
        readonly array: false;
        readonly kinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "CursorId";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsGlobal";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "CursorOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Dynamic", "FastForward", "ForwardOnly", "Global", "Insensitive", "Keyset", "Local", "Optimistic", "ReadOnly", "Scroll", "ScrollLocks", "Static", "TypeWarning"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DWCompatibilityLevelConfigurationOption";
    readonly edges: readonly [{
        readonly name: "GenericOptionKind";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DWCompatibilityLevel", "LegacyCardinalityEstimate", "MaxDop", "ParameterSniffing", "QueryOptimizerHotFixes"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DataCompressionOption";
    readonly edges: readonly [{
        readonly name: "PartitionRanges";
        readonly array: true;
        readonly kinds: readonly ["CompressionPartitionRange"];
    }];
    readonly attributes: readonly [{
        readonly name: "CompressionLevel";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ColumnStore", "ColumnStoreArchive", "None", "Page", "Row"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DataModificationTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataModificationSpecification";
        readonly array: false;
        readonly kinds: readonly ["DeleteSpecification", "InsertSpecification", "MergeSpecification", "UpdateSpecification"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DataRetentionTableOption";
    readonly edges: readonly [{
        readonly name: "FilterColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "RetentionPeriod";
        readonly array: false;
        readonly kinds: readonly ["RetentionPeriodDefinition"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DataTypeSequenceOption";
    readonly edges: readonly [{
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "NoValue";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["As", "Cache", "Cycle", "Increment", "MaxValue", "MinValue", "Restart", "Start"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DatabaseAuditAction";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "ActionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Delete", "Execute", "Insert", "Receive", "References", "Select", "Update"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DatabaseConfigurationClearOption";
    readonly edges: readonly [{
        readonly name: "PlanHandle";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ProcedureCache", "0"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DatabaseConfigurationSetOption";
    readonly edges: readonly [{
        readonly name: "GenericOptionKind";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DWCompatibilityLevel", "LegacyCardinalityEstimate", "MaxDop", "ParameterSniffing", "QueryOptimizerHotFixes"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DbccNamedLiteral";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "Name";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "DbccOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllConstraints", "AllErrorMessages", "AllIndexes", "AllLevels", "CountRows", "DataPurity", "DensityVector", "EstimateOnly", "ExtendedLogicalChecks", "Fast", "Histogram", "HistogramSteps", "MarkInUseForRemoval", "NoInfoMessages", "PhysicalOnly", "StatHeader", "StatsStream", "TabLock", "TableResults"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DbccStatement";
    readonly edges: readonly [{
        readonly name: "Literals";
        readonly array: true;
        readonly kinds: readonly ["DbccNamedLiteral"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["DbccOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "Command";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ActiveCursors", "AddExtendedProc", "AddInstance", "AuditEvent", "AutoPilot", "Buffer", "Bytes", "CacheProfile", "CacheStats", "CallFullText", "CheckAlloc", "CheckCatalog", "CheckConstraints", "CheckDB", "CheckFileGroup", "CheckIdent", "CheckPrimaryFile", "CheckTable", "CleanTable", "ClearSpaceCaches", "CollectStats", "ConcurrencyViolation", "CursorStats", "DBRecover", "DBReindex", "DBReindexAll", "DBRepair", "DebugBreak", "DeleteInstance", "DetachDB", "DropCleanBuffers", "DropExtendedProc", "DumpConfig", "DumpDBInfo", "DumpDBTable", "DumpLock", "DumpLog", "DumpPage", "DumpResource", "DumpTrigger", "ErrorLog", "ExtentInfo", "FileHeader", "FixAllocation", "Flush", "FlushProcInDB", "ForceGhostCleanup", "Free", "FreeProcCache", "FreeSessionCache", "FreeSystemCache", "FreezeIO", "Help", "IcecapQuery", "IncrementInstance", "Ind", "IndexDefrag", "InputBuffer", "InvalidateTextptr", "InvalidateTextptrObjid", "Latch", "LogInfo", "MapAllocUnit", "MemObjList", "MemoryMap", "MemoryStatus", "Metadata", "MovePage", "NoTextptr", "None", "OpenTran", "OptimizerWhatIf", "OutputBuffer", "PerfMonStats", "PersistStackHash", "PinTable", "ProcCache", "PrtiPage", "ReadPage", "RenameColumn", "RuleOff", "RuleOn", "SeMetadata", "SetCpuWeight", "SetIOWeight", "SetInstance", "ShowContig", "ShowDBAffinity", "ShowFileStats", "ShowOffRules", "ShowOnRules", "ShowStatistics", "ShowTableAffinity", "ShowText", "ShowWeights", "ShrinkDatabase", "ShrinkFile", "SqlMgrStats", "SqlPerf", "StackDump", "Tec", "ThawIO", "ThrottleIO", "TraceOff", "TraceOn", "TraceStatus", "UnpinTable", "UpdateUsage", "UsePlan", "UserOptions", "WritePage"];
        readonly flags: false;
    }, {
        readonly name: "DllName";
        readonly kind: "string";
        readonly nullable: true;
    }, {
        readonly name: "OptionsUseJoin";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "ParenthesisRequired";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DeallocateCursorStatement";
    readonly edges: readonly [{
        readonly name: "Cursor";
        readonly array: false;
        readonly kinds: readonly ["CursorId"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DeclareCursorStatement";
    readonly edges: readonly [{
        readonly name: "CursorDefinition";
        readonly array: false;
        readonly kinds: readonly ["CursorDefinition"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DeclareTableVariableBody";
    readonly edges: readonly [{
        readonly name: "Definition";
        readonly array: false;
        readonly kinds: readonly ["TableDefinition"];
    }, {
        readonly name: "VariableName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "AsDefined";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DeclareTableVariableStatement";
    readonly edges: readonly [{
        readonly name: "Body";
        readonly array: false;
        readonly kinds: readonly ["DeclareTableVariableBody"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DeclareVariableElement";
    readonly edges: readonly [{
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "Nullable";
        readonly array: false;
        readonly kinds: readonly ["NullableConstraintDefinition"];
    }, {
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "VariableName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DeclareVariableStatement";
    readonly edges: readonly [{
        readonly name: "Declarations";
        readonly array: true;
        readonly kinds: readonly ["DeclareVariableElement", "ProcedureParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DefaultConstraintDefinition";
    readonly edges: readonly [{
        readonly name: "Column";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ConstraintIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithValues";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DefaultLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "DelayedDurabilityDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Allowed", "Disabled", "Forced"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DeleteMergeAction";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "DeleteSpecification";
    readonly edges: readonly [{
        readonly name: "FromClause";
        readonly array: false;
        readonly kinds: readonly ["FromClause"];
    }, {
        readonly name: "OutputClause";
        readonly array: false;
        readonly kinds: readonly ["OutputClause"];
    }, {
        readonly name: "OutputIntoClause";
        readonly array: false;
        readonly kinds: readonly ["OutputIntoClause"];
    }, {
        readonly name: "Target";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "TopRowFilter";
        readonly array: false;
        readonly kinds: readonly ["TopRowFilter"];
    }, {
        readonly name: "WhereClause";
        readonly array: false;
        readonly kinds: readonly ["WhereClause"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DeleteStatement";
    readonly edges: readonly [{
        readonly name: "DeleteSpecification";
        readonly array: false;
        readonly kinds: readonly ["DeleteSpecification"];
    }, {
        readonly name: "OptimizerHints";
        readonly array: true;
        readonly kinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    }, {
        readonly name: "WithCtesAndXmlNamespaces";
        readonly array: false;
        readonly kinds: readonly ["WithCtesAndXmlNamespaces"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DenyStatement";
    readonly edges: readonly [{
        readonly name: "AsClause";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Permissions";
        readonly array: true;
        readonly kinds: readonly ["Permission"];
    }, {
        readonly name: "Principals";
        readonly array: true;
        readonly kinds: readonly ["SecurityPrincipal"];
    }, {
        readonly name: "SecurityTargetObject";
        readonly array: false;
        readonly kinds: readonly ["SecurityTargetObject"];
    }];
    readonly attributes: readonly [{
        readonly name: "CascadeOption";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DenyStatement80";
    readonly edges: readonly [{
        readonly name: "SecurityElement80";
        readonly array: false;
        readonly kinds: readonly ["CommandSecurityElement80", "PrivilegeSecurityElement80"];
    }, {
        readonly name: "SecurityUserClause80";
        readonly array: false;
        readonly kinds: readonly ["SecurityUserClause80"];
    }];
    readonly attributes: readonly [{
        readonly name: "CascadeOption";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DeviceInfo";
    readonly edges: readonly [{
        readonly name: "LogicalDevice";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "PhysicalDevice";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "DeviceType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DatabaseSnapshot", "Disk", "None", "Tape", "Url", "VirtualDevice"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DiskStatement";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["DiskStatementOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "DiskStatementType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Init", "Resize"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DiskStatementOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Name", "PhysName", "Size", "VDevNo", "VStart"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DistinctPredicate";
    readonly edges: readonly [{
        readonly name: "FirstExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SecondExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsNot";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropAggregateStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropAlterFullTextIndexAction";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithNoPopulation";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropApplicationRoleStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropAssemblyStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "WithNoDependents";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropAsymmetricKeyStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "RemoveProviderKey";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropAvailabilityGroupStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropBrokerPriorityStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropCertificateStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropClusteredConstraintMoveOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["FileGroupOrPartitionScheme"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["MaxDop", "MoveTo", "Online", "WaitAtLowPriority"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DropClusteredConstraintStateOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["MaxDop", "MoveTo", "Online", "WaitAtLowPriority"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DropClusteredConstraintValueOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["MaxDop", "MoveTo", "Online", "WaitAtLowPriority"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DropClusteredConstraintWaitAtLowPriorityLockOption";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["LowPriorityLockWaitAbortAfterWaitOption", "LowPriorityLockWaitMaxDurationOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["MaxDop", "MoveTo", "Online", "WaitAtLowPriority"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DropColumnEncryptionKeyStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropColumnMasterKeyStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropContractStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropCredentialStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsDatabaseScoped";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropCryptographicProviderStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropDatabaseAuditSpecificationStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropDatabaseEncryptionKeyStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropDatabaseStatement";
    readonly edges: readonly [{
        readonly name: "Databases";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropDefaultStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropEndpointStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropEventNotificationStatement";
    readonly edges: readonly [{
        readonly name: "Notifications";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Scope";
        readonly array: false;
        readonly kinds: readonly ["EventNotificationObjectScope"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropEventSessionStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "SessionScope";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Database", "Server"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DropExternalDataSourceStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropExternalFileFormatStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropExternalLanguageStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropExternalLibraryStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Owner";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropExternalModelStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropExternalResourcePoolStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropExternalStreamStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropExternalStreamingJobStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropExternalTableStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropFederationStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropFullTextCatalogStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropFullTextIndexStatement";
    readonly edges: readonly [{
        readonly name: "TableName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropFullTextStopListStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropFunctionStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropIndexClause";
    readonly edges: readonly [{
        readonly name: "Index";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Object";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropIndexStatement";
    readonly edges: readonly [{
        readonly name: "DropIndexClauses";
        readonly array: true;
        readonly kinds: readonly ["BackwardsCompatibleDropIndexClause", "DropIndexClause"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropLoginStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropMasterKeyStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropMemberAlterRoleAction";
    readonly edges: readonly [{
        readonly name: "Member";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropMessageTypeStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropPartitionFunctionStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropPartitionSchemeStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropProcedureStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropQueueStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropRemoteServiceBindingStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropResourcePoolStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropRoleStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropRouteStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropRuleStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropSchemaStatement";
    readonly edges: readonly [{
        readonly name: "Schema";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "DropBehavior";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Cascade", "None", "Restrict"];
        readonly flags: false;
    }, {
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropSearchPropertyListAction";
    readonly edges: readonly [{
        readonly name: "PropertyName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropSearchPropertyListStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropSecurityPolicyStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropSensitivityClassificationStatement";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropSequenceStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropServerAuditSpecificationStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropServerAuditStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropServerRoleStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropServiceStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropSignatureStatement";
    readonly edges: readonly [{
        readonly name: "Cryptos";
        readonly array: true;
        readonly kinds: readonly ["CryptoMechanism"];
    }, {
        readonly name: "Element";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ElementKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Assembly", "Database", "NotSpecified", "Object"];
        readonly flags: false;
    }, {
        readonly name: "IsCounter";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropStatisticsStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DropSymmetricKeyStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "RemoveProviderKey";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropSynonymStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropTableStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropTriggerStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "TriggerScope";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllServer", "Database", "Normal"];
        readonly flags: false;
    }];
}, {
    readonly kind: "DropTypeStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropUserStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropViewStatement";
    readonly edges: readonly [{
        readonly name: "Objects";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropWorkloadClassifierStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropWorkloadGroupStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIfExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "DropXmlSchemaCollectionStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "DurabilityTableOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "DurabilityTableOptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["SchemaAndData", "SchemaOnly"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ElasticPoolSpecification";
    readonly edges: readonly [{
        readonly name: "ElasticPoolName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "EnableDisableTriggerStatement";
    readonly edges: readonly [{
        readonly name: "TriggerNames";
        readonly array: true;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "TriggerObject";
        readonly array: false;
        readonly kinds: readonly ["TriggerObject"];
    }];
    readonly attributes: readonly [{
        readonly name: "All";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "TriggerEnforcement";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Disable", "Enable"];
        readonly flags: false;
    }];
}, {
    readonly kind: "EnabledDisabledPayloadOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsEnabled";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }];
}, {
    readonly kind: "EncryptedValueParameter";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ColumnMasterKeyName", "EncryptedValue", "EncryptionAlgorithmName"];
        readonly flags: false;
    }];
}, {
    readonly kind: "EncryptionPayloadOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "AlgorithmPartOne";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Aes", "NotSpecified", "Rc4"];
        readonly flags: false;
    }, {
        readonly name: "AlgorithmPartTwo";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Aes", "NotSpecified", "Rc4"];
        readonly flags: false;
    }, {
        readonly name: "EncryptionSupport";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Disabled", "NotSpecified", "Required", "Supported"];
        readonly flags: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }];
}, {
    readonly kind: "EndConversationStatement";
    readonly edges: readonly [{
        readonly name: "Conversation";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "ErrorCode";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "ErrorDescription";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithCleanup";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "EndpointAffinity";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Admin", "Integer", "None", "NotSpecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "EventDeclaration";
    readonly edges: readonly [{
        readonly name: "EventDeclarationActionParameters";
        readonly array: true;
        readonly kinds: readonly ["EventSessionObjectName"];
    }, {
        readonly name: "EventDeclarationPredicateParameter";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "EventDeclarationSetParameters";
        readonly array: true;
        readonly kinds: readonly ["EventDeclarationSetParameter"];
    }, {
        readonly name: "ObjectName";
        readonly array: false;
        readonly kinds: readonly ["EventSessionObjectName"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "EventDeclarationCompareFunctionParameter";
    readonly edges: readonly [{
        readonly name: "EventValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["EventSessionObjectName"];
    }, {
        readonly name: "SourceDeclaration";
        readonly array: false;
        readonly kinds: readonly ["SourceDeclaration"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "EventDeclarationSetParameter";
    readonly edges: readonly [{
        readonly name: "EventField";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "EventValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "EventGroupContainer";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "EventGroup";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DdlApplicationRoleEvents", "DdlAssemblyEvents", "DdlAsymmetricKeyEvents", "DdlAuthorizationDatabaseEvents", "DdlAuthorizationServerEvents", "DdlAvailabilityGroupEvents", "DdlBrokerPriorityEvents", "DdlCertificateEvents", "DdlColumnEncryptionKeyEvents", "DdlColumnMasterKeyEvents", "DdlContractEvents", "DdlCredentialEvents", "DdlCryptoSignatureEvents", "DdlCryptographicProviderEvents", "DdlDatabaseAuditEvents", "DdlDatabaseAuditSpecificationEvents", "DdlDatabaseEncryptionKeyEvents", "DdlDatabaseEvents", "DdlDatabaseLevelEvents", "DdlDatabaseSecurityEvents", "DdlDefaultEvents", "DdlEndpointEvents", "DdlEventNotificationEvents", "DdlEventSessionEvents", "DdlEvents", "DdlExtendedProcedureEvents", "DdlExtendedPropertyEvents", "DdlExternalLanguageEvents", "DdlExternalLibraryEvents", "DdlExternalResourcePoolEvents", "DdlFullTextCatalogEvents", "DdlFullTextStopListEvents", "DdlFunctionEvents", "DdlGdrDatabaseEvents", "DdlGdrServerEvents", "DdlIndexEvents", "DdlLinkedServerEvents", "DdlLinkedServerLoginEvents", "DdlLoginEvents", "DdlMasterKeyEvents", "DdlMessageEvents", "DdlMessageTypeEvents", "DdlPartitionEvents", "DdlPartitionFunctionEvents", "DdlPartitionSchemeEvents", "DdlPlanGuideEvents", "DdlProcedureEvents", "DdlQueueEvents", "DdlRemoteServerEvents", "DdlRemoteServiceBindingEvents", "DdlResourceGovernorEvents", "DdlResourcePool", "DdlRoleEvents", "DdlRouteEvents", "DdlRuleEvents", "DdlSchemaEvents", "DdlSearchPropertyListEvents", "DdlSecurityPolicyEvents", "DdlSensitivityEvents", "DdlSequenceEvents", "DdlServerAuditEvents", "DdlServerAuditSpecificationEvents", "DdlServerLevelEvents", "DdlServerSecurityEvents", "DdlServiceEvents", "DdlServiceMasterKeyEvents", "DdlSsbEvents", "DdlStatisticsEvents", "DdlSymmetricKeyEvents", "DdlSynonymEvents", "DdlTableEvents", "DdlTableViewEvents", "DdlTriggerEvents", "DdlTypeEvents", "DdlUserEvents", "DdlViewEvents", "DdlWorkloadGroup", "DdlXmlSchemaCollectionEvents", "TrcAllEvents", "TrcClr", "TrcDatabase", "TrcDeprecation", "TrcErrorsAndWarnings", "TrcFullText", "TrcLocks", "TrcObjects", "TrcOledb", "TrcPerformance", "TrcQueryNotifications", "TrcSecurityAudit", "TrcServer", "TrcStoredProcedures", "TrcTSql", "TrcUserConfigurable", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "EventNotificationObjectScope";
    readonly edges: readonly [{
        readonly name: "QueueName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "Target";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Database", "Queue", "Server", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "EventRetentionSessionOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EventRetention", "MaxDispatchLatency", "MaxEventSize", "MaxMemory", "MemoryPartition", "StartUpState", "TrackCausality"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowMultipleEventLoss", "AllowSingleEventLoss", "NoEventLoss", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "EventSessionObjectName";
    readonly edges: readonly [{
        readonly name: "MultiPartIdentifier";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "EventSessionStatement";
    readonly edges: readonly [{
        readonly name: "EventDeclarations";
        readonly array: true;
        readonly kinds: readonly ["EventDeclaration"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SessionOptions";
        readonly array: true;
        readonly kinds: readonly ["EventRetentionSessionOption", "LiteralSessionOption", "MaxDispatchLatencySessionOption", "MemoryPartitionSessionOption", "OnOffSessionOption"];
    }, {
        readonly name: "TargetDeclarations";
        readonly array: true;
        readonly kinds: readonly ["TargetDeclaration"];
    }];
    readonly attributes: readonly [{
        readonly name: "SessionScope";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Database", "Server"];
        readonly flags: false;
    }];
}, {
    readonly kind: "EventTypeContainer";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "EventType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AddInformationProtection", "AddRoleMember", "AddSensitivityClassification", "AddServerRoleMember", "AddSignature", "AddSignatureSchemaObject", "AlterApplicationRole", "AlterAssembly", "AlterAsymmetricKey", "AlterAuthorizationDatabase", "AlterAuthorizationServer", "AlterAvailabilityGroup", "AlterBrokerPriority", "AlterCertificate", "AlterColumnEncryptionKey", "AlterCredential", "AlterCryptographicProvider", "AlterDatabase", "AlterDatabaseAudit", "AlterDatabaseAuditSpecification", "AlterDatabaseEncryptionKey", "AlterDatabaseScopedConfiguration", "AlterEndpoint", "AlterEventSession", "AlterExtendedProperty", "AlterExternalLanguage", "AlterExternalLibrary", "AlterExternalResourcePool", "AlterFullTextCatalog", "AlterFullTextIndex", "AlterFullTextStopList", "AlterFunction", "AlterIndex", "AlterInstance", "AlterLinkedServer", "AlterLogin", "AlterMasterKey", "AlterMessage", "AlterMessageType", "AlterPartitionFunction", "AlterPartitionScheme", "AlterPlanGuide", "AlterProcedure", "AlterQueue", "AlterRemoteServer", "AlterRemoteServiceBinding", "AlterResourceGovernorConfig", "AlterResourcePool", "AlterRole", "AlterRoute", "AlterSchema", "AlterSearchPropertyList", "AlterSecurityPolicy", "AlterSequence", "AlterServerAudit", "AlterServerAuditSpecification", "AlterServerConfiguration", "AlterServerRole", "AlterService", "AlterServiceMasterKey", "AlterSymmetricKey", "AlterTable", "AlterTrigger", "AlterUser", "AlterView", "AlterWorkloadGroup", "AlterXmlSchemaCollection", "AssemblyLoad", "AuditAddDBUserEvent", "AuditAddLoginEvent", "AuditAddLoginToServerRoleEvent", "AuditAddMemberToDBRoleEvent", "AuditAddRoleEvent", "AuditAppRoleChangePasswordEvent", "AuditBackupRestoreEvent", "AuditChangeAuditEvent", "AuditChangeDatabaseOwner", "AuditDatabaseManagementEvent", "AuditDatabaseObjectAccessEvent", "AuditDatabaseObjectGdrEvent", "AuditDatabaseObjectManagementEvent", "AuditDatabaseObjectTakeOwnershipEvent", "AuditDatabaseOperationEvent", "AuditDatabasePrincipalImpersonationEvent", "AuditDatabasePrincipalManagementEvent", "AuditDatabaseScopeGdrEvent", "AuditDbccEvent", "AuditFullText", "AuditLogin", "AuditLoginChangePasswordEvent", "AuditLoginChangePropertyEvent", "AuditLoginFailed", "AuditLoginGdrEvent", "AuditLogout", "AuditSchemaObjectAccessEvent", "AuditSchemaObjectGdrEvent", "AuditSchemaObjectManagementEvent", "AuditSchemaObjectTakeOwnershipEvent", "AuditServerAlterTraceEvent", "AuditServerObjectGdrEvent", "AuditServerObjectManagementEvent", "AuditServerObjectTakeOwnershipEvent", "AuditServerOperationEvent", "AuditServerPrincipalImpersonationEvent", "AuditServerPrincipalManagementEvent", "AuditServerScopeGdrEvent", "BindDefault", "BindRule", "BitmapWarning", "BlockedProcessReport", "BrokerQueueDisabled", "CpuThresholdExceeded", "CreateApplicationRole", "CreateAssembly", "CreateAsymmetricKey", "CreateAvailabilityGroup", "CreateBrokerPriority", "CreateCertificate", "CreateColumnEncryptionKey", "CreateColumnMasterKey", "CreateContract", "CreateCredential", "CreateCryptographicProvider", "CreateDatabase", "CreateDatabaseAudit", "CreateDatabaseAuditSpecification", "CreateDatabaseEncryptionKey", "CreateDefault", "CreateEndpoint", "CreateEventNotification", "CreateEventSession", "CreateExtendedProcedure", "CreateExtendedProperty", "CreateExternalLanguage", "CreateExternalLibrary", "CreateExternalResourcePool", "CreateFullTextCatalog", "CreateFullTextIndex", "CreateFullTextStopList", "CreateFunction", "CreateIndex", "CreateJsonIndex", "CreateLinkedServer", "CreateLinkedServerLogin", "CreateLogin", "CreateMasterKey", "CreateMessage", "CreateMessageType", "CreatePartitionFunction", "CreatePartitionScheme", "CreatePlanGuide", "CreateProcedure", "CreateQueue", "CreateRemoteServer", "CreateRemoteServiceBinding", "CreateResourcePool", "CreateRole", "CreateRoute", "CreateRule", "CreateSchema", "CreateSearchPropertyList", "CreateSecurityPolicy", "CreateSequence", "CreateServerAudit", "CreateServerAuditSpecification", "CreateServerRole", "CreateService", "CreateSpatialIndex", "CreateStatistics", "CreateSymmetricKey", "CreateSynonym", "CreateTable", "CreateTrigger", "CreateType", "CreateUser", "CreateVectorIndex", "CreateView", "CreateWorkloadGroup", "CreateXmlIndex", "CreateXmlSchemaCollection", "DataFileAutoGrow", "DataFileAutoShrink", "DatabaseMirroringStateChange", "DatabaseSuspectDataPage", "DeadlockGraph", "DenyDatabase", "DenyServer", "DeprecationAnnouncement", "DeprecationFinalSupport", "DropApplicationRole", "DropAssembly", "DropAsymmetricKey", "DropAvailabilityGroup", "DropBrokerPriority", "DropCertificate", "DropColumnEncryptionKey", "DropColumnMasterKey", "DropContract", "DropCredential", "DropCryptographicProvider", "DropDatabase", "DropDatabaseAudit", "DropDatabaseAuditSpecification", "DropDatabaseEncryptionKey", "DropDefault", "DropEndpoint", "DropEventNotification", "DropEventSession", "DropExtendedProcedure", "DropExtendedProperty", "DropExternalLanguage", "DropExternalLibrary", "DropExternalResourcePool", "DropFullTextCatalog", "DropFullTextIndex", "DropFullTextStopList", "DropFunction", "DropIndex", "DropInformationProtection", "DropLinkedServer", "DropLinkedServerLogin", "DropLogin", "DropMasterKey", "DropMessage", "DropMessageType", "DropPartitionFunction", "DropPartitionScheme", "DropPlanGuide", "DropProcedure", "DropQueue", "DropRemoteServer", "DropRemoteServiceBinding", "DropResourcePool", "DropRole", "DropRoleMember", "DropRoute", "DropRule", "DropSchema", "DropSearchPropertyList", "DropSecurityPolicy", "DropSensitivityClassification", "DropSequence", "DropServerAudit", "DropServerAuditSpecification", "DropServerRole", "DropServerRoleMember", "DropService", "DropSignature", "DropSignatureSchemaObject", "DropStatistics", "DropSymmetricKey", "DropSynonym", "DropTable", "DropTrigger", "DropType", "DropUser", "DropView", "DropWorkloadGroup", "DropXmlSchemaCollection", "ErrorLog", "EventLog", "Exception", "ExchangeSpillEvent", "ExecutionWarnings", "FtCrawlAborted", "FtCrawlStarted", "FtCrawlStopped", "GrantDatabase", "GrantServer", "HashWarning", "LockDeadlock", "LockDeadlockChain", "LockEscalation", "LogFileAutoGrow", "LogFileAutoShrink", "MissingColumnStatistics", "MissingJoinPredicate", "MountTape", "ObjectAltered", "ObjectCreated", "ObjectDeleted", "OledbCallEvent", "OledbDataReadEvent", "OledbErrors", "OledbProviderInformation", "OledbQueryInterfaceEvent", "QnDynamics", "QnParameterTable", "QnSubscription", "QnTemplate", "QueueActivation", "Rename", "RevokeDatabase", "RevokeServer", "ServerMemoryChange", "ShowPlanAllForQueryCompile", "ShowPlanXml", "ShowPlanXmlForQueryCompile", "ShowPlanXmlStatisticsProfile", "SortWarnings", "SpCacheInsert", "SpCacheMiss", "SpCacheRemove", "SpRecompile", "SqlStmtRecompile", "TraceFileClose", "UnbindDefault", "UnbindRule", "Unknown", "UpdateStatistics", "UserConfigurable0", "UserConfigurable1", "UserConfigurable2", "UserConfigurable3", "UserConfigurable4", "UserConfigurable5", "UserConfigurable6", "UserConfigurable7", "UserConfigurable8", "UserConfigurable9", "UserErrorMessage", "XQueryStaticType"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExecutableProcedureReference";
    readonly edges: readonly [{
        readonly name: "AdHocDataSource";
        readonly array: false;
        readonly kinds: readonly ["AdHocDataSource"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ExecuteParameter"];
    }, {
        readonly name: "ProcedureReference";
        readonly array: false;
        readonly kinds: readonly ["ProcedureReferenceName"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExecutableStringList";
    readonly edges: readonly [{
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["ExecuteParameter"];
    }, {
        readonly name: "Strings";
        readonly array: true;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExecuteAsClause";
    readonly edges: readonly [{
        readonly name: "Literal";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ExecuteAsOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Caller", "Login", "Owner", "Self", "String", "User"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExecuteAsFunctionOption";
    readonly edges: readonly [{
        readonly name: "ExecuteAs";
        readonly array: false;
        readonly kinds: readonly ["ExecuteAsClause"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CalledOnNullInput", "Encryption", "ExecuteAs", "Inline", "NativeCompilation", "ReturnsNullOnNullInput", "SchemaBinding"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExecuteAsProcedureOption";
    readonly edges: readonly [{
        readonly name: "ExecuteAs";
        readonly array: false;
        readonly kinds: readonly ["ExecuteAsClause"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Encryption", "ExecuteAs", "NativeCompilation", "Recompile", "SchemaBinding"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExecuteAsStatement";
    readonly edges: readonly [{
        readonly name: "Cookie";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }, {
        readonly name: "ExecuteContext";
        readonly array: false;
        readonly kinds: readonly ["ExecuteContext"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithNoRevert";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ExecuteAsTriggerOption";
    readonly edges: readonly [{
        readonly name: "ExecuteAsClause";
        readonly array: false;
        readonly kinds: readonly ["ExecuteAsClause"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Encryption", "ExecuteAsClause", "NativeCompile", "SchemaBinding"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExecuteContext";
    readonly edges: readonly [{
        readonly name: "Principal";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Caller", "Login", "Owner", "Self", "String", "User"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExecuteInsertSource";
    readonly edges: readonly [{
        readonly name: "Execute";
        readonly array: false;
        readonly kinds: readonly ["ExecuteSpecification"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExecuteOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Recompile", "ResultSets"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExecuteParameter";
    readonly edges: readonly [{
        readonly name: "ParameterValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Variable";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsOutput";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ExecuteSpecification";
    readonly edges: readonly [{
        readonly name: "ExecutableEntity";
        readonly array: false;
        readonly kinds: readonly ["ExecutableProcedureReference", "ExecutableStringList"];
    }, {
        readonly name: "ExecuteContext";
        readonly array: false;
        readonly kinds: readonly ["ExecuteContext"];
    }, {
        readonly name: "LinkedServer";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Variable";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExecuteStatement";
    readonly edges: readonly [{
        readonly name: "ExecuteSpecification";
        readonly array: false;
        readonly kinds: readonly ["ExecuteSpecification"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["ExecuteOption", "ResultSetsExecuteOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExistsPredicate";
    readonly edges: readonly [{
        readonly name: "Subquery";
        readonly array: false;
        readonly kinds: readonly ["ScalarSubquery"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExpressionCallTarget";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExpressionGroupingSpecification";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "DistributedAggregation";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ExpressionWithSortOrder";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "SortOrder";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Ascending", "Descending", "NotSpecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExternalCreateLoginSource";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExternalDataSourceLiteralOrIdentifierOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ConnectionOptions", "Credential", "DatabaseName", "ResourceManagerLocation", "ShardMapName"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExternalFileFormatContainerOption";
    readonly edges: readonly [{
        readonly name: "Suboptions";
        readonly array: true;
        readonly kinds: readonly ["ExternalFileFormatContainerOption", "ExternalFileFormatLiteralOption", "ExternalFileFormatUseDefaultTypeOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DateFormat", "Encoding", "FieldTerminator", "FirstRow", "FormatOptions", "ParserVersion", "SerDeMethod", "StringDelimiter", "UseTypeDefault"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExternalFileFormatLiteralOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DateFormat", "Encoding", "FieldTerminator", "FirstRow", "FormatOptions", "ParserVersion", "SerDeMethod", "StringDelimiter", "UseTypeDefault"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExternalFileFormatUseDefaultTypeOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "ExternalFileFormatUseDefaultType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["False", "True"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DateFormat", "Encoding", "FieldTerminator", "FirstRow", "FormatOptions", "ParserVersion", "SerDeMethod", "StringDelimiter", "UseTypeDefault"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExternalLanguageFileOption";
    readonly edges: readonly [{
        readonly name: "Content";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "EnvironmentVariables";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "FileName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Parameters";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Path";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Platform";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExternalLibraryFileOption";
    readonly edges: readonly [{
        readonly name: "Content";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Path";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Platform";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExternalResourcePoolAffinitySpecification";
    readonly edges: readonly [{
        readonly name: "ParameterValue";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "PoolAffinityRanges";
        readonly array: true;
        readonly kinds: readonly ["LiteralRange", "ProcessAffinityRange"];
    }];
    readonly attributes: readonly [{
        readonly name: "AffinityType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Cpu", "None", "NumaNode"];
        readonly flags: false;
    }, {
        readonly name: "IsAuto";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ExternalResourcePoolParameter";
    readonly edges: readonly [{
        readonly name: "AffinitySpecification";
        readonly array: false;
        readonly kinds: readonly ["ExternalResourcePoolAffinitySpecification"];
    }, {
        readonly name: "ParameterValue";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Affinity", "MaxCpuPercent", "MaxMemoryPercent", "MaxProcesses", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExternalResourcePoolStatement";
    readonly edges: readonly [{
        readonly name: "ExternalResourcePoolParameters";
        readonly array: true;
        readonly kinds: readonly ["ExternalResourcePoolParameter"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExternalStreamLiteralOrIdentifierOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataSource", "FileFormat"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExternalTableColumnDefinition";
    readonly edges: readonly [{
        readonly name: "ColumnDefinition";
        readonly array: false;
        readonly kinds: readonly ["ColumnDefinition", "ColumnDefinitionBase", "OpenRowsetColumnDefinition"];
    }, {
        readonly name: "NullableConstraint";
        readonly array: false;
        readonly kinds: readonly ["NullableConstraintDefinition"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExternalTableDistributionOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["ExternalTableReplicatedDistributionPolicy", "ExternalTableRoundRobinDistributionPolicy", "ExternalTableShardedDistributionPolicy"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Distribution", "FileFormat", "Location", "ObjectName", "RejectSampleValue", "RejectType", "RejectValue", "RejectedRowLocation", "SchemaName", "TableOptions"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExternalTableLiteralOrIdentifierOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Distribution", "FileFormat", "Location", "ObjectName", "RejectSampleValue", "RejectType", "RejectValue", "RejectedRowLocation", "SchemaName", "TableOptions"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExternalTableRejectTypeOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Distribution", "FileFormat", "Location", "ObjectName", "RejectSampleValue", "RejectType", "RejectValue", "RejectedRowLocation", "SchemaName", "TableOptions"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Percentage", "Value"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ExternalTableReplicatedDistributionPolicy";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExternalTableRoundRobinDistributionPolicy";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExternalTableShardedDistributionPolicy";
    readonly edges: readonly [{
        readonly name: "ShardingColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ExtractFromExpression";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "ExtractedElement";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "FailoverModeReplicaOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ApplyDelay", "AvailabilityMode", "EndpointUrl", "FailoverMode", "PrimaryRole", "SecondaryRole", "SessionTimeout"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Automatic", "Manual"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FederationScheme";
    readonly edges: readonly [{
        readonly name: "ColumnName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DistributionName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "FetchCursorStatement";
    readonly edges: readonly [{
        readonly name: "Cursor";
        readonly array: false;
        readonly kinds: readonly ["CursorId"];
    }, {
        readonly name: "FetchType";
        readonly array: false;
        readonly kinds: readonly ["FetchType"];
    }, {
        readonly name: "IntoVariables";
        readonly array: true;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "FetchType";
    readonly edges: readonly [{
        readonly name: "RowOffset";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "Orientation";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Absolute", "First", "Last", "Next", "None", "Prior", "Relative"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FileDeclaration";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["FileDeclarationOption", "FileGrowthFileDeclarationOption", "FileNameFileDeclarationOption", "MaxSizeFileDeclarationOption", "NameFileDeclarationOption", "SizeFileDeclarationOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsPrimary";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "FileDeclarationOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FileGrowth", "FileName", "MaxSize", "Name", "NewName", "Offline", "Size"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FileEncryptionSource";
    readonly edges: readonly [{
        readonly name: "File";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsExecutable";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "FileGroupDefinition";
    readonly edges: readonly [{
        readonly name: "FileDeclarations";
        readonly array: true;
        readonly kinds: readonly ["FileDeclaration"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "ContainsFileStream";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "ContainsMemoryOptimizedData";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsDefault";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "FileGroupOrPartitionScheme";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "PartitionSchemeColumns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "FileGrowthFileDeclarationOption";
    readonly edges: readonly [{
        readonly name: "GrowthIncrement";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FileGrowth", "FileName", "MaxSize", "Name", "NewName", "Offline", "Size"];
        readonly flags: false;
    }, {
        readonly name: "Units";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Bytes", "EB", "GB", "KB", "MB", "PB", "Percent", "TB", "Unspecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FileNameFileDeclarationOption";
    readonly edges: readonly [{
        readonly name: "OSFileName";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FileGrowth", "FileName", "MaxSize", "Name", "NewName", "Offline", "Size"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FileStreamDatabaseOption";
    readonly edges: readonly [{
        readonly name: "DirectoryName";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "NonTransactedAccess";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["Full", "Off", "ReadOnly"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FileStreamOnDropIndexOption";
    readonly edges: readonly [{
        readonly name: "FileStreamOn";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FileStreamOnTableOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FileStreamRestoreOption";
    readonly edges: readonly [{
        readonly name: "FileStreamOption";
        readonly array: false;
        readonly kinds: readonly ["FileStreamDatabaseOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BlockSize", "BufferCount", "Checksum", "CommitDifferentialBase", "ContinueAfterError", "DboOnly", "EnableBroker", "EnhancedIntegrity", "ErrorBrokerConversations", "File", "FileStream", "KeepReplication", "KeepTemporalRetention", "LoadHistory", "MaxTransferSize", "MediaName", "MediaPassword", "Move", "NewBroker", "NoChecksum", "NoLog", "NoRecovery", "NoRewind", "NoUnload", "Online", "Partial", "Password", "Recovery", "Replace", "Restart", "RestrictedUser", "Rewind", "Snapshot", "SnapshotImport", "SnapshotRestorePhase", "Standby", "Stats", "Stop", "StopAt", "StopOnError", "Unload", "Verbose", "0"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FileTableCollateFileNameTableOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FileTableConstraintNameTableOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FileTableDirectoryTableOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ForceSeekTableHint";
    readonly edges: readonly [{
        readonly name: "ColumnValues";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "IndexValue";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "HintKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FastFirstRow", "ForceScan", "ForceSeek", "HoldLock", "IgnoreConstraints", "IgnoreTriggers", "Index", "KeepDefaults", "KeepIdentity", "NoExpand", "NoLock", "NoWait", "None", "PagLock", "ReadCommitted", "ReadCommittedLock", "ReadPast", "ReadUncommitted", "RepeatableRead", "Rowlock", "Serializable", "Snapshot", "SpatialWindowMaxCells", "TabLock", "TabLockX", "UpdLock", "XLock"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ForeignKeyConstraintDefinition";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ConstraintIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ReferenceTableName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "ReferencedTableColumns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "DeleteAction";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Cascade", "NoAction", "NotSpecified", "SetDefault", "SetNull"];
        readonly flags: false;
    }, {
        readonly name: "IsEnforced";
        readonly kind: "boolean";
        readonly nullable: true;
    }, {
        readonly name: "NotForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "UpdateAction";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Cascade", "NoAction", "NotSpecified", "SetDefault", "SetNull"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FromClause";
    readonly edges: readonly [{
        readonly name: "PredictTableReference";
        readonly array: true;
        readonly kinds: readonly ["PredictTableReference"];
    }, {
        readonly name: "TableReferences";
        readonly array: true;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "FullTextCatalogAndFileGroup";
    readonly edges: readonly [{
        readonly name: "CatalogName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FileGroupName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "FileGroupIsFirst";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "FullTextIndexColumn";
    readonly edges: readonly [{
        readonly name: "LanguageTerm";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "TypeColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "StatisticalSemantics";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "FullTextPredicate";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "LanguageTerm";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "PropertyName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "FullTextFunctionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Contains", "FreeText", "None"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FullTextStopListAction";
    readonly edges: readonly [{
        readonly name: "LanguageTerm";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "StopWord";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsAdd";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsAll";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "FullTextTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "Language";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "PropertyName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "SearchCondition";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "TableName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "TopN";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "FullTextFunctionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Contains", "FreeText", "None"];
        readonly flags: false;
    }];
}, {
    readonly kind: "FunctionCall";
    readonly edges: readonly [{
        readonly name: "AbsentOrNullOnNull";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "CallTarget";
        readonly array: false;
        readonly kinds: readonly ["ExpressionCallTarget", "MultiPartIdentifierCallTarget", "UserDefinedTypeCallTarget"];
    }, {
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FunctionName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "IgnoreRespectNulls";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "JsonOrderByClause";
        readonly array: false;
        readonly kinds: readonly ["OrderByClause"];
    }, {
        readonly name: "JsonParameters";
        readonly array: true;
        readonly kinds: readonly ["JsonKeyValue"];
    }, {
        readonly name: "OverClause";
        readonly array: false;
        readonly kinds: readonly ["OverClause"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "ReturnType";
        readonly array: true;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "TrimOptions";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "WithinGroupClause";
        readonly array: false;
        readonly kinds: readonly ["WithinGroupClause"];
    }];
    readonly attributes: readonly [{
        readonly name: "UniqueRowFilter";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "Distinct", "NotSpecified"];
        readonly flags: false;
    }, {
        readonly name: "WithArrayWrapper";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "FunctionCallSetClause";
    readonly edges: readonly [{
        readonly name: "MutatorFunction";
        readonly array: false;
        readonly kinds: readonly ["FunctionCall"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "FunctionOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CalledOnNullInput", "Encryption", "ExecuteAs", "Inline", "NativeCompilation", "ReturnsNullOnNullInput", "SchemaBinding"];
        readonly flags: false;
    }];
}, {
    readonly kind: "GeneralSetCommand";
    readonly edges: readonly [{
        readonly name: "Parameter";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "CommandType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ContextInfo", "DateFirst", "DateFormat", "DeadlockPriority", "Language", "LockTimeout", "None", "QueryGovernorCostLimit"];
        readonly flags: false;
    }];
}, {
    readonly kind: "GenericConfigurationOption";
    readonly edges: readonly [{
        readonly name: "GenericOptionKind";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "GenericOptionState";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrScalarExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DWCompatibilityLevel", "LegacyCardinalityEstimate", "MaxDop", "ParameterSniffing", "QueryOptimizerHotFixes"];
        readonly flags: false;
    }];
}, {
    readonly kind: "GetConversationGroupStatement";
    readonly edges: readonly [{
        readonly name: "GroupId";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }, {
        readonly name: "Queue";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "GlobalFunctionTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "GlobalVariableExpression";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Name";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "GoToStatement";
    readonly edges: readonly [{
        readonly name: "LabelName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "GrandTotalGroupingSpecification";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "GrantStatement";
    readonly edges: readonly [{
        readonly name: "AsClause";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Permissions";
        readonly array: true;
        readonly kinds: readonly ["Permission"];
    }, {
        readonly name: "Principals";
        readonly array: true;
        readonly kinds: readonly ["SecurityPrincipal"];
    }, {
        readonly name: "SecurityTargetObject";
        readonly array: false;
        readonly kinds: readonly ["SecurityTargetObject"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithGrantOption";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "GrantStatement80";
    readonly edges: readonly [{
        readonly name: "AsClause";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SecurityElement80";
        readonly array: false;
        readonly kinds: readonly ["CommandSecurityElement80", "PrivilegeSecurityElement80"];
    }, {
        readonly name: "SecurityUserClause80";
        readonly array: false;
        readonly kinds: readonly ["SecurityUserClause80"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithGrantOption";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "GraphConnectionBetweenNodes";
    readonly edges: readonly [{
        readonly name: "FromNode";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "ToNode";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "GraphConnectionConstraintDefinition";
    readonly edges: readonly [{
        readonly name: "ConstraintIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FromNodeToNodeList";
        readonly array: true;
        readonly kinds: readonly ["GraphConnectionBetweenNodes"];
    }];
    readonly attributes: readonly [{
        readonly name: "DeleteAction";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Cascade", "NoAction", "NotSpecified", "SetDefault", "SetNull"];
        readonly flags: false;
    }];
}, {
    readonly kind: "GraphMatchCompositeExpression";
    readonly edges: readonly [{
        readonly name: "Edge";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "LeftNode";
        readonly array: false;
        readonly kinds: readonly ["GraphMatchNodeExpression"];
    }, {
        readonly name: "RightNode";
        readonly array: false;
        readonly kinds: readonly ["GraphMatchNodeExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "ArrowOnRight";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "GraphMatchExpression";
    readonly edges: readonly [{
        readonly name: "Edge";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "LeftNode";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "RightNode";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "ArrowOnRight";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "GraphMatchLastNodePredicate";
    readonly edges: readonly [{
        readonly name: "LeftExpression";
        readonly array: false;
        readonly kinds: readonly ["GraphMatchNodeExpression"];
    }, {
        readonly name: "RightExpression";
        readonly array: false;
        readonly kinds: readonly ["GraphMatchNodeExpression"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "GraphMatchNodeExpression";
    readonly edges: readonly [{
        readonly name: "Node";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "UsesLastNode";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "GraphMatchPredicate";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "GraphMatchRecursivePredicate";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: true;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "OuterNodeExpression";
        readonly array: false;
        readonly kinds: readonly ["GraphMatchNodeExpression"];
    }, {
        readonly name: "RecursiveQuantifier";
        readonly array: false;
        readonly kinds: readonly ["GraphRecursiveMatchQuantifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "AnchorOnLeft";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Function";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ShortestPath"];
        readonly flags: false;
    }];
}, {
    readonly kind: "GraphRecursiveMatchQuantifier";
    readonly edges: readonly [{
        readonly name: "LowerLimit";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "UpperLimit";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsPlusSign";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "GridParameter";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Parameter";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Level1", "Level2", "Level3", "Level4", "None"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Above_Normal", "Below_Normal", "High", "Low", "Medium", "Normal", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "GridsSpatialIndexOption";
    readonly edges: readonly [{
        readonly name: "GridParameters";
        readonly array: true;
        readonly kinds: readonly ["GridParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "GroupByClause";
    readonly edges: readonly [{
        readonly name: "GroupingSpecifications";
        readonly array: true;
        readonly kinds: readonly ["CompositeGroupingSpecification", "CubeGroupingSpecification", "ExpressionGroupingSpecification", "GrandTotalGroupingSpecification", "GroupingSetsGroupingSpecification", "RollupGroupingSpecification"];
    }];
    readonly attributes: readonly [{
        readonly name: "All";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "GroupByOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Cube", "None", "Rollup"];
        readonly flags: false;
    }];
}, {
    readonly kind: "GroupingSetsGroupingSpecification";
    readonly edges: readonly [{
        readonly name: "Sets";
        readonly array: true;
        readonly kinds: readonly ["CompositeGroupingSpecification", "CubeGroupingSpecification", "ExpressionGroupingSpecification", "GrandTotalGroupingSpecification", "GroupingSetsGroupingSpecification", "RollupGroupingSpecification"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "HadrAvailabilityGroupDatabaseOption";
    readonly edges: readonly [{
        readonly name: "GroupName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "HadrOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AvailabilityGroup", "Off", "Resume", "Suspend"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "HadrDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "HadrOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AvailabilityGroup", "Off", "Resume", "Suspend"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "HavingClause";
    readonly edges: readonly [{
        readonly name: "SearchCondition";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "IIfCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ElseExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Predicate";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "ThenExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "IPv4";
    readonly edges: readonly [{
        readonly name: "OctetFour";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "OctetOne";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "OctetThree";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "OctetTwo";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "Identifier";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "QuoteType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DoubleQuote", "NotQuoted", "SquareBracket"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "IdentifierAtomicBlockOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DateFirst", "DateFormat", "DelayedDurability", "IsolationLevel", "Language"];
        readonly flags: false;
    }];
}, {
    readonly kind: "IdentifierDatabaseOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "IdentifierLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "QuoteType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DoubleQuote", "NotQuoted", "SquareBracket"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "IdentifierOrScalarExpression";
    readonly edges: readonly [{
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ScalarExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "IdentifierOrValueExpression";
    readonly edges: readonly [{
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ValueExpression";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "IdentifierPrincipalOption";
    readonly edges: readonly [{
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CheckExpiration", "CheckPolicy", "Credential", "DefaultDatabase", "DefaultLanguage", "DefaultSchema", "Login", "Name", "NoCredential", "Object_ID", "Password", "Sid", "Type"];
        readonly flags: false;
    }];
}, {
    readonly kind: "IdentifierSnippet";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "QuoteType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DoubleQuote", "NotQuoted", "SquareBracket"];
        readonly flags: false;
    }, {
        readonly name: "Script";
        readonly kind: "string";
        readonly nullable: true;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "IdentityFunctionCall";
    readonly edges: readonly [{
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "Increment";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Seed";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "IdentityOptions";
    readonly edges: readonly [{
        readonly name: "IdentityIncrement";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "IdentitySeed";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsIdentityNotForReplication";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "IdentityValueKeyOption";
    readonly edges: readonly [{
        readonly name: "IdentityPhrase";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Algorithm", "CreationDisposition", "IdentityValue", "KeySource", "ProviderKeyName"];
        readonly flags: false;
    }];
}, {
    readonly kind: "IfStatement";
    readonly edges: readonly [{
        readonly name: "ElseStatement";
        readonly array: false;
        readonly kinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamStatement", "CreateExternalStreamingJobStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamStatement", "DropExternalStreamingJobStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "TSqlStatementSnippet", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    }, {
        readonly name: "Predicate";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "ThenStatement";
        readonly array: false;
        readonly kinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamStatement", "CreateExternalStreamingJobStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamStatement", "DropExternalStreamingJobStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "TSqlStatementSnippet", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "IgnoreDupKeyIndexOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }, {
        readonly name: "SuppressMessagesOption";
        readonly kind: "boolean";
        readonly nullable: true;
    }];
}, {
    readonly kind: "InPredicate";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Subquery";
        readonly array: false;
        readonly kinds: readonly ["ScalarSubquery"];
    }, {
        readonly name: "Values";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "NotDefined";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "IndexDefinition";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnWithSortOrder"];
    }, {
        readonly name: "FileStreamOn";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "FilterPredicate";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "IncludeColumns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "IndexType";
        readonly array: false;
        readonly kinds: readonly ["IndexType"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OnFileGroupOrPartitionScheme";
        readonly array: false;
        readonly kinds: readonly ["FileGroupOrPartitionScheme"];
    }];
    readonly attributes: readonly [{
        readonly name: "Unique";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "IndexExpressionOption";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "IndexStateOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "IndexTableHint";
    readonly edges: readonly [{
        readonly name: "IndexValues";
        readonly array: true;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "HintKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FastFirstRow", "ForceScan", "ForceSeek", "HoldLock", "IgnoreConstraints", "IgnoreTriggers", "Index", "KeepDefaults", "KeepIdentity", "NoExpand", "NoLock", "NoWait", "None", "PagLock", "ReadCommitted", "ReadCommittedLock", "ReadPast", "ReadUncommitted", "RepeatableRead", "Rowlock", "Serializable", "Snapshot", "SpatialWindowMaxCells", "TabLock", "TabLockX", "UpdLock", "XLock"];
        readonly flags: false;
    }];
}, {
    readonly kind: "IndexType";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IndexTypeKind";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["Clustered", "ClusteredColumnStore", "NonClustered", "NonClusteredColumnStore", "NonClusteredHash"];
        readonly flags: false;
    }];
}, {
    readonly kind: "InlineDerivedTable";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "RowValues";
        readonly array: true;
        readonly kinds: readonly ["RowValue"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "InlineFunctionOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CalledOnNullInput", "Encryption", "ExecuteAs", "Inline", "NativeCompilation", "ReturnsNullOnNullInput", "SchemaBinding"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "InlineResultSetDefinition";
    readonly edges: readonly [{
        readonly name: "ResultColumnDefinitions";
        readonly array: true;
        readonly kinds: readonly ["ResultColumnDefinition"];
    }];
    readonly attributes: readonly [{
        readonly name: "ResultSetType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ForXml", "Inline", "Object", "Type"];
        readonly flags: false;
    }];
}, {
    readonly kind: "InsertBulkColumnDefinition";
    readonly edges: readonly [{
        readonly name: "Column";
        readonly array: false;
        readonly kinds: readonly ["ColumnDefinition", "ColumnDefinitionBase", "OpenRowsetColumnDefinition"];
    }];
    readonly attributes: readonly [{
        readonly name: "NullNotNull";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotNull", "NotSpecified", "Null"];
        readonly flags: false;
    }];
}, {
    readonly kind: "InsertBulkStatement";
    readonly edges: readonly [{
        readonly name: "ColumnDefinitions";
        readonly array: true;
        readonly kinds: readonly ["InsertBulkColumnDefinition"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["BulkInsertOption", "LiteralBulkInsertOption", "OrderBulkInsertOption"];
    }, {
        readonly name: "To";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "InsertMergeAction";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "Source";
        readonly array: false;
        readonly kinds: readonly ["ValuesInsertSource"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "InsertSpecification";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "InsertSource";
        readonly array: false;
        readonly kinds: readonly ["ExecuteInsertSource", "SelectInsertSource", "ValuesInsertSource"];
    }, {
        readonly name: "OutputClause";
        readonly array: false;
        readonly kinds: readonly ["OutputClause"];
    }, {
        readonly name: "OutputIntoClause";
        readonly array: false;
        readonly kinds: readonly ["OutputIntoClause"];
    }, {
        readonly name: "Target";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "TopRowFilter";
        readonly array: false;
        readonly kinds: readonly ["TopRowFilter"];
    }];
    readonly attributes: readonly [{
        readonly name: "InsertOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Into", "None", "Over"];
        readonly flags: false;
    }];
}, {
    readonly kind: "InsertStatement";
    readonly edges: readonly [{
        readonly name: "InsertSpecification";
        readonly array: false;
        readonly kinds: readonly ["InsertSpecification"];
    }, {
        readonly name: "OptimizerHints";
        readonly array: true;
        readonly kinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    }, {
        readonly name: "WithCtesAndXmlNamespaces";
        readonly array: false;
        readonly kinds: readonly ["WithCtesAndXmlNamespaces"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "IntegerLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "InternalOpenRowset";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "VarArgs";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "InvokeExternalApiFunctionCall";
    readonly edges: readonly [{
        readonly name: "Arguments";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FunctionName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "FunctionSetName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "JoinParenthesisTableReference";
    readonly edges: readonly [{
        readonly name: "Join";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "JsonForClause";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["JsonForClauseOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "JsonForClauseOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Auto", "IncludeNullValues", "None", "Path", "Root", "WithoutArrayWrapper"];
        readonly flags: true;
    }];
}, {
    readonly kind: "JsonKeyValue";
    readonly edges: readonly [{
        readonly name: "JsonKeyName";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "JsonValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "KeySourceKeyOption";
    readonly edges: readonly [{
        readonly name: "PassPhrase";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Algorithm", "CreationDisposition", "IdentityValue", "KeySource", "ProviderKeyName"];
        readonly flags: false;
    }];
}, {
    readonly kind: "KillQueryNotificationSubscriptionStatement";
    readonly edges: readonly [{
        readonly name: "SubscriptionId";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "All";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "KillStatement";
    readonly edges: readonly [{
        readonly name: "Parameter";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithStatusOnly";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "KillStatsJobStatement";
    readonly edges: readonly [{
        readonly name: "JobId";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "LabelStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "LedgerOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LedgerTableOption";
    readonly edges: readonly [{
        readonly name: "LedgerViewOption";
        readonly array: false;
        readonly kinds: readonly ["LedgerViewOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "AppendOnly";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LedgerViewOption";
    readonly edges: readonly [{
        readonly name: "OperationTypeColumnName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OperationTypeDescColumnName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SequenceNumberColumnName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "TransactionIdColumnName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ViewName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LeftFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "LikePredicate";
    readonly edges: readonly [{
        readonly name: "EscapeExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "FirstExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SecondExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "NotDefined";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OdbcEscape";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "LineNoStatement";
    readonly edges: readonly [{
        readonly name: "LineNo";
        readonly array: false;
        readonly kinds: readonly ["IntegerLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ListTypeCopyOption";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["CopyColumnOption", "CopyCredentialOption", "ListTypeCopyOption", "SingleValueTypeCopyOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ListenerIPEndpointProtocolOption";
    readonly edges: readonly [{
        readonly name: "IPv4PartOne";
        readonly array: false;
        readonly kinds: readonly ["IPv4"];
    }, {
        readonly name: "IPv4PartTwo";
        readonly array: false;
        readonly kinds: readonly ["IPv4"];
    }, {
        readonly name: "IPv6";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsAll";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["HttpAuthentication", "HttpAuthenticationRealm", "HttpClearPort", "HttpCompression", "HttpDefaultLogonDomain", "HttpOptions", "HttpPath", "HttpPorts", "HttpSite", "HttpSslPort", "None", "TcpListenerIP", "TcpListenerPort", "TcpOptions"];
        readonly flags: true;
    }];
}, {
    readonly kind: "LiteralAtomicBlockOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DateFirst", "DateFormat", "DelayedDurability", "IsolationLevel", "Language"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralAuditTargetOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FilePath", "MaxFiles", "MaxRolloverFiles", "MaxSize", "Path", "ReserveDiskSpace", "RetentionDays"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralAvailabilityGroupOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["RequiredCopiesToCommit"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralBulkInsertOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BatchSize", "CheckConstraints", "CodePage", "DataCompression", "DataFileFormat", "DataFileType", "DataSource", "ErrorDataSource", "ErrorFile", "EscapeChar", "FieldQuote", "FieldTerminator", "FireTriggers", "FirstRow", "FormatDataSource", "FormatFile", "HeaderRow", "IncludeHidden", "KeepIdentity", "KeepNulls", "KilobytesPerBatch", "LastRow", "MaxErrors", "NoTriggers", "None", "Order", "ParserVersion", "RowTerminator", "RowsPerBatch", "RowsetOptions", "SingleBlob", "SingleClob", "SingleNClob", "TabLock"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralDatabaseOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralEndpointProtocolOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["HttpAuthentication", "HttpAuthenticationRealm", "HttpClearPort", "HttpCompression", "HttpDefaultLogonDomain", "HttpOptions", "HttpPath", "HttpPorts", "HttpSite", "HttpSslPort", "None", "TcpListenerIP", "TcpListenerPort", "TcpOptions"];
        readonly flags: true;
    }];
}, {
    readonly kind: "LiteralOpenRowsetCosmosOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Connection", "Credential", "Object", "Provider", "Server_Credential"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralOptimizerHint";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "HintKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AlterColumnPlan", "BypassOptimizerQueue", "CardinalityTunerLimit", "CheckConstraintsPlan", "ConcatUnion", "ExpandViews", "Fast", "ForceOrder", "HashGroup", "HashJoin", "HashUnion", "IgnoreNonClusteredColumnStoreIndex", "KeepFixedPlan", "KeepPlan", "KeepUnion", "Label", "LoopJoin", "MaxDop", "MaxGrantPercent", "MaxRecursion", "MergeJoin", "MergeUnion", "MinGrantPercent", "NoPerformanceSpool", "OptimizeCorrelatedUnionAll", "OptimizeFor", "OrderGroup", "ParameterizationForced", "ParameterizationSimple", "QueryTraceOn", "Recompile", "RobustPlan", "ShrinkDBPlan", "TableHints", "Unspecified", "UsePlan"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralOptionValue";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "LiteralPayloadOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }];
}, {
    readonly kind: "LiteralPrincipalOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CheckExpiration", "CheckPolicy", "Credential", "DefaultDatabase", "DefaultLanguage", "DefaultSchema", "Login", "Name", "NoCredential", "Object_ID", "Password", "Sid", "Type"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralRange";
    readonly edges: readonly [{
        readonly name: "From";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "To";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "LiteralReplicaOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ApplyDelay", "AvailabilityMode", "EndpointUrl", "FailoverMode", "PrimaryRole", "SecondaryRole", "SessionTimeout"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralSessionOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EventRetention", "MaxDispatchLatency", "MaxEventSize", "MaxMemory", "MemoryPartition", "StartUpState", "TrackCausality"];
        readonly flags: false;
    }, {
        readonly name: "Unit";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Bytes", "EB", "GB", "KB", "MB", "PB", "Percent", "TB", "Unspecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralStatisticsOption";
    readonly edges: readonly [{
        readonly name: "Literal";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "AutoDrop", "Columns", "FullScan", "Incremental", "Index", "NoRecompute", "PageCount", "PersistSamplePercent", "Resample", "RowCount", "Rows", "SamplePercent", "SampleRows", "StatsStream"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LiteralTableHint";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "HintKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FastFirstRow", "ForceScan", "ForceSeek", "HoldLock", "IgnoreConstraints", "IgnoreTriggers", "Index", "KeepDefaults", "KeepIdentity", "NoExpand", "NoLock", "NoWait", "None", "PagLock", "ReadCommitted", "ReadCommittedLock", "ReadPast", "ReadUncommitted", "RepeatableRead", "Rowlock", "Serializable", "Snapshot", "SpatialWindowMaxCells", "TabLock", "TabLockX", "UpdLock", "XLock"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LocationOption";
    readonly edges: readonly [{
        readonly name: "LocationValue";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LockEscalationTableOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Auto", "Disable", "Table"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LoginTypePayloadOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsWindows";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }];
}, {
    readonly kind: "LowPriorityLockWaitAbortAfterWaitOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "AbortAfterWait";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Blockers", "None", "Self"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AbortAfterWait", "MaxDuration"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LowPriorityLockWaitMaxDurationOption";
    readonly edges: readonly [{
        readonly name: "MaxDuration";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AbortAfterWait", "MaxDuration"];
        readonly flags: false;
    }, {
        readonly name: "Unit";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["Days", "Hours", "Minutes", "Seconds"];
        readonly flags: false;
    }];
}, {
    readonly kind: "LowPriorityLockWaitTableSwitchOption";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["LowPriorityLockWaitAbortAfterWaitOption", "LowPriorityLockWaitMaxDurationOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["LowPriorityLockWait", "TruncateTarget"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MaxDispatchLatencySessionOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsInfinite";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EventRetention", "MaxDispatchLatency", "MaxEventSize", "MaxMemory", "MemoryPartition", "StartUpState", "TrackCausality"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MaxDopConfigurationOption";
    readonly edges: readonly [{
        readonly name: "GenericOptionKind";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DWCompatibilityLevel", "LegacyCardinalityEstimate", "MaxDop", "ParameterSniffing", "QueryOptimizerHotFixes"];
        readonly flags: false;
    }, {
        readonly name: "Primary";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "MaxDurationOption";
    readonly edges: readonly [{
        readonly name: "MaxDuration";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "Unit";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["Days", "Hours", "Minutes", "Seconds"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MaxLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "MaxRolloverFilesAuditTargetOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsUnlimited";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FilePath", "MaxFiles", "MaxRolloverFiles", "MaxSize", "Path", "ReserveDiskSpace", "RetentionDays"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MaxSizeAuditTargetOption";
    readonly edges: readonly [{
        readonly name: "Size";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsUnlimited";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FilePath", "MaxFiles", "MaxRolloverFiles", "MaxSize", "Path", "ReserveDiskSpace", "RetentionDays"];
        readonly flags: false;
    }, {
        readonly name: "Unit";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Bytes", "EB", "GB", "KB", "MB", "PB", "Percent", "TB", "Unspecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MaxSizeDatabaseOption";
    readonly edges: readonly [{
        readonly name: "MaxSize";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "Units";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Bytes", "EB", "GB", "KB", "MB", "PB", "Percent", "TB", "Unspecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MaxSizeFileDeclarationOption";
    readonly edges: readonly [{
        readonly name: "MaxSize";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FileGrowth", "FileName", "MaxSize", "Name", "NewName", "Offline", "Size"];
        readonly flags: false;
    }, {
        readonly name: "Units";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Bytes", "EB", "GB", "KB", "MB", "PB", "Percent", "TB", "Unspecified"];
        readonly flags: false;
    }, {
        readonly name: "Unlimited";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "MemoryOptimizedTableOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MemoryPartitionSessionOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EventRetention", "MaxDispatchLatency", "MaxEventSize", "MaxMemory", "MemoryPartition", "StartUpState", "TrackCausality"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["None", "PerCpu", "PerNode", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MergeActionClause";
    readonly edges: readonly [{
        readonly name: "Action";
        readonly array: false;
        readonly kinds: readonly ["DeleteMergeAction", "InsertMergeAction", "UpdateMergeAction"];
    }, {
        readonly name: "SearchCondition";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }];
    readonly attributes: readonly [{
        readonly name: "Condition";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Matched", "NotMatched", "NotMatchedBySource", "NotMatchedByTarget", "NotSpecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MergeSpecification";
    readonly edges: readonly [{
        readonly name: "ActionClauses";
        readonly array: true;
        readonly kinds: readonly ["MergeActionClause"];
    }, {
        readonly name: "OutputClause";
        readonly array: false;
        readonly kinds: readonly ["OutputClause"];
    }, {
        readonly name: "OutputIntoClause";
        readonly array: false;
        readonly kinds: readonly ["OutputIntoClause"];
    }, {
        readonly name: "SearchCondition";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "TableAlias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "TableReference";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "Target";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "TopRowFilter";
        readonly array: false;
        readonly kinds: readonly ["TopRowFilter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "MergeStatement";
    readonly edges: readonly [{
        readonly name: "MergeSpecification";
        readonly array: false;
        readonly kinds: readonly ["MergeSpecification"];
    }, {
        readonly name: "OptimizerHints";
        readonly array: true;
        readonly kinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    }, {
        readonly name: "WithCtesAndXmlNamespaces";
        readonly array: false;
        readonly kinds: readonly ["WithCtesAndXmlNamespaces"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "MethodSpecifier";
    readonly edges: readonly [{
        readonly name: "AssemblyName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ClassName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "MethodName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "MirrorToClause";
    readonly edges: readonly [{
        readonly name: "Devices";
        readonly array: true;
        readonly kinds: readonly ["DeviceInfo"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "MoneyLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "MoveConversationStatement";
    readonly edges: readonly [{
        readonly name: "Conversation";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Group";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "MoveRestoreOption";
    readonly edges: readonly [{
        readonly name: "LogicalFileName";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "OSFileName";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BlockSize", "BufferCount", "Checksum", "CommitDifferentialBase", "ContinueAfterError", "DboOnly", "EnableBroker", "EnhancedIntegrity", "ErrorBrokerConversations", "File", "FileStream", "KeepReplication", "KeepTemporalRetention", "LoadHistory", "MaxTransferSize", "MediaName", "MediaPassword", "Move", "NewBroker", "NoChecksum", "NoLog", "NoRecovery", "NoRewind", "NoUnload", "Online", "Partial", "Password", "Recovery", "Replace", "Restart", "RestrictedUser", "Rewind", "Snapshot", "SnapshotImport", "SnapshotRestorePhase", "Standby", "Stats", "Stop", "StopAt", "StopOnError", "Unload", "Verbose", "0"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MoveToDropIndexOption";
    readonly edges: readonly [{
        readonly name: "MoveTo";
        readonly array: false;
        readonly kinds: readonly ["FileGroupOrPartitionScheme"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "MultiPartIdentifier";
    readonly edges: readonly [{
        readonly name: "Identifiers";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Count";
        readonly kind: "integer";
        readonly nullable: false;
    }];
}, {
    readonly kind: "MultiPartIdentifierCallTarget";
    readonly edges: readonly [{
        readonly name: "MultiPartIdentifier";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "NameFileDeclarationOption";
    readonly edges: readonly [{
        readonly name: "LogicalFileName";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsNewName";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FileGrowth", "FileName", "MaxSize", "Name", "NewName", "Offline", "Size"];
        readonly flags: false;
    }];
}, {
    readonly kind: "NamedTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SchemaObject";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "TableHints";
        readonly array: true;
        readonly kinds: readonly ["ForceSeekTableHint", "IndexTableHint", "LiteralTableHint", "TableHint"];
    }, {
        readonly name: "TableSampleClause";
        readonly array: false;
        readonly kinds: readonly ["TableSampleClause"];
    }, {
        readonly name: "TemporalClause";
        readonly array: false;
        readonly kinds: readonly ["TemporalClause"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "NextValueForExpression";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OverClause";
        readonly array: false;
        readonly kinds: readonly ["OverClause"];
    }, {
        readonly name: "SequenceName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "NullIfExpression";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FirstExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SecondExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "NullLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "NullableConstraintDefinition";
    readonly edges: readonly [{
        readonly name: "ConstraintIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Nullable";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "NumericLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "OdbcConvertSpecification";
    readonly edges: readonly [{
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "OdbcFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParametersUsed";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "OdbcLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsNational";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "OdbcLiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Date", "Guid", "Time", "Timestamp"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "OdbcQualifiedJoinTableReference";
    readonly edges: readonly [{
        readonly name: "TableReference";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "OffsetClause";
    readonly edges: readonly [{
        readonly name: "FetchExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "OffsetExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithApproximate";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "OnFailureAuditOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OnFailureAction";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Continue", "FailOperation", "Shutdown"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AuditGuid", "OnFailure", "OperatorAudit", "QueueDelay", "State"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffAssemblyOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["PermissionSet", "UncheckedData", "Visibility"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffAtomicBlockOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DateFirst", "DateFormat", "DelayedDurability", "IsolationLevel", "Language"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffAuditTargetOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FilePath", "MaxFiles", "MaxRolloverFiles", "MaxSize", "Path", "ReserveDiskSpace", "RetentionDays"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffDialogOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Encryption", "Lifetime", "RelatedConversation", "RelatedConversationGroup"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffFullTextCatalogOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AccentSensitivity"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffOptionValue";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffPrimaryConfigurationOption";
    readonly edges: readonly [{
        readonly name: "GenericOptionKind";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DWCompatibilityLevel", "LegacyCardinalityEstimate", "MaxDop", "ParameterSniffing", "QueryOptimizerHotFixes"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffPrincipalOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CheckExpiration", "CheckPolicy", "Credential", "DefaultDatabase", "DefaultLanguage", "DefaultSchema", "Login", "Name", "NoCredential", "Object_ID", "Password", "Sid", "Type"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffRemoteServiceBindingOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Anonymous", "User"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffSessionOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["EventRetention", "MaxDispatchLatency", "MaxEventSize", "MaxMemory", "MemoryPartition", "StartUpState", "TrackCausality"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnOffStatisticsOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "AutoDrop", "Columns", "FullScan", "Incremental", "Index", "NoRecompute", "PageCount", "PersistSamplePercent", "Resample", "RowCount", "Rows", "SamplePercent", "SampleRows", "StatsStream"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OnlineIndexLowPriorityLockWaitOption";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["LowPriorityLockWaitAbortAfterWaitOption", "LowPriorityLockWaitMaxDurationOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "OnlineIndexOption";
    readonly edges: readonly [{
        readonly name: "LowPriorityLockWaitOption";
        readonly array: false;
        readonly kinds: readonly ["OnlineIndexLowPriorityLockWaitOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OpenCursorStatement";
    readonly edges: readonly [{
        readonly name: "Cursor";
        readonly array: false;
        readonly kinds: readonly ["CursorId"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "OpenJsonTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "RowPattern";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SchemaDeclarationItems";
        readonly array: true;
        readonly kinds: readonly ["SchemaDeclarationItemOpenjson"];
    }, {
        readonly name: "Variable";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "OpenMasterKeyStatement";
    readonly edges: readonly [{
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "OpenQueryTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "LinkedServer";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Query";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "OpenRowsetColumnDefinition";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ColumnIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ColumnOrdinal";
        readonly array: false;
        readonly kinds: readonly ["IntegerLiteral"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "JsonPath";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "OpenRowsetCosmos";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["LiteralOpenRowsetCosmosOption", "OpenRowsetCosmosOption"];
    }, {
        readonly name: "WithColumns";
        readonly array: true;
        readonly kinds: readonly ["OpenRowsetColumnDefinition"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "OpenRowsetCosmosOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Connection", "Credential", "Object", "Provider", "Server_Credential"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OpenRowsetTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataSource";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Object";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "ProviderName";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "ProviderString";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "Query";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "UserId";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "WithColumns";
        readonly array: true;
        readonly kinds: readonly ["OpenRowsetColumnDefinition"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "OpenSymmetricKeyStatement";
    readonly edges: readonly [{
        readonly name: "DecryptionMechanism";
        readonly array: false;
        readonly kinds: readonly ["CryptoMechanism"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "OpenXmlTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Flags";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "RowPattern";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "SchemaDeclarationItems";
        readonly array: true;
        readonly kinds: readonly ["SchemaDeclarationItem", "SchemaDeclarationItemOpenjson"];
    }, {
        readonly name: "TableName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Variable";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "OperatorAuditOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AuditGuid", "OnFailure", "OperatorAudit", "QueueDelay", "State"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OptimizeForOptimizerHint";
    readonly edges: readonly [{
        readonly name: "Pairs";
        readonly array: true;
        readonly kinds: readonly ["VariableValuePair"];
    }];
    readonly attributes: readonly [{
        readonly name: "HintKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AlterColumnPlan", "BypassOptimizerQueue", "CardinalityTunerLimit", "CheckConstraintsPlan", "ConcatUnion", "ExpandViews", "Fast", "ForceOrder", "HashGroup", "HashJoin", "HashUnion", "IgnoreNonClusteredColumnStoreIndex", "KeepFixedPlan", "KeepPlan", "KeepUnion", "Label", "LoopJoin", "MaxDop", "MaxGrantPercent", "MaxRecursion", "MergeJoin", "MergeUnion", "MinGrantPercent", "NoPerformanceSpool", "OptimizeCorrelatedUnionAll", "OptimizeFor", "OrderGroup", "ParameterizationForced", "ParameterizationSimple", "QueryTraceOn", "Recompile", "RobustPlan", "ShrinkDBPlan", "TableHints", "Unspecified", "UsePlan"];
        readonly flags: false;
    }, {
        readonly name: "IsForUnknown";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "OptimizedLockingDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OptimizerHint";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "HintKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AlterColumnPlan", "BypassOptimizerQueue", "CardinalityTunerLimit", "CheckConstraintsPlan", "ConcatUnion", "ExpandViews", "Fast", "ForceOrder", "HashGroup", "HashJoin", "HashUnion", "IgnoreNonClusteredColumnStoreIndex", "KeepFixedPlan", "KeepPlan", "KeepUnion", "Label", "LoopJoin", "MaxDop", "MaxGrantPercent", "MaxRecursion", "MergeJoin", "MergeUnion", "MinGrantPercent", "NoPerformanceSpool", "OptimizeCorrelatedUnionAll", "OptimizeFor", "OrderGroup", "ParameterizationForced", "ParameterizationSimple", "QueryTraceOn", "Recompile", "RobustPlan", "ShrinkDBPlan", "TableHints", "Unspecified", "UsePlan"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OrderBulkInsertOption";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnWithSortOrder"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsUnique";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BatchSize", "CheckConstraints", "CodePage", "DataCompression", "DataFileFormat", "DataFileType", "DataSource", "ErrorDataSource", "ErrorFile", "EscapeChar", "FieldQuote", "FieldTerminator", "FireTriggers", "FirstRow", "FormatDataSource", "FormatFile", "HeaderRow", "IncludeHidden", "KeepIdentity", "KeepNulls", "KilobytesPerBatch", "LastRow", "MaxErrors", "NoTriggers", "None", "Order", "ParserVersion", "RowTerminator", "RowsPerBatch", "RowsetOptions", "SingleBlob", "SingleClob", "SingleNClob", "TabLock"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OrderByClause";
    readonly edges: readonly [{
        readonly name: "OrderByElements";
        readonly array: true;
        readonly kinds: readonly ["ExpressionWithSortOrder"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "OrderIndexOption";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "OutputClause";
    readonly edges: readonly [{
        readonly name: "SelectColumns";
        readonly array: true;
        readonly kinds: readonly ["SelectScalarExpression", "SelectSetVariable", "SelectStarExpression"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "OutputIntoClause";
    readonly edges: readonly [{
        readonly name: "IntoTable";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "IntoTableColumns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "SelectColumns";
        readonly array: true;
        readonly kinds: readonly ["SelectScalarExpression", "SelectSetVariable", "SelectStarExpression"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "OverClause";
    readonly edges: readonly [{
        readonly name: "OrderByClause";
        readonly array: false;
        readonly kinds: readonly ["OrderByClause"];
    }, {
        readonly name: "Partitions";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "WindowFrameClause";
        readonly array: false;
        readonly kinds: readonly ["WindowFrameClause"];
    }, {
        readonly name: "WindowName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "PageVerifyDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Checksum", "None", "TornPageDetection"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ParameterizationDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsSimple";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ParameterlessCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterlessCallType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CurrentDate", "CurrentTimestamp", "CurrentUser", "SessionUser", "SystemUser", "User"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ParenthesisExpression";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ParseCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Culture";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "StringValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "PartitionFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FunctionName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "PartitionParameterType";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "PartitionSpecifier";
    readonly edges: readonly [{
        readonly name: "Number";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "All";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "PartnerDatabaseOption";
    readonly edges: readonly [{
        readonly name: "PartnerServer";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Timeout";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "PartnerOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Failover", "ForceServiceAllowDataLoss", "None", "Off", "PartnerServer", "Resume", "SafetyFull", "SafetyOff", "Suspend", "Timeout"];
        readonly flags: false;
    }];
}, {
    readonly kind: "PasswordAlterPrincipalOption";
    readonly edges: readonly [{
        readonly name: "OldPassword";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Hashed";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "MustChange";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CheckExpiration", "CheckPolicy", "Credential", "DefaultDatabase", "DefaultLanguage", "DefaultSchema", "Login", "Name", "NoCredential", "Object_ID", "Password", "Sid", "Type"];
        readonly flags: false;
    }, {
        readonly name: "Unlock";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "PasswordCreateLoginSource";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    }, {
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Hashed";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "MustChange";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "Permission";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Identifiers";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "PermissionSetAssemblyOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["PermissionSet", "UncheckedData", "Visibility"];
        readonly flags: false;
    }, {
        readonly name: "PermissionSetOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ExternalAccess", "None", "Safe", "Unsafe"];
        readonly flags: false;
    }];
}, {
    readonly kind: "PivotedTableReference";
    readonly edges: readonly [{
        readonly name: "AggregateFunctionIdentifier";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "InColumns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PivotColumn";
        readonly array: false;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "TableReference";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "ValueColumns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "PortsEndpointProtocolOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["HttpAuthentication", "HttpAuthenticationRealm", "HttpClearPort", "HttpCompression", "HttpDefaultLogonDomain", "HttpOptions", "HttpPath", "HttpPorts", "HttpSite", "HttpSslPort", "None", "TcpListenerIP", "TcpListenerPort", "TcpOptions"];
        readonly flags: true;
    }, {
        readonly name: "PortTypes";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Clear", "None", "Ssl"];
        readonly flags: true;
    }];
}, {
    readonly kind: "PredicateSetStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsOn";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Options";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AnsiDefaults", "AnsiNullDfltOff", "AnsiNullDfltOn", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "ArithIgnore", "ConcatNullYieldsNull", "CursorCloseOnCommit", "DisableDefCnstChk", "FmtOnly", "ForcePlan", "ImplicitTransactions", "NoBrowsetable", "NoCount", "NoExec", "None", "NumericRoundAbort", "ParseOnly", "QuotedIdentifier", "RemoteProcTransactions", "ShowPlanAll", "ShowPlanText", "ShowPlanXml", "XactAbort"];
        readonly flags: true;
    }];
}, {
    readonly kind: "PredictTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataSource";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "NamedTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "ModelSubquery";
        readonly array: false;
        readonly kinds: readonly ["ScalarSubquery"];
    }, {
        readonly name: "ModelVariable";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "RunTime";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SchemaDeclarationItems";
        readonly array: true;
        readonly kinds: readonly ["SchemaDeclarationItem", "SchemaDeclarationItemOpenjson"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "PrimaryRoleReplicaOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "AllowConnections";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "No", "ReadOnly", "ReadWrite"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ApplyDelay", "AvailabilityMode", "EndpointUrl", "FailoverMode", "PrimaryRole", "SecondaryRole", "SessionTimeout"];
        readonly flags: false;
    }];
}, {
    readonly kind: "PrincipalOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CheckExpiration", "CheckPolicy", "Credential", "DefaultDatabase", "DefaultLanguage", "DefaultSchema", "Login", "Name", "NoCredential", "Object_ID", "Password", "Sid", "Type"];
        readonly flags: false;
    }];
}, {
    readonly kind: "PrintStatement";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "Privilege80";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "PrivilegeType80";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "Delete", "Execute", "Insert", "References", "Select", "Update"];
        readonly flags: false;
    }];
}, {
    readonly kind: "PrivilegeSecurityElement80";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Privileges";
        readonly array: true;
        readonly kinds: readonly ["Privilege80"];
    }, {
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ProcedureOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Encryption", "ExecuteAs", "NativeCompilation", "Recompile", "SchemaBinding"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ProcedureParameter";
    readonly edges: readonly [{
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "Nullable";
        readonly array: false;
        readonly kinds: readonly ["NullableConstraintDefinition"];
    }, {
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "VariableName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsVarying";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Modifier";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["None", "Output", "ReadOnly"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ProcedureReference";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Number";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ProcedureReferenceName";
    readonly edges: readonly [{
        readonly name: "ProcedureReference";
        readonly array: false;
        readonly kinds: readonly ["ProcedureReference"];
    }, {
        readonly name: "ProcedureVariable";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ProcessAffinityRange";
    readonly edges: readonly [{
        readonly name: "From";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "To";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ProviderEncryptionSource";
    readonly edges: readonly [{
        readonly name: "KeyOptions";
        readonly array: true;
        readonly kinds: readonly ["AlgorithmKeyOption", "CreationDispositionKeyOption", "IdentityValueKeyOption", "KeySourceKeyOption", "ProviderKeyNameKeyOption"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ProviderKeyNameKeyOption";
    readonly edges: readonly [{
        readonly name: "KeyName";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Algorithm", "CreationDisposition", "IdentityValue", "KeySource", "ProviderKeyName"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QualifiedJoin";
    readonly edges: readonly [{
        readonly name: "FirstTableReference";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "SearchCondition";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "SecondTableReference";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "JoinHint";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Hash", "Loop", "Merge", "None", "Remote"];
        readonly flags: false;
    }, {
        readonly name: "QualifiedJoinType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FullOuter", "Inner", "LeftOuter", "RightOuter"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryDerivedTable";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "QueryExpression";
        readonly array: false;
        readonly kinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "QueryParenthesisExpression";
    readonly edges: readonly [{
        readonly name: "ForClause";
        readonly array: false;
        readonly kinds: readonly ["BrowseForClause", "JsonForClause", "JsonForClauseOption", "ReadOnlyForClause", "UpdateForClause", "XmlForClause", "XmlForClauseOption"];
    }, {
        readonly name: "OffsetClause";
        readonly array: false;
        readonly kinds: readonly ["OffsetClause"];
    }, {
        readonly name: "OrderByClause";
        readonly array: false;
        readonly kinds: readonly ["OrderByClause"];
    }, {
        readonly name: "QueryExpression";
        readonly array: false;
        readonly kinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "QuerySpecification";
    readonly edges: readonly [{
        readonly name: "ForClause";
        readonly array: false;
        readonly kinds: readonly ["BrowseForClause", "JsonForClause", "JsonForClauseOption", "ReadOnlyForClause", "UpdateForClause", "XmlForClause", "XmlForClauseOption"];
    }, {
        readonly name: "FromClause";
        readonly array: false;
        readonly kinds: readonly ["FromClause"];
    }, {
        readonly name: "GroupByClause";
        readonly array: false;
        readonly kinds: readonly ["GroupByClause"];
    }, {
        readonly name: "HavingClause";
        readonly array: false;
        readonly kinds: readonly ["HavingClause"];
    }, {
        readonly name: "OffsetClause";
        readonly array: false;
        readonly kinds: readonly ["OffsetClause"];
    }, {
        readonly name: "OrderByClause";
        readonly array: false;
        readonly kinds: readonly ["OrderByClause"];
    }, {
        readonly name: "SelectElements";
        readonly array: true;
        readonly kinds: readonly ["SelectScalarExpression", "SelectSetVariable", "SelectStarExpression"];
    }, {
        readonly name: "TopRowFilter";
        readonly array: false;
        readonly kinds: readonly ["TopRowFilter"];
    }, {
        readonly name: "WhereClause";
        readonly array: false;
        readonly kinds: readonly ["WhereClause"];
    }, {
        readonly name: "WindowClause";
        readonly array: false;
        readonly kinds: readonly ["WindowClause"];
    }];
    readonly attributes: readonly [{
        readonly name: "UniqueRowFilter";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "Distinct", "NotSpecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryStoreCapturePolicyOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Current_Storage_Size_MB", "Desired_State", "Flush_Interval_Seconds", "Interval_Length_Minutes", "Max_Plans_Per_Query", "Query_Capture_Mode", "Size_Based_Cleanup_Mode", "Stale_Query_Threshold_Days", "Wait_Stats_Capture_Mode"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ALL", "AUTO", "NONE"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryStoreDataFlushIntervalOption";
    readonly edges: readonly [{
        readonly name: "FlushInterval";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Current_Storage_Size_MB", "Desired_State", "Flush_Interval_Seconds", "Interval_Length_Minutes", "Max_Plans_Per_Query", "Query_Capture_Mode", "Size_Based_Cleanup_Mode", "Stale_Query_Threshold_Days", "Wait_Stats_Capture_Mode"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryStoreDatabaseOption";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["QueryStoreCapturePolicyOption", "QueryStoreDataFlushIntervalOption", "QueryStoreDesiredStateOption", "QueryStoreIntervalLengthOption", "QueryStoreMaxPlansPerQueryOption", "QueryStoreMaxStorageSizeOption", "QueryStoreSizeCleanupPolicyOption", "QueryStoreTimeCleanupPolicyOption", "QueryStoreWaitStatsCaptureOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "Clear";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "ClearAll";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryStoreDesiredStateOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OperationModeSpecified";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Current_Storage_Size_MB", "Desired_State", "Flush_Interval_Seconds", "Interval_Length_Minutes", "Max_Plans_Per_Query", "Query_Capture_Mode", "Size_Based_Cleanup_Mode", "Stale_Query_Threshold_Days", "Wait_Stats_Capture_Mode"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Off", "ReadOnly", "ReadWrite"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryStoreIntervalLengthOption";
    readonly edges: readonly [{
        readonly name: "StatsIntervalLength";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Current_Storage_Size_MB", "Desired_State", "Flush_Interval_Seconds", "Interval_Length_Minutes", "Max_Plans_Per_Query", "Query_Capture_Mode", "Size_Based_Cleanup_Mode", "Stale_Query_Threshold_Days", "Wait_Stats_Capture_Mode"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryStoreMaxPlansPerQueryOption";
    readonly edges: readonly [{
        readonly name: "MaxPlansPerQuery";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Current_Storage_Size_MB", "Desired_State", "Flush_Interval_Seconds", "Interval_Length_Minutes", "Max_Plans_Per_Query", "Query_Capture_Mode", "Size_Based_Cleanup_Mode", "Stale_Query_Threshold_Days", "Wait_Stats_Capture_Mode"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryStoreMaxStorageSizeOption";
    readonly edges: readonly [{
        readonly name: "MaxQdsSize";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Current_Storage_Size_MB", "Desired_State", "Flush_Interval_Seconds", "Interval_Length_Minutes", "Max_Plans_Per_Query", "Query_Capture_Mode", "Size_Based_Cleanup_Mode", "Stale_Query_Threshold_Days", "Wait_Stats_Capture_Mode"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryStoreSizeCleanupPolicyOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Current_Storage_Size_MB", "Desired_State", "Flush_Interval_Seconds", "Interval_Length_Minutes", "Max_Plans_Per_Query", "Query_Capture_Mode", "Size_Based_Cleanup_Mode", "Stale_Query_Threshold_Days", "Wait_Stats_Capture_Mode"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AUTO", "OFF"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryStoreTimeCleanupPolicyOption";
    readonly edges: readonly [{
        readonly name: "StaleQueryThreshold";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Current_Storage_Size_MB", "Desired_State", "Flush_Interval_Seconds", "Interval_Length_Minutes", "Max_Plans_Per_Query", "Query_Capture_Mode", "Size_Based_Cleanup_Mode", "Stale_Query_Threshold_Days", "Wait_Stats_Capture_Mode"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueryStoreWaitStatsCaptureOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Current_Storage_Size_MB", "Desired_State", "Flush_Interval_Seconds", "Interval_Length_Minutes", "Max_Plans_Per_Query", "Query_Capture_Mode", "Size_Based_Cleanup_Mode", "Stale_Query_Threshold_Days", "Wait_Stats_Capture_Mode"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueueDelayAuditOption";
    readonly edges: readonly [{
        readonly name: "Delay";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AuditGuid", "OnFailure", "OperatorAudit", "QueueDelay", "State"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueueExecuteAsOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["ExecuteAsClause"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ActivationDrop", "ActivationExecuteAs", "ActivationMaxQueueReaders", "ActivationProcedureName", "ActivationStatus", "PoisonMessageHandlingStatus", "Retention", "Status"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueueOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ActivationDrop", "ActivationExecuteAs", "ActivationMaxQueueReaders", "ActivationProcedureName", "ActivationStatus", "PoisonMessageHandlingStatus", "Retention", "Status"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueueProcedureOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ActivationDrop", "ActivationExecuteAs", "ActivationMaxQueueReaders", "ActivationProcedureName", "ActivationStatus", "PoisonMessageHandlingStatus", "Retention", "Status"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueueStateOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ActivationDrop", "ActivationExecuteAs", "ActivationMaxQueueReaders", "ActivationProcedureName", "ActivationStatus", "PoisonMessageHandlingStatus", "Retention", "Status"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "QueueValueOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ActivationDrop", "ActivationExecuteAs", "ActivationMaxQueueReaders", "ActivationProcedureName", "ActivationStatus", "PoisonMessageHandlingStatus", "Retention", "Status"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RaiseErrorLegacyStatement";
    readonly edges: readonly [{
        readonly name: "FirstParameter";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SecondParameter";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "RaiseErrorStatement";
    readonly edges: readonly [{
        readonly name: "FirstParameter";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "OptionalParameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SecondParameter";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "ThirdParameter";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "RaiseErrorOptions";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Log", "NoWait", "None", "SetError"];
        readonly flags: true;
    }];
}, {
    readonly kind: "ReadOnlyForClause";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "ReadTextStatement";
    readonly edges: readonly [{
        readonly name: "Column";
        readonly array: false;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "Offset";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "Size";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "TextPointer";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "HoldLock";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "RealLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "ReceiveStatement";
    readonly edges: readonly [{
        readonly name: "Into";
        readonly array: false;
        readonly kinds: readonly ["VariableTableReference"];
    }, {
        readonly name: "Queue";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "SelectElements";
        readonly array: true;
        readonly kinds: readonly ["SelectScalarExpression", "SelectSetVariable", "SelectStarExpression"];
    }, {
        readonly name: "Top";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Where";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsConversationGroupIdWhere";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ReconfigureStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "WithOverride";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "RecoveryDatabaseOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BulkLogged", "Full", "None", "Simple"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RegexpLikePredicate";
    readonly edges: readonly [{
        readonly name: "Flags";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Pattern";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Text";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "RemoteDataArchiveAlterTableOption";
    readonly edges: readonly [{
        readonly name: "FilterPredicate";
        readonly array: false;
        readonly kinds: readonly ["FunctionCall"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsFilterPredicateSpecified";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsMigrationStateSpecified";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "MigrationState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Inbound", "Outbound", "Paused"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "RdaTableOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Disable", "Enable", "OffWithoutDataRecovery"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RemoteDataArchiveDatabaseOption";
    readonly edges: readonly [{
        readonly name: "Settings";
        readonly array: true;
        readonly kinds: readonly ["RemoteDataArchiveDbCredentialSetting", "RemoteDataArchiveDbFederatedServiceAccountSetting", "RemoteDataArchiveDbServerSetting"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RemoteDataArchiveDbCredentialSetting";
    readonly edges: readonly [{
        readonly name: "Credential";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "SettingKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Credential", "FederatedServiceAccount", "Server"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RemoteDataArchiveDbFederatedServiceAccountSetting";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsOn";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "SettingKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Credential", "FederatedServiceAccount", "Server"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RemoteDataArchiveDbServerSetting";
    readonly edges: readonly [{
        readonly name: "Server";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "SettingKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Credential", "FederatedServiceAccount", "Server"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RemoteDataArchiveTableOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "MigrationState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Inbound", "Outbound", "Paused"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "RdaTableOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Disable", "Enable", "OffWithoutDataRecovery"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RenameAlterRoleAction";
    readonly edges: readonly [{
        readonly name: "NewName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "RenameEntityStatement";
    readonly edges: readonly [{
        readonly name: "NewName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OldName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "RenameEntityType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ApplicationRole", "Assembly", "AsymmetricKey", "AvailabilityGroup", "Certificate", "Contract", "Database", "Endpoint", "ExternalModel", "FullTextCatalog", "FullTextStopList", "Login", "MessageType", "NotSpecified", "Object", "RemoteServiceBinding", "Role", "Route", "Schema", "SearchPropertyList", "Server", "ServerRole", "Service", "SymmetricKey", "Type", "User", "XmlSchemaCollection"];
        readonly flags: false;
    }, {
        readonly name: "SeparatorType";
        readonly kind: "enum";
        readonly nullable: true;
        readonly values: readonly ["Dot", "DoubleColon", "NotSpecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ResampleStatisticsOption";
    readonly edges: readonly [{
        readonly name: "Partitions";
        readonly array: true;
        readonly kinds: readonly ["StatisticsPartitionRange"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "AutoDrop", "Columns", "FullScan", "Incremental", "Index", "NoRecompute", "PageCount", "PersistSamplePercent", "Resample", "RowCount", "Rows", "SamplePercent", "SampleRows", "StatsStream"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ResourcePoolAffinitySpecification";
    readonly edges: readonly [{
        readonly name: "ParameterValue";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "PoolAffinityRanges";
        readonly array: true;
        readonly kinds: readonly ["LiteralRange", "ProcessAffinityRange"];
    }];
    readonly attributes: readonly [{
        readonly name: "AffinityType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["None", "NumaNode", "Scheduler"];
        readonly flags: false;
    }, {
        readonly name: "IsAuto";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "ResourcePoolParameter";
    readonly edges: readonly [{
        readonly name: "AffinitySpecification";
        readonly array: false;
        readonly kinds: readonly ["ResourcePoolAffinitySpecification"];
    }, {
        readonly name: "ParameterValue";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Affinity", "CapCpuPercent", "CapIoPercent", "MaxCpuPercent", "MaxIoPercent", "MaxIopsPerVolume", "MaxMemoryPercent", "MinCpuPercent", "MinIoPercent", "MinIopsPerVolume", "MinMemoryPercent", "TargetMemoryPercent", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ResourcePoolStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ResourcePoolParameters";
        readonly array: true;
        readonly kinds: readonly ["ResourcePoolParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "RestoreMasterKeyStatement";
    readonly edges: readonly [{
        readonly name: "EncryptionPassword";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "File";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsForce";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "RestoreOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BlockSize", "BufferCount", "Checksum", "CommitDifferentialBase", "ContinueAfterError", "DboOnly", "EnableBroker", "EnhancedIntegrity", "ErrorBrokerConversations", "File", "FileStream", "KeepReplication", "KeepTemporalRetention", "LoadHistory", "MaxTransferSize", "MediaName", "MediaPassword", "Move", "NewBroker", "NoChecksum", "NoLog", "NoRecovery", "NoRewind", "NoUnload", "Online", "Partial", "Password", "Recovery", "Replace", "Restart", "RestrictedUser", "Rewind", "Snapshot", "SnapshotImport", "SnapshotRestorePhase", "Standby", "Stats", "Stop", "StopAt", "StopOnError", "Unload", "Verbose", "0"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RestoreServiceMasterKeyStatement";
    readonly edges: readonly [{
        readonly name: "File";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Password";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsForce";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "RestoreStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "Devices";
        readonly array: true;
        readonly kinds: readonly ["DeviceInfo"];
    }, {
        readonly name: "Files";
        readonly array: true;
        readonly kinds: readonly ["BackupRestoreFileInfo"];
    }, {
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["FileStreamRestoreOption", "MoveRestoreOption", "RestoreOption", "ScalarExpressionRestoreOption", "StopRestoreOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Database", "FileListOnly", "HeaderOnly", "LabelOnly", "None", "RewindOnly", "TransactionLog", "VerifyOnly"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ResultColumnDefinition";
    readonly edges: readonly [{
        readonly name: "ColumnDefinition";
        readonly array: false;
        readonly kinds: readonly ["ColumnDefinition", "ColumnDefinitionBase", "OpenRowsetColumnDefinition"];
    }, {
        readonly name: "Nullable";
        readonly array: false;
        readonly kinds: readonly ["NullableConstraintDefinition"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ResultSetDefinition";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "ResultSetType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ForXml", "Inline", "Object", "Type"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ResultSetsExecuteOption";
    readonly edges: readonly [{
        readonly name: "Definitions";
        readonly array: true;
        readonly kinds: readonly ["InlineResultSetDefinition", "ResultSetDefinition", "SchemaObjectResultSetDefinition"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Recompile", "ResultSets"];
        readonly flags: false;
    }, {
        readonly name: "ResultSetsOptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["None", "ResultSetsDefined", "Undefined"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RetentionDaysAuditTargetOption";
    readonly edges: readonly [{
        readonly name: "Days";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FilePath", "MaxFiles", "MaxRolloverFiles", "MaxSize", "Path", "ReserveDiskSpace", "RetentionDays"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RetentionPeriodDefinition";
    readonly edges: readonly [{
        readonly name: "Duration";
        readonly array: false;
        readonly kinds: readonly ["IntegerLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsInfinity";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Units";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Day", "Days", "Month", "Months", "Week", "Weeks", "Year", "Years"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ReturnStatement";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "RevertStatement";
    readonly edges: readonly [{
        readonly name: "Cookie";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "RevokeStatement";
    readonly edges: readonly [{
        readonly name: "AsClause";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Permissions";
        readonly array: true;
        readonly kinds: readonly ["Permission"];
    }, {
        readonly name: "Principals";
        readonly array: true;
        readonly kinds: readonly ["SecurityPrincipal"];
    }, {
        readonly name: "SecurityTargetObject";
        readonly array: false;
        readonly kinds: readonly ["SecurityTargetObject"];
    }];
    readonly attributes: readonly [{
        readonly name: "CascadeOption";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "GrantOptionFor";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "RevokeStatement80";
    readonly edges: readonly [{
        readonly name: "AsClause";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SecurityElement80";
        readonly array: false;
        readonly kinds: readonly ["CommandSecurityElement80", "PrivilegeSecurityElement80"];
    }, {
        readonly name: "SecurityUserClause80";
        readonly array: false;
        readonly kinds: readonly ["SecurityUserClause80"];
    }];
    readonly attributes: readonly [{
        readonly name: "CascadeOption";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "GrantOptionFor";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "RightFunctionCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "RolePayloadOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }, {
        readonly name: "Role";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "NotSpecified", "Partner", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RollbackTransactionStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "RollupGroupingSpecification";
    readonly edges: readonly [{
        readonly name: "Arguments";
        readonly array: true;
        readonly kinds: readonly ["CompositeGroupingSpecification", "CubeGroupingSpecification", "ExpressionGroupingSpecification", "GrandTotalGroupingSpecification", "GroupingSetsGroupingSpecification", "RollupGroupingSpecification"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "RouteOption";
    readonly edges: readonly [{
        readonly name: "Literal";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Address", "BrokerInstance", "Lifetime", "MirrorAddress", "ServiceName"];
        readonly flags: false;
    }];
}, {
    readonly kind: "RowValue";
    readonly edges: readonly [{
        readonly name: "ColumnValues";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SaveTransactionStatement";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ScalarExpressionDialogOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Encryption", "Lifetime", "RelatedConversation", "RelatedConversationGroup"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ScalarExpressionRestoreOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BlockSize", "BufferCount", "Checksum", "CommitDifferentialBase", "ContinueAfterError", "DboOnly", "EnableBroker", "EnhancedIntegrity", "ErrorBrokerConversations", "File", "FileStream", "KeepReplication", "KeepTemporalRetention", "LoadHistory", "MaxTransferSize", "MediaName", "MediaPassword", "Move", "NewBroker", "NoChecksum", "NoLog", "NoRecovery", "NoRewind", "NoUnload", "Online", "Partial", "Password", "Recovery", "Replace", "Restart", "RestrictedUser", "Rewind", "Snapshot", "SnapshotImport", "SnapshotRestorePhase", "Standby", "Stats", "Stop", "StopAt", "StopOnError", "Unload", "Verbose", "0"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ScalarExpressionSequenceOption";
    readonly edges: readonly [{
        readonly name: "OptionValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "NoValue";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["As", "Cache", "Cycle", "Increment", "MaxValue", "MinValue", "Restart", "Start"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ScalarExpressionSnippet";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Script";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "ScalarFunctionReturnType";
    readonly edges: readonly [{
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ScalarSubquery";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "QueryExpression";
        readonly array: false;
        readonly kinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SchemaDeclarationItem";
    readonly edges: readonly [{
        readonly name: "ColumnDefinition";
        readonly array: false;
        readonly kinds: readonly ["ColumnDefinition", "ColumnDefinitionBase", "OpenRowsetColumnDefinition"];
    }, {
        readonly name: "Mapping";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SchemaDeclarationItemOpenjson";
    readonly edges: readonly [{
        readonly name: "ColumnDefinition";
        readonly array: false;
        readonly kinds: readonly ["ColumnDefinition", "ColumnDefinitionBase", "OpenRowsetColumnDefinition"];
    }, {
        readonly name: "Mapping";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "AsJson";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "SchemaObjectFunctionTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SchemaObject";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "SchemaObjectName";
    readonly edges: readonly [{
        readonly name: "BaseIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DatabaseIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Identifiers";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SchemaIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ServerIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Count";
        readonly kind: "integer";
        readonly nullable: false;
    }];
}, {
    readonly kind: "SchemaObjectNameOrValueExpression";
    readonly edges: readonly [{
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "ValueExpression";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SchemaObjectNameSnippet";
    readonly edges: readonly [{
        readonly name: "BaseIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DatabaseIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Identifiers";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "SchemaIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ServerIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Count";
        readonly kind: "integer";
        readonly nullable: false;
    }, {
        readonly name: "Script";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "SchemaObjectResultSetDefinition";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ResultSetType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ForXml", "Inline", "Object", "Type"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SchemaPayloadOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsStandard";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }];
}, {
    readonly kind: "SearchPropertyListFullTextIndexOption";
    readonly edges: readonly [{
        readonly name: "PropertyListName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsOff";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ChangeTracking", "SearchPropertyList", "StopList"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SearchedCaseExpression";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ElseExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "WhenClauses";
        readonly array: true;
        readonly kinds: readonly ["SearchedWhenClause"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SearchedWhenClause";
    readonly edges: readonly [{
        readonly name: "ThenExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "WhenExpression";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SecondaryRoleReplicaOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "AllowConnections";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "No", "ReadOnly", "ReadWrite"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ApplyDelay", "AvailabilityMode", "EndpointUrl", "FailoverMode", "PrimaryRole", "SecondaryRole", "SessionTimeout"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SecurityPolicyOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["SchemaBinding", "State"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SecurityPredicateAction";
    readonly edges: readonly [{
        readonly name: "FunctionCall";
        readonly array: false;
        readonly kinds: readonly ["FunctionCall"];
    }, {
        readonly name: "TargetObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ActionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Alter", "Create", "Drop"];
        readonly flags: false;
    }, {
        readonly name: "SecurityPredicateOperation";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AfterInsert", "AfterUpdate", "All", "BeforeDelete", "BeforeUpdate"];
        readonly flags: false;
    }, {
        readonly name: "SecurityPredicateType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Block", "Filter"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SecurityPrincipal";
    readonly edges: readonly [{
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "PrincipalType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Identifier", "Null", "Public"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SecurityTargetObject";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ObjectName";
        readonly array: false;
        readonly kinds: readonly ["SecurityTargetObjectName"];
    }];
    readonly attributes: readonly [{
        readonly name: "ObjectKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ApplicationRole", "Assembly", "AsymmetricKey", "AvailabilityGroup", "Certificate", "Contract", "Database", "Endpoint", "ExternalModel", "FullTextCatalog", "FullTextStopList", "Login", "MessageType", "NotSpecified", "Object", "RemoteServiceBinding", "Role", "Route", "Schema", "SearchPropertyList", "Server", "ServerRole", "Service", "SymmetricKey", "Type", "User", "XmlSchemaCollection"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SecurityTargetObjectName";
    readonly edges: readonly [{
        readonly name: "MultiPartIdentifier";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SecurityUserClause80";
    readonly edges: readonly [{
        readonly name: "Users";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "UserType80";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Null", "Public", "Users"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SelectFunctionReturnType";
    readonly edges: readonly [{
        readonly name: "SelectStatement";
        readonly array: false;
        readonly kinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SelectInsertSource";
    readonly edges: readonly [{
        readonly name: "Select";
        readonly array: false;
        readonly kinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SelectScalarExpression";
    readonly edges: readonly [{
        readonly name: "ColumnName";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SelectSetVariable";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Variable";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "AssignmentKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AddEquals", "BitwiseAndEquals", "BitwiseOrEquals", "BitwiseXorEquals", "ConcatEquals", "DivideEquals", "Equals", "ModEquals", "MultiplyEquals", "SubtractEquals"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SelectStarExpression";
    readonly edges: readonly [{
        readonly name: "Qualifier";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SelectStatement";
    readonly edges: readonly [{
        readonly name: "ComputeClauses";
        readonly array: true;
        readonly kinds: readonly ["ComputeClause"];
    }, {
        readonly name: "Into";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "On";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OptimizerHints";
        readonly array: true;
        readonly kinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    }, {
        readonly name: "QueryExpression";
        readonly array: false;
        readonly kinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    }, {
        readonly name: "WithCtesAndXmlNamespaces";
        readonly array: false;
        readonly kinds: readonly ["WithCtesAndXmlNamespaces"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SelectStatementSnippet";
    readonly edges: readonly [{
        readonly name: "ComputeClauses";
        readonly array: true;
        readonly kinds: readonly ["ComputeClause"];
    }, {
        readonly name: "Into";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "On";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "OptimizerHints";
        readonly array: true;
        readonly kinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    }, {
        readonly name: "QueryExpression";
        readonly array: false;
        readonly kinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    }, {
        readonly name: "WithCtesAndXmlNamespaces";
        readonly array: false;
        readonly kinds: readonly ["WithCtesAndXmlNamespaces"];
    }];
    readonly attributes: readonly [{
        readonly name: "Script";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "SelectiveXmlIndexPromotedPath";
    readonly edges: readonly [{
        readonly name: "MaxLength";
        readonly array: false;
        readonly kinds: readonly ["IntegerLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Path";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "SQLDataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "XQueryDataType";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsSingleton";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "SemanticIndexChunkOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Overlap", "Size", "Type"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SemanticIndexColumn";
    readonly edges: readonly [{
        readonly name: "ChunkOptions";
        readonly array: true;
        readonly kinds: readonly ["SemanticIndexChunkOption"];
    }, {
        readonly name: "ColumnName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Language";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "TypeColumnName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "SearchType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Fulltext", "Hybrid", "NotSpecified", "Vector"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SemanticTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "MatchedColumn";
        readonly array: false;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "MatchedKey";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SourceKey";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "TableName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "SemanticFunctionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["None", "SemanticKeyPhraseTable", "SemanticSimilarityDetailsTable", "SemanticSimilarityTable"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SendStatement";
    readonly edges: readonly [{
        readonly name: "ConversationHandles";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "MessageBody";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "MessageTypeName";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SensitivityClassificationOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Type";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["InformationType", "InformationTypeId", "Label", "LabelId", "Rank", "Undefined"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SequenceOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "NoValue";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["As", "Cache", "Cycle", "Increment", "MaxValue", "MinValue", "Restart", "Start"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ServiceContract";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Action";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Add", "Drop", "None"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SessionTimeoutPayloadOption";
    readonly edges: readonly [{
        readonly name: "Timeout";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsNever";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }];
}, {
    readonly kind: "SetCommandStatement";
    readonly edges: readonly [{
        readonly name: "Commands";
        readonly array: true;
        readonly kinds: readonly ["GeneralSetCommand", "SetFipsFlaggerCommand"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SetErrorLevelStatement";
    readonly edges: readonly [{
        readonly name: "Level";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SetFipsFlaggerCommand";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "ComplianceLevel";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Entry", "Full", "Intermediate", "Off"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SetIdentityInsertStatement";
    readonly edges: readonly [{
        readonly name: "Table";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsOn";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "SetOffsetsStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsOn";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Options";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Compute", "Execute", "From", "None", "Order", "Param", "Procedure", "Select", "Statement", "Table"];
        readonly flags: true;
    }];
}, {
    readonly kind: "SetRowCountStatement";
    readonly edges: readonly [{
        readonly name: "NumberRows";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SetSearchPropertyListAlterFullTextIndexAction";
    readonly edges: readonly [{
        readonly name: "SearchPropertyListOption";
        readonly array: false;
        readonly kinds: readonly ["SearchPropertyListFullTextIndexOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithNoPopulation";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "SetStatisticsStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "IsOn";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Options";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["IO", "None", "Profile", "Time", "Xml"];
        readonly flags: true;
    }];
}, {
    readonly kind: "SetStopListAlterFullTextIndexAction";
    readonly edges: readonly [{
        readonly name: "StopListOption";
        readonly array: false;
        readonly kinds: readonly ["StopListFullTextIndexOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithNoPopulation";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "SetTextSizeStatement";
    readonly edges: readonly [{
        readonly name: "TextSize";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SetTransactionIsolationLevelStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Level";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["None", "ReadCommitted", "ReadUncommitted", "RepeatableRead", "Serializable", "Snapshot"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SetUserStatement";
    readonly edges: readonly [{
        readonly name: "UserName";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "WithNoReset";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "SetVariableStatement";
    readonly edges: readonly [{
        readonly name: "CursorDefinition";
        readonly array: false;
        readonly kinds: readonly ["CursorDefinition"];
    }, {
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Variable";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "AssignmentKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AddEquals", "BitwiseAndEquals", "BitwiseOrEquals", "BitwiseXorEquals", "ConcatEquals", "DivideEquals", "Equals", "ModEquals", "MultiplyEquals", "SubtractEquals"];
        readonly flags: false;
    }, {
        readonly name: "FunctionCallExists";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "SeparatorType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Dot", "DoubleColon", "NotSpecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ShutdownStatement";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "WithNoWait";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "SimpleAlterFullTextIndexAction";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "ActionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Disable", "Enable", "None", "PausePopulation", "ResumePopulation", "SetChangeTrackingAuto", "SetChangeTrackingManual", "SetChangeTrackingOff", "StartFullPopulation", "StartIncrementalPopulation", "StartUpdatePopulation", "StopPopulation"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SimpleCaseExpression";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "ElseExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "InputExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "WhenClauses";
        readonly array: true;
        readonly kinds: readonly ["SimpleWhenClause"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SimpleWhenClause";
    readonly edges: readonly [{
        readonly name: "ThenExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "WhenExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SingleValueTypeCopyOption";
    readonly edges: readonly [{
        readonly name: "SingleValue";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SizeFileDeclarationOption";
    readonly edges: readonly [{
        readonly name: "Size";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FileGrowth", "FileName", "MaxSize", "Name", "NewName", "Offline", "Size"];
        readonly flags: false;
    }, {
        readonly name: "Units";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Bytes", "EB", "GB", "KB", "MB", "PB", "Percent", "TB", "Unspecified"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SoapMethod";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }, {
        readonly name: "Namespace";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Action";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Add", "Alter", "Drop", "None"];
        readonly flags: false;
    }, {
        readonly name: "Format";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllResults", "None", "NotSpecified", "RowsetsOnly"];
        readonly flags: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }, {
        readonly name: "Schema";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Default", "None", "NotSpecified", "Standard"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SourceDeclaration";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["EventSessionObjectName"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SpatialIndexRegularOption";
    readonly edges: readonly [{
        readonly name: "Option";
        readonly array: false;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SqlCommandIdentifier";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "QuoteType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DoubleQuote", "NotQuoted", "SquareBracket"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "SqlDataTypeReference";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "SqlDataTypeOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BigInt", "Binary", "Bit", "Char", "Cursor", "Date", "DateTime", "DateTime2", "DateTimeOffset", "Decimal", "Float", "Image", "Int", "Json", "Money", "NChar", "NText", "NVarChar", "None", "Numeric", "Real", "Rowversion", "SmallDateTime", "SmallInt", "SmallMoney", "Sql_Variant", "Table", "Text", "Time", "Timestamp", "TinyInt", "UniqueIdentifier", "VarBinary", "VarChar", "Vector"];
        readonly flags: false;
    }];
}, {
    readonly kind: "StateAuditOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AuditGuid", "OnFailure", "OperatorAudit", "QueueDelay", "State"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "StatementList";
    readonly edges: readonly [{
        readonly name: "Statements";
        readonly array: true;
        readonly kinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamStatement", "CreateExternalStreamingJobStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamStatement", "DropExternalStreamingJobStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "TSqlStatementSnippet", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "StatementListSnippet";
    readonly edges: readonly [{
        readonly name: "Statements";
        readonly array: true;
        readonly kinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamStatement", "CreateExternalStreamingJobStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamStatement", "DropExternalStreamingJobStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "TSqlStatementSnippet", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    }];
    readonly attributes: readonly [{
        readonly name: "Script";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "StatisticsOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "AutoDrop", "Columns", "FullScan", "Incremental", "Index", "NoRecompute", "PageCount", "PersistSamplePercent", "Resample", "RowCount", "Rows", "SamplePercent", "SampleRows", "StatsStream"];
        readonly flags: false;
    }];
}, {
    readonly kind: "StatisticsPartitionRange";
    readonly edges: readonly [{
        readonly name: "From";
        readonly array: false;
        readonly kinds: readonly ["IntegerLiteral"];
    }, {
        readonly name: "To";
        readonly array: false;
        readonly kinds: readonly ["IntegerLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "StopListFullTextIndexOption";
    readonly edges: readonly [{
        readonly name: "StopListName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsOff";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["ChangeTracking", "SearchPropertyList", "StopList"];
        readonly flags: false;
    }];
}, {
    readonly kind: "StopRestoreOption";
    readonly edges: readonly [{
        readonly name: "After";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "Mark";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsStopAt";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BlockSize", "BufferCount", "Checksum", "CommitDifferentialBase", "ContinueAfterError", "DboOnly", "EnableBroker", "EnhancedIntegrity", "ErrorBrokerConversations", "File", "FileStream", "KeepReplication", "KeepTemporalRetention", "LoadHistory", "MaxTransferSize", "MediaName", "MediaPassword", "Move", "NewBroker", "NoChecksum", "NoLog", "NoRecovery", "NoRewind", "NoUnload", "Online", "Partial", "Password", "Recovery", "Replace", "Restart", "RestrictedUser", "Rewind", "Snapshot", "SnapshotImport", "SnapshotRestorePhase", "Standby", "Stats", "Stop", "StopAt", "StopOnError", "Unload", "Verbose", "0"];
        readonly flags: false;
    }];
}, {
    readonly kind: "StringLiteral";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsLargeObject";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "IsNational";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "LiteralType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Binary", "Default", "Identifier", "Integer", "Max", "Money", "Null", "Numeric", "Odbc", "Real", "String"];
        readonly flags: false;
    }, {
        readonly name: "Value";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "SubqueryComparisonPredicate";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Subquery";
        readonly array: false;
        readonly kinds: readonly ["ScalarSubquery"];
    }];
    readonly attributes: readonly [{
        readonly name: "ComparisonType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Equals", "GreaterThan", "GreaterThanOrEqualTo", "IsDistinctFrom", "IsNotDistinctFrom", "LeftOuterJoin", "LessThan", "LessThanOrEqualTo", "NotEqualToBrackets", "NotEqualToExclamation", "NotGreaterThan", "NotLessThan", "NotLike", "RightOuterJoin"];
        readonly flags: false;
    }, {
        readonly name: "SubqueryComparisonPredicateType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["All", "Any", "None"];
        readonly flags: false;
    }];
}, {
    readonly kind: "SystemTimePeriodDefinition";
    readonly edges: readonly [{
        readonly name: "EndTimeColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "StartTimeColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "SystemVersioningTableOption";
    readonly edges: readonly [{
        readonly name: "HistoryTable";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "RetentionPeriod";
        readonly array: false;
        readonly kinds: readonly ["RetentionPeriodDefinition"];
    }];
    readonly attributes: readonly [{
        readonly name: "ConsistencyCheckEnabled";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "OptionState";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSet", "Off", "On", "Primary"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TSEqualCall";
    readonly edges: readonly [{
        readonly name: "FirstExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SecondExpression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TSqlBatch";
    readonly edges: readonly [{
        readonly name: "Statements";
        readonly array: true;
        readonly kinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamStatement", "CreateExternalStreamingJobStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamStatement", "DropExternalStreamingJobStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "TSqlStatementSnippet", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TSqlFragmentSnippet";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Script";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "TSqlScript";
    readonly edges: readonly [{
        readonly name: "Batches";
        readonly array: true;
        readonly kinds: readonly ["TSqlBatch"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TSqlStatementSnippet";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "Script";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "TableClusteredIndexType";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnWithSortOrder"];
    }, {
        readonly name: "OrderedColumns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }];
    readonly attributes: readonly [{
        readonly name: "ColumnStore";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "TableDataCompressionOption";
    readonly edges: readonly [{
        readonly name: "DataCompressionOption";
        readonly array: false;
        readonly kinds: readonly ["DataCompressionOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TableDefinition";
    readonly edges: readonly [{
        readonly name: "ColumnDefinitions";
        readonly array: true;
        readonly kinds: readonly ["ColumnDefinition"];
    }, {
        readonly name: "Indexes";
        readonly array: true;
        readonly kinds: readonly ["IndexDefinition"];
    }, {
        readonly name: "SystemTimePeriod";
        readonly array: false;
        readonly kinds: readonly ["SystemTimePeriodDefinition"];
    }, {
        readonly name: "TableConstraints";
        readonly array: true;
        readonly kinds: readonly ["CheckConstraintDefinition", "DefaultConstraintDefinition", "ForeignKeyConstraintDefinition", "GraphConnectionConstraintDefinition", "NullableConstraintDefinition", "UniqueConstraintDefinition"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TableDistributionOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["TableHashDistributionPolicy", "TableReplicateDistributionPolicy", "TableRoundRobinDistributionPolicy"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TableHashDistributionPolicy";
    readonly edges: readonly [{
        readonly name: "DistributionColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DistributionColumns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TableHint";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "HintKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["FastFirstRow", "ForceScan", "ForceSeek", "HoldLock", "IgnoreConstraints", "IgnoreTriggers", "Index", "KeepDefaults", "KeepIdentity", "NoExpand", "NoLock", "NoWait", "None", "PagLock", "ReadCommitted", "ReadCommittedLock", "ReadPast", "ReadUncommitted", "RepeatableRead", "Rowlock", "Serializable", "Snapshot", "SpatialWindowMaxCells", "TabLock", "TabLockX", "UpdLock", "XLock"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TableHintsOptimizerHint";
    readonly edges: readonly [{
        readonly name: "ObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "TableHints";
        readonly array: true;
        readonly kinds: readonly ["ForceSeekTableHint", "IndexTableHint", "LiteralTableHint", "TableHint"];
    }];
    readonly attributes: readonly [{
        readonly name: "HintKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AlterColumnPlan", "BypassOptimizerQueue", "CardinalityTunerLimit", "CheckConstraintsPlan", "ConcatUnion", "ExpandViews", "Fast", "ForceOrder", "HashGroup", "HashJoin", "HashUnion", "IgnoreNonClusteredColumnStoreIndex", "KeepFixedPlan", "KeepPlan", "KeepUnion", "Label", "LoopJoin", "MaxDop", "MaxGrantPercent", "MaxRecursion", "MergeJoin", "MergeUnion", "MinGrantPercent", "NoPerformanceSpool", "OptimizeCorrelatedUnionAll", "OptimizeFor", "OrderGroup", "ParameterizationForced", "ParameterizationSimple", "QueryTraceOn", "Recompile", "RobustPlan", "ShrinkDBPlan", "TableHints", "Unspecified", "UsePlan"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TableIndexOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["TableClusteredIndexType", "TableNonClusteredIndexType"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TableNonClusteredIndexType";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "TablePartitionOption";
    readonly edges: readonly [{
        readonly name: "PartitionColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PartitionOptionSpecs";
        readonly array: false;
        readonly kinds: readonly ["TablePartitionOptionSpecifications"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TablePartitionOptionSpecifications";
    readonly edges: readonly [{
        readonly name: "BoundaryValues";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "Range";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Left", "NotSpecified", "Right"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TableReplicateDistributionPolicy";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "TableRoundRobinDistributionPolicy";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "TableSampleClause";
    readonly edges: readonly [{
        readonly name: "RepeatSeed";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SampleNumber";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "System";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "TableSampleClauseOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["NotSpecified", "Percent", "Rows"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TableValuedFunctionReturnType";
    readonly edges: readonly [{
        readonly name: "DeclareTableVariableBody";
        readonly array: false;
        readonly kinds: readonly ["DeclareTableVariableBody"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TableXmlCompressionOption";
    readonly edges: readonly [{
        readonly name: "XmlCompressionOption";
        readonly array: false;
        readonly kinds: readonly ["XmlCompressionOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DataCompression", "DataRetention", "Distribution", "Durability", "FileStreamOn", "FileTableCollateFileName", "FileTableDirectory", "FileTableFullPathUniqueConstraintName", "FileTablePrimaryKeyConstraintName", "FileTableStreamIdUniqueConstraintName", "Location", "LockEscalation", "MemoryOptimized", "Partition", "RemoteDataArchive", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TargetDeclaration";
    readonly edges: readonly [{
        readonly name: "ObjectName";
        readonly array: false;
        readonly kinds: readonly ["EventSessionObjectName"];
    }, {
        readonly name: "TargetDeclarationParameters";
        readonly array: true;
        readonly kinds: readonly ["EventDeclarationSetParameter"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TargetRecoveryTimeDatabaseOption";
    readonly edges: readonly [{
        readonly name: "RecoveryTime";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }, {
        readonly name: "Unit";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Days", "Hours", "Minutes", "Seconds"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TemporalClause";
    readonly edges: readonly [{
        readonly name: "EndTime";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "StartTime";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "TemporalClauseType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AsOf", "Between", "ContainedIn", "FromTo", "TemporalAll"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ThrowStatement";
    readonly edges: readonly [{
        readonly name: "ErrorNumber";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "Message";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "State";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TopRowFilter";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "Percent";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "WithApproximate";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "WithTies";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "TriggerAction";
    readonly edges: readonly [{
        readonly name: "EventTypeGroup";
        readonly array: false;
        readonly kinds: readonly ["EventGroupContainer", "EventTypeContainer"];
    }];
    readonly attributes: readonly [{
        readonly name: "TriggerActionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Delete", "Event", "Insert", "LogOn", "Update"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TriggerObject";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "TriggerScope";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllServer", "Database", "Normal"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TriggerOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Encryption", "ExecuteAsClause", "NativeCompile", "SchemaBinding"];
        readonly flags: false;
    }];
}, {
    readonly kind: "TruncateTableStatement";
    readonly edges: readonly [{
        readonly name: "PartitionRanges";
        readonly array: true;
        readonly kinds: readonly ["CompressionPartitionRange"];
    }, {
        readonly name: "TableName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TruncateTargetTableSwitchOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["LowPriorityLockWait", "TruncateTarget"];
        readonly flags: false;
    }, {
        readonly name: "TruncateTarget";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "TryCastCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "Parameter";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TryCatchStatement";
    readonly edges: readonly [{
        readonly name: "CatchStatements";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }, {
        readonly name: "TryStatements";
        readonly array: false;
        readonly kinds: readonly ["StatementList", "StatementListSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TryConvertCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "Parameter";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Style";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "TryParseCall";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Culture";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "DataType";
        readonly array: false;
        readonly kinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    }, {
        readonly name: "StringValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UnaryExpression";
    readonly edges: readonly [{
        readonly name: "Expression";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "UnaryExpressionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["BitwiseNot", "Negative", "Positive"];
        readonly flags: false;
    }];
}, {
    readonly kind: "UniqueConstraintDefinition";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnWithSortOrder"];
    }, {
        readonly name: "ConstraintIdentifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FileStreamOn";
        readonly array: false;
        readonly kinds: readonly ["IdentifierOrValueExpression"];
    }, {
        readonly name: "IndexOptions";
        readonly array: true;
        readonly kinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    }, {
        readonly name: "IndexType";
        readonly array: false;
        readonly kinds: readonly ["IndexType"];
    }, {
        readonly name: "OnFileGroupOrPartitionScheme";
        readonly array: false;
        readonly kinds: readonly ["FileGroupOrPartitionScheme"];
    }];
    readonly attributes: readonly [{
        readonly name: "Clustered";
        readonly kind: "boolean";
        readonly nullable: true;
    }, {
        readonly name: "IsEnforced";
        readonly kind: "boolean";
        readonly nullable: true;
    }, {
        readonly name: "IsPrimaryKey";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "UnpivotedTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "InColumns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "PivotColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "TableReference";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "ValueColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "UnqualifiedJoin";
    readonly edges: readonly [{
        readonly name: "FirstTableReference";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "SecondTableReference";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "UnqualifiedJoinType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CrossApply", "CrossJoin", "OuterApply"];
        readonly flags: false;
    }];
}, {
    readonly kind: "UpdateCall";
    readonly edges: readonly [{
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UpdateForClause";
    readonly edges: readonly [{
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UpdateMergeAction";
    readonly edges: readonly [{
        readonly name: "SetClauses";
        readonly array: true;
        readonly kinds: readonly ["AssignmentSetClause", "FunctionCallSetClause"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UpdateSpecification";
    readonly edges: readonly [{
        readonly name: "FromClause";
        readonly array: false;
        readonly kinds: readonly ["FromClause"];
    }, {
        readonly name: "OutputClause";
        readonly array: false;
        readonly kinds: readonly ["OutputClause"];
    }, {
        readonly name: "OutputIntoClause";
        readonly array: false;
        readonly kinds: readonly ["OutputIntoClause"];
    }, {
        readonly name: "SetClauses";
        readonly array: true;
        readonly kinds: readonly ["AssignmentSetClause", "FunctionCallSetClause"];
    }, {
        readonly name: "Target";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "TopRowFilter";
        readonly array: false;
        readonly kinds: readonly ["TopRowFilter"];
    }, {
        readonly name: "WhereClause";
        readonly array: false;
        readonly kinds: readonly ["WhereClause"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UpdateStatement";
    readonly edges: readonly [{
        readonly name: "OptimizerHints";
        readonly array: true;
        readonly kinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    }, {
        readonly name: "UpdateSpecification";
        readonly array: false;
        readonly kinds: readonly ["UpdateSpecification"];
    }, {
        readonly name: "WithCtesAndXmlNamespaces";
        readonly array: false;
        readonly kinds: readonly ["WithCtesAndXmlNamespaces"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UpdateStatisticsStatement";
    readonly edges: readonly [{
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "StatisticsOptions";
        readonly array: true;
        readonly kinds: readonly ["LiteralStatisticsOption", "OnOffStatisticsOption", "ResampleStatisticsOption", "StatisticsOption"];
    }, {
        readonly name: "SubElements";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UpdateTextStatement";
    readonly edges: readonly [{
        readonly name: "Column";
        readonly array: false;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "DeleteLength";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "InsertOffset";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "SourceColumn";
        readonly array: false;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "SourceParameter";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "TextId";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "Timestamp";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Bulk";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "WithLog";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "UseFederationStatement";
    readonly edges: readonly [{
        readonly name: "DistributionName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "FederationName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "Filtering";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "UseHintList";
    readonly edges: readonly [{
        readonly name: "Hints";
        readonly array: true;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "HintKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AlterColumnPlan", "BypassOptimizerQueue", "CardinalityTunerLimit", "CheckConstraintsPlan", "ConcatUnion", "ExpandViews", "Fast", "ForceOrder", "HashGroup", "HashJoin", "HashUnion", "IgnoreNonClusteredColumnStoreIndex", "KeepFixedPlan", "KeepPlan", "KeepUnion", "Label", "LoopJoin", "MaxDop", "MaxGrantPercent", "MaxRecursion", "MergeJoin", "MergeUnion", "MinGrantPercent", "NoPerformanceSpool", "OptimizeCorrelatedUnionAll", "OptimizeFor", "OrderGroup", "ParameterizationForced", "ParameterizationSimple", "QueryTraceOn", "Recompile", "RobustPlan", "ShrinkDBPlan", "TableHints", "Unspecified", "UsePlan"];
        readonly flags: false;
    }];
}, {
    readonly kind: "UseStatement";
    readonly edges: readonly [{
        readonly name: "DatabaseName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UserDataTypeReference";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UserDefinedTypeCallTarget";
    readonly edges: readonly [{
        readonly name: "SchemaObjectName";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UserDefinedTypePropertyAccess";
    readonly edges: readonly [{
        readonly name: "CallTarget";
        readonly array: false;
        readonly kinds: readonly ["ExpressionCallTarget", "MultiPartIdentifierCallTarget", "UserDefinedTypeCallTarget"];
    }, {
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "PropertyName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "UserLoginOption";
    readonly edges: readonly [{
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "UserLoginOptionType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AsymmetricKey", "Certificate", "External", "Login", "WithoutLogin"];
        readonly flags: false;
    }];
}, {
    readonly kind: "UserRemoteServiceBindingOption";
    readonly edges: readonly [{
        readonly name: "User";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Anonymous", "User"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ValuesInsertSource";
    readonly edges: readonly [{
        readonly name: "RowValues";
        readonly array: true;
        readonly kinds: readonly ["RowValue"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsDefaultValues";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "VariableMethodCallTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Columns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "MethodName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Parameters";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Variable";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "VariableReference";
    readonly edges: readonly [{
        readonly name: "Collation";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [{
        readonly name: "Name";
        readonly kind: "string";
        readonly nullable: true;
    }];
}, {
    readonly kind: "VariableTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Variable";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "VariableValuePair";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Variable";
        readonly array: false;
        readonly kinds: readonly ["VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsForUnknown";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "VectorDataTypeReference";
    readonly edges: readonly [{
        readonly name: "BaseType";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Dimension";
        readonly array: false;
        readonly kinds: readonly ["IntegerLiteral"];
    }, {
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "VectorMetricIndexOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "MetricType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Cosine", "Dot", "Euclidean"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "VectorSearchTableReference";
    readonly edges: readonly [{
        readonly name: "Alias";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "Column";
        readonly array: false;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "Metric";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }, {
        readonly name: "SimilarTo";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "Table";
        readonly array: false;
        readonly kinds: readonly ["AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "AdHocTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "NamedTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    }, {
        readonly name: "TopN";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "ForPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "ForceAnnOnly";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "VectorTypeIndexOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }, {
        readonly name: "VectorType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["DiskANN"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ViewDistributionOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["ViewHashDistributionPolicy", "ViewRoundRobinDistributionPolicy"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Distribution", "Encryption", "ForAppend", "SchemaBinding", "ViewMetadata"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ViewForAppendOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Distribution", "Encryption", "ForAppend", "SchemaBinding", "ViewMetadata"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ViewHashDistributionPolicy";
    readonly edges: readonly [{
        readonly name: "DistributionColumn";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "DistributionColumns";
        readonly array: true;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "ViewOption";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Distribution", "Encryption", "ForAppend", "SchemaBinding", "ViewMetadata"];
        readonly flags: false;
    }];
}, {
    readonly kind: "ViewRoundRobinDistributionPolicy";
    readonly edges: readonly [];
    readonly attributes: readonly [];
}, {
    readonly kind: "WaitAtLowPriorityOption";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["LowPriorityLockWaitAbortAfterWaitOption", "LowPriorityLockWaitMaxDurationOption"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "WaitForStatement";
    readonly edges: readonly [{
        readonly name: "Parameter";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "Statement";
        readonly array: false;
        readonly kinds: readonly ["GetConversationGroupStatement", "ReceiveStatement"];
    }, {
        readonly name: "Timeout";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "WaitForOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Delay", "Statement", "Time"];
        readonly flags: false;
    }];
}, {
    readonly kind: "WhereClause";
    readonly edges: readonly [{
        readonly name: "Cursor";
        readonly array: false;
        readonly kinds: readonly ["CursorId"];
    }, {
        readonly name: "SearchCondition";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "WhileStatement";
    readonly edges: readonly [{
        readonly name: "Predicate";
        readonly array: false;
        readonly kinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    }, {
        readonly name: "Statement";
        readonly array: false;
        readonly kinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamStatement", "CreateExternalStreamingJobStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamStatement", "DropExternalStreamingJobStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "TSqlStatementSnippet", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "WindowClause";
    readonly edges: readonly [{
        readonly name: "WindowDefinition";
        readonly array: true;
        readonly kinds: readonly ["WindowDefinition"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "WindowDefinition";
    readonly edges: readonly [{
        readonly name: "OrderByClause";
        readonly array: false;
        readonly kinds: readonly ["OrderByClause"];
    }, {
        readonly name: "Partitions";
        readonly array: true;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }, {
        readonly name: "RefWindowName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "WindowFrameClause";
        readonly array: false;
        readonly kinds: readonly ["WindowFrameClause"];
    }, {
        readonly name: "WindowName";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "WindowDelimiter";
    readonly edges: readonly [{
        readonly name: "OffsetValue";
        readonly array: false;
        readonly kinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IIfCall", "IdentifierLiteral", "IdentityFunctionCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    }];
    readonly attributes: readonly [{
        readonly name: "WindowDelimiterType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CurrentRow", "UnboundedFollowing", "UnboundedPreceding", "ValueFollowing", "ValuePreceding"];
        readonly flags: false;
    }];
}, {
    readonly kind: "WindowFrameClause";
    readonly edges: readonly [{
        readonly name: "Bottom";
        readonly array: false;
        readonly kinds: readonly ["WindowDelimiter"];
    }, {
        readonly name: "Top";
        readonly array: false;
        readonly kinds: readonly ["WindowDelimiter"];
    }];
    readonly attributes: readonly [{
        readonly name: "WindowFrameType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Range", "Rows"];
        readonly flags: false;
    }];
}, {
    readonly kind: "WindowsCreateLoginSource";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "WithCtesAndXmlNamespaces";
    readonly edges: readonly [{
        readonly name: "ChangeTrackingContext";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "CommonTableExpressions";
        readonly array: true;
        readonly kinds: readonly ["CommonTableExpression"];
    }, {
        readonly name: "XmlNamespaces";
        readonly array: false;
        readonly kinds: readonly ["XmlNamespaces"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "WithinGroupClause";
    readonly edges: readonly [{
        readonly name: "OrderByClause";
        readonly array: false;
        readonly kinds: readonly ["OrderByClause"];
    }];
    readonly attributes: readonly [{
        readonly name: "HasGraphPath";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "WitnessDatabaseOption";
    readonly edges: readonly [{
        readonly name: "WitnessServer";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsOff";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AcceleratedDatabaseRecovery", "AllowSnapshotIsolation", "AnsiNullDefault", "AnsiNulls", "AnsiPadding", "AnsiWarnings", "ArithAbort", "AutoClose", "AutoCreateStatistics", "AutoShrink", "AutoUpdateStatistics", "AutoUpdateStatisticsAsync", "AutomaticIndexCompaction", "AutomaticTuning", "CatalogCollation", "ChangeTracking", "CompatibilityLevel", "ConcatNullYieldsNull", "Containment", "CursorCloseOnCommit", "CursorDefault", "DBChaining", "DataRetention", "DateCorrelationOptimization", "DefaultFullTextLanguage", "DefaultLanguage", "DelayedDurability", "DisableBroker", "Edition", "Emergency", "EnableBroker", "Encryption", "ErrorBrokerConversations", "FileStream", "Hadr", "HonorBrokerPriority", "Ledger", "ManualCutover", "MaxSize", "MemoryOptimizedData", "MemoryOptimizedElevateToSnapshot", "MixedPageAllocation", "MultiUser", "NestedTriggers", "NewBroker", "NumericRoundAbort", "Offline", "Online", "OptimizedLocking", "PageVerify", "Parameterization", "Partner", "PerformCutover", "QueryStore", "QuotedIdentifier", "ReadCommittedSnapshot", "ReadOnly", "ReadWrite", "Recovery", "RecursiveTriggers", "RemoteDataArchive", "RestrictedUser", "ServiceObjective", "SingleUser", "SupplementalLogging", "TargetRecoveryTime", "TemporalHistoryRetention", "TornPageDetection", "TransformNoiseWords", "Trustworthy", "TwoDigitYearCutoff", "VarDecimalStorageFormat", "Witness"];
        readonly flags: false;
    }];
}, {
    readonly kind: "WlmTimeLiteral";
    readonly edges: readonly [{
        readonly name: "TimeString";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "WorkloadGroupImportanceParameter";
    readonly edges: readonly [];
    readonly attributes: readonly [{
        readonly name: "ParameterType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CapPercentageResource", "GroupMaxRequests", "GroupMinMemoryPercent", "Importance", "MaxDop", "MinPercentageResource", "QueryExecutionTimeoutSec", "RequestMaxCpuTimeSec", "RequestMaxMemoryGrantPercent", "RequestMaxResourceGrantPercent", "RequestMemoryGrantTimeoutSec", "RequestMinResourceGrantPercent"];
        readonly flags: false;
    }, {
        readonly name: "ParameterValue";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Above_Normal", "Below_Normal", "High", "Low", "Medium", "Normal", "Unknown"];
        readonly flags: false;
    }];
}, {
    readonly kind: "WorkloadGroupResourceParameter";
    readonly edges: readonly [{
        readonly name: "ParameterValue";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "ParameterType";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["CapPercentageResource", "GroupMaxRequests", "GroupMinMemoryPercent", "Importance", "MaxDop", "MinPercentageResource", "QueryExecutionTimeoutSec", "RequestMaxCpuTimeSec", "RequestMaxMemoryGrantPercent", "RequestMaxResourceGrantPercent", "RequestMemoryGrantTimeoutSec", "RequestMinResourceGrantPercent"];
        readonly flags: false;
    }];
}, {
    readonly kind: "WriteTextStatement";
    readonly edges: readonly [{
        readonly name: "Column";
        readonly array: false;
        readonly kinds: readonly ["ColumnReferenceExpression"];
    }, {
        readonly name: "SourceParameter";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "TextId";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    }, {
        readonly name: "Timestamp";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "Bulk";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "WithLog";
        readonly kind: "boolean";
        readonly nullable: false;
    }];
}, {
    readonly kind: "WsdlPayloadOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsNone";
        readonly kind: "boolean";
        readonly nullable: false;
    }, {
        readonly name: "Kind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Authentication", "Batches", "CharacterSet", "Database", "DatabaseMirroringOptions", "Encryption", "HeaderLimit", "LoginType", "MessageForwardSize", "MessageForwarding", "Namespace", "None", "Role", "Schema", "ServiceBrokerOptions", "SessionTimeout", "Sessions", "SoapOptions", "WebMethod", "Wsdl"];
        readonly flags: true;
    }];
}, {
    readonly kind: "XmlCompressionOption";
    readonly edges: readonly [{
        readonly name: "PartitionRanges";
        readonly array: true;
        readonly kinds: readonly ["CompressionPartitionRange"];
    }];
    readonly attributes: readonly [{
        readonly name: "IsCompressed";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Off", "On"];
        readonly flags: false;
    }, {
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["AllowPageLocks", "AllowRowLocks", "BucketCount", "CompressAllRowGroups", "CompressionDelay", "DataCompression", "DropExisting", "FileStreamOn", "FillFactor", "IgnoreDupKey", "LobCompaction", "MaxDop", "MaxDuration", "MoveTo", "Online", "OptimizeForArraySearch", "OptimizeForSequentialKey", "Order", "PadIndex", "Resumable", "SortInTempDB", "StatisticsIncremental", "StatisticsNoRecompute", "VectorMetric", "VectorType", "WaitAtLowPriority", "XmlCompression"];
        readonly flags: false;
    }];
}, {
    readonly kind: "XmlDataTypeReference";
    readonly edges: readonly [{
        readonly name: "Name";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }, {
        readonly name: "XmlSchemaCollection";
        readonly array: false;
        readonly kinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    }];
    readonly attributes: readonly [{
        readonly name: "XmlDataTypeOption";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Content", "Document", "None"];
        readonly flags: false;
    }];
}, {
    readonly kind: "XmlForClause";
    readonly edges: readonly [{
        readonly name: "Options";
        readonly array: true;
        readonly kinds: readonly ["XmlForClauseOption"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "XmlForClauseOption";
    readonly edges: readonly [{
        readonly name: "Value";
        readonly array: false;
        readonly kinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    }];
    readonly attributes: readonly [{
        readonly name: "OptionKind";
        readonly kind: "enum";
        readonly nullable: false;
        readonly values: readonly ["Auto", "BinaryBase64", "Elements", "ElementsAbsent", "ElementsAll", "ElementsXsiNil", "Explicit", "None", "Path", "Raw", "Root", "Type", "XmlData", "XmlSchema"];
        readonly flags: true;
    }];
}, {
    readonly kind: "XmlNamespaces";
    readonly edges: readonly [{
        readonly name: "XmlNamespacesElements";
        readonly array: true;
        readonly kinds: readonly ["XmlNamespacesAliasElement", "XmlNamespacesDefaultElement"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "XmlNamespacesAliasElement";
    readonly edges: readonly [{
        readonly name: "Identifier";
        readonly array: false;
        readonly kinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    }, {
        readonly name: "String";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}, {
    readonly kind: "XmlNamespacesDefaultElement";
    readonly edges: readonly [{
        readonly name: "String";
        readonly array: false;
        readonly kinds: readonly ["StringLiteral"];
    }];
    readonly attributes: readonly [];
}];
export type TsqlParserNodeKind = (typeof PARSER_NODE_POLICIES)[number]['kind'];
export type TsqlParserEdgeName = (typeof PARSER_NODE_POLICIES)[number]['edges'][number]['name'];
export type TsqlParserAttributeName = (typeof PARSER_NODE_POLICIES)[number]['attributes'][number]['name'];
