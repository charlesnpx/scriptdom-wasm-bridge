import __scriptdomBridgePath from "node:path";
import { fileURLToPath as __scriptdomBridgeFileURLToPath } from "node:url";
const __scriptdomBridgeModuleDirectory = __scriptdomBridgePath.dirname(__scriptdomBridgeFileURLToPath(import.meta.url));

// src/introspector.ts
import path2 from "node:path";

// src/introspector-projection.v2.generated.ts
var INTROSPECTOR_PROJECTION_ABI = {
  "allowlistSha256": "03647b12fe1f822f63f06687ac05e9f8a63b65a5837c6af6d5dee4e5177ec9f7",
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
  "manifestSha256": "6f3f6c8b2d1b96825959efbbc99a5939de11a2e60687d899703358310d104d0a",
  "parser": "TSql160Parser",
  "projectionVersion": 2,
  "resultSchemaSha256": "759cbfa7cc1dcf8a47ea3985bd962b790c23018692519c6daa621db49f64cecc"
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
    "childKinds": [
      "FullTextIndexColumn"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "AddAlterFullTextIndexAction"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "FileName",
    "parentKind": "AddFileSpec"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "AddFileSpec"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Member",
    "parentKind": "AddMemberAlterRoleAction"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Description",
    "parentKind": "AddSearchPropertyListAction"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Guid",
    "parentKind": "AddSearchPropertyListAction"
  },
  {
    "childKinds": [
      "IntegerLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Id",
    "parentKind": "AddSearchPropertyListAction"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PropertyName",
    "parentKind": "AddSearchPropertyListAction"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "AddSensitivityClassificationStatement"
  },
  {
    "childKinds": [
      "SensitivityClassificationOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AddSensitivityClassificationStatement"
  },
  {
    "childKinds": [
      "CryptoMechanism"
    ],
    "edgeKind": "array",
    "edgeName": "Cryptos",
    "parentKind": "AddSignatureStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Element",
    "parentKind": "AddSignatureStatement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "InitString",
    "parentKind": "AdHocDataSource"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ProviderName",
    "parentKind": "AdHocDataSource"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "AdHocTableReference"
  },
  {
    "childKinds": [
      "AdHocDataSource"
    ],
    "edgeKind": "single",
    "edgeName": "DataSource",
    "parentKind": "AdHocTableReference"
  },
  {
    "childKinds": [
      "SchemaObjectNameOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Object",
    "parentKind": "AdHocTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIAnalyzeSentimentFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AIAnalyzeSentimentFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIClassifyFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AIClassifyFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Labels",
    "parentKind": "AIClassifyFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIExtractFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AIExtractFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Labels",
    "parentKind": "AIExtractFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIFixGrammarFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AIFixGrammarFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "AIGenerateChunksTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ChunkType",
    "parentKind": "AIGenerateChunksTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Source",
    "parentKind": "AIGenerateChunksTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIGenerateEmbeddingsFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AIGenerateEmbeddingsFunctionCall"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ModelName",
    "parentKind": "AIGenerateEmbeddingsFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "OptionalParameters",
    "parentKind": "AIGenerateEmbeddingsFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ChunkSize",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ChunkType",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "EnableChunkSetId",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Overlap",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Source",
    "parentKind": "AIGenerateFixedChunksTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AIGenerateResponseFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "PromptPart1",
    "parentKind": "AIGenerateResponseFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "PromptPart2",
    "parentKind": "AIGenerateResponseFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AISummarizeFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AISummarizeFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AITranslateFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Input",
    "parentKind": "AITranslateFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Language",
    "parentKind": "AITranslateFunctionCall"
  },
  {
    "childKinds": [
      "ApplicationRoleOption"
    ],
    "edgeKind": "array",
    "edgeName": "ApplicationRoleOptions",
    "parentKind": "AlterApplicationRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterApplicationRoleStatement"
  },
  {
    "childKinds": [
      "AddFileSpec"
    ],
    "edgeKind": "array",
    "edgeName": "AddFiles",
    "parentKind": "AlterAssemblyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "array",
    "edgeName": "DropFiles",
    "parentKind": "AlterAssemblyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterAssemblyStatement"
  },
  {
    "childKinds": [
      "AssemblyOption",
      "OnOffAssemblyOption",
      "PermissionSetAssemblyOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterAssemblyStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "AlterAssemblyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "AttestedBy",
    "parentKind": "AlterAsymmetricKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "DecryptionPassword",
    "parentKind": "AlterAsymmetricKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "EncryptionPassword",
    "parentKind": "AlterAsymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterAsymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "PrincipalName",
    "parentKind": "AlterAuthorizationStatement"
  },
  {
    "childKinds": [
      "SecurityTargetObject"
    ],
    "edgeKind": "single",
    "edgeName": "SecurityTargetObject",
    "parentKind": "AlterAuthorizationStatement"
  },
  {
    "childKinds": [
      "AlterAvailabilityGroupFailoverOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterAvailabilityGroupFailoverAction"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "AlterAvailabilityGroupFailoverOption"
  },
  {
    "childKinds": [
      "AlterAvailabilityGroupAction",
      "AlterAvailabilityGroupFailoverAction"
    ],
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterAvailabilityGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Databases",
    "parentKind": "AlterAvailabilityGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterAvailabilityGroupStatement"
  },
  {
    "childKinds": [
      "LiteralAvailabilityGroupOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterAvailabilityGroupStatement"
  },
  {
    "childKinds": [
      "AvailabilityReplica"
    ],
    "edgeKind": "array",
    "edgeName": "Replicas",
    "parentKind": "AlterAvailabilityGroupStatement"
  },
  {
    "childKinds": [
      "BrokerPriorityParameter"
    ],
    "edgeKind": "array",
    "edgeName": "BrokerPriorityParameters",
    "parentKind": "AlterBrokerPriorityStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterBrokerPriorityStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "AttestedBy",
    "parentKind": "AlterCertificateStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "DecryptionPassword",
    "parentKind": "AlterCertificateStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "EncryptionPassword",
    "parentKind": "AlterCertificateStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterCertificateStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PrivateKeyPath",
    "parentKind": "AlterCertificateStatement"
  },
  {
    "childKinds": [
      "FullTextIndexColumn"
    ],
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "AlterColumnAlterFullTextIndexAction"
  },
  {
    "childKinds": [
      "ColumnEncryptionKeyValue"
    ],
    "edgeKind": "array",
    "edgeName": "ColumnEncryptionKeyValues",
    "parentKind": "AlterColumnEncryptionKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterColumnEncryptionKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Identity",
    "parentKind": "AlterCredentialStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterCredentialStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Secret",
    "parentKind": "AlterCredentialStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "AlterCryptographicProviderStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterCryptographicProviderStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseAddFileGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "AlterDatabaseAddFileGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseAddFileStatement"
  },
  {
    "childKinds": [
      "FileDeclaration"
    ],
    "edgeKind": "array",
    "edgeName": "FileDeclarations",
    "parentKind": "AlterDatabaseAddFileStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "AlterDatabaseAddFileStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "AlterDatabaseAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "AuditSpecificationPart"
    ],
    "edgeKind": "array",
    "edgeName": "Parts",
    "parentKind": "AlterDatabaseAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SpecificationName",
    "parentKind": "AlterDatabaseAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AlterDatabaseCollateStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseCollateStatement"
  },
  {
    "childKinds": [
      "CryptoMechanism"
    ],
    "edgeKind": "single",
    "edgeName": "Encryptor",
    "parentKind": "AlterDatabaseEncryptionKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseModifyFileGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "AlterDatabaseModifyFileGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "NewFileGroupName",
    "parentKind": "AlterDatabaseModifyFileGroupStatement"
  },
  {
    "childKinds": [
      "AlterDatabaseTermination"
    ],
    "edgeKind": "single",
    "edgeName": "Termination",
    "parentKind": "AlterDatabaseModifyFileGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseModifyFileStatement"
  },
  {
    "childKinds": [
      "FileDeclaration"
    ],
    "edgeKind": "single",
    "edgeName": "FileDeclaration",
    "parentKind": "AlterDatabaseModifyFileStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseModifyNameStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "NewDatabaseName",
    "parentKind": "AlterDatabaseModifyNameStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabasePerformCutoverStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseRebuildLogStatement"
  },
  {
    "childKinds": [
      "FileDeclaration"
    ],
    "edgeKind": "single",
    "edgeName": "FileDeclaration",
    "parentKind": "AlterDatabaseRebuildLogStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseRemoveFileGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "AlterDatabaseRemoveFileGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseRemoveFileStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "AlterDatabaseRemoveFileStatement"
  },
  {
    "childKinds": [
      "DatabaseConfigurationClearOption"
    ],
    "edgeKind": "single",
    "edgeName": "Option",
    "parentKind": "AlterDatabaseScopedConfigurationClearStatement"
  },
  {
    "childKinds": [
      "DatabaseConfigurationSetOption",
      "DWCompatibilityLevelConfigurationOption",
      "GenericConfigurationOption",
      "MaxDopConfigurationOption",
      "OnOffPrimaryConfigurationOption"
    ],
    "edgeKind": "single",
    "edgeName": "Option",
    "parentKind": "AlterDatabaseScopedConfigurationSetStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "AlterDatabaseSetStatement"
  },
  {
    "childKinds": [
      "AcceleratedDatabaseRecoveryDatabaseOption",
      "AutoCreateStatisticsDatabaseOption",
      "AutomaticTuningDatabaseOption",
      "CatalogCollationOption",
      "ChangeTrackingDatabaseOption",
      "ContainmentDatabaseOption",
      "CursorDefaultDatabaseOption",
      "DatabaseOption",
      "DelayedDurabilityDatabaseOption",
      "ElasticPoolSpecification",
      "FileStreamDatabaseOption",
      "HadrAvailabilityGroupDatabaseOption",
      "HadrDatabaseOption",
      "IdentifierDatabaseOption",
      "LedgerOption",
      "LiteralDatabaseOption",
      "MaxSizeDatabaseOption",
      "OnOffDatabaseOption",
      "OptimizedLockingDatabaseOption",
      "PageVerifyDatabaseOption",
      "ParameterizationDatabaseOption",
      "PartnerDatabaseOption",
      "QueryStoreDatabaseOption",
      "RecoveryDatabaseOption",
      "RemoteDataArchiveDatabaseOption",
      "TargetRecoveryTimeDatabaseOption",
      "WitnessDatabaseOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterDatabaseSetStatement"
  },
  {
    "childKinds": [
      "AlterDatabaseTermination"
    ],
    "edgeKind": "single",
    "edgeName": "Termination",
    "parentKind": "AlterDatabaseSetStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "RollbackAfter",
    "parentKind": "AlterDatabaseTermination"
  },
  {
    "childKinds": [
      "EndpointAffinity"
    ],
    "edgeKind": "single",
    "edgeName": "Affinity",
    "parentKind": "AlterEndpointStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterEndpointStatement"
  },
  {
    "childKinds": [
      "AuthenticationPayloadOption",
      "CharacterSetPayloadOption",
      "EnabledDisabledPayloadOption",
      "EncryptionPayloadOption",
      "LiteralPayloadOption",
      "LoginTypePayloadOption",
      "RolePayloadOption",
      "SchemaPayloadOption",
      "SessionTimeoutPayloadOption",
      "SoapMethod",
      "WsdlPayloadOption"
    ],
    "edgeKind": "array",
    "edgeName": "PayloadOptions",
    "parentKind": "AlterEndpointStatement"
  },
  {
    "childKinds": [
      "AuthenticationEndpointProtocolOption",
      "CompressionEndpointProtocolOption",
      "ListenerIPEndpointProtocolOption",
      "LiteralEndpointProtocolOption",
      "PortsEndpointProtocolOption"
    ],
    "edgeKind": "array",
    "edgeName": "ProtocolOptions",
    "parentKind": "AlterEndpointStatement"
  },
  {
    "childKinds": [
      "EventSessionObjectName"
    ],
    "edgeKind": "array",
    "edgeName": "DropEventDeclarations",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "childKinds": [
      "EventSessionObjectName"
    ],
    "edgeKind": "array",
    "edgeName": "DropTargetDeclarations",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "childKinds": [
      "EventDeclaration"
    ],
    "edgeKind": "array",
    "edgeName": "EventDeclarations",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "childKinds": [
      "EventRetentionSessionOption",
      "LiteralSessionOption",
      "MaxDispatchLatencySessionOption",
      "MemoryPartitionSessionOption",
      "OnOffSessionOption"
    ],
    "edgeKind": "array",
    "edgeName": "SessionOptions",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "childKinds": [
      "TargetDeclaration"
    ],
    "edgeKind": "array",
    "edgeName": "TargetDeclarations",
    "parentKind": "AlterEventSessionStatement"
  },
  {
    "childKinds": [
      "ExternalDataSourceLiteralOrIdentifierOption"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalDataSourceOptions",
    "parentKind": "AlterExternalDataSourceStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Location",
    "parentKind": "AlterExternalDataSourceStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalDataSourceStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ExternalName",
    "parentKind": "AlterExternalFunctionStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalFunctionStatement"
  },
  {
    "childKinds": [
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "AlterExternalFunctionStatement"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "AlterExternalFunctionStatement"
  },
  {
    "childKinds": [
      "ExternalLanguageFileOption"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalLanguageFiles",
    "parentKind": "AlterExternalLanguageStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalLanguageStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Operation",
    "parentKind": "AlterExternalLanguageStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "AlterExternalLanguageStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Platform",
    "parentKind": "AlterExternalLanguageStatement"
  },
  {
    "childKinds": [
      "ExternalLibraryFileOption"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalLibraryFiles",
    "parentKind": "AlterExternalLibraryStatement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Language",
    "parentKind": "AlterExternalLibraryStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalLibraryStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "AlterExternalLibraryStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ApiFormat",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Credential",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "LocalRuntimePath",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Location",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ModelName",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Parameters",
    "parentKind": "AlterExternalModelStatement"
  },
  {
    "childKinds": [
      "ExternalResourcePoolParameter"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalResourcePoolParameters",
    "parentKind": "AlterExternalResourcePoolStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterExternalResourcePoolStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Boundary",
    "parentKind": "AlterFederationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DistributionName",
    "parentKind": "AlterFederationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterFederationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterFullTextCatalogStatement"
  },
  {
    "childKinds": [
      "OnOffFullTextCatalogOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterFullTextCatalogStatement"
  },
  {
    "childKinds": [
      "AddAlterFullTextIndexAction",
      "AlterColumnAlterFullTextIndexAction",
      "DropAlterFullTextIndexAction",
      "SetSearchPropertyListAlterFullTextIndexAction",
      "SetStopListAlterFullTextIndexAction",
      "SimpleAlterFullTextIndexAction"
    ],
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterFullTextIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "AlterFullTextIndexStatement"
  },
  {
    "childKinds": [
      "FullTextStopListAction"
    ],
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterFullTextStopListStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterFullTextStopListStatement"
  },
  {
    "childKinds": [
      "MethodSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "childKinds": [
      "ExecuteAsFunctionOption",
      "FunctionOption",
      "InlineFunctionOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "childKinds": [
      "OrderBulkInsertOption"
    ],
    "edgeKind": "single",
    "edgeName": "OrderHint",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "childKinds": [
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "childKinds": [
      "ScalarFunctionReturnType",
      "SelectFunctionReturnType",
      "TableValuedFunctionReturnType"
    ],
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "AlterFunctionStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "AlterIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "AlterIndexStatement"
  },
  {
    "childKinds": [
      "PartitionSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "Partition",
    "parentKind": "AlterIndexStatement"
  },
  {
    "childKinds": [
      "SelectiveXmlIndexPromotedPath"
    ],
    "edgeKind": "array",
    "edgeName": "PromotedPaths",
    "parentKind": "AlterIndexStatement"
  },
  {
    "childKinds": [
      "XmlNamespaces"
    ],
    "edgeKind": "single",
    "edgeName": "XmlNamespaces",
    "parentKind": "AlterIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "CredentialName",
    "parentKind": "AlterLoginAddDropCredentialStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterLoginAddDropCredentialStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterLoginEnableDisableStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterLoginOptionsStatement"
  },
  {
    "childKinds": [
      "IdentifierPrincipalOption",
      "LiteralPrincipalOption",
      "OnOffPrincipalOption",
      "PasswordAlterPrincipalOption",
      "PrincipalOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterLoginOptionsStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "AlterMasterKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterMessageTypeStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "XmlSchemaCollectionName",
    "parentKind": "AlterMessageTypeStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Boundary",
    "parentKind": "AlterPartitionFunctionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterPartitionFunctionStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "AlterPartitionSchemeStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterPartitionSchemeStatement"
  },
  {
    "childKinds": [
      "MethodSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "AlterProcedureStatement"
  },
  {
    "childKinds": [
      "ExecuteAsProcedureOption",
      "ProcedureOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterProcedureStatement"
  },
  {
    "childKinds": [
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "AlterProcedureStatement"
  },
  {
    "childKinds": [
      "ProcedureReference"
    ],
    "edgeKind": "single",
    "edgeName": "ProcedureReference",
    "parentKind": "AlterProcedureStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "AlterProcedureStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterQueueStatement"
  },
  {
    "childKinds": [
      "QueueExecuteAsOption",
      "QueueOption",
      "QueueProcedureOption",
      "QueueStateOption",
      "QueueValueOption"
    ],
    "edgeKind": "array",
    "edgeName": "QueueOptions",
    "parentKind": "AlterQueueStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterRemoteServiceBindingStatement"
  },
  {
    "childKinds": [
      "OnOffRemoteServiceBindingOption",
      "UserRemoteServiceBindingOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterRemoteServiceBindingStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ClassifierFunction",
    "parentKind": "AlterResourceGovernorStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterResourcePoolStatement"
  },
  {
    "childKinds": [
      "ResourcePoolParameter"
    ],
    "edgeKind": "array",
    "edgeName": "ResourcePoolParameters",
    "parentKind": "AlterResourcePoolStatement"
  },
  {
    "childKinds": [
      "AddMemberAlterRoleAction",
      "DropMemberAlterRoleAction",
      "RenameAlterRoleAction"
    ],
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterRouteStatement"
  },
  {
    "childKinds": [
      "RouteOption"
    ],
    "edgeKind": "array",
    "edgeName": "RouteOptions",
    "parentKind": "AlterRouteStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterSchemaStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ObjectName",
    "parentKind": "AlterSchemaStatement"
  },
  {
    "childKinds": [
      "AddSearchPropertyListAction",
      "DropSearchPropertyListAction"
    ],
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterSearchPropertyListStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterSearchPropertyListStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterSecurityPolicyStatement"
  },
  {
    "childKinds": [
      "SecurityPolicyOption"
    ],
    "edgeKind": "array",
    "edgeName": "SecurityPolicyOptions",
    "parentKind": "AlterSecurityPolicyStatement"
  },
  {
    "childKinds": [
      "SecurityPredicateAction"
    ],
    "edgeKind": "array",
    "edgeName": "SecurityPredicateActions",
    "parentKind": "AlterSecurityPolicyStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterSequenceStatement"
  },
  {
    "childKinds": [
      "DataTypeSequenceOption",
      "ScalarExpressionSequenceOption",
      "SequenceOption"
    ],
    "edgeKind": "array",
    "edgeName": "SequenceOptions",
    "parentKind": "AlterSequenceStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "AlterServerAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "AuditSpecificationPart"
    ],
    "edgeKind": "array",
    "edgeName": "Parts",
    "parentKind": "AlterServerAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SpecificationName",
    "parentKind": "AlterServerAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "AlterServerAuditStatement"
  },
  {
    "childKinds": [
      "AuditTarget"
    ],
    "edgeKind": "single",
    "edgeName": "AuditTarget",
    "parentKind": "AlterServerAuditStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "NewName",
    "parentKind": "AlterServerAuditStatement"
  },
  {
    "childKinds": [
      "AuditGuidAuditOption",
      "OnFailureAuditOption",
      "OperatorAuditOption",
      "QueueDelayAuditOption",
      "StateAuditOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerAuditStatement"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "PredicateExpression",
    "parentKind": "AlterServerAuditStatement"
  },
  {
    "childKinds": [
      "LiteralOptionValue",
      "OnOffOptionValue"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationBufferPoolExtensionContainerOption"
  },
  {
    "childKinds": [
      "AlterServerConfigurationBufferPoolExtensionContainerOption",
      "AlterServerConfigurationBufferPoolExtensionOption",
      "AlterServerConfigurationBufferPoolExtensionSizeOption"
    ],
    "edgeKind": "array",
    "edgeName": "Suboptions",
    "parentKind": "AlterServerConfigurationBufferPoolExtensionContainerOption"
  },
  {
    "childKinds": [
      "LiteralOptionValue",
      "OnOffOptionValue"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationBufferPoolExtensionOption"
  },
  {
    "childKinds": [
      "LiteralOptionValue",
      "OnOffOptionValue"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationBufferPoolExtensionSizeOption"
  },
  {
    "childKinds": [
      "LiteralOptionValue",
      "OnOffOptionValue"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationDiagnosticsLogMaxSizeOption"
  },
  {
    "childKinds": [
      "LiteralOptionValue",
      "OnOffOptionValue"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationDiagnosticsLogOption"
  },
  {
    "childKinds": [
      "LiteralOptionValue",
      "OnOffOptionValue"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationExternalAuthenticationContainerOption"
  },
  {
    "childKinds": [
      "AlterServerConfigurationExternalAuthenticationContainerOption",
      "AlterServerConfigurationExternalAuthenticationOption"
    ],
    "edgeKind": "array",
    "edgeName": "Suboptions",
    "parentKind": "AlterServerConfigurationExternalAuthenticationContainerOption"
  },
  {
    "childKinds": [
      "LiteralOptionValue",
      "OnOffOptionValue"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationExternalAuthenticationOption"
  },
  {
    "childKinds": [
      "LiteralOptionValue",
      "OnOffOptionValue"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationFailoverClusterPropertyOption"
  },
  {
    "childKinds": [
      "LiteralOptionValue",
      "OnOffOptionValue"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationHadrClusterOption"
  },
  {
    "childKinds": [
      "AlterServerConfigurationBufferPoolExtensionContainerOption",
      "AlterServerConfigurationBufferPoolExtensionOption",
      "AlterServerConfigurationBufferPoolExtensionSizeOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetBufferPoolExtensionStatement"
  },
  {
    "childKinds": [
      "AlterServerConfigurationDiagnosticsLogMaxSizeOption",
      "AlterServerConfigurationDiagnosticsLogOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetDiagnosticsLogStatement"
  },
  {
    "childKinds": [
      "AlterServerConfigurationExternalAuthenticationContainerOption",
      "AlterServerConfigurationExternalAuthenticationOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetExternalAuthenticationStatement"
  },
  {
    "childKinds": [
      "AlterServerConfigurationFailoverClusterPropertyOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetFailoverClusterPropertyStatement"
  },
  {
    "childKinds": [
      "AlterServerConfigurationHadrClusterOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetHadrClusterStatement"
  },
  {
    "childKinds": [
      "AlterServerConfigurationSoftNumaOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterServerConfigurationSetSoftNumaStatement"
  },
  {
    "childKinds": [
      "LiteralOptionValue",
      "OnOffOptionValue"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "AlterServerConfigurationSoftNumaOption"
  },
  {
    "childKinds": [
      "ProcessAffinityRange"
    ],
    "edgeKind": "array",
    "edgeName": "ProcessAffinityRanges",
    "parentKind": "AlterServerConfigurationStatement"
  },
  {
    "childKinds": [
      "AddMemberAlterRoleAction",
      "DropMemberAlterRoleAction",
      "RenameAlterRoleAction"
    ],
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "AlterServerRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterServerRoleStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Account",
    "parentKind": "AlterServiceMasterKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "AlterServiceMasterKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterServiceStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "QueueName",
    "parentKind": "AlterServiceStatement"
  },
  {
    "childKinds": [
      "ServiceContract"
    ],
    "edgeKind": "array",
    "edgeName": "ServiceContracts",
    "parentKind": "AlterServiceStatement"
  },
  {
    "childKinds": [
      "CryptoMechanism"
    ],
    "edgeKind": "array",
    "edgeName": "EncryptingMechanisms",
    "parentKind": "AlterSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "ClusterByTableOption"
    ],
    "edgeKind": "single",
    "edgeName": "ClusterByOption",
    "parentKind": "AlterTableAddClusterByStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableAddClusterByStatement"
  },
  {
    "childKinds": [
      "TableDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Definition",
    "parentKind": "AlterTableAddTableElementStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableAddTableElementStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnIdentifier",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "childKinds": [
      "ColumnEncryptionDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Encryption",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "MaskingFunction",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "childKinds": [
      "ColumnStorageOptions"
    ],
    "edgeKind": "single",
    "edgeName": "StorageOptions",
    "parentKind": "AlterTableAlterColumnStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "IndexIdentifier",
    "parentKind": "AlterTableAlterIndexStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "AlterTableAlterIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableAlterIndexStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "BoundaryValue",
    "parentKind": "AlterTableAlterPartitionStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableAlterPartitionStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableChangeTrackingModificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "ConstraintNames",
    "parentKind": "AlterTableConstraintModificationStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableConstraintModificationStatement"
  },
  {
    "childKinds": [
      "DropClusteredConstraintMoveOption",
      "DropClusteredConstraintStateOption",
      "DropClusteredConstraintValueOption",
      "DropClusteredConstraintWaitAtLowPriorityLockOption"
    ],
    "edgeKind": "array",
    "edgeName": "DropClusteredConstraintOptions",
    "parentKind": "AlterTableDropTableElement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterTableDropTableElement"
  },
  {
    "childKinds": [
      "AlterTableDropTableElement"
    ],
    "edgeKind": "array",
    "edgeName": "AlterTableDropTableElements",
    "parentKind": "AlterTableDropTableElementStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableDropTableElementStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableFileTableNamespaceStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "AlterTableRebuildStatement"
  },
  {
    "childKinds": [
      "PartitionSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "Partition",
    "parentKind": "AlterTableRebuildStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableRebuildStatement"
  },
  {
    "childKinds": [
      "ClusterByTableOption",
      "DataRetentionTableOption",
      "DurabilityTableOption",
      "FileStreamOnTableOption",
      "FileTableCollateFileNameTableOption",
      "FileTableConstraintNameTableOption",
      "FileTableDirectoryTableOption",
      "LedgerTableOption",
      "LedgerViewOption",
      "LocationOption",
      "LockEscalationTableOption",
      "MemoryOptimizedTableOption",
      "RemoteDataArchiveAlterTableOption",
      "RemoteDataArchiveTableOption",
      "SystemVersioningTableOption",
      "TableDataCompressionOption",
      "TableDistributionOption",
      "TableIndexOption",
      "TablePartitionOption",
      "TableXmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterTableSetStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableSetStatement"
  },
  {
    "childKinds": [
      "LowPriorityLockWaitTableSwitchOption",
      "TruncateTargetTableSwitchOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterTableSwitchStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableSwitchStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SourcePartitionNumber",
    "parentKind": "AlterTableSwitchStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TargetPartitionNumber",
    "parentKind": "AlterTableSwitchStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "TargetTable",
    "parentKind": "AlterTableSwitchStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterTableTriggerModificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "TriggerNames",
    "parentKind": "AlterTableTriggerModificationStatement"
  },
  {
    "childKinds": [
      "MethodSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "childKinds": [
      "ExecuteAsTriggerOption",
      "TriggerOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "childKinds": [
      "TriggerAction"
    ],
    "edgeKind": "array",
    "edgeName": "TriggerActions",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "childKinds": [
      "TriggerObject"
    ],
    "edgeKind": "single",
    "edgeName": "TriggerObject",
    "parentKind": "AlterTriggerStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterUserStatement"
  },
  {
    "childKinds": [
      "IdentifierPrincipalOption",
      "LiteralPrincipalOption",
      "OnOffPrincipalOption",
      "PasswordAlterPrincipalOption",
      "PrincipalOption"
    ],
    "edgeKind": "array",
    "edgeName": "UserOptions",
    "parentKind": "AlterUserStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "AlterViewStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "AlterViewStatement"
  },
  {
    "childKinds": [
      "SelectStatement",
      "SelectStatementSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "AlterViewStatement"
  },
  {
    "childKinds": [
      "ViewDistributionOption",
      "ViewForAppendOption",
      "ViewOption"
    ],
    "edgeKind": "array",
    "edgeName": "ViewOptions",
    "parentKind": "AlterViewStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ExternalPoolName",
    "parentKind": "AlterWorkloadGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterWorkloadGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "PoolName",
    "parentKind": "AlterWorkloadGroupStatement"
  },
  {
    "childKinds": [
      "WorkloadGroupImportanceParameter",
      "WorkloadGroupResourceParameter"
    ],
    "edgeKind": "array",
    "edgeName": "WorkloadGroupParameters",
    "parentKind": "AlterWorkloadGroupStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "AlterXmlSchemaCollectionStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AlterXmlSchemaCollectionStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ApplicationRoleOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Assembly",
    "parentKind": "AssemblyEncryptionSource"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ClassName",
    "parentKind": "AssemblyName"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "AssemblyName"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "AssignmentSetClause"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "NewValue",
    "parentKind": "AssignmentSetClause"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "AssignmentSetClause"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Credential",
    "parentKind": "AsymmetricKeyCreateLoginSource"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Key",
    "parentKind": "AsymmetricKeyCreateLoginSource"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "AtTimeZoneCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "DateValue",
    "parentKind": "AtTimeZoneCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TimeZone",
    "parentKind": "AtTimeZoneCall"
  },
  {
    "childKinds": [
      "DatabaseAuditAction"
    ],
    "edgeKind": "array",
    "edgeName": "Actions",
    "parentKind": "AuditActionSpecification"
  },
  {
    "childKinds": [
      "SecurityPrincipal"
    ],
    "edgeKind": "array",
    "edgeName": "Principals",
    "parentKind": "AuditActionSpecification"
  },
  {
    "childKinds": [
      "SecurityTargetObject"
    ],
    "edgeKind": "single",
    "edgeName": "TargetObject",
    "parentKind": "AuditActionSpecification"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Guid",
    "parentKind": "AuditGuidAuditOption"
  },
  {
    "childKinds": [
      "AuditActionGroupReference",
      "AuditActionSpecification"
    ],
    "edgeKind": "single",
    "edgeName": "Details",
    "parentKind": "AuditSpecificationPart"
  },
  {
    "childKinds": [
      "LiteralAuditTargetOption",
      "MaxRolloverFilesAuditTargetOption",
      "MaxSizeAuditTargetOption",
      "OnOffAuditTargetOption",
      "RetentionDaysAuditTargetOption"
    ],
    "edgeKind": "array",
    "edgeName": "TargetOptions",
    "parentKind": "AuditTarget"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Certificate",
    "parentKind": "AuthenticationPayloadOption"
  },
  {
    "childKinds": [
      "AutomaticTuningCreateIndexOption",
      "AutomaticTuningDropIndexOption",
      "AutomaticTuningForceLastGoodPlanOption",
      "AutomaticTuningMaintainIndexOption",
      "AutomaticTuningOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AutomaticTuningDatabaseOption"
  },
  {
    "childKinds": [
      "AvailabilityModeReplicaOption",
      "FailoverModeReplicaOption",
      "LiteralReplicaOption",
      "PrimaryRoleReplicaOption",
      "SecondaryRoleReplicaOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "AvailabilityReplica"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ServerName",
    "parentKind": "AvailabilityReplica"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "DecryptionPassword",
    "parentKind": "BackupCertificateStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "EncryptionPassword",
    "parentKind": "BackupCertificateStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "BackupCertificateStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "BackupCertificateStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PrivateKeyPath",
    "parentKind": "BackupCertificateStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "BackupDatabaseStatement"
  },
  {
    "childKinds": [
      "DeviceInfo"
    ],
    "edgeKind": "array",
    "edgeName": "Devices",
    "parentKind": "BackupDatabaseStatement"
  },
  {
    "childKinds": [
      "BackupRestoreFileInfo"
    ],
    "edgeKind": "array",
    "edgeName": "Files",
    "parentKind": "BackupDatabaseStatement"
  },
  {
    "childKinds": [
      "MirrorToClause"
    ],
    "edgeKind": "array",
    "edgeName": "MirrorToClauses",
    "parentKind": "BackupDatabaseStatement"
  },
  {
    "childKinds": [
      "BackupEncryptionOption",
      "BackupOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BackupDatabaseStatement"
  },
  {
    "childKinds": [
      "CryptoMechanism"
    ],
    "edgeKind": "single",
    "edgeName": "Encryptor",
    "parentKind": "BackupEncryptionOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "BackupEncryptionOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "BackupMasterKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "BackupMasterKeyStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "BackupOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Items",
    "parentKind": "BackupRestoreFileInfo"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "BackupServiceMasterKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "BackupServiceMasterKeyStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "BackupTransactionLogStatement"
  },
  {
    "childKinds": [
      "DeviceInfo"
    ],
    "edgeKind": "array",
    "edgeName": "Devices",
    "parentKind": "BackupTransactionLogStatement"
  },
  {
    "childKinds": [
      "MirrorToClause"
    ],
    "edgeKind": "array",
    "edgeName": "MirrorToClauses",
    "parentKind": "BackupTransactionLogStatement"
  },
  {
    "childKinds": [
      "BackupEncryptionOption",
      "BackupOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BackupTransactionLogStatement"
  },
  {
    "childKinds": [
      "ChildObjectName"
    ],
    "edgeKind": "single",
    "edgeName": "Index",
    "parentKind": "BackwardsCompatibleDropIndexClause"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Handle",
    "parentKind": "BeginConversationTimerStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Timeout",
    "parentKind": "BeginConversationTimerStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "ContractName",
    "parentKind": "BeginDialogStatement"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Handle",
    "parentKind": "BeginDialogStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "InitiatorServiceName",
    "parentKind": "BeginDialogStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "InstanceSpec",
    "parentKind": "BeginDialogStatement"
  },
  {
    "childKinds": [
      "OnOffDialogOption",
      "ScalarExpressionDialogOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BeginDialogStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TargetServiceName",
    "parentKind": "BeginDialogStatement"
  },
  {
    "childKinds": [
      "IdentifierAtomicBlockOption",
      "LiteralAtomicBlockOption",
      "OnOffAtomicBlockOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BeginEndAtomicBlockStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "BeginEndAtomicBlockStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "BeginEndBlockStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "MarkDescription",
    "parentKind": "BeginTransactionStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "BeginTransactionStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "BinaryExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "BinaryExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "BinaryLiteral"
  },
  {
    "childKinds": [
      "BinaryQueryExpression",
      "QueryParenthesisExpression",
      "QuerySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "FirstQueryExpression",
    "parentKind": "BinaryQueryExpression"
  },
  {
    "childKinds": [
      "BrowseForClause",
      "JsonForClause",
      "JsonForClauseOption",
      "ReadOnlyForClause",
      "UpdateForClause",
      "XmlForClause",
      "XmlForClauseOption"
    ],
    "edgeKind": "single",
    "edgeName": "ForClause",
    "parentKind": "BinaryQueryExpression"
  },
  {
    "childKinds": [
      "OffsetClause"
    ],
    "edgeKind": "single",
    "edgeName": "OffsetClause",
    "parentKind": "BinaryQueryExpression"
  },
  {
    "childKinds": [
      "OrderByClause"
    ],
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "BinaryQueryExpression"
  },
  {
    "childKinds": [
      "BinaryQueryExpression",
      "QueryParenthesisExpression",
      "QuerySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "SecondQueryExpression",
    "parentKind": "BinaryQueryExpression"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "BooleanBinaryExpression"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "BooleanBinaryExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "BooleanComparisonExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "BooleanComparisonExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "BooleanIsNullExpression"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "BooleanNotExpression"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "BooleanParenthesisExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "BooleanTernaryExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "BooleanTernaryExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ThirdExpression",
    "parentKind": "BooleanTernaryExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "BoundingBoxParameter"
  },
  {
    "childKinds": [
      "BoundingBoxParameter"
    ],
    "edgeKind": "array",
    "edgeName": "BoundingBoxParameters",
    "parentKind": "BoundingBoxSpatialIndexOption"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "BrokerPriorityParameter"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "BuiltInFunctionTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "BuiltInFunctionTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "BuiltInFunctionTableReference"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "From",
    "parentKind": "BulkInsertStatement"
  },
  {
    "childKinds": [
      "BulkInsertOption",
      "LiteralBulkInsertOption",
      "OrderBulkInsertOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BulkInsertStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "BulkInsertStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "BulkOpenRowset"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "BulkOpenRowset"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "array",
    "edgeName": "DataFiles",
    "parentKind": "BulkOpenRowset"
  },
  {
    "childKinds": [
      "BulkInsertOption",
      "LiteralBulkInsertOption",
      "OrderBulkInsertOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "BulkOpenRowset"
  },
  {
    "childKinds": [
      "OpenRowsetColumnDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "WithColumns",
    "parentKind": "BulkOpenRowset"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "CastCall"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "CastCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "CastCall"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "CellsPerObjectSpatialIndexOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Certificate",
    "parentKind": "CertificateCreateLoginSource"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Credential",
    "parentKind": "CertificateCreateLoginSource"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "CertificateOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "RetentionPeriod",
    "parentKind": "ChangeRetentionChangeTrackingOptionDetail"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "ChangeTableChangesTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "ChangeTableChangesTableReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SinceVersion",
    "parentKind": "ChangeTableChangesTableReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "ChangeTableChangesTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "ChangeTableVersionTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "ChangeTableVersionTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "PrimaryKeyColumns",
    "parentKind": "ChangeTableVersionTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "PrimaryKeyValues",
    "parentKind": "ChangeTableVersionTableReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "ChangeTableVersionTableReference"
  },
  {
    "childKinds": [
      "AutoCleanupChangeTrackingOptionDetail",
      "ChangeRetentionChangeTrackingOptionDetail"
    ],
    "edgeKind": "array",
    "edgeName": "Details",
    "parentKind": "ChangeTrackingDatabaseOption"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "CheckCondition",
    "parentKind": "CheckConstraintDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "CheckConstraintDefinition"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Duration",
    "parentKind": "CheckpointStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "BaseIdentifier",
    "parentKind": "ChildObjectName"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ChildIdentifier",
    "parentKind": "ChildObjectName"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseIdentifier",
    "parentKind": "ChildObjectName"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Identifiers",
    "parentKind": "ChildObjectName"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaIdentifier",
    "parentKind": "ChildObjectName"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ServerIdentifier",
    "parentKind": "ChildObjectName"
  },
  {
    "childKinds": [
      "WlmTimeLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Time",
    "parentKind": "ClassifierEndTimeOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "MemberName",
    "parentKind": "ClassifierMemberNameOption"
  },
  {
    "childKinds": [
      "WlmTimeLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Time",
    "parentKind": "ClassifierStartTimeOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "WlmContext",
    "parentKind": "ClassifierWlmContextOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "WlmLabel",
    "parentKind": "ClassifierWlmLabelOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "WorkloadGroupName",
    "parentKind": "ClassifierWorkloadGroupOption"
  },
  {
    "childKinds": [
      "CursorId"
    ],
    "edgeKind": "single",
    "edgeName": "Cursor",
    "parentKind": "CloseCursorStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CloseSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "ClusterByTableOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "CoalesceExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Expressions",
    "parentKind": "CoalesceExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ColumnDefinitionBase"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnIdentifier",
    "parentKind": "ColumnDefinitionBase"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ColumnDefinitionBase"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnIdentifier",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ComputedColumnExpression",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "CheckConstraintDefinition",
      "DefaultConstraintDefinition",
      "ForeignKeyConstraintDefinition",
      "GraphConnectionConstraintDefinition",
      "NullableConstraintDefinition",
      "UniqueConstraintDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "Constraints",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "DefaultConstraintDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "DefaultConstraint",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "ColumnEncryptionDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Encryption",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "IdentityOptions"
    ],
    "edgeKind": "single",
    "edgeName": "IdentityOptions",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "IndexDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Index",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "MaskingFunction",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "ColumnStorageOptions"
    ],
    "edgeKind": "single",
    "edgeName": "StorageOptions",
    "parentKind": "ColumnDefinition"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Algorithm",
    "parentKind": "ColumnEncryptionAlgorithmNameParameter"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "EncryptionAlgorithm",
    "parentKind": "ColumnEncryptionAlgorithmParameter"
  },
  {
    "childKinds": [
      "ColumnEncryptionAlgorithmParameter",
      "ColumnEncryptionKeyNameParameter",
      "ColumnEncryptionTypeParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "ColumnEncryptionDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ColumnEncryptionKeyNameParameter"
  },
  {
    "childKinds": [
      "ColumnEncryptionAlgorithmNameParameter",
      "ColumnMasterKeyNameParameter",
      "EncryptedValueParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "ColumnEncryptionKeyValue"
  },
  {
    "childKinds": [
      "BinaryLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Signature",
    "parentKind": "ColumnMasterKeyEnclaveComputationsParameter"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ColumnMasterKeyNameParameter"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Path",
    "parentKind": "ColumnMasterKeyPathParameter"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ColumnMasterKeyStoreProviderNameParameter"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ColumnReferenceExpression"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "MultiPartIdentifier",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "MultiPartIdentifier",
    "parentKind": "ColumnReferenceExpression"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "ColumnWithSortOrder"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CommitTransactionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CommonTableExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ExpressionName",
    "parentKind": "CommonTableExpression"
  },
  {
    "childKinds": [
      "BinaryQueryExpression",
      "QueryParenthesisExpression",
      "QuerySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "CommonTableExpression"
  },
  {
    "childKinds": [
      "WithCtesAndXmlNamespaces"
    ],
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "CommonTableExpression"
  },
  {
    "childKinds": [
      "CompositeGroupingSpecification",
      "CubeGroupingSpecification",
      "ExpressionGroupingSpecification",
      "GrandTotalGroupingSpecification",
      "GroupingSetsGroupingSpecification",
      "RollupGroupingSpecification"
    ],
    "edgeKind": "array",
    "edgeName": "Items",
    "parentKind": "CompositeGroupingSpecification"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "CompressionDelayIndexOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "From",
    "parentKind": "CompressionPartitionRange"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "CompressionPartitionRange"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "ByExpressions",
    "parentKind": "ComputeClause"
  },
  {
    "childKinds": [
      "ComputeFunction"
    ],
    "edgeKind": "array",
    "edgeName": "ComputeFunctions",
    "parentKind": "ComputeClause"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ComputeFunction"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ContractMessage"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ConvertCall"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ConvertCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "ConvertCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Style",
    "parentKind": "ConvertCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnName",
    "parentKind": "CopyColumnOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "DefaultValue",
    "parentKind": "CopyColumnOption"
  },
  {
    "childKinds": [
      "IntegerLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "FieldNumber",
    "parentKind": "CopyColumnOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Identity",
    "parentKind": "CopyCredentialOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Secret",
    "parentKind": "CopyCredentialOption"
  },
  {
    "childKinds": [
      "CopyColumnOption",
      "CopyCredentialOption",
      "ListTypeCopyOption",
      "SingleValueTypeCopyOption"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "CopyOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "array",
    "edgeName": "From",
    "parentKind": "CopyStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Into",
    "parentKind": "CopyStatement"
  },
  {
    "childKinds": [
      "LiteralOptimizerHint",
      "OptimizeForOptimizerHint",
      "OptimizerHint",
      "TableHintsOptimizerHint",
      "UseHintList"
    ],
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "CopyStatement"
  },
  {
    "childKinds": [
      "CopyOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CopyStatement"
  },
  {
    "childKinds": [
      "AssemblyName"
    ],
    "edgeKind": "single",
    "edgeName": "AssemblyName",
    "parentKind": "CreateAggregateStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateAggregateStatement"
  },
  {
    "childKinds": [
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateAggregateStatement"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "CreateAggregateStatement"
  },
  {
    "childKinds": [
      "ApplicationRoleOption"
    ],
    "edgeKind": "array",
    "edgeName": "ApplicationRoleOptions",
    "parentKind": "CreateApplicationRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateApplicationRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateAssemblyStatement"
  },
  {
    "childKinds": [
      "AssemblyOption",
      "OnOffAssemblyOption",
      "PermissionSetAssemblyOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateAssemblyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateAssemblyStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateAssemblyStatement"
  },
  {
    "childKinds": [
      "AssemblyEncryptionSource",
      "FileEncryptionSource",
      "ProviderEncryptionSource"
    ],
    "edgeKind": "single",
    "edgeName": "KeySource",
    "parentKind": "CreateAsymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateAsymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateAsymmetricKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "CreateAsymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Databases",
    "parentKind": "CreateAvailabilityGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateAvailabilityGroupStatement"
  },
  {
    "childKinds": [
      "LiteralAvailabilityGroupOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateAvailabilityGroupStatement"
  },
  {
    "childKinds": [
      "AvailabilityReplica"
    ],
    "edgeKind": "array",
    "edgeName": "Replicas",
    "parentKind": "CreateAvailabilityGroupStatement"
  },
  {
    "childKinds": [
      "BrokerPriorityParameter"
    ],
    "edgeKind": "array",
    "edgeName": "BrokerPriorityParameters",
    "parentKind": "CreateBrokerPriorityStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateBrokerPriorityStatement"
  },
  {
    "childKinds": [
      "CertificateOption"
    ],
    "edgeKind": "array",
    "edgeName": "CertificateOptions",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "childKinds": [
      "AssemblyEncryptionSource",
      "FileEncryptionSource",
      "ProviderEncryptionSource"
    ],
    "edgeKind": "single",
    "edgeName": "CertificateSource",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "DecryptionPassword",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "EncryptionPassword",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PrivateKeyPath",
    "parentKind": "CreateCertificateStatement"
  },
  {
    "childKinds": [
      "ColumnEncryptionKeyValue"
    ],
    "edgeKind": "array",
    "edgeName": "ColumnEncryptionKeyValues",
    "parentKind": "CreateColumnEncryptionKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateColumnEncryptionKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateColumnMasterKeyStatement"
  },
  {
    "childKinds": [
      "ColumnMasterKeyEnclaveComputationsParameter",
      "ColumnMasterKeyPathParameter",
      "ColumnMasterKeyStoreProviderNameParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateColumnMasterKeyStatement"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "FilterPredicate",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "childKinds": [
      "FileGroupOrPartitionScheme"
    ],
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "OrderedColumns",
    "parentKind": "CreateColumnStoreIndexStatement"
  },
  {
    "childKinds": [
      "ContractMessage"
    ],
    "edgeKind": "array",
    "edgeName": "Messages",
    "parentKind": "CreateContractStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateContractStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateContractStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "CryptographicProviderName",
    "parentKind": "CreateCredentialStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Identity",
    "parentKind": "CreateCredentialStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateCredentialStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Secret",
    "parentKind": "CreateCredentialStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "CreateCryptographicProviderStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateCryptographicProviderStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "CreateDatabaseAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "AuditSpecificationPart"
    ],
    "edgeKind": "array",
    "edgeName": "Parts",
    "parentKind": "CreateDatabaseAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SpecificationName",
    "parentKind": "CreateDatabaseAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "CryptoMechanism"
    ],
    "edgeKind": "single",
    "edgeName": "Encryptor",
    "parentKind": "CreateDatabaseEncryptionKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "childKinds": [
      "ContainmentDatabaseOption"
    ],
    "edgeKind": "single",
    "edgeName": "Containment",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "MultiPartIdentifier",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "CopyOf",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseSnapshot",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "childKinds": [
      "FileGroupDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "FileGroups",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "childKinds": [
      "FileDeclaration"
    ],
    "edgeKind": "array",
    "edgeName": "LogOn",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "childKinds": [
      "AcceleratedDatabaseRecoveryDatabaseOption",
      "AutoCreateStatisticsDatabaseOption",
      "AutomaticTuningDatabaseOption",
      "CatalogCollationOption",
      "ChangeTrackingDatabaseOption",
      "ContainmentDatabaseOption",
      "CursorDefaultDatabaseOption",
      "DatabaseOption",
      "DelayedDurabilityDatabaseOption",
      "ElasticPoolSpecification",
      "FileStreamDatabaseOption",
      "HadrAvailabilityGroupDatabaseOption",
      "HadrDatabaseOption",
      "IdentifierDatabaseOption",
      "LedgerOption",
      "LiteralDatabaseOption",
      "MaxSizeDatabaseOption",
      "OnOffDatabaseOption",
      "OptimizedLockingDatabaseOption",
      "PageVerifyDatabaseOption",
      "ParameterizationDatabaseOption",
      "PartnerDatabaseOption",
      "QueryStoreDatabaseOption",
      "RecoveryDatabaseOption",
      "RemoteDataArchiveDatabaseOption",
      "TargetRecoveryTimeDatabaseOption",
      "WitnessDatabaseOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateDatabaseStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "CreateDefaultStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateDefaultStatement"
  },
  {
    "childKinds": [
      "EndpointAffinity"
    ],
    "edgeKind": "single",
    "edgeName": "Affinity",
    "parentKind": "CreateEndpointStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateEndpointStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateEndpointStatement"
  },
  {
    "childKinds": [
      "AuthenticationPayloadOption",
      "CharacterSetPayloadOption",
      "EnabledDisabledPayloadOption",
      "EncryptionPayloadOption",
      "LiteralPayloadOption",
      "LoginTypePayloadOption",
      "RolePayloadOption",
      "SchemaPayloadOption",
      "SessionTimeoutPayloadOption",
      "SoapMethod",
      "WsdlPayloadOption"
    ],
    "edgeKind": "array",
    "edgeName": "PayloadOptions",
    "parentKind": "CreateEndpointStatement"
  },
  {
    "childKinds": [
      "AuthenticationEndpointProtocolOption",
      "CompressionEndpointProtocolOption",
      "ListenerIPEndpointProtocolOption",
      "LiteralEndpointProtocolOption",
      "PortsEndpointProtocolOption"
    ],
    "edgeKind": "array",
    "edgeName": "ProtocolOptions",
    "parentKind": "CreateEndpointStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "BrokerInstanceSpecifier",
    "parentKind": "CreateEventNotificationStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "BrokerService",
    "parentKind": "CreateEventNotificationStatement"
  },
  {
    "childKinds": [
      "EventGroupContainer",
      "EventTypeContainer"
    ],
    "edgeKind": "array",
    "edgeName": "EventTypeGroups",
    "parentKind": "CreateEventNotificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateEventNotificationStatement"
  },
  {
    "childKinds": [
      "EventNotificationObjectScope"
    ],
    "edgeKind": "single",
    "edgeName": "Scope",
    "parentKind": "CreateEventNotificationStatement"
  },
  {
    "childKinds": [
      "EventDeclaration"
    ],
    "edgeKind": "array",
    "edgeName": "EventDeclarations",
    "parentKind": "CreateEventSessionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateEventSessionStatement"
  },
  {
    "childKinds": [
      "EventRetentionSessionOption",
      "LiteralSessionOption",
      "MaxDispatchLatencySessionOption",
      "MemoryPartitionSessionOption",
      "OnOffSessionOption"
    ],
    "edgeKind": "array",
    "edgeName": "SessionOptions",
    "parentKind": "CreateEventSessionStatement"
  },
  {
    "childKinds": [
      "TargetDeclaration"
    ],
    "edgeKind": "array",
    "edgeName": "TargetDeclarations",
    "parentKind": "CreateEventSessionStatement"
  },
  {
    "childKinds": [
      "ExternalDataSourceLiteralOrIdentifierOption"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalDataSourceOptions",
    "parentKind": "CreateExternalDataSourceStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Location",
    "parentKind": "CreateExternalDataSourceStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalDataSourceStatement"
  },
  {
    "childKinds": [
      "ExternalFileFormatContainerOption",
      "ExternalFileFormatLiteralOption",
      "ExternalFileFormatUseDefaultTypeOption"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalFileFormatOptions",
    "parentKind": "CreateExternalFileFormatStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalFileFormatStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ExternalName",
    "parentKind": "CreateExternalFunctionStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalFunctionStatement"
  },
  {
    "childKinds": [
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateExternalFunctionStatement"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "CreateExternalFunctionStatement"
  },
  {
    "childKinds": [
      "ExternalLanguageFileOption"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalLanguageFiles",
    "parentKind": "CreateExternalLanguageStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalLanguageStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateExternalLanguageStatement"
  },
  {
    "childKinds": [
      "ExternalLibraryFileOption"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalLibraryFiles",
    "parentKind": "CreateExternalLibraryStatement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Language",
    "parentKind": "CreateExternalLibraryStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalLibraryStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateExternalLibraryStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ApiFormat",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Credential",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "LocalRuntimePath",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Location",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ModelName",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Parameters",
    "parentKind": "CreateExternalModelStatement"
  },
  {
    "childKinds": [
      "ExternalResourcePoolParameter"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalResourcePoolParameters",
    "parentKind": "CreateExternalResourcePoolStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalResourcePoolStatement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalStreamingJobStatement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Statement",
    "parentKind": "CreateExternalStreamingJobStatement"
  },
  {
    "childKinds": [
      "ExternalStreamLiteralOrIdentifierOption"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalStreamOptions",
    "parentKind": "CreateExternalStreamStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "InputOptions",
    "parentKind": "CreateExternalStreamStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Location",
    "parentKind": "CreateExternalStreamStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateExternalStreamStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "OutputOptions",
    "parentKind": "CreateExternalStreamStatement"
  },
  {
    "childKinds": [
      "ExternalTableColumnDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "ColumnDefinitions",
    "parentKind": "CreateExternalTableStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DataSource",
    "parentKind": "CreateExternalTableStatement"
  },
  {
    "childKinds": [
      "ExternalTableDistributionOption",
      "ExternalTableLiteralOrIdentifierOption",
      "ExternalTableRejectTypeOption"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalTableOptions",
    "parentKind": "CreateExternalTableStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "CreateExternalTableStatement"
  },
  {
    "childKinds": [
      "SelectStatement",
      "SelectStatementSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "CreateExternalTableStatement"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "CreateFederationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DistributionName",
    "parentKind": "CreateFederationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateFederationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "FileGroup",
    "parentKind": "CreateFullTextCatalogStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateFullTextCatalogStatement"
  },
  {
    "childKinds": [
      "OnOffFullTextCatalogOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateFullTextCatalogStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateFullTextCatalogStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Path",
    "parentKind": "CreateFullTextCatalogStatement"
  },
  {
    "childKinds": [
      "FullTextCatalogAndFileGroup"
    ],
    "edgeKind": "single",
    "edgeName": "CatalogAndFileGroup",
    "parentKind": "CreateFullTextIndexStatement"
  },
  {
    "childKinds": [
      "FullTextIndexColumn"
    ],
    "edgeKind": "array",
    "edgeName": "FullTextIndexColumns",
    "parentKind": "CreateFullTextIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "KeyIndexName",
    "parentKind": "CreateFullTextIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateFullTextIndexStatement"
  },
  {
    "childKinds": [
      "ChangeTrackingFullTextIndexOption",
      "SearchPropertyListFullTextIndexOption",
      "StopListFullTextIndexOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateFullTextIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "CreateFullTextStopListStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateFullTextStopListStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateFullTextStopListStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SourceStopListName",
    "parentKind": "CreateFullTextStopListStatement"
  },
  {
    "childKinds": [
      "MethodSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "childKinds": [
      "ExecuteAsFunctionOption",
      "FunctionOption",
      "InlineFunctionOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "childKinds": [
      "OrderBulkInsertOption"
    ],
    "edgeKind": "single",
    "edgeName": "OrderHint",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "childKinds": [
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "childKinds": [
      "ScalarFunctionReturnType",
      "SelectFunctionReturnType",
      "TableValuedFunctionReturnType"
    ],
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateFunctionStatement"
  },
  {
    "childKinds": [
      "ColumnWithSortOrder"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateIndexStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "FileStreamOn",
    "parentKind": "CreateIndexStatement"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "FilterPredicate",
    "parentKind": "CreateIndexStatement"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "IncludeColumns",
    "parentKind": "CreateIndexStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateIndexStatement"
  },
  {
    "childKinds": [
      "FileGroupOrPartitionScheme"
    ],
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateIndexStatement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "array",
    "edgeName": "ForJsonPaths",
    "parentKind": "CreateJsonIndexStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateJsonIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "JsonColumn",
    "parentKind": "CreateJsonIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateJsonIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateJsonIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateLoginStatement"
  },
  {
    "childKinds": [
      "AsymmetricKeyCreateLoginSource",
      "CertificateCreateLoginSource",
      "ExternalCreateLoginSource",
      "PasswordCreateLoginSource",
      "WindowsCreateLoginSource"
    ],
    "edgeKind": "single",
    "edgeName": "Source",
    "parentKind": "CreateLoginStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "CreateMasterKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateMessageTypeStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateMessageTypeStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "XmlSchemaCollectionName",
    "parentKind": "CreateMessageTypeStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ExternalName",
    "parentKind": "CreateOrAlterExternalFunctionStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateOrAlterExternalFunctionStatement"
  },
  {
    "childKinds": [
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateOrAlterExternalFunctionStatement"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "CreateOrAlterExternalFunctionStatement"
  },
  {
    "childKinds": [
      "MethodSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "childKinds": [
      "ExecuteAsFunctionOption",
      "FunctionOption",
      "InlineFunctionOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "childKinds": [
      "OrderBulkInsertOption"
    ],
    "edgeKind": "single",
    "edgeName": "OrderHint",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "childKinds": [
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "childKinds": [
      "ScalarFunctionReturnType",
      "SelectFunctionReturnType",
      "TableValuedFunctionReturnType"
    ],
    "edgeKind": "single",
    "edgeName": "ReturnType",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateOrAlterFunctionStatement"
  },
  {
    "childKinds": [
      "MethodSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateOrAlterProcedureStatement"
  },
  {
    "childKinds": [
      "ExecuteAsProcedureOption",
      "ProcedureOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateOrAlterProcedureStatement"
  },
  {
    "childKinds": [
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateOrAlterProcedureStatement"
  },
  {
    "childKinds": [
      "ProcedureReference"
    ],
    "edgeKind": "single",
    "edgeName": "ProcedureReference",
    "parentKind": "CreateOrAlterProcedureStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateOrAlterProcedureStatement"
  },
  {
    "childKinds": [
      "MethodSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "childKinds": [
      "ExecuteAsTriggerOption",
      "TriggerOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "childKinds": [
      "TriggerAction"
    ],
    "edgeKind": "array",
    "edgeName": "TriggerActions",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "childKinds": [
      "TriggerObject"
    ],
    "edgeKind": "single",
    "edgeName": "TriggerObject",
    "parentKind": "CreateOrAlterTriggerStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateOrAlterViewStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "CreateOrAlterViewStatement"
  },
  {
    "childKinds": [
      "SelectStatement",
      "SelectStatementSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "CreateOrAlterViewStatement"
  },
  {
    "childKinds": [
      "ViewDistributionOption",
      "ViewForAppendOption",
      "ViewOption"
    ],
    "edgeKind": "array",
    "edgeName": "ViewOptions",
    "parentKind": "CreateOrAlterViewStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "BoundaryValues",
    "parentKind": "CreatePartitionFunctionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreatePartitionFunctionStatement"
  },
  {
    "childKinds": [
      "PartitionParameterType"
    ],
    "edgeKind": "single",
    "edgeName": "ParameterType",
    "parentKind": "CreatePartitionFunctionStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "array",
    "edgeName": "FileGroups",
    "parentKind": "CreatePartitionSchemeStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreatePartitionSchemeStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "PartitionFunction",
    "parentKind": "CreatePartitionSchemeStatement"
  },
  {
    "childKinds": [
      "MethodSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateProcedureStatement"
  },
  {
    "childKinds": [
      "ExecuteAsProcedureOption",
      "ProcedureOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateProcedureStatement"
  },
  {
    "childKinds": [
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "CreateProcedureStatement"
  },
  {
    "childKinds": [
      "ProcedureReference"
    ],
    "edgeKind": "single",
    "edgeName": "ProcedureReference",
    "parentKind": "CreateProcedureStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateProcedureStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateQueueStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "OnFileGroup",
    "parentKind": "CreateQueueStatement"
  },
  {
    "childKinds": [
      "QueueExecuteAsOption",
      "QueueOption",
      "QueueProcedureOption",
      "QueueStateOption",
      "QueueValueOption"
    ],
    "edgeKind": "array",
    "edgeName": "QueueOptions",
    "parentKind": "CreateQueueStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateRemoteServiceBindingStatement"
  },
  {
    "childKinds": [
      "OnOffRemoteServiceBindingOption",
      "UserRemoteServiceBindingOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateRemoteServiceBindingStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateRemoteServiceBindingStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Service",
    "parentKind": "CreateRemoteServiceBindingStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateResourcePoolStatement"
  },
  {
    "childKinds": [
      "ResourcePoolParameter"
    ],
    "edgeKind": "array",
    "edgeName": "ResourcePoolParameters",
    "parentKind": "CreateResourcePoolStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateRouteStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateRouteStatement"
  },
  {
    "childKinds": [
      "RouteOption"
    ],
    "edgeKind": "array",
    "edgeName": "RouteOptions",
    "parentKind": "CreateRouteStatement"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "CreateRuleStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateRuleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSchemaStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateSchemaStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateSchemaStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSearchPropertyListStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateSearchPropertyListStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "MultiPartIdentifier",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SourceSearchPropertyList",
    "parentKind": "CreateSearchPropertyListStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSecurityPolicyStatement"
  },
  {
    "childKinds": [
      "SecurityPolicyOption"
    ],
    "edgeKind": "array",
    "edgeName": "SecurityPolicyOptions",
    "parentKind": "CreateSecurityPolicyStatement"
  },
  {
    "childKinds": [
      "SecurityPredicateAction"
    ],
    "edgeKind": "array",
    "edgeName": "SecurityPredicateActions",
    "parentKind": "CreateSecurityPolicyStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "PathName",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "childKinds": [
      "SelectiveXmlIndexPromotedPath"
    ],
    "edgeKind": "array",
    "edgeName": "PromotedPaths",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "UsingXmlIndexName",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "XmlColumn",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "childKinds": [
      "XmlNamespaces"
    ],
    "edgeKind": "single",
    "edgeName": "XmlNamespaces",
    "parentKind": "CreateSelectiveXmlIndexStatement"
  },
  {
    "childKinds": [
      "SemanticIndexColumn"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ExternalModelName",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ExternalModelParameters",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "childKinds": [
      "StopListFullTextIndexOption"
    ],
    "edgeKind": "single",
    "edgeName": "FulltextStoplistOption",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "childKinds": [
      "FileGroupOrPartitionScheme"
    ],
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "VectorIndexOptions",
    "parentKind": "CreateSemanticIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSequenceStatement"
  },
  {
    "childKinds": [
      "DataTypeSequenceOption",
      "ScalarExpressionSequenceOption",
      "SequenceOption"
    ],
    "edgeKind": "array",
    "edgeName": "SequenceOptions",
    "parentKind": "CreateSequenceStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "CreateServerAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "AuditSpecificationPart"
    ],
    "edgeKind": "array",
    "edgeName": "Parts",
    "parentKind": "CreateServerAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SpecificationName",
    "parentKind": "CreateServerAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AuditName",
    "parentKind": "CreateServerAuditStatement"
  },
  {
    "childKinds": [
      "AuditTarget"
    ],
    "edgeKind": "single",
    "edgeName": "AuditTarget",
    "parentKind": "CreateServerAuditStatement"
  },
  {
    "childKinds": [
      "AuditGuidAuditOption",
      "OnFailureAuditOption",
      "OperatorAuditOption",
      "QueueDelayAuditOption",
      "StateAuditOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateServerAuditStatement"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "PredicateExpression",
    "parentKind": "CreateServerAuditStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateServerRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateServerRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateServiceStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateServiceStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "QueueName",
    "parentKind": "CreateServiceStatement"
  },
  {
    "childKinds": [
      "ServiceContract"
    ],
    "edgeKind": "array",
    "edgeName": "ServiceContracts",
    "parentKind": "CreateServiceStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSpatialIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Object",
    "parentKind": "CreateSpatialIndexStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "OnFileGroup",
    "parentKind": "CreateSpatialIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SpatialColumnName",
    "parentKind": "CreateSpatialIndexStatement"
  },
  {
    "childKinds": [
      "BoundingBoxSpatialIndexOption",
      "CellsPerObjectSpatialIndexOption",
      "GridsSpatialIndexOption",
      "SpatialIndexRegularOption"
    ],
    "edgeKind": "array",
    "edgeName": "SpatialIndexOptions",
    "parentKind": "CreateSpatialIndexStatement"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateStatisticsStatement"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "FilterPredicate",
    "parentKind": "CreateStatisticsStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateStatisticsStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateStatisticsStatement"
  },
  {
    "childKinds": [
      "LiteralStatisticsOption",
      "OnOffStatisticsOption",
      "ResampleStatisticsOption",
      "StatisticsOption"
    ],
    "edgeKind": "array",
    "edgeName": "StatisticsOptions",
    "parentKind": "CreateStatisticsStatement"
  },
  {
    "childKinds": [
      "CryptoMechanism"
    ],
    "edgeKind": "array",
    "edgeName": "EncryptingMechanisms",
    "parentKind": "CreateSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "AlgorithmKeyOption",
      "CreationDispositionKeyOption",
      "IdentityValueKeyOption",
      "KeySourceKeyOption",
      "ProviderKeyNameKeyOption"
    ],
    "edgeKind": "array",
    "edgeName": "KeyOptions",
    "parentKind": "CreateSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "CreateSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Provider",
    "parentKind": "CreateSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ForName",
    "parentKind": "CreateSynonymStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateSynonymStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ClonePointInTime",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "CloneSource",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "CtasColumns",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "TableDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Definition",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "FederationScheme"
    ],
    "edgeKind": "single",
    "edgeName": "FederationScheme",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "FileStreamOn",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "FileGroupOrPartitionScheme"
    ],
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "ClusterByTableOption",
      "DataRetentionTableOption",
      "DurabilityTableOption",
      "FileStreamOnTableOption",
      "FileTableCollateFileNameTableOption",
      "FileTableConstraintNameTableOption",
      "FileTableDirectoryTableOption",
      "LedgerTableOption",
      "LedgerViewOption",
      "LocationOption",
      "LockEscalationTableOption",
      "MemoryOptimizedTableOption",
      "RemoteDataArchiveAlterTableOption",
      "RemoteDataArchiveTableOption",
      "SystemVersioningTableOption",
      "TableDataCompressionOption",
      "TableDistributionOption",
      "TableIndexOption",
      "TablePartitionOption",
      "TableXmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "SelectStatement",
      "SelectStatementSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "TextImageOn",
    "parentKind": "CreateTableStatement"
  },
  {
    "childKinds": [
      "MethodSpecifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodSpecifier",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "childKinds": [
      "ExecuteAsTriggerOption",
      "TriggerOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "StatementList",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "childKinds": [
      "TriggerAction"
    ],
    "edgeKind": "array",
    "edgeName": "TriggerActions",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "childKinds": [
      "TriggerObject"
    ],
    "edgeKind": "single",
    "edgeName": "TriggerObject",
    "parentKind": "CreateTriggerStatement"
  },
  {
    "childKinds": [
      "TableDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Definition",
    "parentKind": "CreateTypeTableStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateTypeTableStatement"
  },
  {
    "childKinds": [
      "ClusterByTableOption",
      "DataRetentionTableOption",
      "DurabilityTableOption",
      "FileStreamOnTableOption",
      "FileTableCollateFileNameTableOption",
      "FileTableConstraintNameTableOption",
      "FileTableDirectoryTableOption",
      "LedgerTableOption",
      "LedgerViewOption",
      "LocationOption",
      "LockEscalationTableOption",
      "MemoryOptimizedTableOption",
      "RemoteDataArchiveAlterTableOption",
      "RemoteDataArchiveTableOption",
      "SystemVersioningTableOption",
      "TableDataCompressionOption",
      "TableDistributionOption",
      "TableIndexOption",
      "TablePartitionOption",
      "TableXmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateTypeTableStatement"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "CreateTypeUddtStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateTypeUddtStatement"
  },
  {
    "childKinds": [
      "NullableConstraintDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "NullableConstraint",
    "parentKind": "CreateTypeUddtStatement"
  },
  {
    "childKinds": [
      "AssemblyName"
    ],
    "edgeKind": "single",
    "edgeName": "AssemblyName",
    "parentKind": "CreateTypeUdtStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateTypeUdtStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateUserStatement"
  },
  {
    "childKinds": [
      "UserLoginOption"
    ],
    "edgeKind": "single",
    "edgeName": "UserLoginOption",
    "parentKind": "CreateUserStatement"
  },
  {
    "childKinds": [
      "IdentifierPrincipalOption",
      "LiteralPrincipalOption",
      "OnOffPrincipalOption",
      "PasswordAlterPrincipalOption",
      "PrincipalOption"
    ],
    "edgeKind": "array",
    "edgeName": "UserOptions",
    "parentKind": "CreateUserStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateVectorIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateVectorIndexStatement"
  },
  {
    "childKinds": [
      "FileGroupOrPartitionScheme"
    ],
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateVectorIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateVectorIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "VectorColumn",
    "parentKind": "CreateVectorIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "CreateViewStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "CreateViewStatement"
  },
  {
    "childKinds": [
      "SelectStatement",
      "SelectStatementSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "CreateViewStatement"
  },
  {
    "childKinds": [
      "ViewDistributionOption",
      "ViewForAppendOption",
      "ViewOption"
    ],
    "edgeKind": "array",
    "edgeName": "ViewOptions",
    "parentKind": "CreateViewStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ClassifierName",
    "parentKind": "CreateWorkloadClassifierStatement"
  },
  {
    "childKinds": [
      "ClassifierEndTimeOption",
      "ClassifierImportanceOption",
      "ClassifierMemberNameOption",
      "ClassifierStartTimeOption",
      "ClassifierWlmContextOption",
      "ClassifierWlmLabelOption",
      "ClassifierWorkloadGroupOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CreateWorkloadClassifierStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ExternalPoolName",
    "parentKind": "CreateWorkloadGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateWorkloadGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "PoolName",
    "parentKind": "CreateWorkloadGroupStatement"
  },
  {
    "childKinds": [
      "WorkloadGroupImportanceParameter",
      "WorkloadGroupResourceParameter"
    ],
    "edgeKind": "array",
    "edgeName": "WorkloadGroupParameters",
    "parentKind": "CreateWorkloadGroupStatement"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "childKinds": [
      "FileGroupOrPartitionScheme"
    ],
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OnName",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SecondaryXmlIndexName",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "XmlColumn",
    "parentKind": "CreateXmlIndexStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "CreateXmlSchemaCollectionStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CreateXmlSchemaCollectionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "CryptoMechanism"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PasswordOrSignature",
    "parentKind": "CryptoMechanism"
  },
  {
    "childKinds": [
      "CompositeGroupingSpecification",
      "CubeGroupingSpecification",
      "ExpressionGroupingSpecification",
      "GrandTotalGroupingSpecification",
      "GroupingSetsGroupingSpecification",
      "RollupGroupingSpecification"
    ],
    "edgeKind": "array",
    "edgeName": "Arguments",
    "parentKind": "CubeGroupingSpecification"
  },
  {
    "childKinds": [
      "CursorOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "CursorDefinition"
  },
  {
    "childKinds": [
      "SelectStatement",
      "SelectStatementSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Select",
    "parentKind": "CursorDefinition"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "CursorId"
  },
  {
    "childKinds": [
      "BinaryLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PlanHandle",
    "parentKind": "DatabaseConfigurationClearOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "GenericOptionKind",
    "parentKind": "DatabaseConfigurationSetOption"
  },
  {
    "childKinds": [
      "CompressionPartitionRange"
    ],
    "edgeKind": "array",
    "edgeName": "PartitionRanges",
    "parentKind": "DataCompressionOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "DataModificationTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "DataModificationTableReference"
  },
  {
    "childKinds": [
      "DeleteSpecification",
      "InsertSpecification",
      "MergeSpecification",
      "UpdateSpecification"
    ],
    "edgeKind": "single",
    "edgeName": "DataModificationSpecification",
    "parentKind": "DataModificationTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "FilterColumn",
    "parentKind": "DataRetentionTableOption"
  },
  {
    "childKinds": [
      "RetentionPeriodDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "RetentionPeriod",
    "parentKind": "DataRetentionTableOption"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "DataTypeSequenceOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "DbccNamedLiteral"
  },
  {
    "childKinds": [
      "DbccNamedLiteral"
    ],
    "edgeKind": "array",
    "edgeName": "Literals",
    "parentKind": "DbccStatement"
  },
  {
    "childKinds": [
      "DbccOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "DbccStatement"
  },
  {
    "childKinds": [
      "CursorId"
    ],
    "edgeKind": "single",
    "edgeName": "Cursor",
    "parentKind": "DeallocateCursorStatement"
  },
  {
    "childKinds": [
      "CursorDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "CursorDefinition",
    "parentKind": "DeclareCursorStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DeclareCursorStatement"
  },
  {
    "childKinds": [
      "TableDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Definition",
    "parentKind": "DeclareTableVariableBody"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "VariableName",
    "parentKind": "DeclareTableVariableBody"
  },
  {
    "childKinds": [
      "DeclareTableVariableBody"
    ],
    "edgeKind": "single",
    "edgeName": "Body",
    "parentKind": "DeclareTableVariableStatement"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "DeclareVariableElement"
  },
  {
    "childKinds": [
      "NullableConstraintDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Nullable",
    "parentKind": "DeclareVariableElement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "DeclareVariableElement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "VariableName",
    "parentKind": "DeclareVariableElement"
  },
  {
    "childKinds": [
      "DeclareVariableElement",
      "ProcedureParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Declarations",
    "parentKind": "DeclareVariableStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "DefaultConstraintDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "DefaultConstraintDefinition"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "DefaultConstraintDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "DefaultLiteral"
  },
  {
    "childKinds": [
      "FromClause"
    ],
    "edgeKind": "single",
    "edgeName": "FromClause",
    "parentKind": "DeleteSpecification"
  },
  {
    "childKinds": [
      "OutputClause"
    ],
    "edgeKind": "single",
    "edgeName": "OutputClause",
    "parentKind": "DeleteSpecification"
  },
  {
    "childKinds": [
      "OutputIntoClause"
    ],
    "edgeKind": "single",
    "edgeName": "OutputIntoClause",
    "parentKind": "DeleteSpecification"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "DeleteSpecification"
  },
  {
    "childKinds": [
      "TopRowFilter"
    ],
    "edgeKind": "single",
    "edgeName": "TopRowFilter",
    "parentKind": "DeleteSpecification"
  },
  {
    "childKinds": [
      "WhereClause"
    ],
    "edgeKind": "single",
    "edgeName": "WhereClause",
    "parentKind": "DeleteSpecification"
  },
  {
    "childKinds": [
      "DeleteSpecification"
    ],
    "edgeKind": "single",
    "edgeName": "DeleteSpecification",
    "parentKind": "DeleteStatement"
  },
  {
    "childKinds": [
      "LiteralOptimizerHint",
      "OptimizeForOptimizerHint",
      "OptimizerHint",
      "TableHintsOptimizerHint",
      "UseHintList"
    ],
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "DeleteStatement"
  },
  {
    "childKinds": [
      "WithCtesAndXmlNamespaces"
    ],
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "DeleteStatement"
  },
  {
    "childKinds": [
      "CommandSecurityElement80",
      "PrivilegeSecurityElement80"
    ],
    "edgeKind": "single",
    "edgeName": "SecurityElement80",
    "parentKind": "DenyStatement80"
  },
  {
    "childKinds": [
      "SecurityUserClause80"
    ],
    "edgeKind": "single",
    "edgeName": "SecurityUserClause80",
    "parentKind": "DenyStatement80"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AsClause",
    "parentKind": "DenyStatement"
  },
  {
    "childKinds": [
      "Permission"
    ],
    "edgeKind": "array",
    "edgeName": "Permissions",
    "parentKind": "DenyStatement"
  },
  {
    "childKinds": [
      "SecurityPrincipal"
    ],
    "edgeKind": "array",
    "edgeName": "Principals",
    "parentKind": "DenyStatement"
  },
  {
    "childKinds": [
      "SecurityTargetObject"
    ],
    "edgeKind": "single",
    "edgeName": "SecurityTargetObject",
    "parentKind": "DenyStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "LogicalDevice",
    "parentKind": "DeviceInfo"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "PhysicalDevice",
    "parentKind": "DeviceInfo"
  },
  {
    "childKinds": [
      "DiskStatementOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "DiskStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "DiskStatementOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "DistinctPredicate"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "DistinctPredicate"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropAggregateStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "DropAlterFullTextIndexAction"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropApplicationRoleStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropAssemblyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropAsymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropAvailabilityGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropBrokerPriorityStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropCertificateStatement"
  },
  {
    "childKinds": [
      "FileGroupOrPartitionScheme"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "DropClusteredConstraintMoveOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "DropClusteredConstraintValueOption"
  },
  {
    "childKinds": [
      "LowPriorityLockWaitAbortAfterWaitOption",
      "LowPriorityLockWaitMaxDurationOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "DropClusteredConstraintWaitAtLowPriorityLockOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropColumnEncryptionKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropColumnMasterKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropContractStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropCredentialStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropCryptographicProviderStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropDatabaseAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Databases",
    "parentKind": "DropDatabaseStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropDefaultStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropEndpointStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Notifications",
    "parentKind": "DropEventNotificationStatement"
  },
  {
    "childKinds": [
      "EventNotificationObjectScope"
    ],
    "edgeKind": "single",
    "edgeName": "Scope",
    "parentKind": "DropEventNotificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropEventSessionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalDataSourceStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalFileFormatStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalLanguageStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "DropExternalLanguageStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalLibraryStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Owner",
    "parentKind": "DropExternalLibraryStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalModelStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalResourcePoolStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalStreamingJobStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropExternalStreamStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropExternalTableStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropFederationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropFullTextCatalogStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "TableName",
    "parentKind": "DropFullTextIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropFullTextStopListStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropFunctionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Index",
    "parentKind": "DropIndexClause"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Object",
    "parentKind": "DropIndexClause"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "DropIndexClause"
  },
  {
    "childKinds": [
      "BackwardsCompatibleDropIndexClause",
      "DropIndexClause"
    ],
    "edgeKind": "array",
    "edgeName": "DropIndexClauses",
    "parentKind": "DropIndexStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropLoginStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Member",
    "parentKind": "DropMemberAlterRoleAction"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropMessageTypeStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropPartitionFunctionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropPartitionSchemeStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropProcedureStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropQueueStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropRemoteServiceBindingStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropResourcePoolStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropRouteStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropRuleStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Schema",
    "parentKind": "DropSchemaStatement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PropertyName",
    "parentKind": "DropSearchPropertyListAction"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropSearchPropertyListStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropSecurityPolicyStatement"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "DropSensitivityClassificationStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropSequenceStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropServerAuditSpecificationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropServerAuditStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropServerRoleStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropServiceStatement"
  },
  {
    "childKinds": [
      "CryptoMechanism"
    ],
    "edgeKind": "array",
    "edgeName": "Cryptos",
    "parentKind": "DropSignatureStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Element",
    "parentKind": "DropSignatureStatement"
  },
  {
    "childKinds": [
      "ChildObjectName"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropStatisticsStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropSynonymStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropTableStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropTriggerStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropTypeStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropUserStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "Objects",
    "parentKind": "DropViewStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropWorkloadClassifierStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropWorkloadGroupStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "DropXmlSchemaCollectionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "GenericOptionKind",
    "parentKind": "DWCompatibilityLevelConfigurationOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "DWCompatibilityLevelConfigurationOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ElasticPoolName",
    "parentKind": "ElasticPoolSpecification"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "array",
    "edgeName": "TriggerNames",
    "parentKind": "EnableDisableTriggerStatement"
  },
  {
    "childKinds": [
      "TriggerObject"
    ],
    "edgeKind": "single",
    "edgeName": "TriggerObject",
    "parentKind": "EnableDisableTriggerStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "EncryptedValueParameter"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Conversation",
    "parentKind": "EndConversationStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ErrorCode",
    "parentKind": "EndConversationStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ErrorDescription",
    "parentKind": "EndConversationStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "EndpointAffinity"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "EventValue",
    "parentKind": "EventDeclarationCompareFunctionParameter"
  },
  {
    "childKinds": [
      "EventSessionObjectName"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "EventDeclarationCompareFunctionParameter"
  },
  {
    "childKinds": [
      "SourceDeclaration"
    ],
    "edgeKind": "single",
    "edgeName": "SourceDeclaration",
    "parentKind": "EventDeclarationCompareFunctionParameter"
  },
  {
    "childKinds": [
      "EventSessionObjectName"
    ],
    "edgeKind": "array",
    "edgeName": "EventDeclarationActionParameters",
    "parentKind": "EventDeclaration"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "EventDeclarationPredicateParameter",
    "parentKind": "EventDeclaration"
  },
  {
    "childKinds": [
      "EventDeclarationSetParameter"
    ],
    "edgeKind": "array",
    "edgeName": "EventDeclarationSetParameters",
    "parentKind": "EventDeclaration"
  },
  {
    "childKinds": [
      "EventSessionObjectName"
    ],
    "edgeKind": "single",
    "edgeName": "ObjectName",
    "parentKind": "EventDeclaration"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "EventField",
    "parentKind": "EventDeclarationSetParameter"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "EventValue",
    "parentKind": "EventDeclarationSetParameter"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "QueueName",
    "parentKind": "EventNotificationObjectScope"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "MultiPartIdentifier",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "MultiPartIdentifier",
    "parentKind": "EventSessionObjectName"
  },
  {
    "childKinds": [
      "EventDeclaration"
    ],
    "edgeKind": "array",
    "edgeName": "EventDeclarations",
    "parentKind": "EventSessionStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "EventSessionStatement"
  },
  {
    "childKinds": [
      "EventRetentionSessionOption",
      "LiteralSessionOption",
      "MaxDispatchLatencySessionOption",
      "MemoryPartitionSessionOption",
      "OnOffSessionOption"
    ],
    "edgeKind": "array",
    "edgeName": "SessionOptions",
    "parentKind": "EventSessionStatement"
  },
  {
    "childKinds": [
      "TargetDeclaration"
    ],
    "edgeKind": "array",
    "edgeName": "TargetDeclarations",
    "parentKind": "EventSessionStatement"
  },
  {
    "childKinds": [
      "AdHocDataSource"
    ],
    "edgeKind": "single",
    "edgeName": "AdHocDataSource",
    "parentKind": "ExecutableProcedureReference"
  },
  {
    "childKinds": [
      "ExecuteParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "ExecutableProcedureReference"
  },
  {
    "childKinds": [
      "ProcedureReferenceName"
    ],
    "edgeKind": "single",
    "edgeName": "ProcedureReference",
    "parentKind": "ExecutableProcedureReference"
  },
  {
    "childKinds": [
      "ExecuteParameter"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "ExecutableStringList"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Strings",
    "parentKind": "ExecutableStringList"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Literal",
    "parentKind": "ExecuteAsClause"
  },
  {
    "childKinds": [
      "ExecuteAsClause"
    ],
    "edgeKind": "single",
    "edgeName": "ExecuteAs",
    "parentKind": "ExecuteAsFunctionOption"
  },
  {
    "childKinds": [
      "ExecuteAsClause"
    ],
    "edgeKind": "single",
    "edgeName": "ExecuteAs",
    "parentKind": "ExecuteAsProcedureOption"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Cookie",
    "parentKind": "ExecuteAsStatement"
  },
  {
    "childKinds": [
      "ExecuteContext"
    ],
    "edgeKind": "single",
    "edgeName": "ExecuteContext",
    "parentKind": "ExecuteAsStatement"
  },
  {
    "childKinds": [
      "ExecuteAsClause"
    ],
    "edgeKind": "single",
    "edgeName": "ExecuteAsClause",
    "parentKind": "ExecuteAsTriggerOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Principal",
    "parentKind": "ExecuteContext"
  },
  {
    "childKinds": [
      "ExecuteSpecification"
    ],
    "edgeKind": "single",
    "edgeName": "Execute",
    "parentKind": "ExecuteInsertSource"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "ExecuteParameter"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "ExecuteParameter"
  },
  {
    "childKinds": [
      "ExecutableProcedureReference",
      "ExecutableStringList"
    ],
    "edgeKind": "single",
    "edgeName": "ExecutableEntity",
    "parentKind": "ExecuteSpecification"
  },
  {
    "childKinds": [
      "ExecuteContext"
    ],
    "edgeKind": "single",
    "edgeName": "ExecuteContext",
    "parentKind": "ExecuteSpecification"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "LinkedServer",
    "parentKind": "ExecuteSpecification"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "ExecuteSpecification"
  },
  {
    "childKinds": [
      "ExecuteSpecification"
    ],
    "edgeKind": "single",
    "edgeName": "ExecuteSpecification",
    "parentKind": "ExecuteStatement"
  },
  {
    "childKinds": [
      "ExecuteOption",
      "ResultSetsExecuteOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "ExecuteStatement"
  },
  {
    "childKinds": [
      "ScalarSubquery"
    ],
    "edgeKind": "single",
    "edgeName": "Subquery",
    "parentKind": "ExistsPredicate"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ExpressionCallTarget"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ExpressionGroupingSpecification"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ExpressionWithSortOrder"
  },
  {
    "childKinds": [
      "IdentifierPrincipalOption",
      "LiteralPrincipalOption",
      "OnOffPrincipalOption",
      "PasswordAlterPrincipalOption",
      "PrincipalOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "ExternalCreateLoginSource"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ExternalDataSourceLiteralOrIdentifierOption"
  },
  {
    "childKinds": [
      "ExternalFileFormatContainerOption",
      "ExternalFileFormatLiteralOption",
      "ExternalFileFormatUseDefaultTypeOption"
    ],
    "edgeKind": "array",
    "edgeName": "Suboptions",
    "parentKind": "ExternalFileFormatContainerOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ExternalFileFormatLiteralOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Content",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "EnvironmentVariables",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "FileName",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Parameters",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Path",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Platform",
    "parentKind": "ExternalLanguageFileOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Content",
    "parentKind": "ExternalLibraryFileOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Path",
    "parentKind": "ExternalLibraryFileOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Platform",
    "parentKind": "ExternalLibraryFileOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "ExternalResourcePoolAffinitySpecification"
  },
  {
    "childKinds": [
      "LiteralRange",
      "ProcessAffinityRange"
    ],
    "edgeKind": "array",
    "edgeName": "PoolAffinityRanges",
    "parentKind": "ExternalResourcePoolAffinitySpecification"
  },
  {
    "childKinds": [
      "ExternalResourcePoolAffinitySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "AffinitySpecification",
    "parentKind": "ExternalResourcePoolParameter"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "ExternalResourcePoolParameter"
  },
  {
    "childKinds": [
      "ExternalResourcePoolParameter"
    ],
    "edgeKind": "array",
    "edgeName": "ExternalResourcePoolParameters",
    "parentKind": "ExternalResourcePoolStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ExternalResourcePoolStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ExternalStreamLiteralOrIdentifierOption"
  },
  {
    "childKinds": [
      "ColumnDefinition",
      "ColumnDefinitionBase",
      "OpenRowsetColumnDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnDefinition",
    "parentKind": "ExternalTableColumnDefinition"
  },
  {
    "childKinds": [
      "NullableConstraintDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "NullableConstraint",
    "parentKind": "ExternalTableColumnDefinition"
  },
  {
    "childKinds": [
      "ExternalTableReplicatedDistributionPolicy",
      "ExternalTableRoundRobinDistributionPolicy",
      "ExternalTableShardedDistributionPolicy"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ExternalTableDistributionOption"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ExternalTableLiteralOrIdentifierOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ShardingColumn",
    "parentKind": "ExternalTableShardedDistributionPolicy"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ExtractFromExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ExtractedElement",
    "parentKind": "ExtractFromExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnName",
    "parentKind": "FederationScheme"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DistributionName",
    "parentKind": "FederationScheme"
  },
  {
    "childKinds": [
      "CursorId"
    ],
    "edgeKind": "single",
    "edgeName": "Cursor",
    "parentKind": "FetchCursorStatement"
  },
  {
    "childKinds": [
      "FetchType"
    ],
    "edgeKind": "single",
    "edgeName": "FetchType",
    "parentKind": "FetchCursorStatement"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "IntoVariables",
    "parentKind": "FetchCursorStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "RowOffset",
    "parentKind": "FetchType"
  },
  {
    "childKinds": [
      "FileDeclarationOption",
      "FileGrowthFileDeclarationOption",
      "FileNameFileDeclarationOption",
      "MaxSizeFileDeclarationOption",
      "NameFileDeclarationOption",
      "SizeFileDeclarationOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "FileDeclaration"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "FileEncryptionSource"
  },
  {
    "childKinds": [
      "FileDeclaration"
    ],
    "edgeKind": "array",
    "edgeName": "FileDeclarations",
    "parentKind": "FileGroupDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "FileGroupDefinition"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "FileGroupOrPartitionScheme"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "PartitionSchemeColumns",
    "parentKind": "FileGroupOrPartitionScheme"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "GrowthIncrement",
    "parentKind": "FileGrowthFileDeclarationOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "OSFileName",
    "parentKind": "FileNameFileDeclarationOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "DirectoryName",
    "parentKind": "FileStreamDatabaseOption"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "FileStreamOn",
    "parentKind": "FileStreamOnDropIndexOption"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "FileStreamOnTableOption"
  },
  {
    "childKinds": [
      "FileStreamDatabaseOption"
    ],
    "edgeKind": "single",
    "edgeName": "FileStreamOption",
    "parentKind": "FileStreamRestoreOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "FileTableCollateFileNameTableOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "FileTableConstraintNameTableOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "FileTableDirectoryTableOption"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "ColumnValues",
    "parentKind": "ForceSeekTableHint"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "IndexValue",
    "parentKind": "ForceSeekTableHint"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "ForeignKeyConstraintDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "ForeignKeyConstraintDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "ReferencedTableColumns",
    "parentKind": "ForeignKeyConstraintDefinition"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ReferenceTableName",
    "parentKind": "ForeignKeyConstraintDefinition"
  },
  {
    "childKinds": [
      "PredictTableReference"
    ],
    "edgeKind": "array",
    "edgeName": "PredictTableReference",
    "parentKind": "FromClause"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "array",
    "edgeName": "TableReferences",
    "parentKind": "FromClause"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "CatalogName",
    "parentKind": "FullTextCatalogAndFileGroup"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "FileGroupName",
    "parentKind": "FullTextCatalogAndFileGroup"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "LanguageTerm",
    "parentKind": "FullTextIndexColumn"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "FullTextIndexColumn"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "TypeColumn",
    "parentKind": "FullTextIndexColumn"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "FullTextPredicate"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "LanguageTerm",
    "parentKind": "FullTextPredicate"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PropertyName",
    "parentKind": "FullTextPredicate"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "FullTextPredicate"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "LanguageTerm",
    "parentKind": "FullTextStopListAction"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "StopWord",
    "parentKind": "FullTextStopListAction"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "FullTextTableReference"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "FullTextTableReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Language",
    "parentKind": "FullTextTableReference"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PropertyName",
    "parentKind": "FullTextTableReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "FullTextTableReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "TableName",
    "parentKind": "FullTextTableReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TopN",
    "parentKind": "FullTextTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "AbsentOrNullOnNull",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "ExpressionCallTarget",
      "MultiPartIdentifierCallTarget",
      "UserDefinedTypeCallTarget"
    ],
    "edgeKind": "single",
    "edgeName": "CallTarget",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "FunctionName",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "IgnoreRespectNulls",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "OrderByClause"
    ],
    "edgeKind": "single",
    "edgeName": "JsonOrderByClause",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "JsonKeyValue"
    ],
    "edgeKind": "array",
    "edgeName": "JsonParameters",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "OverClause"
    ],
    "edgeKind": "single",
    "edgeName": "OverClause",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "array",
    "edgeName": "ReturnType",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "FunctionCall"
    ],
    "edgeKind": "single",
    "edgeName": "MutatorFunction",
    "parentKind": "FunctionCallSetClause"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "TrimOptions",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "WithinGroupClause"
    ],
    "edgeKind": "single",
    "edgeName": "WithinGroupClause",
    "parentKind": "FunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "GeneralSetCommand"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "GenericOptionKind",
    "parentKind": "GenericConfigurationOption"
  },
  {
    "childKinds": [
      "IdentifierOrScalarExpression"
    ],
    "edgeKind": "single",
    "edgeName": "GenericOptionState",
    "parentKind": "GenericConfigurationOption"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "GroupId",
    "parentKind": "GetConversationGroupStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Queue",
    "parentKind": "GetConversationGroupStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "GlobalFunctionTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "GlobalFunctionTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "GlobalFunctionTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "GlobalVariableExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "LabelName",
    "parentKind": "GoToStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AsClause",
    "parentKind": "GrantStatement80"
  },
  {
    "childKinds": [
      "CommandSecurityElement80",
      "PrivilegeSecurityElement80"
    ],
    "edgeKind": "single",
    "edgeName": "SecurityElement80",
    "parentKind": "GrantStatement80"
  },
  {
    "childKinds": [
      "SecurityUserClause80"
    ],
    "edgeKind": "single",
    "edgeName": "SecurityUserClause80",
    "parentKind": "GrantStatement80"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AsClause",
    "parentKind": "GrantStatement"
  },
  {
    "childKinds": [
      "Permission"
    ],
    "edgeKind": "array",
    "edgeName": "Permissions",
    "parentKind": "GrantStatement"
  },
  {
    "childKinds": [
      "SecurityPrincipal"
    ],
    "edgeKind": "array",
    "edgeName": "Principals",
    "parentKind": "GrantStatement"
  },
  {
    "childKinds": [
      "SecurityTargetObject"
    ],
    "edgeKind": "single",
    "edgeName": "SecurityTargetObject",
    "parentKind": "GrantStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "FromNode",
    "parentKind": "GraphConnectionBetweenNodes"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ToNode",
    "parentKind": "GraphConnectionBetweenNodes"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "GraphConnectionConstraintDefinition"
  },
  {
    "childKinds": [
      "GraphConnectionBetweenNodes"
    ],
    "edgeKind": "array",
    "edgeName": "FromNodeToNodeList",
    "parentKind": "GraphConnectionConstraintDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Edge",
    "parentKind": "GraphMatchCompositeExpression"
  },
  {
    "childKinds": [
      "GraphMatchNodeExpression"
    ],
    "edgeKind": "single",
    "edgeName": "LeftNode",
    "parentKind": "GraphMatchCompositeExpression"
  },
  {
    "childKinds": [
      "GraphMatchNodeExpression"
    ],
    "edgeKind": "single",
    "edgeName": "RightNode",
    "parentKind": "GraphMatchCompositeExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Edge",
    "parentKind": "GraphMatchExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "LeftNode",
    "parentKind": "GraphMatchExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "RightNode",
    "parentKind": "GraphMatchExpression"
  },
  {
    "childKinds": [
      "GraphMatchNodeExpression"
    ],
    "edgeKind": "single",
    "edgeName": "LeftExpression",
    "parentKind": "GraphMatchLastNodePredicate"
  },
  {
    "childKinds": [
      "GraphMatchNodeExpression"
    ],
    "edgeKind": "single",
    "edgeName": "RightExpression",
    "parentKind": "GraphMatchLastNodePredicate"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Node",
    "parentKind": "GraphMatchNodeExpression"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "GraphMatchPredicate"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "array",
    "edgeName": "Expression",
    "parentKind": "GraphMatchRecursivePredicate"
  },
  {
    "childKinds": [
      "GraphMatchNodeExpression"
    ],
    "edgeKind": "single",
    "edgeName": "OuterNodeExpression",
    "parentKind": "GraphMatchRecursivePredicate"
  },
  {
    "childKinds": [
      "GraphRecursiveMatchQuantifier"
    ],
    "edgeKind": "single",
    "edgeName": "RecursiveQuantifier",
    "parentKind": "GraphMatchRecursivePredicate"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "LowerLimit",
    "parentKind": "GraphRecursiveMatchQuantifier"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "UpperLimit",
    "parentKind": "GraphRecursiveMatchQuantifier"
  },
  {
    "childKinds": [
      "GridParameter"
    ],
    "edgeKind": "array",
    "edgeName": "GridParameters",
    "parentKind": "GridsSpatialIndexOption"
  },
  {
    "childKinds": [
      "CompositeGroupingSpecification",
      "CubeGroupingSpecification",
      "ExpressionGroupingSpecification",
      "GrandTotalGroupingSpecification",
      "GroupingSetsGroupingSpecification",
      "RollupGroupingSpecification"
    ],
    "edgeKind": "array",
    "edgeName": "GroupingSpecifications",
    "parentKind": "GroupByClause"
  },
  {
    "childKinds": [
      "CompositeGroupingSpecification",
      "CubeGroupingSpecification",
      "ExpressionGroupingSpecification",
      "GrandTotalGroupingSpecification",
      "GroupingSetsGroupingSpecification",
      "RollupGroupingSpecification"
    ],
    "edgeKind": "array",
    "edgeName": "Sets",
    "parentKind": "GroupingSetsGroupingSpecification"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "GroupName",
    "parentKind": "HadrAvailabilityGroupDatabaseOption"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "HavingClause"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "IdentifierAtomicBlockOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "IdentifierDatabaseOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "IdentifierLiteral"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "IdentifierOrScalarExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ScalarExpression",
    "parentKind": "IdentifierOrScalarExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "IdentifierOrValueExpression"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ValueExpression",
    "parentKind": "IdentifierOrValueExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "IdentifierPrincipalOption"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "IdentityFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Increment",
    "parentKind": "IdentityFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Seed",
    "parentKind": "IdentityFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "IdentityIncrement",
    "parentKind": "IdentityOptions"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "IdentitySeed",
    "parentKind": "IdentityOptions"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "IdentityPhrase",
    "parentKind": "IdentityValueKeyOption"
  },
  {
    "childKinds": [
      "AddSensitivityClassificationStatement",
      "AddSignatureStatement",
      "AlterApplicationRoleStatement",
      "AlterAssemblyStatement",
      "AlterAsymmetricKeyStatement",
      "AlterAuthorizationStatement",
      "AlterAvailabilityGroupStatement",
      "AlterBrokerPriorityStatement",
      "AlterCertificateStatement",
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
      "AlterServerConfigurationSetBufferPoolExtensionStatement",
      "AlterServerConfigurationSetDiagnosticsLogStatement",
      "AlterServerConfigurationSetExternalAuthenticationStatement",
      "AlterServerConfigurationSetFailoverClusterPropertyStatement",
      "AlterServerConfigurationSetHadrClusterStatement",
      "AlterServerConfigurationSetSoftNumaStatement",
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
      "BackupCertificateStatement",
      "BackupDatabaseStatement",
      "BackupMasterKeyStatement",
      "BackupServiceMasterKeyStatement",
      "BackupTransactionLogStatement",
      "BeginConversationTimerStatement",
      "BeginDialogStatement",
      "BeginEndAtomicBlockStatement",
      "BeginEndBlockStatement",
      "BeginTransactionStatement",
      "BreakStatement",
      "BulkInsertStatement",
      "CheckpointStatement",
      "CloseCursorStatement",
      "CloseMasterKeyStatement",
      "CloseSymmetricKeyStatement",
      "CommitTransactionStatement",
      "ContinueStatement",
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
      "CreateExternalStreamingJobStatement",
      "CreateExternalStreamStatement",
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
      "DbccStatement",
      "DeallocateCursorStatement",
      "DeclareCursorStatement",
      "DeclareTableVariableStatement",
      "DeclareVariableStatement",
      "DeleteStatement",
      "DenyStatement",
      "DenyStatement80",
      "DiskStatement",
      "DropAggregateStatement",
      "DropApplicationRoleStatement",
      "DropAssemblyStatement",
      "DropAsymmetricKeyStatement",
      "DropAvailabilityGroupStatement",
      "DropBrokerPriorityStatement",
      "DropCertificateStatement",
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
      "DropExternalStreamingJobStatement",
      "DropExternalStreamStatement",
      "DropExternalTableStatement",
      "DropFederationStatement",
      "DropFullTextCatalogStatement",
      "DropFullTextIndexStatement",
      "DropFullTextStopListStatement",
      "DropFunctionStatement",
      "DropIndexStatement",
      "DropLoginStatement",
      "DropMasterKeyStatement",
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
      "EnableDisableTriggerStatement",
      "EndConversationStatement",
      "EventSessionStatement",
      "ExecuteAsStatement",
      "ExecuteStatement",
      "ExternalResourcePoolStatement",
      "FetchCursorStatement",
      "GetConversationGroupStatement",
      "GoToStatement",
      "GrantStatement",
      "GrantStatement80",
      "IfStatement",
      "IndexDefinition",
      "InsertBulkStatement",
      "InsertStatement",
      "KillQueryNotificationSubscriptionStatement",
      "KillStatement",
      "KillStatsJobStatement",
      "LabelStatement",
      "LineNoStatement",
      "MergeStatement",
      "MoveConversationStatement",
      "OpenCursorStatement",
      "OpenMasterKeyStatement",
      "OpenSymmetricKeyStatement",
      "PredicateSetStatement",
      "PrintStatement",
      "RaiseErrorLegacyStatement",
      "RaiseErrorStatement",
      "ReadTextStatement",
      "ReceiveStatement",
      "ReconfigureStatement",
      "RenameEntityStatement",
      "ResourcePoolStatement",
      "RestoreMasterKeyStatement",
      "RestoreServiceMasterKeyStatement",
      "RestoreStatement",
      "ReturnStatement",
      "RevertStatement",
      "RevokeStatement",
      "RevokeStatement80",
      "RollbackTransactionStatement",
      "SaveTransactionStatement",
      "SelectStatement",
      "SelectStatementSnippet",
      "SendStatement",
      "SetCommandStatement",
      "SetErrorLevelStatement",
      "SetIdentityInsertStatement",
      "SetOffsetsStatement",
      "SetRowCountStatement",
      "SetStatisticsStatement",
      "SetTextSizeStatement",
      "SetTransactionIsolationLevelStatement",
      "SetUserStatement",
      "SetVariableStatement",
      "ShutdownStatement",
      "ThrowStatement",
      "TruncateTableStatement",
      "TryCatchStatement",
      "TSqlStatementSnippet",
      "UpdateStatement",
      "UpdateStatisticsStatement",
      "UpdateTextStatement",
      "UseFederationStatement",
      "UseStatement",
      "WaitForStatement",
      "WhileStatement",
      "WriteTextStatement"
    ],
    "edgeKind": "single",
    "edgeName": "ElseStatement",
    "parentKind": "IfStatement"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "Predicate",
    "parentKind": "IfStatement"
  },
  {
    "childKinds": [
      "AddSensitivityClassificationStatement",
      "AddSignatureStatement",
      "AlterApplicationRoleStatement",
      "AlterAssemblyStatement",
      "AlterAsymmetricKeyStatement",
      "AlterAuthorizationStatement",
      "AlterAvailabilityGroupStatement",
      "AlterBrokerPriorityStatement",
      "AlterCertificateStatement",
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
      "AlterServerConfigurationSetBufferPoolExtensionStatement",
      "AlterServerConfigurationSetDiagnosticsLogStatement",
      "AlterServerConfigurationSetExternalAuthenticationStatement",
      "AlterServerConfigurationSetFailoverClusterPropertyStatement",
      "AlterServerConfigurationSetHadrClusterStatement",
      "AlterServerConfigurationSetSoftNumaStatement",
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
      "BackupCertificateStatement",
      "BackupDatabaseStatement",
      "BackupMasterKeyStatement",
      "BackupServiceMasterKeyStatement",
      "BackupTransactionLogStatement",
      "BeginConversationTimerStatement",
      "BeginDialogStatement",
      "BeginEndAtomicBlockStatement",
      "BeginEndBlockStatement",
      "BeginTransactionStatement",
      "BreakStatement",
      "BulkInsertStatement",
      "CheckpointStatement",
      "CloseCursorStatement",
      "CloseMasterKeyStatement",
      "CloseSymmetricKeyStatement",
      "CommitTransactionStatement",
      "ContinueStatement",
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
      "CreateExternalStreamingJobStatement",
      "CreateExternalStreamStatement",
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
      "DbccStatement",
      "DeallocateCursorStatement",
      "DeclareCursorStatement",
      "DeclareTableVariableStatement",
      "DeclareVariableStatement",
      "DeleteStatement",
      "DenyStatement",
      "DenyStatement80",
      "DiskStatement",
      "DropAggregateStatement",
      "DropApplicationRoleStatement",
      "DropAssemblyStatement",
      "DropAsymmetricKeyStatement",
      "DropAvailabilityGroupStatement",
      "DropBrokerPriorityStatement",
      "DropCertificateStatement",
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
      "DropExternalStreamingJobStatement",
      "DropExternalStreamStatement",
      "DropExternalTableStatement",
      "DropFederationStatement",
      "DropFullTextCatalogStatement",
      "DropFullTextIndexStatement",
      "DropFullTextStopListStatement",
      "DropFunctionStatement",
      "DropIndexStatement",
      "DropLoginStatement",
      "DropMasterKeyStatement",
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
      "EnableDisableTriggerStatement",
      "EndConversationStatement",
      "EventSessionStatement",
      "ExecuteAsStatement",
      "ExecuteStatement",
      "ExternalResourcePoolStatement",
      "FetchCursorStatement",
      "GetConversationGroupStatement",
      "GoToStatement",
      "GrantStatement",
      "GrantStatement80",
      "IfStatement",
      "IndexDefinition",
      "InsertBulkStatement",
      "InsertStatement",
      "KillQueryNotificationSubscriptionStatement",
      "KillStatement",
      "KillStatsJobStatement",
      "LabelStatement",
      "LineNoStatement",
      "MergeStatement",
      "MoveConversationStatement",
      "OpenCursorStatement",
      "OpenMasterKeyStatement",
      "OpenSymmetricKeyStatement",
      "PredicateSetStatement",
      "PrintStatement",
      "RaiseErrorLegacyStatement",
      "RaiseErrorStatement",
      "ReadTextStatement",
      "ReceiveStatement",
      "ReconfigureStatement",
      "RenameEntityStatement",
      "ResourcePoolStatement",
      "RestoreMasterKeyStatement",
      "RestoreServiceMasterKeyStatement",
      "RestoreStatement",
      "ReturnStatement",
      "RevertStatement",
      "RevokeStatement",
      "RevokeStatement80",
      "RollbackTransactionStatement",
      "SaveTransactionStatement",
      "SelectStatement",
      "SelectStatementSnippet",
      "SendStatement",
      "SetCommandStatement",
      "SetErrorLevelStatement",
      "SetIdentityInsertStatement",
      "SetOffsetsStatement",
      "SetRowCountStatement",
      "SetStatisticsStatement",
      "SetTextSizeStatement",
      "SetTransactionIsolationLevelStatement",
      "SetUserStatement",
      "SetVariableStatement",
      "ShutdownStatement",
      "ThrowStatement",
      "TruncateTableStatement",
      "TryCatchStatement",
      "TSqlStatementSnippet",
      "UpdateStatement",
      "UpdateStatisticsStatement",
      "UpdateTextStatement",
      "UseFederationStatement",
      "UseStatement",
      "WaitForStatement",
      "WhileStatement",
      "WriteTextStatement"
    ],
    "edgeKind": "single",
    "edgeName": "ThenStatement",
    "parentKind": "IfStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "IIfCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ElseExpression",
    "parentKind": "IIfCall"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "Predicate",
    "parentKind": "IIfCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ThenExpression",
    "parentKind": "IIfCall"
  },
  {
    "childKinds": [
      "ColumnWithSortOrder"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "IndexDefinition"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "FileStreamOn",
    "parentKind": "IndexDefinition"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "FilterPredicate",
    "parentKind": "IndexDefinition"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "IncludeColumns",
    "parentKind": "IndexDefinition"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "IndexDefinition"
  },
  {
    "childKinds": [
      "IndexType"
    ],
    "edgeKind": "single",
    "edgeName": "IndexType",
    "parentKind": "IndexDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "IndexDefinition"
  },
  {
    "childKinds": [
      "FileGroupOrPartitionScheme"
    ],
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "IndexDefinition"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "IndexExpressionOption"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "array",
    "edgeName": "IndexValues",
    "parentKind": "IndexTableHint"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "InlineDerivedTable"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "InlineDerivedTable"
  },
  {
    "childKinds": [
      "RowValue"
    ],
    "edgeKind": "array",
    "edgeName": "RowValues",
    "parentKind": "InlineDerivedTable"
  },
  {
    "childKinds": [
      "ResultColumnDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "ResultColumnDefinitions",
    "parentKind": "InlineResultSetDefinition"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "InPredicate"
  },
  {
    "childKinds": [
      "ScalarSubquery"
    ],
    "edgeKind": "single",
    "edgeName": "Subquery",
    "parentKind": "InPredicate"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Values",
    "parentKind": "InPredicate"
  },
  {
    "childKinds": [
      "ColumnDefinition",
      "ColumnDefinitionBase",
      "OpenRowsetColumnDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "InsertBulkColumnDefinition"
  },
  {
    "childKinds": [
      "InsertBulkColumnDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "ColumnDefinitions",
    "parentKind": "InsertBulkStatement"
  },
  {
    "childKinds": [
      "BulkInsertOption",
      "LiteralBulkInsertOption",
      "OrderBulkInsertOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "InsertBulkStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "InsertBulkStatement"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "InsertMergeAction"
  },
  {
    "childKinds": [
      "ValuesInsertSource"
    ],
    "edgeKind": "single",
    "edgeName": "Source",
    "parentKind": "InsertMergeAction"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "InsertSpecification"
  },
  {
    "childKinds": [
      "ExecuteInsertSource",
      "SelectInsertSource",
      "ValuesInsertSource"
    ],
    "edgeKind": "single",
    "edgeName": "InsertSource",
    "parentKind": "InsertSpecification"
  },
  {
    "childKinds": [
      "OutputClause"
    ],
    "edgeKind": "single",
    "edgeName": "OutputClause",
    "parentKind": "InsertSpecification"
  },
  {
    "childKinds": [
      "OutputIntoClause"
    ],
    "edgeKind": "single",
    "edgeName": "OutputIntoClause",
    "parentKind": "InsertSpecification"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "InsertSpecification"
  },
  {
    "childKinds": [
      "TopRowFilter"
    ],
    "edgeKind": "single",
    "edgeName": "TopRowFilter",
    "parentKind": "InsertSpecification"
  },
  {
    "childKinds": [
      "InsertSpecification"
    ],
    "edgeKind": "single",
    "edgeName": "InsertSpecification",
    "parentKind": "InsertStatement"
  },
  {
    "childKinds": [
      "LiteralOptimizerHint",
      "OptimizeForOptimizerHint",
      "OptimizerHint",
      "TableHintsOptimizerHint",
      "UseHintList"
    ],
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "InsertStatement"
  },
  {
    "childKinds": [
      "WithCtesAndXmlNamespaces"
    ],
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "InsertStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "IntegerLiteral"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "InternalOpenRowset"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "InternalOpenRowset"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "VarArgs",
    "parentKind": "InternalOpenRowset"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Arguments",
    "parentKind": "InvokeExternalApiFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "InvokeExternalApiFunctionCall"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "FunctionName",
    "parentKind": "InvokeExternalApiFunctionCall"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "FunctionSetName",
    "parentKind": "InvokeExternalApiFunctionCall"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "OctetFour",
    "parentKind": "IPv4"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "OctetOne",
    "parentKind": "IPv4"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "OctetThree",
    "parentKind": "IPv4"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "OctetTwo",
    "parentKind": "IPv4"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Join",
    "parentKind": "JoinParenthesisTableReference"
  },
  {
    "childKinds": [
      "JsonForClauseOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "JsonForClause"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "JsonForClauseOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "JsonKeyName",
    "parentKind": "JsonKeyValue"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "JsonValue",
    "parentKind": "JsonKeyValue"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PassPhrase",
    "parentKind": "KeySourceKeyOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "SubscriptionId",
    "parentKind": "KillQueryNotificationSubscriptionStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "KillStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "JobId",
    "parentKind": "KillStatsJobStatement"
  },
  {
    "childKinds": [
      "LedgerViewOption"
    ],
    "edgeKind": "single",
    "edgeName": "LedgerViewOption",
    "parentKind": "LedgerTableOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "OperationTypeColumnName",
    "parentKind": "LedgerViewOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "OperationTypeDescColumnName",
    "parentKind": "LedgerViewOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SequenceNumberColumnName",
    "parentKind": "LedgerViewOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "TransactionIdColumnName",
    "parentKind": "LedgerViewOption"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ViewName",
    "parentKind": "LedgerViewOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "LeftFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "LeftFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "EscapeExpression",
    "parentKind": "LikePredicate"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "LikePredicate"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "LikePredicate"
  },
  {
    "childKinds": [
      "IntegerLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "LineNo",
    "parentKind": "LineNoStatement"
  },
  {
    "childKinds": [
      "IPv4"
    ],
    "edgeKind": "single",
    "edgeName": "IPv4PartOne",
    "parentKind": "ListenerIPEndpointProtocolOption"
  },
  {
    "childKinds": [
      "IPv4"
    ],
    "edgeKind": "single",
    "edgeName": "IPv4PartTwo",
    "parentKind": "ListenerIPEndpointProtocolOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "IPv6",
    "parentKind": "ListenerIPEndpointProtocolOption"
  },
  {
    "childKinds": [
      "CopyColumnOption",
      "CopyCredentialOption",
      "ListTypeCopyOption",
      "SingleValueTypeCopyOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "ListTypeCopyOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralAtomicBlockOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralAuditTargetOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralAvailabilityGroupOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralBulkInsertOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralDatabaseOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralEndpointProtocolOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralOpenRowsetCosmosOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralOptimizerHint"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralOptionValue"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralPayloadOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralPrincipalOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "From",
    "parentKind": "LiteralRange"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "LiteralRange"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralReplicaOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralSessionOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Literal",
    "parentKind": "LiteralStatisticsOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "LiteralTableHint"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "LocationValue",
    "parentKind": "LocationOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "MaxDuration",
    "parentKind": "LowPriorityLockWaitMaxDurationOption"
  },
  {
    "childKinds": [
      "LowPriorityLockWaitAbortAfterWaitOption",
      "LowPriorityLockWaitMaxDurationOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "LowPriorityLockWaitTableSwitchOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "MaxDispatchLatencySessionOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "GenericOptionKind",
    "parentKind": "MaxDopConfigurationOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "MaxDopConfigurationOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "MaxDuration",
    "parentKind": "MaxDurationOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "MaxLiteral"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "MaxRolloverFilesAuditTargetOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Size",
    "parentKind": "MaxSizeAuditTargetOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "MaxSize",
    "parentKind": "MaxSizeDatabaseOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "MaxSize",
    "parentKind": "MaxSizeFileDeclarationOption"
  },
  {
    "childKinds": [
      "DeleteMergeAction",
      "InsertMergeAction",
      "UpdateMergeAction"
    ],
    "edgeKind": "single",
    "edgeName": "Action",
    "parentKind": "MergeActionClause"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "MergeActionClause"
  },
  {
    "childKinds": [
      "MergeActionClause"
    ],
    "edgeKind": "array",
    "edgeName": "ActionClauses",
    "parentKind": "MergeSpecification"
  },
  {
    "childKinds": [
      "OutputClause"
    ],
    "edgeKind": "single",
    "edgeName": "OutputClause",
    "parentKind": "MergeSpecification"
  },
  {
    "childKinds": [
      "OutputIntoClause"
    ],
    "edgeKind": "single",
    "edgeName": "OutputIntoClause",
    "parentKind": "MergeSpecification"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "MergeSpecification"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "TableAlias",
    "parentKind": "MergeSpecification"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TableReference",
    "parentKind": "MergeSpecification"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "MergeSpecification"
  },
  {
    "childKinds": [
      "TopRowFilter"
    ],
    "edgeKind": "single",
    "edgeName": "TopRowFilter",
    "parentKind": "MergeSpecification"
  },
  {
    "childKinds": [
      "MergeSpecification"
    ],
    "edgeKind": "single",
    "edgeName": "MergeSpecification",
    "parentKind": "MergeStatement"
  },
  {
    "childKinds": [
      "LiteralOptimizerHint",
      "OptimizeForOptimizerHint",
      "OptimizerHint",
      "TableHintsOptimizerHint",
      "UseHintList"
    ],
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "MergeStatement"
  },
  {
    "childKinds": [
      "WithCtesAndXmlNamespaces"
    ],
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "MergeStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AssemblyName",
    "parentKind": "MethodSpecifier"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ClassName",
    "parentKind": "MethodSpecifier"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodName",
    "parentKind": "MethodSpecifier"
  },
  {
    "childKinds": [
      "DeviceInfo"
    ],
    "edgeKind": "array",
    "edgeName": "Devices",
    "parentKind": "MirrorToClause"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "MoneyLiteral"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Conversation",
    "parentKind": "MoveConversationStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Group",
    "parentKind": "MoveConversationStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "LogicalFileName",
    "parentKind": "MoveRestoreOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "OSFileName",
    "parentKind": "MoveRestoreOption"
  },
  {
    "childKinds": [
      "FileGroupOrPartitionScheme"
    ],
    "edgeKind": "single",
    "edgeName": "MoveTo",
    "parentKind": "MoveToDropIndexOption"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "MultiPartIdentifier",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "MultiPartIdentifier",
    "parentKind": "MultiPartIdentifierCallTarget"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Identifiers",
    "parentKind": "MultiPartIdentifier"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "NamedTableReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObject",
    "parentKind": "NamedTableReference"
  },
  {
    "childKinds": [
      "ForceSeekTableHint",
      "IndexTableHint",
      "LiteralTableHint",
      "TableHint"
    ],
    "edgeKind": "array",
    "edgeName": "TableHints",
    "parentKind": "NamedTableReference"
  },
  {
    "childKinds": [
      "TableSampleClause"
    ],
    "edgeKind": "single",
    "edgeName": "TableSampleClause",
    "parentKind": "NamedTableReference"
  },
  {
    "childKinds": [
      "TemporalClause"
    ],
    "edgeKind": "single",
    "edgeName": "TemporalClause",
    "parentKind": "NamedTableReference"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "LogicalFileName",
    "parentKind": "NameFileDeclarationOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "NextValueForExpression"
  },
  {
    "childKinds": [
      "OverClause"
    ],
    "edgeKind": "single",
    "edgeName": "OverClause",
    "parentKind": "NextValueForExpression"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SequenceName",
    "parentKind": "NextValueForExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "NullableConstraintDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "NullIfExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "NullIfExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "NullIfExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "NullLiteral"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "NumericLiteral"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "OdbcConvertSpecification"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "OdbcFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "OdbcFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "OdbcFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "OdbcLiteral"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TableReference",
    "parentKind": "OdbcQualifiedJoinTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FetchExpression",
    "parentKind": "OffsetClause"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "OffsetExpression",
    "parentKind": "OffsetClause"
  },
  {
    "childKinds": [
      "LowPriorityLockWaitAbortAfterWaitOption",
      "LowPriorityLockWaitMaxDurationOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "OnlineIndexLowPriorityLockWaitOption"
  },
  {
    "childKinds": [
      "OnlineIndexLowPriorityLockWaitOption"
    ],
    "edgeKind": "single",
    "edgeName": "LowPriorityLockWaitOption",
    "parentKind": "OnlineIndexOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "GenericOptionKind",
    "parentKind": "OnOffPrimaryConfigurationOption"
  },
  {
    "childKinds": [
      "CursorId"
    ],
    "edgeKind": "single",
    "edgeName": "Cursor",
    "parentKind": "OpenCursorStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "OpenJsonTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "RowPattern",
    "parentKind": "OpenJsonTableReference"
  },
  {
    "childKinds": [
      "SchemaDeclarationItemOpenjson"
    ],
    "edgeKind": "array",
    "edgeName": "SchemaDeclarationItems",
    "parentKind": "OpenJsonTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "OpenJsonTableReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "OpenMasterKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "OpenQueryTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "LinkedServer",
    "parentKind": "OpenQueryTableReference"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Query",
    "parentKind": "OpenQueryTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "OpenRowsetColumnDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnIdentifier",
    "parentKind": "OpenRowsetColumnDefinition"
  },
  {
    "childKinds": [
      "IntegerLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnOrdinal",
    "parentKind": "OpenRowsetColumnDefinition"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "OpenRowsetColumnDefinition"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "JsonPath",
    "parentKind": "OpenRowsetColumnDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "OpenRowsetCosmos"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "OpenRowsetCosmos"
  },
  {
    "childKinds": [
      "LiteralOpenRowsetCosmosOption",
      "OpenRowsetCosmosOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "OpenRowsetCosmos"
  },
  {
    "childKinds": [
      "OpenRowsetColumnDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "WithColumns",
    "parentKind": "OpenRowsetCosmos"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "DataSource",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Object",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ProviderName",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ProviderString",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Query",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "UserId",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "childKinds": [
      "OpenRowsetColumnDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "WithColumns",
    "parentKind": "OpenRowsetTableReference"
  },
  {
    "childKinds": [
      "CryptoMechanism"
    ],
    "edgeKind": "single",
    "edgeName": "DecryptionMechanism",
    "parentKind": "OpenSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "OpenSymmetricKeyStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Flags",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "RowPattern",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "childKinds": [
      "SchemaDeclarationItem",
      "SchemaDeclarationItemOpenjson"
    ],
    "edgeKind": "array",
    "edgeName": "SchemaDeclarationItems",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "TableName",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "OpenXmlTableReference"
  },
  {
    "childKinds": [
      "VariableValuePair"
    ],
    "edgeKind": "array",
    "edgeName": "Pairs",
    "parentKind": "OptimizeForOptimizerHint"
  },
  {
    "childKinds": [
      "ColumnWithSortOrder"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "OrderBulkInsertOption"
  },
  {
    "childKinds": [
      "ExpressionWithSortOrder"
    ],
    "edgeKind": "array",
    "edgeName": "OrderByElements",
    "parentKind": "OrderByClause"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "OrderIndexOption"
  },
  {
    "childKinds": [
      "SelectScalarExpression",
      "SelectSetVariable",
      "SelectStarExpression"
    ],
    "edgeKind": "array",
    "edgeName": "SelectColumns",
    "parentKind": "OutputClause"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "IntoTableColumns",
    "parentKind": "OutputIntoClause"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "IntoTable",
    "parentKind": "OutputIntoClause"
  },
  {
    "childKinds": [
      "SelectScalarExpression",
      "SelectSetVariable",
      "SelectStarExpression"
    ],
    "edgeKind": "array",
    "edgeName": "SelectColumns",
    "parentKind": "OutputIntoClause"
  },
  {
    "childKinds": [
      "OrderByClause"
    ],
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "OverClause"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Partitions",
    "parentKind": "OverClause"
  },
  {
    "childKinds": [
      "WindowFrameClause"
    ],
    "edgeKind": "single",
    "edgeName": "WindowFrameClause",
    "parentKind": "OverClause"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "WindowName",
    "parentKind": "OverClause"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ParameterlessCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ParenthesisExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ParenthesisExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ParseCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Culture",
    "parentKind": "ParseCall"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ParseCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "StringValue",
    "parentKind": "ParseCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "PartitionFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "PartitionFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "FunctionName",
    "parentKind": "PartitionFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "PartitionFunctionCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "PartitionParameterType"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "PartitionParameterType"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Number",
    "parentKind": "PartitionSpecifier"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "PartnerServer",
    "parentKind": "PartnerDatabaseOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Timeout",
    "parentKind": "PartnerDatabaseOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "OldPassword",
    "parentKind": "PasswordAlterPrincipalOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "PasswordAlterPrincipalOption"
  },
  {
    "childKinds": [
      "IdentifierPrincipalOption",
      "LiteralPrincipalOption",
      "OnOffPrincipalOption",
      "PasswordAlterPrincipalOption",
      "PrincipalOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "PasswordCreateLoginSource"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "PasswordCreateLoginSource"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "Permission"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Identifiers",
    "parentKind": "Permission"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "MultiPartIdentifier",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "AggregateFunctionIdentifier",
    "parentKind": "PivotedTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "PivotedTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "InColumns",
    "parentKind": "PivotedTableReference"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "single",
    "edgeName": "PivotColumn",
    "parentKind": "PivotedTableReference"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TableReference",
    "parentKind": "PivotedTableReference"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "ValueColumns",
    "parentKind": "PivotedTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "PredictTableReference"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "NamedTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataSource",
    "parentKind": "PredictTableReference"
  },
  {
    "childKinds": [
      "ScalarSubquery"
    ],
    "edgeKind": "single",
    "edgeName": "ModelSubquery",
    "parentKind": "PredictTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ModelVariable",
    "parentKind": "PredictTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "RunTime",
    "parentKind": "PredictTableReference"
  },
  {
    "childKinds": [
      "SchemaDeclarationItem",
      "SchemaDeclarationItemOpenjson"
    ],
    "edgeKind": "array",
    "edgeName": "SchemaDeclarationItems",
    "parentKind": "PredictTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "PrintStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "Privilege80"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "PrivilegeSecurityElement80"
  },
  {
    "childKinds": [
      "Privilege80"
    ],
    "edgeKind": "array",
    "edgeName": "Privileges",
    "parentKind": "PrivilegeSecurityElement80"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "PrivilegeSecurityElement80"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ProcedureParameter"
  },
  {
    "childKinds": [
      "NullableConstraintDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Nullable",
    "parentKind": "ProcedureParameter"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ProcedureParameter"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "VariableName",
    "parentKind": "ProcedureParameter"
  },
  {
    "childKinds": [
      "ProcedureReference"
    ],
    "edgeKind": "single",
    "edgeName": "ProcedureReference",
    "parentKind": "ProcedureReferenceName"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ProcedureVariable",
    "parentKind": "ProcedureReferenceName"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ProcedureReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Number",
    "parentKind": "ProcedureReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "From",
    "parentKind": "ProcessAffinityRange"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "ProcessAffinityRange"
  },
  {
    "childKinds": [
      "AlgorithmKeyOption",
      "CreationDispositionKeyOption",
      "IdentityValueKeyOption",
      "KeySourceKeyOption",
      "ProviderKeyNameKeyOption"
    ],
    "edgeKind": "array",
    "edgeName": "KeyOptions",
    "parentKind": "ProviderEncryptionSource"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ProviderEncryptionSource"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "KeyName",
    "parentKind": "ProviderKeyNameKeyOption"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstTableReference",
    "parentKind": "QualifiedJoin"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "QualifiedJoin"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondTableReference",
    "parentKind": "QualifiedJoin"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "QueryDerivedTable"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "QueryDerivedTable"
  },
  {
    "childKinds": [
      "BinaryQueryExpression",
      "QueryParenthesisExpression",
      "QuerySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "QueryDerivedTable"
  },
  {
    "childKinds": [
      "BrowseForClause",
      "JsonForClause",
      "JsonForClauseOption",
      "ReadOnlyForClause",
      "UpdateForClause",
      "XmlForClause",
      "XmlForClauseOption"
    ],
    "edgeKind": "single",
    "edgeName": "ForClause",
    "parentKind": "QueryParenthesisExpression"
  },
  {
    "childKinds": [
      "OffsetClause"
    ],
    "edgeKind": "single",
    "edgeName": "OffsetClause",
    "parentKind": "QueryParenthesisExpression"
  },
  {
    "childKinds": [
      "OrderByClause"
    ],
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "QueryParenthesisExpression"
  },
  {
    "childKinds": [
      "BinaryQueryExpression",
      "QueryParenthesisExpression",
      "QuerySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "QueryParenthesisExpression"
  },
  {
    "childKinds": [
      "BrowseForClause",
      "JsonForClause",
      "JsonForClauseOption",
      "ReadOnlyForClause",
      "UpdateForClause",
      "XmlForClause",
      "XmlForClauseOption"
    ],
    "edgeKind": "single",
    "edgeName": "ForClause",
    "parentKind": "QuerySpecification"
  },
  {
    "childKinds": [
      "FromClause"
    ],
    "edgeKind": "single",
    "edgeName": "FromClause",
    "parentKind": "QuerySpecification"
  },
  {
    "childKinds": [
      "GroupByClause"
    ],
    "edgeKind": "single",
    "edgeName": "GroupByClause",
    "parentKind": "QuerySpecification"
  },
  {
    "childKinds": [
      "HavingClause"
    ],
    "edgeKind": "single",
    "edgeName": "HavingClause",
    "parentKind": "QuerySpecification"
  },
  {
    "childKinds": [
      "OffsetClause"
    ],
    "edgeKind": "single",
    "edgeName": "OffsetClause",
    "parentKind": "QuerySpecification"
  },
  {
    "childKinds": [
      "OrderByClause"
    ],
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "QuerySpecification"
  },
  {
    "childKinds": [
      "SelectScalarExpression",
      "SelectSetVariable",
      "SelectStarExpression"
    ],
    "edgeKind": "array",
    "edgeName": "SelectElements",
    "parentKind": "QuerySpecification"
  },
  {
    "childKinds": [
      "TopRowFilter"
    ],
    "edgeKind": "single",
    "edgeName": "TopRowFilter",
    "parentKind": "QuerySpecification"
  },
  {
    "childKinds": [
      "WhereClause"
    ],
    "edgeKind": "single",
    "edgeName": "WhereClause",
    "parentKind": "QuerySpecification"
  },
  {
    "childKinds": [
      "WindowClause"
    ],
    "edgeKind": "single",
    "edgeName": "WindowClause",
    "parentKind": "QuerySpecification"
  },
  {
    "childKinds": [
      "QueryStoreCapturePolicyOption",
      "QueryStoreDataFlushIntervalOption",
      "QueryStoreDesiredStateOption",
      "QueryStoreIntervalLengthOption",
      "QueryStoreMaxPlansPerQueryOption",
      "QueryStoreMaxStorageSizeOption",
      "QueryStoreSizeCleanupPolicyOption",
      "QueryStoreTimeCleanupPolicyOption",
      "QueryStoreWaitStatsCaptureOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "QueryStoreDatabaseOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "FlushInterval",
    "parentKind": "QueryStoreDataFlushIntervalOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "StatsIntervalLength",
    "parentKind": "QueryStoreIntervalLengthOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "MaxPlansPerQuery",
    "parentKind": "QueryStoreMaxPlansPerQueryOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "MaxQdsSize",
    "parentKind": "QueryStoreMaxStorageSizeOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "StaleQueryThreshold",
    "parentKind": "QueryStoreTimeCleanupPolicyOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Delay",
    "parentKind": "QueueDelayAuditOption"
  },
  {
    "childKinds": [
      "ExecuteAsClause"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "QueueExecuteAsOption"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "QueueProcedureOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "QueueValueOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstParameter",
    "parentKind": "RaiseErrorLegacyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondParameter",
    "parentKind": "RaiseErrorLegacyStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstParameter",
    "parentKind": "RaiseErrorStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "OptionalParameters",
    "parentKind": "RaiseErrorStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondParameter",
    "parentKind": "RaiseErrorStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ThirdParameter",
    "parentKind": "RaiseErrorStatement"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "ReadTextStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Offset",
    "parentKind": "ReadTextStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Size",
    "parentKind": "ReadTextStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TextPointer",
    "parentKind": "ReadTextStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "RealLiteral"
  },
  {
    "childKinds": [
      "VariableTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Into",
    "parentKind": "ReceiveStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Queue",
    "parentKind": "ReceiveStatement"
  },
  {
    "childKinds": [
      "SelectScalarExpression",
      "SelectSetVariable",
      "SelectStarExpression"
    ],
    "edgeKind": "array",
    "edgeName": "SelectElements",
    "parentKind": "ReceiveStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Top",
    "parentKind": "ReceiveStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Where",
    "parentKind": "ReceiveStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Flags",
    "parentKind": "RegexpLikePredicate"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Pattern",
    "parentKind": "RegexpLikePredicate"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Text",
    "parentKind": "RegexpLikePredicate"
  },
  {
    "childKinds": [
      "FunctionCall"
    ],
    "edgeKind": "single",
    "edgeName": "FilterPredicate",
    "parentKind": "RemoteDataArchiveAlterTableOption"
  },
  {
    "childKinds": [
      "RemoteDataArchiveDbCredentialSetting",
      "RemoteDataArchiveDbFederatedServiceAccountSetting",
      "RemoteDataArchiveDbServerSetting"
    ],
    "edgeKind": "array",
    "edgeName": "Settings",
    "parentKind": "RemoteDataArchiveDatabaseOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Credential",
    "parentKind": "RemoteDataArchiveDbCredentialSetting"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Server",
    "parentKind": "RemoteDataArchiveDbServerSetting"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "NewName",
    "parentKind": "RenameAlterRoleAction"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "NewName",
    "parentKind": "RenameEntityStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "OldName",
    "parentKind": "RenameEntityStatement"
  },
  {
    "childKinds": [
      "StatisticsPartitionRange"
    ],
    "edgeKind": "array",
    "edgeName": "Partitions",
    "parentKind": "ResampleStatisticsOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "ResourcePoolAffinitySpecification"
  },
  {
    "childKinds": [
      "LiteralRange",
      "ProcessAffinityRange"
    ],
    "edgeKind": "array",
    "edgeName": "PoolAffinityRanges",
    "parentKind": "ResourcePoolAffinitySpecification"
  },
  {
    "childKinds": [
      "ResourcePoolAffinitySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "AffinitySpecification",
    "parentKind": "ResourcePoolParameter"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "ResourcePoolParameter"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ResourcePoolStatement"
  },
  {
    "childKinds": [
      "ResourcePoolParameter"
    ],
    "edgeKind": "array",
    "edgeName": "ResourcePoolParameters",
    "parentKind": "ResourcePoolStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "EncryptionPassword",
    "parentKind": "RestoreMasterKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "RestoreMasterKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "RestoreMasterKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "File",
    "parentKind": "RestoreServiceMasterKeyStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Password",
    "parentKind": "RestoreServiceMasterKeyStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "RestoreStatement"
  },
  {
    "childKinds": [
      "DeviceInfo"
    ],
    "edgeKind": "array",
    "edgeName": "Devices",
    "parentKind": "RestoreStatement"
  },
  {
    "childKinds": [
      "BackupRestoreFileInfo"
    ],
    "edgeKind": "array",
    "edgeName": "Files",
    "parentKind": "RestoreStatement"
  },
  {
    "childKinds": [
      "FileStreamRestoreOption",
      "MoveRestoreOption",
      "RestoreOption",
      "ScalarExpressionRestoreOption",
      "StopRestoreOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "RestoreStatement"
  },
  {
    "childKinds": [
      "ColumnDefinition",
      "ColumnDefinitionBase",
      "OpenRowsetColumnDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnDefinition",
    "parentKind": "ResultColumnDefinition"
  },
  {
    "childKinds": [
      "NullableConstraintDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "Nullable",
    "parentKind": "ResultColumnDefinition"
  },
  {
    "childKinds": [
      "InlineResultSetDefinition",
      "ResultSetDefinition",
      "SchemaObjectResultSetDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "Definitions",
    "parentKind": "ResultSetsExecuteOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Days",
    "parentKind": "RetentionDaysAuditTargetOption"
  },
  {
    "childKinds": [
      "IntegerLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Duration",
    "parentKind": "RetentionPeriodDefinition"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "ReturnStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Cookie",
    "parentKind": "RevertStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AsClause",
    "parentKind": "RevokeStatement80"
  },
  {
    "childKinds": [
      "CommandSecurityElement80",
      "PrivilegeSecurityElement80"
    ],
    "edgeKind": "single",
    "edgeName": "SecurityElement80",
    "parentKind": "RevokeStatement80"
  },
  {
    "childKinds": [
      "SecurityUserClause80"
    ],
    "edgeKind": "single",
    "edgeName": "SecurityUserClause80",
    "parentKind": "RevokeStatement80"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "AsClause",
    "parentKind": "RevokeStatement"
  },
  {
    "childKinds": [
      "Permission"
    ],
    "edgeKind": "array",
    "edgeName": "Permissions",
    "parentKind": "RevokeStatement"
  },
  {
    "childKinds": [
      "SecurityPrincipal"
    ],
    "edgeKind": "array",
    "edgeName": "Principals",
    "parentKind": "RevokeStatement"
  },
  {
    "childKinds": [
      "SecurityTargetObject"
    ],
    "edgeKind": "single",
    "edgeName": "SecurityTargetObject",
    "parentKind": "RevokeStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "RightFunctionCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "RightFunctionCall"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "RollbackTransactionStatement"
  },
  {
    "childKinds": [
      "CompositeGroupingSpecification",
      "CubeGroupingSpecification",
      "ExpressionGroupingSpecification",
      "GrandTotalGroupingSpecification",
      "GroupingSetsGroupingSpecification",
      "RollupGroupingSpecification"
    ],
    "edgeKind": "array",
    "edgeName": "Arguments",
    "parentKind": "RollupGroupingSpecification"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Literal",
    "parentKind": "RouteOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "ColumnValues",
    "parentKind": "RowValue"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "SaveTransactionStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ScalarExpressionDialogOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ScalarExpressionRestoreOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "OptionValue",
    "parentKind": "ScalarExpressionSequenceOption"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "ScalarFunctionReturnType"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "ScalarSubquery"
  },
  {
    "childKinds": [
      "BinaryQueryExpression",
      "QueryParenthesisExpression",
      "QuerySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "ScalarSubquery"
  },
  {
    "childKinds": [
      "ColumnDefinition",
      "ColumnDefinitionBase",
      "OpenRowsetColumnDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnDefinition",
    "parentKind": "SchemaDeclarationItem"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Mapping",
    "parentKind": "SchemaDeclarationItem"
  },
  {
    "childKinds": [
      "ColumnDefinition",
      "ColumnDefinitionBase",
      "OpenRowsetColumnDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnDefinition",
    "parentKind": "SchemaDeclarationItemOpenjson"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Mapping",
    "parentKind": "SchemaDeclarationItemOpenjson"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "SchemaObjectFunctionTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "SchemaObjectFunctionTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "SchemaObjectFunctionTableReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObject",
    "parentKind": "SchemaObjectFunctionTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "BaseIdentifier",
    "parentKind": "SchemaObjectName"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseIdentifier",
    "parentKind": "SchemaObjectName"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Identifiers",
    "parentKind": "SchemaObjectName"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "SchemaObjectNameOrValueExpression"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ValueExpression",
    "parentKind": "SchemaObjectNameOrValueExpression"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaIdentifier",
    "parentKind": "SchemaObjectName"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ServerIdentifier",
    "parentKind": "SchemaObjectName"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "BaseIdentifier",
    "parentKind": "SchemaObjectNameSnippet"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseIdentifier",
    "parentKind": "SchemaObjectNameSnippet"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Identifiers",
    "parentKind": "SchemaObjectNameSnippet"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaIdentifier",
    "parentKind": "SchemaObjectNameSnippet"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ServerIdentifier",
    "parentKind": "SchemaObjectNameSnippet"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "SchemaObjectResultSetDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "SearchedCaseExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ElseExpression",
    "parentKind": "SearchedCaseExpression"
  },
  {
    "childKinds": [
      "SearchedWhenClause"
    ],
    "edgeKind": "array",
    "edgeName": "WhenClauses",
    "parentKind": "SearchedCaseExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ThenExpression",
    "parentKind": "SearchedWhenClause"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "WhenExpression",
    "parentKind": "SearchedWhenClause"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "PropertyListName",
    "parentKind": "SearchPropertyListFullTextIndexOption"
  },
  {
    "childKinds": [
      "FunctionCall"
    ],
    "edgeKind": "single",
    "edgeName": "FunctionCall",
    "parentKind": "SecurityPredicateAction"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "TargetObjectName",
    "parentKind": "SecurityPredicateAction"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "SecurityPrincipal"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "SecurityTargetObject"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "MultiPartIdentifier",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "MultiPartIdentifier",
    "parentKind": "SecurityTargetObjectName"
  },
  {
    "childKinds": [
      "SecurityTargetObjectName"
    ],
    "edgeKind": "single",
    "edgeName": "ObjectName",
    "parentKind": "SecurityTargetObject"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Users",
    "parentKind": "SecurityUserClause80"
  },
  {
    "childKinds": [
      "SelectStatement",
      "SelectStatementSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SelectStatement",
    "parentKind": "SelectFunctionReturnType"
  },
  {
    "childKinds": [
      "BinaryQueryExpression",
      "QueryParenthesisExpression",
      "QuerySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "Select",
    "parentKind": "SelectInsertSource"
  },
  {
    "childKinds": [
      "IntegerLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "MaxLength",
    "parentKind": "SelectiveXmlIndexPromotedPath"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "SelectiveXmlIndexPromotedPath"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Path",
    "parentKind": "SelectiveXmlIndexPromotedPath"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "SQLDataType",
    "parentKind": "SelectiveXmlIndexPromotedPath"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "XQueryDataType",
    "parentKind": "SelectiveXmlIndexPromotedPath"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnName",
    "parentKind": "SelectScalarExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "SelectScalarExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "SelectSetVariable"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "SelectSetVariable"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "MultiPartIdentifier",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Qualifier",
    "parentKind": "SelectStarExpression"
  },
  {
    "childKinds": [
      "ComputeClause"
    ],
    "edgeKind": "array",
    "edgeName": "ComputeClauses",
    "parentKind": "SelectStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Into",
    "parentKind": "SelectStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "On",
    "parentKind": "SelectStatement"
  },
  {
    "childKinds": [
      "LiteralOptimizerHint",
      "OptimizeForOptimizerHint",
      "OptimizerHint",
      "TableHintsOptimizerHint",
      "UseHintList"
    ],
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "SelectStatement"
  },
  {
    "childKinds": [
      "BinaryQueryExpression",
      "QueryParenthesisExpression",
      "QuerySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "SelectStatement"
  },
  {
    "childKinds": [
      "ComputeClause"
    ],
    "edgeKind": "array",
    "edgeName": "ComputeClauses",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Into",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "On",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "childKinds": [
      "LiteralOptimizerHint",
      "OptimizeForOptimizerHint",
      "OptimizerHint",
      "TableHintsOptimizerHint",
      "UseHintList"
    ],
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "childKinds": [
      "BinaryQueryExpression",
      "QueryParenthesisExpression",
      "QuerySpecification"
    ],
    "edgeKind": "single",
    "edgeName": "QueryExpression",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "childKinds": [
      "WithCtesAndXmlNamespaces"
    ],
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "SelectStatementSnippet"
  },
  {
    "childKinds": [
      "WithCtesAndXmlNamespaces"
    ],
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "SelectStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "SemanticIndexChunkOption"
  },
  {
    "childKinds": [
      "SemanticIndexChunkOption"
    ],
    "edgeKind": "array",
    "edgeName": "ChunkOptions",
    "parentKind": "SemanticIndexColumn"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ColumnName",
    "parentKind": "SemanticIndexColumn"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Language",
    "parentKind": "SemanticIndexColumn"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "TypeColumnName",
    "parentKind": "SemanticIndexColumn"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "SemanticTableReference"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "SemanticTableReference"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "single",
    "edgeName": "MatchedColumn",
    "parentKind": "SemanticTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "MatchedKey",
    "parentKind": "SemanticTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SourceKey",
    "parentKind": "SemanticTableReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "TableName",
    "parentKind": "SemanticTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "ConversationHandles",
    "parentKind": "SendStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "MessageBody",
    "parentKind": "SendStatement"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "MessageTypeName",
    "parentKind": "SendStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "SensitivityClassificationOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "ServiceContract"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Timeout",
    "parentKind": "SessionTimeoutPayloadOption"
  },
  {
    "childKinds": [
      "GeneralSetCommand",
      "SetFipsFlaggerCommand"
    ],
    "edgeKind": "array",
    "edgeName": "Commands",
    "parentKind": "SetCommandStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Level",
    "parentKind": "SetErrorLevelStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Table",
    "parentKind": "SetIdentityInsertStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "NumberRows",
    "parentKind": "SetRowCountStatement"
  },
  {
    "childKinds": [
      "SearchPropertyListFullTextIndexOption"
    ],
    "edgeKind": "single",
    "edgeName": "SearchPropertyListOption",
    "parentKind": "SetSearchPropertyListAlterFullTextIndexAction"
  },
  {
    "childKinds": [
      "StopListFullTextIndexOption"
    ],
    "edgeKind": "single",
    "edgeName": "StopListOption",
    "parentKind": "SetStopListAlterFullTextIndexAction"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TextSize",
    "parentKind": "SetTextSizeStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "UserName",
    "parentKind": "SetUserStatement"
  },
  {
    "childKinds": [
      "CursorDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "CursorDefinition",
    "parentKind": "SetVariableStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "SetVariableStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "SetVariableStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "SetVariableStatement"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "SetVariableStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "SimpleCaseExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ElseExpression",
    "parentKind": "SimpleCaseExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "InputExpression",
    "parentKind": "SimpleCaseExpression"
  },
  {
    "childKinds": [
      "SimpleWhenClause"
    ],
    "edgeKind": "array",
    "edgeName": "WhenClauses",
    "parentKind": "SimpleCaseExpression"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ThenExpression",
    "parentKind": "SimpleWhenClause"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "WhenExpression",
    "parentKind": "SimpleWhenClause"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "SingleValue",
    "parentKind": "SingleValueTypeCopyOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Size",
    "parentKind": "SizeFileDeclarationOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "SoapMethod"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "SoapMethod"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Namespace",
    "parentKind": "SoapMethod"
  },
  {
    "childKinds": [
      "EventSessionObjectName"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "SourceDeclaration"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "single",
    "edgeName": "Option",
    "parentKind": "SpatialIndexRegularOption"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "SqlDataTypeReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "SqlDataTypeReference"
  },
  {
    "childKinds": [
      "AddSensitivityClassificationStatement",
      "AddSignatureStatement",
      "AlterApplicationRoleStatement",
      "AlterAssemblyStatement",
      "AlterAsymmetricKeyStatement",
      "AlterAuthorizationStatement",
      "AlterAvailabilityGroupStatement",
      "AlterBrokerPriorityStatement",
      "AlterCertificateStatement",
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
      "AlterServerConfigurationSetBufferPoolExtensionStatement",
      "AlterServerConfigurationSetDiagnosticsLogStatement",
      "AlterServerConfigurationSetExternalAuthenticationStatement",
      "AlterServerConfigurationSetFailoverClusterPropertyStatement",
      "AlterServerConfigurationSetHadrClusterStatement",
      "AlterServerConfigurationSetSoftNumaStatement",
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
      "BackupCertificateStatement",
      "BackupDatabaseStatement",
      "BackupMasterKeyStatement",
      "BackupServiceMasterKeyStatement",
      "BackupTransactionLogStatement",
      "BeginConversationTimerStatement",
      "BeginDialogStatement",
      "BeginEndAtomicBlockStatement",
      "BeginEndBlockStatement",
      "BeginTransactionStatement",
      "BreakStatement",
      "BulkInsertStatement",
      "CheckpointStatement",
      "CloseCursorStatement",
      "CloseMasterKeyStatement",
      "CloseSymmetricKeyStatement",
      "CommitTransactionStatement",
      "ContinueStatement",
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
      "CreateExternalStreamingJobStatement",
      "CreateExternalStreamStatement",
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
      "DbccStatement",
      "DeallocateCursorStatement",
      "DeclareCursorStatement",
      "DeclareTableVariableStatement",
      "DeclareVariableStatement",
      "DeleteStatement",
      "DenyStatement",
      "DenyStatement80",
      "DiskStatement",
      "DropAggregateStatement",
      "DropApplicationRoleStatement",
      "DropAssemblyStatement",
      "DropAsymmetricKeyStatement",
      "DropAvailabilityGroupStatement",
      "DropBrokerPriorityStatement",
      "DropCertificateStatement",
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
      "DropExternalStreamingJobStatement",
      "DropExternalStreamStatement",
      "DropExternalTableStatement",
      "DropFederationStatement",
      "DropFullTextCatalogStatement",
      "DropFullTextIndexStatement",
      "DropFullTextStopListStatement",
      "DropFunctionStatement",
      "DropIndexStatement",
      "DropLoginStatement",
      "DropMasterKeyStatement",
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
      "EnableDisableTriggerStatement",
      "EndConversationStatement",
      "EventSessionStatement",
      "ExecuteAsStatement",
      "ExecuteStatement",
      "ExternalResourcePoolStatement",
      "FetchCursorStatement",
      "GetConversationGroupStatement",
      "GoToStatement",
      "GrantStatement",
      "GrantStatement80",
      "IfStatement",
      "IndexDefinition",
      "InsertBulkStatement",
      "InsertStatement",
      "KillQueryNotificationSubscriptionStatement",
      "KillStatement",
      "KillStatsJobStatement",
      "LabelStatement",
      "LineNoStatement",
      "MergeStatement",
      "MoveConversationStatement",
      "OpenCursorStatement",
      "OpenMasterKeyStatement",
      "OpenSymmetricKeyStatement",
      "PredicateSetStatement",
      "PrintStatement",
      "RaiseErrorLegacyStatement",
      "RaiseErrorStatement",
      "ReadTextStatement",
      "ReceiveStatement",
      "ReconfigureStatement",
      "RenameEntityStatement",
      "ResourcePoolStatement",
      "RestoreMasterKeyStatement",
      "RestoreServiceMasterKeyStatement",
      "RestoreStatement",
      "ReturnStatement",
      "RevertStatement",
      "RevokeStatement",
      "RevokeStatement80",
      "RollbackTransactionStatement",
      "SaveTransactionStatement",
      "SelectStatement",
      "SelectStatementSnippet",
      "SendStatement",
      "SetCommandStatement",
      "SetErrorLevelStatement",
      "SetIdentityInsertStatement",
      "SetOffsetsStatement",
      "SetRowCountStatement",
      "SetStatisticsStatement",
      "SetTextSizeStatement",
      "SetTransactionIsolationLevelStatement",
      "SetUserStatement",
      "SetVariableStatement",
      "ShutdownStatement",
      "ThrowStatement",
      "TruncateTableStatement",
      "TryCatchStatement",
      "TSqlStatementSnippet",
      "UpdateStatement",
      "UpdateStatisticsStatement",
      "UpdateTextStatement",
      "UseFederationStatement",
      "UseStatement",
      "WaitForStatement",
      "WhileStatement",
      "WriteTextStatement"
    ],
    "edgeKind": "array",
    "edgeName": "Statements",
    "parentKind": "StatementListSnippet"
  },
  {
    "childKinds": [
      "AddSensitivityClassificationStatement",
      "AddSignatureStatement",
      "AlterApplicationRoleStatement",
      "AlterAssemblyStatement",
      "AlterAsymmetricKeyStatement",
      "AlterAuthorizationStatement",
      "AlterAvailabilityGroupStatement",
      "AlterBrokerPriorityStatement",
      "AlterCertificateStatement",
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
      "AlterServerConfigurationSetBufferPoolExtensionStatement",
      "AlterServerConfigurationSetDiagnosticsLogStatement",
      "AlterServerConfigurationSetExternalAuthenticationStatement",
      "AlterServerConfigurationSetFailoverClusterPropertyStatement",
      "AlterServerConfigurationSetHadrClusterStatement",
      "AlterServerConfigurationSetSoftNumaStatement",
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
      "BackupCertificateStatement",
      "BackupDatabaseStatement",
      "BackupMasterKeyStatement",
      "BackupServiceMasterKeyStatement",
      "BackupTransactionLogStatement",
      "BeginConversationTimerStatement",
      "BeginDialogStatement",
      "BeginEndAtomicBlockStatement",
      "BeginEndBlockStatement",
      "BeginTransactionStatement",
      "BreakStatement",
      "BulkInsertStatement",
      "CheckpointStatement",
      "CloseCursorStatement",
      "CloseMasterKeyStatement",
      "CloseSymmetricKeyStatement",
      "CommitTransactionStatement",
      "ContinueStatement",
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
      "CreateExternalStreamingJobStatement",
      "CreateExternalStreamStatement",
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
      "DbccStatement",
      "DeallocateCursorStatement",
      "DeclareCursorStatement",
      "DeclareTableVariableStatement",
      "DeclareVariableStatement",
      "DeleteStatement",
      "DenyStatement",
      "DenyStatement80",
      "DiskStatement",
      "DropAggregateStatement",
      "DropApplicationRoleStatement",
      "DropAssemblyStatement",
      "DropAsymmetricKeyStatement",
      "DropAvailabilityGroupStatement",
      "DropBrokerPriorityStatement",
      "DropCertificateStatement",
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
      "DropExternalStreamingJobStatement",
      "DropExternalStreamStatement",
      "DropExternalTableStatement",
      "DropFederationStatement",
      "DropFullTextCatalogStatement",
      "DropFullTextIndexStatement",
      "DropFullTextStopListStatement",
      "DropFunctionStatement",
      "DropIndexStatement",
      "DropLoginStatement",
      "DropMasterKeyStatement",
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
      "EnableDisableTriggerStatement",
      "EndConversationStatement",
      "EventSessionStatement",
      "ExecuteAsStatement",
      "ExecuteStatement",
      "ExternalResourcePoolStatement",
      "FetchCursorStatement",
      "GetConversationGroupStatement",
      "GoToStatement",
      "GrantStatement",
      "GrantStatement80",
      "IfStatement",
      "IndexDefinition",
      "InsertBulkStatement",
      "InsertStatement",
      "KillQueryNotificationSubscriptionStatement",
      "KillStatement",
      "KillStatsJobStatement",
      "LabelStatement",
      "LineNoStatement",
      "MergeStatement",
      "MoveConversationStatement",
      "OpenCursorStatement",
      "OpenMasterKeyStatement",
      "OpenSymmetricKeyStatement",
      "PredicateSetStatement",
      "PrintStatement",
      "RaiseErrorLegacyStatement",
      "RaiseErrorStatement",
      "ReadTextStatement",
      "ReceiveStatement",
      "ReconfigureStatement",
      "RenameEntityStatement",
      "ResourcePoolStatement",
      "RestoreMasterKeyStatement",
      "RestoreServiceMasterKeyStatement",
      "RestoreStatement",
      "ReturnStatement",
      "RevertStatement",
      "RevokeStatement",
      "RevokeStatement80",
      "RollbackTransactionStatement",
      "SaveTransactionStatement",
      "SelectStatement",
      "SelectStatementSnippet",
      "SendStatement",
      "SetCommandStatement",
      "SetErrorLevelStatement",
      "SetIdentityInsertStatement",
      "SetOffsetsStatement",
      "SetRowCountStatement",
      "SetStatisticsStatement",
      "SetTextSizeStatement",
      "SetTransactionIsolationLevelStatement",
      "SetUserStatement",
      "SetVariableStatement",
      "ShutdownStatement",
      "ThrowStatement",
      "TruncateTableStatement",
      "TryCatchStatement",
      "TSqlStatementSnippet",
      "UpdateStatement",
      "UpdateStatisticsStatement",
      "UpdateTextStatement",
      "UseFederationStatement",
      "UseStatement",
      "WaitForStatement",
      "WhileStatement",
      "WriteTextStatement"
    ],
    "edgeKind": "array",
    "edgeName": "Statements",
    "parentKind": "StatementList"
  },
  {
    "childKinds": [
      "IntegerLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "From",
    "parentKind": "StatisticsPartitionRange"
  },
  {
    "childKinds": [
      "IntegerLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "To",
    "parentKind": "StatisticsPartitionRange"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "StopListName",
    "parentKind": "StopListFullTextIndexOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "After",
    "parentKind": "StopRestoreOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Mark",
    "parentKind": "StopRestoreOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "StringLiteral"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "SubqueryComparisonPredicate"
  },
  {
    "childKinds": [
      "ScalarSubquery"
    ],
    "edgeKind": "single",
    "edgeName": "Subquery",
    "parentKind": "SubqueryComparisonPredicate"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "EndTimeColumn",
    "parentKind": "SystemTimePeriodDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "StartTimeColumn",
    "parentKind": "SystemTimePeriodDefinition"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "HistoryTable",
    "parentKind": "SystemVersioningTableOption"
  },
  {
    "childKinds": [
      "RetentionPeriodDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "RetentionPeriod",
    "parentKind": "SystemVersioningTableOption"
  },
  {
    "childKinds": [
      "ColumnWithSortOrder"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "TableClusteredIndexType"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "OrderedColumns",
    "parentKind": "TableClusteredIndexType"
  },
  {
    "childKinds": [
      "DataCompressionOption"
    ],
    "edgeKind": "single",
    "edgeName": "DataCompressionOption",
    "parentKind": "TableDataCompressionOption"
  },
  {
    "childKinds": [
      "ColumnDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "ColumnDefinitions",
    "parentKind": "TableDefinition"
  },
  {
    "childKinds": [
      "IndexDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "Indexes",
    "parentKind": "TableDefinition"
  },
  {
    "childKinds": [
      "SystemTimePeriodDefinition"
    ],
    "edgeKind": "single",
    "edgeName": "SystemTimePeriod",
    "parentKind": "TableDefinition"
  },
  {
    "childKinds": [
      "CheckConstraintDefinition",
      "DefaultConstraintDefinition",
      "ForeignKeyConstraintDefinition",
      "GraphConnectionConstraintDefinition",
      "NullableConstraintDefinition",
      "UniqueConstraintDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "TableConstraints",
    "parentKind": "TableDefinition"
  },
  {
    "childKinds": [
      "TableHashDistributionPolicy",
      "TableReplicateDistributionPolicy",
      "TableRoundRobinDistributionPolicy"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "TableDistributionOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "DistributionColumns",
    "parentKind": "TableHashDistributionPolicy"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DistributionColumn",
    "parentKind": "TableHashDistributionPolicy"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "ObjectName",
    "parentKind": "TableHintsOptimizerHint"
  },
  {
    "childKinds": [
      "ForceSeekTableHint",
      "IndexTableHint",
      "LiteralTableHint",
      "TableHint"
    ],
    "edgeKind": "array",
    "edgeName": "TableHints",
    "parentKind": "TableHintsOptimizerHint"
  },
  {
    "childKinds": [
      "TableClusteredIndexType",
      "TableNonClusteredIndexType"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "TableIndexOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "PartitionColumn",
    "parentKind": "TablePartitionOption"
  },
  {
    "childKinds": [
      "TablePartitionOptionSpecifications"
    ],
    "edgeKind": "single",
    "edgeName": "PartitionOptionSpecs",
    "parentKind": "TablePartitionOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "BoundaryValues",
    "parentKind": "TablePartitionOptionSpecifications"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "RepeatSeed",
    "parentKind": "TableSampleClause"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SampleNumber",
    "parentKind": "TableSampleClause"
  },
  {
    "childKinds": [
      "DeclareTableVariableBody"
    ],
    "edgeKind": "single",
    "edgeName": "DeclareTableVariableBody",
    "parentKind": "TableValuedFunctionReturnType"
  },
  {
    "childKinds": [
      "XmlCompressionOption"
    ],
    "edgeKind": "single",
    "edgeName": "XmlCompressionOption",
    "parentKind": "TableXmlCompressionOption"
  },
  {
    "childKinds": [
      "EventSessionObjectName"
    ],
    "edgeKind": "single",
    "edgeName": "ObjectName",
    "parentKind": "TargetDeclaration"
  },
  {
    "childKinds": [
      "EventDeclarationSetParameter"
    ],
    "edgeKind": "array",
    "edgeName": "TargetDeclarationParameters",
    "parentKind": "TargetDeclaration"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "RecoveryTime",
    "parentKind": "TargetRecoveryTimeDatabaseOption"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "EndTime",
    "parentKind": "TemporalClause"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "StartTime",
    "parentKind": "TemporalClause"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ErrorNumber",
    "parentKind": "ThrowStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Message",
    "parentKind": "ThrowStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "State",
    "parentKind": "ThrowStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "TopRowFilter"
  },
  {
    "childKinds": [
      "EventGroupContainer",
      "EventTypeContainer"
    ],
    "edgeKind": "single",
    "edgeName": "EventTypeGroup",
    "parentKind": "TriggerAction"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "TriggerObject"
  },
  {
    "childKinds": [
      "CompressionPartitionRange"
    ],
    "edgeKind": "array",
    "edgeName": "PartitionRanges",
    "parentKind": "TruncateTableStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "TableName",
    "parentKind": "TruncateTableStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "TryCastCall"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "TryCastCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "TryCastCall"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "CatchStatements",
    "parentKind": "TryCatchStatement"
  },
  {
    "childKinds": [
      "StatementList",
      "StatementListSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "TryStatements",
    "parentKind": "TryCatchStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "TryConvertCall"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "TryConvertCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "TryConvertCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Style",
    "parentKind": "TryConvertCall"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "TryParseCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Culture",
    "parentKind": "TryParseCall"
  },
  {
    "childKinds": [
      "SqlDataTypeReference",
      "UserDataTypeReference",
      "VectorDataTypeReference",
      "XmlDataTypeReference"
    ],
    "edgeKind": "single",
    "edgeName": "DataType",
    "parentKind": "TryParseCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "StringValue",
    "parentKind": "TryParseCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstExpression",
    "parentKind": "TSEqualCall"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondExpression",
    "parentKind": "TSEqualCall"
  },
  {
    "childKinds": [
      "AddSensitivityClassificationStatement",
      "AddSignatureStatement",
      "AlterApplicationRoleStatement",
      "AlterAssemblyStatement",
      "AlterAsymmetricKeyStatement",
      "AlterAuthorizationStatement",
      "AlterAvailabilityGroupStatement",
      "AlterBrokerPriorityStatement",
      "AlterCertificateStatement",
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
      "AlterServerConfigurationSetBufferPoolExtensionStatement",
      "AlterServerConfigurationSetDiagnosticsLogStatement",
      "AlterServerConfigurationSetExternalAuthenticationStatement",
      "AlterServerConfigurationSetFailoverClusterPropertyStatement",
      "AlterServerConfigurationSetHadrClusterStatement",
      "AlterServerConfigurationSetSoftNumaStatement",
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
      "BackupCertificateStatement",
      "BackupDatabaseStatement",
      "BackupMasterKeyStatement",
      "BackupServiceMasterKeyStatement",
      "BackupTransactionLogStatement",
      "BeginConversationTimerStatement",
      "BeginDialogStatement",
      "BeginEndAtomicBlockStatement",
      "BeginEndBlockStatement",
      "BeginTransactionStatement",
      "BreakStatement",
      "BulkInsertStatement",
      "CheckpointStatement",
      "CloseCursorStatement",
      "CloseMasterKeyStatement",
      "CloseSymmetricKeyStatement",
      "CommitTransactionStatement",
      "ContinueStatement",
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
      "CreateExternalStreamingJobStatement",
      "CreateExternalStreamStatement",
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
      "DbccStatement",
      "DeallocateCursorStatement",
      "DeclareCursorStatement",
      "DeclareTableVariableStatement",
      "DeclareVariableStatement",
      "DeleteStatement",
      "DenyStatement",
      "DenyStatement80",
      "DiskStatement",
      "DropAggregateStatement",
      "DropApplicationRoleStatement",
      "DropAssemblyStatement",
      "DropAsymmetricKeyStatement",
      "DropAvailabilityGroupStatement",
      "DropBrokerPriorityStatement",
      "DropCertificateStatement",
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
      "DropExternalStreamingJobStatement",
      "DropExternalStreamStatement",
      "DropExternalTableStatement",
      "DropFederationStatement",
      "DropFullTextCatalogStatement",
      "DropFullTextIndexStatement",
      "DropFullTextStopListStatement",
      "DropFunctionStatement",
      "DropIndexStatement",
      "DropLoginStatement",
      "DropMasterKeyStatement",
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
      "EnableDisableTriggerStatement",
      "EndConversationStatement",
      "EventSessionStatement",
      "ExecuteAsStatement",
      "ExecuteStatement",
      "ExternalResourcePoolStatement",
      "FetchCursorStatement",
      "GetConversationGroupStatement",
      "GoToStatement",
      "GrantStatement",
      "GrantStatement80",
      "IfStatement",
      "IndexDefinition",
      "InsertBulkStatement",
      "InsertStatement",
      "KillQueryNotificationSubscriptionStatement",
      "KillStatement",
      "KillStatsJobStatement",
      "LabelStatement",
      "LineNoStatement",
      "MergeStatement",
      "MoveConversationStatement",
      "OpenCursorStatement",
      "OpenMasterKeyStatement",
      "OpenSymmetricKeyStatement",
      "PredicateSetStatement",
      "PrintStatement",
      "RaiseErrorLegacyStatement",
      "RaiseErrorStatement",
      "ReadTextStatement",
      "ReceiveStatement",
      "ReconfigureStatement",
      "RenameEntityStatement",
      "ResourcePoolStatement",
      "RestoreMasterKeyStatement",
      "RestoreServiceMasterKeyStatement",
      "RestoreStatement",
      "ReturnStatement",
      "RevertStatement",
      "RevokeStatement",
      "RevokeStatement80",
      "RollbackTransactionStatement",
      "SaveTransactionStatement",
      "SelectStatement",
      "SelectStatementSnippet",
      "SendStatement",
      "SetCommandStatement",
      "SetErrorLevelStatement",
      "SetIdentityInsertStatement",
      "SetOffsetsStatement",
      "SetRowCountStatement",
      "SetStatisticsStatement",
      "SetTextSizeStatement",
      "SetTransactionIsolationLevelStatement",
      "SetUserStatement",
      "SetVariableStatement",
      "ShutdownStatement",
      "ThrowStatement",
      "TruncateTableStatement",
      "TryCatchStatement",
      "TSqlStatementSnippet",
      "UpdateStatement",
      "UpdateStatisticsStatement",
      "UpdateTextStatement",
      "UseFederationStatement",
      "UseStatement",
      "WaitForStatement",
      "WhileStatement",
      "WriteTextStatement"
    ],
    "edgeKind": "array",
    "edgeName": "Statements",
    "parentKind": "TSqlBatch"
  },
  {
    "childKinds": [
      "TSqlBatch"
    ],
    "edgeKind": "array",
    "edgeName": "Batches",
    "parentKind": "TSqlScript"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Expression",
    "parentKind": "UnaryExpression"
  },
  {
    "childKinds": [
      "ColumnWithSortOrder"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ConstraintIdentifier",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "childKinds": [
      "IdentifierOrValueExpression"
    ],
    "edgeKind": "single",
    "edgeName": "FileStreamOn",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "childKinds": [
      "CompressionDelayIndexOption",
      "DataCompressionOption",
      "FileStreamOnDropIndexOption",
      "IgnoreDupKeyIndexOption",
      "IndexExpressionOption",
      "IndexStateOption",
      "MaxDurationOption",
      "MoveToDropIndexOption",
      "OnlineIndexOption",
      "OrderIndexOption",
      "VectorMetricIndexOption",
      "VectorTypeIndexOption",
      "WaitAtLowPriorityOption",
      "XmlCompressionOption"
    ],
    "edgeKind": "array",
    "edgeName": "IndexOptions",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "childKinds": [
      "IndexType"
    ],
    "edgeKind": "single",
    "edgeName": "IndexType",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "childKinds": [
      "FileGroupOrPartitionScheme"
    ],
    "edgeKind": "single",
    "edgeName": "OnFileGroupOrPartitionScheme",
    "parentKind": "UniqueConstraintDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "UnpivotedTableReference"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "InColumns",
    "parentKind": "UnpivotedTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "PivotColumn",
    "parentKind": "UnpivotedTableReference"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TableReference",
    "parentKind": "UnpivotedTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "ValueColumn",
    "parentKind": "UnpivotedTableReference"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "FirstTableReference",
    "parentKind": "UnqualifiedJoin"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SecondTableReference",
    "parentKind": "UnqualifiedJoin"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "UpdateCall"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "UpdateForClause"
  },
  {
    "childKinds": [
      "AssignmentSetClause",
      "FunctionCallSetClause"
    ],
    "edgeKind": "array",
    "edgeName": "SetClauses",
    "parentKind": "UpdateMergeAction"
  },
  {
    "childKinds": [
      "FromClause"
    ],
    "edgeKind": "single",
    "edgeName": "FromClause",
    "parentKind": "UpdateSpecification"
  },
  {
    "childKinds": [
      "OutputClause"
    ],
    "edgeKind": "single",
    "edgeName": "OutputClause",
    "parentKind": "UpdateSpecification"
  },
  {
    "childKinds": [
      "OutputIntoClause"
    ],
    "edgeKind": "single",
    "edgeName": "OutputIntoClause",
    "parentKind": "UpdateSpecification"
  },
  {
    "childKinds": [
      "AssignmentSetClause",
      "FunctionCallSetClause"
    ],
    "edgeKind": "array",
    "edgeName": "SetClauses",
    "parentKind": "UpdateSpecification"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "JoinParenthesisTableReference",
      "NamedTableReference",
      "OdbcQualifiedJoinTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QualifiedJoin",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "UnqualifiedJoin",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Target",
    "parentKind": "UpdateSpecification"
  },
  {
    "childKinds": [
      "TopRowFilter"
    ],
    "edgeKind": "single",
    "edgeName": "TopRowFilter",
    "parentKind": "UpdateSpecification"
  },
  {
    "childKinds": [
      "WhereClause"
    ],
    "edgeKind": "single",
    "edgeName": "WhereClause",
    "parentKind": "UpdateSpecification"
  },
  {
    "childKinds": [
      "LiteralOptimizerHint",
      "OptimizeForOptimizerHint",
      "OptimizerHint",
      "TableHintsOptimizerHint",
      "UseHintList"
    ],
    "edgeKind": "array",
    "edgeName": "OptimizerHints",
    "parentKind": "UpdateStatement"
  },
  {
    "childKinds": [
      "UpdateSpecification"
    ],
    "edgeKind": "single",
    "edgeName": "UpdateSpecification",
    "parentKind": "UpdateStatement"
  },
  {
    "childKinds": [
      "WithCtesAndXmlNamespaces"
    ],
    "edgeKind": "single",
    "edgeName": "WithCtesAndXmlNamespaces",
    "parentKind": "UpdateStatement"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "UpdateStatisticsStatement"
  },
  {
    "childKinds": [
      "LiteralStatisticsOption",
      "OnOffStatisticsOption",
      "ResampleStatisticsOption",
      "StatisticsOption"
    ],
    "edgeKind": "array",
    "edgeName": "StatisticsOptions",
    "parentKind": "UpdateStatisticsStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "SubElements",
    "parentKind": "UpdateStatisticsStatement"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "UpdateTextStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "DeleteLength",
    "parentKind": "UpdateTextStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "InsertOffset",
    "parentKind": "UpdateTextStatement"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "single",
    "edgeName": "SourceColumn",
    "parentKind": "UpdateTextStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SourceParameter",
    "parentKind": "UpdateTextStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TextId",
    "parentKind": "UpdateTextStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Timestamp",
    "parentKind": "UpdateTextStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DistributionName",
    "parentKind": "UseFederationStatement"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "FederationName",
    "parentKind": "UseFederationStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "UseFederationStatement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "array",
    "edgeName": "Hints",
    "parentKind": "UseHintList"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "UserDataTypeReference"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "UserDataTypeReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "SchemaObjectName",
    "parentKind": "UserDefinedTypeCallTarget"
  },
  {
    "childKinds": [
      "ExpressionCallTarget",
      "MultiPartIdentifierCallTarget",
      "UserDefinedTypeCallTarget"
    ],
    "edgeKind": "single",
    "edgeName": "CallTarget",
    "parentKind": "UserDefinedTypePropertyAccess"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "UserDefinedTypePropertyAccess"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "PropertyName",
    "parentKind": "UserDefinedTypePropertyAccess"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "UserLoginOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "User",
    "parentKind": "UserRemoteServiceBindingOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DatabaseName",
    "parentKind": "UseStatement"
  },
  {
    "childKinds": [
      "RowValue"
    ],
    "edgeKind": "array",
    "edgeName": "RowValues",
    "parentKind": "ValuesInsertSource"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "VariableMethodCallTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "Columns",
    "parentKind": "VariableMethodCallTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "MethodName",
    "parentKind": "VariableMethodCallTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Parameters",
    "parentKind": "VariableMethodCallTableReference"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "VariableMethodCallTableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Collation",
    "parentKind": "VariableReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "VariableTableReference"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "VariableTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "VariableValuePair"
  },
  {
    "childKinds": [
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Variable",
    "parentKind": "VariableValuePair"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "BaseType",
    "parentKind": "VectorDataTypeReference"
  },
  {
    "childKinds": [
      "IntegerLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Dimension",
    "parentKind": "VectorDataTypeReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "VectorDataTypeReference"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Alias",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Metric",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SimilarTo",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "childKinds": [
      "AdHocTableReference",
      "AIGenerateChunksTableReference",
      "AIGenerateFixedChunksTableReference",
      "BuiltInFunctionTableReference",
      "BulkOpenRowset",
      "ChangeTableChangesTableReference",
      "ChangeTableVersionTableReference",
      "DataModificationTableReference",
      "FullTextTableReference",
      "GlobalFunctionTableReference",
      "InlineDerivedTable",
      "InternalOpenRowset",
      "NamedTableReference",
      "OpenJsonTableReference",
      "OpenQueryTableReference",
      "OpenRowsetCosmos",
      "OpenRowsetTableReference",
      "OpenXmlTableReference",
      "PivotedTableReference",
      "PredictTableReference",
      "QueryDerivedTable",
      "SchemaObjectFunctionTableReference",
      "SemanticTableReference",
      "UnpivotedTableReference",
      "VariableMethodCallTableReference",
      "VariableTableReference",
      "VectorSearchTableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Table",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TopN",
    "parentKind": "VectorSearchTableReference"
  },
  {
    "childKinds": [
      "ViewHashDistributionPolicy",
      "ViewRoundRobinDistributionPolicy"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "ViewDistributionOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "array",
    "edgeName": "DistributionColumns",
    "parentKind": "ViewHashDistributionPolicy"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "DistributionColumn",
    "parentKind": "ViewHashDistributionPolicy"
  },
  {
    "childKinds": [
      "LowPriorityLockWaitAbortAfterWaitOption",
      "LowPriorityLockWaitMaxDurationOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "WaitAtLowPriorityOption"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Parameter",
    "parentKind": "WaitForStatement"
  },
  {
    "childKinds": [
      "GetConversationGroupStatement",
      "ReceiveStatement"
    ],
    "edgeKind": "single",
    "edgeName": "Statement",
    "parentKind": "WaitForStatement"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "Timeout",
    "parentKind": "WaitForStatement"
  },
  {
    "childKinds": [
      "CursorId"
    ],
    "edgeKind": "single",
    "edgeName": "Cursor",
    "parentKind": "WhereClause"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "SearchCondition",
    "parentKind": "WhereClause"
  },
  {
    "childKinds": [
      "BooleanBinaryExpression",
      "BooleanComparisonExpression",
      "BooleanExpressionSnippet",
      "BooleanIsNullExpression",
      "BooleanNotExpression",
      "BooleanParenthesisExpression",
      "BooleanTernaryExpression",
      "DistinctPredicate",
      "EventDeclarationCompareFunctionParameter",
      "ExistsPredicate",
      "FullTextPredicate",
      "GraphMatchCompositeExpression",
      "GraphMatchExpression",
      "GraphMatchLastNodePredicate",
      "GraphMatchNodeExpression",
      "GraphMatchPredicate",
      "GraphMatchRecursivePredicate",
      "GraphRecursiveMatchQuantifier",
      "InPredicate",
      "LikePredicate",
      "RegexpLikePredicate",
      "SubqueryComparisonPredicate",
      "TSEqualCall",
      "UpdateCall"
    ],
    "edgeKind": "single",
    "edgeName": "Predicate",
    "parentKind": "WhileStatement"
  },
  {
    "childKinds": [
      "AddSensitivityClassificationStatement",
      "AddSignatureStatement",
      "AlterApplicationRoleStatement",
      "AlterAssemblyStatement",
      "AlterAsymmetricKeyStatement",
      "AlterAuthorizationStatement",
      "AlterAvailabilityGroupStatement",
      "AlterBrokerPriorityStatement",
      "AlterCertificateStatement",
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
      "AlterServerConfigurationSetBufferPoolExtensionStatement",
      "AlterServerConfigurationSetDiagnosticsLogStatement",
      "AlterServerConfigurationSetExternalAuthenticationStatement",
      "AlterServerConfigurationSetFailoverClusterPropertyStatement",
      "AlterServerConfigurationSetHadrClusterStatement",
      "AlterServerConfigurationSetSoftNumaStatement",
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
      "BackupCertificateStatement",
      "BackupDatabaseStatement",
      "BackupMasterKeyStatement",
      "BackupServiceMasterKeyStatement",
      "BackupTransactionLogStatement",
      "BeginConversationTimerStatement",
      "BeginDialogStatement",
      "BeginEndAtomicBlockStatement",
      "BeginEndBlockStatement",
      "BeginTransactionStatement",
      "BreakStatement",
      "BulkInsertStatement",
      "CheckpointStatement",
      "CloseCursorStatement",
      "CloseMasterKeyStatement",
      "CloseSymmetricKeyStatement",
      "CommitTransactionStatement",
      "ContinueStatement",
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
      "CreateExternalStreamingJobStatement",
      "CreateExternalStreamStatement",
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
      "DbccStatement",
      "DeallocateCursorStatement",
      "DeclareCursorStatement",
      "DeclareTableVariableStatement",
      "DeclareVariableStatement",
      "DeleteStatement",
      "DenyStatement",
      "DenyStatement80",
      "DiskStatement",
      "DropAggregateStatement",
      "DropApplicationRoleStatement",
      "DropAssemblyStatement",
      "DropAsymmetricKeyStatement",
      "DropAvailabilityGroupStatement",
      "DropBrokerPriorityStatement",
      "DropCertificateStatement",
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
      "DropExternalStreamingJobStatement",
      "DropExternalStreamStatement",
      "DropExternalTableStatement",
      "DropFederationStatement",
      "DropFullTextCatalogStatement",
      "DropFullTextIndexStatement",
      "DropFullTextStopListStatement",
      "DropFunctionStatement",
      "DropIndexStatement",
      "DropLoginStatement",
      "DropMasterKeyStatement",
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
      "EnableDisableTriggerStatement",
      "EndConversationStatement",
      "EventSessionStatement",
      "ExecuteAsStatement",
      "ExecuteStatement",
      "ExternalResourcePoolStatement",
      "FetchCursorStatement",
      "GetConversationGroupStatement",
      "GoToStatement",
      "GrantStatement",
      "GrantStatement80",
      "IfStatement",
      "IndexDefinition",
      "InsertBulkStatement",
      "InsertStatement",
      "KillQueryNotificationSubscriptionStatement",
      "KillStatement",
      "KillStatsJobStatement",
      "LabelStatement",
      "LineNoStatement",
      "MergeStatement",
      "MoveConversationStatement",
      "OpenCursorStatement",
      "OpenMasterKeyStatement",
      "OpenSymmetricKeyStatement",
      "PredicateSetStatement",
      "PrintStatement",
      "RaiseErrorLegacyStatement",
      "RaiseErrorStatement",
      "ReadTextStatement",
      "ReceiveStatement",
      "ReconfigureStatement",
      "RenameEntityStatement",
      "ResourcePoolStatement",
      "RestoreMasterKeyStatement",
      "RestoreServiceMasterKeyStatement",
      "RestoreStatement",
      "ReturnStatement",
      "RevertStatement",
      "RevokeStatement",
      "RevokeStatement80",
      "RollbackTransactionStatement",
      "SaveTransactionStatement",
      "SelectStatement",
      "SelectStatementSnippet",
      "SendStatement",
      "SetCommandStatement",
      "SetErrorLevelStatement",
      "SetIdentityInsertStatement",
      "SetOffsetsStatement",
      "SetRowCountStatement",
      "SetStatisticsStatement",
      "SetTextSizeStatement",
      "SetTransactionIsolationLevelStatement",
      "SetUserStatement",
      "SetVariableStatement",
      "ShutdownStatement",
      "ThrowStatement",
      "TruncateTableStatement",
      "TryCatchStatement",
      "TSqlStatementSnippet",
      "UpdateStatement",
      "UpdateStatisticsStatement",
      "UpdateTextStatement",
      "UseFederationStatement",
      "UseStatement",
      "WaitForStatement",
      "WhileStatement",
      "WriteTextStatement"
    ],
    "edgeKind": "single",
    "edgeName": "Statement",
    "parentKind": "WhileStatement"
  },
  {
    "childKinds": [
      "WindowDefinition"
    ],
    "edgeKind": "array",
    "edgeName": "WindowDefinition",
    "parentKind": "WindowClause"
  },
  {
    "childKinds": [
      "OrderByClause"
    ],
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "WindowDefinition"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "array",
    "edgeName": "Partitions",
    "parentKind": "WindowDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "RefWindowName",
    "parentKind": "WindowDefinition"
  },
  {
    "childKinds": [
      "WindowFrameClause"
    ],
    "edgeKind": "single",
    "edgeName": "WindowFrameClause",
    "parentKind": "WindowDefinition"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "WindowName",
    "parentKind": "WindowDefinition"
  },
  {
    "childKinds": [
      "AIAnalyzeSentimentFunctionCall",
      "AIClassifyFunctionCall",
      "AIExtractFunctionCall",
      "AIFixGrammarFunctionCall",
      "AIGenerateEmbeddingsFunctionCall",
      "AIGenerateResponseFunctionCall",
      "AISummarizeFunctionCall",
      "AITranslateFunctionCall",
      "AtTimeZoneCall",
      "BinaryExpression",
      "BinaryLiteral",
      "CastCall",
      "CoalesceExpression",
      "ColumnReferenceExpression",
      "ConvertCall",
      "DefaultLiteral",
      "ExtractFromExpression",
      "FunctionCall",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IdentityFunctionCall",
      "IIfCall",
      "IntegerLiteral",
      "InvokeExternalApiFunctionCall",
      "JsonKeyValue",
      "LeftFunctionCall",
      "MaxLiteral",
      "MoneyLiteral",
      "NextValueForExpression",
      "NullIfExpression",
      "NullLiteral",
      "NumericLiteral",
      "OdbcConvertSpecification",
      "OdbcFunctionCall",
      "OdbcLiteral",
      "ParameterlessCall",
      "ParenthesisExpression",
      "ParseCall",
      "PartitionFunctionCall",
      "RealLiteral",
      "RightFunctionCall",
      "ScalarExpressionSnippet",
      "ScalarSubquery",
      "SearchedCaseExpression",
      "SimpleCaseExpression",
      "SourceDeclaration",
      "StringLiteral",
      "TryCastCall",
      "TryConvertCall",
      "TryParseCall",
      "UnaryExpression",
      "UserDefinedTypePropertyAccess",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "OffsetValue",
    "parentKind": "WindowDelimiter"
  },
  {
    "childKinds": [
      "WindowDelimiter"
    ],
    "edgeKind": "single",
    "edgeName": "Bottom",
    "parentKind": "WindowFrameClause"
  },
  {
    "childKinds": [
      "WindowDelimiter"
    ],
    "edgeKind": "single",
    "edgeName": "Top",
    "parentKind": "WindowFrameClause"
  },
  {
    "childKinds": [
      "IdentifierPrincipalOption",
      "LiteralPrincipalOption",
      "OnOffPrincipalOption",
      "PasswordAlterPrincipalOption",
      "PrincipalOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "WindowsCreateLoginSource"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "ChangeTrackingContext",
    "parentKind": "WithCtesAndXmlNamespaces"
  },
  {
    "childKinds": [
      "CommonTableExpression"
    ],
    "edgeKind": "array",
    "edgeName": "CommonTableExpressions",
    "parentKind": "WithCtesAndXmlNamespaces"
  },
  {
    "childKinds": [
      "XmlNamespaces"
    ],
    "edgeKind": "single",
    "edgeName": "XmlNamespaces",
    "parentKind": "WithCtesAndXmlNamespaces"
  },
  {
    "childKinds": [
      "OrderByClause"
    ],
    "edgeKind": "single",
    "edgeName": "OrderByClause",
    "parentKind": "WithinGroupClause"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "WitnessServer",
    "parentKind": "WitnessDatabaseOption"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "TimeString",
    "parentKind": "WlmTimeLiteral"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "ParameterValue",
    "parentKind": "WorkloadGroupResourceParameter"
  },
  {
    "childKinds": [
      "ColumnReferenceExpression"
    ],
    "edgeKind": "single",
    "edgeName": "Column",
    "parentKind": "WriteTextStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "SourceParameter",
    "parentKind": "WriteTextStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "GlobalVariableExpression",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral",
      "VariableReference"
    ],
    "edgeKind": "single",
    "edgeName": "TextId",
    "parentKind": "WriteTextStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Timestamp",
    "parentKind": "WriteTextStatement"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "WsdlPayloadOption"
  },
  {
    "childKinds": [
      "CompressionPartitionRange"
    ],
    "edgeKind": "array",
    "edgeName": "PartitionRanges",
    "parentKind": "XmlCompressionOption"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "Name",
    "parentKind": "XmlDataTypeReference"
  },
  {
    "childKinds": [
      "ChildObjectName",
      "SchemaObjectName",
      "SchemaObjectNameSnippet"
    ],
    "edgeKind": "single",
    "edgeName": "XmlSchemaCollection",
    "parentKind": "XmlDataTypeReference"
  },
  {
    "childKinds": [
      "XmlForClauseOption"
    ],
    "edgeKind": "array",
    "edgeName": "Options",
    "parentKind": "XmlForClause"
  },
  {
    "childKinds": [
      "BinaryLiteral",
      "DefaultLiteral",
      "IdentifierLiteral",
      "IntegerLiteral",
      "MaxLiteral",
      "MoneyLiteral",
      "NullLiteral",
      "NumericLiteral",
      "OdbcLiteral",
      "RealLiteral",
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "Value",
    "parentKind": "XmlForClauseOption"
  },
  {
    "childKinds": [
      "Identifier",
      "IdentifierSnippet",
      "SqlCommandIdentifier"
    ],
    "edgeKind": "single",
    "edgeName": "Identifier",
    "parentKind": "XmlNamespacesAliasElement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "String",
    "parentKind": "XmlNamespacesAliasElement"
  },
  {
    "childKinds": [
      "StringLiteral"
    ],
    "edgeKind": "single",
    "edgeName": "String",
    "parentKind": "XmlNamespacesDefaultElement"
  },
  {
    "childKinds": [
      "XmlNamespacesAliasElement",
      "XmlNamespacesDefaultElement"
    ],
    "edgeKind": "array",
    "edgeName": "XmlNamespacesElements",
    "parentKind": "XmlNamespaces"
  }
];
var TSQL_STRUCTURAL_ATTRIBUTE_NAMES = [
  "BinaryExpressionType",
  "ComparisonType",
  "FullTextFunctionType",
  "IsNot",
  "NotDefined",
  "OdbcEscape",
  "QuoteType",
  "SubqueryComparisonPredicateType",
  "TernaryExpressionType",
  "Value"
];
var TSQL_STRUCTURAL_ATTRIBUTE_KINDS = [
  "boolean",
  "enum",
  "identifier"
];
var TSQL_STRUCTURAL_ATTRIBUTE_POLICIES = [
  {
    "allowedValues": [
      "And",
      "Or"
    ],
    "attributeKind": "enum",
    "nodeKind": "BooleanBinaryExpression",
    "propertyName": "BinaryExpressionType"
  },
  {
    "allowedValues": [
      "Equals",
      "GreaterThan",
      "GreaterThanOrEqualTo",
      "IsDistinctFrom",
      "IsNotDistinctFrom",
      "LeftOuterJoin",
      "LessThan",
      "LessThanOrEqualTo",
      "NotEqualToBrackets",
      "NotEqualToExclamation",
      "NotGreaterThan",
      "NotLessThan",
      "NotLike",
      "RightOuterJoin"
    ],
    "attributeKind": "enum",
    "nodeKind": "BooleanComparisonExpression",
    "propertyName": "ComparisonType"
  },
  {
    "attributeKind": "boolean",
    "nodeKind": "BooleanIsNullExpression",
    "propertyName": "IsNot"
  },
  {
    "allowedValues": [
      "Between",
      "NotBetween"
    ],
    "attributeKind": "enum",
    "nodeKind": "BooleanTernaryExpression",
    "propertyName": "TernaryExpressionType"
  },
  {
    "attributeKind": "boolean",
    "nodeKind": "DistinctPredicate",
    "propertyName": "IsNot"
  },
  {
    "allowedValues": [
      "Contains",
      "FreeText",
      "None"
    ],
    "attributeKind": "enum",
    "nodeKind": "FullTextPredicate",
    "propertyName": "FullTextFunctionType"
  },
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
  },
  {
    "attributeKind": "boolean",
    "nodeKind": "InPredicate",
    "propertyName": "NotDefined"
  },
  {
    "attributeKind": "boolean",
    "nodeKind": "LikePredicate",
    "propertyName": "NotDefined"
  },
  {
    "attributeKind": "boolean",
    "nodeKind": "LikePredicate",
    "propertyName": "OdbcEscape"
  },
  {
    "allowedValues": [
      "Equals",
      "GreaterThan",
      "GreaterThanOrEqualTo",
      "IsDistinctFrom",
      "IsNotDistinctFrom",
      "LeftOuterJoin",
      "LessThan",
      "LessThanOrEqualTo",
      "NotEqualToBrackets",
      "NotEqualToExclamation",
      "NotGreaterThan",
      "NotLessThan",
      "NotLike",
      "RightOuterJoin"
    ],
    "attributeKind": "enum",
    "nodeKind": "SubqueryComparisonPredicate",
    "propertyName": "ComparisonType"
  },
  {
    "allowedValues": [
      "All",
      "Any",
      "None"
    ],
    "attributeKind": "enum",
    "nodeKind": "SubqueryComparisonPredicate",
    "propertyName": "SubqueryComparisonPredicateType"
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

// src/wasm-runtime.ts
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
var runtimeCacheSymbol = /* @__PURE__ */ Symbol.for("scriptdom-wasm-bridge.runtimeCache.v2");
var runtimeCache = getRuntimeCache();
async function loadWasmRuntime({
  appBundlePath,
  bundleKind,
  missingBundleMessage,
  createRuntime
}) {
  const dotnetJsPath = path.join(appBundlePath, "_framework", "dotnet.js");
  if (!fs.existsSync(dotnetJsPath)) {
    throw new Error(missingBundleMessage(dotnetJsPath));
  }
  const cacheKey = fs.realpathSync(dotnetJsPath);
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
  const dotnetModule = await import(pathToFileURL(dotnetJsPath).href);
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
var defaultIntrospectorAppBundlePath = path2.resolve(
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
var edgePoliciesByPath = new Map(
  TSQL_STRUCTURAL_EDGE_POLICIES.map((policy) => [
    edgePolicyKey(policy.parentKind, policy.edgeName),
    {
      edgeKind: policy.edgeKind,
      childKinds: new Set(policy.childKinds)
    }
  ])
);
var attributeNameSet = new Set(TSQL_STRUCTURAL_ATTRIBUTE_NAMES);
var attributeKindSet = new Set(TSQL_STRUCTURAL_ATTRIBUTE_KINDS);
var attributePoliciesByKey = /* @__PURE__ */ new Map();
var requiredBooleanAttributesByNodeKind = /* @__PURE__ */ new Map();
for (const policy of TSQL_STRUCTURAL_ATTRIBUTE_POLICIES) {
  const runtimePolicy = {
    attributeKind: policy.attributeKind
  };
  if ("allowedValues" in policy) {
    runtimePolicy.allowedValues = new Set(policy.allowedValues);
  }
  attributePoliciesByKey.set(
    attributePolicyKey(policy.nodeKind, policy.propertyName, policy.attributeKind),
    runtimePolicy
  );
  if (policy.attributeKind === "boolean") {
    let requiredNames = requiredBooleanAttributesByNodeKind.get(policy.nodeKind);
    if (requiredNames === void 0) {
      requiredNames = /* @__PURE__ */ new Set();
      requiredBooleanAttributesByNodeKind.set(policy.nodeKind, requiredNames);
    }
    requiredNames.add(policy.propertyName);
  }
}
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
    appBundlePath: path2.resolve(options.appBundlePath ?? defaultIntrospectorAppBundlePath),
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
      let poisoned = false;
      const poisonRuntime = () => {
        poisoned = true;
        poison();
      };
      return {
        inspect(sql, options2) {
          if (poisoned) {
            throw new Error("ScriptDOM introspector runtime failed");
          }
          validateSqlInput(sql);
          const normalizedInspectOptions = normalizeInspectOptions(options2);
          const rawJson = callStringExport(
            inspectJson,
            [sql, normalizedInspectOptions.privateOptionsJson],
            poisonRuntime
          );
          try {
            return validateInspectResult(
              sql,
              parseJsonExport(rawJson),
              normalizedInspectOptions
            );
          } catch (error) {
            poisonRuntime();
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
  const tokens = options.includeTokens ? validateArray(
    value.tokens,
    "tokens",
    INTROSPECTOR_PROJECTION_ABI.limits.tokens,
    (item, index) => validateToken(sql, item, `tokens[${index}]`)
  ) : void 0;
  if (value.failed) {
    if (nodes.length !== 0 || (tokens?.length ?? 0) !== 0) {
      throw new Error("Invalid ScriptDOM result: failed result payload");
    }
  } else if (nodes.length === 0) {
    throw new Error("Invalid ScriptDOM result: node root");
  }
  if (options.includeTokens) {
    result.tokens = tokens;
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
    parentKind,
    nodeKind
  );
  const seenAttributeNames = /* @__PURE__ */ new Set();
  const presentBooleanAttributeNames = /* @__PURE__ */ new Set();
  const attributes = validateArray(
    value.attributes,
    `nodes[${index}].attributes`,
    Number.MAX_SAFE_INTEGER,
    (item, attributeIndex) => {
      const attribute = validateAttribute(
        item,
        `nodes[${index}].attributes[${attributeIndex}]`,
        nodeKind
      );
      if (seenAttributeNames.has(attribute.name)) {
        throw new Error("Invalid ScriptDOM result: structural attribute duplicate");
      }
      seenAttributeNames.add(attribute.name);
      if (attribute.kind === "boolean") {
        presentBooleanAttributeNames.add(attribute.name);
      }
      return attribute;
    }
  );
  const requiredBooleanAttributeNames = requiredBooleanAttributesByNodeKind.get(nodeKind);
  if (requiredBooleanAttributeNames !== void 0) {
    for (const requiredName of requiredBooleanAttributeNames) {
      if (!presentBooleanAttributeNames.has(requiredName)) {
        throw new Error("Invalid ScriptDOM result: structural boolean attribute");
      }
    }
  }
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
function validatePathFromParent(value, nodeIndex, parentKind, nodeKind) {
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
  const edgePolicy = edgePoliciesByPath.get(edgePolicyKey(parentKind, value[0]));
  if (edgePolicy === void 0 || !edgePolicy.childKinds.has(nodeKind)) {
    throw new Error("Invalid ScriptDOM result: node path");
  }
  if (value.length === 1) {
    if (edgePolicy.edgeKind !== "single") {
      throw new Error("Invalid ScriptDOM result: node path");
    }
    return [value[0]];
  }
  if (edgePolicy.edgeKind !== "array") {
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
  const attributePolicy = attributePoliciesByKey.get(policyKey);
  if (attributePolicy === void 0) {
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
  if (value.kind === "enum") {
    if (typeof value.value !== "string") {
      throw new Error("Invalid ScriptDOM result: structural enum attribute value");
    }
    if (!attributePolicy.allowedValues?.has(value.value)) {
      throw new Error("Invalid ScriptDOM result: structural scalar attribute value");
    }
    return {
      name: value.name,
      kind: "enum",
      value: value.value
    };
  }
  if (value.kind === "boolean") {
    if (typeof value.value !== "boolean") {
      throw new Error("Invalid ScriptDOM result: structural boolean attribute value");
    }
    return {
      name: value.name,
      kind: "boolean",
      value: value.value
    };
  }
  throw new Error("Invalid ScriptDOM result: structural attribute kind");
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
      if (index + 1 >= value.length || next < 56320 || next > 57343) {
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
export {
  createTsqlIntrospector
};
//# sourceMappingURL=introspector.mjs.map
