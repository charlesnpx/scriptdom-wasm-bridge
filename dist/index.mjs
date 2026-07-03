import __scriptdomBridgePath from "node:path";
import { fileURLToPath as __scriptdomBridgeFileURLToPath } from "node:url";
const __scriptdomBridgeModuleDirectory = __scriptdomBridgePath.dirname(__scriptdomBridgeFileURLToPath(import.meta.url));

// src/introspector.ts
import path2 from "node:path";

// src/introspector-projection.v1.generated.ts
var INTROSPECTOR_PROJECTION_ABI = {
  "allowlistSha256": "01854f599f87d9e5e59877064dad5315306d18cd9e58d77c0c3b377d35a4ad66",
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
  "resultSchemaSha256": "ffba3c8e612ea655cfe00af4b3dbad0484236891acd3b3217bc373a1f09d300d"
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
var TSQL_STRUCTURAL_ATTRIBUTE_NAMES = [
  "QuoteType",
  "Value"
];
var TSQL_STRUCTURAL_ATTRIBUTE_KINDS = [
  "enum",
  "identifier"
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
var attributeNameSet = new Set(TSQL_STRUCTURAL_ATTRIBUTE_NAMES);
var attributeKindSet = new Set(TSQL_STRUCTURAL_ATTRIBUTE_KINDS);
var identifierStateSet = new Set(TSQL_IDENTIFIER_STATES);
var coordinateStateSet = new Set(TSQL_INSPECT_COORDINATE_STATES);
var tokenTypeSet = new Set(TSQL_INSPECT_TOKEN_TYPES);
var redactedReasons = /* @__PURE__ */ new Set(["literal-origin", "secret-pattern"]);
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
      return {
        inspect(sql, options2) {
          validateSqlInput(sql);
          const normalizedInspectOptions = normalizeInspectOptions(options2);
          const rawJson = callStringExport(
            inspectJson,
            [sql, normalizedInspectOptions.privateOptionsJson],
            poison
          );
          return validateInspectResult(
            sql,
            parseJsonExport(rawJson),
            normalizedInspectOptions
          );
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
    throw new Error("Invalid ScriptDOM WASM export: introspector JSON result");
  }
  if (Buffer.byteLength(value, "utf8") > INTROSPECTOR_PROJECTION_ABI.limits.serializedEnvelopeUtf8Bytes || value.length > INTROSPECTOR_PROJECTION_ABI.limits.projectedOutputUtf16CodeUnits) {
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
  const nodes = validateArray(
    value.nodes,
    "nodes",
    INTROSPECTOR_PROJECTION_ABI.limits.nodes,
    (item, index) => validateNode(sql, item, index, options)
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
function validateNode(sql, value, index, options) {
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
  if (!nodeKindSet.has(String(value.kind))) {
    throw new Error("Invalid ScriptDOM result: node kind");
  }
  if (value.parentId !== null) {
    assertNonNegativeInteger(value.parentId, `nodes[${index}].parentId`);
    if (value.parentId >= value.id) {
      throw new Error("Invalid ScriptDOM result: node parent");
    }
  }
  if (!Array.isArray(value.pathFromParent)) {
    throw new Error("Invalid ScriptDOM result: node path");
  }
  const pathFromParent = value.pathFromParent.map((segment, segmentIndex) => {
    assertString(segment, `nodes[${index}].pathFromParent[${segmentIndex}]`);
    return segment;
  });
  const attributes = validateArray(
    value.attributes,
    `nodes[${index}].attributes`,
    Number.MAX_SAFE_INTEGER,
    (item, attributeIndex) => validateAttribute(item, `nodes[${index}].attributes[${attributeIndex}]`)
  );
  const node = {
    id: value.id,
    kind: value.kind,
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
function validateAttribute(value, fieldName) {
  assertObject(value, fieldName);
  if (!attributeNameSet.has(String(value.name))) {
    throw new Error("Invalid ScriptDOM result: structural attribute name");
  }
  if (!attributeKindSet.has(String(value.kind))) {
    throw new Error("Invalid ScriptDOM result: structural attribute kind");
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
  return {
    name: value.name,
    kind: value.kind,
    value: value.value
  };
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
import path3 from "node:path";
var defaultTokenizerAppBundlePath = path3.resolve(
  __scriptdomBridgeModuleDirectory,
  "../vendor/scriptdom-tokenizer-wasm/AppBundle"
);
async function loadTsqlTokenizerRuntime(options = {}) {
  return loadWasmRuntime({
    appBundlePath: path3.resolve(options.appBundlePath ?? defaultTokenizerAppBundlePath),
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
export {
  createTsqlIntrospector,
  createTsqlSanitizer,
  createTsqlTokenizer,
  normalizeTsqlPlaceholders
};
//# sourceMappingURL=index.mjs.map
