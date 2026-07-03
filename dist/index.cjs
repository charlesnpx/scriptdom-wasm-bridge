const __scriptdomBridgeModuleDirectory = __dirname;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  createTsqlIntrospector: () => createTsqlIntrospector,
  createTsqlSanitizer: () => createTsqlSanitizer,
  createTsqlTokenizer: () => createTsqlTokenizer,
  normalizeTsqlPlaceholders: () => normalizeTsqlPlaceholders
});
module.exports = __toCommonJS(index_exports);

// src/introspector.ts
var import_node_path2 = __toESM(require("node:path"), 1);

// src/introspector-projection.v1.generated.ts
var INTROSPECTOR_PROJECTION_ABI = {
  "allowlistSha256": "7a643f7cfaffc8cf599587e73a79cbf82ae15d496d574f1ded9b263007aec977",
  "identifierRedactionProfile": "v1-conservative",
  "limits": {
    "nodes": 1e5,
    "parseErrors": 1e3,
    "pathSegments": 25e4,
    "privateOptionsJsonUtf16CodeUnits": 80,
    "projectedOutputUtf16CodeUnits": 4194304,
    "serializedEnvelopeUtf8Bytes": 16777216,
    "sqlUtf16CodeUnits": 2097152,
    "tokens": 25e4,
    "traversalDepth": 1e3,
    "traversedFragments": 25e4
  },
  "manifestSha256": "c772369fd341ee586e13e1d080b2f4d2842bbd946c9c2f0b3b4e805b8f0a576b",
  "parser": "TSql160Parser",
  "projectionVersion": 1,
  "resultSchemaSha256": "0ffa1b8f8804b3322a95d31072537e06720b815ce9741ee6f9a6fbe4393ae10a"
};
var TSQL_STRUCTURAL_NODE_KINDS = [
  "AIAnalyzeSentimentFunctionCall",
  "AIClassifyFunctionCall",
  "AIExtractFunctionCall",
  "AIFixGrammarFunctionCall",
  "AIGenerateChunksTableReference",
  "AIGenerateEmbeddingsFunctionCall",
  "AIGenerateFixedChunksTableReference",
  "AIGenerateResponseFunctionCall",
  "AISummarizeFunctionCall",
  "AITranslateFunctionCall",
  "AcceleratedDatabaseRecoveryDatabaseOption",
  "AdHocDataSource",
  "AdHocTableReference",
  "AddAlterFullTextIndexAction",
  "AddFileSpec",
  "AddMemberAlterRoleAction",
  "AddSearchPropertyListAction",
  "AddSensitivityClassificationStatement",
  "AddSignatureStatement",
  "AlgorithmKeyOption",
  "AlterApplicationRoleStatement",
  "AlterAssemblyStatement",
  "AlterAsymmetricKeyStatement",
  "AlterAuthorizationStatement",
  "AlterAvailabilityGroupAction",
  "AlterAvailabilityGroupFailoverAction",
  "AlterAvailabilityGroupFailoverOption",
  "AlterAvailabilityGroupStatement",
  "AlterBrokerPriorityStatement",
  "AlterCertificateStatement",
  "AlterColumnAlterFullTextIndexAction",
  "AlterColumnEncryptionKeyStatement",
  "AlterCredentialStatement",
  "AlterCryptographicProviderStatement",
  "AlterDatabaseAddFileGroupStatement",
  "AlterDatabaseAddFileStatement",
  "AlterDatabaseAuditSpecificationStatement",
  "AlterDatabaseCollateStatement",
  "AlterDatabaseEncryptionKeyStatement",
  "AlterDatabaseModifyFileGroupStatement",
  "AlterDatabaseModifyFileStatement",
  "AlterDatabaseModifyNameStatement",
  "AlterDatabasePerformCutoverStatement",
  "AlterDatabaseRebuildLogStatement",
  "AlterDatabaseRemoveFileGroupStatement",
  "AlterDatabaseRemoveFileStatement",
  "AlterDatabaseScopedConfigurationClearStatement",
  "AlterDatabaseScopedConfigurationSetStatement",
  "AlterDatabaseSetStatement",
  "AlterDatabaseTermination",
  "AlterEndpointStatement",
  "AlterEventSessionStatement",
  "AlterExternalDataSourceStatement",
  "AlterExternalFunctionStatement",
  "AlterExternalLanguageStatement",
  "AlterExternalLibraryStatement",
  "AlterExternalModelStatement",
  "AlterExternalResourcePoolStatement",
  "AlterFederationStatement",
  "AlterFullTextCatalogStatement",
  "AlterFullTextIndexStatement",
  "AlterFullTextStopListStatement",
  "AlterFunctionStatement",
  "AlterIndexStatement",
  "AlterLoginAddDropCredentialStatement",
  "AlterLoginEnableDisableStatement",
  "AlterLoginOptionsStatement",
  "AlterMasterKeyStatement",
  "AlterMessageTypeStatement",
  "AlterPartitionFunctionStatement",
  "AlterPartitionSchemeStatement",
  "AlterProcedureStatement",
  "AlterQueueStatement",
  "AlterRemoteServiceBindingStatement",
  "AlterResourceGovernorStatement",
  "AlterResourcePoolStatement",
  "AlterRoleStatement",
  "AlterRouteStatement",
  "AlterSchemaStatement",
  "AlterSearchPropertyListStatement",
  "AlterSecurityPolicyStatement",
  "AlterSequenceStatement",
  "AlterServerAuditSpecificationStatement",
  "AlterServerAuditStatement",
  "AlterServerConfigurationBufferPoolExtensionContainerOption",
  "AlterServerConfigurationBufferPoolExtensionOption",
  "AlterServerConfigurationBufferPoolExtensionSizeOption",
  "AlterServerConfigurationDiagnosticsLogMaxSizeOption",
  "AlterServerConfigurationDiagnosticsLogOption",
  "AlterServerConfigurationExternalAuthenticationContainerOption",
  "AlterServerConfigurationExternalAuthenticationOption",
  "AlterServerConfigurationFailoverClusterPropertyOption",
  "AlterServerConfigurationHadrClusterOption",
  "AlterServerConfigurationSetBufferPoolExtensionStatement",
  "AlterServerConfigurationSetDiagnosticsLogStatement",
  "AlterServerConfigurationSetExternalAuthenticationStatement",
  "AlterServerConfigurationSetFailoverClusterPropertyStatement",
  "AlterServerConfigurationSetHadrClusterStatement",
  "AlterServerConfigurationSetSoftNumaStatement",
  "AlterServerConfigurationSoftNumaOption",
  "AlterServerConfigurationStatement",
  "AlterServerRoleStatement",
  "AlterServiceMasterKeyStatement",
  "AlterServiceStatement",
  "AlterSymmetricKeyStatement",
  "AlterTableAddClusterByStatement",
  "AlterTableAddTableElementStatement",
  "AlterTableAlterColumnStatement",
  "AlterTableAlterIndexStatement",
  "AlterTableAlterPartitionStatement",
  "AlterTableChangeTrackingModificationStatement",
  "AlterTableConstraintModificationStatement",
  "AlterTableDropTableElement",
  "AlterTableDropTableElementStatement",
  "AlterTableFileTableNamespaceStatement",
  "AlterTableRebuildStatement",
  "AlterTableSetStatement",
  "AlterTableSwitchStatement",
  "AlterTableTriggerModificationStatement",
  "AlterTriggerStatement",
  "AlterUserStatement",
  "AlterViewStatement",
  "AlterWorkloadGroupStatement",
  "AlterXmlSchemaCollectionStatement",
  "ApplicationRoleOption",
  "AssemblyEncryptionSource",
  "AssemblyName",
  "AssemblyOption",
  "AssignmentSetClause",
  "AsymmetricKeyCreateLoginSource",
  "AtTimeZoneCall",
  "AuditActionGroupReference",
  "AuditActionSpecification",
  "AuditGuidAuditOption",
  "AuditSpecificationPart",
  "AuditTarget",
  "AuthenticationEndpointProtocolOption",
  "AuthenticationPayloadOption",
  "AutoCleanupChangeTrackingOptionDetail",
  "AutoCreateStatisticsDatabaseOption",
  "AutomaticTuningCreateIndexOption",
  "AutomaticTuningDatabaseOption",
  "AutomaticTuningDropIndexOption",
  "AutomaticTuningForceLastGoodPlanOption",
  "AutomaticTuningMaintainIndexOption",
  "AutomaticTuningOption",
  "AvailabilityModeReplicaOption",
  "AvailabilityReplica",
  "BackupCertificateStatement",
  "BackupDatabaseStatement",
  "BackupEncryptionOption",
  "BackupMasterKeyStatement",
  "BackupOption",
  "BackupRestoreFileInfo",
  "BackupServiceMasterKeyStatement",
  "BackupTransactionLogStatement",
  "BackwardsCompatibleDropIndexClause",
  "BeginConversationTimerStatement",
  "BeginDialogStatement",
  "BeginEndAtomicBlockStatement",
  "BeginEndBlockStatement",
  "BeginTransactionStatement",
  "BinaryExpression",
  "BinaryLiteral",
  "BinaryQueryExpression",
  "BooleanBinaryExpression",
  "BooleanComparisonExpression",
  "BooleanExpressionSnippet",
  "BooleanIsNullExpression",
  "BooleanNotExpression",
  "BooleanParenthesisExpression",
  "BooleanTernaryExpression",
  "BoundingBoxParameter",
  "BoundingBoxSpatialIndexOption",
  "BreakStatement",
  "BrokerPriorityParameter",
  "BrowseForClause",
  "BuiltInFunctionTableReference",
  "BulkInsertOption",
  "BulkInsertStatement",
  "BulkOpenRowset",
  "CastCall",
  "CatalogCollationOption",
  "CellsPerObjectSpatialIndexOption",
  "CertificateCreateLoginSource",
  "CertificateOption",
  "ChangeRetentionChangeTrackingOptionDetail",
  "ChangeTableChangesTableReference",
  "ChangeTableVersionTableReference",
  "ChangeTrackingDatabaseOption",
  "ChangeTrackingFullTextIndexOption",
  "CharacterSetPayloadOption",
  "CheckConstraintDefinition",
  "CheckpointStatement",
  "ChildObjectName",
  "ClassifierEndTimeOption",
  "ClassifierImportanceOption",
  "ClassifierMemberNameOption",
  "ClassifierStartTimeOption",
  "ClassifierWlmContextOption",
  "ClassifierWlmLabelOption",
  "ClassifierWorkloadGroupOption",
  "CloseCursorStatement",
  "CloseMasterKeyStatement",
  "CloseSymmetricKeyStatement",
  "ClusterByTableOption",
  "CoalesceExpression",
  "ColumnDefinition",
  "ColumnDefinitionBase",
  "ColumnEncryptionAlgorithmNameParameter",
  "ColumnEncryptionAlgorithmParameter",
  "ColumnEncryptionDefinition",
  "ColumnEncryptionKeyNameParameter",
  "ColumnEncryptionKeyValue",
  "ColumnEncryptionTypeParameter",
  "ColumnMasterKeyEnclaveComputationsParameter",
  "ColumnMasterKeyNameParameter",
  "ColumnMasterKeyPathParameter",
  "ColumnMasterKeyStoreProviderNameParameter",
  "ColumnReferenceExpression",
  "ColumnStorageOptions",
  "ColumnWithSortOrder",
  "CommandSecurityElement80",
  "CommitTransactionStatement",
  "CommonTableExpression",
  "CompositeGroupingSpecification",
  "CompressionDelayIndexOption",
  "CompressionEndpointProtocolOption",
  "CompressionPartitionRange",
  "ComputeClause",
  "ComputeFunction",
  "ContainmentDatabaseOption",
  "ContinueStatement",
  "ContractMessage",
  "ConvertCall",
  "CopyColumnOption",
  "CopyCredentialOption",
  "CopyOption",
  "CopyStatement",
  "CreateAggregateStatement",
  "CreateApplicationRoleStatement",
  "CreateAssemblyStatement",
  "CreateAsymmetricKeyStatement",
  "CreateAvailabilityGroupStatement",
  "CreateBrokerPriorityStatement",
  "CreateCertificateStatement",
  "CreateColumnEncryptionKeyStatement",
  "CreateColumnMasterKeyStatement",
  "CreateColumnStoreIndexStatement",
  "CreateContractStatement",
  "CreateCredentialStatement",
  "CreateCryptographicProviderStatement",
  "CreateDatabaseAuditSpecificationStatement",
  "CreateDatabaseEncryptionKeyStatement",
  "CreateDatabaseStatement",
  "CreateDefaultStatement",
  "CreateEndpointStatement",
  "CreateEventNotificationStatement",
  "CreateEventSessionStatement",
  "CreateExternalDataSourceStatement",
  "CreateExternalFileFormatStatement",
  "CreateExternalFunctionStatement",
  "CreateExternalLanguageStatement",
  "CreateExternalLibraryStatement",
  "CreateExternalModelStatement",
  "CreateExternalResourcePoolStatement",
  "CreateExternalStreamStatement",
  "CreateExternalStreamingJobStatement",
  "CreateExternalTableStatement",
  "CreateFederationStatement",
  "CreateFullTextCatalogStatement",
  "CreateFullTextIndexStatement",
  "CreateFullTextStopListStatement",
  "CreateFunctionStatement",
  "CreateIndexStatement",
  "CreateJsonIndexStatement",
  "CreateLoginStatement",
  "CreateMasterKeyStatement",
  "CreateMessageTypeStatement",
  "CreateOrAlterExternalFunctionStatement",
  "CreateOrAlterFunctionStatement",
  "CreateOrAlterProcedureStatement",
  "CreateOrAlterTriggerStatement",
  "CreateOrAlterViewStatement",
  "CreatePartitionFunctionStatement",
  "CreatePartitionSchemeStatement",
  "CreateProcedureStatement",
  "CreateQueueStatement",
  "CreateRemoteServiceBindingStatement",
  "CreateResourcePoolStatement",
  "CreateRoleStatement",
  "CreateRouteStatement",
  "CreateRuleStatement",
  "CreateSchemaStatement",
  "CreateSearchPropertyListStatement",
  "CreateSecurityPolicyStatement",
  "CreateSelectiveXmlIndexStatement",
  "CreateSemanticIndexStatement",
  "CreateSequenceStatement",
  "CreateServerAuditSpecificationStatement",
  "CreateServerAuditStatement",
  "CreateServerRoleStatement",
  "CreateServiceStatement",
  "CreateSpatialIndexStatement",
  "CreateStatisticsStatement",
  "CreateSymmetricKeyStatement",
  "CreateSynonymStatement",
  "CreateTableStatement",
  "CreateTriggerStatement",
  "CreateTypeTableStatement",
  "CreateTypeUddtStatement",
  "CreateTypeUdtStatement",
  "CreateUserStatement",
  "CreateVectorIndexStatement",
  "CreateViewStatement",
  "CreateWorkloadClassifierStatement",
  "CreateWorkloadGroupStatement",
  "CreateXmlIndexStatement",
  "CreateXmlSchemaCollectionStatement",
  "CreationDispositionKeyOption",
  "CryptoMechanism",
  "CubeGroupingSpecification",
  "CursorDefaultDatabaseOption",
  "CursorDefinition",
  "CursorId",
  "CursorOption",
  "DWCompatibilityLevelConfigurationOption",
  "DataCompressionOption",
  "DataModificationTableReference",
  "DataRetentionTableOption",
  "DataTypeSequenceOption",
  "DatabaseAuditAction",
  "DatabaseConfigurationClearOption",
  "DatabaseConfigurationSetOption",
  "DatabaseOption",
  "DbccNamedLiteral",
  "DbccOption",
  "DbccStatement",
  "DeallocateCursorStatement",
  "DeclareCursorStatement",
  "DeclareTableVariableBody",
  "DeclareTableVariableStatement",
  "DeclareVariableElement",
  "DeclareVariableStatement",
  "DefaultConstraintDefinition",
  "DefaultLiteral",
  "DelayedDurabilityDatabaseOption",
  "DeleteMergeAction",
  "DeleteSpecification",
  "DeleteStatement",
  "DenyStatement",
  "DenyStatement80",
  "DeviceInfo",
  "DiskStatement",
  "DiskStatementOption",
  "DistinctPredicate",
  "DropAggregateStatement",
  "DropAlterFullTextIndexAction",
  "DropApplicationRoleStatement",
  "DropAssemblyStatement",
  "DropAsymmetricKeyStatement",
  "DropAvailabilityGroupStatement",
  "DropBrokerPriorityStatement",
  "DropCertificateStatement",
  "DropClusteredConstraintMoveOption",
  "DropClusteredConstraintStateOption",
  "DropClusteredConstraintValueOption",
  "DropClusteredConstraintWaitAtLowPriorityLockOption",
  "DropColumnEncryptionKeyStatement",
  "DropColumnMasterKeyStatement",
  "DropContractStatement",
  "DropCredentialStatement",
  "DropCryptographicProviderStatement",
  "DropDatabaseAuditSpecificationStatement",
  "DropDatabaseEncryptionKeyStatement",
  "DropDatabaseStatement",
  "DropDefaultStatement",
  "DropEndpointStatement",
  "DropEventNotificationStatement",
  "DropEventSessionStatement",
  "DropExternalDataSourceStatement",
  "DropExternalFileFormatStatement",
  "DropExternalLanguageStatement",
  "DropExternalLibraryStatement",
  "DropExternalModelStatement",
  "DropExternalResourcePoolStatement",
  "DropExternalStreamStatement",
  "DropExternalStreamingJobStatement",
  "DropExternalTableStatement",
  "DropFederationStatement",
  "DropFullTextCatalogStatement",
  "DropFullTextIndexStatement",
  "DropFullTextStopListStatement",
  "DropFunctionStatement",
  "DropIndexClause",
  "DropIndexStatement",
  "DropLoginStatement",
  "DropMasterKeyStatement",
  "DropMemberAlterRoleAction",
  "DropMessageTypeStatement",
  "DropPartitionFunctionStatement",
  "DropPartitionSchemeStatement",
  "DropProcedureStatement",
  "DropQueueStatement",
  "DropRemoteServiceBindingStatement",
  "DropResourcePoolStatement",
  "DropRoleStatement",
  "DropRouteStatement",
  "DropRuleStatement",
  "DropSchemaStatement",
  "DropSearchPropertyListAction",
  "DropSearchPropertyListStatement",
  "DropSecurityPolicyStatement",
  "DropSensitivityClassificationStatement",
  "DropSequenceStatement",
  "DropServerAuditSpecificationStatement",
  "DropServerAuditStatement",
  "DropServerRoleStatement",
  "DropServiceStatement",
  "DropSignatureStatement",
  "DropStatisticsStatement",
  "DropSymmetricKeyStatement",
  "DropSynonymStatement",
  "DropTableStatement",
  "DropTriggerStatement",
  "DropTypeStatement",
  "DropUserStatement",
  "DropViewStatement",
  "DropWorkloadClassifierStatement",
  "DropWorkloadGroupStatement",
  "DropXmlSchemaCollectionStatement",
  "DurabilityTableOption",
  "ElasticPoolSpecification",
  "EnableDisableTriggerStatement",
  "EnabledDisabledPayloadOption",
  "EncryptedValueParameter",
  "EncryptionPayloadOption",
  "EndConversationStatement",
  "EndpointAffinity",
  "EventDeclaration",
  "EventDeclarationCompareFunctionParameter",
  "EventDeclarationSetParameter",
  "EventGroupContainer",
  "EventNotificationObjectScope",
  "EventRetentionSessionOption",
  "EventSessionObjectName",
  "EventSessionStatement",
  "EventTypeContainer",
  "ExecutableProcedureReference",
  "ExecutableStringList",
  "ExecuteAsClause",
  "ExecuteAsFunctionOption",
  "ExecuteAsProcedureOption",
  "ExecuteAsStatement",
  "ExecuteAsTriggerOption",
  "ExecuteContext",
  "ExecuteInsertSource",
  "ExecuteOption",
  "ExecuteParameter",
  "ExecuteSpecification",
  "ExecuteStatement",
  "ExistsPredicate",
  "ExpressionCallTarget",
  "ExpressionGroupingSpecification",
  "ExpressionWithSortOrder",
  "ExternalCreateLoginSource",
  "ExternalDataSourceLiteralOrIdentifierOption",
  "ExternalFileFormatContainerOption",
  "ExternalFileFormatLiteralOption",
  "ExternalFileFormatUseDefaultTypeOption",
  "ExternalLanguageFileOption",
  "ExternalLibraryFileOption",
  "ExternalResourcePoolAffinitySpecification",
  "ExternalResourcePoolParameter",
  "ExternalResourcePoolStatement",
  "ExternalStreamLiteralOrIdentifierOption",
  "ExternalTableColumnDefinition",
  "ExternalTableDistributionOption",
  "ExternalTableLiteralOrIdentifierOption",
  "ExternalTableRejectTypeOption",
  "ExternalTableReplicatedDistributionPolicy",
  "ExternalTableRoundRobinDistributionPolicy",
  "ExternalTableShardedDistributionPolicy",
  "ExtractFromExpression",
  "FailoverModeReplicaOption",
  "FederationScheme",
  "FetchCursorStatement",
  "FetchType",
  "FileDeclaration",
  "FileDeclarationOption",
  "FileEncryptionSource",
  "FileGroupDefinition",
  "FileGroupOrPartitionScheme",
  "FileGrowthFileDeclarationOption",
  "FileNameFileDeclarationOption",
  "FileStreamDatabaseOption",
  "FileStreamOnDropIndexOption",
  "FileStreamOnTableOption",
  "FileStreamRestoreOption",
  "FileTableCollateFileNameTableOption",
  "FileTableConstraintNameTableOption",
  "FileTableDirectoryTableOption",
  "ForceSeekTableHint",
  "ForeignKeyConstraintDefinition",
  "FromClause",
  "FullTextCatalogAndFileGroup",
  "FullTextIndexColumn",
  "FullTextPredicate",
  "FullTextStopListAction",
  "FullTextTableReference",
  "FunctionCall",
  "FunctionCallSetClause",
  "FunctionOption",
  "GeneralSetCommand",
  "GenericConfigurationOption",
  "GetConversationGroupStatement",
  "GlobalFunctionTableReference",
  "GlobalVariableExpression",
  "GoToStatement",
  "GrandTotalGroupingSpecification",
  "GrantStatement",
  "GrantStatement80",
  "GraphConnectionBetweenNodes",
  "GraphConnectionConstraintDefinition",
  "GraphMatchCompositeExpression",
  "GraphMatchExpression",
  "GraphMatchLastNodePredicate",
  "GraphMatchNodeExpression",
  "GraphMatchPredicate",
  "GraphMatchRecursivePredicate",
  "GraphRecursiveMatchQuantifier",
  "GridParameter",
  "GridsSpatialIndexOption",
  "GroupByClause",
  "GroupingSetsGroupingSpecification",
  "HadrAvailabilityGroupDatabaseOption",
  "HadrDatabaseOption",
  "HavingClause",
  "IIfCall",
  "IPv4",
  "Identifier",
  "IdentifierAtomicBlockOption",
  "IdentifierDatabaseOption",
  "IdentifierLiteral",
  "IdentifierOrScalarExpression",
  "IdentifierOrValueExpression",
  "IdentifierPrincipalOption",
  "IdentifierSnippet",
  "IdentityFunctionCall",
  "IdentityOptions",
  "IdentityValueKeyOption",
  "IfStatement",
  "IgnoreDupKeyIndexOption",
  "InPredicate",
  "IndexDefinition",
  "IndexExpressionOption",
  "IndexStateOption",
  "IndexTableHint",
  "IndexType",
  "InlineDerivedTable",
  "InlineFunctionOption",
  "InlineResultSetDefinition",
  "InsertBulkColumnDefinition",
  "InsertBulkStatement",
  "InsertMergeAction",
  "InsertSpecification",
  "InsertStatement",
  "IntegerLiteral",
  "InternalOpenRowset",
  "InvokeExternalApiFunctionCall",
  "JoinParenthesisTableReference",
  "JsonForClause",
  "JsonForClauseOption",
  "JsonKeyValue",
  "KeySourceKeyOption",
  "KillQueryNotificationSubscriptionStatement",
  "KillStatement",
  "KillStatsJobStatement",
  "LabelStatement",
  "LedgerOption",
  "LedgerTableOption",
  "LedgerViewOption",
  "LeftFunctionCall",
  "LikePredicate",
  "LineNoStatement",
  "ListTypeCopyOption",
  "ListenerIPEndpointProtocolOption",
  "LiteralAtomicBlockOption",
  "LiteralAuditTargetOption",
  "LiteralAvailabilityGroupOption",
  "LiteralBulkInsertOption",
  "LiteralDatabaseOption",
  "LiteralEndpointProtocolOption",
  "LiteralOpenRowsetCosmosOption",
  "LiteralOptimizerHint",
  "LiteralOptionValue",
  "LiteralPayloadOption",
  "LiteralPrincipalOption",
  "LiteralRange",
  "LiteralReplicaOption",
  "LiteralSessionOption",
  "LiteralStatisticsOption",
  "LiteralTableHint",
  "LocationOption",
  "LockEscalationTableOption",
  "LoginTypePayloadOption",
  "LowPriorityLockWaitAbortAfterWaitOption",
  "LowPriorityLockWaitMaxDurationOption",
  "LowPriorityLockWaitTableSwitchOption",
  "MaxDispatchLatencySessionOption",
  "MaxDopConfigurationOption",
  "MaxDurationOption",
  "MaxLiteral",
  "MaxRolloverFilesAuditTargetOption",
  "MaxSizeAuditTargetOption",
  "MaxSizeDatabaseOption",
  "MaxSizeFileDeclarationOption",
  "MemoryOptimizedTableOption",
  "MemoryPartitionSessionOption",
  "MergeActionClause",
  "MergeSpecification",
  "MergeStatement",
  "MethodSpecifier",
  "MirrorToClause",
  "MoneyLiteral",
  "MoveConversationStatement",
  "MoveRestoreOption",
  "MoveToDropIndexOption",
  "MultiPartIdentifier",
  "MultiPartIdentifierCallTarget",
  "NameFileDeclarationOption",
  "NamedTableReference",
  "NextValueForExpression",
  "NullIfExpression",
  "NullLiteral",
  "NullableConstraintDefinition",
  "NumericLiteral",
  "OdbcConvertSpecification",
  "OdbcFunctionCall",
  "OdbcLiteral",
  "OdbcQualifiedJoinTableReference",
  "OffsetClause",
  "OnFailureAuditOption",
  "OnOffAssemblyOption",
  "OnOffAtomicBlockOption",
  "OnOffAuditTargetOption",
  "OnOffDatabaseOption",
  "OnOffDialogOption",
  "OnOffFullTextCatalogOption",
  "OnOffOptionValue",
  "OnOffPrimaryConfigurationOption",
  "OnOffPrincipalOption",
  "OnOffRemoteServiceBindingOption",
  "OnOffSessionOption",
  "OnOffStatisticsOption",
  "OnlineIndexLowPriorityLockWaitOption",
  "OnlineIndexOption",
  "OpenCursorStatement",
  "OpenJsonTableReference",
  "OpenMasterKeyStatement",
  "OpenQueryTableReference",
  "OpenRowsetColumnDefinition",
  "OpenRowsetCosmos",
  "OpenRowsetCosmosOption",
  "OpenRowsetTableReference",
  "OpenSymmetricKeyStatement",
  "OpenXmlTableReference",
  "OperatorAuditOption",
  "OptimizeForOptimizerHint",
  "OptimizedLockingDatabaseOption",
  "OptimizerHint",
  "OrderBulkInsertOption",
  "OrderByClause",
  "OrderIndexOption",
  "OutputClause",
  "OutputIntoClause",
  "OverClause",
  "PageVerifyDatabaseOption",
  "ParameterizationDatabaseOption",
  "ParameterlessCall",
  "ParenthesisExpression",
  "ParseCall",
  "PartitionFunctionCall",
  "PartitionParameterType",
  "PartitionSpecifier",
  "PartnerDatabaseOption",
  "PasswordAlterPrincipalOption",
  "PasswordCreateLoginSource",
  "Permission",
  "PermissionSetAssemblyOption",
  "PivotedTableReference",
  "PortsEndpointProtocolOption",
  "PredicateSetStatement",
  "PredictTableReference",
  "PrimaryRoleReplicaOption",
  "PrincipalOption",
  "PrintStatement",
  "Privilege80",
  "PrivilegeSecurityElement80",
  "ProcedureOption",
  "ProcedureParameter",
  "ProcedureReference",
  "ProcedureReferenceName",
  "ProcessAffinityRange",
  "ProviderEncryptionSource",
  "ProviderKeyNameKeyOption",
  "QualifiedJoin",
  "QueryDerivedTable",
  "QueryParenthesisExpression",
  "QuerySpecification",
  "QueryStoreCapturePolicyOption",
  "QueryStoreDataFlushIntervalOption",
  "QueryStoreDatabaseOption",
  "QueryStoreDesiredStateOption",
  "QueryStoreIntervalLengthOption",
  "QueryStoreMaxPlansPerQueryOption",
  "QueryStoreMaxStorageSizeOption",
  "QueryStoreSizeCleanupPolicyOption",
  "QueryStoreTimeCleanupPolicyOption",
  "QueryStoreWaitStatsCaptureOption",
  "QueueDelayAuditOption",
  "QueueExecuteAsOption",
  "QueueOption",
  "QueueProcedureOption",
  "QueueStateOption",
  "QueueValueOption",
  "RaiseErrorLegacyStatement",
  "RaiseErrorStatement",
  "ReadOnlyForClause",
  "ReadTextStatement",
  "RealLiteral",
  "ReceiveStatement",
  "ReconfigureStatement",
  "RecoveryDatabaseOption",
  "RegexpLikePredicate",
  "RemoteDataArchiveAlterTableOption",
  "RemoteDataArchiveDatabaseOption",
  "RemoteDataArchiveDbCredentialSetting",
  "RemoteDataArchiveDbFederatedServiceAccountSetting",
  "RemoteDataArchiveDbServerSetting",
  "RemoteDataArchiveTableOption",
  "RenameAlterRoleAction",
  "RenameEntityStatement",
  "ResampleStatisticsOption",
  "ResourcePoolAffinitySpecification",
  "ResourcePoolParameter",
  "ResourcePoolStatement",
  "RestoreMasterKeyStatement",
  "RestoreOption",
  "RestoreServiceMasterKeyStatement",
  "RestoreStatement",
  "ResultColumnDefinition",
  "ResultSetDefinition",
  "ResultSetsExecuteOption",
  "RetentionDaysAuditTargetOption",
  "RetentionPeriodDefinition",
  "ReturnStatement",
  "RevertStatement",
  "RevokeStatement",
  "RevokeStatement80",
  "RightFunctionCall",
  "RolePayloadOption",
  "RollbackTransactionStatement",
  "RollupGroupingSpecification",
  "RouteOption",
  "RowValue",
  "SaveTransactionStatement",
  "ScalarExpressionDialogOption",
  "ScalarExpressionRestoreOption",
  "ScalarExpressionSequenceOption",
  "ScalarExpressionSnippet",
  "ScalarFunctionReturnType",
  "ScalarSubquery",
  "SchemaDeclarationItem",
  "SchemaDeclarationItemOpenjson",
  "SchemaObjectFunctionTableReference",
  "SchemaObjectName",
  "SchemaObjectNameOrValueExpression",
  "SchemaObjectNameSnippet",
  "SchemaObjectResultSetDefinition",
  "SchemaPayloadOption",
  "SearchPropertyListFullTextIndexOption",
  "SearchedCaseExpression",
  "SearchedWhenClause",
  "SecondaryRoleReplicaOption",
  "SecurityPolicyOption",
  "SecurityPredicateAction",
  "SecurityPrincipal",
  "SecurityTargetObject",
  "SecurityTargetObjectName",
  "SecurityUserClause80",
  "SelectFunctionReturnType",
  "SelectInsertSource",
  "SelectScalarExpression",
  "SelectSetVariable",
  "SelectStarExpression",
  "SelectStatement",
  "SelectStatementSnippet",
  "SelectiveXmlIndexPromotedPath",
  "SemanticIndexChunkOption",
  "SemanticIndexColumn",
  "SemanticTableReference",
  "SendStatement",
  "SensitivityClassificationOption",
  "SequenceOption",
  "ServiceContract",
  "SessionTimeoutPayloadOption",
  "SetCommandStatement",
  "SetErrorLevelStatement",
  "SetFipsFlaggerCommand",
  "SetIdentityInsertStatement",
  "SetOffsetsStatement",
  "SetRowCountStatement",
  "SetSearchPropertyListAlterFullTextIndexAction",
  "SetStatisticsStatement",
  "SetStopListAlterFullTextIndexAction",
  "SetTextSizeStatement",
  "SetTransactionIsolationLevelStatement",
  "SetUserStatement",
  "SetVariableStatement",
  "ShutdownStatement",
  "SimpleAlterFullTextIndexAction",
  "SimpleCaseExpression",
  "SimpleWhenClause",
  "SingleValueTypeCopyOption",
  "SizeFileDeclarationOption",
  "SoapMethod",
  "SourceDeclaration",
  "SpatialIndexRegularOption",
  "SqlCommandIdentifier",
  "SqlDataTypeReference",
  "StateAuditOption",
  "StatementList",
  "StatementListSnippet",
  "StatisticsOption",
  "StatisticsPartitionRange",
  "StopListFullTextIndexOption",
  "StopRestoreOption",
  "StringLiteral",
  "SubqueryComparisonPredicate",
  "SystemTimePeriodDefinition",
  "SystemVersioningTableOption",
  "TSEqualCall",
  "TSqlBatch",
  "TSqlFragmentSnippet",
  "TSqlScript",
  "TSqlStatementSnippet",
  "TableClusteredIndexType",
  "TableDataCompressionOption",
  "TableDefinition",
  "TableDistributionOption",
  "TableHashDistributionPolicy",
  "TableHint",
  "TableHintsOptimizerHint",
  "TableIndexOption",
  "TableNonClusteredIndexType",
  "TablePartitionOption",
  "TablePartitionOptionSpecifications",
  "TableReplicateDistributionPolicy",
  "TableRoundRobinDistributionPolicy",
  "TableSampleClause",
  "TableValuedFunctionReturnType",
  "TableXmlCompressionOption",
  "TargetDeclaration",
  "TargetRecoveryTimeDatabaseOption",
  "TemporalClause",
  "ThrowStatement",
  "TopRowFilter",
  "TriggerAction",
  "TriggerObject",
  "TriggerOption",
  "TruncateTableStatement",
  "TruncateTargetTableSwitchOption",
  "TryCastCall",
  "TryCatchStatement",
  "TryConvertCall",
  "TryParseCall",
  "UnaryExpression",
  "UniqueConstraintDefinition",
  "UnpivotedTableReference",
  "UnqualifiedJoin",
  "UpdateCall",
  "UpdateForClause",
  "UpdateMergeAction",
  "UpdateSpecification",
  "UpdateStatement",
  "UpdateStatisticsStatement",
  "UpdateTextStatement",
  "UseFederationStatement",
  "UseHintList",
  "UseStatement",
  "UserDataTypeReference",
  "UserDefinedTypeCallTarget",
  "UserDefinedTypePropertyAccess",
  "UserLoginOption",
  "UserRemoteServiceBindingOption",
  "ValuesInsertSource",
  "VariableMethodCallTableReference",
  "VariableReference",
  "VariableTableReference",
  "VariableValuePair",
  "VectorDataTypeReference",
  "VectorMetricIndexOption",
  "VectorSearchTableReference",
  "VectorTypeIndexOption",
  "ViewDistributionOption",
  "ViewForAppendOption",
  "ViewHashDistributionPolicy",
  "ViewOption",
  "ViewRoundRobinDistributionPolicy",
  "WaitAtLowPriorityOption",
  "WaitForStatement",
  "WhereClause",
  "WhileStatement",
  "WindowClause",
  "WindowDefinition",
  "WindowDelimiter",
  "WindowFrameClause",
  "WindowsCreateLoginSource",
  "WithCtesAndXmlNamespaces",
  "WithinGroupClause",
  "WitnessDatabaseOption",
  "WlmTimeLiteral",
  "WorkloadGroupImportanceParameter",
  "WorkloadGroupResourceParameter",
  "WriteTextStatement",
  "WsdlPayloadOption",
  "XmlCompressionOption",
  "XmlDataTypeReference",
  "XmlForClause",
  "XmlForClauseOption",
  "XmlNamespaces",
  "XmlNamespacesAliasElement",
  "XmlNamespacesDefaultElement"
];
var TSQL_STRUCTURAL_EDGE_NAMES = [
  "AbsentOrNullOnNull",
  "Account",
  "Action",
  "ActionClauses",
  "Actions",
  "AddFiles",
  "AdHocDataSource",
  "Affinity",
  "AffinitySpecification",
  "After",
  "AggregateFunctionIdentifier",
  "Algorithm",
  "Alias",
  "AlterTableDropTableElements",
  "ApiFormat",
  "ApplicationRoleOptions",
  "Arguments",
  "AsClause",
  "Assembly",
  "AssemblyName",
  "AttestedBy",
  "AuditName",
  "AuditTarget",
  "BaseIdentifier",
  "BaseType",
  "Batches",
  "Body",
  "Bottom",
  "Boundary",
  "BoundaryValue",
  "BoundaryValues",
  "BoundingBoxParameters",
  "BrokerInstanceSpecifier",
  "BrokerPriorityParameters",
  "BrokerService",
  "ByExpressions",
  "CallTarget",
  "CatalogAndFileGroup",
  "CatalogName",
  "CatchStatements",
  "Certificate",
  "CertificateOptions",
  "CertificateSource",
  "ChangeTrackingContext",
  "CheckCondition",
  "ChildIdentifier",
  "ChunkOptions",
  "ChunkSize",
  "ChunkType",
  "ClassifierFunction",
  "ClassifierName",
  "ClassName",
  "ClonePointInTime",
  "CloneSource",
  "ClusterByOption",
  "Collation",
  "Column",
  "ColumnDefinition",
  "ColumnDefinitions",
  "ColumnEncryptionKeyValues",
  "ColumnIdentifier",
  "ColumnName",
  "ColumnOrdinal",
  "Columns",
  "ColumnValues",
  "Commands",
  "CommonTableExpressions",
  "ComputeClauses",
  "ComputedColumnExpression",
  "ComputeFunctions",
  "ConstraintIdentifier",
  "ConstraintNames",
  "Constraints",
  "Containment",
  "Content",
  "ContractName",
  "Conversation",
  "ConversationHandles",
  "Cookie",
  "CopyOf",
  "Credential",
  "CredentialName",
  "CryptographicProviderName",
  "Cryptos",
  "CtasColumns",
  "Culture",
  "Cursor",
  "CursorDefinition",
  "DatabaseIdentifier",
  "DatabaseName",
  "Databases",
  "DatabaseSnapshot",
  "DataCompressionOption",
  "DataFiles",
  "DataModificationSpecification",
  "DataSource",
  "DataType",
  "DateValue",
  "Days",
  "Declarations",
  "DeclareTableVariableBody",
  "DecryptionMechanism",
  "DecryptionPassword",
  "DefaultConstraint",
  "DefaultValue",
  "Definition",
  "Definitions",
  "Delay",
  "DeleteLength",
  "DeleteSpecification",
  "Description",
  "Details",
  "Devices",
  "Dimension",
  "DirectoryName",
  "DistributionColumn",
  "DistributionColumns",
  "DistributionName",
  "DropClusteredConstraintOptions",
  "DropEventDeclarations",
  "DropFiles",
  "DropIndexClauses",
  "DropTargetDeclarations",
  "Duration",
  "Edge",
  "ElasticPoolName",
  "Element",
  "ElseExpression",
  "ElseStatement",
  "EnableChunkSetId",
  "EncryptingMechanisms",
  "Encryption",
  "EncryptionAlgorithm",
  "EncryptionPassword",
  "Encryptor",
  "EndTime",
  "EndTimeColumn",
  "EnvironmentVariables",
  "ErrorCode",
  "ErrorDescription",
  "ErrorNumber",
  "EscapeExpression",
  "EventDeclarationActionParameters",
  "EventDeclarationPredicateParameter",
  "EventDeclarations",
  "EventDeclarationSetParameters",
  "EventField",
  "EventTypeGroup",
  "EventTypeGroups",
  "EventValue",
  "ExecutableEntity",
  "Execute",
  "ExecuteAs",
  "ExecuteAsClause",
  "ExecuteContext",
  "ExecuteSpecification",
  "Expression",
  "ExpressionName",
  "Expressions",
  "ExternalDataSourceOptions",
  "ExternalFileFormatOptions",
  "ExternalLanguageFiles",
  "ExternalLibraryFiles",
  "ExternalModelName",
  "ExternalModelParameters",
  "ExternalName",
  "ExternalPoolName",
  "ExternalResourcePoolParameters",
  "ExternalStreamOptions",
  "ExternalTableOptions",
  "ExtractedElement",
  "FederationName",
  "FederationScheme",
  "FetchExpression",
  "FetchType",
  "FieldNumber",
  "File",
  "FileDeclaration",
  "FileDeclarations",
  "FileGroup",
  "FileGroupName",
  "FileGroups",
  "FileName",
  "Files",
  "FileStreamOn",
  "FileStreamOption",
  "FilterColumn",
  "FilterPredicate",
  "FirstExpression",
  "FirstParameter",
  "FirstQueryExpression",
  "FirstTableReference",
  "Flags",
  "FlushInterval",
  "ForClause",
  "ForJsonPaths",
  "ForName",
  "From",
  "FromClause",
  "FromNode",
  "FromNodeToNodeList",
  "FullTextIndexColumns",
  "FulltextStoplistOption",
  "FunctionCall",
  "FunctionName",
  "FunctionSetName",
  "GenericOptionKind",
  "GenericOptionState",
  "GridParameters",
  "Group",
  "GroupByClause",
  "GroupId",
  "GroupingSpecifications",
  "GroupName",
  "GrowthIncrement",
  "Guid",
  "Handle",
  "HavingClause",
  "Hints",
  "HistoryTable",
  "Id",
  "Identifier",
  "Identifiers",
  "Identity",
  "IdentityIncrement",
  "IdentityOptions",
  "IdentityPhrase",
  "IdentitySeed",
  "IgnoreRespectNulls",
  "IncludeColumns",
  "InColumns",
  "Increment",
  "Index",
  "Indexes",
  "IndexIdentifier",
  "IndexOptions",
  "IndexType",
  "IndexValue",
  "IndexValues",
  "InitiatorServiceName",
  "InitString",
  "Input",
  "InputExpression",
  "InputOptions",
  "InsertOffset",
  "InsertSource",
  "InsertSpecification",
  "InstanceSpec",
  "Into",
  "IntoTable",
  "IntoTableColumns",
  "IntoVariables",
  "IPv4PartOne",
  "IPv4PartTwo",
  "IPv6",
  "Items",
  "JobId",
  "Join",
  "JsonColumn",
  "JsonKeyName",
  "JsonOrderByClause",
  "JsonParameters",
  "JsonPath",
  "JsonValue",
  "Key",
  "KeyIndexName",
  "KeyName",
  "KeyOptions",
  "KeySource",
  "LabelName",
  "Labels",
  "Language",
  "LanguageTerm",
  "LedgerViewOption",
  "LeftExpression",
  "LeftNode",
  "Level",
  "LineNo",
  "LinkedServer",
  "Literal",
  "Literals",
  "LocalRuntimePath",
  "Location",
  "LocationValue",
  "LogicalDevice",
  "LogicalFileName",
  "LogOn",
  "LowerLimit",
  "LowPriorityLockWaitOption",
  "Mapping",
  "Mark",
  "MarkDescription",
  "MaskingFunction",
  "MatchedColumn",
  "MatchedKey",
  "MaxDuration",
  "MaxLength",
  "MaxPlansPerQuery",
  "MaxQdsSize",
  "MaxSize",
  "Member",
  "MemberName",
  "MergeSpecification",
  "Message",
  "MessageBody",
  "Messages",
  "MessageTypeName",
  "MethodName",
  "MethodSpecifier",
  "Metric",
  "MirrorToClauses",
  "ModelName",
  "ModelSubquery",
  "ModelVariable",
  "MoveTo",
  "MultiPartIdentifier",
  "MutatorFunction",
  "Name",
  "Namespace",
  "NewDatabaseName",
  "NewFileGroupName",
  "NewName",
  "NewValue",
  "Node",
  "Notifications",
  "Nullable",
  "NullableConstraint",
  "Number",
  "NumberRows",
  "Object",
  "ObjectName",
  "Objects",
  "OctetFour",
  "OctetOne",
  "OctetThree",
  "OctetTwo",
  "Offset",
  "OffsetClause",
  "OffsetExpression",
  "OffsetValue",
  "OldName",
  "OldPassword",
  "On",
  "OnFileGroup",
  "OnFileGroupOrPartitionScheme",
  "OnName",
  "Operation",
  "OperationTypeColumnName",
  "OperationTypeDescColumnName",
  "OptimizerHints",
  "Option",
  "OptionalParameters",
  "Options",
  "OptionValue",
  "OrderByClause",
  "OrderByElements",
  "OrderedColumns",
  "OrderHint",
  "OSFileName",
  "OuterNodeExpression",
  "OutputClause",
  "OutputIntoClause",
  "OutputOptions",
  "OverClause",
  "Overlap",
  "Owner",
  "Pairs",
  "Parameter",
  "Parameters",
  "ParameterType",
  "ParameterValue",
  "Partition",
  "PartitionColumn",
  "PartitionFunction",
  "PartitionOptionSpecs",
  "PartitionRanges",
  "Partitions",
  "PartitionSchemeColumns",
  "PartnerServer",
  "Parts",
  "PassPhrase",
  "Password",
  "PasswordOrSignature",
  "Path",
  "PathName",
  "Pattern",
  "PayloadOptions",
  "Permissions",
  "PhysicalDevice",
  "PivotColumn",
  "PlanHandle",
  "Platform",
  "PoolAffinityRanges",
  "PoolName",
  "Predicate",
  "PredicateExpression",
  "PredictTableReference",
  "PrimaryKeyColumns",
  "PrimaryKeyValues",
  "Principal",
  "PrincipalName",
  "Principals",
  "PrivateKeyPath",
  "Privileges",
  "ProcedureReference",
  "ProcedureVariable",
  "ProcessAffinityRanges",
  "PromotedPaths",
  "PromptPart1",
  "PromptPart2",
  "PropertyListName",
  "PropertyName",
  "ProtocolOptions",
  "Provider",
  "ProviderName",
  "ProviderString",
  "Qualifier",
  "Query",
  "QueryExpression",
  "Queue",
  "QueueName",
  "QueueOptions",
  "RecoveryTime",
  "RecursiveQuantifier",
  "ReferencedTableColumns",
  "ReferenceTableName",
  "RefWindowName",
  "RepeatSeed",
  "Replicas",
  "ResourcePoolParameters",
  "ResultColumnDefinitions",
  "RetentionPeriod",
  "ReturnType",
  "RightExpression",
  "RightNode",
  "RollbackAfter",
  "RouteOptions",
  "RowOffset",
  "RowPattern",
  "RowValues",
  "RunTime",
  "SampleNumber",
  "ScalarExpression",
  "Schema",
  "SchemaDeclarationItems",
  "SchemaIdentifier",
  "SchemaObject",
  "SchemaObjectName",
  "Scope",
  "SearchCondition",
  "SearchPropertyListOption",
  "SecondaryXmlIndexName",
  "SecondExpression",
  "SecondParameter",
  "SecondQueryExpression",
  "SecondTableReference",
  "Secret",
  "SecurityElement80",
  "SecurityPolicyOptions",
  "SecurityPredicateActions",
  "SecurityTargetObject",
  "SecurityUserClause80",
  "Seed",
  "Select",
  "SelectColumns",
  "SelectElements",
  "SelectStatement",
  "SequenceName",
  "SequenceNumberColumnName",
  "SequenceOptions",
  "Server",
  "ServerIdentifier",
  "ServerName",
  "Service",
  "ServiceContracts",
  "SessionOptions",
  "SetClauses",
  "Sets",
  "Settings",
  "ShardingColumn",
  "Signature",
  "SimilarTo",
  "SinceVersion",
  "SingleValue",
  "Size",
  "Source",
  "SourceColumn",
  "SourceDeclaration",
  "SourceKey",
  "SourceParameter",
  "SourcePartitionNumber",
  "SourceSearchPropertyList",
  "SourceStopListName",
  "SpatialColumnName",
  "SpatialIndexOptions",
  "SpecificationName",
  "SQLDataType",
  "StaleQueryThreshold",
  "StartTime",
  "StartTimeColumn",
  "State",
  "Statement",
  "StatementList",
  "Statements",
  "StatisticsOptions",
  "StatsIntervalLength",
  "StopListName",
  "StopListOption",
  "StopWord",
  "StorageOptions",
  "String",
  "Strings",
  "StringValue",
  "Style",
  "SubElements",
  "Suboptions",
  "Subquery",
  "SubscriptionId",
  "SystemTimePeriod",
  "Table",
  "TableAlias",
  "TableConstraints",
  "TableHints",
  "TableName",
  "TableReference",
  "TableReferences",
  "TableSampleClause",
  "Target",
  "TargetDeclarationParameters",
  "TargetDeclarations",
  "TargetObject",
  "TargetObjectName",
  "TargetOptions",
  "TargetPartitionNumber",
  "TargetServiceName",
  "TargetTable",
  "TemporalClause",
  "Termination",
  "Text",
  "TextId",
  "TextImageOn",
  "TextPointer",
  "TextSize",
  "ThenExpression",
  "ThenStatement",
  "ThirdExpression",
  "ThirdParameter",
  "Time",
  "Timeout",
  "Timestamp",
  "TimeString",
  "TimeZone",
  "To",
  "ToNode",
  "Top",
  "TopN",
  "TopRowFilter",
  "TransactionIdColumnName",
  "TriggerActions",
  "TriggerNames",
  "TriggerObject",
  "TrimOptions",
  "TryStatements",
  "TypeColumn",
  "TypeColumnName",
  "UpdateSpecification",
  "UpperLimit",
  "User",
  "UserId",
  "UserLoginOption",
  "UserName",
  "UserOptions",
  "Users",
  "UsingXmlIndexName",
  "Value",
  "ValueColumn",
  "ValueColumns",
  "ValueExpression",
  "Values",
  "VarArgs",
  "Variable",
  "VariableName",
  "VectorColumn",
  "VectorIndexOptions",
  "ViewName",
  "ViewOptions",
  "WhenClauses",
  "WhenExpression",
  "Where",
  "WhereClause",
  "WindowClause",
  "WindowDefinition",
  "WindowFrameClause",
  "WindowName",
  "WithColumns",
  "WithCtesAndXmlNamespaces",
  "WithinGroupClause",
  "WitnessServer",
  "WlmContext",
  "WlmLabel",
  "WorkloadGroupName",
  "WorkloadGroupParameters",
  "XmlColumn",
  "XmlCompressionOption",
  "XmlNamespaces",
  "XmlNamespacesElements",
  "XmlSchemaCollection",
  "XmlSchemaCollectionName",
  "XQueryDataType"
];
var TSQL_STRUCTURAL_EDGE_POLICIES = [
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "AddAlterFullTextIndexAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileName",
    "parentKind": "AddFileSpec"
  },
  {
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "AddFileSpec"
  },
  {
    "edgeKind": "single",
    "edgeName": "Member",
    "parentKind": "AddMemberAlterRoleAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Description",
    "parentKind": "AddSearchPropertyListAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Guid",
    "parentKind": "AddSearchPropertyListAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Id",
    "parentKind": "AddSearchPropertyListAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "PropertyName",
    "parentKind": "AddSearchPropertyListAction"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "AddSensitivityClassificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AddSensitivityClassificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Cryptos",
    "parentKind": "AddSignatureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Element",
    "parentKind": "AddSignatureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "InitString",
    "parentKind": "AdHocDataSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "ProviderName",
    "parentKind": "AdHocDataSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "AdHocTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataSource",
    "parentKind": "AdHocTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Object",
    "parentKind": "AdHocTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIAnalyzeSentimentFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AIAnalyzeSentimentFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIClassifyFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AIClassifyFunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Labels",
    "parentKind": "AIClassifyFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIExtractFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AIExtractFunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Labels",
    "parentKind": "AIExtractFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIFixGrammarFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AIFixGrammarFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "AIGenerateChunksTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "ChunkType",
    "parentKind": "AIGenerateChunksTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Source",
    "parentKind": "AIGenerateChunksTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIGenerateEmbeddingsFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AIGenerateEmbeddingsFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "ModelName",
    "parentKind": "AIGenerateEmbeddingsFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionalParameters",
    "parentKind": "AIGenerateEmbeddingsFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "ChunkSize",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "ChunkType",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "EnableChunkSetId",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Overlap",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Source",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIGenerateResponseFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "PromptPart1",
    "parentKind": "AIGenerateResponseFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "PromptPart2",
    "parentKind": "AIGenerateResponseFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AISummarizeFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AISummarizeFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AITranslateFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AITranslateFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Language",
    "parentKind": "AITranslateFunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "ApplicationRoleOptions",
    "parentKind": "AlterApplicationRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterApplicationRoleStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "AddFiles",
    "parentKind": "AlterAssemblyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "DropFiles",
    "parentKind": "AlterAssemblyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterAssemblyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterAssemblyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "AlterAssemblyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AttestedBy",
    "parentKind": "AlterAsymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DecryptionPassword",
    "parentKind": "AlterAsymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "EncryptionPassword",
    "parentKind": "AlterAsymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterAsymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PrincipalName",
    "parentKind": "AlterAuthorizationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecurityTargetObject",
    "parentKind": "AlterAuthorizationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterAvailabilityGroupFailoverAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "AlterAvailabilityGroupFailoverOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterAvailabilityGroupStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Databases",
    "parentKind": "AlterAvailabilityGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterAvailabilityGroupStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterAvailabilityGroupStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Replicas",
    "parentKind": "AlterAvailabilityGroupStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "BrokerPriorityParameters",
    "parentKind": "AlterBrokerPriorityStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterBrokerPriorityStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AttestedBy",
    "parentKind": "AlterCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DecryptionPassword",
    "parentKind": "AlterCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "EncryptionPassword",
    "parentKind": "AlterCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PrivateKeyPath",
    "parentKind": "AlterCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "AlterColumnAlterFullTextIndexAction"
  },
  {
    "edgeKind": "array",
    "edgeName": "ColumnEncryptionKeyValues",
    "parentKind": "AlterColumnEncryptionKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterColumnEncryptionKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identity",
    "parentKind": "AlterCredentialStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterCredentialStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Secret",
    "parentKind": "AlterCredentialStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "AlterCryptographicProviderStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterCryptographicProviderStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseAddFileGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "AlterDatabaseAddFileGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseAddFileStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "FileDeclarations",
    "parentKind": "AlterDatabaseAddFileStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "AlterDatabaseAddFileStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "AlterDatabaseAuditSpecificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parts",
    "parentKind": "AlterDatabaseAuditSpecificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SpecificationName",
    "parentKind": "AlterDatabaseAuditSpecificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AlterDatabaseCollateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseCollateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Encryptor",
    "parentKind": "AlterDatabaseEncryptionKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseModifyFileGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "AlterDatabaseModifyFileGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "NewFileGroupName",
    "parentKind": "AlterDatabaseModifyFileGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Termination",
    "parentKind": "AlterDatabaseModifyFileGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseModifyFileStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileDeclaration",
    "parentKind": "AlterDatabaseModifyFileStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseModifyNameStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "NewDatabaseName",
    "parentKind": "AlterDatabaseModifyNameStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabasePerformCutoverStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseRebuildLogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileDeclaration",
    "parentKind": "AlterDatabaseRebuildLogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseRemoveFileGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "AlterDatabaseRemoveFileGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseRemoveFileStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "AlterDatabaseRemoveFileStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Option",
    "parentKind": "AlterDatabaseScopedConfigurationClearStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Option",
    "parentKind": "AlterDatabaseScopedConfigurationSetStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseSetStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterDatabaseSetStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Termination",
    "parentKind": "AlterDatabaseSetStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "RollbackAfter",
    "parentKind": "AlterDatabaseTermination"
  },
  {
    "edgeKind": "single",
    "edgeName": "Affinity",
    "parentKind": "AlterEndpointStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterEndpointStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "PayloadOptions",
    "parentKind": "AlterEndpointStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ProtocolOptions",
    "parentKind": "AlterEndpointStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "DropEventDeclarations",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "DropTargetDeclarations",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "EventDeclarations",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SessionOptions",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "TargetDeclarations",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalDataSourceOptions",
    "parentKind": "AlterExternalDataSourceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Location",
    "parentKind": "AlterExternalDataSourceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalDataSourceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExternalName",
    "parentKind": "AlterExternalFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "AlterExternalFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "AlterExternalFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalLanguageFiles",
    "parentKind": "AlterExternalLanguageStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalLanguageStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Operation",
    "parentKind": "AlterExternalLanguageStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "AlterExternalLanguageStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Platform",
    "parentKind": "AlterExternalLanguageStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalLibraryFiles",
    "parentKind": "AlterExternalLibraryStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Language",
    "parentKind": "AlterExternalLibraryStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalLibraryStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "AlterExternalLibraryStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ApiFormat",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Credential",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "LocalRuntimePath",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Location",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ModelName",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Parameters",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalResourcePoolParameters",
    "parentKind": "AlterExternalResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Boundary",
    "parentKind": "AlterFederationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DistributionName",
    "parentKind": "AlterFederationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterFederationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterFullTextCatalogStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterFullTextCatalogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterFullTextIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "AlterFullTextIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterFullTextStopListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterFullTextStopListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OrderHint",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "AlterIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "AlterIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Partition",
    "parentKind": "AlterIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "PromotedPaths",
    "parentKind": "AlterIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "XmlNamespaces",
    "parentKind": "AlterIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "CredentialName",
    "parentKind": "AlterLoginAddDropCredentialStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterLoginAddDropCredentialStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterLoginEnableDisableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterLoginOptionsStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterLoginOptionsStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "AlterMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterMessageTypeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "XmlSchemaCollectionName",
    "parentKind": "AlterMessageTypeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Boundary",
    "parentKind": "AlterPartitionFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterPartitionFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "AlterPartitionSchemeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterPartitionSchemeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "AlterProcedureStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterProcedureStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "AlterProcedureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ProcedureReference",
    "parentKind": "AlterProcedureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "AlterProcedureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterQueueStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "QueueOptions",
    "parentKind": "AlterQueueStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterRemoteServiceBindingStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterRemoteServiceBindingStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ClassifierFunction",
    "parentKind": "AlterResourceGovernorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterResourcePoolStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ResourcePoolParameters",
    "parentKind": "AlterResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterRouteStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "RouteOptions",
    "parentKind": "AlterRouteStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterSchemaStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ObjectName",
    "parentKind": "AlterSchemaStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterSearchPropertyListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterSearchPropertyListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterSecurityPolicyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SecurityPolicyOptions",
    "parentKind": "AlterSecurityPolicyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SecurityPredicateActions",
    "parentKind": "AlterSecurityPolicyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterSequenceStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SequenceOptions",
    "parentKind": "AlterSequenceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "AlterServerAuditSpecificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parts",
    "parentKind": "AlterServerAuditSpecificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SpecificationName",
    "parentKind": "AlterServerAuditSpecificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "AlterServerAuditStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AuditTarget",
    "parentKind": "AlterServerAuditStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "NewName",
    "parentKind": "AlterServerAuditStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerAuditStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PredicateExpression",
    "parentKind": "AlterServerAuditStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationBufferPoolExtensionContainerOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Suboptions",
    "parentKind": "AlterServerConfigurationBufferPoolExtensionContainerOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationBufferPoolExtensionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationBufferPoolExtensionSizeOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationDiagnosticsLogMaxSizeOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationDiagnosticsLogOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationExternalAuthenticationContainerOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Suboptions",
    "parentKind": "AlterServerConfigurationExternalAuthenticationContainerOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationExternalAuthenticationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationFailoverClusterPropertyOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationHadrClusterOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetBufferPoolExtensionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetDiagnosticsLogStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetExternalAuthenticationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetFailoverClusterPropertyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetHadrClusterStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetSoftNumaStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationSoftNumaOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "ProcessAffinityRanges",
    "parentKind": "AlterServerConfigurationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterServerRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterServerRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Account",
    "parentKind": "AlterServiceMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "AlterServiceMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterServiceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "QueueName",
    "parentKind": "AlterServiceStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ServiceContracts",
    "parentKind": "AlterServiceStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "EncryptingMechanisms",
    "parentKind": "AlterSymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterSymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ClusterByOption",
    "parentKind": "AlterTableAddClusterByStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableAddClusterByStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Definition",
    "parentKind": "AlterTableAddTableElementStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableAddTableElementStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnIdentifier",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Encryption",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MaskingFunction",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StorageOptions",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "IndexIdentifier",
    "parentKind": "AlterTableAlterIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "AlterTableAlterIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableAlterIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "BoundaryValue",
    "parentKind": "AlterTableAlterPartitionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableAlterPartitionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableChangeTrackingModificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ConstraintNames",
    "parentKind": "AlterTableConstraintModificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableConstraintModificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "DropClusteredConstraintOptions",
    "parentKind": "AlterTableDropTableElement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterTableDropTableElement"
  },
  {
    "edgeKind": "array",
    "edgeName": "AlterTableDropTableElements",
    "parentKind": "AlterTableDropTableElementStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableDropTableElementStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableFileTableNamespaceStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "AlterTableRebuildStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Partition",
    "parentKind": "AlterTableRebuildStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableRebuildStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterTableSetStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableSetStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterTableSwitchStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableSwitchStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SourcePartitionNumber",
    "parentKind": "AlterTableSwitchStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TargetPartitionNumber",
    "parentKind": "AlterTableSwitchStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TargetTable",
    "parentKind": "AlterTableSwitchStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableTriggerModificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "TriggerNames",
    "parentKind": "AlterTableTriggerModificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "TriggerActions",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TriggerObject",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterUserStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "UserOptions",
    "parentKind": "AlterUserStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "AlterViewStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterViewStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "AlterViewStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ViewOptions",
    "parentKind": "AlterViewStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExternalPoolName",
    "parentKind": "AlterWorkloadGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterWorkloadGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PoolName",
    "parentKind": "AlterWorkloadGroupStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "WorkloadGroupParameters",
    "parentKind": "AlterWorkloadGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "AlterXmlSchemaCollectionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterXmlSchemaCollectionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ApplicationRoleOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Assembly",
    "parentKind": "AssemblyEncryptionSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "ClassName",
    "parentKind": "AssemblyName"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AssemblyName"
  },
  {
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "AssignmentSetClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "NewValue",
    "parentKind": "AssignmentSetClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "AssignmentSetClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Credential",
    "parentKind": "AsymmetricKeyCreateLoginSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "Key",
    "parentKind": "AsymmetricKeyCreateLoginSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AtTimeZoneCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "DateValue",
    "parentKind": "AtTimeZoneCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "TimeZone",
    "parentKind": "AtTimeZoneCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Actions",
    "parentKind": "AuditActionSpecification"
  },
  {
    "edgeKind": "array",
    "edgeName": "Principals",
    "parentKind": "AuditActionSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "TargetObject",
    "parentKind": "AuditActionSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "Guid",
    "parentKind": "AuditGuidAuditOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Details",
    "parentKind": "AuditSpecificationPart"
  },
  {
    "edgeKind": "array",
    "edgeName": "TargetOptions",
    "parentKind": "AuditTarget"
  },
  {
    "edgeKind": "single",
    "edgeName": "Certificate",
    "parentKind": "AuthenticationPayloadOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AutomaticTuningDatabaseOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AvailabilityReplica"
  },
  {
    "edgeKind": "single",
    "edgeName": "ServerName",
    "parentKind": "AvailabilityReplica"
  },
  {
    "edgeKind": "single",
    "edgeName": "DecryptionPassword",
    "parentKind": "BackupCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "EncryptionPassword",
    "parentKind": "BackupCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "BackupCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "BackupCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PrivateKeyPath",
    "parentKind": "BackupCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "BackupDatabaseStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Devices",
    "parentKind": "BackupDatabaseStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Files",
    "parentKind": "BackupDatabaseStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "MirrorToClauses",
    "parentKind": "BackupDatabaseStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BackupDatabaseStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Encryptor",
    "parentKind": "BackupEncryptionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "BackupEncryptionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "BackupMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "BackupMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "BackupOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Items",
    "parentKind": "BackupRestoreFileInfo"
  },
  {
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "BackupServiceMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "BackupServiceMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "BackupTransactionLogStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Devices",
    "parentKind": "BackupTransactionLogStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "MirrorToClauses",
    "parentKind": "BackupTransactionLogStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BackupTransactionLogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Index",
    "parentKind": "BackwardsCompatibleDropIndexClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Handle",
    "parentKind": "BeginConversationTimerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Timeout",
    "parentKind": "BeginConversationTimerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ContractName",
    "parentKind": "BeginDialogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Handle",
    "parentKind": "BeginDialogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "InitiatorServiceName",
    "parentKind": "BeginDialogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "InstanceSpec",
    "parentKind": "BeginDialogStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BeginDialogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TargetServiceName",
    "parentKind": "BeginDialogStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BeginEndAtomicBlockStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "BeginEndAtomicBlockStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "BeginEndBlockStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MarkDescription",
    "parentKind": "BeginTransactionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "BeginTransactionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "BinaryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "BinaryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "BinaryLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstQueryExpression",
    "parentKind": "BinaryQueryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ForClause",
    "parentKind": "BinaryQueryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "OffsetClause",
    "parentKind": "BinaryQueryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "BinaryQueryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondQueryExpression",
    "parentKind": "BinaryQueryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "BooleanBinaryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "BooleanBinaryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "BooleanComparisonExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "BooleanComparisonExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "BooleanIsNullExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "BooleanNotExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "BooleanParenthesisExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "BooleanTernaryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "BooleanTernaryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ThirdExpression",
    "parentKind": "BooleanTernaryExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "BoundingBoxParameter"
  },
  {
    "edgeKind": "array",
    "edgeName": "BoundingBoxParameters",
    "parentKind": "BoundingBoxSpatialIndexOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "BrokerPriorityParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "BuiltInFunctionTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "BuiltInFunctionTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "BuiltInFunctionTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "From",
    "parentKind": "BulkInsertStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BulkInsertStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "BulkInsertStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "BulkOpenRowset"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "BulkOpenRowset"
  },
  {
    "edgeKind": "array",
    "edgeName": "DataFiles",
    "parentKind": "BulkOpenRowset"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BulkOpenRowset"
  },
  {
    "edgeKind": "array",
    "edgeName": "WithColumns",
    "parentKind": "BulkOpenRowset"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "CastCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "CastCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "CastCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "CellsPerObjectSpatialIndexOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Certificate",
    "parentKind": "CertificateCreateLoginSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "Credential",
    "parentKind": "CertificateCreateLoginSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "CertificateOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "RetentionPeriod",
    "parentKind": "ChangeRetentionChangeTrackingOptionDetail"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "ChangeTableChangesTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "ChangeTableChangesTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "SinceVersion",
    "parentKind": "ChangeTableChangesTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "ChangeTableChangesTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "ChangeTableVersionTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "ChangeTableVersionTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "PrimaryKeyColumns",
    "parentKind": "ChangeTableVersionTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "PrimaryKeyValues",
    "parentKind": "ChangeTableVersionTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "ChangeTableVersionTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Details",
    "parentKind": "ChangeTrackingDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "CheckCondition",
    "parentKind": "CheckConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "CheckConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Duration",
    "parentKind": "CheckpointStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "BaseIdentifier",
    "parentKind": "ChildObjectName"
  },
  {
    "edgeKind": "single",
    "edgeName": "ChildIdentifier",
    "parentKind": "ChildObjectName"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseIdentifier",
    "parentKind": "ChildObjectName"
  },
  {
    "edgeKind": "array",
    "edgeName": "Identifiers",
    "parentKind": "ChildObjectName"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaIdentifier",
    "parentKind": "ChildObjectName"
  },
  {
    "edgeKind": "single",
    "edgeName": "ServerIdentifier",
    "parentKind": "ChildObjectName"
  },
  {
    "edgeKind": "single",
    "edgeName": "Time",
    "parentKind": "ClassifierEndTimeOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "MemberName",
    "parentKind": "ClassifierMemberNameOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Time",
    "parentKind": "ClassifierStartTimeOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "WlmContext",
    "parentKind": "ClassifierWlmContextOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "WlmLabel",
    "parentKind": "ClassifierWlmLabelOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "WorkloadGroupName",
    "parentKind": "ClassifierWorkloadGroupOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Cursor",
    "parentKind": "CloseCursorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CloseSymmetricKeyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "ClusterByTableOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "CoalesceExpression"
  },
  {
    "edgeKind": "array",
    "edgeName": "Expressions",
    "parentKind": "CoalesceExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ColumnDefinitionBase"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnIdentifier",
    "parentKind": "ColumnDefinitionBase"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ColumnDefinitionBase"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnIdentifier",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "ComputedColumnExpression",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "Constraints",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "DefaultConstraint",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Encryption",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "IdentityOptions",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Index",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "MaskingFunction",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "StorageOptions",
    "parentKind": "ColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Algorithm",
    "parentKind": "ColumnEncryptionAlgorithmNameParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "EncryptionAlgorithm",
    "parentKind": "ColumnEncryptionAlgorithmParameter"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "ColumnEncryptionDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ColumnEncryptionKeyNameParameter"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "ColumnEncryptionKeyValue"
  },
  {
    "edgeKind": "single",
    "edgeName": "Signature",
    "parentKind": "ColumnMasterKeyEnclaveComputationsParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ColumnMasterKeyNameParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Path",
    "parentKind": "ColumnMasterKeyPathParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ColumnMasterKeyStoreProviderNameParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ColumnReferenceExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "MultiPartIdentifier",
    "parentKind": "ColumnReferenceExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "ColumnWithSortOrder"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CommitTransactionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CommonTableExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExpressionName",
    "parentKind": "CommonTableExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "CommonTableExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "CommonTableExpression"
  },
  {
    "edgeKind": "array",
    "edgeName": "Items",
    "parentKind": "CompositeGroupingSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "CompressionDelayIndexOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "From",
    "parentKind": "CompressionPartitionRange"
  },
  {
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "CompressionPartitionRange"
  },
  {
    "edgeKind": "array",
    "edgeName": "ByExpressions",
    "parentKind": "ComputeClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "ComputeFunctions",
    "parentKind": "ComputeClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ComputeFunction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ContractMessage"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ConvertCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ConvertCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "ConvertCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Style",
    "parentKind": "ConvertCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnName",
    "parentKind": "CopyColumnOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "DefaultValue",
    "parentKind": "CopyColumnOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "FieldNumber",
    "parentKind": "CopyColumnOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identity",
    "parentKind": "CopyCredentialOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Secret",
    "parentKind": "CopyCredentialOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "CopyOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "From",
    "parentKind": "CopyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Into",
    "parentKind": "CopyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "CopyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CopyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AssemblyName",
    "parentKind": "CreateAggregateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateAggregateStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateAggregateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "CreateAggregateStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ApplicationRoleOptions",
    "parentKind": "CreateApplicationRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateApplicationRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateAssemblyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateAssemblyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateAssemblyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateAssemblyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "KeySource",
    "parentKind": "CreateAsymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateAsymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateAsymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "CreateAsymmetricKeyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Databases",
    "parentKind": "CreateAvailabilityGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateAvailabilityGroupStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateAvailabilityGroupStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Replicas",
    "parentKind": "CreateAvailabilityGroupStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "BrokerPriorityParameters",
    "parentKind": "CreateBrokerPriorityStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateBrokerPriorityStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "CertificateOptions",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "CertificateSource",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DecryptionPassword",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "EncryptionPassword",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PrivateKeyPath",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ColumnEncryptionKeyValues",
    "parentKind": "CreateColumnEncryptionKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateColumnEncryptionKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateColumnMasterKeyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateColumnMasterKeyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FilterPredicate",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "OrderedColumns",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Messages",
    "parentKind": "CreateContractStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateContractStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateContractStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "CryptographicProviderName",
    "parentKind": "CreateCredentialStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identity",
    "parentKind": "CreateCredentialStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateCredentialStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Secret",
    "parentKind": "CreateCredentialStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "CreateCryptographicProviderStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateCryptographicProviderStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "CreateDatabaseAuditSpecificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parts",
    "parentKind": "CreateDatabaseAuditSpecificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SpecificationName",
    "parentKind": "CreateDatabaseAuditSpecificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Encryptor",
    "parentKind": "CreateDatabaseEncryptionKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Containment",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "CopyOf",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseSnapshot",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "FileGroups",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "LogOn",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "CreateDefaultStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateDefaultStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Affinity",
    "parentKind": "CreateEndpointStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateEndpointStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateEndpointStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "PayloadOptions",
    "parentKind": "CreateEndpointStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ProtocolOptions",
    "parentKind": "CreateEndpointStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "BrokerInstanceSpecifier",
    "parentKind": "CreateEventNotificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "BrokerService",
    "parentKind": "CreateEventNotificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "EventTypeGroups",
    "parentKind": "CreateEventNotificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateEventNotificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Scope",
    "parentKind": "CreateEventNotificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "EventDeclarations",
    "parentKind": "CreateEventSessionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateEventSessionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SessionOptions",
    "parentKind": "CreateEventSessionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "TargetDeclarations",
    "parentKind": "CreateEventSessionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalDataSourceOptions",
    "parentKind": "CreateExternalDataSourceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Location",
    "parentKind": "CreateExternalDataSourceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalDataSourceStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalFileFormatOptions",
    "parentKind": "CreateExternalFileFormatStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalFileFormatStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExternalName",
    "parentKind": "CreateExternalFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateExternalFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "CreateExternalFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalLanguageFiles",
    "parentKind": "CreateExternalLanguageStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalLanguageStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateExternalLanguageStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalLibraryFiles",
    "parentKind": "CreateExternalLibraryStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Language",
    "parentKind": "CreateExternalLibraryStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalLibraryStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateExternalLibraryStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ApiFormat",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Credential",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "LocalRuntimePath",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Location",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ModelName",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Parameters",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalResourcePoolParameters",
    "parentKind": "CreateExternalResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalStreamingJobStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Statement",
    "parentKind": "CreateExternalStreamingJobStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalStreamOptions",
    "parentKind": "CreateExternalStreamStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "InputOptions",
    "parentKind": "CreateExternalStreamStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Location",
    "parentKind": "CreateExternalStreamStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalStreamStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OutputOptions",
    "parentKind": "CreateExternalStreamStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ColumnDefinitions",
    "parentKind": "CreateExternalTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataSource",
    "parentKind": "CreateExternalTableStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalTableOptions",
    "parentKind": "CreateExternalTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "CreateExternalTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "CreateExternalTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "CreateFederationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DistributionName",
    "parentKind": "CreateFederationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateFederationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "CreateFullTextCatalogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateFullTextCatalogStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateFullTextCatalogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateFullTextCatalogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Path",
    "parentKind": "CreateFullTextCatalogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "CatalogAndFileGroup",
    "parentKind": "CreateFullTextIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "FullTextIndexColumns",
    "parentKind": "CreateFullTextIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "KeyIndexName",
    "parentKind": "CreateFullTextIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateFullTextIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateFullTextIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "CreateFullTextStopListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateFullTextStopListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateFullTextStopListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SourceStopListName",
    "parentKind": "CreateFullTextStopListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OrderHint",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileStreamOn",
    "parentKind": "CreateIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FilterPredicate",
    "parentKind": "CreateIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IncludeColumns",
    "parentKind": "CreateIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ForJsonPaths",
    "parentKind": "CreateJsonIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateJsonIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "JsonColumn",
    "parentKind": "CreateJsonIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateJsonIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateJsonIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateLoginStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Source",
    "parentKind": "CreateLoginStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "CreateMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateMessageTypeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateMessageTypeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "XmlSchemaCollectionName",
    "parentKind": "CreateMessageTypeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExternalName",
    "parentKind": "CreateOrAlterExternalFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateOrAlterExternalFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateOrAlterExternalFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "CreateOrAlterExternalFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OrderHint",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateOrAlterProcedureStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateOrAlterProcedureStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateOrAlterProcedureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ProcedureReference",
    "parentKind": "CreateOrAlterProcedureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateOrAlterProcedureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "TriggerActions",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TriggerObject",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateOrAlterViewStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "CreateOrAlterViewStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "CreateOrAlterViewStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ViewOptions",
    "parentKind": "CreateOrAlterViewStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "BoundaryValues",
    "parentKind": "CreatePartitionFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreatePartitionFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ParameterType",
    "parentKind": "CreatePartitionFunctionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "FileGroups",
    "parentKind": "CreatePartitionSchemeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreatePartitionSchemeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PartitionFunction",
    "parentKind": "CreatePartitionSchemeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateProcedureStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateProcedureStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateProcedureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ProcedureReference",
    "parentKind": "CreateProcedureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateProcedureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateQueueStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnFileGroup",
    "parentKind": "CreateQueueStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "QueueOptions",
    "parentKind": "CreateQueueStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateRemoteServiceBindingStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateRemoteServiceBindingStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateRemoteServiceBindingStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Service",
    "parentKind": "CreateRemoteServiceBindingStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateResourcePoolStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ResourcePoolParameters",
    "parentKind": "CreateResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateRouteStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateRouteStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "RouteOptions",
    "parentKind": "CreateRouteStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "CreateRuleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateRuleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSchemaStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateSchemaStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateSchemaStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSearchPropertyListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateSearchPropertyListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SourceSearchPropertyList",
    "parentKind": "CreateSearchPropertyListStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSecurityPolicyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SecurityPolicyOptions",
    "parentKind": "CreateSecurityPolicyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SecurityPredicateActions",
    "parentKind": "CreateSecurityPolicyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PathName",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "PromotedPaths",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "UsingXmlIndexName",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "XmlColumn",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "XmlNamespaces",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExternalModelName",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExternalModelParameters",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FulltextStoplistOption",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "VectorIndexOptions",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSequenceStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SequenceOptions",
    "parentKind": "CreateSequenceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "CreateServerAuditSpecificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parts",
    "parentKind": "CreateServerAuditSpecificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SpecificationName",
    "parentKind": "CreateServerAuditSpecificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "CreateServerAuditStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AuditTarget",
    "parentKind": "CreateServerAuditStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateServerAuditStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PredicateExpression",
    "parentKind": "CreateServerAuditStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateServerRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateServerRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateServiceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateServiceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "QueueName",
    "parentKind": "CreateServiceStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ServiceContracts",
    "parentKind": "CreateServiceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSpatialIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Object",
    "parentKind": "CreateSpatialIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnFileGroup",
    "parentKind": "CreateSpatialIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SpatialColumnName",
    "parentKind": "CreateSpatialIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SpatialIndexOptions",
    "parentKind": "CreateSpatialIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateStatisticsStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FilterPredicate",
    "parentKind": "CreateStatisticsStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateStatisticsStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateStatisticsStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "StatisticsOptions",
    "parentKind": "CreateStatisticsStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "EncryptingMechanisms",
    "parentKind": "CreateSymmetricKeyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "KeyOptions",
    "parentKind": "CreateSymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateSymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Provider",
    "parentKind": "CreateSymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ForName",
    "parentKind": "CreateSynonymStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSynonymStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ClonePointInTime",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "CloneSource",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "CtasColumns",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Definition",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FederationScheme",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileStreamOn",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TextImageOn",
    "parentKind": "CreateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "TriggerActions",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TriggerObject",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Definition",
    "parentKind": "CreateTypeTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateTypeTableStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateTypeTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "CreateTypeUddtStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateTypeUddtStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "NullableConstraint",
    "parentKind": "CreateTypeUddtStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AssemblyName",
    "parentKind": "CreateTypeUdtStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateTypeUdtStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateUserStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "UserLoginOption",
    "parentKind": "CreateUserStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "UserOptions",
    "parentKind": "CreateUserStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateVectorIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateVectorIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateVectorIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateVectorIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "VectorColumn",
    "parentKind": "CreateVectorIndexStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateViewStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "CreateViewStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "CreateViewStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ViewOptions",
    "parentKind": "CreateViewStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ClassifierName",
    "parentKind": "CreateWorkloadClassifierStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateWorkloadClassifierStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExternalPoolName",
    "parentKind": "CreateWorkloadGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateWorkloadGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PoolName",
    "parentKind": "CreateWorkloadGroupStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "WorkloadGroupParameters",
    "parentKind": "CreateWorkloadGroupStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondaryXmlIndexName",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "XmlColumn",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "CreateXmlSchemaCollectionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateXmlSchemaCollectionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "CryptoMechanism"
  },
  {
    "edgeKind": "single",
    "edgeName": "PasswordOrSignature",
    "parentKind": "CryptoMechanism"
  },
  {
    "edgeKind": "array",
    "edgeName": "Arguments",
    "parentKind": "CubeGroupingSpecification"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CursorDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Select",
    "parentKind": "CursorDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CursorId"
  },
  {
    "edgeKind": "single",
    "edgeName": "PlanHandle",
    "parentKind": "DatabaseConfigurationClearOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "GenericOptionKind",
    "parentKind": "DatabaseConfigurationSetOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "PartitionRanges",
    "parentKind": "DataCompressionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "DataModificationTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "DataModificationTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataModificationSpecification",
    "parentKind": "DataModificationTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "FilterColumn",
    "parentKind": "DataRetentionTableOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "RetentionPeriod",
    "parentKind": "DataRetentionTableOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "DataTypeSequenceOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "DbccNamedLiteral"
  },
  {
    "edgeKind": "array",
    "edgeName": "Literals",
    "parentKind": "DbccStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "DbccStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Cursor",
    "parentKind": "DeallocateCursorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "CursorDefinition",
    "parentKind": "DeclareCursorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DeclareCursorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Definition",
    "parentKind": "DeclareTableVariableBody"
  },
  {
    "edgeKind": "single",
    "edgeName": "VariableName",
    "parentKind": "DeclareTableVariableBody"
  },
  {
    "edgeKind": "single",
    "edgeName": "Body",
    "parentKind": "DeclareTableVariableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "DeclareVariableElement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Nullable",
    "parentKind": "DeclareVariableElement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "DeclareVariableElement"
  },
  {
    "edgeKind": "single",
    "edgeName": "VariableName",
    "parentKind": "DeclareVariableElement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Declarations",
    "parentKind": "DeclareVariableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "DefaultConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "DefaultConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "DefaultConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "DefaultLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "FromClause",
    "parentKind": "DeleteSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "OutputClause",
    "parentKind": "DeleteSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "OutputIntoClause",
    "parentKind": "DeleteSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "DeleteSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "TopRowFilter",
    "parentKind": "DeleteSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "WhereClause",
    "parentKind": "DeleteSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "DeleteSpecification",
    "parentKind": "DeleteStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "DeleteStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "DeleteStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecurityElement80",
    "parentKind": "DenyStatement80"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecurityUserClause80",
    "parentKind": "DenyStatement80"
  },
  {
    "edgeKind": "single",
    "edgeName": "AsClause",
    "parentKind": "DenyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Permissions",
    "parentKind": "DenyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Principals",
    "parentKind": "DenyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecurityTargetObject",
    "parentKind": "DenyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "LogicalDevice",
    "parentKind": "DeviceInfo"
  },
  {
    "edgeKind": "single",
    "edgeName": "PhysicalDevice",
    "parentKind": "DeviceInfo"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "DiskStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "DiskStatementOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "DistinctPredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "DistinctPredicate"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropAggregateStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "DropAlterFullTextIndexAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropApplicationRoleStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropAssemblyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropAsymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropAvailabilityGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropBrokerPriorityStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropCertificateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "DropClusteredConstraintMoveOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "DropClusteredConstraintValueOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "DropClusteredConstraintWaitAtLowPriorityLockOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropColumnEncryptionKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropColumnMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropContractStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropCredentialStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropCryptographicProviderStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropDatabaseAuditSpecificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Databases",
    "parentKind": "DropDatabaseStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropDefaultStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropEndpointStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Notifications",
    "parentKind": "DropEventNotificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Scope",
    "parentKind": "DropEventNotificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropEventSessionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalDataSourceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalFileFormatStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalLanguageStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "DropExternalLanguageStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalLibraryStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "DropExternalLibraryStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalModelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalStreamingJobStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalStreamStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropExternalTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropFederationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropFullTextCatalogStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableName",
    "parentKind": "DropFullTextIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropFullTextStopListStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Index",
    "parentKind": "DropIndexClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Object",
    "parentKind": "DropIndexClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "DropIndexClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "DropIndexClauses",
    "parentKind": "DropIndexStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropLoginStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Member",
    "parentKind": "DropMemberAlterRoleAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropMessageTypeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropPartitionFunctionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropPartitionSchemeStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropProcedureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropQueueStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropRemoteServiceBindingStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropRouteStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropRuleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Schema",
    "parentKind": "DropSchemaStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "PropertyName",
    "parentKind": "DropSearchPropertyListAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropSearchPropertyListStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropSecurityPolicyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "DropSensitivityClassificationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropSequenceStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropServerAuditSpecificationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropServerAuditStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropServerRoleStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropServiceStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Cryptos",
    "parentKind": "DropSignatureStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Element",
    "parentKind": "DropSignatureStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropStatisticsStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropSymmetricKeyStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropSynonymStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropTableStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropTypeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropUserStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropViewStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropWorkloadClassifierStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropWorkloadGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropXmlSchemaCollectionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "GenericOptionKind",
    "parentKind": "DWCompatibilityLevelConfigurationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "DWCompatibilityLevelConfigurationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "ElasticPoolName",
    "parentKind": "ElasticPoolSpecification"
  },
  {
    "edgeKind": "array",
    "edgeName": "TriggerNames",
    "parentKind": "EnableDisableTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TriggerObject",
    "parentKind": "EnableDisableTriggerStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "EncryptedValueParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Conversation",
    "parentKind": "EndConversationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ErrorCode",
    "parentKind": "EndConversationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ErrorDescription",
    "parentKind": "EndConversationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "EndpointAffinity"
  },
  {
    "edgeKind": "single",
    "edgeName": "EventValue",
    "parentKind": "EventDeclarationCompareFunctionParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "EventDeclarationCompareFunctionParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "SourceDeclaration",
    "parentKind": "EventDeclarationCompareFunctionParameter"
  },
  {
    "edgeKind": "array",
    "edgeName": "EventDeclarationActionParameters",
    "parentKind": "EventDeclaration"
  },
  {
    "edgeKind": "single",
    "edgeName": "EventDeclarationPredicateParameter",
    "parentKind": "EventDeclaration"
  },
  {
    "edgeKind": "array",
    "edgeName": "EventDeclarationSetParameters",
    "parentKind": "EventDeclaration"
  },
  {
    "edgeKind": "single",
    "edgeName": "ObjectName",
    "parentKind": "EventDeclaration"
  },
  {
    "edgeKind": "single",
    "edgeName": "EventField",
    "parentKind": "EventDeclarationSetParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "EventValue",
    "parentKind": "EventDeclarationSetParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "QueueName",
    "parentKind": "EventNotificationObjectScope"
  },
  {
    "edgeKind": "single",
    "edgeName": "MultiPartIdentifier",
    "parentKind": "EventSessionObjectName"
  },
  {
    "edgeKind": "array",
    "edgeName": "EventDeclarations",
    "parentKind": "EventSessionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "EventSessionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SessionOptions",
    "parentKind": "EventSessionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "TargetDeclarations",
    "parentKind": "EventSessionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AdHocDataSource",
    "parentKind": "ExecutableProcedureReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "ExecutableProcedureReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "ProcedureReference",
    "parentKind": "ExecutableProcedureReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "ExecutableStringList"
  },
  {
    "edgeKind": "array",
    "edgeName": "Strings",
    "parentKind": "ExecutableStringList"
  },
  {
    "edgeKind": "single",
    "edgeName": "Literal",
    "parentKind": "ExecuteAsClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExecuteAs",
    "parentKind": "ExecuteAsFunctionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExecuteAs",
    "parentKind": "ExecuteAsProcedureOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Cookie",
    "parentKind": "ExecuteAsStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExecuteContext",
    "parentKind": "ExecuteAsStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExecuteAsClause",
    "parentKind": "ExecuteAsTriggerOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Principal",
    "parentKind": "ExecuteContext"
  },
  {
    "edgeKind": "single",
    "edgeName": "Execute",
    "parentKind": "ExecuteInsertSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "ExecuteParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "ExecuteParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExecutableEntity",
    "parentKind": "ExecuteSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExecuteContext",
    "parentKind": "ExecuteSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "LinkedServer",
    "parentKind": "ExecuteSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "ExecuteSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExecuteSpecification",
    "parentKind": "ExecuteStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "ExecuteStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Subquery",
    "parentKind": "ExistsPredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ExpressionCallTarget"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ExpressionGroupingSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ExpressionWithSortOrder"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "ExternalCreateLoginSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ExternalDataSourceLiteralOrIdentifierOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Suboptions",
    "parentKind": "ExternalFileFormatContainerOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ExternalFileFormatLiteralOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Content",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "EnvironmentVariables",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileName",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Parameters",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Path",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Platform",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Content",
    "parentKind": "ExternalLibraryFileOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Path",
    "parentKind": "ExternalLibraryFileOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Platform",
    "parentKind": "ExternalLibraryFileOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "ExternalResourcePoolAffinitySpecification"
  },
  {
    "edgeKind": "array",
    "edgeName": "PoolAffinityRanges",
    "parentKind": "ExternalResourcePoolAffinitySpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "AffinitySpecification",
    "parentKind": "ExternalResourcePoolParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "ExternalResourcePoolParameter"
  },
  {
    "edgeKind": "array",
    "edgeName": "ExternalResourcePoolParameters",
    "parentKind": "ExternalResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ExternalResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ExternalStreamLiteralOrIdentifierOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnDefinition",
    "parentKind": "ExternalTableColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "NullableConstraint",
    "parentKind": "ExternalTableColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ExternalTableDistributionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ExternalTableLiteralOrIdentifierOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "ShardingColumn",
    "parentKind": "ExternalTableShardedDistributionPolicy"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ExtractFromExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ExtractedElement",
    "parentKind": "ExtractFromExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnName",
    "parentKind": "FederationScheme"
  },
  {
    "edgeKind": "single",
    "edgeName": "DistributionName",
    "parentKind": "FederationScheme"
  },
  {
    "edgeKind": "single",
    "edgeName": "Cursor",
    "parentKind": "FetchCursorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FetchType",
    "parentKind": "FetchCursorStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "IntoVariables",
    "parentKind": "FetchCursorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "RowOffset",
    "parentKind": "FetchType"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "FileDeclaration"
  },
  {
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "FileEncryptionSource"
  },
  {
    "edgeKind": "array",
    "edgeName": "FileDeclarations",
    "parentKind": "FileGroupDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "FileGroupDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "FileGroupOrPartitionScheme"
  },
  {
    "edgeKind": "array",
    "edgeName": "PartitionSchemeColumns",
    "parentKind": "FileGroupOrPartitionScheme"
  },
  {
    "edgeKind": "single",
    "edgeName": "GrowthIncrement",
    "parentKind": "FileGrowthFileDeclarationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OSFileName",
    "parentKind": "FileNameFileDeclarationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "DirectoryName",
    "parentKind": "FileStreamDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileStreamOn",
    "parentKind": "FileStreamOnDropIndexOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "FileStreamOnTableOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileStreamOption",
    "parentKind": "FileStreamRestoreOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "FileTableCollateFileNameTableOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "FileTableConstraintNameTableOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "FileTableDirectoryTableOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "ColumnValues",
    "parentKind": "ForceSeekTableHint"
  },
  {
    "edgeKind": "single",
    "edgeName": "IndexValue",
    "parentKind": "ForceSeekTableHint"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "ForeignKeyConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "ForeignKeyConstraintDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "ReferencedTableColumns",
    "parentKind": "ForeignKeyConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "ReferenceTableName",
    "parentKind": "ForeignKeyConstraintDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "PredictTableReference",
    "parentKind": "FromClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "TableReferences",
    "parentKind": "FromClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "CatalogName",
    "parentKind": "FullTextCatalogAndFileGroup"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileGroupName",
    "parentKind": "FullTextCatalogAndFileGroup"
  },
  {
    "edgeKind": "single",
    "edgeName": "LanguageTerm",
    "parentKind": "FullTextIndexColumn"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "FullTextIndexColumn"
  },
  {
    "edgeKind": "single",
    "edgeName": "TypeColumn",
    "parentKind": "FullTextIndexColumn"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "FullTextPredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "LanguageTerm",
    "parentKind": "FullTextPredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "PropertyName",
    "parentKind": "FullTextPredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "FullTextPredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "LanguageTerm",
    "parentKind": "FullTextStopListAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "StopWord",
    "parentKind": "FullTextStopListAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "FullTextTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "FullTextTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Language",
    "parentKind": "FullTextTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "PropertyName",
    "parentKind": "FullTextTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "FullTextTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableName",
    "parentKind": "FullTextTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "TopN",
    "parentKind": "FullTextTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "AbsentOrNullOnNull",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "CallTarget",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "FunctionName",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "IgnoreRespectNulls",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "JsonOrderByClause",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "JsonParameters",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "OverClause",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "ReturnType",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "MutatorFunction",
    "parentKind": "FunctionCallSetClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "TrimOptions",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "WithinGroupClause",
    "parentKind": "FunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "GeneralSetCommand"
  },
  {
    "edgeKind": "single",
    "edgeName": "GenericOptionKind",
    "parentKind": "GenericConfigurationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "GenericOptionState",
    "parentKind": "GenericConfigurationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "GroupId",
    "parentKind": "GetConversationGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Queue",
    "parentKind": "GetConversationGroupStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "GlobalFunctionTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "GlobalFunctionTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "GlobalFunctionTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "GlobalVariableExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "LabelName",
    "parentKind": "GoToStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AsClause",
    "parentKind": "GrantStatement80"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecurityElement80",
    "parentKind": "GrantStatement80"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecurityUserClause80",
    "parentKind": "GrantStatement80"
  },
  {
    "edgeKind": "single",
    "edgeName": "AsClause",
    "parentKind": "GrantStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Permissions",
    "parentKind": "GrantStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Principals",
    "parentKind": "GrantStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecurityTargetObject",
    "parentKind": "GrantStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FromNode",
    "parentKind": "GraphConnectionBetweenNodes"
  },
  {
    "edgeKind": "single",
    "edgeName": "ToNode",
    "parentKind": "GraphConnectionBetweenNodes"
  },
  {
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "GraphConnectionConstraintDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "FromNodeToNodeList",
    "parentKind": "GraphConnectionConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Edge",
    "parentKind": "GraphMatchCompositeExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "LeftNode",
    "parentKind": "GraphMatchCompositeExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "RightNode",
    "parentKind": "GraphMatchCompositeExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Edge",
    "parentKind": "GraphMatchExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "LeftNode",
    "parentKind": "GraphMatchExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "RightNode",
    "parentKind": "GraphMatchExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "LeftExpression",
    "parentKind": "GraphMatchLastNodePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "RightExpression",
    "parentKind": "GraphMatchLastNodePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "Node",
    "parentKind": "GraphMatchNodeExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "GraphMatchPredicate"
  },
  {
    "edgeKind": "array",
    "edgeName": "Expression",
    "parentKind": "GraphMatchRecursivePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "OuterNodeExpression",
    "parentKind": "GraphMatchRecursivePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "RecursiveQuantifier",
    "parentKind": "GraphMatchRecursivePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "LowerLimit",
    "parentKind": "GraphRecursiveMatchQuantifier"
  },
  {
    "edgeKind": "single",
    "edgeName": "UpperLimit",
    "parentKind": "GraphRecursiveMatchQuantifier"
  },
  {
    "edgeKind": "array",
    "edgeName": "GridParameters",
    "parentKind": "GridsSpatialIndexOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "GroupingSpecifications",
    "parentKind": "GroupByClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "Sets",
    "parentKind": "GroupingSetsGroupingSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "GroupName",
    "parentKind": "HadrAvailabilityGroupDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "HavingClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "IdentifierAtomicBlockOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "IdentifierDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "IdentifierLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "IdentifierOrScalarExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ScalarExpression",
    "parentKind": "IdentifierOrScalarExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "IdentifierOrValueExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ValueExpression",
    "parentKind": "IdentifierOrValueExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "IdentifierPrincipalOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "IdentityFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Increment",
    "parentKind": "IdentityFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Seed",
    "parentKind": "IdentityFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "IdentityIncrement",
    "parentKind": "IdentityOptions"
  },
  {
    "edgeKind": "single",
    "edgeName": "IdentitySeed",
    "parentKind": "IdentityOptions"
  },
  {
    "edgeKind": "single",
    "edgeName": "IdentityPhrase",
    "parentKind": "IdentityValueKeyOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "ElseStatement",
    "parentKind": "IfStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Predicate",
    "parentKind": "IfStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ThenStatement",
    "parentKind": "IfStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "IIfCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "ElseExpression",
    "parentKind": "IIfCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Predicate",
    "parentKind": "IIfCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "ThenExpression",
    "parentKind": "IIfCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "IndexDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileStreamOn",
    "parentKind": "IndexDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "FilterPredicate",
    "parentKind": "IndexDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "IncludeColumns",
    "parentKind": "IndexDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "IndexDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "IndexType",
    "parentKind": "IndexDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "IndexDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "IndexDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "IndexExpressionOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexValues",
    "parentKind": "IndexTableHint"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "InlineDerivedTable"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "InlineDerivedTable"
  },
  {
    "edgeKind": "array",
    "edgeName": "RowValues",
    "parentKind": "InlineDerivedTable"
  },
  {
    "edgeKind": "array",
    "edgeName": "ResultColumnDefinitions",
    "parentKind": "InlineResultSetDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "InPredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "Subquery",
    "parentKind": "InPredicate"
  },
  {
    "edgeKind": "array",
    "edgeName": "Values",
    "parentKind": "InPredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "InsertBulkColumnDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "ColumnDefinitions",
    "parentKind": "InsertBulkStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "InsertBulkStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "InsertBulkStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "InsertMergeAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Source",
    "parentKind": "InsertMergeAction"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "InsertSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "InsertSource",
    "parentKind": "InsertSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "OutputClause",
    "parentKind": "InsertSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "OutputIntoClause",
    "parentKind": "InsertSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "InsertSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "TopRowFilter",
    "parentKind": "InsertSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "InsertSpecification",
    "parentKind": "InsertStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "InsertStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "InsertStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "IntegerLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "InternalOpenRowset"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "InternalOpenRowset"
  },
  {
    "edgeKind": "array",
    "edgeName": "VarArgs",
    "parentKind": "InternalOpenRowset"
  },
  {
    "edgeKind": "array",
    "edgeName": "Arguments",
    "parentKind": "InvokeExternalApiFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "InvokeExternalApiFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "FunctionName",
    "parentKind": "InvokeExternalApiFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "FunctionSetName",
    "parentKind": "InvokeExternalApiFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "OctetFour",
    "parentKind": "IPv4"
  },
  {
    "edgeKind": "single",
    "edgeName": "OctetOne",
    "parentKind": "IPv4"
  },
  {
    "edgeKind": "single",
    "edgeName": "OctetThree",
    "parentKind": "IPv4"
  },
  {
    "edgeKind": "single",
    "edgeName": "OctetTwo",
    "parentKind": "IPv4"
  },
  {
    "edgeKind": "single",
    "edgeName": "Join",
    "parentKind": "JoinParenthesisTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "JsonForClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "JsonForClauseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "JsonKeyName",
    "parentKind": "JsonKeyValue"
  },
  {
    "edgeKind": "single",
    "edgeName": "JsonValue",
    "parentKind": "JsonKeyValue"
  },
  {
    "edgeKind": "single",
    "edgeName": "PassPhrase",
    "parentKind": "KeySourceKeyOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "SubscriptionId",
    "parentKind": "KillQueryNotificationSubscriptionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "KillStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "JobId",
    "parentKind": "KillStatsJobStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "LedgerViewOption",
    "parentKind": "LedgerTableOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OperationTypeColumnName",
    "parentKind": "LedgerViewOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OperationTypeDescColumnName",
    "parentKind": "LedgerViewOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "SequenceNumberColumnName",
    "parentKind": "LedgerViewOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "TransactionIdColumnName",
    "parentKind": "LedgerViewOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "ViewName",
    "parentKind": "LedgerViewOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "LeftFunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "LeftFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "EscapeExpression",
    "parentKind": "LikePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "LikePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "LikePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "LineNo",
    "parentKind": "LineNoStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "IPv4PartOne",
    "parentKind": "ListenerIPEndpointProtocolOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "IPv4PartTwo",
    "parentKind": "ListenerIPEndpointProtocolOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "IPv6",
    "parentKind": "ListenerIPEndpointProtocolOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "ListTypeCopyOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralAtomicBlockOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralAuditTargetOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralAvailabilityGroupOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralBulkInsertOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralEndpointProtocolOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralOpenRowsetCosmosOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralOptimizerHint"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralOptionValue"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralPayloadOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralPrincipalOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "From",
    "parentKind": "LiteralRange"
  },
  {
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "LiteralRange"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralReplicaOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralSessionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Literal",
    "parentKind": "LiteralStatisticsOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralTableHint"
  },
  {
    "edgeKind": "single",
    "edgeName": "LocationValue",
    "parentKind": "LocationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "MaxDuration",
    "parentKind": "LowPriorityLockWaitMaxDurationOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "LowPriorityLockWaitTableSwitchOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "MaxDispatchLatencySessionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "GenericOptionKind",
    "parentKind": "MaxDopConfigurationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "MaxDopConfigurationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "MaxDuration",
    "parentKind": "MaxDurationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "MaxLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "MaxRolloverFilesAuditTargetOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Size",
    "parentKind": "MaxSizeAuditTargetOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "MaxSize",
    "parentKind": "MaxSizeDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "MaxSize",
    "parentKind": "MaxSizeFileDeclarationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "MergeActionClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "MergeActionClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "ActionClauses",
    "parentKind": "MergeSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "OutputClause",
    "parentKind": "MergeSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "OutputIntoClause",
    "parentKind": "MergeSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "MergeSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableAlias",
    "parentKind": "MergeSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableReference",
    "parentKind": "MergeSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "MergeSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "TopRowFilter",
    "parentKind": "MergeSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "MergeSpecification",
    "parentKind": "MergeStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "MergeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "MergeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AssemblyName",
    "parentKind": "MethodSpecifier"
  },
  {
    "edgeKind": "single",
    "edgeName": "ClassName",
    "parentKind": "MethodSpecifier"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodName",
    "parentKind": "MethodSpecifier"
  },
  {
    "edgeKind": "array",
    "edgeName": "Devices",
    "parentKind": "MirrorToClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "MoneyLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "Conversation",
    "parentKind": "MoveConversationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Group",
    "parentKind": "MoveConversationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "LogicalFileName",
    "parentKind": "MoveRestoreOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OSFileName",
    "parentKind": "MoveRestoreOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "MoveTo",
    "parentKind": "MoveToDropIndexOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "MultiPartIdentifier",
    "parentKind": "MultiPartIdentifierCallTarget"
  },
  {
    "edgeKind": "array",
    "edgeName": "Identifiers",
    "parentKind": "MultiPartIdentifier"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "NamedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObject",
    "parentKind": "NamedTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "TableHints",
    "parentKind": "NamedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableSampleClause",
    "parentKind": "NamedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "TemporalClause",
    "parentKind": "NamedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "LogicalFileName",
    "parentKind": "NameFileDeclarationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "NextValueForExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "OverClause",
    "parentKind": "NextValueForExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "SequenceName",
    "parentKind": "NextValueForExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "NullableConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "NullIfExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "NullIfExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "NullIfExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "NullLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "NumericLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "OdbcConvertSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "OdbcFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "OdbcFunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "OdbcFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "OdbcLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableReference",
    "parentKind": "OdbcQualifiedJoinTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "FetchExpression",
    "parentKind": "OffsetClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "OffsetExpression",
    "parentKind": "OffsetClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "OnlineIndexLowPriorityLockWaitOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "LowPriorityLockWaitOption",
    "parentKind": "OnlineIndexOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "GenericOptionKind",
    "parentKind": "OnOffPrimaryConfigurationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Cursor",
    "parentKind": "OpenCursorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "OpenJsonTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "RowPattern",
    "parentKind": "OpenJsonTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "SchemaDeclarationItems",
    "parentKind": "OpenJsonTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "OpenJsonTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "OpenMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "OpenQueryTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "LinkedServer",
    "parentKind": "OpenQueryTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Query",
    "parentKind": "OpenQueryTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "OpenRowsetColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnIdentifier",
    "parentKind": "OpenRowsetColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnOrdinal",
    "parentKind": "OpenRowsetColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "OpenRowsetColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "JsonPath",
    "parentKind": "OpenRowsetColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "OpenRowsetCosmos"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "OpenRowsetCosmos"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "OpenRowsetCosmos"
  },
  {
    "edgeKind": "array",
    "edgeName": "WithColumns",
    "parentKind": "OpenRowsetCosmos"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataSource",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Object",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "ProviderName",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "ProviderString",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Query",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "UserId",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "WithColumns",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "DecryptionMechanism",
    "parentKind": "OpenSymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "OpenSymmetricKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Flags",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "RowPattern",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "SchemaDeclarationItems",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableName",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Pairs",
    "parentKind": "OptimizeForOptimizerHint"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "OrderBulkInsertOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "OrderByElements",
    "parentKind": "OrderByClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "OrderIndexOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "SelectColumns",
    "parentKind": "OutputClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "IntoTableColumns",
    "parentKind": "OutputIntoClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "IntoTable",
    "parentKind": "OutputIntoClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "SelectColumns",
    "parentKind": "OutputIntoClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "OverClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "Partitions",
    "parentKind": "OverClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "WindowFrameClause",
    "parentKind": "OverClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "WindowName",
    "parentKind": "OverClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ParameterlessCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ParenthesisExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ParenthesisExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ParseCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Culture",
    "parentKind": "ParseCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ParseCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "StringValue",
    "parentKind": "ParseCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "PartitionFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "PartitionFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "FunctionName",
    "parentKind": "PartitionFunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "PartitionFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "PartitionParameterType"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "PartitionParameterType"
  },
  {
    "edgeKind": "single",
    "edgeName": "Number",
    "parentKind": "PartitionSpecifier"
  },
  {
    "edgeKind": "single",
    "edgeName": "PartnerServer",
    "parentKind": "PartnerDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Timeout",
    "parentKind": "PartnerDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OldPassword",
    "parentKind": "PasswordAlterPrincipalOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "PasswordAlterPrincipalOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "PasswordCreateLoginSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "PasswordCreateLoginSource"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "Permission"
  },
  {
    "edgeKind": "array",
    "edgeName": "Identifiers",
    "parentKind": "Permission"
  },
  {
    "edgeKind": "single",
    "edgeName": "AggregateFunctionIdentifier",
    "parentKind": "PivotedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "PivotedTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "InColumns",
    "parentKind": "PivotedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "PivotColumn",
    "parentKind": "PivotedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableReference",
    "parentKind": "PivotedTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "ValueColumns",
    "parentKind": "PivotedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "PredictTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataSource",
    "parentKind": "PredictTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "ModelSubquery",
    "parentKind": "PredictTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "ModelVariable",
    "parentKind": "PredictTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "RunTime",
    "parentKind": "PredictTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "SchemaDeclarationItems",
    "parentKind": "PredictTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "PrintStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "Privilege80"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "PrivilegeSecurityElement80"
  },
  {
    "edgeKind": "array",
    "edgeName": "Privileges",
    "parentKind": "PrivilegeSecurityElement80"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "PrivilegeSecurityElement80"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ProcedureParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Nullable",
    "parentKind": "ProcedureParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ProcedureParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "VariableName",
    "parentKind": "ProcedureParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "ProcedureReference",
    "parentKind": "ProcedureReferenceName"
  },
  {
    "edgeKind": "single",
    "edgeName": "ProcedureVariable",
    "parentKind": "ProcedureReferenceName"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ProcedureReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Number",
    "parentKind": "ProcedureReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "From",
    "parentKind": "ProcessAffinityRange"
  },
  {
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "ProcessAffinityRange"
  },
  {
    "edgeKind": "array",
    "edgeName": "KeyOptions",
    "parentKind": "ProviderEncryptionSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ProviderEncryptionSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "KeyName",
    "parentKind": "ProviderKeyNameKeyOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstTableReference",
    "parentKind": "QualifiedJoin"
  },
  {
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "QualifiedJoin"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondTableReference",
    "parentKind": "QualifiedJoin"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "QueryDerivedTable"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "QueryDerivedTable"
  },
  {
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "QueryDerivedTable"
  },
  {
    "edgeKind": "single",
    "edgeName": "ForClause",
    "parentKind": "QueryParenthesisExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "OffsetClause",
    "parentKind": "QueryParenthesisExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "QueryParenthesisExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "QueryParenthesisExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ForClause",
    "parentKind": "QuerySpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "FromClause",
    "parentKind": "QuerySpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "GroupByClause",
    "parentKind": "QuerySpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "HavingClause",
    "parentKind": "QuerySpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "OffsetClause",
    "parentKind": "QuerySpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "QuerySpecification"
  },
  {
    "edgeKind": "array",
    "edgeName": "SelectElements",
    "parentKind": "QuerySpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "TopRowFilter",
    "parentKind": "QuerySpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "WhereClause",
    "parentKind": "QuerySpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "WindowClause",
    "parentKind": "QuerySpecification"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "QueryStoreDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "FlushInterval",
    "parentKind": "QueryStoreDataFlushIntervalOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "StatsIntervalLength",
    "parentKind": "QueryStoreIntervalLengthOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "MaxPlansPerQuery",
    "parentKind": "QueryStoreMaxPlansPerQueryOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "MaxQdsSize",
    "parentKind": "QueryStoreMaxStorageSizeOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "StaleQueryThreshold",
    "parentKind": "QueryStoreTimeCleanupPolicyOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Delay",
    "parentKind": "QueueDelayAuditOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "QueueExecuteAsOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "QueueProcedureOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "QueueValueOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstParameter",
    "parentKind": "RaiseErrorLegacyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondParameter",
    "parentKind": "RaiseErrorLegacyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstParameter",
    "parentKind": "RaiseErrorStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "OptionalParameters",
    "parentKind": "RaiseErrorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondParameter",
    "parentKind": "RaiseErrorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ThirdParameter",
    "parentKind": "RaiseErrorStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "ReadTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Offset",
    "parentKind": "ReadTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Size",
    "parentKind": "ReadTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TextPointer",
    "parentKind": "ReadTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "RealLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "Into",
    "parentKind": "ReceiveStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Queue",
    "parentKind": "ReceiveStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SelectElements",
    "parentKind": "ReceiveStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Top",
    "parentKind": "ReceiveStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Where",
    "parentKind": "ReceiveStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Flags",
    "parentKind": "RegexpLikePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "Pattern",
    "parentKind": "RegexpLikePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "Text",
    "parentKind": "RegexpLikePredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "FilterPredicate",
    "parentKind": "RemoteDataArchiveAlterTableOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Settings",
    "parentKind": "RemoteDataArchiveDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Credential",
    "parentKind": "RemoteDataArchiveDbCredentialSetting"
  },
  {
    "edgeKind": "single",
    "edgeName": "Server",
    "parentKind": "RemoteDataArchiveDbServerSetting"
  },
  {
    "edgeKind": "single",
    "edgeName": "NewName",
    "parentKind": "RenameAlterRoleAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "NewName",
    "parentKind": "RenameEntityStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "OldName",
    "parentKind": "RenameEntityStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Partitions",
    "parentKind": "ResampleStatisticsOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "ResourcePoolAffinitySpecification"
  },
  {
    "edgeKind": "array",
    "edgeName": "PoolAffinityRanges",
    "parentKind": "ResourcePoolAffinitySpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "AffinitySpecification",
    "parentKind": "ResourcePoolParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "ResourcePoolParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ResourcePoolStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ResourcePoolParameters",
    "parentKind": "ResourcePoolStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "EncryptionPassword",
    "parentKind": "RestoreMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "RestoreMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "RestoreMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "RestoreServiceMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "RestoreServiceMasterKeyStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "RestoreStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Devices",
    "parentKind": "RestoreStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Files",
    "parentKind": "RestoreStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "RestoreStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnDefinition",
    "parentKind": "ResultColumnDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Nullable",
    "parentKind": "ResultColumnDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "Definitions",
    "parentKind": "ResultSetsExecuteOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Days",
    "parentKind": "RetentionDaysAuditTargetOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Duration",
    "parentKind": "RetentionPeriodDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ReturnStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Cookie",
    "parentKind": "RevertStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "AsClause",
    "parentKind": "RevokeStatement80"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecurityElement80",
    "parentKind": "RevokeStatement80"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecurityUserClause80",
    "parentKind": "RevokeStatement80"
  },
  {
    "edgeKind": "single",
    "edgeName": "AsClause",
    "parentKind": "RevokeStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Permissions",
    "parentKind": "RevokeStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Principals",
    "parentKind": "RevokeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecurityTargetObject",
    "parentKind": "RevokeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "RightFunctionCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "RightFunctionCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "RollbackTransactionStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Arguments",
    "parentKind": "RollupGroupingSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "Literal",
    "parentKind": "RouteOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "ColumnValues",
    "parentKind": "RowValue"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "SaveTransactionStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ScalarExpressionDialogOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ScalarExpressionRestoreOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "ScalarExpressionSequenceOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ScalarFunctionReturnType"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ScalarSubquery"
  },
  {
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "ScalarSubquery"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnDefinition",
    "parentKind": "SchemaDeclarationItem"
  },
  {
    "edgeKind": "single",
    "edgeName": "Mapping",
    "parentKind": "SchemaDeclarationItem"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnDefinition",
    "parentKind": "SchemaDeclarationItemOpenjson"
  },
  {
    "edgeKind": "single",
    "edgeName": "Mapping",
    "parentKind": "SchemaDeclarationItemOpenjson"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "SchemaObjectFunctionTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "SchemaObjectFunctionTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "SchemaObjectFunctionTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObject",
    "parentKind": "SchemaObjectFunctionTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "BaseIdentifier",
    "parentKind": "SchemaObjectName"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseIdentifier",
    "parentKind": "SchemaObjectName"
  },
  {
    "edgeKind": "array",
    "edgeName": "Identifiers",
    "parentKind": "SchemaObjectName"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "SchemaObjectNameOrValueExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ValueExpression",
    "parentKind": "SchemaObjectNameOrValueExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaIdentifier",
    "parentKind": "SchemaObjectName"
  },
  {
    "edgeKind": "single",
    "edgeName": "ServerIdentifier",
    "parentKind": "SchemaObjectName"
  },
  {
    "edgeKind": "single",
    "edgeName": "BaseIdentifier",
    "parentKind": "SchemaObjectNameSnippet"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseIdentifier",
    "parentKind": "SchemaObjectNameSnippet"
  },
  {
    "edgeKind": "array",
    "edgeName": "Identifiers",
    "parentKind": "SchemaObjectNameSnippet"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaIdentifier",
    "parentKind": "SchemaObjectNameSnippet"
  },
  {
    "edgeKind": "single",
    "edgeName": "ServerIdentifier",
    "parentKind": "SchemaObjectNameSnippet"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "SchemaObjectResultSetDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "SearchedCaseExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ElseExpression",
    "parentKind": "SearchedCaseExpression"
  },
  {
    "edgeKind": "array",
    "edgeName": "WhenClauses",
    "parentKind": "SearchedCaseExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ThenExpression",
    "parentKind": "SearchedWhenClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "WhenExpression",
    "parentKind": "SearchedWhenClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "PropertyListName",
    "parentKind": "SearchPropertyListFullTextIndexOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "FunctionCall",
    "parentKind": "SecurityPredicateAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "TargetObjectName",
    "parentKind": "SecurityPredicateAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "SecurityPrincipal"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "SecurityTargetObject"
  },
  {
    "edgeKind": "single",
    "edgeName": "MultiPartIdentifier",
    "parentKind": "SecurityTargetObjectName"
  },
  {
    "edgeKind": "single",
    "edgeName": "ObjectName",
    "parentKind": "SecurityTargetObject"
  },
  {
    "edgeKind": "array",
    "edgeName": "Users",
    "parentKind": "SecurityUserClause80"
  },
  {
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "SelectFunctionReturnType"
  },
  {
    "edgeKind": "single",
    "edgeName": "Select",
    "parentKind": "SelectInsertSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "MaxLength",
    "parentKind": "SelectiveXmlIndexPromotedPath"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "SelectiveXmlIndexPromotedPath"
  },
  {
    "edgeKind": "single",
    "edgeName": "Path",
    "parentKind": "SelectiveXmlIndexPromotedPath"
  },
  {
    "edgeKind": "single",
    "edgeName": "SQLDataType",
    "parentKind": "SelectiveXmlIndexPromotedPath"
  },
  {
    "edgeKind": "single",
    "edgeName": "XQueryDataType",
    "parentKind": "SelectiveXmlIndexPromotedPath"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnName",
    "parentKind": "SelectScalarExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "SelectScalarExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "SelectSetVariable"
  },
  {
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "SelectSetVariable"
  },
  {
    "edgeKind": "single",
    "edgeName": "Qualifier",
    "parentKind": "SelectStarExpression"
  },
  {
    "edgeKind": "array",
    "edgeName": "ComputeClauses",
    "parentKind": "SelectStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Into",
    "parentKind": "SelectStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "On",
    "parentKind": "SelectStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "SelectStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "SelectStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "ComputeClauses",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "edgeKind": "single",
    "edgeName": "Into",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "edgeKind": "single",
    "edgeName": "On",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "SelectStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "SemanticIndexChunkOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "ChunkOptions",
    "parentKind": "SemanticIndexColumn"
  },
  {
    "edgeKind": "single",
    "edgeName": "ColumnName",
    "parentKind": "SemanticIndexColumn"
  },
  {
    "edgeKind": "single",
    "edgeName": "Language",
    "parentKind": "SemanticIndexColumn"
  },
  {
    "edgeKind": "single",
    "edgeName": "TypeColumnName",
    "parentKind": "SemanticIndexColumn"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "SemanticTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "SemanticTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "MatchedColumn",
    "parentKind": "SemanticTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "MatchedKey",
    "parentKind": "SemanticTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "SourceKey",
    "parentKind": "SemanticTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableName",
    "parentKind": "SemanticTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "ConversationHandles",
    "parentKind": "SendStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MessageBody",
    "parentKind": "SendStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "MessageTypeName",
    "parentKind": "SendStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "SensitivityClassificationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ServiceContract"
  },
  {
    "edgeKind": "single",
    "edgeName": "Timeout",
    "parentKind": "SessionTimeoutPayloadOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Commands",
    "parentKind": "SetCommandStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Level",
    "parentKind": "SetErrorLevelStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Table",
    "parentKind": "SetIdentityInsertStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "NumberRows",
    "parentKind": "SetRowCountStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SearchPropertyListOption",
    "parentKind": "SetSearchPropertyListAlterFullTextIndexAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "StopListOption",
    "parentKind": "SetStopListAlterFullTextIndexAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "TextSize",
    "parentKind": "SetTextSizeStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "UserName",
    "parentKind": "SetUserStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "CursorDefinition",
    "parentKind": "SetVariableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "SetVariableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "SetVariableStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "SetVariableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "SetVariableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "SimpleCaseExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ElseExpression",
    "parentKind": "SimpleCaseExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "InputExpression",
    "parentKind": "SimpleCaseExpression"
  },
  {
    "edgeKind": "array",
    "edgeName": "WhenClauses",
    "parentKind": "SimpleCaseExpression"
  },
  {
    "edgeKind": "single",
    "edgeName": "ThenExpression",
    "parentKind": "SimpleWhenClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "WhenExpression",
    "parentKind": "SimpleWhenClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "SingleValue",
    "parentKind": "SingleValueTypeCopyOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Size",
    "parentKind": "SizeFileDeclarationOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "SoapMethod"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "SoapMethod"
  },
  {
    "edgeKind": "single",
    "edgeName": "Namespace",
    "parentKind": "SoapMethod"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "SourceDeclaration"
  },
  {
    "edgeKind": "single",
    "edgeName": "Option",
    "parentKind": "SpatialIndexRegularOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "SqlDataTypeReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "SqlDataTypeReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Statements",
    "parentKind": "StatementListSnippet"
  },
  {
    "edgeKind": "array",
    "edgeName": "Statements",
    "parentKind": "StatementList"
  },
  {
    "edgeKind": "single",
    "edgeName": "From",
    "parentKind": "StatisticsPartitionRange"
  },
  {
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "StatisticsPartitionRange"
  },
  {
    "edgeKind": "single",
    "edgeName": "StopListName",
    "parentKind": "StopListFullTextIndexOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "After",
    "parentKind": "StopRestoreOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Mark",
    "parentKind": "StopRestoreOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "StringLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "SubqueryComparisonPredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "Subquery",
    "parentKind": "SubqueryComparisonPredicate"
  },
  {
    "edgeKind": "single",
    "edgeName": "EndTimeColumn",
    "parentKind": "SystemTimePeriodDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "StartTimeColumn",
    "parentKind": "SystemTimePeriodDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "HistoryTable",
    "parentKind": "SystemVersioningTableOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "RetentionPeriod",
    "parentKind": "SystemVersioningTableOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "TableClusteredIndexType"
  },
  {
    "edgeKind": "array",
    "edgeName": "OrderedColumns",
    "parentKind": "TableClusteredIndexType"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataCompressionOption",
    "parentKind": "TableDataCompressionOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "ColumnDefinitions",
    "parentKind": "TableDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "Indexes",
    "parentKind": "TableDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "SystemTimePeriod",
    "parentKind": "TableDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "TableConstraints",
    "parentKind": "TableDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "TableDistributionOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "DistributionColumns",
    "parentKind": "TableHashDistributionPolicy"
  },
  {
    "edgeKind": "single",
    "edgeName": "DistributionColumn",
    "parentKind": "TableHashDistributionPolicy"
  },
  {
    "edgeKind": "single",
    "edgeName": "ObjectName",
    "parentKind": "TableHintsOptimizerHint"
  },
  {
    "edgeKind": "array",
    "edgeName": "TableHints",
    "parentKind": "TableHintsOptimizerHint"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "TableIndexOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "PartitionColumn",
    "parentKind": "TablePartitionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "PartitionOptionSpecs",
    "parentKind": "TablePartitionOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "BoundaryValues",
    "parentKind": "TablePartitionOptionSpecifications"
  },
  {
    "edgeKind": "single",
    "edgeName": "RepeatSeed",
    "parentKind": "TableSampleClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "SampleNumber",
    "parentKind": "TableSampleClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "DeclareTableVariableBody",
    "parentKind": "TableValuedFunctionReturnType"
  },
  {
    "edgeKind": "single",
    "edgeName": "XmlCompressionOption",
    "parentKind": "TableXmlCompressionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "ObjectName",
    "parentKind": "TargetDeclaration"
  },
  {
    "edgeKind": "array",
    "edgeName": "TargetDeclarationParameters",
    "parentKind": "TargetDeclaration"
  },
  {
    "edgeKind": "single",
    "edgeName": "RecoveryTime",
    "parentKind": "TargetRecoveryTimeDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "EndTime",
    "parentKind": "TemporalClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "StartTime",
    "parentKind": "TemporalClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "ErrorNumber",
    "parentKind": "ThrowStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Message",
    "parentKind": "ThrowStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "State",
    "parentKind": "ThrowStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "TopRowFilter"
  },
  {
    "edgeKind": "single",
    "edgeName": "EventTypeGroup",
    "parentKind": "TriggerAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "TriggerObject"
  },
  {
    "edgeKind": "array",
    "edgeName": "PartitionRanges",
    "parentKind": "TruncateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableName",
    "parentKind": "TruncateTableStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "TryCastCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "TryCastCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "TryCastCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "CatchStatements",
    "parentKind": "TryCatchStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TryStatements",
    "parentKind": "TryCatchStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "TryConvertCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "TryConvertCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "TryConvertCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Style",
    "parentKind": "TryConvertCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "TryParseCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "Culture",
    "parentKind": "TryParseCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "TryParseCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "StringValue",
    "parentKind": "TryParseCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "TSEqualCall"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "TSEqualCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Statements",
    "parentKind": "TSqlBatch"
  },
  {
    "edgeKind": "array",
    "edgeName": "Batches",
    "parentKind": "TSqlScript"
  },
  {
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "UnaryExpression"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "FileStreamOn",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "IndexType",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "UnpivotedTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "InColumns",
    "parentKind": "UnpivotedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "PivotColumn",
    "parentKind": "UnpivotedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "TableReference",
    "parentKind": "UnpivotedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "ValueColumn",
    "parentKind": "UnpivotedTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "FirstTableReference",
    "parentKind": "UnqualifiedJoin"
  },
  {
    "edgeKind": "single",
    "edgeName": "SecondTableReference",
    "parentKind": "UnqualifiedJoin"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "UpdateCall"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "UpdateForClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "SetClauses",
    "parentKind": "UpdateMergeAction"
  },
  {
    "edgeKind": "single",
    "edgeName": "FromClause",
    "parentKind": "UpdateSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "OutputClause",
    "parentKind": "UpdateSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "OutputIntoClause",
    "parentKind": "UpdateSpecification"
  },
  {
    "edgeKind": "array",
    "edgeName": "SetClauses",
    "parentKind": "UpdateSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "UpdateSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "TopRowFilter",
    "parentKind": "UpdateSpecification"
  },
  {
    "edgeKind": "single",
    "edgeName": "WhereClause",
    "parentKind": "UpdateSpecification"
  },
  {
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "UpdateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "UpdateSpecification",
    "parentKind": "UpdateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "UpdateStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "UpdateStatisticsStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "StatisticsOptions",
    "parentKind": "UpdateStatisticsStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "SubElements",
    "parentKind": "UpdateStatisticsStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "UpdateTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DeleteLength",
    "parentKind": "UpdateTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "InsertOffset",
    "parentKind": "UpdateTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SourceColumn",
    "parentKind": "UpdateTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SourceParameter",
    "parentKind": "UpdateTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TextId",
    "parentKind": "UpdateTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Timestamp",
    "parentKind": "UpdateTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "DistributionName",
    "parentKind": "UseFederationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "FederationName",
    "parentKind": "UseFederationStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "UseFederationStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "Hints",
    "parentKind": "UseHintList"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "UserDataTypeReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "UserDataTypeReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "UserDefinedTypeCallTarget"
  },
  {
    "edgeKind": "single",
    "edgeName": "CallTarget",
    "parentKind": "UserDefinedTypePropertyAccess"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "UserDefinedTypePropertyAccess"
  },
  {
    "edgeKind": "single",
    "edgeName": "PropertyName",
    "parentKind": "UserDefinedTypePropertyAccess"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "UserLoginOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "User",
    "parentKind": "UserRemoteServiceBindingOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "UseStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "RowValues",
    "parentKind": "ValuesInsertSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "VariableMethodCallTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "VariableMethodCallTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "MethodName",
    "parentKind": "VariableMethodCallTableReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "VariableMethodCallTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "VariableMethodCallTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "VariableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "VariableTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "VariableTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "VariableValuePair"
  },
  {
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "VariableValuePair"
  },
  {
    "edgeKind": "single",
    "edgeName": "BaseType",
    "parentKind": "VectorDataTypeReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Dimension",
    "parentKind": "VectorDataTypeReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "VectorDataTypeReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Metric",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "SimilarTo",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Table",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "TopN",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ViewDistributionOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "DistributionColumns",
    "parentKind": "ViewHashDistributionPolicy"
  },
  {
    "edgeKind": "single",
    "edgeName": "DistributionColumn",
    "parentKind": "ViewHashDistributionPolicy"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "WaitAtLowPriorityOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "WaitForStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Statement",
    "parentKind": "WaitForStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Timeout",
    "parentKind": "WaitForStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Cursor",
    "parentKind": "WhereClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "WhereClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Predicate",
    "parentKind": "WhileStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Statement",
    "parentKind": "WhileStatement"
  },
  {
    "edgeKind": "array",
    "edgeName": "WindowDefinition",
    "parentKind": "WindowClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "WindowDefinition"
  },
  {
    "edgeKind": "array",
    "edgeName": "Partitions",
    "parentKind": "WindowDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "RefWindowName",
    "parentKind": "WindowDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "WindowFrameClause",
    "parentKind": "WindowDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "WindowName",
    "parentKind": "WindowDefinition"
  },
  {
    "edgeKind": "single",
    "edgeName": "OffsetValue",
    "parentKind": "WindowDelimiter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Bottom",
    "parentKind": "WindowFrameClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Top",
    "parentKind": "WindowFrameClause"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "WindowsCreateLoginSource"
  },
  {
    "edgeKind": "single",
    "edgeName": "ChangeTrackingContext",
    "parentKind": "WithCtesAndXmlNamespaces"
  },
  {
    "edgeKind": "array",
    "edgeName": "CommonTableExpressions",
    "parentKind": "WithCtesAndXmlNamespaces"
  },
  {
    "edgeKind": "single",
    "edgeName": "XmlNamespaces",
    "parentKind": "WithCtesAndXmlNamespaces"
  },
  {
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "WithinGroupClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "WitnessServer",
    "parentKind": "WitnessDatabaseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "TimeString",
    "parentKind": "WlmTimeLiteral"
  },
  {
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "WorkloadGroupResourceParameter"
  },
  {
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "WriteTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "SourceParameter",
    "parentKind": "WriteTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "TextId",
    "parentKind": "WriteTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Timestamp",
    "parentKind": "WriteTextStatement"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "WsdlPayloadOption"
  },
  {
    "edgeKind": "array",
    "edgeName": "PartitionRanges",
    "parentKind": "XmlCompressionOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "XmlDataTypeReference"
  },
  {
    "edgeKind": "single",
    "edgeName": "XmlSchemaCollection",
    "parentKind": "XmlDataTypeReference"
  },
  {
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "XmlForClause"
  },
  {
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "XmlForClauseOption"
  },
  {
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "XmlNamespacesAliasElement"
  },
  {
    "edgeKind": "single",
    "edgeName": "String",
    "parentKind": "XmlNamespacesAliasElement"
  },
  {
    "edgeKind": "single",
    "edgeName": "String",
    "parentKind": "XmlNamespacesDefaultElement"
  },
  {
    "edgeKind": "array",
    "edgeName": "XmlNamespacesElements",
    "parentKind": "XmlNamespaces"
  }
];
var TSQL_STRUCTURAL_ATTRIBUTE_NAMES = [
  "QuoteType",
  "Value"
];
var TSQL_STRUCTURAL_ATTRIBUTE_KINDS = [
  "enum",
  "identifier"
];
var TSQL_STRUCTURAL_ATTRIBUTE_POLICIES = [
  {
    "allowedValues": [
      "DoubleQuote",
      "NotQuoted",
      "SquareBracket"
    ],
    "attributeKind": "enum",
    "nodeKind": "Identifier",
    "propertyName": "QuoteType"
  },
  {
    "attributeKind": "identifier",
    "nodeKind": "Identifier",
    "propertyName": "Value"
  }
];
var TSQL_IDENTIFIER_STATES = [
  "present",
  "redacted"
];
var TSQL_INSPECT_COORDINATE_STATES = [
  "available",
  "unavailable"
];
var TSQL_INSPECT_TOKEN_TYPES = [
  0,
  1,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
  123,
  124,
  125,
  126,
  127,
  128,
  129,
  130,
  131,
  132,
  133,
  134,
  135,
  136,
  137,
  138,
  139,
  140,
  141,
  142,
  143,
  144,
  145,
  146,
  147,
  148,
  149,
  150,
  151,
  152,
  153,
  154,
  155,
  156,
  157,
  158,
  159,
  160,
  161,
  162,
  163,
  164,
  165,
  166,
  167,
  168,
  169,
  170,
  171,
  172,
  173,
  174,
  175,
  176,
  177,
  178,
  179,
  180,
  181,
  182,
  183,
  184,
  185,
  186,
  187,
  188,
  189,
  190,
  191,
  192,
  193,
  194,
  195,
  196,
  197,
  198,
  199,
  200,
  201,
  202,
  203,
  204,
  205,
  206,
  207,
  208,
  209,
  210,
  211,
  212,
  213,
  214,
  215,
  216,
  217,
  218,
  219,
  220,
  221,
  222,
  223,
  224,
  225,
  226,
  227,
  228,
  229,
  230,
  231,
  232,
  233,
  234,
  235,
  236,
  237,
  238,
  239,
  240,
  241,
  242,
  243
];

// src/result-validation.ts
var forbiddenResultKeys = /* @__PURE__ */ new Set(["text", "message", "sql", "value"]);
function assertObject(value, fieldName) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertInteger(value, fieldName) {
  if (!Number.isSafeInteger(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertNonNegativeInteger(value, fieldName) {
  assertInteger(value, fieldName);
  if (value < 0) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertString(value, fieldName) {
  if (typeof value !== "string") {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertExactKeys(value, expectedKeys, fieldName) {
  assertNoForbiddenKeys(value, fieldName);
  const actualKeys = Object.keys(value);
  if (actualKeys.length !== expectedKeys.size || actualKeys.some((key) => !expectedKeys.has(key))) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertNoForbiddenKeys(value, fieldName) {
  for (const key of Object.keys(value)) {
    if (forbiddenResultKeys.has(key)) {
      throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
    }
  }
}
function validateLocationError(value, fieldName, sqlLength) {
  assertObject(value, fieldName);
  assertExactKeys(value, locationErrorKeys, `${fieldName} keys`);
  assertInteger(value.number, `${fieldName}.number`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertNonNegativeInteger(value.line, `${fieldName}.line`);
  assertNonNegativeInteger(value.column, `${fieldName}.column`);
  if (sqlLength !== void 0 && value.offset > sqlLength) {
    throw new Error("Invalid ScriptDOM result: location error range");
  }
  return {
    number: value.number,
    offset: value.offset,
    line: value.line,
    column: value.column
  };
}
var locationErrorKeys = /* @__PURE__ */ new Set(["number", "offset", "line", "column"]);

// src/wasm-runtime.ts
var import_node_fs = __toESM(require("node:fs"), 1);
var import_node_path = __toESM(require("node:path"), 1);
var import_node_url = require("node:url");
var runtimeCacheSymbol = /* @__PURE__ */ Symbol.for("scriptdom-wasm-bridge.runtimeCache.v2");
var runtimeCache = getRuntimeCache();
async function loadWasmRuntime({
  appBundlePath,
  bundleKind,
  missingBundleMessage,
  createRuntime
}) {
  const dotnetJsPath = import_node_path.default.join(appBundlePath, "_framework", "dotnet.js");
  if (!import_node_fs.default.existsSync(dotnetJsPath)) {
    throw new Error(missingBundleMessage(dotnetJsPath));
  }
  const cacheKey = import_node_fs.default.realpathSync(dotnetJsPath);
  const cachedRuntime = runtimeCache.get(cacheKey);
  if (cachedRuntime) {
    const loadedRuntime = await cachedRuntime;
    return getExpectedRuntime(loadedRuntime, bundleKind, appBundlePath);
  }
  const runtimePromise = initializeWasmRuntime(cacheKey, bundleKind, createRuntime);
  runtimeCache.set(cacheKey, runtimePromise);
  try {
    const loadedRuntime = await runtimePromise;
    return getExpectedRuntime(loadedRuntime, bundleKind, appBundlePath);
  } catch (error) {
    if (runtimeCache.get(cacheKey) === runtimePromise) {
      runtimeCache.delete(cacheKey);
    }
    throw error;
  }
}
function getBridgeNamespace(assemblyExports) {
  const scriptDom = getObjectProperty(assemblyExports, "ScriptDom", "ScriptDom namespace");
  return getObjectProperty(scriptDom, "WasmBridge", "ScriptDom.WasmBridge namespace");
}
function getFunctionProperty(value, propertyName, fieldName) {
  const property = value[propertyName];
  if (typeof property !== "function") {
    throw new Error(`Invalid ScriptDOM WASM export: ${fieldName}`);
  }
  return property;
}
function getExpectedRuntime(loadedRuntime, bundleKind, appBundlePath) {
  if (loadedRuntime.bundleKind !== bundleKind) {
    throw new Error(
      `The WASM AppBundle at ${appBundlePath} exports ${loadedRuntime.bundleKind}, not ${bundleKind}.`
    );
  }
  return loadedRuntime.runtime;
}
async function initializeWasmRuntime(dotnetJsPath, bundleKind, createRuntime) {
  const dotnetModule = await import((0, import_node_url.pathToFileURL)(dotnetJsPath).href);
  const runtime = await dotnetModule.dotnet.withDiagnosticTracing(false).create();
  const config = runtime.getConfig();
  const assemblyExports = await runtime.getAssemblyExports(config.mainAssemblyName);
  return {
    bundleKind,
    runtime: await createRuntime(assemblyExports, {
      poison() {
        runtimeCache.delete(dotnetJsPath);
      }
    })
  };
}
function getRuntimeCache() {
  const globalCache = globalThis;
  const existingCache = globalCache[runtimeCacheSymbol];
  if (existingCache) {
    return existingCache;
  }
  const cache = /* @__PURE__ */ new Map();
  globalCache[runtimeCacheSymbol] = cache;
  return cache;
}
function getObjectProperty(value, propertyName, fieldName) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM WASM export: ${fieldName}`);
  }
  const property = value[propertyName];
  if (!property || typeof property !== "object" || Array.isArray(property)) {
    throw new Error(`Invalid ScriptDOM WASM export: ${fieldName}`);
  }
  return property;
}

// src/introspector.ts
var defaultIntrospectorAppBundlePath = import_node_path2.default.resolve(
  __scriptdomBridgeModuleDirectory,
  "../vendor/scriptdom-introspector-wasm/AppBundle"
);
var createOptionKeys = /* @__PURE__ */ new Set(["appBundlePath"]);
var inspectOptionKeys = /* @__PURE__ */ new Set(["includeSpans", "includeTokens"]);
var abiKeys = /* @__PURE__ */ new Set([
  "parser",
  "projectionVersion",
  "manifestSha256",
  "resultSchemaSha256",
  "allowlistSha256"
]);
var resultKeysWithoutTokens = /* @__PURE__ */ new Set(["failed", "parser", "projectionVersion", "nodes", "errors"]);
var resultKeysWithTokens = /* @__PURE__ */ new Set([
  "failed",
  "parser",
  "projectionVersion",
  "nodes",
  "tokens",
  "errors"
]);
var nodeRequiredKeys = /* @__PURE__ */ new Set(["id", "kind", "parentId", "pathFromParent", "attributes"]);
var nodeAllowedKeys = /* @__PURE__ */ new Set([
  "id",
  "kind",
  "parentId",
  "pathFromParent",
  "span",
  "attributes"
]);
var spanKeys = /* @__PURE__ */ new Set(["offset", "length", "line", "column"]);
var tokenKeys = /* @__PURE__ */ new Set(["type", "offset", "length", "line", "column"]);
var errorKeys = /* @__PURE__ */ new Set(["number", "offset", "line", "column", "coordinateState"]);
var identifierPresentAttributeKeys = /* @__PURE__ */ new Set(["name", "kind", "state", "value"]);
var identifierRedactedAttributeKeys = /* @__PURE__ */ new Set(["name", "kind", "state", "profile", "reason"]);
var scalarAttributeKeys = /* @__PURE__ */ new Set(["name", "kind", "value"]);
var nodeKindSet = new Set(TSQL_STRUCTURAL_NODE_KINDS);
var edgeNameSet = new Set(TSQL_STRUCTURAL_EDGE_NAMES);
var edgePolicyKinds = new Map(
  TSQL_STRUCTURAL_EDGE_POLICIES.map((policy) => [
    edgePolicyKey(policy.parentKind, policy.edgeName),
    policy.edgeKind
  ])
);
var attributeNameSet = new Set(TSQL_STRUCTURAL_ATTRIBUTE_NAMES);
var attributeKindSet = new Set(TSQL_STRUCTURAL_ATTRIBUTE_KINDS);
var attributePolicySet = new Set(
  TSQL_STRUCTURAL_ATTRIBUTE_POLICIES.map(
    (policy) => attributePolicyKey(policy.nodeKind, policy.propertyName, policy.attributeKind)
  )
);
var scalarAttributeValueSets = new Map(
  TSQL_STRUCTURAL_ATTRIBUTE_POLICIES.filter((policy) => "allowedValues" in policy).map(
    (policy) => [
      attributePolicyKey(policy.nodeKind, policy.propertyName, policy.attributeKind),
      new Set(policy.allowedValues)
    ]
  )
);
var identifierStateSet = new Set(TSQL_IDENTIFIER_STATES);
var coordinateStateSet = new Set(TSQL_INSPECT_COORDINATE_STATES);
var tokenTypeSet = new Set(TSQL_INSPECT_TOKEN_TYPES);
var redactedReasons = /* @__PURE__ */ new Set(["literal-origin", "secret-pattern"]);
var pathIndexPattern = /^(0|[1-9]\d*)$/;
async function createTsqlIntrospector(options = {}) {
  const normalizedOptions = normalizeCreateOptions(options);
  const runtime = await loadTsqlIntrospectorRuntime(normalizedOptions);
  return {
    inspect: runtime.inspect
  };
}
async function loadTsqlIntrospectorRuntime(options = {}) {
  return loadWasmRuntime({
    appBundlePath: import_node_path2.default.resolve(options.appBundlePath ?? defaultIntrospectorAppBundlePath),
    bundleKind: "introspector",
    missingBundleMessage: (dotnetJsPath) => `Published introspector dotnet.js was not found at ${dotnetJsPath}. Run "npm run build:wasm" before using the package from source.`,
    createRuntime(assemblyExports, { poison }) {
      const bridgeNamespace = getBridgeNamespace(assemblyExports);
      const introspector = bridgeNamespace.TsqlIntrospector;
      if (!introspector || typeof introspector !== "object" || Array.isArray(introspector)) {
        throw new Error("Invalid ScriptDOM WASM export: TsqlIntrospector");
      }
      const getAbiJson = getFunctionProperty(
        introspector,
        "GetIntrospectorAbiJson",
        "TsqlIntrospector.GetIntrospectorAbiJson"
      );
      const inspectJson = getFunctionProperty(
        introspector,
        "InspectJson",
        "TsqlIntrospector.InspectJson"
      );
      validateIntrospectorAbi(parseJsonExport(callStringExport(getAbiJson, [], poison)));
      return {
        inspect(sql, options2) {
          validateSqlInput(sql);
          const normalizedInspectOptions = normalizeInspectOptions(options2);
          const rawJson = callStringExport(
            inspectJson,
            [sql, normalizedInspectOptions.privateOptionsJson],
            poison
          );
          try {
            return validateInspectResult(
              sql,
              parseJsonExport(rawJson),
              normalizedInspectOptions
            );
          } catch (error) {
            poison();
            throw error;
          }
        }
      };
    }
  });
}
function callStringExport(callback, args, poison) {
  let value;
  try {
    value = callback(...args);
  } catch {
    poison();
    throw new Error("ScriptDOM introspector runtime failed");
  }
  if (typeof value !== "string") {
    poison();
    throw new Error("Invalid ScriptDOM WASM export: introspector JSON result");
  }
  if (Buffer.byteLength(value, "utf8") > INTROSPECTOR_PROJECTION_ABI.limits.serializedEnvelopeUtf8Bytes || value.length > INTROSPECTOR_PROJECTION_ABI.limits.projectedOutputUtf16CodeUnits) {
    poison();
    throw new Error("Invalid ScriptDOM result: introspector JSON envelope");
  }
  return value;
}
function parseJsonExport(rawJson) {
  try {
    return JSON.parse(rawJson);
  } catch {
    throw new Error("Invalid ScriptDOM result: introspector JSON");
  }
}
function validateIntrospectorAbi(value) {
  assertObject(value, "introspector ABI");
  assertExactKeysLocal(value, abiKeys, "introspector ABI keys");
  if (value.parser !== INTROSPECTOR_PROJECTION_ABI.parser || value.projectionVersion !== INTROSPECTOR_PROJECTION_ABI.projectionVersion || value.manifestSha256 !== INTROSPECTOR_PROJECTION_ABI.manifestSha256 || value.resultSchemaSha256 !== INTROSPECTOR_PROJECTION_ABI.resultSchemaSha256 || value.allowlistSha256 !== INTROSPECTOR_PROJECTION_ABI.allowlistSha256) {
    throw new Error("Incompatible ScriptDOM introspector ABI");
  }
}
function validateSqlInput(sql) {
  if (typeof sql !== "string") {
    throw new TypeError("SQL input must be a string");
  }
  if (sql.length > INTROSPECTOR_PROJECTION_ABI.limits.sqlUtf16CodeUnits) {
    throw new RangeError("SQL input exceeds the ScriptDOM introspector size limit");
  }
  if (!isWellFormedUtf16(sql)) {
    throw new TypeError("SQL input must be well-formed UTF-16");
  }
}
function normalizeCreateOptions(options) {
  if (options === null || typeof options !== "object" || Array.isArray(options)) {
    throw new TypeError("createTsqlIntrospector options must be an object");
  }
  assertAllowedOwnKeys(options, createOptionKeys, "createTsqlIntrospector options");
  const appBundlePath = readOwnDataProperty(options, "appBundlePath", "createTsqlIntrospector");
  if (appBundlePath !== void 0 && typeof appBundlePath !== "string") {
    throw new TypeError("createTsqlIntrospector appBundlePath must be a string");
  }
  return { appBundlePath };
}
function normalizeInspectOptions(options) {
  if (options === void 0) {
    return {
      includeSpans: false,
      includeTokens: false,
      privateOptionsJson: "{}"
    };
  }
  if (options === null || typeof options !== "object" || Array.isArray(options)) {
    throw new TypeError("T-SQL inspect options must be an object");
  }
  assertAllowedOwnKeys(options, inspectOptionKeys, "T-SQL inspect options");
  const includeSpans = readOwnDataProperty(options, "includeSpans", "T-SQL inspect");
  const includeTokens = readOwnDataProperty(options, "includeTokens", "T-SQL inspect");
  if (includeSpans !== void 0 && typeof includeSpans !== "boolean") {
    throw new TypeError("T-SQL inspect includeSpans must be a boolean");
  }
  if (includeTokens !== void 0 && typeof includeTokens !== "boolean") {
    throw new TypeError("T-SQL inspect includeTokens must be a boolean");
  }
  const normalizedIncludeSpans = includeSpans ?? false;
  const normalizedIncludeTokens = includeTokens ?? false;
  if (normalizedIncludeSpans && normalizedIncludeTokens) {
    return {
      includeSpans: true,
      includeTokens: true,
      privateOptionsJson: '{"includeSpans":true,"includeTokens":true}'
    };
  }
  if (normalizedIncludeSpans) {
    return {
      includeSpans: true,
      includeTokens: false,
      privateOptionsJson: '{"includeSpans":true}'
    };
  }
  if (normalizedIncludeTokens) {
    return {
      includeSpans: false,
      includeTokens: true,
      privateOptionsJson: '{"includeTokens":true}'
    };
  }
  return {
    includeSpans: false,
    includeTokens: false,
    privateOptionsJson: "{}"
  };
}
function validateInspectResult(sql, value, options) {
  assertObject(value, "inspect result");
  assertExactKeysLocal(
    value,
    options.includeTokens ? resultKeysWithTokens : resultKeysWithoutTokens,
    "inspect result keys"
  );
  if (typeof value.failed !== "boolean") {
    throw new Error("Invalid ScriptDOM result: inspect result failed");
  }
  if (value.parser !== INTROSPECTOR_PROJECTION_ABI.parser || value.projectionVersion !== INTROSPECTOR_PROJECTION_ABI.projectionVersion) {
    throw new Error("Invalid ScriptDOM result: inspect result ABI");
  }
  const validatedNodes = [];
  const nodes = validateArray(
    value.nodes,
    "nodes",
    INTROSPECTOR_PROJECTION_ABI.limits.nodes,
    (item, index) => {
      const node = validateNode(sql, item, index, options, validatedNodes);
      validatedNodes.push(node);
      return node;
    }
  );
  const errors = validateArray(
    value.errors,
    "errors",
    INTROSPECTOR_PROJECTION_ABI.limits.parseErrors,
    (item, index) => validateInspectError(sql, item, `errors[${index}]`)
  );
  const result = {
    failed: value.failed,
    parser: INTROSPECTOR_PROJECTION_ABI.parser,
    projectionVersion: INTROSPECTOR_PROJECTION_ABI.projectionVersion,
    nodes,
    errors
  };
  if (options.includeTokens) {
    result.tokens = validateArray(
      value.tokens,
      "tokens",
      INTROSPECTOR_PROJECTION_ABI.limits.tokens,
      (item, index) => validateToken(sql, item, `tokens[${index}]`)
    );
  }
  return result;
}
function validateNode(sql, value, index, options, validatedNodes) {
  assertObject(value, `nodes[${index}]`);
  assertRequiredAllowedKeysLocal(
    value,
    nodeRequiredKeys,
    nodeAllowedKeys,
    `nodes[${index}] keys`
  );
  assertNonNegativeInteger(value.id, `nodes[${index}].id`);
  if (value.id !== index) {
    throw new Error("Invalid ScriptDOM result: node id order");
  }
  assertString(value.kind, `nodes[${index}].kind`);
  if (!nodeKindSet.has(value.kind)) {
    throw new Error("Invalid ScriptDOM result: node kind");
  }
  const nodeKind = value.kind;
  let parentKind;
  if (index === 0) {
    if (value.parentId !== null) {
      throw new Error("Invalid ScriptDOM result: node parent");
    }
  } else {
    if (value.parentId === null) {
      throw new Error("Invalid ScriptDOM result: node parent");
    }
    assertNonNegativeInteger(value.parentId, `nodes[${index}].parentId`);
    if (value.parentId >= index) {
      throw new Error("Invalid ScriptDOM result: node parent");
    }
    parentKind = validatedNodes[value.parentId]?.kind;
    if (parentKind === void 0) {
      throw new Error("Invalid ScriptDOM result: node parent");
    }
  }
  const pathFromParent = validatePathFromParent(
    value.pathFromParent,
    index,
    parentKind
  );
  const attributes = validateArray(
    value.attributes,
    `nodes[${index}].attributes`,
    Number.MAX_SAFE_INTEGER,
    (item, attributeIndex) => validateAttribute(item, `nodes[${index}].attributes[${attributeIndex}]`, nodeKind)
  );
  const node = {
    id: value.id,
    kind: nodeKind,
    parentId: value.parentId,
    pathFromParent,
    attributes
  };
  if (Object.hasOwn(value, "span")) {
    if (!options.includeSpans) {
      throw new Error("Invalid ScriptDOM result: unexpected node span");
    }
    node.span = validateSpan(sql, value.span, `nodes[${index}].span`);
  }
  return node;
}
function validatePathFromParent(value, nodeIndex, parentKind) {
  if (!Array.isArray(value)) {
    throw new Error("Invalid ScriptDOM result: node path");
  }
  if (parentKind === void 0) {
    if (value.length !== 0) {
      throw new Error("Invalid ScriptDOM result: node path");
    }
    return [];
  }
  if (value.length !== 1 && value.length !== 2) {
    throw new Error("Invalid ScriptDOM result: node path");
  }
  assertString(value[0], `nodes[${nodeIndex}].pathFromParent[0]`);
  if (!edgeNameSet.has(value[0])) {
    throw new Error("Invalid ScriptDOM result: node path");
  }
  const edgeKind = edgePolicyKinds.get(edgePolicyKey(parentKind, value[0]));
  if (edgeKind === void 0) {
    throw new Error("Invalid ScriptDOM result: node path");
  }
  if (value.length === 1) {
    if (edgeKind !== "single") {
      throw new Error("Invalid ScriptDOM result: node path");
    }
    return [value[0]];
  }
  if (edgeKind !== "array") {
    throw new Error("Invalid ScriptDOM result: node path");
  }
  assertString(value[1], `nodes[${nodeIndex}].pathFromParent[1]`);
  if (!pathIndexPattern.test(value[1])) {
    throw new Error("Invalid ScriptDOM result: node path");
  }
  return [value[0], value[1]];
}
function validateAttribute(value, fieldName, nodeKind) {
  assertObject(value, fieldName);
  assertString(value.name, `${fieldName}.name`);
  assertString(value.kind, `${fieldName}.kind`);
  if (!attributeNameSet.has(value.name)) {
    throw new Error("Invalid ScriptDOM result: structural attribute name");
  }
  if (!attributeKindSet.has(value.kind)) {
    throw new Error("Invalid ScriptDOM result: structural attribute kind");
  }
  const policyKey = attributePolicyKey(nodeKind, value.name, value.kind);
  if (!attributePolicySet.has(policyKey)) {
    throw new Error("Invalid ScriptDOM result: structural attribute policy");
  }
  if (value.kind === "identifier") {
    if (!identifierStateSet.has(String(value.state))) {
      throw new Error("Invalid ScriptDOM result: structural identifier state");
    }
    if (value.state === "present") {
      assertExactKeysLocal(value, identifierPresentAttributeKeys, `${fieldName} keys`);
      assertString(value.value, `${fieldName}.value`);
      if (isSensitiveIdentifier(value.value)) {
        throw new Error("Invalid ScriptDOM result: unredacted sensitive identifier");
      }
      return {
        name: value.name,
        kind: "identifier",
        state: "present",
        value: value.value
      };
    }
    assertExactKeysLocal(value, identifierRedactedAttributeKeys, `${fieldName} keys`);
    if (value.profile !== INTROSPECTOR_PROJECTION_ABI.identifierRedactionProfile || !redactedReasons.has(String(value.reason))) {
      throw new Error("Invalid ScriptDOM result: structural identifier redaction");
    }
    return {
      name: value.name,
      kind: "identifier",
      state: "redacted",
      profile: INTROSPECTOR_PROJECTION_ABI.identifierRedactionProfile,
      reason: value.reason
    };
  }
  assertExactKeysLocal(value, scalarAttributeKeys, `${fieldName} keys`);
  if (typeof value.value !== "string" && typeof value.value !== "boolean") {
    throw new Error("Invalid ScriptDOM result: structural scalar attribute value");
  }
  const allowedValues = scalarAttributeValueSets.get(policyKey);
  if (!allowedValues?.has(value.value)) {
    throw new Error("Invalid ScriptDOM result: structural scalar attribute value");
  }
  return {
    name: value.name,
    kind: value.kind,
    value: value.value
  };
}
function attributePolicyKey(nodeKind, attributeName, attributeKind) {
  return `${nodeKind}\0${attributeName}\0${attributeKind}`;
}
function edgePolicyKey(parentKind, edgeName) {
  return `${parentKind}\0${edgeName}`;
}
function validateSpan(sql, value, fieldName) {
  assertObject(value, fieldName);
  assertExactKeysLocal(value, spanKeys, `${fieldName} keys`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertPositiveInteger(value.length, `${fieldName}.length`);
  assertPositiveInteger(value.line, `${fieldName}.line`);
  assertPositiveInteger(value.column, `${fieldName}.column`);
  if (value.offset + value.length > sql.length) {
    throw new Error("Invalid ScriptDOM result: span range");
  }
  return {
    offset: value.offset,
    length: value.length,
    line: value.line,
    column: value.column
  };
}
function validateToken(sql, value, fieldName) {
  assertObject(value, fieldName);
  assertExactKeysLocal(value, tokenKeys, `${fieldName} keys`);
  assertNonNegativeInteger(value.type, `${fieldName}.type`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertPositiveInteger(value.length, `${fieldName}.length`);
  assertPositiveInteger(value.line, `${fieldName}.line`);
  assertPositiveInteger(value.column, `${fieldName}.column`);
  if (!tokenTypeSet.has(value.type)) {
    throw new Error("Invalid ScriptDOM result: token type");
  }
  if (value.offset + value.length > sql.length) {
    throw new Error("Invalid ScriptDOM result: token range");
  }
  return {
    type: value.type,
    offset: value.offset,
    length: value.length,
    line: value.line,
    column: value.column
  };
}
function validateInspectError(sql, value, fieldName) {
  assertObject(value, fieldName);
  assertExactKeysLocal(value, errorKeys, `${fieldName} keys`);
  assertInteger(value.number, `${fieldName}.number`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertPositiveInteger(value.line, `${fieldName}.line`);
  assertPositiveInteger(value.column, `${fieldName}.column`);
  if (!coordinateStateSet.has(String(value.coordinateState))) {
    throw new Error("Invalid ScriptDOM result: error coordinate state");
  }
  if (value.coordinateState === "available" && value.offset > sql.length) {
    throw new Error("Invalid ScriptDOM result: location error range");
  }
  if (value.coordinateState === "unavailable" && (value.offset !== 0 || value.line !== 1 || value.column !== 1)) {
    throw new Error("Invalid ScriptDOM result: unavailable location error");
  }
  return {
    number: value.number,
    offset: value.offset,
    line: value.line,
    column: value.column,
    coordinateState: value.coordinateState
  };
}
function validateArray(value, fieldName, maxItems, validateItem) {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
  if (value.length > maxItems) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName} limit`);
  }
  return value.map((item, index) => validateItem(item, index));
}
function assertPositiveInteger(value, fieldName) {
  assertInteger(value, fieldName);
  if (value <= 0) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertExactKeysLocal(value, expectedKeys, fieldName) {
  const actualKeys = Object.keys(value);
  if (actualKeys.length !== expectedKeys.size || actualKeys.some((key) => !expectedKeys.has(key))) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertRequiredAllowedKeysLocal(value, requiredKeys, allowedKeys, fieldName) {
  const actualKeys = Object.keys(value);
  if ([...requiredKeys].some((key) => !Object.hasOwn(value, key)) || actualKeys.some((key) => !allowedKeys.has(key))) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertAllowedOwnKeys(options, allowedKeys, fieldName) {
  let ownKeys;
  try {
    ownKeys = Reflect.ownKeys(options);
  } catch {
    throw new TypeError(`${fieldName} could not be validated`);
  }
  if (ownKeys.some((key) => !allowedKeys.has(key))) {
    throw new TypeError(`${fieldName} contain an unsupported key`);
  }
}
function readOwnDataProperty(options, key, fieldName) {
  let descriptor;
  try {
    descriptor = Object.getOwnPropertyDescriptor(options, key);
  } catch {
    throw new TypeError(`${fieldName} options could not be validated`);
  }
  if (!descriptor) {
    return void 0;
  }
  if (!Object.hasOwn(descriptor, "value")) {
    throw new TypeError(`${fieldName} options must use data properties`);
  }
  return descriptor.value;
}
function isWellFormedUtf16(value) {
  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index);
    if (code >= 55296 && code <= 56319) {
      const next = value.charCodeAt(index + 1);
      if (next < 56320 || next > 57343) {
        return false;
      }
      index += 1;
      continue;
    }
    if (code >= 56320 && code <= 57343) {
      return false;
    }
  }
  return true;
}
function isSensitiveIdentifier(value) {
  const lowerValue = value.toLocaleLowerCase("en-US");
  return [
    "secret",
    "password",
    "passwd",
    "pwd",
    "token",
    "apikey",
    "api_key",
    "credential",
    "privatekey",
    "private_key"
  ].some((fragment) => lowerValue.includes(fragment));
}

// src/marker-collisions.ts
var singleQuote = 39;
var doubleQuote = 34;
var openBracket = 91;
var closeBracket = 93;
var hyphen = 45;
var slash = 47;
var asterisk = 42;
var carriageReturn = 13;
var lineFeed = 10;
var zero = 48;
var nine = 57;
var upperA = 65;
var upperZ = 90;
var lowerA = 97;
var lowerZ = 122;
var underscore = 95;
var atSign = 64;
var numberSign = 35;
var dollarSign = 36;
var maxTsqlVariableNameLength = 128;
function collectReservedMarkerIndexes(sql, markerPrefix, markerSuffix = "") {
  const reservedIndexes = /* @__PURE__ */ new Set();
  let position = 0;
  while (position < sql.length) {
    const current = sql.charCodeAt(position);
    const next = sql.charCodeAt(position + 1);
    if (current === singleQuote) {
      position = scanSingleQuotedRegion(sql, position);
      continue;
    }
    if (current === doubleQuote) {
      position = scanDoubleQuotedRegion(sql, position);
      continue;
    }
    if (current === openBracket) {
      position = scanBracketedIdentifier(sql, position);
      continue;
    }
    if (current === hyphen && next === hyphen) {
      position = scanLineComment(sql, position);
      continue;
    }
    if (current === slash && next === asterisk) {
      position = scanBlockComment(sql, position);
      continue;
    }
    const markerMatch = matchMarker(sql, position, markerPrefix, markerSuffix);
    if (markerMatch) {
      reservedIndexes.add(markerMatch.index);
      position = markerMatch.end;
      continue;
    }
    position += 1;
  }
  return reservedIndexes;
}
function nextAvailableMarkerIndex(startIndex, reservedIndexes, context) {
  let index = startIndex;
  while (reservedIndexes.has(index)) {
    index += 1;
    if (!Number.isSafeInteger(index)) {
      throw new RangeError(`${context} generated marker index is out of range`);
    }
  }
  return index;
}
function createMarker(marker, index, context) {
  if (!Number.isSafeInteger(index)) {
    throw new RangeError(`${context} generated marker index is out of range`);
  }
  const value = `${marker.markerPrefix}${index}${marker.markerSuffix}`;
  if (value.length > maxTsqlVariableNameLength) {
    throw new RangeError(`${context} generated variable name is too long`);
  }
  return value;
}
function assertCollisionPrefix(markerPrefix, context) {
  if (markerPrefix.length === 0) {
    throw new TypeError(`${context} collision-aware marker prefix must be non-empty`);
  }
  if (isAsciiDigit(markerPrefix.charCodeAt(markerPrefix.length - 1))) {
    throw new TypeError(`${context} collision-aware marker prefix must not end with a digit`);
  }
}
function matchMarker(sql, position, markerPrefix, markerSuffix) {
  if (!sql.startsWith(markerPrefix, position)) {
    return void 0;
  }
  if (position > 0 && isMarkerIdentifierContinuation(sql.charCodeAt(position - 1))) {
    return void 0;
  }
  let numberStart = position + markerPrefix.length;
  let numberEnd = numberStart;
  while (numberEnd < sql.length && isAsciiDigit(sql.charCodeAt(numberEnd))) {
    numberEnd += 1;
  }
  if (numberEnd === numberStart) {
    return void 0;
  }
  if (markerSuffix && !sql.startsWith(markerSuffix, numberEnd)) {
    return void 0;
  }
  const end = numberEnd + markerSuffix.length;
  if (end < sql.length && isMarkerIdentifierContinuation(sql.charCodeAt(end))) {
    return void 0;
  }
  const index = Number(sql.slice(numberStart, numberEnd));
  if (!Number.isSafeInteger(index)) {
    return void 0;
  }
  return { index, end };
}
function scanSingleQuotedRegion(sql, start) {
  let position = start + 1;
  while (position < sql.length) {
    if (sql.charCodeAt(position) === singleQuote) {
      if (sql.charCodeAt(position + 1) === singleQuote) {
        position += 2;
        continue;
      }
      return position + 1;
    }
    position += 1;
  }
  return sql.length;
}
function scanDoubleQuotedRegion(sql, start) {
  let position = start + 1;
  while (position < sql.length) {
    if (sql.charCodeAt(position) === doubleQuote) {
      if (sql.charCodeAt(position + 1) === doubleQuote) {
        position += 2;
        continue;
      }
      return position + 1;
    }
    position += 1;
  }
  return sql.length;
}
function scanBracketedIdentifier(sql, start) {
  let position = start + 1;
  while (position < sql.length) {
    if (sql.charCodeAt(position) === closeBracket) {
      if (sql.charCodeAt(position + 1) === closeBracket) {
        position += 2;
        continue;
      }
      return position + 1;
    }
    position += 1;
  }
  return sql.length;
}
function scanLineComment(sql, start) {
  let position = start + 2;
  while (position < sql.length) {
    const current = sql.charCodeAt(position);
    if (current === carriageReturn || current === lineFeed) {
      return position;
    }
    position += 1;
  }
  return sql.length;
}
function scanBlockComment(sql, start) {
  let depth = 1;
  let position = start + 2;
  while (position < sql.length) {
    const current = sql.charCodeAt(position);
    const next = sql.charCodeAt(position + 1);
    if (current === slash && next === asterisk) {
      depth += 1;
      position += 2;
      continue;
    }
    if (current === asterisk && next === slash) {
      depth -= 1;
      position += 2;
      if (depth === 0) {
        return position;
      }
      continue;
    }
    position += 1;
  }
  return sql.length;
}
function isMarkerIdentifierContinuation(charCode) {
  return isAsciiDigit(charCode) || charCode >= upperA && charCode <= upperZ || charCode >= lowerA && charCode <= lowerZ || charCode === underscore || charCode === atSign || charCode === numberSign || charCode === dollarSign;
}
function isAsciiDigit(charCode) {
  return charCode >= zero && charCode <= nine;
}

// src/token-result.ts
var resultKeys = /* @__PURE__ */ new Set(["failed", "tokens", "errors"]);
var tokenKeys2 = /* @__PURE__ */ new Set(["type", "offset", "length", "line", "column"]);
function parseAndValidateTokenizeResult(sql, rawJson) {
  return validateTsqlTokenizeResult(sql, JSON.parse(rawJson));
}
function validateTsqlTokenizeResult(sql, tokenizeResult) {
  if (typeof sql !== "string") {
    throw new TypeError("SQL input must be a string");
  }
  assertObject(tokenizeResult, "tokenize result");
  assertExactKeys(tokenizeResult, resultKeys, "tokenize result keys");
  if (typeof tokenizeResult.failed !== "boolean") {
    throw new Error("Invalid ScriptDOM result: tokenize result failed");
  }
  if (!Array.isArray(tokenizeResult.tokens) || !Array.isArray(tokenizeResult.errors)) {
    throw new Error("Invalid ScriptDOM result: tokenize result arrays");
  }
  const tokens = tokenizeResult.tokens.map((token, index) => {
    assertObject(token, `tokens[${index}]`);
    assertExactKeys(token, tokenKeys2, `tokens[${index}] keys`);
    assertNonNegativeInteger(token.type, `tokens[${index}].type`);
    assertNonNegativeInteger(token.offset, `tokens[${index}].offset`);
    assertNonNegativeInteger(token.length, `tokens[${index}].length`);
    assertNonNegativeInteger(token.line, `tokens[${index}].line`);
    assertNonNegativeInteger(token.column, `tokens[${index}].column`);
    if (token.offset > sql.length || token.offset + token.length > sql.length) {
      throw new Error("Invalid ScriptDOM result: token range");
    }
    return {
      type: token.type,
      offset: token.offset,
      length: token.length,
      line: token.line,
      column: token.column
    };
  });
  const errors = tokenizeResult.errors.map(
    (error, index) => validateLocationError(error, `errors[${index}]`, sql.length)
  );
  return {
    failed: tokenizeResult.failed,
    tokens,
    errors
  };
}

// src/token-policy.ts
var literalProbeSql = [
  "'x'",
  "N'x'",
  '"x"',
  "1",
  "1.1",
  "1E1",
  "0x01",
  "$1.00"
];
var commentProbeSql = ["-- x\nselect 1", "/* x */ select 1"];
function initializeTokenPolicy(tokenize) {
  return {
    literalTokenTypes: new Set(literalProbeSql.map((sql) => firstTokenType(tokenize, sql))),
    commentTokenTypes: new Set(commentProbeSql.map((sql) => firstTokenType(tokenize, sql)))
  };
}
function applyTsqlSanitizerPolicy(sql, tokenizeResult, tokenPolicy, options) {
  validateTsqlTokenizeResult(sql, tokenizeResult);
  let sanitized = "";
  let cursor = 0;
  const literalMarkerState = createLiteralMarkerState(sql, options.literalMarker);
  for (const token of tokenizeResult.tokens) {
    if (token.offset < cursor) {
      throw new Error("Invalid ScriptDOM result: token ordering");
    }
    sanitized += sql.slice(cursor, token.offset);
    if (tokenPolicy.literalTokenTypes.has(token.type)) {
      sanitized += nextLiteralMarker(literalMarkerState);
    } else if (tokenPolicy.commentTokenTypes.has(token.type)) {
      sanitized += " ".repeat(token.length);
    } else {
      sanitized += sql.slice(token.offset, token.offset + token.length);
    }
    cursor = token.offset + token.length;
  }
  sanitized += sql.slice(cursor);
  return sanitized;
}
function createLiteralMarkerState(sql, options) {
  if (options.kind === "fixed") {
    return options;
  }
  return {
    ...options,
    nextIndex: options.startAt,
    reservedIndexes: options.avoidExisting ? collectReservedMarkerIndexes(sql, options.marker.markerPrefix, options.marker.markerSuffix) : /* @__PURE__ */ new Set()
  };
}
function nextLiteralMarker(state) {
  if (state.kind === "fixed") {
    return state.value;
  }
  state.nextIndex = nextAvailableMarkerIndex(
    state.nextIndex,
    state.reservedIndexes,
    "createTsqlSanitizer"
  );
  const marker = createMarker(state.marker, state.nextIndex, "createTsqlSanitizer");
  state.reservedIndexes.add(state.nextIndex);
  state.nextIndex += 1;
  return marker;
}
function firstTokenType(tokenize, sql) {
  const tokenizeResult = validateTsqlTokenizeResult(sql, tokenize(sql));
  if (tokenizeResult.failed || tokenizeResult.tokens.length === 0) {
    throw new Error("Unable to initialize ScriptDOM token policy");
  }
  return tokenizeResult.tokens[0].type;
}

// src/tokenizer-runtime.ts
var import_node_path3 = __toESM(require("node:path"), 1);
var defaultTokenizerAppBundlePath = import_node_path3.default.resolve(
  __scriptdomBridgeModuleDirectory,
  "../vendor/scriptdom-tokenizer-wasm/AppBundle"
);
async function loadTsqlTokenizerRuntime(options = {}) {
  return loadWasmRuntime({
    appBundlePath: import_node_path3.default.resolve(options.appBundlePath ?? defaultTokenizerAppBundlePath),
    bundleKind: "tokenizer",
    missingBundleMessage: (dotnetJsPath) => `Published tokenizer dotnet.js was not found at ${dotnetJsPath}. Run "npm run build:wasm" before using the package from source.`,
    createRuntime(assemblyExports) {
      const bridgeNamespace = getBridgeNamespace(assemblyExports);
      const tokenizer = bridgeNamespace.TsqlTokenizer;
      if (!tokenizer || typeof tokenizer !== "object" || Array.isArray(tokenizer)) {
        throw new Error("Invalid ScriptDOM WASM export: TsqlTokenizer");
      }
      const tokenizeJson = getFunctionProperty(
        tokenizer,
        "TokenizeJson",
        "TsqlTokenizer.TokenizeJson"
      );
      return {
        tokenize(sql) {
          if (typeof sql !== "string") {
            throw new TypeError("SQL input must be a string");
          }
          const rawJson = tokenizeJson(sql);
          if (typeof rawJson !== "string") {
            throw new Error("Invalid ScriptDOM WASM export: tokenizer JSON result");
          }
          return parseAndValidateTokenizeResult(sql, rawJson);
        }
      };
    }
  });
}

// src/sanitizer.ts
var tokenPolicyCache = /* @__PURE__ */ new WeakMap();
var defaultLiteralPlaceholder = "?";
var defaultLiteralPlaceholderStartAt = 0;
var indexToken = "{index}";
var maxLiteralPlaceholderLength = 128;
async function createTsqlSanitizer(options = {}) {
  const normalizedOptions = normalizeOptions(options);
  const runtime = await loadTsqlTokenizerRuntime({
    appBundlePath: normalizedOptions.appBundlePath
  });
  const tokenPolicy = getTokenPolicy(runtime);
  return {
    sanitize(sql) {
      if (typeof sql !== "string") {
        throw new TypeError("SQL input must be a string");
      }
      const tokenizeResult = runtime.tokenize(sql);
      if (tokenizeResult.failed) {
        return {
          sql: "",
          tokenizationFailed: true,
          diagnostics: tokenizeResult.errors.map(toDiagnostic)
        };
      }
      return {
        sql: applyTsqlSanitizerPolicy(sql, tokenizeResult, tokenPolicy, {
          literalMarker: normalizedOptions.literalMarker
        }),
        tokenizationFailed: false,
        diagnostics: []
      };
    }
  };
}
function normalizeOptions(options) {
  if (options === null || typeof options !== "object" || Array.isArray(options)) {
    throw new TypeError("createTsqlSanitizer options must be an object");
  }
  const appBundlePath = readOwnDataProperty2(options, "appBundlePath");
  const literalPlaceholder = readOwnDataProperty2(options, "literalPlaceholder");
  const literalPlaceholderStartAt = readOwnDataProperty2(options, "literalPlaceholderStartAt");
  const avoidExistingLiteralPlaceholders = readOwnDataProperty2(
    options,
    "avoidExistingLiteralPlaceholders"
  );
  if (appBundlePath !== void 0 && typeof appBundlePath !== "string") {
    throw new TypeError("createTsqlSanitizer appBundlePath must be a string");
  }
  if (literalPlaceholder !== void 0 && typeof literalPlaceholder !== "string") {
    throw new TypeError("createTsqlSanitizer literalPlaceholder must be a string");
  }
  if (literalPlaceholderStartAt !== void 0 && typeof literalPlaceholderStartAt !== "number") {
    throw new TypeError("createTsqlSanitizer literalPlaceholderStartAt must be a number");
  }
  if (avoidExistingLiteralPlaceholders !== void 0 && typeof avoidExistingLiteralPlaceholders !== "boolean") {
    throw new TypeError("createTsqlSanitizer avoidExistingLiteralPlaceholders must be a boolean");
  }
  const normalizedLiteralPlaceholder = literalPlaceholder ?? defaultLiteralPlaceholder;
  const normalizedStartAt = literalPlaceholderStartAt ?? defaultLiteralPlaceholderStartAt;
  const normalizedAvoidExisting = avoidExistingLiteralPlaceholders ?? false;
  if (!Number.isSafeInteger(normalizedStartAt) || normalizedStartAt < 0) {
    throw new RangeError(
      "createTsqlSanitizer literalPlaceholderStartAt must be a non-negative safe integer"
    );
  }
  return {
    appBundlePath,
    literalMarker: createLiteralMarkerOptions(
      normalizedLiteralPlaceholder,
      normalizedStartAt,
      normalizedAvoidExisting
    )
  };
}
function createLiteralMarkerOptions(literalPlaceholder, startAt, avoidExisting) {
  if (literalPlaceholder.length === 0) {
    throw new TypeError("createTsqlSanitizer literalPlaceholder must be non-empty");
  }
  const firstIndexToken = literalPlaceholder.indexOf(indexToken);
  if (firstIndexToken === -1) {
    if (literalPlaceholder.length > maxLiteralPlaceholderLength) {
      throw new RangeError("createTsqlSanitizer literalPlaceholder is too long");
    }
    if (avoidExisting) {
      throw new TypeError(
        "createTsqlSanitizer avoidExistingLiteralPlaceholders requires an indexed literalPlaceholder"
      );
    }
    return {
      kind: "fixed",
      value: literalPlaceholder
    };
  }
  if (literalPlaceholder.indexOf(indexToken, firstIndexToken + indexToken.length) !== -1) {
    throw new TypeError("createTsqlSanitizer literalPlaceholder must contain at most one index token");
  }
  const markerPrefix = literalPlaceholder.slice(0, firstIndexToken);
  const markerSuffix = literalPlaceholder.slice(firstIndexToken + indexToken.length);
  if (avoidExisting) {
    if (markerSuffix.length > 0) {
      throw new TypeError(
        "createTsqlSanitizer avoidExistingLiteralPlaceholders requires a prefix-only literalPlaceholder"
      );
    }
    assertCollisionPrefix(markerPrefix, "createTsqlSanitizer");
  }
  return {
    kind: "indexed",
    marker: {
      markerPrefix,
      markerSuffix
    },
    startAt,
    avoidExisting
  };
}
function readOwnDataProperty2(options, key) {
  let descriptor;
  try {
    descriptor = Object.getOwnPropertyDescriptor(options, key);
  } catch {
    throw new TypeError("createTsqlSanitizer options could not be validated");
  }
  if (!descriptor) {
    return void 0;
  }
  if (!Object.hasOwn(descriptor, "value")) {
    throw new TypeError("createTsqlSanitizer options must use data properties");
  }
  return descriptor.value;
}
function getTokenPolicy(runtime) {
  const cachedPolicy = tokenPolicyCache.get(runtime);
  if (cachedPolicy) {
    return cachedPolicy;
  }
  const tokenPolicy = initializeTokenPolicy(runtime.tokenize);
  tokenPolicyCache.set(runtime, tokenPolicy);
  return tokenPolicy;
}
function toDiagnostic(error) {
  return {
    kind: "tokenization-error",
    number: error.number,
    offset: error.offset,
    line: error.line,
    column: error.column
  };
}

// src/tokenizer.ts
async function createTsqlTokenizer(options = {}) {
  const runtime = await loadTsqlTokenizerRuntime(options);
  return {
    tokenize: runtime.tokenize
  };
}

// src/placeholders.ts
var singleQuote2 = 39;
var doubleQuote2 = 34;
var openBracket2 = 91;
var closeBracket2 = 93;
var hyphen2 = 45;
var slash2 = 47;
var asterisk2 = 42;
var questionMark = 63;
var carriageReturn2 = 13;
var lineFeed2 = 10;
var defaultStyle = "question-mark";
var defaultPrefix = "@p";
var defaultStartAt = 0;
var allowedOptionKeys = /* @__PURE__ */ new Set(["style", "prefix", "startAt", "avoidExisting"]);
function normalizeTsqlPlaceholders(sql, options) {
  if (typeof sql !== "string") {
    throw new TypeError("SQL input must be a string");
  }
  const { prefix, startAt, avoidExisting } = normalizeOptions2(options);
  const reservedIndexes = avoidExisting ? collectReservedMarkerIndexes(sql, prefix) : /* @__PURE__ */ new Set();
  const outputParts = [];
  let placeholderCount = 0;
  let nextIndex = startAt;
  let position = 0;
  let copiedUntil = 0;
  while (position < sql.length) {
    const current = sql.charCodeAt(position);
    const next = sql.charCodeAt(position + 1);
    if (current === singleQuote2) {
      position = scanSingleQuotedRegion2(sql, position);
      continue;
    }
    if (current === doubleQuote2) {
      position = scanDoubleQuotedRegion2(sql, position);
      continue;
    }
    if (current === openBracket2) {
      position = scanBracketedIdentifier2(sql, position);
      continue;
    }
    if (current === hyphen2 && next === hyphen2) {
      position = scanLineComment2(sql, position);
      continue;
    }
    if (current === slash2 && next === asterisk2) {
      position = scanBlockComment2(sql, position);
      continue;
    }
    if (current === questionMark) {
      if (next === questionMark) {
        throw new TypeError(
          "normalizeTsqlPlaceholders does not support adjacent question-mark placeholders"
        );
      }
      outputParts.push(sql.slice(copiedUntil, position));
      nextIndex = nextAvailableMarkerIndex(
        nextIndex,
        reservedIndexes,
        "normalizeTsqlPlaceholders"
      );
      outputParts.push(createPlaceholder(prefix, nextIndex));
      reservedIndexes.add(nextIndex);
      nextIndex += 1;
      placeholderCount += 1;
      position += 1;
      copiedUntil = position;
      continue;
    }
    position += 1;
  }
  if (outputParts.length === 0) {
    return { sql, placeholderCount };
  }
  outputParts.push(sql.slice(copiedUntil));
  return {
    sql: outputParts.join(""),
    placeholderCount
  };
}
function normalizeOptions2(options) {
  if (options === void 0) {
    return {
      prefix: defaultPrefix,
      startAt: defaultStartAt,
      avoidExisting: false
    };
  }
  if (options === null || typeof options !== "object" || Array.isArray(options)) {
    throw new TypeError("normalizeTsqlPlaceholders options must be an object");
  }
  for (const key of readOwnKeys(options)) {
    if (typeof key !== "string" || !allowedOptionKeys.has(key)) {
      throw new TypeError("normalizeTsqlPlaceholders options contain an unsupported key");
    }
  }
  const style = readOwnDataProperty3(options, "style");
  const prefix = readOwnDataProperty3(options, "prefix");
  const startAt = readOwnDataProperty3(options, "startAt");
  const avoidExisting = readOwnDataProperty3(options, "avoidExisting");
  if (style !== void 0 && style !== defaultStyle) {
    throw new TypeError('normalizeTsqlPlaceholders style must be "question-mark"');
  }
  if (prefix !== void 0 && typeof prefix !== "string") {
    throw new TypeError("normalizeTsqlPlaceholders prefix must be a string");
  }
  if (startAt !== void 0 && typeof startAt !== "number") {
    throw new TypeError("normalizeTsqlPlaceholders startAt must be a number");
  }
  if (avoidExisting !== void 0 && typeof avoidExisting !== "boolean") {
    throw new TypeError("normalizeTsqlPlaceholders avoidExisting must be a boolean");
  }
  const normalizedStartAt = startAt ?? defaultStartAt;
  const normalizedPrefix = prefix ?? defaultPrefix;
  const normalizedAvoidExisting = avoidExisting ?? false;
  if (!Number.isSafeInteger(normalizedStartAt) || normalizedStartAt < 0) {
    throw new RangeError("normalizeTsqlPlaceholders startAt must be a non-negative safe integer");
  }
  if (normalizedAvoidExisting) {
    assertCollisionPrefix(normalizedPrefix, "normalizeTsqlPlaceholders");
  }
  return {
    prefix: normalizedPrefix,
    startAt: normalizedStartAt,
    avoidExisting: normalizedAvoidExisting
  };
}
function readOwnKeys(options) {
  try {
    return Reflect.ownKeys(options);
  } catch {
    throw new TypeError("normalizeTsqlPlaceholders options could not be validated");
  }
}
function readOwnDataProperty3(options, key) {
  let descriptor;
  try {
    descriptor = Object.getOwnPropertyDescriptor(options, key);
  } catch {
    throw new TypeError("normalizeTsqlPlaceholders options could not be validated");
  }
  if (!descriptor) {
    return void 0;
  }
  if (!Object.hasOwn(descriptor, "value")) {
    throw new TypeError("normalizeTsqlPlaceholders options must use data properties");
  }
  return descriptor.value;
}
function createPlaceholder(prefix, index) {
  return createMarker(
    {
      markerPrefix: prefix,
      markerSuffix: ""
    },
    index,
    "normalizeTsqlPlaceholders"
  );
}
function scanSingleQuotedRegion2(sql, start) {
  let position = start + 1;
  while (position < sql.length) {
    if (sql.charCodeAt(position) === singleQuote2) {
      if (sql.charCodeAt(position + 1) === singleQuote2) {
        position += 2;
        continue;
      }
      return position + 1;
    }
    position += 1;
  }
  return sql.length;
}
function scanDoubleQuotedRegion2(sql, start) {
  let position = start + 1;
  while (position < sql.length) {
    if (sql.charCodeAt(position) === doubleQuote2) {
      if (sql.charCodeAt(position + 1) === doubleQuote2) {
        position += 2;
        continue;
      }
      return position + 1;
    }
    position += 1;
  }
  return sql.length;
}
function scanBracketedIdentifier2(sql, start) {
  let position = start + 1;
  while (position < sql.length) {
    if (sql.charCodeAt(position) === closeBracket2) {
      if (sql.charCodeAt(position + 1) === closeBracket2) {
        position += 2;
        continue;
      }
      return position + 1;
    }
    position += 1;
  }
  return sql.length;
}
function scanLineComment2(sql, start) {
  let position = start + 2;
  while (position < sql.length) {
    const current = sql.charCodeAt(position);
    if (current === carriageReturn2 || current === lineFeed2) {
      return position;
    }
    position += 1;
  }
  return sql.length;
}
function scanBlockComment2(sql, start) {
  let depth = 1;
  let position = start + 2;
  while (position < sql.length) {
    const current = sql.charCodeAt(position);
    const next = sql.charCodeAt(position + 1);
    if (current === slash2 && next === asterisk2) {
      depth += 1;
      position += 2;
      continue;
    }
    if (current === asterisk2 && next === slash2) {
      depth -= 1;
      position += 2;
      if (depth === 0) {
        return position;
      }
      continue;
    }
    position += 1;
  }
  return sql.length;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTsqlIntrospector,
  createTsqlSanitizer,
  createTsqlTokenizer,
  normalizeTsqlPlaceholders
});
//# sourceMappingURL=index.cjs.map
