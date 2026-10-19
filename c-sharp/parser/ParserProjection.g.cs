using System.Text.Json;
using Microsoft.SqlServer.TransactSql.ScriptDom;
namespace ScriptDom.WasmBridge;
internal readonly record struct StructuralChildEdge(string Name, int Index, TSqlFragment Child);
internal static class ParserProjection
{
    public const string AbiJson = "{\"parser\":\"TSql160Parser\",\"projectionVersion\":1,\"manifestSha256\":\"99f8556c8d4f08a382aef3df1343f8d87e6f07dd1548ccb4170c88655402a41a\",\"policySha256\":\"e6300d157fdd1826d791e78b0dc3ae61ad724bdf29fcb960d71dcace3d81b678\",\"schemaSha256\":\"54bb9e670e352567868f4a38a3a77976578bcc40d55a76570b389c412a0e82ca\"}";
    public const string Parser = "TSql160Parser";
    public const int Version = 1;
    public const int SqlUtf16CodeUnits = 2097152;
    public const int Nodes = 100000;
    public const int TraversalDepth = 1000;
    public const int ParseErrors = 1000;
    public const int StringUtf16CodeUnits = 2097152;
    public const int EnvelopeUtf16CodeUnits = 16777216;
    public const int EnvelopeUtf8Bytes = 33554432;
    public static string GetKind(TSqlFragment node)
    {
        var nodeType = node.GetType();
        if (nodeType == typeof(AIAnalyzeSentimentFunctionCall)) return "AIAnalyzeSentimentFunctionCall";
        if (nodeType == typeof(AIClassifyFunctionCall)) return "AIClassifyFunctionCall";
        if (nodeType == typeof(AIExtractFunctionCall)) return "AIExtractFunctionCall";
        if (nodeType == typeof(AIFixGrammarFunctionCall)) return "AIFixGrammarFunctionCall";
        if (nodeType == typeof(AIGenerateChunksTableReference)) return "AIGenerateChunksTableReference";
        if (nodeType == typeof(AIGenerateEmbeddingsFunctionCall)) return "AIGenerateEmbeddingsFunctionCall";
        if (nodeType == typeof(AIGenerateFixedChunksTableReference)) return "AIGenerateFixedChunksTableReference";
        if (nodeType == typeof(AIGenerateResponseFunctionCall)) return "AIGenerateResponseFunctionCall";
        if (nodeType == typeof(AISummarizeFunctionCall)) return "AISummarizeFunctionCall";
        if (nodeType == typeof(AITranslateFunctionCall)) return "AITranslateFunctionCall";
        if (nodeType == typeof(AcceleratedDatabaseRecoveryDatabaseOption)) return "AcceleratedDatabaseRecoveryDatabaseOption";
        if (nodeType == typeof(AdHocDataSource)) return "AdHocDataSource";
        if (nodeType == typeof(AdHocTableReference)) return "AdHocTableReference";
        if (nodeType == typeof(AddAlterFullTextIndexAction)) return "AddAlterFullTextIndexAction";
        if (nodeType == typeof(AddFileSpec)) return "AddFileSpec";
        if (nodeType == typeof(AddMemberAlterRoleAction)) return "AddMemberAlterRoleAction";
        if (nodeType == typeof(AddSearchPropertyListAction)) return "AddSearchPropertyListAction";
        if (nodeType == typeof(AddSensitivityClassificationStatement)) return "AddSensitivityClassificationStatement";
        if (nodeType == typeof(AddSignatureStatement)) return "AddSignatureStatement";
        if (nodeType == typeof(AlgorithmKeyOption)) return "AlgorithmKeyOption";
        if (nodeType == typeof(AlterApplicationRoleStatement)) return "AlterApplicationRoleStatement";
        if (nodeType == typeof(AlterAssemblyStatement)) return "AlterAssemblyStatement";
        if (nodeType == typeof(AlterAsymmetricKeyStatement)) return "AlterAsymmetricKeyStatement";
        if (nodeType == typeof(AlterAuthorizationStatement)) return "AlterAuthorizationStatement";
        if (nodeType == typeof(AlterAvailabilityGroupAction)) return "AlterAvailabilityGroupAction";
        if (nodeType == typeof(AlterAvailabilityGroupFailoverAction)) return "AlterAvailabilityGroupFailoverAction";
        if (nodeType == typeof(AlterAvailabilityGroupFailoverOption)) return "AlterAvailabilityGroupFailoverOption";
        if (nodeType == typeof(AlterAvailabilityGroupStatement)) return "AlterAvailabilityGroupStatement";
        if (nodeType == typeof(AlterBrokerPriorityStatement)) return "AlterBrokerPriorityStatement";
        if (nodeType == typeof(AlterCertificateStatement)) return "AlterCertificateStatement";
        if (nodeType == typeof(AlterColumnAlterFullTextIndexAction)) return "AlterColumnAlterFullTextIndexAction";
        if (nodeType == typeof(AlterColumnEncryptionKeyStatement)) return "AlterColumnEncryptionKeyStatement";
        if (nodeType == typeof(AlterCredentialStatement)) return "AlterCredentialStatement";
        if (nodeType == typeof(AlterCryptographicProviderStatement)) return "AlterCryptographicProviderStatement";
        if (nodeType == typeof(AlterDatabaseAddFileGroupStatement)) return "AlterDatabaseAddFileGroupStatement";
        if (nodeType == typeof(AlterDatabaseAddFileStatement)) return "AlterDatabaseAddFileStatement";
        if (nodeType == typeof(AlterDatabaseAuditSpecificationStatement)) return "AlterDatabaseAuditSpecificationStatement";
        if (nodeType == typeof(AlterDatabaseCollateStatement)) return "AlterDatabaseCollateStatement";
        if (nodeType == typeof(AlterDatabaseEncryptionKeyStatement)) return "AlterDatabaseEncryptionKeyStatement";
        if (nodeType == typeof(AlterDatabaseModifyFileGroupStatement)) return "AlterDatabaseModifyFileGroupStatement";
        if (nodeType == typeof(AlterDatabaseModifyFileStatement)) return "AlterDatabaseModifyFileStatement";
        if (nodeType == typeof(AlterDatabaseModifyNameStatement)) return "AlterDatabaseModifyNameStatement";
        if (nodeType == typeof(AlterDatabasePerformCutoverStatement)) return "AlterDatabasePerformCutoverStatement";
        if (nodeType == typeof(AlterDatabaseRebuildLogStatement)) return "AlterDatabaseRebuildLogStatement";
        if (nodeType == typeof(AlterDatabaseRemoveFileGroupStatement)) return "AlterDatabaseRemoveFileGroupStatement";
        if (nodeType == typeof(AlterDatabaseRemoveFileStatement)) return "AlterDatabaseRemoveFileStatement";
        if (nodeType == typeof(AlterDatabaseScopedConfigurationClearStatement)) return "AlterDatabaseScopedConfigurationClearStatement";
        if (nodeType == typeof(AlterDatabaseScopedConfigurationSetStatement)) return "AlterDatabaseScopedConfigurationSetStatement";
        if (nodeType == typeof(AlterDatabaseSetStatement)) return "AlterDatabaseSetStatement";
        if (nodeType == typeof(AlterDatabaseTermination)) return "AlterDatabaseTermination";
        if (nodeType == typeof(AlterEndpointStatement)) return "AlterEndpointStatement";
        if (nodeType == typeof(AlterEventSessionStatement)) return "AlterEventSessionStatement";
        if (nodeType == typeof(AlterExternalDataSourceStatement)) return "AlterExternalDataSourceStatement";
        if (nodeType == typeof(AlterExternalFunctionStatement)) return "AlterExternalFunctionStatement";
        if (nodeType == typeof(AlterExternalLanguageStatement)) return "AlterExternalLanguageStatement";
        if (nodeType == typeof(AlterExternalLibraryStatement)) return "AlterExternalLibraryStatement";
        if (nodeType == typeof(AlterExternalModelStatement)) return "AlterExternalModelStatement";
        if (nodeType == typeof(AlterExternalResourcePoolStatement)) return "AlterExternalResourcePoolStatement";
        if (nodeType == typeof(AlterFederationStatement)) return "AlterFederationStatement";
        if (nodeType == typeof(AlterFullTextCatalogStatement)) return "AlterFullTextCatalogStatement";
        if (nodeType == typeof(AlterFullTextIndexStatement)) return "AlterFullTextIndexStatement";
        if (nodeType == typeof(AlterFullTextStopListStatement)) return "AlterFullTextStopListStatement";
        if (nodeType == typeof(AlterFunctionStatement)) return "AlterFunctionStatement";
        if (nodeType == typeof(AlterIndexStatement)) return "AlterIndexStatement";
        if (nodeType == typeof(AlterLoginAddDropCredentialStatement)) return "AlterLoginAddDropCredentialStatement";
        if (nodeType == typeof(AlterLoginEnableDisableStatement)) return "AlterLoginEnableDisableStatement";
        if (nodeType == typeof(AlterLoginOptionsStatement)) return "AlterLoginOptionsStatement";
        if (nodeType == typeof(AlterMasterKeyStatement)) return "AlterMasterKeyStatement";
        if (nodeType == typeof(AlterMessageTypeStatement)) return "AlterMessageTypeStatement";
        if (nodeType == typeof(AlterPartitionFunctionStatement)) return "AlterPartitionFunctionStatement";
        if (nodeType == typeof(AlterPartitionSchemeStatement)) return "AlterPartitionSchemeStatement";
        if (nodeType == typeof(AlterProcedureStatement)) return "AlterProcedureStatement";
        if (nodeType == typeof(AlterQueueStatement)) return "AlterQueueStatement";
        if (nodeType == typeof(AlterRemoteServiceBindingStatement)) return "AlterRemoteServiceBindingStatement";
        if (nodeType == typeof(AlterResourceGovernorStatement)) return "AlterResourceGovernorStatement";
        if (nodeType == typeof(AlterResourcePoolStatement)) return "AlterResourcePoolStatement";
        if (nodeType == typeof(AlterRoleStatement)) return "AlterRoleStatement";
        if (nodeType == typeof(AlterRouteStatement)) return "AlterRouteStatement";
        if (nodeType == typeof(AlterSchemaStatement)) return "AlterSchemaStatement";
        if (nodeType == typeof(AlterSearchPropertyListStatement)) return "AlterSearchPropertyListStatement";
        if (nodeType == typeof(AlterSecurityPolicyStatement)) return "AlterSecurityPolicyStatement";
        if (nodeType == typeof(AlterSequenceStatement)) return "AlterSequenceStatement";
        if (nodeType == typeof(AlterServerAuditSpecificationStatement)) return "AlterServerAuditSpecificationStatement";
        if (nodeType == typeof(AlterServerAuditStatement)) return "AlterServerAuditStatement";
        if (nodeType == typeof(AlterServerConfigurationBufferPoolExtensionContainerOption)) return "AlterServerConfigurationBufferPoolExtensionContainerOption";
        if (nodeType == typeof(AlterServerConfigurationBufferPoolExtensionOption)) return "AlterServerConfigurationBufferPoolExtensionOption";
        if (nodeType == typeof(AlterServerConfigurationBufferPoolExtensionSizeOption)) return "AlterServerConfigurationBufferPoolExtensionSizeOption";
        if (nodeType == typeof(AlterServerConfigurationDiagnosticsLogMaxSizeOption)) return "AlterServerConfigurationDiagnosticsLogMaxSizeOption";
        if (nodeType == typeof(AlterServerConfigurationDiagnosticsLogOption)) return "AlterServerConfigurationDiagnosticsLogOption";
        if (nodeType == typeof(AlterServerConfigurationExternalAuthenticationContainerOption)) return "AlterServerConfigurationExternalAuthenticationContainerOption";
        if (nodeType == typeof(AlterServerConfigurationExternalAuthenticationOption)) return "AlterServerConfigurationExternalAuthenticationOption";
        if (nodeType == typeof(AlterServerConfigurationFailoverClusterPropertyOption)) return "AlterServerConfigurationFailoverClusterPropertyOption";
        if (nodeType == typeof(AlterServerConfigurationHadrClusterOption)) return "AlterServerConfigurationHadrClusterOption";
        if (nodeType == typeof(AlterServerConfigurationSetBufferPoolExtensionStatement)) return "AlterServerConfigurationSetBufferPoolExtensionStatement";
        if (nodeType == typeof(AlterServerConfigurationSetDiagnosticsLogStatement)) return "AlterServerConfigurationSetDiagnosticsLogStatement";
        if (nodeType == typeof(AlterServerConfigurationSetExternalAuthenticationStatement)) return "AlterServerConfigurationSetExternalAuthenticationStatement";
        if (nodeType == typeof(AlterServerConfigurationSetFailoverClusterPropertyStatement)) return "AlterServerConfigurationSetFailoverClusterPropertyStatement";
        if (nodeType == typeof(AlterServerConfigurationSetHadrClusterStatement)) return "AlterServerConfigurationSetHadrClusterStatement";
        if (nodeType == typeof(AlterServerConfigurationSetSoftNumaStatement)) return "AlterServerConfigurationSetSoftNumaStatement";
        if (nodeType == typeof(AlterServerConfigurationSoftNumaOption)) return "AlterServerConfigurationSoftNumaOption";
        if (nodeType == typeof(AlterServerConfigurationStatement)) return "AlterServerConfigurationStatement";
        if (nodeType == typeof(AlterServerRoleStatement)) return "AlterServerRoleStatement";
        if (nodeType == typeof(AlterServiceMasterKeyStatement)) return "AlterServiceMasterKeyStatement";
        if (nodeType == typeof(AlterServiceStatement)) return "AlterServiceStatement";
        if (nodeType == typeof(AlterSymmetricKeyStatement)) return "AlterSymmetricKeyStatement";
        if (nodeType == typeof(AlterTableAddClusterByStatement)) return "AlterTableAddClusterByStatement";
        if (nodeType == typeof(AlterTableAddTableElementStatement)) return "AlterTableAddTableElementStatement";
        if (nodeType == typeof(AlterTableAlterColumnStatement)) return "AlterTableAlterColumnStatement";
        if (nodeType == typeof(AlterTableAlterIndexStatement)) return "AlterTableAlterIndexStatement";
        if (nodeType == typeof(AlterTableAlterPartitionStatement)) return "AlterTableAlterPartitionStatement";
        if (nodeType == typeof(AlterTableChangeTrackingModificationStatement)) return "AlterTableChangeTrackingModificationStatement";
        if (nodeType == typeof(AlterTableConstraintModificationStatement)) return "AlterTableConstraintModificationStatement";
        if (nodeType == typeof(AlterTableDropTableElement)) return "AlterTableDropTableElement";
        if (nodeType == typeof(AlterTableDropTableElementStatement)) return "AlterTableDropTableElementStatement";
        if (nodeType == typeof(AlterTableFileTableNamespaceStatement)) return "AlterTableFileTableNamespaceStatement";
        if (nodeType == typeof(AlterTableRebuildStatement)) return "AlterTableRebuildStatement";
        if (nodeType == typeof(AlterTableSetStatement)) return "AlterTableSetStatement";
        if (nodeType == typeof(AlterTableSwitchStatement)) return "AlterTableSwitchStatement";
        if (nodeType == typeof(AlterTableTriggerModificationStatement)) return "AlterTableTriggerModificationStatement";
        if (nodeType == typeof(AlterTriggerStatement)) return "AlterTriggerStatement";
        if (nodeType == typeof(AlterUserStatement)) return "AlterUserStatement";
        if (nodeType == typeof(AlterViewStatement)) return "AlterViewStatement";
        if (nodeType == typeof(AlterWorkloadGroupStatement)) return "AlterWorkloadGroupStatement";
        if (nodeType == typeof(AlterXmlSchemaCollectionStatement)) return "AlterXmlSchemaCollectionStatement";
        if (nodeType == typeof(ApplicationRoleOption)) return "ApplicationRoleOption";
        if (nodeType == typeof(AssemblyEncryptionSource)) return "AssemblyEncryptionSource";
        if (nodeType == typeof(AssemblyName)) return "AssemblyName";
        if (nodeType == typeof(AssemblyOption)) return "AssemblyOption";
        if (nodeType == typeof(AssignmentSetClause)) return "AssignmentSetClause";
        if (nodeType == typeof(AsymmetricKeyCreateLoginSource)) return "AsymmetricKeyCreateLoginSource";
        if (nodeType == typeof(AtTimeZoneCall)) return "AtTimeZoneCall";
        if (nodeType == typeof(AuditActionGroupReference)) return "AuditActionGroupReference";
        if (nodeType == typeof(AuditActionSpecification)) return "AuditActionSpecification";
        if (nodeType == typeof(AuditGuidAuditOption)) return "AuditGuidAuditOption";
        if (nodeType == typeof(AuditSpecificationPart)) return "AuditSpecificationPart";
        if (nodeType == typeof(AuditTarget)) return "AuditTarget";
        if (nodeType == typeof(AuthenticationEndpointProtocolOption)) return "AuthenticationEndpointProtocolOption";
        if (nodeType == typeof(AuthenticationPayloadOption)) return "AuthenticationPayloadOption";
        if (nodeType == typeof(AutoCleanupChangeTrackingOptionDetail)) return "AutoCleanupChangeTrackingOptionDetail";
        if (nodeType == typeof(AutoCreateStatisticsDatabaseOption)) return "AutoCreateStatisticsDatabaseOption";
        if (nodeType == typeof(AutomaticTuningCreateIndexOption)) return "AutomaticTuningCreateIndexOption";
        if (nodeType == typeof(AutomaticTuningDatabaseOption)) return "AutomaticTuningDatabaseOption";
        if (nodeType == typeof(AutomaticTuningDropIndexOption)) return "AutomaticTuningDropIndexOption";
        if (nodeType == typeof(AutomaticTuningForceLastGoodPlanOption)) return "AutomaticTuningForceLastGoodPlanOption";
        if (nodeType == typeof(AutomaticTuningMaintainIndexOption)) return "AutomaticTuningMaintainIndexOption";
        if (nodeType == typeof(AutomaticTuningOption)) return "AutomaticTuningOption";
        if (nodeType == typeof(AvailabilityModeReplicaOption)) return "AvailabilityModeReplicaOption";
        if (nodeType == typeof(AvailabilityReplica)) return "AvailabilityReplica";
        if (nodeType == typeof(BackupCertificateStatement)) return "BackupCertificateStatement";
        if (nodeType == typeof(BackupDatabaseStatement)) return "BackupDatabaseStatement";
        if (nodeType == typeof(BackupEncryptionOption)) return "BackupEncryptionOption";
        if (nodeType == typeof(BackupMasterKeyStatement)) return "BackupMasterKeyStatement";
        if (nodeType == typeof(BackupOption)) return "BackupOption";
        if (nodeType == typeof(BackupRestoreFileInfo)) return "BackupRestoreFileInfo";
        if (nodeType == typeof(BackupServiceMasterKeyStatement)) return "BackupServiceMasterKeyStatement";
        if (nodeType == typeof(BackupTransactionLogStatement)) return "BackupTransactionLogStatement";
        if (nodeType == typeof(BackwardsCompatibleDropIndexClause)) return "BackwardsCompatibleDropIndexClause";
        if (nodeType == typeof(BeginConversationTimerStatement)) return "BeginConversationTimerStatement";
        if (nodeType == typeof(BeginDialogStatement)) return "BeginDialogStatement";
        if (nodeType == typeof(BeginEndAtomicBlockStatement)) return "BeginEndAtomicBlockStatement";
        if (nodeType == typeof(BeginEndBlockStatement)) return "BeginEndBlockStatement";
        if (nodeType == typeof(BeginTransactionStatement)) return "BeginTransactionStatement";
        if (nodeType == typeof(BinaryExpression)) return "BinaryExpression";
        if (nodeType == typeof(BinaryLiteral)) return "BinaryLiteral";
        if (nodeType == typeof(BinaryQueryExpression)) return "BinaryQueryExpression";
        if (nodeType == typeof(BooleanBinaryExpression)) return "BooleanBinaryExpression";
        if (nodeType == typeof(BooleanComparisonExpression)) return "BooleanComparisonExpression";
        if (nodeType == typeof(BooleanExpressionSnippet)) return "BooleanExpressionSnippet";
        if (nodeType == typeof(BooleanIsNullExpression)) return "BooleanIsNullExpression";
        if (nodeType == typeof(BooleanNotExpression)) return "BooleanNotExpression";
        if (nodeType == typeof(BooleanParenthesisExpression)) return "BooleanParenthesisExpression";
        if (nodeType == typeof(BooleanTernaryExpression)) return "BooleanTernaryExpression";
        if (nodeType == typeof(BoundingBoxParameter)) return "BoundingBoxParameter";
        if (nodeType == typeof(BoundingBoxSpatialIndexOption)) return "BoundingBoxSpatialIndexOption";
        if (nodeType == typeof(BreakStatement)) return "BreakStatement";
        if (nodeType == typeof(BrokerPriorityParameter)) return "BrokerPriorityParameter";
        if (nodeType == typeof(BrowseForClause)) return "BrowseForClause";
        if (nodeType == typeof(BuiltInFunctionTableReference)) return "BuiltInFunctionTableReference";
        if (nodeType == typeof(BulkInsertOption)) return "BulkInsertOption";
        if (nodeType == typeof(BulkInsertStatement)) return "BulkInsertStatement";
        if (nodeType == typeof(BulkOpenRowset)) return "BulkOpenRowset";
        if (nodeType == typeof(CastCall)) return "CastCall";
        if (nodeType == typeof(CatalogCollationOption)) return "CatalogCollationOption";
        if (nodeType == typeof(CellsPerObjectSpatialIndexOption)) return "CellsPerObjectSpatialIndexOption";
        if (nodeType == typeof(CertificateCreateLoginSource)) return "CertificateCreateLoginSource";
        if (nodeType == typeof(CertificateOption)) return "CertificateOption";
        if (nodeType == typeof(ChangeRetentionChangeTrackingOptionDetail)) return "ChangeRetentionChangeTrackingOptionDetail";
        if (nodeType == typeof(ChangeTableChangesTableReference)) return "ChangeTableChangesTableReference";
        if (nodeType == typeof(ChangeTableVersionTableReference)) return "ChangeTableVersionTableReference";
        if (nodeType == typeof(ChangeTrackingDatabaseOption)) return "ChangeTrackingDatabaseOption";
        if (nodeType == typeof(ChangeTrackingFullTextIndexOption)) return "ChangeTrackingFullTextIndexOption";
        if (nodeType == typeof(CharacterSetPayloadOption)) return "CharacterSetPayloadOption";
        if (nodeType == typeof(CheckConstraintDefinition)) return "CheckConstraintDefinition";
        if (nodeType == typeof(CheckpointStatement)) return "CheckpointStatement";
        if (nodeType == typeof(ChildObjectName)) return "ChildObjectName";
        if (nodeType == typeof(ClassifierEndTimeOption)) return "ClassifierEndTimeOption";
        if (nodeType == typeof(ClassifierImportanceOption)) return "ClassifierImportanceOption";
        if (nodeType == typeof(ClassifierMemberNameOption)) return "ClassifierMemberNameOption";
        if (nodeType == typeof(ClassifierStartTimeOption)) return "ClassifierStartTimeOption";
        if (nodeType == typeof(ClassifierWlmContextOption)) return "ClassifierWlmContextOption";
        if (nodeType == typeof(ClassifierWlmLabelOption)) return "ClassifierWlmLabelOption";
        if (nodeType == typeof(ClassifierWorkloadGroupOption)) return "ClassifierWorkloadGroupOption";
        if (nodeType == typeof(CloseCursorStatement)) return "CloseCursorStatement";
        if (nodeType == typeof(CloseMasterKeyStatement)) return "CloseMasterKeyStatement";
        if (nodeType == typeof(CloseSymmetricKeyStatement)) return "CloseSymmetricKeyStatement";
        if (nodeType == typeof(ClusterByTableOption)) return "ClusterByTableOption";
        if (nodeType == typeof(CoalesceExpression)) return "CoalesceExpression";
        if (nodeType == typeof(ColumnDefinition)) return "ColumnDefinition";
        if (nodeType == typeof(ColumnDefinitionBase)) return "ColumnDefinitionBase";
        if (nodeType == typeof(ColumnEncryptionAlgorithmNameParameter)) return "ColumnEncryptionAlgorithmNameParameter";
        if (nodeType == typeof(ColumnEncryptionAlgorithmParameter)) return "ColumnEncryptionAlgorithmParameter";
        if (nodeType == typeof(ColumnEncryptionDefinition)) return "ColumnEncryptionDefinition";
        if (nodeType == typeof(ColumnEncryptionKeyNameParameter)) return "ColumnEncryptionKeyNameParameter";
        if (nodeType == typeof(ColumnEncryptionKeyValue)) return "ColumnEncryptionKeyValue";
        if (nodeType == typeof(ColumnEncryptionTypeParameter)) return "ColumnEncryptionTypeParameter";
        if (nodeType == typeof(ColumnMasterKeyEnclaveComputationsParameter)) return "ColumnMasterKeyEnclaveComputationsParameter";
        if (nodeType == typeof(ColumnMasterKeyNameParameter)) return "ColumnMasterKeyNameParameter";
        if (nodeType == typeof(ColumnMasterKeyPathParameter)) return "ColumnMasterKeyPathParameter";
        if (nodeType == typeof(ColumnMasterKeyStoreProviderNameParameter)) return "ColumnMasterKeyStoreProviderNameParameter";
        if (nodeType == typeof(ColumnReferenceExpression)) return "ColumnReferenceExpression";
        if (nodeType == typeof(ColumnStorageOptions)) return "ColumnStorageOptions";
        if (nodeType == typeof(ColumnWithSortOrder)) return "ColumnWithSortOrder";
        if (nodeType == typeof(CommandSecurityElement80)) return "CommandSecurityElement80";
        if (nodeType == typeof(CommitTransactionStatement)) return "CommitTransactionStatement";
        if (nodeType == typeof(CommonTableExpression)) return "CommonTableExpression";
        if (nodeType == typeof(CompositeGroupingSpecification)) return "CompositeGroupingSpecification";
        if (nodeType == typeof(CompressionDelayIndexOption)) return "CompressionDelayIndexOption";
        if (nodeType == typeof(CompressionEndpointProtocolOption)) return "CompressionEndpointProtocolOption";
        if (nodeType == typeof(CompressionPartitionRange)) return "CompressionPartitionRange";
        if (nodeType == typeof(ComputeClause)) return "ComputeClause";
        if (nodeType == typeof(ComputeFunction)) return "ComputeFunction";
        if (nodeType == typeof(ContainmentDatabaseOption)) return "ContainmentDatabaseOption";
        if (nodeType == typeof(ContinueStatement)) return "ContinueStatement";
        if (nodeType == typeof(ContractMessage)) return "ContractMessage";
        if (nodeType == typeof(ConvertCall)) return "ConvertCall";
        if (nodeType == typeof(CopyColumnOption)) return "CopyColumnOption";
        if (nodeType == typeof(CopyCredentialOption)) return "CopyCredentialOption";
        if (nodeType == typeof(CopyOption)) return "CopyOption";
        if (nodeType == typeof(CopyStatement)) return "CopyStatement";
        if (nodeType == typeof(CreateAggregateStatement)) return "CreateAggregateStatement";
        if (nodeType == typeof(CreateApplicationRoleStatement)) return "CreateApplicationRoleStatement";
        if (nodeType == typeof(CreateAssemblyStatement)) return "CreateAssemblyStatement";
        if (nodeType == typeof(CreateAsymmetricKeyStatement)) return "CreateAsymmetricKeyStatement";
        if (nodeType == typeof(CreateAvailabilityGroupStatement)) return "CreateAvailabilityGroupStatement";
        if (nodeType == typeof(CreateBrokerPriorityStatement)) return "CreateBrokerPriorityStatement";
        if (nodeType == typeof(CreateCertificateStatement)) return "CreateCertificateStatement";
        if (nodeType == typeof(CreateColumnEncryptionKeyStatement)) return "CreateColumnEncryptionKeyStatement";
        if (nodeType == typeof(CreateColumnMasterKeyStatement)) return "CreateColumnMasterKeyStatement";
        if (nodeType == typeof(CreateColumnStoreIndexStatement)) return "CreateColumnStoreIndexStatement";
        if (nodeType == typeof(CreateContractStatement)) return "CreateContractStatement";
        if (nodeType == typeof(CreateCredentialStatement)) return "CreateCredentialStatement";
        if (nodeType == typeof(CreateCryptographicProviderStatement)) return "CreateCryptographicProviderStatement";
        if (nodeType == typeof(CreateDatabaseAuditSpecificationStatement)) return "CreateDatabaseAuditSpecificationStatement";
        if (nodeType == typeof(CreateDatabaseEncryptionKeyStatement)) return "CreateDatabaseEncryptionKeyStatement";
        if (nodeType == typeof(CreateDatabaseStatement)) return "CreateDatabaseStatement";
        if (nodeType == typeof(CreateDefaultStatement)) return "CreateDefaultStatement";
        if (nodeType == typeof(CreateEndpointStatement)) return "CreateEndpointStatement";
        if (nodeType == typeof(CreateEventNotificationStatement)) return "CreateEventNotificationStatement";
        if (nodeType == typeof(CreateEventSessionStatement)) return "CreateEventSessionStatement";
        if (nodeType == typeof(CreateExternalDataSourceStatement)) return "CreateExternalDataSourceStatement";
        if (nodeType == typeof(CreateExternalFileFormatStatement)) return "CreateExternalFileFormatStatement";
        if (nodeType == typeof(CreateExternalFunctionStatement)) return "CreateExternalFunctionStatement";
        if (nodeType == typeof(CreateExternalLanguageStatement)) return "CreateExternalLanguageStatement";
        if (nodeType == typeof(CreateExternalLibraryStatement)) return "CreateExternalLibraryStatement";
        if (nodeType == typeof(CreateExternalModelStatement)) return "CreateExternalModelStatement";
        if (nodeType == typeof(CreateExternalResourcePoolStatement)) return "CreateExternalResourcePoolStatement";
        if (nodeType == typeof(CreateExternalStreamStatement)) return "CreateExternalStreamStatement";
        if (nodeType == typeof(CreateExternalStreamingJobStatement)) return "CreateExternalStreamingJobStatement";
        if (nodeType == typeof(CreateExternalTableStatement)) return "CreateExternalTableStatement";
        if (nodeType == typeof(CreateFederationStatement)) return "CreateFederationStatement";
        if (nodeType == typeof(CreateFullTextCatalogStatement)) return "CreateFullTextCatalogStatement";
        if (nodeType == typeof(CreateFullTextIndexStatement)) return "CreateFullTextIndexStatement";
        if (nodeType == typeof(CreateFullTextStopListStatement)) return "CreateFullTextStopListStatement";
        if (nodeType == typeof(CreateFunctionStatement)) return "CreateFunctionStatement";
        if (nodeType == typeof(CreateIndexStatement)) return "CreateIndexStatement";
        if (nodeType == typeof(CreateJsonIndexStatement)) return "CreateJsonIndexStatement";
        if (nodeType == typeof(CreateLoginStatement)) return "CreateLoginStatement";
        if (nodeType == typeof(CreateMasterKeyStatement)) return "CreateMasterKeyStatement";
        if (nodeType == typeof(CreateMessageTypeStatement)) return "CreateMessageTypeStatement";
        if (nodeType == typeof(CreateOrAlterExternalFunctionStatement)) return "CreateOrAlterExternalFunctionStatement";
        if (nodeType == typeof(CreateOrAlterFunctionStatement)) return "CreateOrAlterFunctionStatement";
        if (nodeType == typeof(CreateOrAlterProcedureStatement)) return "CreateOrAlterProcedureStatement";
        if (nodeType == typeof(CreateOrAlterTriggerStatement)) return "CreateOrAlterTriggerStatement";
        if (nodeType == typeof(CreateOrAlterViewStatement)) return "CreateOrAlterViewStatement";
        if (nodeType == typeof(CreatePartitionFunctionStatement)) return "CreatePartitionFunctionStatement";
        if (nodeType == typeof(CreatePartitionSchemeStatement)) return "CreatePartitionSchemeStatement";
        if (nodeType == typeof(CreateProcedureStatement)) return "CreateProcedureStatement";
        if (nodeType == typeof(CreateQueueStatement)) return "CreateQueueStatement";
        if (nodeType == typeof(CreateRemoteServiceBindingStatement)) return "CreateRemoteServiceBindingStatement";
        if (nodeType == typeof(CreateResourcePoolStatement)) return "CreateResourcePoolStatement";
        if (nodeType == typeof(CreateRoleStatement)) return "CreateRoleStatement";
        if (nodeType == typeof(CreateRouteStatement)) return "CreateRouteStatement";
        if (nodeType == typeof(CreateRuleStatement)) return "CreateRuleStatement";
        if (nodeType == typeof(CreateSchemaStatement)) return "CreateSchemaStatement";
        if (nodeType == typeof(CreateSearchPropertyListStatement)) return "CreateSearchPropertyListStatement";
        if (nodeType == typeof(CreateSecurityPolicyStatement)) return "CreateSecurityPolicyStatement";
        if (nodeType == typeof(CreateSelectiveXmlIndexStatement)) return "CreateSelectiveXmlIndexStatement";
        if (nodeType == typeof(CreateSemanticIndexStatement)) return "CreateSemanticIndexStatement";
        if (nodeType == typeof(CreateSequenceStatement)) return "CreateSequenceStatement";
        if (nodeType == typeof(CreateServerAuditSpecificationStatement)) return "CreateServerAuditSpecificationStatement";
        if (nodeType == typeof(CreateServerAuditStatement)) return "CreateServerAuditStatement";
        if (nodeType == typeof(CreateServerRoleStatement)) return "CreateServerRoleStatement";
        if (nodeType == typeof(CreateServiceStatement)) return "CreateServiceStatement";
        if (nodeType == typeof(CreateSpatialIndexStatement)) return "CreateSpatialIndexStatement";
        if (nodeType == typeof(CreateStatisticsStatement)) return "CreateStatisticsStatement";
        if (nodeType == typeof(CreateSymmetricKeyStatement)) return "CreateSymmetricKeyStatement";
        if (nodeType == typeof(CreateSynonymStatement)) return "CreateSynonymStatement";
        if (nodeType == typeof(CreateTableStatement)) return "CreateTableStatement";
        if (nodeType == typeof(CreateTriggerStatement)) return "CreateTriggerStatement";
        if (nodeType == typeof(CreateTypeTableStatement)) return "CreateTypeTableStatement";
        if (nodeType == typeof(CreateTypeUddtStatement)) return "CreateTypeUddtStatement";
        if (nodeType == typeof(CreateTypeUdtStatement)) return "CreateTypeUdtStatement";
        if (nodeType == typeof(CreateUserStatement)) return "CreateUserStatement";
        if (nodeType == typeof(CreateVectorIndexStatement)) return "CreateVectorIndexStatement";
        if (nodeType == typeof(CreateViewStatement)) return "CreateViewStatement";
        if (nodeType == typeof(CreateWorkloadClassifierStatement)) return "CreateWorkloadClassifierStatement";
        if (nodeType == typeof(CreateWorkloadGroupStatement)) return "CreateWorkloadGroupStatement";
        if (nodeType == typeof(CreateXmlIndexStatement)) return "CreateXmlIndexStatement";
        if (nodeType == typeof(CreateXmlSchemaCollectionStatement)) return "CreateXmlSchemaCollectionStatement";
        if (nodeType == typeof(CreationDispositionKeyOption)) return "CreationDispositionKeyOption";
        if (nodeType == typeof(CryptoMechanism)) return "CryptoMechanism";
        if (nodeType == typeof(CubeGroupingSpecification)) return "CubeGroupingSpecification";
        if (nodeType == typeof(CursorDefaultDatabaseOption)) return "CursorDefaultDatabaseOption";
        if (nodeType == typeof(CursorDefinition)) return "CursorDefinition";
        if (nodeType == typeof(CursorId)) return "CursorId";
        if (nodeType == typeof(CursorOption)) return "CursorOption";
        if (nodeType == typeof(DWCompatibilityLevelConfigurationOption)) return "DWCompatibilityLevelConfigurationOption";
        if (nodeType == typeof(DataCompressionOption)) return "DataCompressionOption";
        if (nodeType == typeof(DataModificationTableReference)) return "DataModificationTableReference";
        if (nodeType == typeof(DataRetentionTableOption)) return "DataRetentionTableOption";
        if (nodeType == typeof(DataTypeSequenceOption)) return "DataTypeSequenceOption";
        if (nodeType == typeof(DatabaseAuditAction)) return "DatabaseAuditAction";
        if (nodeType == typeof(DatabaseConfigurationClearOption)) return "DatabaseConfigurationClearOption";
        if (nodeType == typeof(DatabaseConfigurationSetOption)) return "DatabaseConfigurationSetOption";
        if (nodeType == typeof(DatabaseOption)) return "DatabaseOption";
        if (nodeType == typeof(DbccNamedLiteral)) return "DbccNamedLiteral";
        if (nodeType == typeof(DbccOption)) return "DbccOption";
        if (nodeType == typeof(DbccStatement)) return "DbccStatement";
        if (nodeType == typeof(DeallocateCursorStatement)) return "DeallocateCursorStatement";
        if (nodeType == typeof(DeclareCursorStatement)) return "DeclareCursorStatement";
        if (nodeType == typeof(DeclareTableVariableBody)) return "DeclareTableVariableBody";
        if (nodeType == typeof(DeclareTableVariableStatement)) return "DeclareTableVariableStatement";
        if (nodeType == typeof(DeclareVariableElement)) return "DeclareVariableElement";
        if (nodeType == typeof(DeclareVariableStatement)) return "DeclareVariableStatement";
        if (nodeType == typeof(DefaultConstraintDefinition)) return "DefaultConstraintDefinition";
        if (nodeType == typeof(DefaultLiteral)) return "DefaultLiteral";
        if (nodeType == typeof(DelayedDurabilityDatabaseOption)) return "DelayedDurabilityDatabaseOption";
        if (nodeType == typeof(DeleteMergeAction)) return "DeleteMergeAction";
        if (nodeType == typeof(DeleteSpecification)) return "DeleteSpecification";
        if (nodeType == typeof(DeleteStatement)) return "DeleteStatement";
        if (nodeType == typeof(DenyStatement)) return "DenyStatement";
        if (nodeType == typeof(DenyStatement80)) return "DenyStatement80";
        if (nodeType == typeof(DeviceInfo)) return "DeviceInfo";
        if (nodeType == typeof(DiskStatement)) return "DiskStatement";
        if (nodeType == typeof(DiskStatementOption)) return "DiskStatementOption";
        if (nodeType == typeof(DistinctPredicate)) return "DistinctPredicate";
        if (nodeType == typeof(DropAggregateStatement)) return "DropAggregateStatement";
        if (nodeType == typeof(DropAlterFullTextIndexAction)) return "DropAlterFullTextIndexAction";
        if (nodeType == typeof(DropApplicationRoleStatement)) return "DropApplicationRoleStatement";
        if (nodeType == typeof(DropAssemblyStatement)) return "DropAssemblyStatement";
        if (nodeType == typeof(DropAsymmetricKeyStatement)) return "DropAsymmetricKeyStatement";
        if (nodeType == typeof(DropAvailabilityGroupStatement)) return "DropAvailabilityGroupStatement";
        if (nodeType == typeof(DropBrokerPriorityStatement)) return "DropBrokerPriorityStatement";
        if (nodeType == typeof(DropCertificateStatement)) return "DropCertificateStatement";
        if (nodeType == typeof(DropClusteredConstraintMoveOption)) return "DropClusteredConstraintMoveOption";
        if (nodeType == typeof(DropClusteredConstraintStateOption)) return "DropClusteredConstraintStateOption";
        if (nodeType == typeof(DropClusteredConstraintValueOption)) return "DropClusteredConstraintValueOption";
        if (nodeType == typeof(DropClusteredConstraintWaitAtLowPriorityLockOption)) return "DropClusteredConstraintWaitAtLowPriorityLockOption";
        if (nodeType == typeof(DropColumnEncryptionKeyStatement)) return "DropColumnEncryptionKeyStatement";
        if (nodeType == typeof(DropColumnMasterKeyStatement)) return "DropColumnMasterKeyStatement";
        if (nodeType == typeof(DropContractStatement)) return "DropContractStatement";
        if (nodeType == typeof(DropCredentialStatement)) return "DropCredentialStatement";
        if (nodeType == typeof(DropCryptographicProviderStatement)) return "DropCryptographicProviderStatement";
        if (nodeType == typeof(DropDatabaseAuditSpecificationStatement)) return "DropDatabaseAuditSpecificationStatement";
        if (nodeType == typeof(DropDatabaseEncryptionKeyStatement)) return "DropDatabaseEncryptionKeyStatement";
        if (nodeType == typeof(DropDatabaseStatement)) return "DropDatabaseStatement";
        if (nodeType == typeof(DropDefaultStatement)) return "DropDefaultStatement";
        if (nodeType == typeof(DropEndpointStatement)) return "DropEndpointStatement";
        if (nodeType == typeof(DropEventNotificationStatement)) return "DropEventNotificationStatement";
        if (nodeType == typeof(DropEventSessionStatement)) return "DropEventSessionStatement";
        if (nodeType == typeof(DropExternalDataSourceStatement)) return "DropExternalDataSourceStatement";
        if (nodeType == typeof(DropExternalFileFormatStatement)) return "DropExternalFileFormatStatement";
        if (nodeType == typeof(DropExternalLanguageStatement)) return "DropExternalLanguageStatement";
        if (nodeType == typeof(DropExternalLibraryStatement)) return "DropExternalLibraryStatement";
        if (nodeType == typeof(DropExternalModelStatement)) return "DropExternalModelStatement";
        if (nodeType == typeof(DropExternalResourcePoolStatement)) return "DropExternalResourcePoolStatement";
        if (nodeType == typeof(DropExternalStreamStatement)) return "DropExternalStreamStatement";
        if (nodeType == typeof(DropExternalStreamingJobStatement)) return "DropExternalStreamingJobStatement";
        if (nodeType == typeof(DropExternalTableStatement)) return "DropExternalTableStatement";
        if (nodeType == typeof(DropFederationStatement)) return "DropFederationStatement";
        if (nodeType == typeof(DropFullTextCatalogStatement)) return "DropFullTextCatalogStatement";
        if (nodeType == typeof(DropFullTextIndexStatement)) return "DropFullTextIndexStatement";
        if (nodeType == typeof(DropFullTextStopListStatement)) return "DropFullTextStopListStatement";
        if (nodeType == typeof(DropFunctionStatement)) return "DropFunctionStatement";
        if (nodeType == typeof(DropIndexClause)) return "DropIndexClause";
        if (nodeType == typeof(DropIndexStatement)) return "DropIndexStatement";
        if (nodeType == typeof(DropLoginStatement)) return "DropLoginStatement";
        if (nodeType == typeof(DropMasterKeyStatement)) return "DropMasterKeyStatement";
        if (nodeType == typeof(DropMemberAlterRoleAction)) return "DropMemberAlterRoleAction";
        if (nodeType == typeof(DropMessageTypeStatement)) return "DropMessageTypeStatement";
        if (nodeType == typeof(DropPartitionFunctionStatement)) return "DropPartitionFunctionStatement";
        if (nodeType == typeof(DropPartitionSchemeStatement)) return "DropPartitionSchemeStatement";
        if (nodeType == typeof(DropProcedureStatement)) return "DropProcedureStatement";
        if (nodeType == typeof(DropQueueStatement)) return "DropQueueStatement";
        if (nodeType == typeof(DropRemoteServiceBindingStatement)) return "DropRemoteServiceBindingStatement";
        if (nodeType == typeof(DropResourcePoolStatement)) return "DropResourcePoolStatement";
        if (nodeType == typeof(DropRoleStatement)) return "DropRoleStatement";
        if (nodeType == typeof(DropRouteStatement)) return "DropRouteStatement";
        if (nodeType == typeof(DropRuleStatement)) return "DropRuleStatement";
        if (nodeType == typeof(DropSchemaStatement)) return "DropSchemaStatement";
        if (nodeType == typeof(DropSearchPropertyListAction)) return "DropSearchPropertyListAction";
        if (nodeType == typeof(DropSearchPropertyListStatement)) return "DropSearchPropertyListStatement";
        if (nodeType == typeof(DropSecurityPolicyStatement)) return "DropSecurityPolicyStatement";
        if (nodeType == typeof(DropSensitivityClassificationStatement)) return "DropSensitivityClassificationStatement";
        if (nodeType == typeof(DropSequenceStatement)) return "DropSequenceStatement";
        if (nodeType == typeof(DropServerAuditSpecificationStatement)) return "DropServerAuditSpecificationStatement";
        if (nodeType == typeof(DropServerAuditStatement)) return "DropServerAuditStatement";
        if (nodeType == typeof(DropServerRoleStatement)) return "DropServerRoleStatement";
        if (nodeType == typeof(DropServiceStatement)) return "DropServiceStatement";
        if (nodeType == typeof(DropSignatureStatement)) return "DropSignatureStatement";
        if (nodeType == typeof(DropStatisticsStatement)) return "DropStatisticsStatement";
        if (nodeType == typeof(DropSymmetricKeyStatement)) return "DropSymmetricKeyStatement";
        if (nodeType == typeof(DropSynonymStatement)) return "DropSynonymStatement";
        if (nodeType == typeof(DropTableStatement)) return "DropTableStatement";
        if (nodeType == typeof(DropTriggerStatement)) return "DropTriggerStatement";
        if (nodeType == typeof(DropTypeStatement)) return "DropTypeStatement";
        if (nodeType == typeof(DropUserStatement)) return "DropUserStatement";
        if (nodeType == typeof(DropViewStatement)) return "DropViewStatement";
        if (nodeType == typeof(DropWorkloadClassifierStatement)) return "DropWorkloadClassifierStatement";
        if (nodeType == typeof(DropWorkloadGroupStatement)) return "DropWorkloadGroupStatement";
        if (nodeType == typeof(DropXmlSchemaCollectionStatement)) return "DropXmlSchemaCollectionStatement";
        if (nodeType == typeof(DurabilityTableOption)) return "DurabilityTableOption";
        if (nodeType == typeof(ElasticPoolSpecification)) return "ElasticPoolSpecification";
        if (nodeType == typeof(EnableDisableTriggerStatement)) return "EnableDisableTriggerStatement";
        if (nodeType == typeof(EnabledDisabledPayloadOption)) return "EnabledDisabledPayloadOption";
        if (nodeType == typeof(EncryptedValueParameter)) return "EncryptedValueParameter";
        if (nodeType == typeof(EncryptionPayloadOption)) return "EncryptionPayloadOption";
        if (nodeType == typeof(EndConversationStatement)) return "EndConversationStatement";
        if (nodeType == typeof(EndpointAffinity)) return "EndpointAffinity";
        if (nodeType == typeof(EventDeclaration)) return "EventDeclaration";
        if (nodeType == typeof(EventDeclarationCompareFunctionParameter)) return "EventDeclarationCompareFunctionParameter";
        if (nodeType == typeof(EventDeclarationSetParameter)) return "EventDeclarationSetParameter";
        if (nodeType == typeof(EventGroupContainer)) return "EventGroupContainer";
        if (nodeType == typeof(EventNotificationObjectScope)) return "EventNotificationObjectScope";
        if (nodeType == typeof(EventRetentionSessionOption)) return "EventRetentionSessionOption";
        if (nodeType == typeof(EventSessionObjectName)) return "EventSessionObjectName";
        if (nodeType == typeof(EventSessionStatement)) return "EventSessionStatement";
        if (nodeType == typeof(EventTypeContainer)) return "EventTypeContainer";
        if (nodeType == typeof(ExecutableProcedureReference)) return "ExecutableProcedureReference";
        if (nodeType == typeof(ExecutableStringList)) return "ExecutableStringList";
        if (nodeType == typeof(ExecuteAsClause)) return "ExecuteAsClause";
        if (nodeType == typeof(ExecuteAsFunctionOption)) return "ExecuteAsFunctionOption";
        if (nodeType == typeof(ExecuteAsProcedureOption)) return "ExecuteAsProcedureOption";
        if (nodeType == typeof(ExecuteAsStatement)) return "ExecuteAsStatement";
        if (nodeType == typeof(ExecuteAsTriggerOption)) return "ExecuteAsTriggerOption";
        if (nodeType == typeof(ExecuteContext)) return "ExecuteContext";
        if (nodeType == typeof(ExecuteInsertSource)) return "ExecuteInsertSource";
        if (nodeType == typeof(ExecuteOption)) return "ExecuteOption";
        if (nodeType == typeof(ExecuteParameter)) return "ExecuteParameter";
        if (nodeType == typeof(ExecuteSpecification)) return "ExecuteSpecification";
        if (nodeType == typeof(ExecuteStatement)) return "ExecuteStatement";
        if (nodeType == typeof(ExistsPredicate)) return "ExistsPredicate";
        if (nodeType == typeof(ExpressionCallTarget)) return "ExpressionCallTarget";
        if (nodeType == typeof(ExpressionGroupingSpecification)) return "ExpressionGroupingSpecification";
        if (nodeType == typeof(ExpressionWithSortOrder)) return "ExpressionWithSortOrder";
        if (nodeType == typeof(ExternalCreateLoginSource)) return "ExternalCreateLoginSource";
        if (nodeType == typeof(ExternalDataSourceLiteralOrIdentifierOption)) return "ExternalDataSourceLiteralOrIdentifierOption";
        if (nodeType == typeof(ExternalFileFormatContainerOption)) return "ExternalFileFormatContainerOption";
        if (nodeType == typeof(ExternalFileFormatLiteralOption)) return "ExternalFileFormatLiteralOption";
        if (nodeType == typeof(ExternalFileFormatUseDefaultTypeOption)) return "ExternalFileFormatUseDefaultTypeOption";
        if (nodeType == typeof(ExternalLanguageFileOption)) return "ExternalLanguageFileOption";
        if (nodeType == typeof(ExternalLibraryFileOption)) return "ExternalLibraryFileOption";
        if (nodeType == typeof(ExternalResourcePoolAffinitySpecification)) return "ExternalResourcePoolAffinitySpecification";
        if (nodeType == typeof(ExternalResourcePoolParameter)) return "ExternalResourcePoolParameter";
        if (nodeType == typeof(ExternalResourcePoolStatement)) return "ExternalResourcePoolStatement";
        if (nodeType == typeof(ExternalStreamLiteralOrIdentifierOption)) return "ExternalStreamLiteralOrIdentifierOption";
        if (nodeType == typeof(ExternalTableColumnDefinition)) return "ExternalTableColumnDefinition";
        if (nodeType == typeof(ExternalTableDistributionOption)) return "ExternalTableDistributionOption";
        if (nodeType == typeof(ExternalTableLiteralOrIdentifierOption)) return "ExternalTableLiteralOrIdentifierOption";
        if (nodeType == typeof(ExternalTableRejectTypeOption)) return "ExternalTableRejectTypeOption";
        if (nodeType == typeof(ExternalTableReplicatedDistributionPolicy)) return "ExternalTableReplicatedDistributionPolicy";
        if (nodeType == typeof(ExternalTableRoundRobinDistributionPolicy)) return "ExternalTableRoundRobinDistributionPolicy";
        if (nodeType == typeof(ExternalTableShardedDistributionPolicy)) return "ExternalTableShardedDistributionPolicy";
        if (nodeType == typeof(ExtractFromExpression)) return "ExtractFromExpression";
        if (nodeType == typeof(FailoverModeReplicaOption)) return "FailoverModeReplicaOption";
        if (nodeType == typeof(FederationScheme)) return "FederationScheme";
        if (nodeType == typeof(FetchCursorStatement)) return "FetchCursorStatement";
        if (nodeType == typeof(FetchType)) return "FetchType";
        if (nodeType == typeof(FileDeclaration)) return "FileDeclaration";
        if (nodeType == typeof(FileDeclarationOption)) return "FileDeclarationOption";
        if (nodeType == typeof(FileEncryptionSource)) return "FileEncryptionSource";
        if (nodeType == typeof(FileGroupDefinition)) return "FileGroupDefinition";
        if (nodeType == typeof(FileGroupOrPartitionScheme)) return "FileGroupOrPartitionScheme";
        if (nodeType == typeof(FileGrowthFileDeclarationOption)) return "FileGrowthFileDeclarationOption";
        if (nodeType == typeof(FileNameFileDeclarationOption)) return "FileNameFileDeclarationOption";
        if (nodeType == typeof(FileStreamDatabaseOption)) return "FileStreamDatabaseOption";
        if (nodeType == typeof(FileStreamOnDropIndexOption)) return "FileStreamOnDropIndexOption";
        if (nodeType == typeof(FileStreamOnTableOption)) return "FileStreamOnTableOption";
        if (nodeType == typeof(FileStreamRestoreOption)) return "FileStreamRestoreOption";
        if (nodeType == typeof(FileTableCollateFileNameTableOption)) return "FileTableCollateFileNameTableOption";
        if (nodeType == typeof(FileTableConstraintNameTableOption)) return "FileTableConstraintNameTableOption";
        if (nodeType == typeof(FileTableDirectoryTableOption)) return "FileTableDirectoryTableOption";
        if (nodeType == typeof(ForceSeekTableHint)) return "ForceSeekTableHint";
        if (nodeType == typeof(ForeignKeyConstraintDefinition)) return "ForeignKeyConstraintDefinition";
        if (nodeType == typeof(FromClause)) return "FromClause";
        if (nodeType == typeof(FullTextCatalogAndFileGroup)) return "FullTextCatalogAndFileGroup";
        if (nodeType == typeof(FullTextIndexColumn)) return "FullTextIndexColumn";
        if (nodeType == typeof(FullTextPredicate)) return "FullTextPredicate";
        if (nodeType == typeof(FullTextStopListAction)) return "FullTextStopListAction";
        if (nodeType == typeof(FullTextTableReference)) return "FullTextTableReference";
        if (nodeType == typeof(FunctionCall)) return "FunctionCall";
        if (nodeType == typeof(FunctionCallSetClause)) return "FunctionCallSetClause";
        if (nodeType == typeof(FunctionOption)) return "FunctionOption";
        if (nodeType == typeof(GeneralSetCommand)) return "GeneralSetCommand";
        if (nodeType == typeof(GenericConfigurationOption)) return "GenericConfigurationOption";
        if (nodeType == typeof(GetConversationGroupStatement)) return "GetConversationGroupStatement";
        if (nodeType == typeof(GlobalFunctionTableReference)) return "GlobalFunctionTableReference";
        if (nodeType == typeof(GlobalVariableExpression)) return "GlobalVariableExpression";
        if (nodeType == typeof(GoToStatement)) return "GoToStatement";
        if (nodeType == typeof(GrandTotalGroupingSpecification)) return "GrandTotalGroupingSpecification";
        if (nodeType == typeof(GrantStatement)) return "GrantStatement";
        if (nodeType == typeof(GrantStatement80)) return "GrantStatement80";
        if (nodeType == typeof(GraphConnectionBetweenNodes)) return "GraphConnectionBetweenNodes";
        if (nodeType == typeof(GraphConnectionConstraintDefinition)) return "GraphConnectionConstraintDefinition";
        if (nodeType == typeof(GraphMatchCompositeExpression)) return "GraphMatchCompositeExpression";
        if (nodeType == typeof(GraphMatchExpression)) return "GraphMatchExpression";
        if (nodeType == typeof(GraphMatchLastNodePredicate)) return "GraphMatchLastNodePredicate";
        if (nodeType == typeof(GraphMatchNodeExpression)) return "GraphMatchNodeExpression";
        if (nodeType == typeof(GraphMatchPredicate)) return "GraphMatchPredicate";
        if (nodeType == typeof(GraphMatchRecursivePredicate)) return "GraphMatchRecursivePredicate";
        if (nodeType == typeof(GraphRecursiveMatchQuantifier)) return "GraphRecursiveMatchQuantifier";
        if (nodeType == typeof(GridParameter)) return "GridParameter";
        if (nodeType == typeof(GridsSpatialIndexOption)) return "GridsSpatialIndexOption";
        if (nodeType == typeof(GroupByClause)) return "GroupByClause";
        if (nodeType == typeof(GroupingSetsGroupingSpecification)) return "GroupingSetsGroupingSpecification";
        if (nodeType == typeof(HadrAvailabilityGroupDatabaseOption)) return "HadrAvailabilityGroupDatabaseOption";
        if (nodeType == typeof(HadrDatabaseOption)) return "HadrDatabaseOption";
        if (nodeType == typeof(HavingClause)) return "HavingClause";
        if (nodeType == typeof(IIfCall)) return "IIfCall";
        if (nodeType == typeof(IPv4)) return "IPv4";
        if (nodeType == typeof(Identifier)) return "Identifier";
        if (nodeType == typeof(IdentifierAtomicBlockOption)) return "IdentifierAtomicBlockOption";
        if (nodeType == typeof(IdentifierDatabaseOption)) return "IdentifierDatabaseOption";
        if (nodeType == typeof(IdentifierLiteral)) return "IdentifierLiteral";
        if (nodeType == typeof(IdentifierOrScalarExpression)) return "IdentifierOrScalarExpression";
        if (nodeType == typeof(IdentifierOrValueExpression)) return "IdentifierOrValueExpression";
        if (nodeType == typeof(IdentifierPrincipalOption)) return "IdentifierPrincipalOption";
        if (nodeType == typeof(IdentifierSnippet)) return "IdentifierSnippet";
        if (nodeType == typeof(IdentityFunctionCall)) return "IdentityFunctionCall";
        if (nodeType == typeof(IdentityOptions)) return "IdentityOptions";
        if (nodeType == typeof(IdentityValueKeyOption)) return "IdentityValueKeyOption";
        if (nodeType == typeof(IfStatement)) return "IfStatement";
        if (nodeType == typeof(IgnoreDupKeyIndexOption)) return "IgnoreDupKeyIndexOption";
        if (nodeType == typeof(InPredicate)) return "InPredicate";
        if (nodeType == typeof(IndexDefinition)) return "IndexDefinition";
        if (nodeType == typeof(IndexExpressionOption)) return "IndexExpressionOption";
        if (nodeType == typeof(IndexStateOption)) return "IndexStateOption";
        if (nodeType == typeof(IndexTableHint)) return "IndexTableHint";
        if (nodeType == typeof(IndexType)) return "IndexType";
        if (nodeType == typeof(InlineDerivedTable)) return "InlineDerivedTable";
        if (nodeType == typeof(InlineFunctionOption)) return "InlineFunctionOption";
        if (nodeType == typeof(InlineResultSetDefinition)) return "InlineResultSetDefinition";
        if (nodeType == typeof(InsertBulkColumnDefinition)) return "InsertBulkColumnDefinition";
        if (nodeType == typeof(InsertBulkStatement)) return "InsertBulkStatement";
        if (nodeType == typeof(InsertMergeAction)) return "InsertMergeAction";
        if (nodeType == typeof(InsertSpecification)) return "InsertSpecification";
        if (nodeType == typeof(InsertStatement)) return "InsertStatement";
        if (nodeType == typeof(IntegerLiteral)) return "IntegerLiteral";
        if (nodeType == typeof(InternalOpenRowset)) return "InternalOpenRowset";
        if (nodeType == typeof(InvokeExternalApiFunctionCall)) return "InvokeExternalApiFunctionCall";
        if (nodeType == typeof(JoinParenthesisTableReference)) return "JoinParenthesisTableReference";
        if (nodeType == typeof(JsonForClause)) return "JsonForClause";
        if (nodeType == typeof(JsonForClauseOption)) return "JsonForClauseOption";
        if (nodeType == typeof(JsonKeyValue)) return "JsonKeyValue";
        if (nodeType == typeof(KeySourceKeyOption)) return "KeySourceKeyOption";
        if (nodeType == typeof(KillQueryNotificationSubscriptionStatement)) return "KillQueryNotificationSubscriptionStatement";
        if (nodeType == typeof(KillStatement)) return "KillStatement";
        if (nodeType == typeof(KillStatsJobStatement)) return "KillStatsJobStatement";
        if (nodeType == typeof(LabelStatement)) return "LabelStatement";
        if (nodeType == typeof(LedgerOption)) return "LedgerOption";
        if (nodeType == typeof(LedgerTableOption)) return "LedgerTableOption";
        if (nodeType == typeof(LedgerViewOption)) return "LedgerViewOption";
        if (nodeType == typeof(LeftFunctionCall)) return "LeftFunctionCall";
        if (nodeType == typeof(LikePredicate)) return "LikePredicate";
        if (nodeType == typeof(LineNoStatement)) return "LineNoStatement";
        if (nodeType == typeof(ListTypeCopyOption)) return "ListTypeCopyOption";
        if (nodeType == typeof(ListenerIPEndpointProtocolOption)) return "ListenerIPEndpointProtocolOption";
        if (nodeType == typeof(LiteralAtomicBlockOption)) return "LiteralAtomicBlockOption";
        if (nodeType == typeof(LiteralAuditTargetOption)) return "LiteralAuditTargetOption";
        if (nodeType == typeof(LiteralAvailabilityGroupOption)) return "LiteralAvailabilityGroupOption";
        if (nodeType == typeof(LiteralBulkInsertOption)) return "LiteralBulkInsertOption";
        if (nodeType == typeof(LiteralDatabaseOption)) return "LiteralDatabaseOption";
        if (nodeType == typeof(LiteralEndpointProtocolOption)) return "LiteralEndpointProtocolOption";
        if (nodeType == typeof(LiteralOpenRowsetCosmosOption)) return "LiteralOpenRowsetCosmosOption";
        if (nodeType == typeof(LiteralOptimizerHint)) return "LiteralOptimizerHint";
        if (nodeType == typeof(LiteralOptionValue)) return "LiteralOptionValue";
        if (nodeType == typeof(LiteralPayloadOption)) return "LiteralPayloadOption";
        if (nodeType == typeof(LiteralPrincipalOption)) return "LiteralPrincipalOption";
        if (nodeType == typeof(LiteralRange)) return "LiteralRange";
        if (nodeType == typeof(LiteralReplicaOption)) return "LiteralReplicaOption";
        if (nodeType == typeof(LiteralSessionOption)) return "LiteralSessionOption";
        if (nodeType == typeof(LiteralStatisticsOption)) return "LiteralStatisticsOption";
        if (nodeType == typeof(LiteralTableHint)) return "LiteralTableHint";
        if (nodeType == typeof(LocationOption)) return "LocationOption";
        if (nodeType == typeof(LockEscalationTableOption)) return "LockEscalationTableOption";
        if (nodeType == typeof(LoginTypePayloadOption)) return "LoginTypePayloadOption";
        if (nodeType == typeof(LowPriorityLockWaitAbortAfterWaitOption)) return "LowPriorityLockWaitAbortAfterWaitOption";
        if (nodeType == typeof(LowPriorityLockWaitMaxDurationOption)) return "LowPriorityLockWaitMaxDurationOption";
        if (nodeType == typeof(LowPriorityLockWaitTableSwitchOption)) return "LowPriorityLockWaitTableSwitchOption";
        if (nodeType == typeof(MaxDispatchLatencySessionOption)) return "MaxDispatchLatencySessionOption";
        if (nodeType == typeof(MaxDopConfigurationOption)) return "MaxDopConfigurationOption";
        if (nodeType == typeof(MaxDurationOption)) return "MaxDurationOption";
        if (nodeType == typeof(MaxLiteral)) return "MaxLiteral";
        if (nodeType == typeof(MaxRolloverFilesAuditTargetOption)) return "MaxRolloverFilesAuditTargetOption";
        if (nodeType == typeof(MaxSizeAuditTargetOption)) return "MaxSizeAuditTargetOption";
        if (nodeType == typeof(MaxSizeDatabaseOption)) return "MaxSizeDatabaseOption";
        if (nodeType == typeof(MaxSizeFileDeclarationOption)) return "MaxSizeFileDeclarationOption";
        if (nodeType == typeof(MemoryOptimizedTableOption)) return "MemoryOptimizedTableOption";
        if (nodeType == typeof(MemoryPartitionSessionOption)) return "MemoryPartitionSessionOption";
        if (nodeType == typeof(MergeActionClause)) return "MergeActionClause";
        if (nodeType == typeof(MergeSpecification)) return "MergeSpecification";
        if (nodeType == typeof(MergeStatement)) return "MergeStatement";
        if (nodeType == typeof(MethodSpecifier)) return "MethodSpecifier";
        if (nodeType == typeof(MirrorToClause)) return "MirrorToClause";
        if (nodeType == typeof(MoneyLiteral)) return "MoneyLiteral";
        if (nodeType == typeof(MoveConversationStatement)) return "MoveConversationStatement";
        if (nodeType == typeof(MoveRestoreOption)) return "MoveRestoreOption";
        if (nodeType == typeof(MoveToDropIndexOption)) return "MoveToDropIndexOption";
        if (nodeType == typeof(MultiPartIdentifier)) return "MultiPartIdentifier";
        if (nodeType == typeof(MultiPartIdentifierCallTarget)) return "MultiPartIdentifierCallTarget";
        if (nodeType == typeof(NameFileDeclarationOption)) return "NameFileDeclarationOption";
        if (nodeType == typeof(NamedTableReference)) return "NamedTableReference";
        if (nodeType == typeof(NextValueForExpression)) return "NextValueForExpression";
        if (nodeType == typeof(NullIfExpression)) return "NullIfExpression";
        if (nodeType == typeof(NullLiteral)) return "NullLiteral";
        if (nodeType == typeof(NullableConstraintDefinition)) return "NullableConstraintDefinition";
        if (nodeType == typeof(NumericLiteral)) return "NumericLiteral";
        if (nodeType == typeof(OdbcConvertSpecification)) return "OdbcConvertSpecification";
        if (nodeType == typeof(OdbcFunctionCall)) return "OdbcFunctionCall";
        if (nodeType == typeof(OdbcLiteral)) return "OdbcLiteral";
        if (nodeType == typeof(OdbcQualifiedJoinTableReference)) return "OdbcQualifiedJoinTableReference";
        if (nodeType == typeof(OffsetClause)) return "OffsetClause";
        if (nodeType == typeof(OnFailureAuditOption)) return "OnFailureAuditOption";
        if (nodeType == typeof(OnOffAssemblyOption)) return "OnOffAssemblyOption";
        if (nodeType == typeof(OnOffAtomicBlockOption)) return "OnOffAtomicBlockOption";
        if (nodeType == typeof(OnOffAuditTargetOption)) return "OnOffAuditTargetOption";
        if (nodeType == typeof(OnOffDatabaseOption)) return "OnOffDatabaseOption";
        if (nodeType == typeof(OnOffDialogOption)) return "OnOffDialogOption";
        if (nodeType == typeof(OnOffFullTextCatalogOption)) return "OnOffFullTextCatalogOption";
        if (nodeType == typeof(OnOffOptionValue)) return "OnOffOptionValue";
        if (nodeType == typeof(OnOffPrimaryConfigurationOption)) return "OnOffPrimaryConfigurationOption";
        if (nodeType == typeof(OnOffPrincipalOption)) return "OnOffPrincipalOption";
        if (nodeType == typeof(OnOffRemoteServiceBindingOption)) return "OnOffRemoteServiceBindingOption";
        if (nodeType == typeof(OnOffSessionOption)) return "OnOffSessionOption";
        if (nodeType == typeof(OnOffStatisticsOption)) return "OnOffStatisticsOption";
        if (nodeType == typeof(OnlineIndexLowPriorityLockWaitOption)) return "OnlineIndexLowPriorityLockWaitOption";
        if (nodeType == typeof(OnlineIndexOption)) return "OnlineIndexOption";
        if (nodeType == typeof(OpenCursorStatement)) return "OpenCursorStatement";
        if (nodeType == typeof(OpenJsonTableReference)) return "OpenJsonTableReference";
        if (nodeType == typeof(OpenMasterKeyStatement)) return "OpenMasterKeyStatement";
        if (nodeType == typeof(OpenQueryTableReference)) return "OpenQueryTableReference";
        if (nodeType == typeof(OpenRowsetColumnDefinition)) return "OpenRowsetColumnDefinition";
        if (nodeType == typeof(OpenRowsetCosmos)) return "OpenRowsetCosmos";
        if (nodeType == typeof(OpenRowsetCosmosOption)) return "OpenRowsetCosmosOption";
        if (nodeType == typeof(OpenRowsetTableReference)) return "OpenRowsetTableReference";
        if (nodeType == typeof(OpenSymmetricKeyStatement)) return "OpenSymmetricKeyStatement";
        if (nodeType == typeof(OpenXmlTableReference)) return "OpenXmlTableReference";
        if (nodeType == typeof(OperatorAuditOption)) return "OperatorAuditOption";
        if (nodeType == typeof(OptimizeForOptimizerHint)) return "OptimizeForOptimizerHint";
        if (nodeType == typeof(OptimizedLockingDatabaseOption)) return "OptimizedLockingDatabaseOption";
        if (nodeType == typeof(OptimizerHint)) return "OptimizerHint";
        if (nodeType == typeof(OrderBulkInsertOption)) return "OrderBulkInsertOption";
        if (nodeType == typeof(OrderByClause)) return "OrderByClause";
        if (nodeType == typeof(OrderIndexOption)) return "OrderIndexOption";
        if (nodeType == typeof(OutputClause)) return "OutputClause";
        if (nodeType == typeof(OutputIntoClause)) return "OutputIntoClause";
        if (nodeType == typeof(OverClause)) return "OverClause";
        if (nodeType == typeof(PageVerifyDatabaseOption)) return "PageVerifyDatabaseOption";
        if (nodeType == typeof(ParameterizationDatabaseOption)) return "ParameterizationDatabaseOption";
        if (nodeType == typeof(ParameterlessCall)) return "ParameterlessCall";
        if (nodeType == typeof(ParenthesisExpression)) return "ParenthesisExpression";
        if (nodeType == typeof(ParseCall)) return "ParseCall";
        if (nodeType == typeof(PartitionFunctionCall)) return "PartitionFunctionCall";
        if (nodeType == typeof(PartitionParameterType)) return "PartitionParameterType";
        if (nodeType == typeof(PartitionSpecifier)) return "PartitionSpecifier";
        if (nodeType == typeof(PartnerDatabaseOption)) return "PartnerDatabaseOption";
        if (nodeType == typeof(PasswordAlterPrincipalOption)) return "PasswordAlterPrincipalOption";
        if (nodeType == typeof(PasswordCreateLoginSource)) return "PasswordCreateLoginSource";
        if (nodeType == typeof(Permission)) return "Permission";
        if (nodeType == typeof(PermissionSetAssemblyOption)) return "PermissionSetAssemblyOption";
        if (nodeType == typeof(PivotedTableReference)) return "PivotedTableReference";
        if (nodeType == typeof(PortsEndpointProtocolOption)) return "PortsEndpointProtocolOption";
        if (nodeType == typeof(PredicateSetStatement)) return "PredicateSetStatement";
        if (nodeType == typeof(PredictTableReference)) return "PredictTableReference";
        if (nodeType == typeof(PrimaryRoleReplicaOption)) return "PrimaryRoleReplicaOption";
        if (nodeType == typeof(PrincipalOption)) return "PrincipalOption";
        if (nodeType == typeof(PrintStatement)) return "PrintStatement";
        if (nodeType == typeof(Privilege80)) return "Privilege80";
        if (nodeType == typeof(PrivilegeSecurityElement80)) return "PrivilegeSecurityElement80";
        if (nodeType == typeof(ProcedureOption)) return "ProcedureOption";
        if (nodeType == typeof(ProcedureParameter)) return "ProcedureParameter";
        if (nodeType == typeof(ProcedureReference)) return "ProcedureReference";
        if (nodeType == typeof(ProcedureReferenceName)) return "ProcedureReferenceName";
        if (nodeType == typeof(ProcessAffinityRange)) return "ProcessAffinityRange";
        if (nodeType == typeof(ProviderEncryptionSource)) return "ProviderEncryptionSource";
        if (nodeType == typeof(ProviderKeyNameKeyOption)) return "ProviderKeyNameKeyOption";
        if (nodeType == typeof(QualifiedJoin)) return "QualifiedJoin";
        if (nodeType == typeof(QueryDerivedTable)) return "QueryDerivedTable";
        if (nodeType == typeof(QueryParenthesisExpression)) return "QueryParenthesisExpression";
        if (nodeType == typeof(QuerySpecification)) return "QuerySpecification";
        if (nodeType == typeof(QueryStoreCapturePolicyOption)) return "QueryStoreCapturePolicyOption";
        if (nodeType == typeof(QueryStoreDataFlushIntervalOption)) return "QueryStoreDataFlushIntervalOption";
        if (nodeType == typeof(QueryStoreDatabaseOption)) return "QueryStoreDatabaseOption";
        if (nodeType == typeof(QueryStoreDesiredStateOption)) return "QueryStoreDesiredStateOption";
        if (nodeType == typeof(QueryStoreIntervalLengthOption)) return "QueryStoreIntervalLengthOption";
        if (nodeType == typeof(QueryStoreMaxPlansPerQueryOption)) return "QueryStoreMaxPlansPerQueryOption";
        if (nodeType == typeof(QueryStoreMaxStorageSizeOption)) return "QueryStoreMaxStorageSizeOption";
        if (nodeType == typeof(QueryStoreSizeCleanupPolicyOption)) return "QueryStoreSizeCleanupPolicyOption";
        if (nodeType == typeof(QueryStoreTimeCleanupPolicyOption)) return "QueryStoreTimeCleanupPolicyOption";
        if (nodeType == typeof(QueryStoreWaitStatsCaptureOption)) return "QueryStoreWaitStatsCaptureOption";
        if (nodeType == typeof(QueueDelayAuditOption)) return "QueueDelayAuditOption";
        if (nodeType == typeof(QueueExecuteAsOption)) return "QueueExecuteAsOption";
        if (nodeType == typeof(QueueOption)) return "QueueOption";
        if (nodeType == typeof(QueueProcedureOption)) return "QueueProcedureOption";
        if (nodeType == typeof(QueueStateOption)) return "QueueStateOption";
        if (nodeType == typeof(QueueValueOption)) return "QueueValueOption";
        if (nodeType == typeof(RaiseErrorLegacyStatement)) return "RaiseErrorLegacyStatement";
        if (nodeType == typeof(RaiseErrorStatement)) return "RaiseErrorStatement";
        if (nodeType == typeof(ReadOnlyForClause)) return "ReadOnlyForClause";
        if (nodeType == typeof(ReadTextStatement)) return "ReadTextStatement";
        if (nodeType == typeof(RealLiteral)) return "RealLiteral";
        if (nodeType == typeof(ReceiveStatement)) return "ReceiveStatement";
        if (nodeType == typeof(ReconfigureStatement)) return "ReconfigureStatement";
        if (nodeType == typeof(RecoveryDatabaseOption)) return "RecoveryDatabaseOption";
        if (nodeType == typeof(RegexpLikePredicate)) return "RegexpLikePredicate";
        if (nodeType == typeof(RemoteDataArchiveAlterTableOption)) return "RemoteDataArchiveAlterTableOption";
        if (nodeType == typeof(RemoteDataArchiveDatabaseOption)) return "RemoteDataArchiveDatabaseOption";
        if (nodeType == typeof(RemoteDataArchiveDbCredentialSetting)) return "RemoteDataArchiveDbCredentialSetting";
        if (nodeType == typeof(RemoteDataArchiveDbFederatedServiceAccountSetting)) return "RemoteDataArchiveDbFederatedServiceAccountSetting";
        if (nodeType == typeof(RemoteDataArchiveDbServerSetting)) return "RemoteDataArchiveDbServerSetting";
        if (nodeType == typeof(RemoteDataArchiveTableOption)) return "RemoteDataArchiveTableOption";
        if (nodeType == typeof(RenameAlterRoleAction)) return "RenameAlterRoleAction";
        if (nodeType == typeof(RenameEntityStatement)) return "RenameEntityStatement";
        if (nodeType == typeof(ResampleStatisticsOption)) return "ResampleStatisticsOption";
        if (nodeType == typeof(ResourcePoolAffinitySpecification)) return "ResourcePoolAffinitySpecification";
        if (nodeType == typeof(ResourcePoolParameter)) return "ResourcePoolParameter";
        if (nodeType == typeof(ResourcePoolStatement)) return "ResourcePoolStatement";
        if (nodeType == typeof(RestoreMasterKeyStatement)) return "RestoreMasterKeyStatement";
        if (nodeType == typeof(RestoreOption)) return "RestoreOption";
        if (nodeType == typeof(RestoreServiceMasterKeyStatement)) return "RestoreServiceMasterKeyStatement";
        if (nodeType == typeof(RestoreStatement)) return "RestoreStatement";
        if (nodeType == typeof(ResultColumnDefinition)) return "ResultColumnDefinition";
        if (nodeType == typeof(ResultSetDefinition)) return "ResultSetDefinition";
        if (nodeType == typeof(ResultSetsExecuteOption)) return "ResultSetsExecuteOption";
        if (nodeType == typeof(RetentionDaysAuditTargetOption)) return "RetentionDaysAuditTargetOption";
        if (nodeType == typeof(RetentionPeriodDefinition)) return "RetentionPeriodDefinition";
        if (nodeType == typeof(ReturnStatement)) return "ReturnStatement";
        if (nodeType == typeof(RevertStatement)) return "RevertStatement";
        if (nodeType == typeof(RevokeStatement)) return "RevokeStatement";
        if (nodeType == typeof(RevokeStatement80)) return "RevokeStatement80";
        if (nodeType == typeof(RightFunctionCall)) return "RightFunctionCall";
        if (nodeType == typeof(RolePayloadOption)) return "RolePayloadOption";
        if (nodeType == typeof(RollbackTransactionStatement)) return "RollbackTransactionStatement";
        if (nodeType == typeof(RollupGroupingSpecification)) return "RollupGroupingSpecification";
        if (nodeType == typeof(RouteOption)) return "RouteOption";
        if (nodeType == typeof(RowValue)) return "RowValue";
        if (nodeType == typeof(SaveTransactionStatement)) return "SaveTransactionStatement";
        if (nodeType == typeof(ScalarExpressionDialogOption)) return "ScalarExpressionDialogOption";
        if (nodeType == typeof(ScalarExpressionRestoreOption)) return "ScalarExpressionRestoreOption";
        if (nodeType == typeof(ScalarExpressionSequenceOption)) return "ScalarExpressionSequenceOption";
        if (nodeType == typeof(ScalarExpressionSnippet)) return "ScalarExpressionSnippet";
        if (nodeType == typeof(ScalarFunctionReturnType)) return "ScalarFunctionReturnType";
        if (nodeType == typeof(ScalarSubquery)) return "ScalarSubquery";
        if (nodeType == typeof(SchemaDeclarationItem)) return "SchemaDeclarationItem";
        if (nodeType == typeof(SchemaDeclarationItemOpenjson)) return "SchemaDeclarationItemOpenjson";
        if (nodeType == typeof(SchemaObjectFunctionTableReference)) return "SchemaObjectFunctionTableReference";
        if (nodeType == typeof(SchemaObjectName)) return "SchemaObjectName";
        if (nodeType == typeof(SchemaObjectNameOrValueExpression)) return "SchemaObjectNameOrValueExpression";
        if (nodeType == typeof(SchemaObjectNameSnippet)) return "SchemaObjectNameSnippet";
        if (nodeType == typeof(SchemaObjectResultSetDefinition)) return "SchemaObjectResultSetDefinition";
        if (nodeType == typeof(SchemaPayloadOption)) return "SchemaPayloadOption";
        if (nodeType == typeof(SearchPropertyListFullTextIndexOption)) return "SearchPropertyListFullTextIndexOption";
        if (nodeType == typeof(SearchedCaseExpression)) return "SearchedCaseExpression";
        if (nodeType == typeof(SearchedWhenClause)) return "SearchedWhenClause";
        if (nodeType == typeof(SecondaryRoleReplicaOption)) return "SecondaryRoleReplicaOption";
        if (nodeType == typeof(SecurityPolicyOption)) return "SecurityPolicyOption";
        if (nodeType == typeof(SecurityPredicateAction)) return "SecurityPredicateAction";
        if (nodeType == typeof(SecurityPrincipal)) return "SecurityPrincipal";
        if (nodeType == typeof(SecurityTargetObject)) return "SecurityTargetObject";
        if (nodeType == typeof(SecurityTargetObjectName)) return "SecurityTargetObjectName";
        if (nodeType == typeof(SecurityUserClause80)) return "SecurityUserClause80";
        if (nodeType == typeof(SelectFunctionReturnType)) return "SelectFunctionReturnType";
        if (nodeType == typeof(SelectInsertSource)) return "SelectInsertSource";
        if (nodeType == typeof(SelectScalarExpression)) return "SelectScalarExpression";
        if (nodeType == typeof(SelectSetVariable)) return "SelectSetVariable";
        if (nodeType == typeof(SelectStarExpression)) return "SelectStarExpression";
        if (nodeType == typeof(SelectStatement)) return "SelectStatement";
        if (nodeType == typeof(SelectStatementSnippet)) return "SelectStatementSnippet";
        if (nodeType == typeof(SelectiveXmlIndexPromotedPath)) return "SelectiveXmlIndexPromotedPath";
        if (nodeType == typeof(SemanticIndexChunkOption)) return "SemanticIndexChunkOption";
        if (nodeType == typeof(SemanticIndexColumn)) return "SemanticIndexColumn";
        if (nodeType == typeof(SemanticTableReference)) return "SemanticTableReference";
        if (nodeType == typeof(SendStatement)) return "SendStatement";
        if (nodeType == typeof(SensitivityClassificationOption)) return "SensitivityClassificationOption";
        if (nodeType == typeof(SequenceOption)) return "SequenceOption";
        if (nodeType == typeof(ServiceContract)) return "ServiceContract";
        if (nodeType == typeof(SessionTimeoutPayloadOption)) return "SessionTimeoutPayloadOption";
        if (nodeType == typeof(SetCommandStatement)) return "SetCommandStatement";
        if (nodeType == typeof(SetErrorLevelStatement)) return "SetErrorLevelStatement";
        if (nodeType == typeof(SetFipsFlaggerCommand)) return "SetFipsFlaggerCommand";
        if (nodeType == typeof(SetIdentityInsertStatement)) return "SetIdentityInsertStatement";
        if (nodeType == typeof(SetOffsetsStatement)) return "SetOffsetsStatement";
        if (nodeType == typeof(SetRowCountStatement)) return "SetRowCountStatement";
        if (nodeType == typeof(SetSearchPropertyListAlterFullTextIndexAction)) return "SetSearchPropertyListAlterFullTextIndexAction";
        if (nodeType == typeof(SetStatisticsStatement)) return "SetStatisticsStatement";
        if (nodeType == typeof(SetStopListAlterFullTextIndexAction)) return "SetStopListAlterFullTextIndexAction";
        if (nodeType == typeof(SetTextSizeStatement)) return "SetTextSizeStatement";
        if (nodeType == typeof(SetTransactionIsolationLevelStatement)) return "SetTransactionIsolationLevelStatement";
        if (nodeType == typeof(SetUserStatement)) return "SetUserStatement";
        if (nodeType == typeof(SetVariableStatement)) return "SetVariableStatement";
        if (nodeType == typeof(ShutdownStatement)) return "ShutdownStatement";
        if (nodeType == typeof(SimpleAlterFullTextIndexAction)) return "SimpleAlterFullTextIndexAction";
        if (nodeType == typeof(SimpleCaseExpression)) return "SimpleCaseExpression";
        if (nodeType == typeof(SimpleWhenClause)) return "SimpleWhenClause";
        if (nodeType == typeof(SingleValueTypeCopyOption)) return "SingleValueTypeCopyOption";
        if (nodeType == typeof(SizeFileDeclarationOption)) return "SizeFileDeclarationOption";
        if (nodeType == typeof(SoapMethod)) return "SoapMethod";
        if (nodeType == typeof(SourceDeclaration)) return "SourceDeclaration";
        if (nodeType == typeof(SpatialIndexRegularOption)) return "SpatialIndexRegularOption";
        if (nodeType == typeof(SqlCommandIdentifier)) return "SqlCommandIdentifier";
        if (nodeType == typeof(SqlDataTypeReference)) return "SqlDataTypeReference";
        if (nodeType == typeof(StateAuditOption)) return "StateAuditOption";
        if (nodeType == typeof(StatementList)) return "StatementList";
        if (nodeType == typeof(StatementListSnippet)) return "StatementListSnippet";
        if (nodeType == typeof(StatisticsOption)) return "StatisticsOption";
        if (nodeType == typeof(StatisticsPartitionRange)) return "StatisticsPartitionRange";
        if (nodeType == typeof(StopListFullTextIndexOption)) return "StopListFullTextIndexOption";
        if (nodeType == typeof(StopRestoreOption)) return "StopRestoreOption";
        if (nodeType == typeof(StringLiteral)) return "StringLiteral";
        if (nodeType == typeof(SubqueryComparisonPredicate)) return "SubqueryComparisonPredicate";
        if (nodeType == typeof(SystemTimePeriodDefinition)) return "SystemTimePeriodDefinition";
        if (nodeType == typeof(SystemVersioningTableOption)) return "SystemVersioningTableOption";
        if (nodeType == typeof(TSEqualCall)) return "TSEqualCall";
        if (nodeType == typeof(TSqlBatch)) return "TSqlBatch";
        if (nodeType == typeof(TSqlFragmentSnippet)) return "TSqlFragmentSnippet";
        if (nodeType == typeof(TSqlScript)) return "TSqlScript";
        if (nodeType == typeof(TSqlStatementSnippet)) return "TSqlStatementSnippet";
        if (nodeType == typeof(TableClusteredIndexType)) return "TableClusteredIndexType";
        if (nodeType == typeof(TableDataCompressionOption)) return "TableDataCompressionOption";
        if (nodeType == typeof(TableDefinition)) return "TableDefinition";
        if (nodeType == typeof(TableDistributionOption)) return "TableDistributionOption";
        if (nodeType == typeof(TableHashDistributionPolicy)) return "TableHashDistributionPolicy";
        if (nodeType == typeof(TableHint)) return "TableHint";
        if (nodeType == typeof(TableHintsOptimizerHint)) return "TableHintsOptimizerHint";
        if (nodeType == typeof(TableIndexOption)) return "TableIndexOption";
        if (nodeType == typeof(TableNonClusteredIndexType)) return "TableNonClusteredIndexType";
        if (nodeType == typeof(TablePartitionOption)) return "TablePartitionOption";
        if (nodeType == typeof(TablePartitionOptionSpecifications)) return "TablePartitionOptionSpecifications";
        if (nodeType == typeof(TableReplicateDistributionPolicy)) return "TableReplicateDistributionPolicy";
        if (nodeType == typeof(TableRoundRobinDistributionPolicy)) return "TableRoundRobinDistributionPolicy";
        if (nodeType == typeof(TableSampleClause)) return "TableSampleClause";
        if (nodeType == typeof(TableValuedFunctionReturnType)) return "TableValuedFunctionReturnType";
        if (nodeType == typeof(TableXmlCompressionOption)) return "TableXmlCompressionOption";
        if (nodeType == typeof(TargetDeclaration)) return "TargetDeclaration";
        if (nodeType == typeof(TargetRecoveryTimeDatabaseOption)) return "TargetRecoveryTimeDatabaseOption";
        if (nodeType == typeof(TemporalClause)) return "TemporalClause";
        if (nodeType == typeof(ThrowStatement)) return "ThrowStatement";
        if (nodeType == typeof(TopRowFilter)) return "TopRowFilter";
        if (nodeType == typeof(TriggerAction)) return "TriggerAction";
        if (nodeType == typeof(TriggerObject)) return "TriggerObject";
        if (nodeType == typeof(TriggerOption)) return "TriggerOption";
        if (nodeType == typeof(TruncateTableStatement)) return "TruncateTableStatement";
        if (nodeType == typeof(TruncateTargetTableSwitchOption)) return "TruncateTargetTableSwitchOption";
        if (nodeType == typeof(TryCastCall)) return "TryCastCall";
        if (nodeType == typeof(TryCatchStatement)) return "TryCatchStatement";
        if (nodeType == typeof(TryConvertCall)) return "TryConvertCall";
        if (nodeType == typeof(TryParseCall)) return "TryParseCall";
        if (nodeType == typeof(UnaryExpression)) return "UnaryExpression";
        if (nodeType == typeof(UniqueConstraintDefinition)) return "UniqueConstraintDefinition";
        if (nodeType == typeof(UnpivotedTableReference)) return "UnpivotedTableReference";
        if (nodeType == typeof(UnqualifiedJoin)) return "UnqualifiedJoin";
        if (nodeType == typeof(UpdateCall)) return "UpdateCall";
        if (nodeType == typeof(UpdateForClause)) return "UpdateForClause";
        if (nodeType == typeof(UpdateMergeAction)) return "UpdateMergeAction";
        if (nodeType == typeof(UpdateSpecification)) return "UpdateSpecification";
        if (nodeType == typeof(UpdateStatement)) return "UpdateStatement";
        if (nodeType == typeof(UpdateStatisticsStatement)) return "UpdateStatisticsStatement";
        if (nodeType == typeof(UpdateTextStatement)) return "UpdateTextStatement";
        if (nodeType == typeof(UseFederationStatement)) return "UseFederationStatement";
        if (nodeType == typeof(UseHintList)) return "UseHintList";
        if (nodeType == typeof(UseStatement)) return "UseStatement";
        if (nodeType == typeof(UserDataTypeReference)) return "UserDataTypeReference";
        if (nodeType == typeof(UserDefinedTypeCallTarget)) return "UserDefinedTypeCallTarget";
        if (nodeType == typeof(UserDefinedTypePropertyAccess)) return "UserDefinedTypePropertyAccess";
        if (nodeType == typeof(UserLoginOption)) return "UserLoginOption";
        if (nodeType == typeof(UserRemoteServiceBindingOption)) return "UserRemoteServiceBindingOption";
        if (nodeType == typeof(ValuesInsertSource)) return "ValuesInsertSource";
        if (nodeType == typeof(VariableMethodCallTableReference)) return "VariableMethodCallTableReference";
        if (nodeType == typeof(VariableReference)) return "VariableReference";
        if (nodeType == typeof(VariableTableReference)) return "VariableTableReference";
        if (nodeType == typeof(VariableValuePair)) return "VariableValuePair";
        if (nodeType == typeof(VectorDataTypeReference)) return "VectorDataTypeReference";
        if (nodeType == typeof(VectorMetricIndexOption)) return "VectorMetricIndexOption";
        if (nodeType == typeof(VectorSearchTableReference)) return "VectorSearchTableReference";
        if (nodeType == typeof(VectorTypeIndexOption)) return "VectorTypeIndexOption";
        if (nodeType == typeof(ViewDistributionOption)) return "ViewDistributionOption";
        if (nodeType == typeof(ViewForAppendOption)) return "ViewForAppendOption";
        if (nodeType == typeof(ViewHashDistributionPolicy)) return "ViewHashDistributionPolicy";
        if (nodeType == typeof(ViewOption)) return "ViewOption";
        if (nodeType == typeof(ViewRoundRobinDistributionPolicy)) return "ViewRoundRobinDistributionPolicy";
        if (nodeType == typeof(WaitAtLowPriorityOption)) return "WaitAtLowPriorityOption";
        if (nodeType == typeof(WaitForStatement)) return "WaitForStatement";
        if (nodeType == typeof(WhereClause)) return "WhereClause";
        if (nodeType == typeof(WhileStatement)) return "WhileStatement";
        if (nodeType == typeof(WindowClause)) return "WindowClause";
        if (nodeType == typeof(WindowDefinition)) return "WindowDefinition";
        if (nodeType == typeof(WindowDelimiter)) return "WindowDelimiter";
        if (nodeType == typeof(WindowFrameClause)) return "WindowFrameClause";
        if (nodeType == typeof(WindowsCreateLoginSource)) return "WindowsCreateLoginSource";
        if (nodeType == typeof(WithCtesAndXmlNamespaces)) return "WithCtesAndXmlNamespaces";
        if (nodeType == typeof(WithinGroupClause)) return "WithinGroupClause";
        if (nodeType == typeof(WitnessDatabaseOption)) return "WitnessDatabaseOption";
        if (nodeType == typeof(WlmTimeLiteral)) return "WlmTimeLiteral";
        if (nodeType == typeof(WorkloadGroupImportanceParameter)) return "WorkloadGroupImportanceParameter";
        if (nodeType == typeof(WorkloadGroupResourceParameter)) return "WorkloadGroupResourceParameter";
        if (nodeType == typeof(WriteTextStatement)) return "WriteTextStatement";
        if (nodeType == typeof(WsdlPayloadOption)) return "WsdlPayloadOption";
        if (nodeType == typeof(XmlCompressionOption)) return "XmlCompressionOption";
        if (nodeType == typeof(XmlDataTypeReference)) return "XmlDataTypeReference";
        if (nodeType == typeof(XmlForClause)) return "XmlForClause";
        if (nodeType == typeof(XmlForClauseOption)) return "XmlForClauseOption";
        if (nodeType == typeof(XmlNamespaces)) return "XmlNamespaces";
        if (nodeType == typeof(XmlNamespacesAliasElement)) return "XmlNamespacesAliasElement";
        if (nodeType == typeof(XmlNamespacesDefaultElement)) return "XmlNamespacesDefaultElement";
        throw new UnsupportedNodeException();
    }
    public static IEnumerable<StructuralChildEdge> GetChildren(TSqlFragment node)
    {
        var nodeType = node.GetType();
if (nodeType == typeof(AIAnalyzeSentimentFunctionCall))
{
    var typed = (AIAnalyzeSentimentFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Input is not null)
    {
        yield return new StructuralChildEdge("Input", -1, typed.Input);
    }
    yield break;
}
if (nodeType == typeof(AIClassifyFunctionCall))
{
    var typed = (AIClassifyFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Input is not null)
    {
        yield return new StructuralChildEdge("Input", -1, typed.Input);
    }
    if (typed.Labels is not null)
    {
        var index = 0;
        foreach (var child in typed.Labels)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Labels", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AIExtractFunctionCall))
{
    var typed = (AIExtractFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Input is not null)
    {
        yield return new StructuralChildEdge("Input", -1, typed.Input);
    }
    if (typed.Labels is not null)
    {
        var index = 0;
        foreach (var child in typed.Labels)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Labels", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AIFixGrammarFunctionCall))
{
    var typed = (AIFixGrammarFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Input is not null)
    {
        yield return new StructuralChildEdge("Input", -1, typed.Input);
    }
    yield break;
}
if (nodeType == typeof(AIGenerateChunksTableReference))
{
    var typed = (AIGenerateChunksTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.ChunkType is not null)
    {
        yield return new StructuralChildEdge("ChunkType", -1, typed.ChunkType);
    }
    if (typed.Source is not null)
    {
        yield return new StructuralChildEdge("Source", -1, typed.Source);
    }
    yield break;
}
if (nodeType == typeof(AIGenerateEmbeddingsFunctionCall))
{
    var typed = (AIGenerateEmbeddingsFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Input is not null)
    {
        yield return new StructuralChildEdge("Input", -1, typed.Input);
    }
    if (typed.ModelName is not null)
    {
        yield return new StructuralChildEdge("ModelName", -1, typed.ModelName);
    }
    if (typed.OptionalParameters is not null)
    {
        yield return new StructuralChildEdge("OptionalParameters", -1, typed.OptionalParameters);
    }
    yield break;
}
if (nodeType == typeof(AIGenerateFixedChunksTableReference))
{
    var typed = (AIGenerateFixedChunksTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.ChunkSize is not null)
    {
        yield return new StructuralChildEdge("ChunkSize", -1, typed.ChunkSize);
    }
    if (typed.ChunkType is not null)
    {
        yield return new StructuralChildEdge("ChunkType", -1, typed.ChunkType);
    }
    if (typed.EnableChunkSetId is not null)
    {
        yield return new StructuralChildEdge("EnableChunkSetId", -1, typed.EnableChunkSetId);
    }
    if (typed.Overlap is not null)
    {
        yield return new StructuralChildEdge("Overlap", -1, typed.Overlap);
    }
    if (typed.Source is not null)
    {
        yield return new StructuralChildEdge("Source", -1, typed.Source);
    }
    yield break;
}
if (nodeType == typeof(AIGenerateResponseFunctionCall))
{
    var typed = (AIGenerateResponseFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.PromptPart1 is not null)
    {
        yield return new StructuralChildEdge("PromptPart1", -1, typed.PromptPart1);
    }
    if (typed.PromptPart2 is not null)
    {
        yield return new StructuralChildEdge("PromptPart2", -1, typed.PromptPart2);
    }
    yield break;
}
if (nodeType == typeof(AISummarizeFunctionCall))
{
    var typed = (AISummarizeFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Input is not null)
    {
        yield return new StructuralChildEdge("Input", -1, typed.Input);
    }
    yield break;
}
if (nodeType == typeof(AITranslateFunctionCall))
{
    var typed = (AITranslateFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Input is not null)
    {
        yield return new StructuralChildEdge("Input", -1, typed.Input);
    }
    if (typed.Language is not null)
    {
        yield return new StructuralChildEdge("Language", -1, typed.Language);
    }
    yield break;
}

if (nodeType == typeof(AdHocDataSource))
{
    var typed = (AdHocDataSource)node;
    if (typed.InitString is not null)
    {
        yield return new StructuralChildEdge("InitString", -1, typed.InitString);
    }
    if (typed.ProviderName is not null)
    {
        yield return new StructuralChildEdge("ProviderName", -1, typed.ProviderName);
    }
    yield break;
}
if (nodeType == typeof(AdHocTableReference))
{
    var typed = (AdHocTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.DataSource is not null)
    {
        yield return new StructuralChildEdge("DataSource", -1, typed.DataSource);
    }
    if (typed.Object is not null)
    {
        yield return new StructuralChildEdge("Object", -1, typed.Object);
    }
    yield break;
}
if (nodeType == typeof(AddAlterFullTextIndexAction))
{
    var typed = (AddAlterFullTextIndexAction)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AddFileSpec))
{
    var typed = (AddFileSpec)node;
    if (typed.File is not null)
    {
        yield return new StructuralChildEdge("File", -1, typed.File);
    }
    if (typed.FileName is not null)
    {
        yield return new StructuralChildEdge("FileName", -1, typed.FileName);
    }
    yield break;
}
if (nodeType == typeof(AddMemberAlterRoleAction))
{
    var typed = (AddMemberAlterRoleAction)node;
    if (typed.Member is not null)
    {
        yield return new StructuralChildEdge("Member", -1, typed.Member);
    }
    yield break;
}
if (nodeType == typeof(AddSearchPropertyListAction))
{
    var typed = (AddSearchPropertyListAction)node;
    if (typed.Description is not null)
    {
        yield return new StructuralChildEdge("Description", -1, typed.Description);
    }
    if (typed.Guid is not null)
    {
        yield return new StructuralChildEdge("Guid", -1, typed.Guid);
    }
    if (typed.Id is not null)
    {
        yield return new StructuralChildEdge("Id", -1, typed.Id);
    }
    if (typed.PropertyName is not null)
    {
        yield return new StructuralChildEdge("PropertyName", -1, typed.PropertyName);
    }
    yield break;
}
if (nodeType == typeof(AddSensitivityClassificationStatement))
{
    var typed = (AddSensitivityClassificationStatement)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AddSignatureStatement))
{
    var typed = (AddSignatureStatement)node;
    if (typed.Cryptos is not null)
    {
        var index = 0;
        foreach (var child in typed.Cryptos)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Cryptos", index, child);
            }
            index += 1;
        }
    }
    if (typed.Element is not null)
    {
        yield return new StructuralChildEdge("Element", -1, typed.Element);
    }
    yield break;
}

if (nodeType == typeof(AlterApplicationRoleStatement))
{
    var typed = (AlterApplicationRoleStatement)node;
    if (typed.ApplicationRoleOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ApplicationRoleOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ApplicationRoleOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterAssemblyStatement))
{
    var typed = (AlterAssemblyStatement)node;
    if (typed.AddFiles is not null)
    {
        var index = 0;
        foreach (var child in typed.AddFiles)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("AddFiles", index, child);
            }
            index += 1;
        }
    }
    if (typed.DropFiles is not null)
    {
        var index = 0;
        foreach (var child in typed.DropFiles)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("DropFiles", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterAsymmetricKeyStatement))
{
    var typed = (AlterAsymmetricKeyStatement)node;
    if (typed.AttestedBy is not null)
    {
        yield return new StructuralChildEdge("AttestedBy", -1, typed.AttestedBy);
    }
    if (typed.DecryptionPassword is not null)
    {
        yield return new StructuralChildEdge("DecryptionPassword", -1, typed.DecryptionPassword);
    }
    if (typed.EncryptionPassword is not null)
    {
        yield return new StructuralChildEdge("EncryptionPassword", -1, typed.EncryptionPassword);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterAuthorizationStatement))
{
    var typed = (AlterAuthorizationStatement)node;
    if (typed.PrincipalName is not null)
    {
        yield return new StructuralChildEdge("PrincipalName", -1, typed.PrincipalName);
    }
    if (typed.SecurityTargetObject is not null)
    {
        yield return new StructuralChildEdge("SecurityTargetObject", -1, typed.SecurityTargetObject);
    }
    yield break;
}

if (nodeType == typeof(AlterAvailabilityGroupFailoverAction))
{
    var typed = (AlterAvailabilityGroupFailoverAction)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterAvailabilityGroupFailoverOption))
{
    var typed = (AlterAvailabilityGroupFailoverOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(AlterAvailabilityGroupStatement))
{
    var typed = (AlterAvailabilityGroupStatement)node;
    if (typed.Action is not null)
    {
        yield return new StructuralChildEdge("Action", -1, typed.Action);
    }
    if (typed.Databases is not null)
    {
        var index = 0;
        foreach (var child in typed.Databases)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Databases", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Replicas is not null)
    {
        var index = 0;
        foreach (var child in typed.Replicas)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Replicas", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterBrokerPriorityStatement))
{
    var typed = (AlterBrokerPriorityStatement)node;
    if (typed.BrokerPriorityParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.BrokerPriorityParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("BrokerPriorityParameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterCertificateStatement))
{
    var typed = (AlterCertificateStatement)node;
    if (typed.AttestedBy is not null)
    {
        yield return new StructuralChildEdge("AttestedBy", -1, typed.AttestedBy);
    }
    if (typed.DecryptionPassword is not null)
    {
        yield return new StructuralChildEdge("DecryptionPassword", -1, typed.DecryptionPassword);
    }
    if (typed.EncryptionPassword is not null)
    {
        yield return new StructuralChildEdge("EncryptionPassword", -1, typed.EncryptionPassword);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.PrivateKeyPath is not null)
    {
        yield return new StructuralChildEdge("PrivateKeyPath", -1, typed.PrivateKeyPath);
    }
    yield break;
}
if (nodeType == typeof(AlterColumnAlterFullTextIndexAction))
{
    var typed = (AlterColumnAlterFullTextIndexAction)node;
    if (typed.Column is not null)
    {
        yield return new StructuralChildEdge("Column", -1, typed.Column);
    }
    yield break;
}
if (nodeType == typeof(AlterColumnEncryptionKeyStatement))
{
    var typed = (AlterColumnEncryptionKeyStatement)node;
    if (typed.ColumnEncryptionKeyValues is not null)
    {
        var index = 0;
        foreach (var child in typed.ColumnEncryptionKeyValues)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ColumnEncryptionKeyValues", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterCredentialStatement))
{
    var typed = (AlterCredentialStatement)node;
    if (typed.Identity is not null)
    {
        yield return new StructuralChildEdge("Identity", -1, typed.Identity);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Secret is not null)
    {
        yield return new StructuralChildEdge("Secret", -1, typed.Secret);
    }
    yield break;
}
if (nodeType == typeof(AlterCryptographicProviderStatement))
{
    var typed = (AlterCryptographicProviderStatement)node;
    if (typed.File is not null)
    {
        yield return new StructuralChildEdge("File", -1, typed.File);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseAddFileGroupStatement))
{
    var typed = (AlterDatabaseAddFileGroupStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.FileGroup is not null)
    {
        yield return new StructuralChildEdge("FileGroup", -1, typed.FileGroup);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseAddFileStatement))
{
    var typed = (AlterDatabaseAddFileStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.FileDeclarations is not null)
    {
        var index = 0;
        foreach (var child in typed.FileDeclarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("FileDeclarations", index, child);
            }
            index += 1;
        }
    }
    if (typed.FileGroup is not null)
    {
        yield return new StructuralChildEdge("FileGroup", -1, typed.FileGroup);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseAuditSpecificationStatement))
{
    var typed = (AlterDatabaseAuditSpecificationStatement)node;
    if (typed.AuditName is not null)
    {
        yield return new StructuralChildEdge("AuditName", -1, typed.AuditName);
    }
    if (typed.Parts is not null)
    {
        var index = 0;
        foreach (var child in typed.Parts)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parts", index, child);
            }
            index += 1;
        }
    }
    if (typed.SpecificationName is not null)
    {
        yield return new StructuralChildEdge("SpecificationName", -1, typed.SpecificationName);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseCollateStatement))
{
    var typed = (AlterDatabaseCollateStatement)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseEncryptionKeyStatement))
{
    var typed = (AlterDatabaseEncryptionKeyStatement)node;
    if (typed.Encryptor is not null)
    {
        yield return new StructuralChildEdge("Encryptor", -1, typed.Encryptor);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseModifyFileGroupStatement))
{
    var typed = (AlterDatabaseModifyFileGroupStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.FileGroup is not null)
    {
        yield return new StructuralChildEdge("FileGroup", -1, typed.FileGroup);
    }
    if (typed.NewFileGroupName is not null)
    {
        yield return new StructuralChildEdge("NewFileGroupName", -1, typed.NewFileGroupName);
    }
    if (typed.Termination is not null)
    {
        yield return new StructuralChildEdge("Termination", -1, typed.Termination);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseModifyFileStatement))
{
    var typed = (AlterDatabaseModifyFileStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.FileDeclaration is not null)
    {
        yield return new StructuralChildEdge("FileDeclaration", -1, typed.FileDeclaration);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseModifyNameStatement))
{
    var typed = (AlterDatabaseModifyNameStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.NewDatabaseName is not null)
    {
        yield return new StructuralChildEdge("NewDatabaseName", -1, typed.NewDatabaseName);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabasePerformCutoverStatement))
{
    var typed = (AlterDatabasePerformCutoverStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseRebuildLogStatement))
{
    var typed = (AlterDatabaseRebuildLogStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.FileDeclaration is not null)
    {
        yield return new StructuralChildEdge("FileDeclaration", -1, typed.FileDeclaration);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseRemoveFileGroupStatement))
{
    var typed = (AlterDatabaseRemoveFileGroupStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.FileGroup is not null)
    {
        yield return new StructuralChildEdge("FileGroup", -1, typed.FileGroup);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseRemoveFileStatement))
{
    var typed = (AlterDatabaseRemoveFileStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.File is not null)
    {
        yield return new StructuralChildEdge("File", -1, typed.File);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseScopedConfigurationClearStatement))
{
    var typed = (AlterDatabaseScopedConfigurationClearStatement)node;
    if (typed.Option is not null)
    {
        yield return new StructuralChildEdge("Option", -1, typed.Option);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseScopedConfigurationSetStatement))
{
    var typed = (AlterDatabaseScopedConfigurationSetStatement)node;
    if (typed.Option is not null)
    {
        yield return new StructuralChildEdge("Option", -1, typed.Option);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseSetStatement))
{
    var typed = (AlterDatabaseSetStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Termination is not null)
    {
        yield return new StructuralChildEdge("Termination", -1, typed.Termination);
    }
    yield break;
}
if (nodeType == typeof(AlterDatabaseTermination))
{
    var typed = (AlterDatabaseTermination)node;
    if (typed.RollbackAfter is not null)
    {
        yield return new StructuralChildEdge("RollbackAfter", -1, typed.RollbackAfter);
    }
    yield break;
}
if (nodeType == typeof(AlterEndpointStatement))
{
    var typed = (AlterEndpointStatement)node;
    if (typed.Affinity is not null)
    {
        yield return new StructuralChildEdge("Affinity", -1, typed.Affinity);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.PayloadOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.PayloadOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PayloadOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.ProtocolOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ProtocolOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ProtocolOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterEventSessionStatement))
{
    var typed = (AlterEventSessionStatement)node;
    if (typed.DropEventDeclarations is not null)
    {
        var index = 0;
        foreach (var child in typed.DropEventDeclarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("DropEventDeclarations", index, child);
            }
            index += 1;
        }
    }
    if (typed.DropTargetDeclarations is not null)
    {
        var index = 0;
        foreach (var child in typed.DropTargetDeclarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("DropTargetDeclarations", index, child);
            }
            index += 1;
        }
    }
    if (typed.EventDeclarations is not null)
    {
        var index = 0;
        foreach (var child in typed.EventDeclarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("EventDeclarations", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.SessionOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.SessionOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SessionOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.TargetDeclarations is not null)
    {
        var index = 0;
        foreach (var child in typed.TargetDeclarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TargetDeclarations", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterExternalDataSourceStatement))
{
    var typed = (AlterExternalDataSourceStatement)node;
    if (typed.ExternalDataSourceOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalDataSourceOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalDataSourceOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Location is not null)
    {
        yield return new StructuralChildEdge("Location", -1, typed.Location);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterExternalFunctionStatement))
{
    var typed = (AlterExternalFunctionStatement)node;
    if (typed.ExternalName is not null)
    {
        yield return new StructuralChildEdge("ExternalName", -1, typed.ExternalName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ReturnType is not null)
    {
        yield return new StructuralChildEdge("ReturnType", -1, typed.ReturnType);
    }
    yield break;
}
if (nodeType == typeof(AlterExternalLanguageStatement))
{
    var typed = (AlterExternalLanguageStatement)node;
    if (typed.ExternalLanguageFiles is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalLanguageFiles)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalLanguageFiles", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Operation is not null)
    {
        yield return new StructuralChildEdge("Operation", -1, typed.Operation);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.Platform is not null)
    {
        yield return new StructuralChildEdge("Platform", -1, typed.Platform);
    }
    yield break;
}
if (nodeType == typeof(AlterExternalLibraryStatement))
{
    var typed = (AlterExternalLibraryStatement)node;
    if (typed.ExternalLibraryFiles is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalLibraryFiles)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalLibraryFiles", index, child);
            }
            index += 1;
        }
    }
    if (typed.Language is not null)
    {
        yield return new StructuralChildEdge("Language", -1, typed.Language);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    yield break;
}
if (nodeType == typeof(AlterExternalModelStatement))
{
    var typed = (AlterExternalModelStatement)node;
    if (typed.ApiFormat is not null)
    {
        yield return new StructuralChildEdge("ApiFormat", -1, typed.ApiFormat);
    }
    if (typed.Credential is not null)
    {
        yield return new StructuralChildEdge("Credential", -1, typed.Credential);
    }
    if (typed.LocalRuntimePath is not null)
    {
        yield return new StructuralChildEdge("LocalRuntimePath", -1, typed.LocalRuntimePath);
    }
    if (typed.Location is not null)
    {
        yield return new StructuralChildEdge("Location", -1, typed.Location);
    }
    if (typed.ModelName is not null)
    {
        yield return new StructuralChildEdge("ModelName", -1, typed.ModelName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        yield return new StructuralChildEdge("Parameters", -1, typed.Parameters);
    }
    yield break;
}
if (nodeType == typeof(AlterExternalResourcePoolStatement))
{
    var typed = (AlterExternalResourcePoolStatement)node;
    if (typed.ExternalResourcePoolParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalResourcePoolParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalResourcePoolParameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterFederationStatement))
{
    var typed = (AlterFederationStatement)node;
    if (typed.Boundary is not null)
    {
        yield return new StructuralChildEdge("Boundary", -1, typed.Boundary);
    }
    if (typed.DistributionName is not null)
    {
        yield return new StructuralChildEdge("DistributionName", -1, typed.DistributionName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterFullTextCatalogStatement))
{
    var typed = (AlterFullTextCatalogStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterFullTextIndexStatement))
{
    var typed = (AlterFullTextIndexStatement)node;
    if (typed.Action is not null)
    {
        yield return new StructuralChildEdge("Action", -1, typed.Action);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    yield break;
}
if (nodeType == typeof(AlterFullTextStopListStatement))
{
    var typed = (AlterFullTextStopListStatement)node;
    if (typed.Action is not null)
    {
        yield return new StructuralChildEdge("Action", -1, typed.Action);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterFunctionStatement))
{
    var typed = (AlterFunctionStatement)node;
    if (typed.MethodSpecifier is not null)
    {
        yield return new StructuralChildEdge("MethodSpecifier", -1, typed.MethodSpecifier);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.OrderHint is not null)
    {
        yield return new StructuralChildEdge("OrderHint", -1, typed.OrderHint);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ReturnType is not null)
    {
        yield return new StructuralChildEdge("ReturnType", -1, typed.ReturnType);
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    yield break;
}
if (nodeType == typeof(AlterIndexStatement))
{
    var typed = (AlterIndexStatement)node;
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    if (typed.Partition is not null)
    {
        yield return new StructuralChildEdge("Partition", -1, typed.Partition);
    }
    if (typed.PromotedPaths is not null)
    {
        var index = 0;
        foreach (var child in typed.PromotedPaths)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PromotedPaths", index, child);
            }
            index += 1;
        }
    }
    if (typed.XmlNamespaces is not null)
    {
        yield return new StructuralChildEdge("XmlNamespaces", -1, typed.XmlNamespaces);
    }
    yield break;
}
if (nodeType == typeof(AlterLoginAddDropCredentialStatement))
{
    var typed = (AlterLoginAddDropCredentialStatement)node;
    if (typed.CredentialName is not null)
    {
        yield return new StructuralChildEdge("CredentialName", -1, typed.CredentialName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterLoginEnableDisableStatement))
{
    var typed = (AlterLoginEnableDisableStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterLoginOptionsStatement))
{
    var typed = (AlterLoginOptionsStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterMasterKeyStatement))
{
    var typed = (AlterMasterKeyStatement)node;
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}
if (nodeType == typeof(AlterMessageTypeStatement))
{
    var typed = (AlterMessageTypeStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.XmlSchemaCollectionName is not null)
    {
        yield return new StructuralChildEdge("XmlSchemaCollectionName", -1, typed.XmlSchemaCollectionName);
    }
    yield break;
}
if (nodeType == typeof(AlterPartitionFunctionStatement))
{
    var typed = (AlterPartitionFunctionStatement)node;
    if (typed.Boundary is not null)
    {
        yield return new StructuralChildEdge("Boundary", -1, typed.Boundary);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterPartitionSchemeStatement))
{
    var typed = (AlterPartitionSchemeStatement)node;
    if (typed.FileGroup is not null)
    {
        yield return new StructuralChildEdge("FileGroup", -1, typed.FileGroup);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterProcedureStatement))
{
    var typed = (AlterProcedureStatement)node;
    if (typed.MethodSpecifier is not null)
    {
        yield return new StructuralChildEdge("MethodSpecifier", -1, typed.MethodSpecifier);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ProcedureReference is not null)
    {
        yield return new StructuralChildEdge("ProcedureReference", -1, typed.ProcedureReference);
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    yield break;
}
if (nodeType == typeof(AlterQueueStatement))
{
    var typed = (AlterQueueStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.QueueOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.QueueOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("QueueOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterRemoteServiceBindingStatement))
{
    var typed = (AlterRemoteServiceBindingStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterResourceGovernorStatement))
{
    var typed = (AlterResourceGovernorStatement)node;
    if (typed.ClassifierFunction is not null)
    {
        yield return new StructuralChildEdge("ClassifierFunction", -1, typed.ClassifierFunction);
    }
    yield break;
}
if (nodeType == typeof(AlterResourcePoolStatement))
{
    var typed = (AlterResourcePoolStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.ResourcePoolParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.ResourcePoolParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ResourcePoolParameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterRoleStatement))
{
    var typed = (AlterRoleStatement)node;
    if (typed.Action is not null)
    {
        yield return new StructuralChildEdge("Action", -1, typed.Action);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterRouteStatement))
{
    var typed = (AlterRouteStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.RouteOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.RouteOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("RouteOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterSchemaStatement))
{
    var typed = (AlterSchemaStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.ObjectName is not null)
    {
        yield return new StructuralChildEdge("ObjectName", -1, typed.ObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterSearchPropertyListStatement))
{
    var typed = (AlterSearchPropertyListStatement)node;
    if (typed.Action is not null)
    {
        yield return new StructuralChildEdge("Action", -1, typed.Action);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterSecurityPolicyStatement))
{
    var typed = (AlterSecurityPolicyStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.SecurityPolicyOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.SecurityPolicyOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SecurityPolicyOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.SecurityPredicateActions is not null)
    {
        var index = 0;
        foreach (var child in typed.SecurityPredicateActions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SecurityPredicateActions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterSequenceStatement))
{
    var typed = (AlterSequenceStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.SequenceOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.SequenceOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SequenceOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterServerAuditSpecificationStatement))
{
    var typed = (AlterServerAuditSpecificationStatement)node;
    if (typed.AuditName is not null)
    {
        yield return new StructuralChildEdge("AuditName", -1, typed.AuditName);
    }
    if (typed.Parts is not null)
    {
        var index = 0;
        foreach (var child in typed.Parts)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parts", index, child);
            }
            index += 1;
        }
    }
    if (typed.SpecificationName is not null)
    {
        yield return new StructuralChildEdge("SpecificationName", -1, typed.SpecificationName);
    }
    yield break;
}
if (nodeType == typeof(AlterServerAuditStatement))
{
    var typed = (AlterServerAuditStatement)node;
    if (typed.AuditName is not null)
    {
        yield return new StructuralChildEdge("AuditName", -1, typed.AuditName);
    }
    if (typed.AuditTarget is not null)
    {
        yield return new StructuralChildEdge("AuditTarget", -1, typed.AuditTarget);
    }
    if (typed.NewName is not null)
    {
        yield return new StructuralChildEdge("NewName", -1, typed.NewName);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.PredicateExpression is not null)
    {
        yield return new StructuralChildEdge("PredicateExpression", -1, typed.PredicateExpression);
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationBufferPoolExtensionContainerOption))
{
    var typed = (AlterServerConfigurationBufferPoolExtensionContainerOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    if (typed.Suboptions is not null)
    {
        var index = 0;
        foreach (var child in typed.Suboptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Suboptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationBufferPoolExtensionOption))
{
    var typed = (AlterServerConfigurationBufferPoolExtensionOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationBufferPoolExtensionSizeOption))
{
    var typed = (AlterServerConfigurationBufferPoolExtensionSizeOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationDiagnosticsLogMaxSizeOption))
{
    var typed = (AlterServerConfigurationDiagnosticsLogMaxSizeOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationDiagnosticsLogOption))
{
    var typed = (AlterServerConfigurationDiagnosticsLogOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationExternalAuthenticationContainerOption))
{
    var typed = (AlterServerConfigurationExternalAuthenticationContainerOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    if (typed.Suboptions is not null)
    {
        var index = 0;
        foreach (var child in typed.Suboptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Suboptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationExternalAuthenticationOption))
{
    var typed = (AlterServerConfigurationExternalAuthenticationOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationFailoverClusterPropertyOption))
{
    var typed = (AlterServerConfigurationFailoverClusterPropertyOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationHadrClusterOption))
{
    var typed = (AlterServerConfigurationHadrClusterOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationSetBufferPoolExtensionStatement))
{
    var typed = (AlterServerConfigurationSetBufferPoolExtensionStatement)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationSetDiagnosticsLogStatement))
{
    var typed = (AlterServerConfigurationSetDiagnosticsLogStatement)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationSetExternalAuthenticationStatement))
{
    var typed = (AlterServerConfigurationSetExternalAuthenticationStatement)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationSetFailoverClusterPropertyStatement))
{
    var typed = (AlterServerConfigurationSetFailoverClusterPropertyStatement)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationSetHadrClusterStatement))
{
    var typed = (AlterServerConfigurationSetHadrClusterStatement)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationSetSoftNumaStatement))
{
    var typed = (AlterServerConfigurationSetSoftNumaStatement)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationSoftNumaOption))
{
    var typed = (AlterServerConfigurationSoftNumaOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}
if (nodeType == typeof(AlterServerConfigurationStatement))
{
    var typed = (AlterServerConfigurationStatement)node;
    if (typed.ProcessAffinityRanges is not null)
    {
        var index = 0;
        foreach (var child in typed.ProcessAffinityRanges)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ProcessAffinityRanges", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterServerRoleStatement))
{
    var typed = (AlterServerRoleStatement)node;
    if (typed.Action is not null)
    {
        yield return new StructuralChildEdge("Action", -1, typed.Action);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterServiceMasterKeyStatement))
{
    var typed = (AlterServiceMasterKeyStatement)node;
    if (typed.Account is not null)
    {
        yield return new StructuralChildEdge("Account", -1, typed.Account);
    }
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}
if (nodeType == typeof(AlterServiceStatement))
{
    var typed = (AlterServiceStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.QueueName is not null)
    {
        yield return new StructuralChildEdge("QueueName", -1, typed.QueueName);
    }
    if (typed.ServiceContracts is not null)
    {
        var index = 0;
        foreach (var child in typed.ServiceContracts)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ServiceContracts", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterSymmetricKeyStatement))
{
    var typed = (AlterSymmetricKeyStatement)node;
    if (typed.EncryptingMechanisms is not null)
    {
        var index = 0;
        foreach (var child in typed.EncryptingMechanisms)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("EncryptingMechanisms", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterTableAddClusterByStatement))
{
    var typed = (AlterTableAddClusterByStatement)node;
    if (typed.ClusterByOption is not null)
    {
        yield return new StructuralChildEdge("ClusterByOption", -1, typed.ClusterByOption);
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterTableAddTableElementStatement))
{
    var typed = (AlterTableAddTableElementStatement)node;
    if (typed.Definition is not null)
    {
        yield return new StructuralChildEdge("Definition", -1, typed.Definition);
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterTableAlterColumnStatement))
{
    var typed = (AlterTableAlterColumnStatement)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.ColumnIdentifier is not null)
    {
        yield return new StructuralChildEdge("ColumnIdentifier", -1, typed.ColumnIdentifier);
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.Encryption is not null)
    {
        yield return new StructuralChildEdge("Encryption", -1, typed.Encryption);
    }
    if (typed.MaskingFunction is not null)
    {
        yield return new StructuralChildEdge("MaskingFunction", -1, typed.MaskingFunction);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    if (typed.StorageOptions is not null)
    {
        yield return new StructuralChildEdge("StorageOptions", -1, typed.StorageOptions);
    }
    yield break;
}
if (nodeType == typeof(AlterTableAlterIndexStatement))
{
    var typed = (AlterTableAlterIndexStatement)node;
    if (typed.IndexIdentifier is not null)
    {
        yield return new StructuralChildEdge("IndexIdentifier", -1, typed.IndexIdentifier);
    }
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterTableAlterPartitionStatement))
{
    var typed = (AlterTableAlterPartitionStatement)node;
    if (typed.BoundaryValue is not null)
    {
        yield return new StructuralChildEdge("BoundaryValue", -1, typed.BoundaryValue);
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterTableChangeTrackingModificationStatement))
{
    var typed = (AlterTableChangeTrackingModificationStatement)node;
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterTableConstraintModificationStatement))
{
    var typed = (AlterTableConstraintModificationStatement)node;
    if (typed.ConstraintNames is not null)
    {
        var index = 0;
        foreach (var child in typed.ConstraintNames)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ConstraintNames", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterTableDropTableElement))
{
    var typed = (AlterTableDropTableElement)node;
    if (typed.DropClusteredConstraintOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.DropClusteredConstraintOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("DropClusteredConstraintOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(AlterTableDropTableElementStatement))
{
    var typed = (AlterTableDropTableElementStatement)node;
    if (typed.AlterTableDropTableElements is not null)
    {
        var index = 0;
        foreach (var child in typed.AlterTableDropTableElements)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("AlterTableDropTableElements", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterTableFileTableNamespaceStatement))
{
    var typed = (AlterTableFileTableNamespaceStatement)node;
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterTableRebuildStatement))
{
    var typed = (AlterTableRebuildStatement)node;
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Partition is not null)
    {
        yield return new StructuralChildEdge("Partition", -1, typed.Partition);
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterTableSetStatement))
{
    var typed = (AlterTableSetStatement)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(AlterTableSwitchStatement))
{
    var typed = (AlterTableSwitchStatement)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    if (typed.SourcePartitionNumber is not null)
    {
        yield return new StructuralChildEdge("SourcePartitionNumber", -1, typed.SourcePartitionNumber);
    }
    if (typed.TargetPartitionNumber is not null)
    {
        yield return new StructuralChildEdge("TargetPartitionNumber", -1, typed.TargetPartitionNumber);
    }
    if (typed.TargetTable is not null)
    {
        yield return new StructuralChildEdge("TargetTable", -1, typed.TargetTable);
    }
    yield break;
}
if (nodeType == typeof(AlterTableTriggerModificationStatement))
{
    var typed = (AlterTableTriggerModificationStatement)node;
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    if (typed.TriggerNames is not null)
    {
        var index = 0;
        foreach (var child in typed.TriggerNames)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TriggerNames", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterTriggerStatement))
{
    var typed = (AlterTriggerStatement)node;
    if (typed.MethodSpecifier is not null)
    {
        yield return new StructuralChildEdge("MethodSpecifier", -1, typed.MethodSpecifier);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    if (typed.TriggerActions is not null)
    {
        var index = 0;
        foreach (var child in typed.TriggerActions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TriggerActions", index, child);
            }
            index += 1;
        }
    }
    if (typed.TriggerObject is not null)
    {
        yield return new StructuralChildEdge("TriggerObject", -1, typed.TriggerObject);
    }
    yield break;
}
if (nodeType == typeof(AlterUserStatement))
{
    var typed = (AlterUserStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.UserOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.UserOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("UserOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterViewStatement))
{
    var typed = (AlterViewStatement)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    if (typed.SelectStatement is not null)
    {
        yield return new StructuralChildEdge("SelectStatement", -1, typed.SelectStatement);
    }
    if (typed.ViewOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ViewOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ViewOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterWorkloadGroupStatement))
{
    var typed = (AlterWorkloadGroupStatement)node;
    if (typed.ExternalPoolName is not null)
    {
        yield return new StructuralChildEdge("ExternalPoolName", -1, typed.ExternalPoolName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.PoolName is not null)
    {
        yield return new StructuralChildEdge("PoolName", -1, typed.PoolName);
    }
    if (typed.WorkloadGroupParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.WorkloadGroupParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("WorkloadGroupParameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(AlterXmlSchemaCollectionStatement))
{
    var typed = (AlterXmlSchemaCollectionStatement)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(ApplicationRoleOption))
{
    var typed = (ApplicationRoleOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(AssemblyEncryptionSource))
{
    var typed = (AssemblyEncryptionSource)node;
    if (typed.Assembly is not null)
    {
        yield return new StructuralChildEdge("Assembly", -1, typed.Assembly);
    }
    yield break;
}
if (nodeType == typeof(AssemblyName))
{
    var typed = (AssemblyName)node;
    if (typed.ClassName is not null)
    {
        yield return new StructuralChildEdge("ClassName", -1, typed.ClassName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}

if (nodeType == typeof(AssignmentSetClause))
{
    var typed = (AssignmentSetClause)node;
    if (typed.Column is not null)
    {
        yield return new StructuralChildEdge("Column", -1, typed.Column);
    }
    if (typed.NewValue is not null)
    {
        yield return new StructuralChildEdge("NewValue", -1, typed.NewValue);
    }
    if (typed.Variable is not null)
    {
        yield return new StructuralChildEdge("Variable", -1, typed.Variable);
    }
    yield break;
}
if (nodeType == typeof(AsymmetricKeyCreateLoginSource))
{
    var typed = (AsymmetricKeyCreateLoginSource)node;
    if (typed.Credential is not null)
    {
        yield return new StructuralChildEdge("Credential", -1, typed.Credential);
    }
    if (typed.Key is not null)
    {
        yield return new StructuralChildEdge("Key", -1, typed.Key);
    }
    yield break;
}
if (nodeType == typeof(AtTimeZoneCall))
{
    var typed = (AtTimeZoneCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.DateValue is not null)
    {
        yield return new StructuralChildEdge("DateValue", -1, typed.DateValue);
    }
    if (typed.TimeZone is not null)
    {
        yield return new StructuralChildEdge("TimeZone", -1, typed.TimeZone);
    }
    yield break;
}

if (nodeType == typeof(AuditActionSpecification))
{
    var typed = (AuditActionSpecification)node;
    if (typed.Actions is not null)
    {
        var index = 0;
        foreach (var child in typed.Actions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Actions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Principals is not null)
    {
        var index = 0;
        foreach (var child in typed.Principals)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Principals", index, child);
            }
            index += 1;
        }
    }
    if (typed.TargetObject is not null)
    {
        yield return new StructuralChildEdge("TargetObject", -1, typed.TargetObject);
    }
    yield break;
}
if (nodeType == typeof(AuditGuidAuditOption))
{
    var typed = (AuditGuidAuditOption)node;
    if (typed.Guid is not null)
    {
        yield return new StructuralChildEdge("Guid", -1, typed.Guid);
    }
    yield break;
}
if (nodeType == typeof(AuditSpecificationPart))
{
    var typed = (AuditSpecificationPart)node;
    if (typed.Details is not null)
    {
        yield return new StructuralChildEdge("Details", -1, typed.Details);
    }
    yield break;
}
if (nodeType == typeof(AuditTarget))
{
    var typed = (AuditTarget)node;
    if (typed.TargetOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.TargetOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TargetOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(AuthenticationPayloadOption))
{
    var typed = (AuthenticationPayloadOption)node;
    if (typed.Certificate is not null)
    {
        yield return new StructuralChildEdge("Certificate", -1, typed.Certificate);
    }
    yield break;
}



if (nodeType == typeof(AutomaticTuningDatabaseOption))
{
    var typed = (AutomaticTuningDatabaseOption)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}





if (nodeType == typeof(AvailabilityReplica))
{
    var typed = (AvailabilityReplica)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.ServerName is not null)
    {
        yield return new StructuralChildEdge("ServerName", -1, typed.ServerName);
    }
    yield break;
}
if (nodeType == typeof(BackupCertificateStatement))
{
    var typed = (BackupCertificateStatement)node;
    if (typed.DecryptionPassword is not null)
    {
        yield return new StructuralChildEdge("DecryptionPassword", -1, typed.DecryptionPassword);
    }
    if (typed.EncryptionPassword is not null)
    {
        yield return new StructuralChildEdge("EncryptionPassword", -1, typed.EncryptionPassword);
    }
    if (typed.File is not null)
    {
        yield return new StructuralChildEdge("File", -1, typed.File);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.PrivateKeyPath is not null)
    {
        yield return new StructuralChildEdge("PrivateKeyPath", -1, typed.PrivateKeyPath);
    }
    yield break;
}
if (nodeType == typeof(BackupDatabaseStatement))
{
    var typed = (BackupDatabaseStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.Devices is not null)
    {
        var index = 0;
        foreach (var child in typed.Devices)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Devices", index, child);
            }
            index += 1;
        }
    }
    if (typed.Files is not null)
    {
        var index = 0;
        foreach (var child in typed.Files)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Files", index, child);
            }
            index += 1;
        }
    }
    if (typed.MirrorToClauses is not null)
    {
        var index = 0;
        foreach (var child in typed.MirrorToClauses)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("MirrorToClauses", index, child);
            }
            index += 1;
        }
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(BackupEncryptionOption))
{
    var typed = (BackupEncryptionOption)node;
    if (typed.Encryptor is not null)
    {
        yield return new StructuralChildEdge("Encryptor", -1, typed.Encryptor);
    }
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(BackupMasterKeyStatement))
{
    var typed = (BackupMasterKeyStatement)node;
    if (typed.File is not null)
    {
        yield return new StructuralChildEdge("File", -1, typed.File);
    }
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}
if (nodeType == typeof(BackupOption))
{
    var typed = (BackupOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(BackupRestoreFileInfo))
{
    var typed = (BackupRestoreFileInfo)node;
    if (typed.Items is not null)
    {
        var index = 0;
        foreach (var child in typed.Items)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Items", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(BackupServiceMasterKeyStatement))
{
    var typed = (BackupServiceMasterKeyStatement)node;
    if (typed.File is not null)
    {
        yield return new StructuralChildEdge("File", -1, typed.File);
    }
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}
if (nodeType == typeof(BackupTransactionLogStatement))
{
    var typed = (BackupTransactionLogStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.Devices is not null)
    {
        var index = 0;
        foreach (var child in typed.Devices)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Devices", index, child);
            }
            index += 1;
        }
    }
    if (typed.MirrorToClauses is not null)
    {
        var index = 0;
        foreach (var child in typed.MirrorToClauses)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("MirrorToClauses", index, child);
            }
            index += 1;
        }
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(BackwardsCompatibleDropIndexClause))
{
    var typed = (BackwardsCompatibleDropIndexClause)node;
    if (typed.Index is not null)
    {
        yield return new StructuralChildEdge("Index", -1, typed.Index);
    }
    yield break;
}
if (nodeType == typeof(BeginConversationTimerStatement))
{
    var typed = (BeginConversationTimerStatement)node;
    if (typed.Handle is not null)
    {
        yield return new StructuralChildEdge("Handle", -1, typed.Handle);
    }
    if (typed.Timeout is not null)
    {
        yield return new StructuralChildEdge("Timeout", -1, typed.Timeout);
    }
    yield break;
}
if (nodeType == typeof(BeginDialogStatement))
{
    var typed = (BeginDialogStatement)node;
    if (typed.ContractName is not null)
    {
        yield return new StructuralChildEdge("ContractName", -1, typed.ContractName);
    }
    if (typed.Handle is not null)
    {
        yield return new StructuralChildEdge("Handle", -1, typed.Handle);
    }
    if (typed.InitiatorServiceName is not null)
    {
        yield return new StructuralChildEdge("InitiatorServiceName", -1, typed.InitiatorServiceName);
    }
    if (typed.InstanceSpec is not null)
    {
        yield return new StructuralChildEdge("InstanceSpec", -1, typed.InstanceSpec);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.TargetServiceName is not null)
    {
        yield return new StructuralChildEdge("TargetServiceName", -1, typed.TargetServiceName);
    }
    yield break;
}
if (nodeType == typeof(BeginEndAtomicBlockStatement))
{
    var typed = (BeginEndAtomicBlockStatement)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    yield break;
}
if (nodeType == typeof(BeginEndBlockStatement))
{
    var typed = (BeginEndBlockStatement)node;
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    yield break;
}
if (nodeType == typeof(BeginTransactionStatement))
{
    var typed = (BeginTransactionStatement)node;
    if (typed.MarkDescription is not null)
    {
        yield return new StructuralChildEdge("MarkDescription", -1, typed.MarkDescription);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(BinaryExpression))
{
    var typed = (BinaryExpression)node;
    if (typed.FirstExpression is not null)
    {
        yield return new StructuralChildEdge("FirstExpression", -1, typed.FirstExpression);
    }
    if (typed.SecondExpression is not null)
    {
        yield return new StructuralChildEdge("SecondExpression", -1, typed.SecondExpression);
    }
    yield break;
}
if (nodeType == typeof(BinaryLiteral))
{
    var typed = (BinaryLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(BinaryQueryExpression))
{
    var typed = (BinaryQueryExpression)node;
    if (typed.FirstQueryExpression is not null)
    {
        yield return new StructuralChildEdge("FirstQueryExpression", -1, typed.FirstQueryExpression);
    }
    if (typed.ForClause is not null)
    {
        yield return new StructuralChildEdge("ForClause", -1, typed.ForClause);
    }
    if (typed.OffsetClause is not null)
    {
        yield return new StructuralChildEdge("OffsetClause", -1, typed.OffsetClause);
    }
    if (typed.OrderByClause is not null)
    {
        yield return new StructuralChildEdge("OrderByClause", -1, typed.OrderByClause);
    }
    if (typed.SecondQueryExpression is not null)
    {
        yield return new StructuralChildEdge("SecondQueryExpression", -1, typed.SecondQueryExpression);
    }
    yield break;
}
if (nodeType == typeof(BooleanBinaryExpression))
{
    var typed = (BooleanBinaryExpression)node;
    if (typed.FirstExpression is not null)
    {
        yield return new StructuralChildEdge("FirstExpression", -1, typed.FirstExpression);
    }
    if (typed.SecondExpression is not null)
    {
        yield return new StructuralChildEdge("SecondExpression", -1, typed.SecondExpression);
    }
    yield break;
}
if (nodeType == typeof(BooleanComparisonExpression))
{
    var typed = (BooleanComparisonExpression)node;
    if (typed.FirstExpression is not null)
    {
        yield return new StructuralChildEdge("FirstExpression", -1, typed.FirstExpression);
    }
    if (typed.SecondExpression is not null)
    {
        yield return new StructuralChildEdge("SecondExpression", -1, typed.SecondExpression);
    }
    yield break;
}

if (nodeType == typeof(BooleanIsNullExpression))
{
    var typed = (BooleanIsNullExpression)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(BooleanNotExpression))
{
    var typed = (BooleanNotExpression)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(BooleanParenthesisExpression))
{
    var typed = (BooleanParenthesisExpression)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(BooleanTernaryExpression))
{
    var typed = (BooleanTernaryExpression)node;
    if (typed.FirstExpression is not null)
    {
        yield return new StructuralChildEdge("FirstExpression", -1, typed.FirstExpression);
    }
    if (typed.SecondExpression is not null)
    {
        yield return new StructuralChildEdge("SecondExpression", -1, typed.SecondExpression);
    }
    if (typed.ThirdExpression is not null)
    {
        yield return new StructuralChildEdge("ThirdExpression", -1, typed.ThirdExpression);
    }
    yield break;
}
if (nodeType == typeof(BoundingBoxParameter))
{
    var typed = (BoundingBoxParameter)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(BoundingBoxSpatialIndexOption))
{
    var typed = (BoundingBoxSpatialIndexOption)node;
    if (typed.BoundingBoxParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.BoundingBoxParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("BoundingBoxParameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(BrokerPriorityParameter))
{
    var typed = (BrokerPriorityParameter)node;
    if (typed.ParameterValue is not null)
    {
        yield return new StructuralChildEdge("ParameterValue", -1, typed.ParameterValue);
    }
    yield break;
}

if (nodeType == typeof(BuiltInFunctionTableReference))
{
    var typed = (BuiltInFunctionTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(BulkInsertStatement))
{
    var typed = (BulkInsertStatement)node;
    if (typed.From is not null)
    {
        yield return new StructuralChildEdge("From", -1, typed.From);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.To is not null)
    {
        yield return new StructuralChildEdge("To", -1, typed.To);
    }
    yield break;
}
if (nodeType == typeof(BulkOpenRowset))
{
    var typed = (BulkOpenRowset)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.DataFiles is not null)
    {
        var index = 0;
        foreach (var child in typed.DataFiles)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("DataFiles", index, child);
            }
            index += 1;
        }
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.WithColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.WithColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("WithColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CastCall))
{
    var typed = (CastCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.Parameter is not null)
    {
        yield return new StructuralChildEdge("Parameter", -1, typed.Parameter);
    }
    yield break;
}

if (nodeType == typeof(CellsPerObjectSpatialIndexOption))
{
    var typed = (CellsPerObjectSpatialIndexOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(CertificateCreateLoginSource))
{
    var typed = (CertificateCreateLoginSource)node;
    if (typed.Certificate is not null)
    {
        yield return new StructuralChildEdge("Certificate", -1, typed.Certificate);
    }
    if (typed.Credential is not null)
    {
        yield return new StructuralChildEdge("Credential", -1, typed.Credential);
    }
    yield break;
}
if (nodeType == typeof(CertificateOption))
{
    var typed = (CertificateOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(ChangeRetentionChangeTrackingOptionDetail))
{
    var typed = (ChangeRetentionChangeTrackingOptionDetail)node;
    if (typed.RetentionPeriod is not null)
    {
        yield return new StructuralChildEdge("RetentionPeriod", -1, typed.RetentionPeriod);
    }
    yield break;
}
if (nodeType == typeof(ChangeTableChangesTableReference))
{
    var typed = (ChangeTableChangesTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.SinceVersion is not null)
    {
        yield return new StructuralChildEdge("SinceVersion", -1, typed.SinceVersion);
    }
    if (typed.Target is not null)
    {
        yield return new StructuralChildEdge("Target", -1, typed.Target);
    }
    yield break;
}
if (nodeType == typeof(ChangeTableVersionTableReference))
{
    var typed = (ChangeTableVersionTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.PrimaryKeyColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.PrimaryKeyColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PrimaryKeyColumns", index, child);
            }
            index += 1;
        }
    }
    if (typed.PrimaryKeyValues is not null)
    {
        var index = 0;
        foreach (var child in typed.PrimaryKeyValues)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PrimaryKeyValues", index, child);
            }
            index += 1;
        }
    }
    if (typed.Target is not null)
    {
        yield return new StructuralChildEdge("Target", -1, typed.Target);
    }
    yield break;
}
if (nodeType == typeof(ChangeTrackingDatabaseOption))
{
    var typed = (ChangeTrackingDatabaseOption)node;
    if (typed.Details is not null)
    {
        var index = 0;
        foreach (var child in typed.Details)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Details", index, child);
            }
            index += 1;
        }
    }
    yield break;
}


if (nodeType == typeof(CheckConstraintDefinition))
{
    var typed = (CheckConstraintDefinition)node;
    if (typed.CheckCondition is not null)
    {
        yield return new StructuralChildEdge("CheckCondition", -1, typed.CheckCondition);
    }
    if (typed.ConstraintIdentifier is not null)
    {
        yield return new StructuralChildEdge("ConstraintIdentifier", -1, typed.ConstraintIdentifier);
    }
    yield break;
}
if (nodeType == typeof(CheckpointStatement))
{
    var typed = (CheckpointStatement)node;
    if (typed.Duration is not null)
    {
        yield return new StructuralChildEdge("Duration", -1, typed.Duration);
    }
    yield break;
}
if (nodeType == typeof(ChildObjectName))
{
    var typed = (ChildObjectName)node;
    if (typed.BaseIdentifier is not null)
    {
        yield return new StructuralChildEdge("BaseIdentifier", -1, typed.BaseIdentifier);
    }
    if (typed.ChildIdentifier is not null)
    {
        yield return new StructuralChildEdge("ChildIdentifier", -1, typed.ChildIdentifier);
    }
    if (typed.DatabaseIdentifier is not null)
    {
        yield return new StructuralChildEdge("DatabaseIdentifier", -1, typed.DatabaseIdentifier);
    }
    if (typed.Identifiers is not null)
    {
        var index = 0;
        foreach (var child in typed.Identifiers)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Identifiers", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaIdentifier is not null)
    {
        yield return new StructuralChildEdge("SchemaIdentifier", -1, typed.SchemaIdentifier);
    }
    if (typed.ServerIdentifier is not null)
    {
        yield return new StructuralChildEdge("ServerIdentifier", -1, typed.ServerIdentifier);
    }
    yield break;
}
if (nodeType == typeof(ClassifierEndTimeOption))
{
    var typed = (ClassifierEndTimeOption)node;
    if (typed.Time is not null)
    {
        yield return new StructuralChildEdge("Time", -1, typed.Time);
    }
    yield break;
}

if (nodeType == typeof(ClassifierMemberNameOption))
{
    var typed = (ClassifierMemberNameOption)node;
    if (typed.MemberName is not null)
    {
        yield return new StructuralChildEdge("MemberName", -1, typed.MemberName);
    }
    yield break;
}
if (nodeType == typeof(ClassifierStartTimeOption))
{
    var typed = (ClassifierStartTimeOption)node;
    if (typed.Time is not null)
    {
        yield return new StructuralChildEdge("Time", -1, typed.Time);
    }
    yield break;
}
if (nodeType == typeof(ClassifierWlmContextOption))
{
    var typed = (ClassifierWlmContextOption)node;
    if (typed.WlmContext is not null)
    {
        yield return new StructuralChildEdge("WlmContext", -1, typed.WlmContext);
    }
    yield break;
}
if (nodeType == typeof(ClassifierWlmLabelOption))
{
    var typed = (ClassifierWlmLabelOption)node;
    if (typed.WlmLabel is not null)
    {
        yield return new StructuralChildEdge("WlmLabel", -1, typed.WlmLabel);
    }
    yield break;
}
if (nodeType == typeof(ClassifierWorkloadGroupOption))
{
    var typed = (ClassifierWorkloadGroupOption)node;
    if (typed.WorkloadGroupName is not null)
    {
        yield return new StructuralChildEdge("WorkloadGroupName", -1, typed.WorkloadGroupName);
    }
    yield break;
}
if (nodeType == typeof(CloseCursorStatement))
{
    var typed = (CloseCursorStatement)node;
    if (typed.Cursor is not null)
    {
        yield return new StructuralChildEdge("Cursor", -1, typed.Cursor);
    }
    yield break;
}

if (nodeType == typeof(CloseSymmetricKeyStatement))
{
    var typed = (CloseSymmetricKeyStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(ClusterByTableOption))
{
    var typed = (ClusterByTableOption)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CoalesceExpression))
{
    var typed = (CoalesceExpression)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Expressions is not null)
    {
        var index = 0;
        foreach (var child in typed.Expressions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Expressions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ColumnDefinition))
{
    var typed = (ColumnDefinition)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.ColumnIdentifier is not null)
    {
        yield return new StructuralChildEdge("ColumnIdentifier", -1, typed.ColumnIdentifier);
    }
    if (typed.ComputedColumnExpression is not null)
    {
        yield return new StructuralChildEdge("ComputedColumnExpression", -1, typed.ComputedColumnExpression);
    }
    if (typed.Constraints is not null)
    {
        var index = 0;
        foreach (var child in typed.Constraints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Constraints", index, child);
            }
            index += 1;
        }
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.DefaultConstraint is not null)
    {
        yield return new StructuralChildEdge("DefaultConstraint", -1, typed.DefaultConstraint);
    }
    if (typed.Encryption is not null)
    {
        yield return new StructuralChildEdge("Encryption", -1, typed.Encryption);
    }
    if (typed.IdentityOptions is not null)
    {
        yield return new StructuralChildEdge("IdentityOptions", -1, typed.IdentityOptions);
    }
    if (typed.Index is not null)
    {
        yield return new StructuralChildEdge("Index", -1, typed.Index);
    }
    if (typed.MaskingFunction is not null)
    {
        yield return new StructuralChildEdge("MaskingFunction", -1, typed.MaskingFunction);
    }
    if (typed.StorageOptions is not null)
    {
        yield return new StructuralChildEdge("StorageOptions", -1, typed.StorageOptions);
    }
    yield break;
}
if (nodeType == typeof(ColumnDefinitionBase))
{
    var typed = (ColumnDefinitionBase)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.ColumnIdentifier is not null)
    {
        yield return new StructuralChildEdge("ColumnIdentifier", -1, typed.ColumnIdentifier);
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    yield break;
}
if (nodeType == typeof(ColumnEncryptionAlgorithmNameParameter))
{
    var typed = (ColumnEncryptionAlgorithmNameParameter)node;
    if (typed.Algorithm is not null)
    {
        yield return new StructuralChildEdge("Algorithm", -1, typed.Algorithm);
    }
    yield break;
}
if (nodeType == typeof(ColumnEncryptionAlgorithmParameter))
{
    var typed = (ColumnEncryptionAlgorithmParameter)node;
    if (typed.EncryptionAlgorithm is not null)
    {
        yield return new StructuralChildEdge("EncryptionAlgorithm", -1, typed.EncryptionAlgorithm);
    }
    yield break;
}
if (nodeType == typeof(ColumnEncryptionDefinition))
{
    var typed = (ColumnEncryptionDefinition)node;
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ColumnEncryptionKeyNameParameter))
{
    var typed = (ColumnEncryptionKeyNameParameter)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(ColumnEncryptionKeyValue))
{
    var typed = (ColumnEncryptionKeyValue)node;
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(ColumnMasterKeyEnclaveComputationsParameter))
{
    var typed = (ColumnMasterKeyEnclaveComputationsParameter)node;
    if (typed.Signature is not null)
    {
        yield return new StructuralChildEdge("Signature", -1, typed.Signature);
    }
    yield break;
}
if (nodeType == typeof(ColumnMasterKeyNameParameter))
{
    var typed = (ColumnMasterKeyNameParameter)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(ColumnMasterKeyPathParameter))
{
    var typed = (ColumnMasterKeyPathParameter)node;
    if (typed.Path is not null)
    {
        yield return new StructuralChildEdge("Path", -1, typed.Path);
    }
    yield break;
}
if (nodeType == typeof(ColumnMasterKeyStoreProviderNameParameter))
{
    var typed = (ColumnMasterKeyStoreProviderNameParameter)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(ColumnReferenceExpression))
{
    var typed = (ColumnReferenceExpression)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.MultiPartIdentifier is not null)
    {
        yield return new StructuralChildEdge("MultiPartIdentifier", -1, typed.MultiPartIdentifier);
    }
    yield break;
}

if (nodeType == typeof(ColumnWithSortOrder))
{
    var typed = (ColumnWithSortOrder)node;
    if (typed.Column is not null)
    {
        yield return new StructuralChildEdge("Column", -1, typed.Column);
    }
    yield break;
}

if (nodeType == typeof(CommitTransactionStatement))
{
    var typed = (CommitTransactionStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CommonTableExpression))
{
    var typed = (CommonTableExpression)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.ExpressionName is not null)
    {
        yield return new StructuralChildEdge("ExpressionName", -1, typed.ExpressionName);
    }
    if (typed.QueryExpression is not null)
    {
        yield return new StructuralChildEdge("QueryExpression", -1, typed.QueryExpression);
    }
    if (typed.WithCtesAndXmlNamespaces is not null)
    {
        yield return new StructuralChildEdge("WithCtesAndXmlNamespaces", -1, typed.WithCtesAndXmlNamespaces);
    }
    yield break;
}
if (nodeType == typeof(CompositeGroupingSpecification))
{
    var typed = (CompositeGroupingSpecification)node;
    if (typed.Items is not null)
    {
        var index = 0;
        foreach (var child in typed.Items)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Items", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CompressionDelayIndexOption))
{
    var typed = (CompressionDelayIndexOption)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}

if (nodeType == typeof(CompressionPartitionRange))
{
    var typed = (CompressionPartitionRange)node;
    if (typed.From is not null)
    {
        yield return new StructuralChildEdge("From", -1, typed.From);
    }
    if (typed.To is not null)
    {
        yield return new StructuralChildEdge("To", -1, typed.To);
    }
    yield break;
}
if (nodeType == typeof(ComputeClause))
{
    var typed = (ComputeClause)node;
    if (typed.ByExpressions is not null)
    {
        var index = 0;
        foreach (var child in typed.ByExpressions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ByExpressions", index, child);
            }
            index += 1;
        }
    }
    if (typed.ComputeFunctions is not null)
    {
        var index = 0;
        foreach (var child in typed.ComputeFunctions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ComputeFunctions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ComputeFunction))
{
    var typed = (ComputeFunction)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}


if (nodeType == typeof(ContractMessage))
{
    var typed = (ContractMessage)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(ConvertCall))
{
    var typed = (ConvertCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.Parameter is not null)
    {
        yield return new StructuralChildEdge("Parameter", -1, typed.Parameter);
    }
    if (typed.Style is not null)
    {
        yield return new StructuralChildEdge("Style", -1, typed.Style);
    }
    yield break;
}
if (nodeType == typeof(CopyColumnOption))
{
    var typed = (CopyColumnOption)node;
    if (typed.ColumnName is not null)
    {
        yield return new StructuralChildEdge("ColumnName", -1, typed.ColumnName);
    }
    if (typed.DefaultValue is not null)
    {
        yield return new StructuralChildEdge("DefaultValue", -1, typed.DefaultValue);
    }
    if (typed.FieldNumber is not null)
    {
        yield return new StructuralChildEdge("FieldNumber", -1, typed.FieldNumber);
    }
    yield break;
}
if (nodeType == typeof(CopyCredentialOption))
{
    var typed = (CopyCredentialOption)node;
    if (typed.Identity is not null)
    {
        yield return new StructuralChildEdge("Identity", -1, typed.Identity);
    }
    if (typed.Secret is not null)
    {
        yield return new StructuralChildEdge("Secret", -1, typed.Secret);
    }
    yield break;
}
if (nodeType == typeof(CopyOption))
{
    var typed = (CopyOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(CopyStatement))
{
    var typed = (CopyStatement)node;
    if (typed.From is not null)
    {
        var index = 0;
        foreach (var child in typed.From)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("From", index, child);
            }
            index += 1;
        }
    }
    if (typed.Into is not null)
    {
        yield return new StructuralChildEdge("Into", -1, typed.Into);
    }
    if (typed.OptimizerHints is not null)
    {
        var index = 0;
        foreach (var child in typed.OptimizerHints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OptimizerHints", index, child);
            }
            index += 1;
        }
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateAggregateStatement))
{
    var typed = (CreateAggregateStatement)node;
    if (typed.AssemblyName is not null)
    {
        yield return new StructuralChildEdge("AssemblyName", -1, typed.AssemblyName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ReturnType is not null)
    {
        yield return new StructuralChildEdge("ReturnType", -1, typed.ReturnType);
    }
    yield break;
}
if (nodeType == typeof(CreateApplicationRoleStatement))
{
    var typed = (CreateApplicationRoleStatement)node;
    if (typed.ApplicationRoleOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ApplicationRoleOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ApplicationRoleOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateAssemblyStatement))
{
    var typed = (CreateAssemblyStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateAsymmetricKeyStatement))
{
    var typed = (CreateAsymmetricKeyStatement)node;
    if (typed.KeySource is not null)
    {
        yield return new StructuralChildEdge("KeySource", -1, typed.KeySource);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}
if (nodeType == typeof(CreateAvailabilityGroupStatement))
{
    var typed = (CreateAvailabilityGroupStatement)node;
    if (typed.Databases is not null)
    {
        var index = 0;
        foreach (var child in typed.Databases)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Databases", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Replicas is not null)
    {
        var index = 0;
        foreach (var child in typed.Replicas)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Replicas", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateBrokerPriorityStatement))
{
    var typed = (CreateBrokerPriorityStatement)node;
    if (typed.BrokerPriorityParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.BrokerPriorityParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("BrokerPriorityParameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateCertificateStatement))
{
    var typed = (CreateCertificateStatement)node;
    if (typed.CertificateOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.CertificateOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("CertificateOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.CertificateSource is not null)
    {
        yield return new StructuralChildEdge("CertificateSource", -1, typed.CertificateSource);
    }
    if (typed.DecryptionPassword is not null)
    {
        yield return new StructuralChildEdge("DecryptionPassword", -1, typed.DecryptionPassword);
    }
    if (typed.EncryptionPassword is not null)
    {
        yield return new StructuralChildEdge("EncryptionPassword", -1, typed.EncryptionPassword);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.PrivateKeyPath is not null)
    {
        yield return new StructuralChildEdge("PrivateKeyPath", -1, typed.PrivateKeyPath);
    }
    yield break;
}
if (nodeType == typeof(CreateColumnEncryptionKeyStatement))
{
    var typed = (CreateColumnEncryptionKeyStatement)node;
    if (typed.ColumnEncryptionKeyValues is not null)
    {
        var index = 0;
        foreach (var child in typed.ColumnEncryptionKeyValues)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ColumnEncryptionKeyValues", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateColumnMasterKeyStatement))
{
    var typed = (CreateColumnMasterKeyStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateColumnStoreIndexStatement))
{
    var typed = (CreateColumnStoreIndexStatement)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.FilterPredicate is not null)
    {
        yield return new StructuralChildEdge("FilterPredicate", -1, typed.FilterPredicate);
    }
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnFileGroupOrPartitionScheme is not null)
    {
        yield return new StructuralChildEdge("OnFileGroupOrPartitionScheme", -1, typed.OnFileGroupOrPartitionScheme);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    if (typed.OrderedColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.OrderedColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OrderedColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateContractStatement))
{
    var typed = (CreateContractStatement)node;
    if (typed.Messages is not null)
    {
        var index = 0;
        foreach (var child in typed.Messages)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Messages", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    yield break;
}
if (nodeType == typeof(CreateCredentialStatement))
{
    var typed = (CreateCredentialStatement)node;
    if (typed.CryptographicProviderName is not null)
    {
        yield return new StructuralChildEdge("CryptographicProviderName", -1, typed.CryptographicProviderName);
    }
    if (typed.Identity is not null)
    {
        yield return new StructuralChildEdge("Identity", -1, typed.Identity);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Secret is not null)
    {
        yield return new StructuralChildEdge("Secret", -1, typed.Secret);
    }
    yield break;
}
if (nodeType == typeof(CreateCryptographicProviderStatement))
{
    var typed = (CreateCryptographicProviderStatement)node;
    if (typed.File is not null)
    {
        yield return new StructuralChildEdge("File", -1, typed.File);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateDatabaseAuditSpecificationStatement))
{
    var typed = (CreateDatabaseAuditSpecificationStatement)node;
    if (typed.AuditName is not null)
    {
        yield return new StructuralChildEdge("AuditName", -1, typed.AuditName);
    }
    if (typed.Parts is not null)
    {
        var index = 0;
        foreach (var child in typed.Parts)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parts", index, child);
            }
            index += 1;
        }
    }
    if (typed.SpecificationName is not null)
    {
        yield return new StructuralChildEdge("SpecificationName", -1, typed.SpecificationName);
    }
    yield break;
}
if (nodeType == typeof(CreateDatabaseEncryptionKeyStatement))
{
    var typed = (CreateDatabaseEncryptionKeyStatement)node;
    if (typed.Encryptor is not null)
    {
        yield return new StructuralChildEdge("Encryptor", -1, typed.Encryptor);
    }
    yield break;
}
if (nodeType == typeof(CreateDatabaseStatement))
{
    var typed = (CreateDatabaseStatement)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Containment is not null)
    {
        yield return new StructuralChildEdge("Containment", -1, typed.Containment);
    }
    if (typed.CopyOf is not null)
    {
        yield return new StructuralChildEdge("CopyOf", -1, typed.CopyOf);
    }
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.DatabaseSnapshot is not null)
    {
        yield return new StructuralChildEdge("DatabaseSnapshot", -1, typed.DatabaseSnapshot);
    }
    if (typed.FileGroups is not null)
    {
        var index = 0;
        foreach (var child in typed.FileGroups)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("FileGroups", index, child);
            }
            index += 1;
        }
    }
    if (typed.LogOn is not null)
    {
        var index = 0;
        foreach (var child in typed.LogOn)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("LogOn", index, child);
            }
            index += 1;
        }
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateDefaultStatement))
{
    var typed = (CreateDefaultStatement)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateEndpointStatement))
{
    var typed = (CreateEndpointStatement)node;
    if (typed.Affinity is not null)
    {
        yield return new StructuralChildEdge("Affinity", -1, typed.Affinity);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.PayloadOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.PayloadOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PayloadOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.ProtocolOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ProtocolOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ProtocolOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateEventNotificationStatement))
{
    var typed = (CreateEventNotificationStatement)node;
    if (typed.BrokerInstanceSpecifier is not null)
    {
        yield return new StructuralChildEdge("BrokerInstanceSpecifier", -1, typed.BrokerInstanceSpecifier);
    }
    if (typed.BrokerService is not null)
    {
        yield return new StructuralChildEdge("BrokerService", -1, typed.BrokerService);
    }
    if (typed.EventTypeGroups is not null)
    {
        var index = 0;
        foreach (var child in typed.EventTypeGroups)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("EventTypeGroups", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Scope is not null)
    {
        yield return new StructuralChildEdge("Scope", -1, typed.Scope);
    }
    yield break;
}
if (nodeType == typeof(CreateEventSessionStatement))
{
    var typed = (CreateEventSessionStatement)node;
    if (typed.EventDeclarations is not null)
    {
        var index = 0;
        foreach (var child in typed.EventDeclarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("EventDeclarations", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.SessionOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.SessionOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SessionOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.TargetDeclarations is not null)
    {
        var index = 0;
        foreach (var child in typed.TargetDeclarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TargetDeclarations", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateExternalDataSourceStatement))
{
    var typed = (CreateExternalDataSourceStatement)node;
    if (typed.ExternalDataSourceOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalDataSourceOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalDataSourceOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Location is not null)
    {
        yield return new StructuralChildEdge("Location", -1, typed.Location);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateExternalFileFormatStatement))
{
    var typed = (CreateExternalFileFormatStatement)node;
    if (typed.ExternalFileFormatOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalFileFormatOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalFileFormatOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateExternalFunctionStatement))
{
    var typed = (CreateExternalFunctionStatement)node;
    if (typed.ExternalName is not null)
    {
        yield return new StructuralChildEdge("ExternalName", -1, typed.ExternalName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ReturnType is not null)
    {
        yield return new StructuralChildEdge("ReturnType", -1, typed.ReturnType);
    }
    yield break;
}
if (nodeType == typeof(CreateExternalLanguageStatement))
{
    var typed = (CreateExternalLanguageStatement)node;
    if (typed.ExternalLanguageFiles is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalLanguageFiles)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalLanguageFiles", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    yield break;
}
if (nodeType == typeof(CreateExternalLibraryStatement))
{
    var typed = (CreateExternalLibraryStatement)node;
    if (typed.ExternalLibraryFiles is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalLibraryFiles)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalLibraryFiles", index, child);
            }
            index += 1;
        }
    }
    if (typed.Language is not null)
    {
        yield return new StructuralChildEdge("Language", -1, typed.Language);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    yield break;
}
if (nodeType == typeof(CreateExternalModelStatement))
{
    var typed = (CreateExternalModelStatement)node;
    if (typed.ApiFormat is not null)
    {
        yield return new StructuralChildEdge("ApiFormat", -1, typed.ApiFormat);
    }
    if (typed.Credential is not null)
    {
        yield return new StructuralChildEdge("Credential", -1, typed.Credential);
    }
    if (typed.LocalRuntimePath is not null)
    {
        yield return new StructuralChildEdge("LocalRuntimePath", -1, typed.LocalRuntimePath);
    }
    if (typed.Location is not null)
    {
        yield return new StructuralChildEdge("Location", -1, typed.Location);
    }
    if (typed.ModelName is not null)
    {
        yield return new StructuralChildEdge("ModelName", -1, typed.ModelName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.Parameters is not null)
    {
        yield return new StructuralChildEdge("Parameters", -1, typed.Parameters);
    }
    yield break;
}
if (nodeType == typeof(CreateExternalResourcePoolStatement))
{
    var typed = (CreateExternalResourcePoolStatement)node;
    if (typed.ExternalResourcePoolParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalResourcePoolParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalResourcePoolParameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateExternalStreamStatement))
{
    var typed = (CreateExternalStreamStatement)node;
    if (typed.ExternalStreamOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalStreamOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalStreamOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.InputOptions is not null)
    {
        yield return new StructuralChildEdge("InputOptions", -1, typed.InputOptions);
    }
    if (typed.Location is not null)
    {
        yield return new StructuralChildEdge("Location", -1, typed.Location);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OutputOptions is not null)
    {
        yield return new StructuralChildEdge("OutputOptions", -1, typed.OutputOptions);
    }
    yield break;
}
if (nodeType == typeof(CreateExternalStreamingJobStatement))
{
    var typed = (CreateExternalStreamingJobStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Statement is not null)
    {
        yield return new StructuralChildEdge("Statement", -1, typed.Statement);
    }
    yield break;
}
if (nodeType == typeof(CreateExternalTableStatement))
{
    var typed = (CreateExternalTableStatement)node;
    if (typed.ColumnDefinitions is not null)
    {
        var index = 0;
        foreach (var child in typed.ColumnDefinitions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ColumnDefinitions", index, child);
            }
            index += 1;
        }
    }
    if (typed.DataSource is not null)
    {
        yield return new StructuralChildEdge("DataSource", -1, typed.DataSource);
    }
    if (typed.ExternalTableOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalTableOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalTableOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    if (typed.SelectStatement is not null)
    {
        yield return new StructuralChildEdge("SelectStatement", -1, typed.SelectStatement);
    }
    yield break;
}
if (nodeType == typeof(CreateFederationStatement))
{
    var typed = (CreateFederationStatement)node;
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.DistributionName is not null)
    {
        yield return new StructuralChildEdge("DistributionName", -1, typed.DistributionName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateFullTextCatalogStatement))
{
    var typed = (CreateFullTextCatalogStatement)node;
    if (typed.FileGroup is not null)
    {
        yield return new StructuralChildEdge("FileGroup", -1, typed.FileGroup);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.Path is not null)
    {
        yield return new StructuralChildEdge("Path", -1, typed.Path);
    }
    yield break;
}
if (nodeType == typeof(CreateFullTextIndexStatement))
{
    var typed = (CreateFullTextIndexStatement)node;
    if (typed.CatalogAndFileGroup is not null)
    {
        yield return new StructuralChildEdge("CatalogAndFileGroup", -1, typed.CatalogAndFileGroup);
    }
    if (typed.FullTextIndexColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.FullTextIndexColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("FullTextIndexColumns", index, child);
            }
            index += 1;
        }
    }
    if (typed.KeyIndexName is not null)
    {
        yield return new StructuralChildEdge("KeyIndexName", -1, typed.KeyIndexName);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateFullTextStopListStatement))
{
    var typed = (CreateFullTextStopListStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.SourceStopListName is not null)
    {
        yield return new StructuralChildEdge("SourceStopListName", -1, typed.SourceStopListName);
    }
    yield break;
}
if (nodeType == typeof(CreateFunctionStatement))
{
    var typed = (CreateFunctionStatement)node;
    if (typed.MethodSpecifier is not null)
    {
        yield return new StructuralChildEdge("MethodSpecifier", -1, typed.MethodSpecifier);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.OrderHint is not null)
    {
        yield return new StructuralChildEdge("OrderHint", -1, typed.OrderHint);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ReturnType is not null)
    {
        yield return new StructuralChildEdge("ReturnType", -1, typed.ReturnType);
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    yield break;
}
if (nodeType == typeof(CreateIndexStatement))
{
    var typed = (CreateIndexStatement)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.FileStreamOn is not null)
    {
        yield return new StructuralChildEdge("FileStreamOn", -1, typed.FileStreamOn);
    }
    if (typed.FilterPredicate is not null)
    {
        yield return new StructuralChildEdge("FilterPredicate", -1, typed.FilterPredicate);
    }
    if (typed.IncludeColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.IncludeColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IncludeColumns", index, child);
            }
            index += 1;
        }
    }
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnFileGroupOrPartitionScheme is not null)
    {
        yield return new StructuralChildEdge("OnFileGroupOrPartitionScheme", -1, typed.OnFileGroupOrPartitionScheme);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    yield break;
}
if (nodeType == typeof(CreateJsonIndexStatement))
{
    var typed = (CreateJsonIndexStatement)node;
    if (typed.ForJsonPaths is not null)
    {
        var index = 0;
        foreach (var child in typed.ForJsonPaths)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ForJsonPaths", index, child);
            }
            index += 1;
        }
    }
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.JsonColumn is not null)
    {
        yield return new StructuralChildEdge("JsonColumn", -1, typed.JsonColumn);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    yield break;
}
if (nodeType == typeof(CreateLoginStatement))
{
    var typed = (CreateLoginStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Source is not null)
    {
        yield return new StructuralChildEdge("Source", -1, typed.Source);
    }
    yield break;
}
if (nodeType == typeof(CreateMasterKeyStatement))
{
    var typed = (CreateMasterKeyStatement)node;
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}
if (nodeType == typeof(CreateMessageTypeStatement))
{
    var typed = (CreateMessageTypeStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.XmlSchemaCollectionName is not null)
    {
        yield return new StructuralChildEdge("XmlSchemaCollectionName", -1, typed.XmlSchemaCollectionName);
    }
    yield break;
}
if (nodeType == typeof(CreateOrAlterExternalFunctionStatement))
{
    var typed = (CreateOrAlterExternalFunctionStatement)node;
    if (typed.ExternalName is not null)
    {
        yield return new StructuralChildEdge("ExternalName", -1, typed.ExternalName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ReturnType is not null)
    {
        yield return new StructuralChildEdge("ReturnType", -1, typed.ReturnType);
    }
    yield break;
}
if (nodeType == typeof(CreateOrAlterFunctionStatement))
{
    var typed = (CreateOrAlterFunctionStatement)node;
    if (typed.MethodSpecifier is not null)
    {
        yield return new StructuralChildEdge("MethodSpecifier", -1, typed.MethodSpecifier);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.OrderHint is not null)
    {
        yield return new StructuralChildEdge("OrderHint", -1, typed.OrderHint);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ReturnType is not null)
    {
        yield return new StructuralChildEdge("ReturnType", -1, typed.ReturnType);
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    yield break;
}
if (nodeType == typeof(CreateOrAlterProcedureStatement))
{
    var typed = (CreateOrAlterProcedureStatement)node;
    if (typed.MethodSpecifier is not null)
    {
        yield return new StructuralChildEdge("MethodSpecifier", -1, typed.MethodSpecifier);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ProcedureReference is not null)
    {
        yield return new StructuralChildEdge("ProcedureReference", -1, typed.ProcedureReference);
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    yield break;
}
if (nodeType == typeof(CreateOrAlterTriggerStatement))
{
    var typed = (CreateOrAlterTriggerStatement)node;
    if (typed.MethodSpecifier is not null)
    {
        yield return new StructuralChildEdge("MethodSpecifier", -1, typed.MethodSpecifier);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    if (typed.TriggerActions is not null)
    {
        var index = 0;
        foreach (var child in typed.TriggerActions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TriggerActions", index, child);
            }
            index += 1;
        }
    }
    if (typed.TriggerObject is not null)
    {
        yield return new StructuralChildEdge("TriggerObject", -1, typed.TriggerObject);
    }
    yield break;
}
if (nodeType == typeof(CreateOrAlterViewStatement))
{
    var typed = (CreateOrAlterViewStatement)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    if (typed.SelectStatement is not null)
    {
        yield return new StructuralChildEdge("SelectStatement", -1, typed.SelectStatement);
    }
    if (typed.ViewOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ViewOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ViewOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreatePartitionFunctionStatement))
{
    var typed = (CreatePartitionFunctionStatement)node;
    if (typed.BoundaryValues is not null)
    {
        var index = 0;
        foreach (var child in typed.BoundaryValues)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("BoundaryValues", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.ParameterType is not null)
    {
        yield return new StructuralChildEdge("ParameterType", -1, typed.ParameterType);
    }
    yield break;
}
if (nodeType == typeof(CreatePartitionSchemeStatement))
{
    var typed = (CreatePartitionSchemeStatement)node;
    if (typed.FileGroups is not null)
    {
        var index = 0;
        foreach (var child in typed.FileGroups)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("FileGroups", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.PartitionFunction is not null)
    {
        yield return new StructuralChildEdge("PartitionFunction", -1, typed.PartitionFunction);
    }
    yield break;
}
if (nodeType == typeof(CreateProcedureStatement))
{
    var typed = (CreateProcedureStatement)node;
    if (typed.MethodSpecifier is not null)
    {
        yield return new StructuralChildEdge("MethodSpecifier", -1, typed.MethodSpecifier);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ProcedureReference is not null)
    {
        yield return new StructuralChildEdge("ProcedureReference", -1, typed.ProcedureReference);
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    yield break;
}
if (nodeType == typeof(CreateQueueStatement))
{
    var typed = (CreateQueueStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnFileGroup is not null)
    {
        yield return new StructuralChildEdge("OnFileGroup", -1, typed.OnFileGroup);
    }
    if (typed.QueueOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.QueueOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("QueueOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateRemoteServiceBindingStatement))
{
    var typed = (CreateRemoteServiceBindingStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.Service is not null)
    {
        yield return new StructuralChildEdge("Service", -1, typed.Service);
    }
    yield break;
}
if (nodeType == typeof(CreateResourcePoolStatement))
{
    var typed = (CreateResourcePoolStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.ResourcePoolParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.ResourcePoolParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ResourcePoolParameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateRoleStatement))
{
    var typed = (CreateRoleStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    yield break;
}
if (nodeType == typeof(CreateRouteStatement))
{
    var typed = (CreateRouteStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.RouteOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.RouteOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("RouteOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateRuleStatement))
{
    var typed = (CreateRuleStatement)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateSchemaStatement))
{
    var typed = (CreateSchemaStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    yield break;
}
if (nodeType == typeof(CreateSearchPropertyListStatement))
{
    var typed = (CreateSearchPropertyListStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.SourceSearchPropertyList is not null)
    {
        yield return new StructuralChildEdge("SourceSearchPropertyList", -1, typed.SourceSearchPropertyList);
    }
    yield break;
}
if (nodeType == typeof(CreateSecurityPolicyStatement))
{
    var typed = (CreateSecurityPolicyStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.SecurityPolicyOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.SecurityPolicyOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SecurityPolicyOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.SecurityPredicateActions is not null)
    {
        var index = 0;
        foreach (var child in typed.SecurityPredicateActions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SecurityPredicateActions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateSelectiveXmlIndexStatement))
{
    var typed = (CreateSelectiveXmlIndexStatement)node;
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    if (typed.PathName is not null)
    {
        yield return new StructuralChildEdge("PathName", -1, typed.PathName);
    }
    if (typed.PromotedPaths is not null)
    {
        var index = 0;
        foreach (var child in typed.PromotedPaths)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PromotedPaths", index, child);
            }
            index += 1;
        }
    }
    if (typed.UsingXmlIndexName is not null)
    {
        yield return new StructuralChildEdge("UsingXmlIndexName", -1, typed.UsingXmlIndexName);
    }
    if (typed.XmlColumn is not null)
    {
        yield return new StructuralChildEdge("XmlColumn", -1, typed.XmlColumn);
    }
    if (typed.XmlNamespaces is not null)
    {
        yield return new StructuralChildEdge("XmlNamespaces", -1, typed.XmlNamespaces);
    }
    yield break;
}
if (nodeType == typeof(CreateSemanticIndexStatement))
{
    var typed = (CreateSemanticIndexStatement)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.ExternalModelName is not null)
    {
        yield return new StructuralChildEdge("ExternalModelName", -1, typed.ExternalModelName);
    }
    if (typed.ExternalModelParameters is not null)
    {
        yield return new StructuralChildEdge("ExternalModelParameters", -1, typed.ExternalModelParameters);
    }
    if (typed.FulltextStoplistOption is not null)
    {
        yield return new StructuralChildEdge("FulltextStoplistOption", -1, typed.FulltextStoplistOption);
    }
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnFileGroupOrPartitionScheme is not null)
    {
        yield return new StructuralChildEdge("OnFileGroupOrPartitionScheme", -1, typed.OnFileGroupOrPartitionScheme);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    if (typed.VectorIndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.VectorIndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("VectorIndexOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateSequenceStatement))
{
    var typed = (CreateSequenceStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.SequenceOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.SequenceOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SequenceOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateServerAuditSpecificationStatement))
{
    var typed = (CreateServerAuditSpecificationStatement)node;
    if (typed.AuditName is not null)
    {
        yield return new StructuralChildEdge("AuditName", -1, typed.AuditName);
    }
    if (typed.Parts is not null)
    {
        var index = 0;
        foreach (var child in typed.Parts)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parts", index, child);
            }
            index += 1;
        }
    }
    if (typed.SpecificationName is not null)
    {
        yield return new StructuralChildEdge("SpecificationName", -1, typed.SpecificationName);
    }
    yield break;
}
if (nodeType == typeof(CreateServerAuditStatement))
{
    var typed = (CreateServerAuditStatement)node;
    if (typed.AuditName is not null)
    {
        yield return new StructuralChildEdge("AuditName", -1, typed.AuditName);
    }
    if (typed.AuditTarget is not null)
    {
        yield return new StructuralChildEdge("AuditTarget", -1, typed.AuditTarget);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.PredicateExpression is not null)
    {
        yield return new StructuralChildEdge("PredicateExpression", -1, typed.PredicateExpression);
    }
    yield break;
}
if (nodeType == typeof(CreateServerRoleStatement))
{
    var typed = (CreateServerRoleStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    yield break;
}
if (nodeType == typeof(CreateServiceStatement))
{
    var typed = (CreateServiceStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.QueueName is not null)
    {
        yield return new StructuralChildEdge("QueueName", -1, typed.QueueName);
    }
    if (typed.ServiceContracts is not null)
    {
        var index = 0;
        foreach (var child in typed.ServiceContracts)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ServiceContracts", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateSpatialIndexStatement))
{
    var typed = (CreateSpatialIndexStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Object is not null)
    {
        yield return new StructuralChildEdge("Object", -1, typed.Object);
    }
    if (typed.OnFileGroup is not null)
    {
        yield return new StructuralChildEdge("OnFileGroup", -1, typed.OnFileGroup);
    }
    if (typed.SpatialColumnName is not null)
    {
        yield return new StructuralChildEdge("SpatialColumnName", -1, typed.SpatialColumnName);
    }
    if (typed.SpatialIndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.SpatialIndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SpatialIndexOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateStatisticsStatement))
{
    var typed = (CreateStatisticsStatement)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.FilterPredicate is not null)
    {
        yield return new StructuralChildEdge("FilterPredicate", -1, typed.FilterPredicate);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    if (typed.StatisticsOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.StatisticsOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("StatisticsOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateSymmetricKeyStatement))
{
    var typed = (CreateSymmetricKeyStatement)node;
    if (typed.EncryptingMechanisms is not null)
    {
        var index = 0;
        foreach (var child in typed.EncryptingMechanisms)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("EncryptingMechanisms", index, child);
            }
            index += 1;
        }
    }
    if (typed.KeyOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.KeyOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("KeyOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    if (typed.Provider is not null)
    {
        yield return new StructuralChildEdge("Provider", -1, typed.Provider);
    }
    yield break;
}
if (nodeType == typeof(CreateSynonymStatement))
{
    var typed = (CreateSynonymStatement)node;
    if (typed.ForName is not null)
    {
        yield return new StructuralChildEdge("ForName", -1, typed.ForName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateTableStatement))
{
    var typed = (CreateTableStatement)node;
    if (typed.ClonePointInTime is not null)
    {
        yield return new StructuralChildEdge("ClonePointInTime", -1, typed.ClonePointInTime);
    }
    if (typed.CloneSource is not null)
    {
        yield return new StructuralChildEdge("CloneSource", -1, typed.CloneSource);
    }
    if (typed.CtasColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.CtasColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("CtasColumns", index, child);
            }
            index += 1;
        }
    }
    if (typed.Definition is not null)
    {
        yield return new StructuralChildEdge("Definition", -1, typed.Definition);
    }
    if (typed.FederationScheme is not null)
    {
        yield return new StructuralChildEdge("FederationScheme", -1, typed.FederationScheme);
    }
    if (typed.FileStreamOn is not null)
    {
        yield return new StructuralChildEdge("FileStreamOn", -1, typed.FileStreamOn);
    }
    if (typed.OnFileGroupOrPartitionScheme is not null)
    {
        yield return new StructuralChildEdge("OnFileGroupOrPartitionScheme", -1, typed.OnFileGroupOrPartitionScheme);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    if (typed.SelectStatement is not null)
    {
        yield return new StructuralChildEdge("SelectStatement", -1, typed.SelectStatement);
    }
    if (typed.TextImageOn is not null)
    {
        yield return new StructuralChildEdge("TextImageOn", -1, typed.TextImageOn);
    }
    yield break;
}
if (nodeType == typeof(CreateTriggerStatement))
{
    var typed = (CreateTriggerStatement)node;
    if (typed.MethodSpecifier is not null)
    {
        yield return new StructuralChildEdge("MethodSpecifier", -1, typed.MethodSpecifier);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.StatementList is not null)
    {
        yield return new StructuralChildEdge("StatementList", -1, typed.StatementList);
    }
    if (typed.TriggerActions is not null)
    {
        var index = 0;
        foreach (var child in typed.TriggerActions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TriggerActions", index, child);
            }
            index += 1;
        }
    }
    if (typed.TriggerObject is not null)
    {
        yield return new StructuralChildEdge("TriggerObject", -1, typed.TriggerObject);
    }
    yield break;
}
if (nodeType == typeof(CreateTypeTableStatement))
{
    var typed = (CreateTypeTableStatement)node;
    if (typed.Definition is not null)
    {
        yield return new StructuralChildEdge("Definition", -1, typed.Definition);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateTypeUddtStatement))
{
    var typed = (CreateTypeUddtStatement)node;
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.NullableConstraint is not null)
    {
        yield return new StructuralChildEdge("NullableConstraint", -1, typed.NullableConstraint);
    }
    yield break;
}
if (nodeType == typeof(CreateTypeUdtStatement))
{
    var typed = (CreateTypeUdtStatement)node;
    if (typed.AssemblyName is not null)
    {
        yield return new StructuralChildEdge("AssemblyName", -1, typed.AssemblyName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(CreateUserStatement))
{
    var typed = (CreateUserStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.UserLoginOption is not null)
    {
        yield return new StructuralChildEdge("UserLoginOption", -1, typed.UserLoginOption);
    }
    if (typed.UserOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.UserOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("UserOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateVectorIndexStatement))
{
    var typed = (CreateVectorIndexStatement)node;
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnFileGroupOrPartitionScheme is not null)
    {
        yield return new StructuralChildEdge("OnFileGroupOrPartitionScheme", -1, typed.OnFileGroupOrPartitionScheme);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    if (typed.VectorColumn is not null)
    {
        yield return new StructuralChildEdge("VectorColumn", -1, typed.VectorColumn);
    }
    yield break;
}
if (nodeType == typeof(CreateViewStatement))
{
    var typed = (CreateViewStatement)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    if (typed.SelectStatement is not null)
    {
        yield return new StructuralChildEdge("SelectStatement", -1, typed.SelectStatement);
    }
    if (typed.ViewOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ViewOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ViewOptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateWorkloadClassifierStatement))
{
    var typed = (CreateWorkloadClassifierStatement)node;
    if (typed.ClassifierName is not null)
    {
        yield return new StructuralChildEdge("ClassifierName", -1, typed.ClassifierName);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateWorkloadGroupStatement))
{
    var typed = (CreateWorkloadGroupStatement)node;
    if (typed.ExternalPoolName is not null)
    {
        yield return new StructuralChildEdge("ExternalPoolName", -1, typed.ExternalPoolName);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.PoolName is not null)
    {
        yield return new StructuralChildEdge("PoolName", -1, typed.PoolName);
    }
    if (typed.WorkloadGroupParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.WorkloadGroupParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("WorkloadGroupParameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(CreateXmlIndexStatement))
{
    var typed = (CreateXmlIndexStatement)node;
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnFileGroupOrPartitionScheme is not null)
    {
        yield return new StructuralChildEdge("OnFileGroupOrPartitionScheme", -1, typed.OnFileGroupOrPartitionScheme);
    }
    if (typed.OnName is not null)
    {
        yield return new StructuralChildEdge("OnName", -1, typed.OnName);
    }
    if (typed.SecondaryXmlIndexName is not null)
    {
        yield return new StructuralChildEdge("SecondaryXmlIndexName", -1, typed.SecondaryXmlIndexName);
    }
    if (typed.XmlColumn is not null)
    {
        yield return new StructuralChildEdge("XmlColumn", -1, typed.XmlColumn);
    }
    yield break;
}
if (nodeType == typeof(CreateXmlSchemaCollectionStatement))
{
    var typed = (CreateXmlSchemaCollectionStatement)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}

if (nodeType == typeof(CryptoMechanism))
{
    var typed = (CryptoMechanism)node;
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    if (typed.PasswordOrSignature is not null)
    {
        yield return new StructuralChildEdge("PasswordOrSignature", -1, typed.PasswordOrSignature);
    }
    yield break;
}
if (nodeType == typeof(CubeGroupingSpecification))
{
    var typed = (CubeGroupingSpecification)node;
    if (typed.Arguments is not null)
    {
        var index = 0;
        foreach (var child in typed.Arguments)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Arguments", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(CursorDefinition))
{
    var typed = (CursorDefinition)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Select is not null)
    {
        yield return new StructuralChildEdge("Select", -1, typed.Select);
    }
    yield break;
}
if (nodeType == typeof(CursorId))
{
    var typed = (CursorId)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}

if (nodeType == typeof(DWCompatibilityLevelConfigurationOption))
{
    var typed = (DWCompatibilityLevelConfigurationOption)node;
    if (typed.GenericOptionKind is not null)
    {
        yield return new StructuralChildEdge("GenericOptionKind", -1, typed.GenericOptionKind);
    }
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(DataCompressionOption))
{
    var typed = (DataCompressionOption)node;
    if (typed.PartitionRanges is not null)
    {
        var index = 0;
        foreach (var child in typed.PartitionRanges)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PartitionRanges", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DataModificationTableReference))
{
    var typed = (DataModificationTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.DataModificationSpecification is not null)
    {
        yield return new StructuralChildEdge("DataModificationSpecification", -1, typed.DataModificationSpecification);
    }
    yield break;
}
if (nodeType == typeof(DataRetentionTableOption))
{
    var typed = (DataRetentionTableOption)node;
    if (typed.FilterColumn is not null)
    {
        yield return new StructuralChildEdge("FilterColumn", -1, typed.FilterColumn);
    }
    if (typed.RetentionPeriod is not null)
    {
        yield return new StructuralChildEdge("RetentionPeriod", -1, typed.RetentionPeriod);
    }
    yield break;
}
if (nodeType == typeof(DataTypeSequenceOption))
{
    var typed = (DataTypeSequenceOption)node;
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    yield break;
}

if (nodeType == typeof(DatabaseConfigurationClearOption))
{
    var typed = (DatabaseConfigurationClearOption)node;
    if (typed.PlanHandle is not null)
    {
        yield return new StructuralChildEdge("PlanHandle", -1, typed.PlanHandle);
    }
    yield break;
}
if (nodeType == typeof(DatabaseConfigurationSetOption))
{
    var typed = (DatabaseConfigurationSetOption)node;
    if (typed.GenericOptionKind is not null)
    {
        yield return new StructuralChildEdge("GenericOptionKind", -1, typed.GenericOptionKind);
    }
    yield break;
}

if (nodeType == typeof(DbccNamedLiteral))
{
    var typed = (DbccNamedLiteral)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}

if (nodeType == typeof(DbccStatement))
{
    var typed = (DbccStatement)node;
    if (typed.Literals is not null)
    {
        var index = 0;
        foreach (var child in typed.Literals)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Literals", index, child);
            }
            index += 1;
        }
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DeallocateCursorStatement))
{
    var typed = (DeallocateCursorStatement)node;
    if (typed.Cursor is not null)
    {
        yield return new StructuralChildEdge("Cursor", -1, typed.Cursor);
    }
    yield break;
}
if (nodeType == typeof(DeclareCursorStatement))
{
    var typed = (DeclareCursorStatement)node;
    if (typed.CursorDefinition is not null)
    {
        yield return new StructuralChildEdge("CursorDefinition", -1, typed.CursorDefinition);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DeclareTableVariableBody))
{
    var typed = (DeclareTableVariableBody)node;
    if (typed.Definition is not null)
    {
        yield return new StructuralChildEdge("Definition", -1, typed.Definition);
    }
    if (typed.VariableName is not null)
    {
        yield return new StructuralChildEdge("VariableName", -1, typed.VariableName);
    }
    yield break;
}
if (nodeType == typeof(DeclareTableVariableStatement))
{
    var typed = (DeclareTableVariableStatement)node;
    if (typed.Body is not null)
    {
        yield return new StructuralChildEdge("Body", -1, typed.Body);
    }
    yield break;
}
if (nodeType == typeof(DeclareVariableElement))
{
    var typed = (DeclareVariableElement)node;
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.Nullable is not null)
    {
        yield return new StructuralChildEdge("Nullable", -1, typed.Nullable);
    }
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    if (typed.VariableName is not null)
    {
        yield return new StructuralChildEdge("VariableName", -1, typed.VariableName);
    }
    yield break;
}
if (nodeType == typeof(DeclareVariableStatement))
{
    var typed = (DeclareVariableStatement)node;
    if (typed.Declarations is not null)
    {
        var index = 0;
        foreach (var child in typed.Declarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Declarations", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DefaultConstraintDefinition))
{
    var typed = (DefaultConstraintDefinition)node;
    if (typed.Column is not null)
    {
        yield return new StructuralChildEdge("Column", -1, typed.Column);
    }
    if (typed.ConstraintIdentifier is not null)
    {
        yield return new StructuralChildEdge("ConstraintIdentifier", -1, typed.ConstraintIdentifier);
    }
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(DefaultLiteral))
{
    var typed = (DefaultLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}


if (nodeType == typeof(DeleteSpecification))
{
    var typed = (DeleteSpecification)node;
    if (typed.FromClause is not null)
    {
        yield return new StructuralChildEdge("FromClause", -1, typed.FromClause);
    }
    if (typed.OutputClause is not null)
    {
        yield return new StructuralChildEdge("OutputClause", -1, typed.OutputClause);
    }
    if (typed.OutputIntoClause is not null)
    {
        yield return new StructuralChildEdge("OutputIntoClause", -1, typed.OutputIntoClause);
    }
    if (typed.Target is not null)
    {
        yield return new StructuralChildEdge("Target", -1, typed.Target);
    }
    if (typed.TopRowFilter is not null)
    {
        yield return new StructuralChildEdge("TopRowFilter", -1, typed.TopRowFilter);
    }
    if (typed.WhereClause is not null)
    {
        yield return new StructuralChildEdge("WhereClause", -1, typed.WhereClause);
    }
    yield break;
}
if (nodeType == typeof(DeleteStatement))
{
    var typed = (DeleteStatement)node;
    if (typed.DeleteSpecification is not null)
    {
        yield return new StructuralChildEdge("DeleteSpecification", -1, typed.DeleteSpecification);
    }
    if (typed.OptimizerHints is not null)
    {
        var index = 0;
        foreach (var child in typed.OptimizerHints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OptimizerHints", index, child);
            }
            index += 1;
        }
    }
    if (typed.WithCtesAndXmlNamespaces is not null)
    {
        yield return new StructuralChildEdge("WithCtesAndXmlNamespaces", -1, typed.WithCtesAndXmlNamespaces);
    }
    yield break;
}
if (nodeType == typeof(DenyStatement))
{
    var typed = (DenyStatement)node;
    if (typed.AsClause is not null)
    {
        yield return new StructuralChildEdge("AsClause", -1, typed.AsClause);
    }
    if (typed.Permissions is not null)
    {
        var index = 0;
        foreach (var child in typed.Permissions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Permissions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Principals is not null)
    {
        var index = 0;
        foreach (var child in typed.Principals)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Principals", index, child);
            }
            index += 1;
        }
    }
    if (typed.SecurityTargetObject is not null)
    {
        yield return new StructuralChildEdge("SecurityTargetObject", -1, typed.SecurityTargetObject);
    }
    yield break;
}
if (nodeType == typeof(DenyStatement80))
{
    var typed = (DenyStatement80)node;
    if (typed.SecurityElement80 is not null)
    {
        yield return new StructuralChildEdge("SecurityElement80", -1, typed.SecurityElement80);
    }
    if (typed.SecurityUserClause80 is not null)
    {
        yield return new StructuralChildEdge("SecurityUserClause80", -1, typed.SecurityUserClause80);
    }
    yield break;
}
if (nodeType == typeof(DeviceInfo))
{
    var typed = (DeviceInfo)node;
    if (typed.LogicalDevice is not null)
    {
        yield return new StructuralChildEdge("LogicalDevice", -1, typed.LogicalDevice);
    }
    if (typed.PhysicalDevice is not null)
    {
        yield return new StructuralChildEdge("PhysicalDevice", -1, typed.PhysicalDevice);
    }
    yield break;
}
if (nodeType == typeof(DiskStatement))
{
    var typed = (DiskStatement)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DiskStatementOption))
{
    var typed = (DiskStatementOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(DistinctPredicate))
{
    var typed = (DistinctPredicate)node;
    if (typed.FirstExpression is not null)
    {
        yield return new StructuralChildEdge("FirstExpression", -1, typed.FirstExpression);
    }
    if (typed.SecondExpression is not null)
    {
        yield return new StructuralChildEdge("SecondExpression", -1, typed.SecondExpression);
    }
    yield break;
}
if (nodeType == typeof(DropAggregateStatement))
{
    var typed = (DropAggregateStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropAlterFullTextIndexAction))
{
    var typed = (DropAlterFullTextIndexAction)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropApplicationRoleStatement))
{
    var typed = (DropApplicationRoleStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropAssemblyStatement))
{
    var typed = (DropAssemblyStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropAsymmetricKeyStatement))
{
    var typed = (DropAsymmetricKeyStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropAvailabilityGroupStatement))
{
    var typed = (DropAvailabilityGroupStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropBrokerPriorityStatement))
{
    var typed = (DropBrokerPriorityStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropCertificateStatement))
{
    var typed = (DropCertificateStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropClusteredConstraintMoveOption))
{
    var typed = (DropClusteredConstraintMoveOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}

if (nodeType == typeof(DropClusteredConstraintValueOption))
{
    var typed = (DropClusteredConstraintValueOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}
if (nodeType == typeof(DropClusteredConstraintWaitAtLowPriorityLockOption))
{
    var typed = (DropClusteredConstraintWaitAtLowPriorityLockOption)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropColumnEncryptionKeyStatement))
{
    var typed = (DropColumnEncryptionKeyStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropColumnMasterKeyStatement))
{
    var typed = (DropColumnMasterKeyStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropContractStatement))
{
    var typed = (DropContractStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropCredentialStatement))
{
    var typed = (DropCredentialStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropCryptographicProviderStatement))
{
    var typed = (DropCryptographicProviderStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropDatabaseAuditSpecificationStatement))
{
    var typed = (DropDatabaseAuditSpecificationStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}

if (nodeType == typeof(DropDatabaseStatement))
{
    var typed = (DropDatabaseStatement)node;
    if (typed.Databases is not null)
    {
        var index = 0;
        foreach (var child in typed.Databases)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Databases", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropDefaultStatement))
{
    var typed = (DropDefaultStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropEndpointStatement))
{
    var typed = (DropEndpointStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropEventNotificationStatement))
{
    var typed = (DropEventNotificationStatement)node;
    if (typed.Notifications is not null)
    {
        var index = 0;
        foreach (var child in typed.Notifications)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Notifications", index, child);
            }
            index += 1;
        }
    }
    if (typed.Scope is not null)
    {
        yield return new StructuralChildEdge("Scope", -1, typed.Scope);
    }
    yield break;
}
if (nodeType == typeof(DropEventSessionStatement))
{
    var typed = (DropEventSessionStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropExternalDataSourceStatement))
{
    var typed = (DropExternalDataSourceStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropExternalFileFormatStatement))
{
    var typed = (DropExternalFileFormatStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropExternalLanguageStatement))
{
    var typed = (DropExternalLanguageStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    yield break;
}
if (nodeType == typeof(DropExternalLibraryStatement))
{
    var typed = (DropExternalLibraryStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Owner is not null)
    {
        yield return new StructuralChildEdge("Owner", -1, typed.Owner);
    }
    yield break;
}
if (nodeType == typeof(DropExternalModelStatement))
{
    var typed = (DropExternalModelStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropExternalResourcePoolStatement))
{
    var typed = (DropExternalResourcePoolStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropExternalStreamStatement))
{
    var typed = (DropExternalStreamStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropExternalStreamingJobStatement))
{
    var typed = (DropExternalStreamingJobStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropExternalTableStatement))
{
    var typed = (DropExternalTableStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropFederationStatement))
{
    var typed = (DropFederationStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropFullTextCatalogStatement))
{
    var typed = (DropFullTextCatalogStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropFullTextIndexStatement))
{
    var typed = (DropFullTextIndexStatement)node;
    if (typed.TableName is not null)
    {
        yield return new StructuralChildEdge("TableName", -1, typed.TableName);
    }
    yield break;
}
if (nodeType == typeof(DropFullTextStopListStatement))
{
    var typed = (DropFullTextStopListStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropFunctionStatement))
{
    var typed = (DropFunctionStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropIndexClause))
{
    var typed = (DropIndexClause)node;
    if (typed.Index is not null)
    {
        yield return new StructuralChildEdge("Index", -1, typed.Index);
    }
    if (typed.Object is not null)
    {
        yield return new StructuralChildEdge("Object", -1, typed.Object);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropIndexStatement))
{
    var typed = (DropIndexStatement)node;
    if (typed.DropIndexClauses is not null)
    {
        var index = 0;
        foreach (var child in typed.DropIndexClauses)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("DropIndexClauses", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropLoginStatement))
{
    var typed = (DropLoginStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}

if (nodeType == typeof(DropMemberAlterRoleAction))
{
    var typed = (DropMemberAlterRoleAction)node;
    if (typed.Member is not null)
    {
        yield return new StructuralChildEdge("Member", -1, typed.Member);
    }
    yield break;
}
if (nodeType == typeof(DropMessageTypeStatement))
{
    var typed = (DropMessageTypeStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropPartitionFunctionStatement))
{
    var typed = (DropPartitionFunctionStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropPartitionSchemeStatement))
{
    var typed = (DropPartitionSchemeStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropProcedureStatement))
{
    var typed = (DropProcedureStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropQueueStatement))
{
    var typed = (DropQueueStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropRemoteServiceBindingStatement))
{
    var typed = (DropRemoteServiceBindingStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropResourcePoolStatement))
{
    var typed = (DropResourcePoolStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropRoleStatement))
{
    var typed = (DropRoleStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropRouteStatement))
{
    var typed = (DropRouteStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropRuleStatement))
{
    var typed = (DropRuleStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropSchemaStatement))
{
    var typed = (DropSchemaStatement)node;
    if (typed.Schema is not null)
    {
        yield return new StructuralChildEdge("Schema", -1, typed.Schema);
    }
    yield break;
}
if (nodeType == typeof(DropSearchPropertyListAction))
{
    var typed = (DropSearchPropertyListAction)node;
    if (typed.PropertyName is not null)
    {
        yield return new StructuralChildEdge("PropertyName", -1, typed.PropertyName);
    }
    yield break;
}
if (nodeType == typeof(DropSearchPropertyListStatement))
{
    var typed = (DropSearchPropertyListStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropSecurityPolicyStatement))
{
    var typed = (DropSecurityPolicyStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropSensitivityClassificationStatement))
{
    var typed = (DropSensitivityClassificationStatement)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropSequenceStatement))
{
    var typed = (DropSequenceStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropServerAuditSpecificationStatement))
{
    var typed = (DropServerAuditSpecificationStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropServerAuditStatement))
{
    var typed = (DropServerAuditStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropServerRoleStatement))
{
    var typed = (DropServerRoleStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropServiceStatement))
{
    var typed = (DropServiceStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropSignatureStatement))
{
    var typed = (DropSignatureStatement)node;
    if (typed.Cryptos is not null)
    {
        var index = 0;
        foreach (var child in typed.Cryptos)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Cryptos", index, child);
            }
            index += 1;
        }
    }
    if (typed.Element is not null)
    {
        yield return new StructuralChildEdge("Element", -1, typed.Element);
    }
    yield break;
}
if (nodeType == typeof(DropStatisticsStatement))
{
    var typed = (DropStatisticsStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropSymmetricKeyStatement))
{
    var typed = (DropSymmetricKeyStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropSynonymStatement))
{
    var typed = (DropSynonymStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropTableStatement))
{
    var typed = (DropTableStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropTriggerStatement))
{
    var typed = (DropTriggerStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropTypeStatement))
{
    var typed = (DropTypeStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropUserStatement))
{
    var typed = (DropUserStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropViewStatement))
{
    var typed = (DropViewStatement)node;
    if (typed.Objects is not null)
    {
        var index = 0;
        foreach (var child in typed.Objects)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Objects", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(DropWorkloadClassifierStatement))
{
    var typed = (DropWorkloadClassifierStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropWorkloadGroupStatement))
{
    var typed = (DropWorkloadGroupStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(DropXmlSchemaCollectionStatement))
{
    var typed = (DropXmlSchemaCollectionStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}

if (nodeType == typeof(ElasticPoolSpecification))
{
    var typed = (ElasticPoolSpecification)node;
    if (typed.ElasticPoolName is not null)
    {
        yield return new StructuralChildEdge("ElasticPoolName", -1, typed.ElasticPoolName);
    }
    yield break;
}
if (nodeType == typeof(EnableDisableTriggerStatement))
{
    var typed = (EnableDisableTriggerStatement)node;
    if (typed.TriggerNames is not null)
    {
        var index = 0;
        foreach (var child in typed.TriggerNames)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TriggerNames", index, child);
            }
            index += 1;
        }
    }
    if (typed.TriggerObject is not null)
    {
        yield return new StructuralChildEdge("TriggerObject", -1, typed.TriggerObject);
    }
    yield break;
}

if (nodeType == typeof(EncryptedValueParameter))
{
    var typed = (EncryptedValueParameter)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}

if (nodeType == typeof(EndConversationStatement))
{
    var typed = (EndConversationStatement)node;
    if (typed.Conversation is not null)
    {
        yield return new StructuralChildEdge("Conversation", -1, typed.Conversation);
    }
    if (typed.ErrorCode is not null)
    {
        yield return new StructuralChildEdge("ErrorCode", -1, typed.ErrorCode);
    }
    if (typed.ErrorDescription is not null)
    {
        yield return new StructuralChildEdge("ErrorDescription", -1, typed.ErrorDescription);
    }
    yield break;
}
if (nodeType == typeof(EndpointAffinity))
{
    var typed = (EndpointAffinity)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(EventDeclaration))
{
    var typed = (EventDeclaration)node;
    if (typed.EventDeclarationActionParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.EventDeclarationActionParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("EventDeclarationActionParameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.EventDeclarationPredicateParameter is not null)
    {
        yield return new StructuralChildEdge("EventDeclarationPredicateParameter", -1, typed.EventDeclarationPredicateParameter);
    }
    if (typed.EventDeclarationSetParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.EventDeclarationSetParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("EventDeclarationSetParameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ObjectName is not null)
    {
        yield return new StructuralChildEdge("ObjectName", -1, typed.ObjectName);
    }
    yield break;
}
if (nodeType == typeof(EventDeclarationCompareFunctionParameter))
{
    var typed = (EventDeclarationCompareFunctionParameter)node;
    if (typed.EventValue is not null)
    {
        yield return new StructuralChildEdge("EventValue", -1, typed.EventValue);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.SourceDeclaration is not null)
    {
        yield return new StructuralChildEdge("SourceDeclaration", -1, typed.SourceDeclaration);
    }
    yield break;
}
if (nodeType == typeof(EventDeclarationSetParameter))
{
    var typed = (EventDeclarationSetParameter)node;
    if (typed.EventField is not null)
    {
        yield return new StructuralChildEdge("EventField", -1, typed.EventField);
    }
    if (typed.EventValue is not null)
    {
        yield return new StructuralChildEdge("EventValue", -1, typed.EventValue);
    }
    yield break;
}

if (nodeType == typeof(EventNotificationObjectScope))
{
    var typed = (EventNotificationObjectScope)node;
    if (typed.QueueName is not null)
    {
        yield return new StructuralChildEdge("QueueName", -1, typed.QueueName);
    }
    yield break;
}

if (nodeType == typeof(EventSessionObjectName))
{
    var typed = (EventSessionObjectName)node;
    if (typed.MultiPartIdentifier is not null)
    {
        yield return new StructuralChildEdge("MultiPartIdentifier", -1, typed.MultiPartIdentifier);
    }
    yield break;
}
if (nodeType == typeof(EventSessionStatement))
{
    var typed = (EventSessionStatement)node;
    if (typed.EventDeclarations is not null)
    {
        var index = 0;
        foreach (var child in typed.EventDeclarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("EventDeclarations", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.SessionOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.SessionOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SessionOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.TargetDeclarations is not null)
    {
        var index = 0;
        foreach (var child in typed.TargetDeclarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TargetDeclarations", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(ExecutableProcedureReference))
{
    var typed = (ExecutableProcedureReference)node;
    if (typed.AdHocDataSource is not null)
    {
        yield return new StructuralChildEdge("AdHocDataSource", -1, typed.AdHocDataSource);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ProcedureReference is not null)
    {
        yield return new StructuralChildEdge("ProcedureReference", -1, typed.ProcedureReference);
    }
    yield break;
}
if (nodeType == typeof(ExecutableStringList))
{
    var typed = (ExecutableStringList)node;
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.Strings is not null)
    {
        var index = 0;
        foreach (var child in typed.Strings)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Strings", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ExecuteAsClause))
{
    var typed = (ExecuteAsClause)node;
    if (typed.Literal is not null)
    {
        yield return new StructuralChildEdge("Literal", -1, typed.Literal);
    }
    yield break;
}
if (nodeType == typeof(ExecuteAsFunctionOption))
{
    var typed = (ExecuteAsFunctionOption)node;
    if (typed.ExecuteAs is not null)
    {
        yield return new StructuralChildEdge("ExecuteAs", -1, typed.ExecuteAs);
    }
    yield break;
}
if (nodeType == typeof(ExecuteAsProcedureOption))
{
    var typed = (ExecuteAsProcedureOption)node;
    if (typed.ExecuteAs is not null)
    {
        yield return new StructuralChildEdge("ExecuteAs", -1, typed.ExecuteAs);
    }
    yield break;
}
if (nodeType == typeof(ExecuteAsStatement))
{
    var typed = (ExecuteAsStatement)node;
    if (typed.Cookie is not null)
    {
        yield return new StructuralChildEdge("Cookie", -1, typed.Cookie);
    }
    if (typed.ExecuteContext is not null)
    {
        yield return new StructuralChildEdge("ExecuteContext", -1, typed.ExecuteContext);
    }
    yield break;
}
if (nodeType == typeof(ExecuteAsTriggerOption))
{
    var typed = (ExecuteAsTriggerOption)node;
    if (typed.ExecuteAsClause is not null)
    {
        yield return new StructuralChildEdge("ExecuteAsClause", -1, typed.ExecuteAsClause);
    }
    yield break;
}
if (nodeType == typeof(ExecuteContext))
{
    var typed = (ExecuteContext)node;
    if (typed.Principal is not null)
    {
        yield return new StructuralChildEdge("Principal", -1, typed.Principal);
    }
    yield break;
}
if (nodeType == typeof(ExecuteInsertSource))
{
    var typed = (ExecuteInsertSource)node;
    if (typed.Execute is not null)
    {
        yield return new StructuralChildEdge("Execute", -1, typed.Execute);
    }
    yield break;
}

if (nodeType == typeof(ExecuteParameter))
{
    var typed = (ExecuteParameter)node;
    if (typed.ParameterValue is not null)
    {
        yield return new StructuralChildEdge("ParameterValue", -1, typed.ParameterValue);
    }
    if (typed.Variable is not null)
    {
        yield return new StructuralChildEdge("Variable", -1, typed.Variable);
    }
    yield break;
}
if (nodeType == typeof(ExecuteSpecification))
{
    var typed = (ExecuteSpecification)node;
    if (typed.ExecutableEntity is not null)
    {
        yield return new StructuralChildEdge("ExecutableEntity", -1, typed.ExecutableEntity);
    }
    if (typed.ExecuteContext is not null)
    {
        yield return new StructuralChildEdge("ExecuteContext", -1, typed.ExecuteContext);
    }
    if (typed.LinkedServer is not null)
    {
        yield return new StructuralChildEdge("LinkedServer", -1, typed.LinkedServer);
    }
    if (typed.Variable is not null)
    {
        yield return new StructuralChildEdge("Variable", -1, typed.Variable);
    }
    yield break;
}
if (nodeType == typeof(ExecuteStatement))
{
    var typed = (ExecuteStatement)node;
    if (typed.ExecuteSpecification is not null)
    {
        yield return new StructuralChildEdge("ExecuteSpecification", -1, typed.ExecuteSpecification);
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ExistsPredicate))
{
    var typed = (ExistsPredicate)node;
    if (typed.Subquery is not null)
    {
        yield return new StructuralChildEdge("Subquery", -1, typed.Subquery);
    }
    yield break;
}
if (nodeType == typeof(ExpressionCallTarget))
{
    var typed = (ExpressionCallTarget)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(ExpressionGroupingSpecification))
{
    var typed = (ExpressionGroupingSpecification)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(ExpressionWithSortOrder))
{
    var typed = (ExpressionWithSortOrder)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(ExternalCreateLoginSource))
{
    var typed = (ExternalCreateLoginSource)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ExternalDataSourceLiteralOrIdentifierOption))
{
    var typed = (ExternalDataSourceLiteralOrIdentifierOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(ExternalFileFormatContainerOption))
{
    var typed = (ExternalFileFormatContainerOption)node;
    if (typed.Suboptions is not null)
    {
        var index = 0;
        foreach (var child in typed.Suboptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Suboptions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ExternalFileFormatLiteralOption))
{
    var typed = (ExternalFileFormatLiteralOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}

if (nodeType == typeof(ExternalLanguageFileOption))
{
    var typed = (ExternalLanguageFileOption)node;
    if (typed.Content is not null)
    {
        yield return new StructuralChildEdge("Content", -1, typed.Content);
    }
    if (typed.EnvironmentVariables is not null)
    {
        yield return new StructuralChildEdge("EnvironmentVariables", -1, typed.EnvironmentVariables);
    }
    if (typed.FileName is not null)
    {
        yield return new StructuralChildEdge("FileName", -1, typed.FileName);
    }
    if (typed.Parameters is not null)
    {
        yield return new StructuralChildEdge("Parameters", -1, typed.Parameters);
    }
    if (typed.Path is not null)
    {
        yield return new StructuralChildEdge("Path", -1, typed.Path);
    }
    if (typed.Platform is not null)
    {
        yield return new StructuralChildEdge("Platform", -1, typed.Platform);
    }
    yield break;
}
if (nodeType == typeof(ExternalLibraryFileOption))
{
    var typed = (ExternalLibraryFileOption)node;
    if (typed.Content is not null)
    {
        yield return new StructuralChildEdge("Content", -1, typed.Content);
    }
    if (typed.Path is not null)
    {
        yield return new StructuralChildEdge("Path", -1, typed.Path);
    }
    if (typed.Platform is not null)
    {
        yield return new StructuralChildEdge("Platform", -1, typed.Platform);
    }
    yield break;
}
if (nodeType == typeof(ExternalResourcePoolAffinitySpecification))
{
    var typed = (ExternalResourcePoolAffinitySpecification)node;
    if (typed.ParameterValue is not null)
    {
        yield return new StructuralChildEdge("ParameterValue", -1, typed.ParameterValue);
    }
    if (typed.PoolAffinityRanges is not null)
    {
        var index = 0;
        foreach (var child in typed.PoolAffinityRanges)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PoolAffinityRanges", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ExternalResourcePoolParameter))
{
    var typed = (ExternalResourcePoolParameter)node;
    if (typed.AffinitySpecification is not null)
    {
        yield return new StructuralChildEdge("AffinitySpecification", -1, typed.AffinitySpecification);
    }
    if (typed.ParameterValue is not null)
    {
        yield return new StructuralChildEdge("ParameterValue", -1, typed.ParameterValue);
    }
    yield break;
}
if (nodeType == typeof(ExternalResourcePoolStatement))
{
    var typed = (ExternalResourcePoolStatement)node;
    if (typed.ExternalResourcePoolParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.ExternalResourcePoolParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ExternalResourcePoolParameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(ExternalStreamLiteralOrIdentifierOption))
{
    var typed = (ExternalStreamLiteralOrIdentifierOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(ExternalTableColumnDefinition))
{
    var typed = (ExternalTableColumnDefinition)node;
    if (typed.ColumnDefinition is not null)
    {
        yield return new StructuralChildEdge("ColumnDefinition", -1, typed.ColumnDefinition);
    }
    if (typed.NullableConstraint is not null)
    {
        yield return new StructuralChildEdge("NullableConstraint", -1, typed.NullableConstraint);
    }
    yield break;
}
if (nodeType == typeof(ExternalTableDistributionOption))
{
    var typed = (ExternalTableDistributionOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(ExternalTableLiteralOrIdentifierOption))
{
    var typed = (ExternalTableLiteralOrIdentifierOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}



if (nodeType == typeof(ExternalTableShardedDistributionPolicy))
{
    var typed = (ExternalTableShardedDistributionPolicy)node;
    if (typed.ShardingColumn is not null)
    {
        yield return new StructuralChildEdge("ShardingColumn", -1, typed.ShardingColumn);
    }
    yield break;
}
if (nodeType == typeof(ExtractFromExpression))
{
    var typed = (ExtractFromExpression)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    if (typed.ExtractedElement is not null)
    {
        yield return new StructuralChildEdge("ExtractedElement", -1, typed.ExtractedElement);
    }
    yield break;
}

if (nodeType == typeof(FederationScheme))
{
    var typed = (FederationScheme)node;
    if (typed.ColumnName is not null)
    {
        yield return new StructuralChildEdge("ColumnName", -1, typed.ColumnName);
    }
    if (typed.DistributionName is not null)
    {
        yield return new StructuralChildEdge("DistributionName", -1, typed.DistributionName);
    }
    yield break;
}
if (nodeType == typeof(FetchCursorStatement))
{
    var typed = (FetchCursorStatement)node;
    if (typed.Cursor is not null)
    {
        yield return new StructuralChildEdge("Cursor", -1, typed.Cursor);
    }
    if (typed.FetchType is not null)
    {
        yield return new StructuralChildEdge("FetchType", -1, typed.FetchType);
    }
    if (typed.IntoVariables is not null)
    {
        var index = 0;
        foreach (var child in typed.IntoVariables)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IntoVariables", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(FetchType))
{
    var typed = (FetchType)node;
    if (typed.RowOffset is not null)
    {
        yield return new StructuralChildEdge("RowOffset", -1, typed.RowOffset);
    }
    yield break;
}
if (nodeType == typeof(FileDeclaration))
{
    var typed = (FileDeclaration)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(FileEncryptionSource))
{
    var typed = (FileEncryptionSource)node;
    if (typed.File is not null)
    {
        yield return new StructuralChildEdge("File", -1, typed.File);
    }
    yield break;
}
if (nodeType == typeof(FileGroupDefinition))
{
    var typed = (FileGroupDefinition)node;
    if (typed.FileDeclarations is not null)
    {
        var index = 0;
        foreach (var child in typed.FileDeclarations)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("FileDeclarations", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(FileGroupOrPartitionScheme))
{
    var typed = (FileGroupOrPartitionScheme)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.PartitionSchemeColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.PartitionSchemeColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PartitionSchemeColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(FileGrowthFileDeclarationOption))
{
    var typed = (FileGrowthFileDeclarationOption)node;
    if (typed.GrowthIncrement is not null)
    {
        yield return new StructuralChildEdge("GrowthIncrement", -1, typed.GrowthIncrement);
    }
    yield break;
}
if (nodeType == typeof(FileNameFileDeclarationOption))
{
    var typed = (FileNameFileDeclarationOption)node;
    if (typed.OSFileName is not null)
    {
        yield return new StructuralChildEdge("OSFileName", -1, typed.OSFileName);
    }
    yield break;
}
if (nodeType == typeof(FileStreamDatabaseOption))
{
    var typed = (FileStreamDatabaseOption)node;
    if (typed.DirectoryName is not null)
    {
        yield return new StructuralChildEdge("DirectoryName", -1, typed.DirectoryName);
    }
    yield break;
}
if (nodeType == typeof(FileStreamOnDropIndexOption))
{
    var typed = (FileStreamOnDropIndexOption)node;
    if (typed.FileStreamOn is not null)
    {
        yield return new StructuralChildEdge("FileStreamOn", -1, typed.FileStreamOn);
    }
    yield break;
}
if (nodeType == typeof(FileStreamOnTableOption))
{
    var typed = (FileStreamOnTableOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(FileStreamRestoreOption))
{
    var typed = (FileStreamRestoreOption)node;
    if (typed.FileStreamOption is not null)
    {
        yield return new StructuralChildEdge("FileStreamOption", -1, typed.FileStreamOption);
    }
    yield break;
}
if (nodeType == typeof(FileTableCollateFileNameTableOption))
{
    var typed = (FileTableCollateFileNameTableOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(FileTableConstraintNameTableOption))
{
    var typed = (FileTableConstraintNameTableOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(FileTableDirectoryTableOption))
{
    var typed = (FileTableDirectoryTableOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(ForceSeekTableHint))
{
    var typed = (ForceSeekTableHint)node;
    if (typed.ColumnValues is not null)
    {
        var index = 0;
        foreach (var child in typed.ColumnValues)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ColumnValues", index, child);
            }
            index += 1;
        }
    }
    if (typed.IndexValue is not null)
    {
        yield return new StructuralChildEdge("IndexValue", -1, typed.IndexValue);
    }
    yield break;
}
if (nodeType == typeof(ForeignKeyConstraintDefinition))
{
    var typed = (ForeignKeyConstraintDefinition)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.ConstraintIdentifier is not null)
    {
        yield return new StructuralChildEdge("ConstraintIdentifier", -1, typed.ConstraintIdentifier);
    }
    if (typed.ReferenceTableName is not null)
    {
        yield return new StructuralChildEdge("ReferenceTableName", -1, typed.ReferenceTableName);
    }
    if (typed.ReferencedTableColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.ReferencedTableColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ReferencedTableColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(FromClause))
{
    var typed = (FromClause)node;
    if (typed.PredictTableReference is not null)
    {
        var index = 0;
        foreach (var child in typed.PredictTableReference)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PredictTableReference", index, child);
            }
            index += 1;
        }
    }
    if (typed.TableReferences is not null)
    {
        var index = 0;
        foreach (var child in typed.TableReferences)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TableReferences", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(FullTextCatalogAndFileGroup))
{
    var typed = (FullTextCatalogAndFileGroup)node;
    if (typed.CatalogName is not null)
    {
        yield return new StructuralChildEdge("CatalogName", -1, typed.CatalogName);
    }
    if (typed.FileGroupName is not null)
    {
        yield return new StructuralChildEdge("FileGroupName", -1, typed.FileGroupName);
    }
    yield break;
}
if (nodeType == typeof(FullTextIndexColumn))
{
    var typed = (FullTextIndexColumn)node;
    if (typed.LanguageTerm is not null)
    {
        yield return new StructuralChildEdge("LanguageTerm", -1, typed.LanguageTerm);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.TypeColumn is not null)
    {
        yield return new StructuralChildEdge("TypeColumn", -1, typed.TypeColumn);
    }
    yield break;
}
if (nodeType == typeof(FullTextPredicate))
{
    var typed = (FullTextPredicate)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.LanguageTerm is not null)
    {
        yield return new StructuralChildEdge("LanguageTerm", -1, typed.LanguageTerm);
    }
    if (typed.PropertyName is not null)
    {
        yield return new StructuralChildEdge("PropertyName", -1, typed.PropertyName);
    }
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(FullTextStopListAction))
{
    var typed = (FullTextStopListAction)node;
    if (typed.LanguageTerm is not null)
    {
        yield return new StructuralChildEdge("LanguageTerm", -1, typed.LanguageTerm);
    }
    if (typed.StopWord is not null)
    {
        yield return new StructuralChildEdge("StopWord", -1, typed.StopWord);
    }
    yield break;
}
if (nodeType == typeof(FullTextTableReference))
{
    var typed = (FullTextTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.Language is not null)
    {
        yield return new StructuralChildEdge("Language", -1, typed.Language);
    }
    if (typed.PropertyName is not null)
    {
        yield return new StructuralChildEdge("PropertyName", -1, typed.PropertyName);
    }
    if (typed.SearchCondition is not null)
    {
        yield return new StructuralChildEdge("SearchCondition", -1, typed.SearchCondition);
    }
    if (typed.TableName is not null)
    {
        yield return new StructuralChildEdge("TableName", -1, typed.TableName);
    }
    if (typed.TopN is not null)
    {
        yield return new StructuralChildEdge("TopN", -1, typed.TopN);
    }
    yield break;
}
if (nodeType == typeof(FunctionCall))
{
    var typed = (FunctionCall)node;
    if (typed.AbsentOrNullOnNull is not null)
    {
        var index = 0;
        foreach (var child in typed.AbsentOrNullOnNull)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("AbsentOrNullOnNull", index, child);
            }
            index += 1;
        }
    }
    if (typed.CallTarget is not null)
    {
        yield return new StructuralChildEdge("CallTarget", -1, typed.CallTarget);
    }
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.FunctionName is not null)
    {
        yield return new StructuralChildEdge("FunctionName", -1, typed.FunctionName);
    }
    if (typed.IgnoreRespectNulls is not null)
    {
        var index = 0;
        foreach (var child in typed.IgnoreRespectNulls)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IgnoreRespectNulls", index, child);
            }
            index += 1;
        }
    }
    if (typed.JsonOrderByClause is not null)
    {
        yield return new StructuralChildEdge("JsonOrderByClause", -1, typed.JsonOrderByClause);
    }
    if (typed.JsonParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.JsonParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("JsonParameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.OverClause is not null)
    {
        yield return new StructuralChildEdge("OverClause", -1, typed.OverClause);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.ReturnType is not null)
    {
        var index = 0;
        foreach (var child in typed.ReturnType)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ReturnType", index, child);
            }
            index += 1;
        }
    }
    if (typed.TrimOptions is not null)
    {
        yield return new StructuralChildEdge("TrimOptions", -1, typed.TrimOptions);
    }
    if (typed.WithinGroupClause is not null)
    {
        yield return new StructuralChildEdge("WithinGroupClause", -1, typed.WithinGroupClause);
    }
    yield break;
}
if (nodeType == typeof(FunctionCallSetClause))
{
    var typed = (FunctionCallSetClause)node;
    if (typed.MutatorFunction is not null)
    {
        yield return new StructuralChildEdge("MutatorFunction", -1, typed.MutatorFunction);
    }
    yield break;
}

if (nodeType == typeof(GeneralSetCommand))
{
    var typed = (GeneralSetCommand)node;
    if (typed.Parameter is not null)
    {
        yield return new StructuralChildEdge("Parameter", -1, typed.Parameter);
    }
    yield break;
}
if (nodeType == typeof(GenericConfigurationOption))
{
    var typed = (GenericConfigurationOption)node;
    if (typed.GenericOptionKind is not null)
    {
        yield return new StructuralChildEdge("GenericOptionKind", -1, typed.GenericOptionKind);
    }
    if (typed.GenericOptionState is not null)
    {
        yield return new StructuralChildEdge("GenericOptionState", -1, typed.GenericOptionState);
    }
    yield break;
}
if (nodeType == typeof(GetConversationGroupStatement))
{
    var typed = (GetConversationGroupStatement)node;
    if (typed.GroupId is not null)
    {
        yield return new StructuralChildEdge("GroupId", -1, typed.GroupId);
    }
    if (typed.Queue is not null)
    {
        yield return new StructuralChildEdge("Queue", -1, typed.Queue);
    }
    yield break;
}
if (nodeType == typeof(GlobalFunctionTableReference))
{
    var typed = (GlobalFunctionTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(GlobalVariableExpression))
{
    var typed = (GlobalVariableExpression)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(GoToStatement))
{
    var typed = (GoToStatement)node;
    if (typed.LabelName is not null)
    {
        yield return new StructuralChildEdge("LabelName", -1, typed.LabelName);
    }
    yield break;
}

if (nodeType == typeof(GrantStatement))
{
    var typed = (GrantStatement)node;
    if (typed.AsClause is not null)
    {
        yield return new StructuralChildEdge("AsClause", -1, typed.AsClause);
    }
    if (typed.Permissions is not null)
    {
        var index = 0;
        foreach (var child in typed.Permissions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Permissions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Principals is not null)
    {
        var index = 0;
        foreach (var child in typed.Principals)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Principals", index, child);
            }
            index += 1;
        }
    }
    if (typed.SecurityTargetObject is not null)
    {
        yield return new StructuralChildEdge("SecurityTargetObject", -1, typed.SecurityTargetObject);
    }
    yield break;
}
if (nodeType == typeof(GrantStatement80))
{
    var typed = (GrantStatement80)node;
    if (typed.AsClause is not null)
    {
        yield return new StructuralChildEdge("AsClause", -1, typed.AsClause);
    }
    if (typed.SecurityElement80 is not null)
    {
        yield return new StructuralChildEdge("SecurityElement80", -1, typed.SecurityElement80);
    }
    if (typed.SecurityUserClause80 is not null)
    {
        yield return new StructuralChildEdge("SecurityUserClause80", -1, typed.SecurityUserClause80);
    }
    yield break;
}
if (nodeType == typeof(GraphConnectionBetweenNodes))
{
    var typed = (GraphConnectionBetweenNodes)node;
    if (typed.FromNode is not null)
    {
        yield return new StructuralChildEdge("FromNode", -1, typed.FromNode);
    }
    if (typed.ToNode is not null)
    {
        yield return new StructuralChildEdge("ToNode", -1, typed.ToNode);
    }
    yield break;
}
if (nodeType == typeof(GraphConnectionConstraintDefinition))
{
    var typed = (GraphConnectionConstraintDefinition)node;
    if (typed.ConstraintIdentifier is not null)
    {
        yield return new StructuralChildEdge("ConstraintIdentifier", -1, typed.ConstraintIdentifier);
    }
    if (typed.FromNodeToNodeList is not null)
    {
        var index = 0;
        foreach (var child in typed.FromNodeToNodeList)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("FromNodeToNodeList", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(GraphMatchCompositeExpression))
{
    var typed = (GraphMatchCompositeExpression)node;
    if (typed.Edge is not null)
    {
        yield return new StructuralChildEdge("Edge", -1, typed.Edge);
    }
    if (typed.LeftNode is not null)
    {
        yield return new StructuralChildEdge("LeftNode", -1, typed.LeftNode);
    }
    if (typed.RightNode is not null)
    {
        yield return new StructuralChildEdge("RightNode", -1, typed.RightNode);
    }
    yield break;
}
if (nodeType == typeof(GraphMatchExpression))
{
    var typed = (GraphMatchExpression)node;
    if (typed.Edge is not null)
    {
        yield return new StructuralChildEdge("Edge", -1, typed.Edge);
    }
    if (typed.LeftNode is not null)
    {
        yield return new StructuralChildEdge("LeftNode", -1, typed.LeftNode);
    }
    if (typed.RightNode is not null)
    {
        yield return new StructuralChildEdge("RightNode", -1, typed.RightNode);
    }
    yield break;
}
if (nodeType == typeof(GraphMatchLastNodePredicate))
{
    var typed = (GraphMatchLastNodePredicate)node;
    if (typed.LeftExpression is not null)
    {
        yield return new StructuralChildEdge("LeftExpression", -1, typed.LeftExpression);
    }
    if (typed.RightExpression is not null)
    {
        yield return new StructuralChildEdge("RightExpression", -1, typed.RightExpression);
    }
    yield break;
}
if (nodeType == typeof(GraphMatchNodeExpression))
{
    var typed = (GraphMatchNodeExpression)node;
    if (typed.Node is not null)
    {
        yield return new StructuralChildEdge("Node", -1, typed.Node);
    }
    yield break;
}
if (nodeType == typeof(GraphMatchPredicate))
{
    var typed = (GraphMatchPredicate)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(GraphMatchRecursivePredicate))
{
    var typed = (GraphMatchRecursivePredicate)node;
    if (typed.Expression is not null)
    {
        var index = 0;
        foreach (var child in typed.Expression)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Expression", index, child);
            }
            index += 1;
        }
    }
    if (typed.OuterNodeExpression is not null)
    {
        yield return new StructuralChildEdge("OuterNodeExpression", -1, typed.OuterNodeExpression);
    }
    if (typed.RecursiveQuantifier is not null)
    {
        yield return new StructuralChildEdge("RecursiveQuantifier", -1, typed.RecursiveQuantifier);
    }
    yield break;
}
if (nodeType == typeof(GraphRecursiveMatchQuantifier))
{
    var typed = (GraphRecursiveMatchQuantifier)node;
    if (typed.LowerLimit is not null)
    {
        yield return new StructuralChildEdge("LowerLimit", -1, typed.LowerLimit);
    }
    if (typed.UpperLimit is not null)
    {
        yield return new StructuralChildEdge("UpperLimit", -1, typed.UpperLimit);
    }
    yield break;
}

if (nodeType == typeof(GridsSpatialIndexOption))
{
    var typed = (GridsSpatialIndexOption)node;
    if (typed.GridParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.GridParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("GridParameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(GroupByClause))
{
    var typed = (GroupByClause)node;
    if (typed.GroupingSpecifications is not null)
    {
        var index = 0;
        foreach (var child in typed.GroupingSpecifications)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("GroupingSpecifications", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(GroupingSetsGroupingSpecification))
{
    var typed = (GroupingSetsGroupingSpecification)node;
    if (typed.Sets is not null)
    {
        var index = 0;
        foreach (var child in typed.Sets)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Sets", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(HadrAvailabilityGroupDatabaseOption))
{
    var typed = (HadrAvailabilityGroupDatabaseOption)node;
    if (typed.GroupName is not null)
    {
        yield return new StructuralChildEdge("GroupName", -1, typed.GroupName);
    }
    yield break;
}

if (nodeType == typeof(HavingClause))
{
    var typed = (HavingClause)node;
    if (typed.SearchCondition is not null)
    {
        yield return new StructuralChildEdge("SearchCondition", -1, typed.SearchCondition);
    }
    yield break;
}
if (nodeType == typeof(IIfCall))
{
    var typed = (IIfCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.ElseExpression is not null)
    {
        yield return new StructuralChildEdge("ElseExpression", -1, typed.ElseExpression);
    }
    if (typed.Predicate is not null)
    {
        yield return new StructuralChildEdge("Predicate", -1, typed.Predicate);
    }
    if (typed.ThenExpression is not null)
    {
        yield return new StructuralChildEdge("ThenExpression", -1, typed.ThenExpression);
    }
    yield break;
}
if (nodeType == typeof(IPv4))
{
    var typed = (IPv4)node;
    if (typed.OctetFour is not null)
    {
        yield return new StructuralChildEdge("OctetFour", -1, typed.OctetFour);
    }
    if (typed.OctetOne is not null)
    {
        yield return new StructuralChildEdge("OctetOne", -1, typed.OctetOne);
    }
    if (typed.OctetThree is not null)
    {
        yield return new StructuralChildEdge("OctetThree", -1, typed.OctetThree);
    }
    if (typed.OctetTwo is not null)
    {
        yield return new StructuralChildEdge("OctetTwo", -1, typed.OctetTwo);
    }
    yield break;
}

if (nodeType == typeof(IdentifierAtomicBlockOption))
{
    var typed = (IdentifierAtomicBlockOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(IdentifierDatabaseOption))
{
    var typed = (IdentifierDatabaseOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(IdentifierLiteral))
{
    var typed = (IdentifierLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(IdentifierOrScalarExpression))
{
    var typed = (IdentifierOrScalarExpression)node;
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    if (typed.ScalarExpression is not null)
    {
        yield return new StructuralChildEdge("ScalarExpression", -1, typed.ScalarExpression);
    }
    yield break;
}
if (nodeType == typeof(IdentifierOrValueExpression))
{
    var typed = (IdentifierOrValueExpression)node;
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    if (typed.ValueExpression is not null)
    {
        yield return new StructuralChildEdge("ValueExpression", -1, typed.ValueExpression);
    }
    yield break;
}
if (nodeType == typeof(IdentifierPrincipalOption))
{
    var typed = (IdentifierPrincipalOption)node;
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    yield break;
}

if (nodeType == typeof(IdentityFunctionCall))
{
    var typed = (IdentityFunctionCall)node;
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.Increment is not null)
    {
        yield return new StructuralChildEdge("Increment", -1, typed.Increment);
    }
    if (typed.Seed is not null)
    {
        yield return new StructuralChildEdge("Seed", -1, typed.Seed);
    }
    yield break;
}
if (nodeType == typeof(IdentityOptions))
{
    var typed = (IdentityOptions)node;
    if (typed.IdentityIncrement is not null)
    {
        yield return new StructuralChildEdge("IdentityIncrement", -1, typed.IdentityIncrement);
    }
    if (typed.IdentitySeed is not null)
    {
        yield return new StructuralChildEdge("IdentitySeed", -1, typed.IdentitySeed);
    }
    yield break;
}
if (nodeType == typeof(IdentityValueKeyOption))
{
    var typed = (IdentityValueKeyOption)node;
    if (typed.IdentityPhrase is not null)
    {
        yield return new StructuralChildEdge("IdentityPhrase", -1, typed.IdentityPhrase);
    }
    yield break;
}
if (nodeType == typeof(IfStatement))
{
    var typed = (IfStatement)node;
    if (typed.ElseStatement is not null)
    {
        yield return new StructuralChildEdge("ElseStatement", -1, typed.ElseStatement);
    }
    if (typed.Predicate is not null)
    {
        yield return new StructuralChildEdge("Predicate", -1, typed.Predicate);
    }
    if (typed.ThenStatement is not null)
    {
        yield return new StructuralChildEdge("ThenStatement", -1, typed.ThenStatement);
    }
    yield break;
}

if (nodeType == typeof(InPredicate))
{
    var typed = (InPredicate)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    if (typed.Subquery is not null)
    {
        yield return new StructuralChildEdge("Subquery", -1, typed.Subquery);
    }
    if (typed.Values is not null)
    {
        var index = 0;
        foreach (var child in typed.Values)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Values", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(IndexDefinition))
{
    var typed = (IndexDefinition)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.FileStreamOn is not null)
    {
        yield return new StructuralChildEdge("FileStreamOn", -1, typed.FileStreamOn);
    }
    if (typed.FilterPredicate is not null)
    {
        yield return new StructuralChildEdge("FilterPredicate", -1, typed.FilterPredicate);
    }
    if (typed.IncludeColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.IncludeColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IncludeColumns", index, child);
            }
            index += 1;
        }
    }
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.IndexType is not null)
    {
        yield return new StructuralChildEdge("IndexType", -1, typed.IndexType);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.OnFileGroupOrPartitionScheme is not null)
    {
        yield return new StructuralChildEdge("OnFileGroupOrPartitionScheme", -1, typed.OnFileGroupOrPartitionScheme);
    }
    yield break;
}
if (nodeType == typeof(IndexExpressionOption))
{
    var typed = (IndexExpressionOption)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}

if (nodeType == typeof(IndexTableHint))
{
    var typed = (IndexTableHint)node;
    if (typed.IndexValues is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexValues)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexValues", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(InlineDerivedTable))
{
    var typed = (InlineDerivedTable)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.RowValues is not null)
    {
        var index = 0;
        foreach (var child in typed.RowValues)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("RowValues", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(InlineResultSetDefinition))
{
    var typed = (InlineResultSetDefinition)node;
    if (typed.ResultColumnDefinitions is not null)
    {
        var index = 0;
        foreach (var child in typed.ResultColumnDefinitions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ResultColumnDefinitions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(InsertBulkColumnDefinition))
{
    var typed = (InsertBulkColumnDefinition)node;
    if (typed.Column is not null)
    {
        yield return new StructuralChildEdge("Column", -1, typed.Column);
    }
    yield break;
}
if (nodeType == typeof(InsertBulkStatement))
{
    var typed = (InsertBulkStatement)node;
    if (typed.ColumnDefinitions is not null)
    {
        var index = 0;
        foreach (var child in typed.ColumnDefinitions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ColumnDefinitions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.To is not null)
    {
        yield return new StructuralChildEdge("To", -1, typed.To);
    }
    yield break;
}
if (nodeType == typeof(InsertMergeAction))
{
    var typed = (InsertMergeAction)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.Source is not null)
    {
        yield return new StructuralChildEdge("Source", -1, typed.Source);
    }
    yield break;
}
if (nodeType == typeof(InsertSpecification))
{
    var typed = (InsertSpecification)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.InsertSource is not null)
    {
        yield return new StructuralChildEdge("InsertSource", -1, typed.InsertSource);
    }
    if (typed.OutputClause is not null)
    {
        yield return new StructuralChildEdge("OutputClause", -1, typed.OutputClause);
    }
    if (typed.OutputIntoClause is not null)
    {
        yield return new StructuralChildEdge("OutputIntoClause", -1, typed.OutputIntoClause);
    }
    if (typed.Target is not null)
    {
        yield return new StructuralChildEdge("Target", -1, typed.Target);
    }
    if (typed.TopRowFilter is not null)
    {
        yield return new StructuralChildEdge("TopRowFilter", -1, typed.TopRowFilter);
    }
    yield break;
}
if (nodeType == typeof(InsertStatement))
{
    var typed = (InsertStatement)node;
    if (typed.InsertSpecification is not null)
    {
        yield return new StructuralChildEdge("InsertSpecification", -1, typed.InsertSpecification);
    }
    if (typed.OptimizerHints is not null)
    {
        var index = 0;
        foreach (var child in typed.OptimizerHints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OptimizerHints", index, child);
            }
            index += 1;
        }
    }
    if (typed.WithCtesAndXmlNamespaces is not null)
    {
        yield return new StructuralChildEdge("WithCtesAndXmlNamespaces", -1, typed.WithCtesAndXmlNamespaces);
    }
    yield break;
}
if (nodeType == typeof(IntegerLiteral))
{
    var typed = (IntegerLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(InternalOpenRowset))
{
    var typed = (InternalOpenRowset)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    if (typed.VarArgs is not null)
    {
        var index = 0;
        foreach (var child in typed.VarArgs)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("VarArgs", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(InvokeExternalApiFunctionCall))
{
    var typed = (InvokeExternalApiFunctionCall)node;
    if (typed.Arguments is not null)
    {
        var index = 0;
        foreach (var child in typed.Arguments)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Arguments", index, child);
            }
            index += 1;
        }
    }
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.FunctionName is not null)
    {
        yield return new StructuralChildEdge("FunctionName", -1, typed.FunctionName);
    }
    if (typed.FunctionSetName is not null)
    {
        yield return new StructuralChildEdge("FunctionSetName", -1, typed.FunctionSetName);
    }
    yield break;
}
if (nodeType == typeof(JoinParenthesisTableReference))
{
    var typed = (JoinParenthesisTableReference)node;
    if (typed.Join is not null)
    {
        yield return new StructuralChildEdge("Join", -1, typed.Join);
    }
    yield break;
}
if (nodeType == typeof(JsonForClause))
{
    var typed = (JsonForClause)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(JsonForClauseOption))
{
    var typed = (JsonForClauseOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(JsonKeyValue))
{
    var typed = (JsonKeyValue)node;
    if (typed.JsonKeyName is not null)
    {
        yield return new StructuralChildEdge("JsonKeyName", -1, typed.JsonKeyName);
    }
    if (typed.JsonValue is not null)
    {
        yield return new StructuralChildEdge("JsonValue", -1, typed.JsonValue);
    }
    yield break;
}
if (nodeType == typeof(KeySourceKeyOption))
{
    var typed = (KeySourceKeyOption)node;
    if (typed.PassPhrase is not null)
    {
        yield return new StructuralChildEdge("PassPhrase", -1, typed.PassPhrase);
    }
    yield break;
}
if (nodeType == typeof(KillQueryNotificationSubscriptionStatement))
{
    var typed = (KillQueryNotificationSubscriptionStatement)node;
    if (typed.SubscriptionId is not null)
    {
        yield return new StructuralChildEdge("SubscriptionId", -1, typed.SubscriptionId);
    }
    yield break;
}
if (nodeType == typeof(KillStatement))
{
    var typed = (KillStatement)node;
    if (typed.Parameter is not null)
    {
        yield return new StructuralChildEdge("Parameter", -1, typed.Parameter);
    }
    yield break;
}
if (nodeType == typeof(KillStatsJobStatement))
{
    var typed = (KillStatsJobStatement)node;
    if (typed.JobId is not null)
    {
        yield return new StructuralChildEdge("JobId", -1, typed.JobId);
    }
    yield break;
}


if (nodeType == typeof(LedgerTableOption))
{
    var typed = (LedgerTableOption)node;
    if (typed.LedgerViewOption is not null)
    {
        yield return new StructuralChildEdge("LedgerViewOption", -1, typed.LedgerViewOption);
    }
    yield break;
}
if (nodeType == typeof(LedgerViewOption))
{
    var typed = (LedgerViewOption)node;
    if (typed.OperationTypeColumnName is not null)
    {
        yield return new StructuralChildEdge("OperationTypeColumnName", -1, typed.OperationTypeColumnName);
    }
    if (typed.OperationTypeDescColumnName is not null)
    {
        yield return new StructuralChildEdge("OperationTypeDescColumnName", -1, typed.OperationTypeDescColumnName);
    }
    if (typed.SequenceNumberColumnName is not null)
    {
        yield return new StructuralChildEdge("SequenceNumberColumnName", -1, typed.SequenceNumberColumnName);
    }
    if (typed.TransactionIdColumnName is not null)
    {
        yield return new StructuralChildEdge("TransactionIdColumnName", -1, typed.TransactionIdColumnName);
    }
    if (typed.ViewName is not null)
    {
        yield return new StructuralChildEdge("ViewName", -1, typed.ViewName);
    }
    yield break;
}
if (nodeType == typeof(LeftFunctionCall))
{
    var typed = (LeftFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(LikePredicate))
{
    var typed = (LikePredicate)node;
    if (typed.EscapeExpression is not null)
    {
        yield return new StructuralChildEdge("EscapeExpression", -1, typed.EscapeExpression);
    }
    if (typed.FirstExpression is not null)
    {
        yield return new StructuralChildEdge("FirstExpression", -1, typed.FirstExpression);
    }
    if (typed.SecondExpression is not null)
    {
        yield return new StructuralChildEdge("SecondExpression", -1, typed.SecondExpression);
    }
    yield break;
}
if (nodeType == typeof(LineNoStatement))
{
    var typed = (LineNoStatement)node;
    if (typed.LineNo is not null)
    {
        yield return new StructuralChildEdge("LineNo", -1, typed.LineNo);
    }
    yield break;
}
if (nodeType == typeof(ListTypeCopyOption))
{
    var typed = (ListTypeCopyOption)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ListenerIPEndpointProtocolOption))
{
    var typed = (ListenerIPEndpointProtocolOption)node;
    if (typed.IPv4PartOne is not null)
    {
        yield return new StructuralChildEdge("IPv4PartOne", -1, typed.IPv4PartOne);
    }
    if (typed.IPv4PartTwo is not null)
    {
        yield return new StructuralChildEdge("IPv4PartTwo", -1, typed.IPv4PartTwo);
    }
    if (typed.IPv6 is not null)
    {
        yield return new StructuralChildEdge("IPv6", -1, typed.IPv6);
    }
    yield break;
}
if (nodeType == typeof(LiteralAtomicBlockOption))
{
    var typed = (LiteralAtomicBlockOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralAuditTargetOption))
{
    var typed = (LiteralAuditTargetOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralAvailabilityGroupOption))
{
    var typed = (LiteralAvailabilityGroupOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralBulkInsertOption))
{
    var typed = (LiteralBulkInsertOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralDatabaseOption))
{
    var typed = (LiteralDatabaseOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralEndpointProtocolOption))
{
    var typed = (LiteralEndpointProtocolOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralOpenRowsetCosmosOption))
{
    var typed = (LiteralOpenRowsetCosmosOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralOptimizerHint))
{
    var typed = (LiteralOptimizerHint)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralOptionValue))
{
    var typed = (LiteralOptionValue)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralPayloadOption))
{
    var typed = (LiteralPayloadOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralPrincipalOption))
{
    var typed = (LiteralPrincipalOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralRange))
{
    var typed = (LiteralRange)node;
    if (typed.From is not null)
    {
        yield return new StructuralChildEdge("From", -1, typed.From);
    }
    if (typed.To is not null)
    {
        yield return new StructuralChildEdge("To", -1, typed.To);
    }
    yield break;
}
if (nodeType == typeof(LiteralReplicaOption))
{
    var typed = (LiteralReplicaOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralSessionOption))
{
    var typed = (LiteralSessionOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LiteralStatisticsOption))
{
    var typed = (LiteralStatisticsOption)node;
    if (typed.Literal is not null)
    {
        yield return new StructuralChildEdge("Literal", -1, typed.Literal);
    }
    yield break;
}
if (nodeType == typeof(LiteralTableHint))
{
    var typed = (LiteralTableHint)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(LocationOption))
{
    var typed = (LocationOption)node;
    if (typed.LocationValue is not null)
    {
        yield return new StructuralChildEdge("LocationValue", -1, typed.LocationValue);
    }
    yield break;
}



if (nodeType == typeof(LowPriorityLockWaitMaxDurationOption))
{
    var typed = (LowPriorityLockWaitMaxDurationOption)node;
    if (typed.MaxDuration is not null)
    {
        yield return new StructuralChildEdge("MaxDuration", -1, typed.MaxDuration);
    }
    yield break;
}
if (nodeType == typeof(LowPriorityLockWaitTableSwitchOption))
{
    var typed = (LowPriorityLockWaitTableSwitchOption)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(MaxDispatchLatencySessionOption))
{
    var typed = (MaxDispatchLatencySessionOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(MaxDopConfigurationOption))
{
    var typed = (MaxDopConfigurationOption)node;
    if (typed.GenericOptionKind is not null)
    {
        yield return new StructuralChildEdge("GenericOptionKind", -1, typed.GenericOptionKind);
    }
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(MaxDurationOption))
{
    var typed = (MaxDurationOption)node;
    if (typed.MaxDuration is not null)
    {
        yield return new StructuralChildEdge("MaxDuration", -1, typed.MaxDuration);
    }
    yield break;
}
if (nodeType == typeof(MaxLiteral))
{
    var typed = (MaxLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(MaxRolloverFilesAuditTargetOption))
{
    var typed = (MaxRolloverFilesAuditTargetOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(MaxSizeAuditTargetOption))
{
    var typed = (MaxSizeAuditTargetOption)node;
    if (typed.Size is not null)
    {
        yield return new StructuralChildEdge("Size", -1, typed.Size);
    }
    yield break;
}
if (nodeType == typeof(MaxSizeDatabaseOption))
{
    var typed = (MaxSizeDatabaseOption)node;
    if (typed.MaxSize is not null)
    {
        yield return new StructuralChildEdge("MaxSize", -1, typed.MaxSize);
    }
    yield break;
}
if (nodeType == typeof(MaxSizeFileDeclarationOption))
{
    var typed = (MaxSizeFileDeclarationOption)node;
    if (typed.MaxSize is not null)
    {
        yield return new StructuralChildEdge("MaxSize", -1, typed.MaxSize);
    }
    yield break;
}


if (nodeType == typeof(MergeActionClause))
{
    var typed = (MergeActionClause)node;
    if (typed.Action is not null)
    {
        yield return new StructuralChildEdge("Action", -1, typed.Action);
    }
    if (typed.SearchCondition is not null)
    {
        yield return new StructuralChildEdge("SearchCondition", -1, typed.SearchCondition);
    }
    yield break;
}
if (nodeType == typeof(MergeSpecification))
{
    var typed = (MergeSpecification)node;
    if (typed.ActionClauses is not null)
    {
        var index = 0;
        foreach (var child in typed.ActionClauses)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ActionClauses", index, child);
            }
            index += 1;
        }
    }
    if (typed.OutputClause is not null)
    {
        yield return new StructuralChildEdge("OutputClause", -1, typed.OutputClause);
    }
    if (typed.OutputIntoClause is not null)
    {
        yield return new StructuralChildEdge("OutputIntoClause", -1, typed.OutputIntoClause);
    }
    if (typed.SearchCondition is not null)
    {
        yield return new StructuralChildEdge("SearchCondition", -1, typed.SearchCondition);
    }
    if (typed.TableAlias is not null)
    {
        yield return new StructuralChildEdge("TableAlias", -1, typed.TableAlias);
    }
    if (typed.TableReference is not null)
    {
        yield return new StructuralChildEdge("TableReference", -1, typed.TableReference);
    }
    if (typed.Target is not null)
    {
        yield return new StructuralChildEdge("Target", -1, typed.Target);
    }
    if (typed.TopRowFilter is not null)
    {
        yield return new StructuralChildEdge("TopRowFilter", -1, typed.TopRowFilter);
    }
    yield break;
}
if (nodeType == typeof(MergeStatement))
{
    var typed = (MergeStatement)node;
    if (typed.MergeSpecification is not null)
    {
        yield return new StructuralChildEdge("MergeSpecification", -1, typed.MergeSpecification);
    }
    if (typed.OptimizerHints is not null)
    {
        var index = 0;
        foreach (var child in typed.OptimizerHints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OptimizerHints", index, child);
            }
            index += 1;
        }
    }
    if (typed.WithCtesAndXmlNamespaces is not null)
    {
        yield return new StructuralChildEdge("WithCtesAndXmlNamespaces", -1, typed.WithCtesAndXmlNamespaces);
    }
    yield break;
}
if (nodeType == typeof(MethodSpecifier))
{
    var typed = (MethodSpecifier)node;
    if (typed.AssemblyName is not null)
    {
        yield return new StructuralChildEdge("AssemblyName", -1, typed.AssemblyName);
    }
    if (typed.ClassName is not null)
    {
        yield return new StructuralChildEdge("ClassName", -1, typed.ClassName);
    }
    if (typed.MethodName is not null)
    {
        yield return new StructuralChildEdge("MethodName", -1, typed.MethodName);
    }
    yield break;
}
if (nodeType == typeof(MirrorToClause))
{
    var typed = (MirrorToClause)node;
    if (typed.Devices is not null)
    {
        var index = 0;
        foreach (var child in typed.Devices)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Devices", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(MoneyLiteral))
{
    var typed = (MoneyLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(MoveConversationStatement))
{
    var typed = (MoveConversationStatement)node;
    if (typed.Conversation is not null)
    {
        yield return new StructuralChildEdge("Conversation", -1, typed.Conversation);
    }
    if (typed.Group is not null)
    {
        yield return new StructuralChildEdge("Group", -1, typed.Group);
    }
    yield break;
}
if (nodeType == typeof(MoveRestoreOption))
{
    var typed = (MoveRestoreOption)node;
    if (typed.LogicalFileName is not null)
    {
        yield return new StructuralChildEdge("LogicalFileName", -1, typed.LogicalFileName);
    }
    if (typed.OSFileName is not null)
    {
        yield return new StructuralChildEdge("OSFileName", -1, typed.OSFileName);
    }
    yield break;
}
if (nodeType == typeof(MoveToDropIndexOption))
{
    var typed = (MoveToDropIndexOption)node;
    if (typed.MoveTo is not null)
    {
        yield return new StructuralChildEdge("MoveTo", -1, typed.MoveTo);
    }
    yield break;
}
if (nodeType == typeof(MultiPartIdentifier))
{
    var typed = (MultiPartIdentifier)node;
    if (typed.Identifiers is not null)
    {
        var index = 0;
        foreach (var child in typed.Identifiers)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Identifiers", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(MultiPartIdentifierCallTarget))
{
    var typed = (MultiPartIdentifierCallTarget)node;
    if (typed.MultiPartIdentifier is not null)
    {
        yield return new StructuralChildEdge("MultiPartIdentifier", -1, typed.MultiPartIdentifier);
    }
    yield break;
}
if (nodeType == typeof(NameFileDeclarationOption))
{
    var typed = (NameFileDeclarationOption)node;
    if (typed.LogicalFileName is not null)
    {
        yield return new StructuralChildEdge("LogicalFileName", -1, typed.LogicalFileName);
    }
    yield break;
}
if (nodeType == typeof(NamedTableReference))
{
    var typed = (NamedTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.SchemaObject is not null)
    {
        yield return new StructuralChildEdge("SchemaObject", -1, typed.SchemaObject);
    }
    if (typed.TableHints is not null)
    {
        var index = 0;
        foreach (var child in typed.TableHints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TableHints", index, child);
            }
            index += 1;
        }
    }
    if (typed.TableSampleClause is not null)
    {
        yield return new StructuralChildEdge("TableSampleClause", -1, typed.TableSampleClause);
    }
    if (typed.TemporalClause is not null)
    {
        yield return new StructuralChildEdge("TemporalClause", -1, typed.TemporalClause);
    }
    yield break;
}
if (nodeType == typeof(NextValueForExpression))
{
    var typed = (NextValueForExpression)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.OverClause is not null)
    {
        yield return new StructuralChildEdge("OverClause", -1, typed.OverClause);
    }
    if (typed.SequenceName is not null)
    {
        yield return new StructuralChildEdge("SequenceName", -1, typed.SequenceName);
    }
    yield break;
}
if (nodeType == typeof(NullIfExpression))
{
    var typed = (NullIfExpression)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.FirstExpression is not null)
    {
        yield return new StructuralChildEdge("FirstExpression", -1, typed.FirstExpression);
    }
    if (typed.SecondExpression is not null)
    {
        yield return new StructuralChildEdge("SecondExpression", -1, typed.SecondExpression);
    }
    yield break;
}
if (nodeType == typeof(NullLiteral))
{
    var typed = (NullLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(NullableConstraintDefinition))
{
    var typed = (NullableConstraintDefinition)node;
    if (typed.ConstraintIdentifier is not null)
    {
        yield return new StructuralChildEdge("ConstraintIdentifier", -1, typed.ConstraintIdentifier);
    }
    yield break;
}
if (nodeType == typeof(NumericLiteral))
{
    var typed = (NumericLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(OdbcConvertSpecification))
{
    var typed = (OdbcConvertSpecification)node;
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    yield break;
}
if (nodeType == typeof(OdbcFunctionCall))
{
    var typed = (OdbcFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(OdbcLiteral))
{
    var typed = (OdbcLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(OdbcQualifiedJoinTableReference))
{
    var typed = (OdbcQualifiedJoinTableReference)node;
    if (typed.TableReference is not null)
    {
        yield return new StructuralChildEdge("TableReference", -1, typed.TableReference);
    }
    yield break;
}
if (nodeType == typeof(OffsetClause))
{
    var typed = (OffsetClause)node;
    if (typed.FetchExpression is not null)
    {
        yield return new StructuralChildEdge("FetchExpression", -1, typed.FetchExpression);
    }
    if (typed.OffsetExpression is not null)
    {
        yield return new StructuralChildEdge("OffsetExpression", -1, typed.OffsetExpression);
    }
    yield break;
}








if (nodeType == typeof(OnOffPrimaryConfigurationOption))
{
    var typed = (OnOffPrimaryConfigurationOption)node;
    if (typed.GenericOptionKind is not null)
    {
        yield return new StructuralChildEdge("GenericOptionKind", -1, typed.GenericOptionKind);
    }
    yield break;
}




if (nodeType == typeof(OnlineIndexLowPriorityLockWaitOption))
{
    var typed = (OnlineIndexLowPriorityLockWaitOption)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(OnlineIndexOption))
{
    var typed = (OnlineIndexOption)node;
    if (typed.LowPriorityLockWaitOption is not null)
    {
        yield return new StructuralChildEdge("LowPriorityLockWaitOption", -1, typed.LowPriorityLockWaitOption);
    }
    yield break;
}
if (nodeType == typeof(OpenCursorStatement))
{
    var typed = (OpenCursorStatement)node;
    if (typed.Cursor is not null)
    {
        yield return new StructuralChildEdge("Cursor", -1, typed.Cursor);
    }
    yield break;
}
if (nodeType == typeof(OpenJsonTableReference))
{
    var typed = (OpenJsonTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.RowPattern is not null)
    {
        yield return new StructuralChildEdge("RowPattern", -1, typed.RowPattern);
    }
    if (typed.SchemaDeclarationItems is not null)
    {
        var index = 0;
        foreach (var child in typed.SchemaDeclarationItems)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SchemaDeclarationItems", index, child);
            }
            index += 1;
        }
    }
    if (typed.Variable is not null)
    {
        yield return new StructuralChildEdge("Variable", -1, typed.Variable);
    }
    yield break;
}
if (nodeType == typeof(OpenMasterKeyStatement))
{
    var typed = (OpenMasterKeyStatement)node;
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}
if (nodeType == typeof(OpenQueryTableReference))
{
    var typed = (OpenQueryTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.LinkedServer is not null)
    {
        yield return new StructuralChildEdge("LinkedServer", -1, typed.LinkedServer);
    }
    if (typed.Query is not null)
    {
        yield return new StructuralChildEdge("Query", -1, typed.Query);
    }
    yield break;
}
if (nodeType == typeof(OpenRowsetColumnDefinition))
{
    var typed = (OpenRowsetColumnDefinition)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.ColumnIdentifier is not null)
    {
        yield return new StructuralChildEdge("ColumnIdentifier", -1, typed.ColumnIdentifier);
    }
    if (typed.ColumnOrdinal is not null)
    {
        yield return new StructuralChildEdge("ColumnOrdinal", -1, typed.ColumnOrdinal);
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.JsonPath is not null)
    {
        yield return new StructuralChildEdge("JsonPath", -1, typed.JsonPath);
    }
    yield break;
}
if (nodeType == typeof(OpenRowsetCosmos))
{
    var typed = (OpenRowsetCosmos)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.WithColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.WithColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("WithColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(OpenRowsetTableReference))
{
    var typed = (OpenRowsetTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.DataSource is not null)
    {
        yield return new StructuralChildEdge("DataSource", -1, typed.DataSource);
    }
    if (typed.Object is not null)
    {
        yield return new StructuralChildEdge("Object", -1, typed.Object);
    }
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    if (typed.ProviderName is not null)
    {
        yield return new StructuralChildEdge("ProviderName", -1, typed.ProviderName);
    }
    if (typed.ProviderString is not null)
    {
        yield return new StructuralChildEdge("ProviderString", -1, typed.ProviderString);
    }
    if (typed.Query is not null)
    {
        yield return new StructuralChildEdge("Query", -1, typed.Query);
    }
    if (typed.UserId is not null)
    {
        yield return new StructuralChildEdge("UserId", -1, typed.UserId);
    }
    if (typed.WithColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.WithColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("WithColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(OpenSymmetricKeyStatement))
{
    var typed = (OpenSymmetricKeyStatement)node;
    if (typed.DecryptionMechanism is not null)
    {
        yield return new StructuralChildEdge("DecryptionMechanism", -1, typed.DecryptionMechanism);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(OpenXmlTableReference))
{
    var typed = (OpenXmlTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Flags is not null)
    {
        yield return new StructuralChildEdge("Flags", -1, typed.Flags);
    }
    if (typed.RowPattern is not null)
    {
        yield return new StructuralChildEdge("RowPattern", -1, typed.RowPattern);
    }
    if (typed.SchemaDeclarationItems is not null)
    {
        var index = 0;
        foreach (var child in typed.SchemaDeclarationItems)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SchemaDeclarationItems", index, child);
            }
            index += 1;
        }
    }
    if (typed.TableName is not null)
    {
        yield return new StructuralChildEdge("TableName", -1, typed.TableName);
    }
    if (typed.Variable is not null)
    {
        yield return new StructuralChildEdge("Variable", -1, typed.Variable);
    }
    yield break;
}

if (nodeType == typeof(OptimizeForOptimizerHint))
{
    var typed = (OptimizeForOptimizerHint)node;
    if (typed.Pairs is not null)
    {
        var index = 0;
        foreach (var child in typed.Pairs)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Pairs", index, child);
            }
            index += 1;
        }
    }
    yield break;
}


if (nodeType == typeof(OrderBulkInsertOption))
{
    var typed = (OrderBulkInsertOption)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(OrderByClause))
{
    var typed = (OrderByClause)node;
    if (typed.OrderByElements is not null)
    {
        var index = 0;
        foreach (var child in typed.OrderByElements)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OrderByElements", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(OrderIndexOption))
{
    var typed = (OrderIndexOption)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(OutputClause))
{
    var typed = (OutputClause)node;
    if (typed.SelectColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.SelectColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SelectColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(OutputIntoClause))
{
    var typed = (OutputIntoClause)node;
    if (typed.IntoTable is not null)
    {
        yield return new StructuralChildEdge("IntoTable", -1, typed.IntoTable);
    }
    if (typed.IntoTableColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.IntoTableColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IntoTableColumns", index, child);
            }
            index += 1;
        }
    }
    if (typed.SelectColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.SelectColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SelectColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(OverClause))
{
    var typed = (OverClause)node;
    if (typed.OrderByClause is not null)
    {
        yield return new StructuralChildEdge("OrderByClause", -1, typed.OrderByClause);
    }
    if (typed.Partitions is not null)
    {
        var index = 0;
        foreach (var child in typed.Partitions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Partitions", index, child);
            }
            index += 1;
        }
    }
    if (typed.WindowFrameClause is not null)
    {
        yield return new StructuralChildEdge("WindowFrameClause", -1, typed.WindowFrameClause);
    }
    if (typed.WindowName is not null)
    {
        yield return new StructuralChildEdge("WindowName", -1, typed.WindowName);
    }
    yield break;
}


if (nodeType == typeof(ParameterlessCall))
{
    var typed = (ParameterlessCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(ParenthesisExpression))
{
    var typed = (ParenthesisExpression)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(ParseCall))
{
    var typed = (ParseCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Culture is not null)
    {
        yield return new StructuralChildEdge("Culture", -1, typed.Culture);
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.StringValue is not null)
    {
        yield return new StructuralChildEdge("StringValue", -1, typed.StringValue);
    }
    yield break;
}
if (nodeType == typeof(PartitionFunctionCall))
{
    var typed = (PartitionFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.FunctionName is not null)
    {
        yield return new StructuralChildEdge("FunctionName", -1, typed.FunctionName);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(PartitionParameterType))
{
    var typed = (PartitionParameterType)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    yield break;
}
if (nodeType == typeof(PartitionSpecifier))
{
    var typed = (PartitionSpecifier)node;
    if (typed.Number is not null)
    {
        yield return new StructuralChildEdge("Number", -1, typed.Number);
    }
    yield break;
}
if (nodeType == typeof(PartnerDatabaseOption))
{
    var typed = (PartnerDatabaseOption)node;
    if (typed.PartnerServer is not null)
    {
        yield return new StructuralChildEdge("PartnerServer", -1, typed.PartnerServer);
    }
    if (typed.Timeout is not null)
    {
        yield return new StructuralChildEdge("Timeout", -1, typed.Timeout);
    }
    yield break;
}
if (nodeType == typeof(PasswordAlterPrincipalOption))
{
    var typed = (PasswordAlterPrincipalOption)node;
    if (typed.OldPassword is not null)
    {
        yield return new StructuralChildEdge("OldPassword", -1, typed.OldPassword);
    }
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}
if (nodeType == typeof(PasswordCreateLoginSource))
{
    var typed = (PasswordCreateLoginSource)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}
if (nodeType == typeof(Permission))
{
    var typed = (Permission)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.Identifiers is not null)
    {
        var index = 0;
        foreach (var child in typed.Identifiers)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Identifiers", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(PivotedTableReference))
{
    var typed = (PivotedTableReference)node;
    if (typed.AggregateFunctionIdentifier is not null)
    {
        yield return new StructuralChildEdge("AggregateFunctionIdentifier", -1, typed.AggregateFunctionIdentifier);
    }
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.InColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.InColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("InColumns", index, child);
            }
            index += 1;
        }
    }
    if (typed.PivotColumn is not null)
    {
        yield return new StructuralChildEdge("PivotColumn", -1, typed.PivotColumn);
    }
    if (typed.TableReference is not null)
    {
        yield return new StructuralChildEdge("TableReference", -1, typed.TableReference);
    }
    if (typed.ValueColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.ValueColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ValueColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}


if (nodeType == typeof(PredictTableReference))
{
    var typed = (PredictTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.DataSource is not null)
    {
        yield return new StructuralChildEdge("DataSource", -1, typed.DataSource);
    }
    if (typed.ModelSubquery is not null)
    {
        yield return new StructuralChildEdge("ModelSubquery", -1, typed.ModelSubquery);
    }
    if (typed.ModelVariable is not null)
    {
        yield return new StructuralChildEdge("ModelVariable", -1, typed.ModelVariable);
    }
    if (typed.RunTime is not null)
    {
        yield return new StructuralChildEdge("RunTime", -1, typed.RunTime);
    }
    if (typed.SchemaDeclarationItems is not null)
    {
        var index = 0;
        foreach (var child in typed.SchemaDeclarationItems)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SchemaDeclarationItems", index, child);
            }
            index += 1;
        }
    }
    yield break;
}


if (nodeType == typeof(PrintStatement))
{
    var typed = (PrintStatement)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(Privilege80))
{
    var typed = (Privilege80)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(PrivilegeSecurityElement80))
{
    var typed = (PrivilegeSecurityElement80)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.Privileges is not null)
    {
        var index = 0;
        foreach (var child in typed.Privileges)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Privileges", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}

if (nodeType == typeof(ProcedureParameter))
{
    var typed = (ProcedureParameter)node;
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.Nullable is not null)
    {
        yield return new StructuralChildEdge("Nullable", -1, typed.Nullable);
    }
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    if (typed.VariableName is not null)
    {
        yield return new StructuralChildEdge("VariableName", -1, typed.VariableName);
    }
    yield break;
}
if (nodeType == typeof(ProcedureReference))
{
    var typed = (ProcedureReference)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Number is not null)
    {
        yield return new StructuralChildEdge("Number", -1, typed.Number);
    }
    yield break;
}
if (nodeType == typeof(ProcedureReferenceName))
{
    var typed = (ProcedureReferenceName)node;
    if (typed.ProcedureReference is not null)
    {
        yield return new StructuralChildEdge("ProcedureReference", -1, typed.ProcedureReference);
    }
    if (typed.ProcedureVariable is not null)
    {
        yield return new StructuralChildEdge("ProcedureVariable", -1, typed.ProcedureVariable);
    }
    yield break;
}
if (nodeType == typeof(ProcessAffinityRange))
{
    var typed = (ProcessAffinityRange)node;
    if (typed.From is not null)
    {
        yield return new StructuralChildEdge("From", -1, typed.From);
    }
    if (typed.To is not null)
    {
        yield return new StructuralChildEdge("To", -1, typed.To);
    }
    yield break;
}
if (nodeType == typeof(ProviderEncryptionSource))
{
    var typed = (ProviderEncryptionSource)node;
    if (typed.KeyOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.KeyOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("KeyOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(ProviderKeyNameKeyOption))
{
    var typed = (ProviderKeyNameKeyOption)node;
    if (typed.KeyName is not null)
    {
        yield return new StructuralChildEdge("KeyName", -1, typed.KeyName);
    }
    yield break;
}
if (nodeType == typeof(QualifiedJoin))
{
    var typed = (QualifiedJoin)node;
    if (typed.FirstTableReference is not null)
    {
        yield return new StructuralChildEdge("FirstTableReference", -1, typed.FirstTableReference);
    }
    if (typed.SearchCondition is not null)
    {
        yield return new StructuralChildEdge("SearchCondition", -1, typed.SearchCondition);
    }
    if (typed.SecondTableReference is not null)
    {
        yield return new StructuralChildEdge("SecondTableReference", -1, typed.SecondTableReference);
    }
    yield break;
}
if (nodeType == typeof(QueryDerivedTable))
{
    var typed = (QueryDerivedTable)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.QueryExpression is not null)
    {
        yield return new StructuralChildEdge("QueryExpression", -1, typed.QueryExpression);
    }
    yield break;
}
if (nodeType == typeof(QueryParenthesisExpression))
{
    var typed = (QueryParenthesisExpression)node;
    if (typed.ForClause is not null)
    {
        yield return new StructuralChildEdge("ForClause", -1, typed.ForClause);
    }
    if (typed.OffsetClause is not null)
    {
        yield return new StructuralChildEdge("OffsetClause", -1, typed.OffsetClause);
    }
    if (typed.OrderByClause is not null)
    {
        yield return new StructuralChildEdge("OrderByClause", -1, typed.OrderByClause);
    }
    if (typed.QueryExpression is not null)
    {
        yield return new StructuralChildEdge("QueryExpression", -1, typed.QueryExpression);
    }
    yield break;
}
if (nodeType == typeof(QuerySpecification))
{
    var typed = (QuerySpecification)node;
    if (typed.ForClause is not null)
    {
        yield return new StructuralChildEdge("ForClause", -1, typed.ForClause);
    }
    if (typed.FromClause is not null)
    {
        yield return new StructuralChildEdge("FromClause", -1, typed.FromClause);
    }
    if (typed.GroupByClause is not null)
    {
        yield return new StructuralChildEdge("GroupByClause", -1, typed.GroupByClause);
    }
    if (typed.HavingClause is not null)
    {
        yield return new StructuralChildEdge("HavingClause", -1, typed.HavingClause);
    }
    if (typed.OffsetClause is not null)
    {
        yield return new StructuralChildEdge("OffsetClause", -1, typed.OffsetClause);
    }
    if (typed.OrderByClause is not null)
    {
        yield return new StructuralChildEdge("OrderByClause", -1, typed.OrderByClause);
    }
    if (typed.SelectElements is not null)
    {
        var index = 0;
        foreach (var child in typed.SelectElements)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SelectElements", index, child);
            }
            index += 1;
        }
    }
    if (typed.TopRowFilter is not null)
    {
        yield return new StructuralChildEdge("TopRowFilter", -1, typed.TopRowFilter);
    }
    if (typed.WhereClause is not null)
    {
        yield return new StructuralChildEdge("WhereClause", -1, typed.WhereClause);
    }
    if (typed.WindowClause is not null)
    {
        yield return new StructuralChildEdge("WindowClause", -1, typed.WindowClause);
    }
    yield break;
}

if (nodeType == typeof(QueryStoreDataFlushIntervalOption))
{
    var typed = (QueryStoreDataFlushIntervalOption)node;
    if (typed.FlushInterval is not null)
    {
        yield return new StructuralChildEdge("FlushInterval", -1, typed.FlushInterval);
    }
    yield break;
}
if (nodeType == typeof(QueryStoreDatabaseOption))
{
    var typed = (QueryStoreDatabaseOption)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(QueryStoreIntervalLengthOption))
{
    var typed = (QueryStoreIntervalLengthOption)node;
    if (typed.StatsIntervalLength is not null)
    {
        yield return new StructuralChildEdge("StatsIntervalLength", -1, typed.StatsIntervalLength);
    }
    yield break;
}
if (nodeType == typeof(QueryStoreMaxPlansPerQueryOption))
{
    var typed = (QueryStoreMaxPlansPerQueryOption)node;
    if (typed.MaxPlansPerQuery is not null)
    {
        yield return new StructuralChildEdge("MaxPlansPerQuery", -1, typed.MaxPlansPerQuery);
    }
    yield break;
}
if (nodeType == typeof(QueryStoreMaxStorageSizeOption))
{
    var typed = (QueryStoreMaxStorageSizeOption)node;
    if (typed.MaxQdsSize is not null)
    {
        yield return new StructuralChildEdge("MaxQdsSize", -1, typed.MaxQdsSize);
    }
    yield break;
}

if (nodeType == typeof(QueryStoreTimeCleanupPolicyOption))
{
    var typed = (QueryStoreTimeCleanupPolicyOption)node;
    if (typed.StaleQueryThreshold is not null)
    {
        yield return new StructuralChildEdge("StaleQueryThreshold", -1, typed.StaleQueryThreshold);
    }
    yield break;
}

if (nodeType == typeof(QueueDelayAuditOption))
{
    var typed = (QueueDelayAuditOption)node;
    if (typed.Delay is not null)
    {
        yield return new StructuralChildEdge("Delay", -1, typed.Delay);
    }
    yield break;
}
if (nodeType == typeof(QueueExecuteAsOption))
{
    var typed = (QueueExecuteAsOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}

if (nodeType == typeof(QueueProcedureOption))
{
    var typed = (QueueProcedureOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}

if (nodeType == typeof(QueueValueOption))
{
    var typed = (QueueValueOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}
if (nodeType == typeof(RaiseErrorLegacyStatement))
{
    var typed = (RaiseErrorLegacyStatement)node;
    if (typed.FirstParameter is not null)
    {
        yield return new StructuralChildEdge("FirstParameter", -1, typed.FirstParameter);
    }
    if (typed.SecondParameter is not null)
    {
        yield return new StructuralChildEdge("SecondParameter", -1, typed.SecondParameter);
    }
    yield break;
}
if (nodeType == typeof(RaiseErrorStatement))
{
    var typed = (RaiseErrorStatement)node;
    if (typed.FirstParameter is not null)
    {
        yield return new StructuralChildEdge("FirstParameter", -1, typed.FirstParameter);
    }
    if (typed.OptionalParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.OptionalParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OptionalParameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.SecondParameter is not null)
    {
        yield return new StructuralChildEdge("SecondParameter", -1, typed.SecondParameter);
    }
    if (typed.ThirdParameter is not null)
    {
        yield return new StructuralChildEdge("ThirdParameter", -1, typed.ThirdParameter);
    }
    yield break;
}

if (nodeType == typeof(ReadTextStatement))
{
    var typed = (ReadTextStatement)node;
    if (typed.Column is not null)
    {
        yield return new StructuralChildEdge("Column", -1, typed.Column);
    }
    if (typed.Offset is not null)
    {
        yield return new StructuralChildEdge("Offset", -1, typed.Offset);
    }
    if (typed.Size is not null)
    {
        yield return new StructuralChildEdge("Size", -1, typed.Size);
    }
    if (typed.TextPointer is not null)
    {
        yield return new StructuralChildEdge("TextPointer", -1, typed.TextPointer);
    }
    yield break;
}
if (nodeType == typeof(RealLiteral))
{
    var typed = (RealLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(ReceiveStatement))
{
    var typed = (ReceiveStatement)node;
    if (typed.Into is not null)
    {
        yield return new StructuralChildEdge("Into", -1, typed.Into);
    }
    if (typed.Queue is not null)
    {
        yield return new StructuralChildEdge("Queue", -1, typed.Queue);
    }
    if (typed.SelectElements is not null)
    {
        var index = 0;
        foreach (var child in typed.SelectElements)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SelectElements", index, child);
            }
            index += 1;
        }
    }
    if (typed.Top is not null)
    {
        yield return new StructuralChildEdge("Top", -1, typed.Top);
    }
    if (typed.Where is not null)
    {
        yield return new StructuralChildEdge("Where", -1, typed.Where);
    }
    yield break;
}


if (nodeType == typeof(RegexpLikePredicate))
{
    var typed = (RegexpLikePredicate)node;
    if (typed.Flags is not null)
    {
        yield return new StructuralChildEdge("Flags", -1, typed.Flags);
    }
    if (typed.Pattern is not null)
    {
        yield return new StructuralChildEdge("Pattern", -1, typed.Pattern);
    }
    if (typed.Text is not null)
    {
        yield return new StructuralChildEdge("Text", -1, typed.Text);
    }
    yield break;
}
if (nodeType == typeof(RemoteDataArchiveAlterTableOption))
{
    var typed = (RemoteDataArchiveAlterTableOption)node;
    if (typed.FilterPredicate is not null)
    {
        yield return new StructuralChildEdge("FilterPredicate", -1, typed.FilterPredicate);
    }
    yield break;
}
if (nodeType == typeof(RemoteDataArchiveDatabaseOption))
{
    var typed = (RemoteDataArchiveDatabaseOption)node;
    if (typed.Settings is not null)
    {
        var index = 0;
        foreach (var child in typed.Settings)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Settings", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(RemoteDataArchiveDbCredentialSetting))
{
    var typed = (RemoteDataArchiveDbCredentialSetting)node;
    if (typed.Credential is not null)
    {
        yield return new StructuralChildEdge("Credential", -1, typed.Credential);
    }
    yield break;
}

if (nodeType == typeof(RemoteDataArchiveDbServerSetting))
{
    var typed = (RemoteDataArchiveDbServerSetting)node;
    if (typed.Server is not null)
    {
        yield return new StructuralChildEdge("Server", -1, typed.Server);
    }
    yield break;
}

if (nodeType == typeof(RenameAlterRoleAction))
{
    var typed = (RenameAlterRoleAction)node;
    if (typed.NewName is not null)
    {
        yield return new StructuralChildEdge("NewName", -1, typed.NewName);
    }
    yield break;
}
if (nodeType == typeof(RenameEntityStatement))
{
    var typed = (RenameEntityStatement)node;
    if (typed.NewName is not null)
    {
        yield return new StructuralChildEdge("NewName", -1, typed.NewName);
    }
    if (typed.OldName is not null)
    {
        yield return new StructuralChildEdge("OldName", -1, typed.OldName);
    }
    yield break;
}
if (nodeType == typeof(ResampleStatisticsOption))
{
    var typed = (ResampleStatisticsOption)node;
    if (typed.Partitions is not null)
    {
        var index = 0;
        foreach (var child in typed.Partitions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Partitions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ResourcePoolAffinitySpecification))
{
    var typed = (ResourcePoolAffinitySpecification)node;
    if (typed.ParameterValue is not null)
    {
        yield return new StructuralChildEdge("ParameterValue", -1, typed.ParameterValue);
    }
    if (typed.PoolAffinityRanges is not null)
    {
        var index = 0;
        foreach (var child in typed.PoolAffinityRanges)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PoolAffinityRanges", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ResourcePoolParameter))
{
    var typed = (ResourcePoolParameter)node;
    if (typed.AffinitySpecification is not null)
    {
        yield return new StructuralChildEdge("AffinitySpecification", -1, typed.AffinitySpecification);
    }
    if (typed.ParameterValue is not null)
    {
        yield return new StructuralChildEdge("ParameterValue", -1, typed.ParameterValue);
    }
    yield break;
}
if (nodeType == typeof(ResourcePoolStatement))
{
    var typed = (ResourcePoolStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.ResourcePoolParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.ResourcePoolParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ResourcePoolParameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(RestoreMasterKeyStatement))
{
    var typed = (RestoreMasterKeyStatement)node;
    if (typed.EncryptionPassword is not null)
    {
        yield return new StructuralChildEdge("EncryptionPassword", -1, typed.EncryptionPassword);
    }
    if (typed.File is not null)
    {
        yield return new StructuralChildEdge("File", -1, typed.File);
    }
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}

if (nodeType == typeof(RestoreServiceMasterKeyStatement))
{
    var typed = (RestoreServiceMasterKeyStatement)node;
    if (typed.File is not null)
    {
        yield return new StructuralChildEdge("File", -1, typed.File);
    }
    if (typed.Password is not null)
    {
        yield return new StructuralChildEdge("Password", -1, typed.Password);
    }
    yield break;
}
if (nodeType == typeof(RestoreStatement))
{
    var typed = (RestoreStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    if (typed.Devices is not null)
    {
        var index = 0;
        foreach (var child in typed.Devices)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Devices", index, child);
            }
            index += 1;
        }
    }
    if (typed.Files is not null)
    {
        var index = 0;
        foreach (var child in typed.Files)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Files", index, child);
            }
            index += 1;
        }
    }
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(ResultColumnDefinition))
{
    var typed = (ResultColumnDefinition)node;
    if (typed.ColumnDefinition is not null)
    {
        yield return new StructuralChildEdge("ColumnDefinition", -1, typed.ColumnDefinition);
    }
    if (typed.Nullable is not null)
    {
        yield return new StructuralChildEdge("Nullable", -1, typed.Nullable);
    }
    yield break;
}

if (nodeType == typeof(ResultSetsExecuteOption))
{
    var typed = (ResultSetsExecuteOption)node;
    if (typed.Definitions is not null)
    {
        var index = 0;
        foreach (var child in typed.Definitions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Definitions", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(RetentionDaysAuditTargetOption))
{
    var typed = (RetentionDaysAuditTargetOption)node;
    if (typed.Days is not null)
    {
        yield return new StructuralChildEdge("Days", -1, typed.Days);
    }
    yield break;
}
if (nodeType == typeof(RetentionPeriodDefinition))
{
    var typed = (RetentionPeriodDefinition)node;
    if (typed.Duration is not null)
    {
        yield return new StructuralChildEdge("Duration", -1, typed.Duration);
    }
    yield break;
}
if (nodeType == typeof(ReturnStatement))
{
    var typed = (ReturnStatement)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(RevertStatement))
{
    var typed = (RevertStatement)node;
    if (typed.Cookie is not null)
    {
        yield return new StructuralChildEdge("Cookie", -1, typed.Cookie);
    }
    yield break;
}
if (nodeType == typeof(RevokeStatement))
{
    var typed = (RevokeStatement)node;
    if (typed.AsClause is not null)
    {
        yield return new StructuralChildEdge("AsClause", -1, typed.AsClause);
    }
    if (typed.Permissions is not null)
    {
        var index = 0;
        foreach (var child in typed.Permissions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Permissions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Principals is not null)
    {
        var index = 0;
        foreach (var child in typed.Principals)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Principals", index, child);
            }
            index += 1;
        }
    }
    if (typed.SecurityTargetObject is not null)
    {
        yield return new StructuralChildEdge("SecurityTargetObject", -1, typed.SecurityTargetObject);
    }
    yield break;
}
if (nodeType == typeof(RevokeStatement80))
{
    var typed = (RevokeStatement80)node;
    if (typed.AsClause is not null)
    {
        yield return new StructuralChildEdge("AsClause", -1, typed.AsClause);
    }
    if (typed.SecurityElement80 is not null)
    {
        yield return new StructuralChildEdge("SecurityElement80", -1, typed.SecurityElement80);
    }
    if (typed.SecurityUserClause80 is not null)
    {
        yield return new StructuralChildEdge("SecurityUserClause80", -1, typed.SecurityUserClause80);
    }
    yield break;
}
if (nodeType == typeof(RightFunctionCall))
{
    var typed = (RightFunctionCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(RollbackTransactionStatement))
{
    var typed = (RollbackTransactionStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(RollupGroupingSpecification))
{
    var typed = (RollupGroupingSpecification)node;
    if (typed.Arguments is not null)
    {
        var index = 0;
        foreach (var child in typed.Arguments)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Arguments", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(RouteOption))
{
    var typed = (RouteOption)node;
    if (typed.Literal is not null)
    {
        yield return new StructuralChildEdge("Literal", -1, typed.Literal);
    }
    yield break;
}
if (nodeType == typeof(RowValue))
{
    var typed = (RowValue)node;
    if (typed.ColumnValues is not null)
    {
        var index = 0;
        foreach (var child in typed.ColumnValues)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ColumnValues", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(SaveTransactionStatement))
{
    var typed = (SaveTransactionStatement)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(ScalarExpressionDialogOption))
{
    var typed = (ScalarExpressionDialogOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(ScalarExpressionRestoreOption))
{
    var typed = (ScalarExpressionRestoreOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(ScalarExpressionSequenceOption))
{
    var typed = (ScalarExpressionSequenceOption)node;
    if (typed.OptionValue is not null)
    {
        yield return new StructuralChildEdge("OptionValue", -1, typed.OptionValue);
    }
    yield break;
}

if (nodeType == typeof(ScalarFunctionReturnType))
{
    var typed = (ScalarFunctionReturnType)node;
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    yield break;
}
if (nodeType == typeof(ScalarSubquery))
{
    var typed = (ScalarSubquery)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.QueryExpression is not null)
    {
        yield return new StructuralChildEdge("QueryExpression", -1, typed.QueryExpression);
    }
    yield break;
}
if (nodeType == typeof(SchemaDeclarationItem))
{
    var typed = (SchemaDeclarationItem)node;
    if (typed.ColumnDefinition is not null)
    {
        yield return new StructuralChildEdge("ColumnDefinition", -1, typed.ColumnDefinition);
    }
    if (typed.Mapping is not null)
    {
        yield return new StructuralChildEdge("Mapping", -1, typed.Mapping);
    }
    yield break;
}
if (nodeType == typeof(SchemaDeclarationItemOpenjson))
{
    var typed = (SchemaDeclarationItemOpenjson)node;
    if (typed.ColumnDefinition is not null)
    {
        yield return new StructuralChildEdge("ColumnDefinition", -1, typed.ColumnDefinition);
    }
    if (typed.Mapping is not null)
    {
        yield return new StructuralChildEdge("Mapping", -1, typed.Mapping);
    }
    yield break;
}
if (nodeType == typeof(SchemaObjectFunctionTableReference))
{
    var typed = (SchemaObjectFunctionTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaObject is not null)
    {
        yield return new StructuralChildEdge("SchemaObject", -1, typed.SchemaObject);
    }
    yield break;
}
if (nodeType == typeof(SchemaObjectName))
{
    var typed = (SchemaObjectName)node;
    if (typed.BaseIdentifier is not null)
    {
        yield return new StructuralChildEdge("BaseIdentifier", -1, typed.BaseIdentifier);
    }
    if (typed.DatabaseIdentifier is not null)
    {
        yield return new StructuralChildEdge("DatabaseIdentifier", -1, typed.DatabaseIdentifier);
    }
    if (typed.Identifiers is not null)
    {
        var index = 0;
        foreach (var child in typed.Identifiers)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Identifiers", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaIdentifier is not null)
    {
        yield return new StructuralChildEdge("SchemaIdentifier", -1, typed.SchemaIdentifier);
    }
    if (typed.ServerIdentifier is not null)
    {
        yield return new StructuralChildEdge("ServerIdentifier", -1, typed.ServerIdentifier);
    }
    yield break;
}
if (nodeType == typeof(SchemaObjectNameOrValueExpression))
{
    var typed = (SchemaObjectNameOrValueExpression)node;
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    if (typed.ValueExpression is not null)
    {
        yield return new StructuralChildEdge("ValueExpression", -1, typed.ValueExpression);
    }
    yield break;
}
if (nodeType == typeof(SchemaObjectNameSnippet))
{
    var typed = (SchemaObjectNameSnippet)node;
    if (typed.BaseIdentifier is not null)
    {
        yield return new StructuralChildEdge("BaseIdentifier", -1, typed.BaseIdentifier);
    }
    if (typed.DatabaseIdentifier is not null)
    {
        yield return new StructuralChildEdge("DatabaseIdentifier", -1, typed.DatabaseIdentifier);
    }
    if (typed.Identifiers is not null)
    {
        var index = 0;
        foreach (var child in typed.Identifiers)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Identifiers", index, child);
            }
            index += 1;
        }
    }
    if (typed.SchemaIdentifier is not null)
    {
        yield return new StructuralChildEdge("SchemaIdentifier", -1, typed.SchemaIdentifier);
    }
    if (typed.ServerIdentifier is not null)
    {
        yield return new StructuralChildEdge("ServerIdentifier", -1, typed.ServerIdentifier);
    }
    yield break;
}
if (nodeType == typeof(SchemaObjectResultSetDefinition))
{
    var typed = (SchemaObjectResultSetDefinition)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}

if (nodeType == typeof(SearchPropertyListFullTextIndexOption))
{
    var typed = (SearchPropertyListFullTextIndexOption)node;
    if (typed.PropertyListName is not null)
    {
        yield return new StructuralChildEdge("PropertyListName", -1, typed.PropertyListName);
    }
    yield break;
}
if (nodeType == typeof(SearchedCaseExpression))
{
    var typed = (SearchedCaseExpression)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.ElseExpression is not null)
    {
        yield return new StructuralChildEdge("ElseExpression", -1, typed.ElseExpression);
    }
    if (typed.WhenClauses is not null)
    {
        var index = 0;
        foreach (var child in typed.WhenClauses)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("WhenClauses", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(SearchedWhenClause))
{
    var typed = (SearchedWhenClause)node;
    if (typed.ThenExpression is not null)
    {
        yield return new StructuralChildEdge("ThenExpression", -1, typed.ThenExpression);
    }
    if (typed.WhenExpression is not null)
    {
        yield return new StructuralChildEdge("WhenExpression", -1, typed.WhenExpression);
    }
    yield break;
}


if (nodeType == typeof(SecurityPredicateAction))
{
    var typed = (SecurityPredicateAction)node;
    if (typed.FunctionCall is not null)
    {
        yield return new StructuralChildEdge("FunctionCall", -1, typed.FunctionCall);
    }
    if (typed.TargetObjectName is not null)
    {
        yield return new StructuralChildEdge("TargetObjectName", -1, typed.TargetObjectName);
    }
    yield break;
}
if (nodeType == typeof(SecurityPrincipal))
{
    var typed = (SecurityPrincipal)node;
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    yield break;
}
if (nodeType == typeof(SecurityTargetObject))
{
    var typed = (SecurityTargetObject)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.ObjectName is not null)
    {
        yield return new StructuralChildEdge("ObjectName", -1, typed.ObjectName);
    }
    yield break;
}
if (nodeType == typeof(SecurityTargetObjectName))
{
    var typed = (SecurityTargetObjectName)node;
    if (typed.MultiPartIdentifier is not null)
    {
        yield return new StructuralChildEdge("MultiPartIdentifier", -1, typed.MultiPartIdentifier);
    }
    yield break;
}
if (nodeType == typeof(SecurityUserClause80))
{
    var typed = (SecurityUserClause80)node;
    if (typed.Users is not null)
    {
        var index = 0;
        foreach (var child in typed.Users)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Users", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(SelectFunctionReturnType))
{
    var typed = (SelectFunctionReturnType)node;
    if (typed.SelectStatement is not null)
    {
        yield return new StructuralChildEdge("SelectStatement", -1, typed.SelectStatement);
    }
    yield break;
}
if (nodeType == typeof(SelectInsertSource))
{
    var typed = (SelectInsertSource)node;
    if (typed.Select is not null)
    {
        yield return new StructuralChildEdge("Select", -1, typed.Select);
    }
    yield break;
}
if (nodeType == typeof(SelectScalarExpression))
{
    var typed = (SelectScalarExpression)node;
    if (typed.ColumnName is not null)
    {
        yield return new StructuralChildEdge("ColumnName", -1, typed.ColumnName);
    }
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(SelectSetVariable))
{
    var typed = (SelectSetVariable)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    if (typed.Variable is not null)
    {
        yield return new StructuralChildEdge("Variable", -1, typed.Variable);
    }
    yield break;
}
if (nodeType == typeof(SelectStarExpression))
{
    var typed = (SelectStarExpression)node;
    if (typed.Qualifier is not null)
    {
        yield return new StructuralChildEdge("Qualifier", -1, typed.Qualifier);
    }
    yield break;
}
if (nodeType == typeof(SelectStatement))
{
    var typed = (SelectStatement)node;
    if (typed.ComputeClauses is not null)
    {
        var index = 0;
        foreach (var child in typed.ComputeClauses)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ComputeClauses", index, child);
            }
            index += 1;
        }
    }
    if (typed.Into is not null)
    {
        yield return new StructuralChildEdge("Into", -1, typed.Into);
    }
    if (typed.On is not null)
    {
        yield return new StructuralChildEdge("On", -1, typed.On);
    }
    if (typed.OptimizerHints is not null)
    {
        var index = 0;
        foreach (var child in typed.OptimizerHints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OptimizerHints", index, child);
            }
            index += 1;
        }
    }
    if (typed.QueryExpression is not null)
    {
        yield return new StructuralChildEdge("QueryExpression", -1, typed.QueryExpression);
    }
    if (typed.WithCtesAndXmlNamespaces is not null)
    {
        yield return new StructuralChildEdge("WithCtesAndXmlNamespaces", -1, typed.WithCtesAndXmlNamespaces);
    }
    yield break;
}
if (nodeType == typeof(SelectStatementSnippet))
{
    var typed = (SelectStatementSnippet)node;
    if (typed.ComputeClauses is not null)
    {
        var index = 0;
        foreach (var child in typed.ComputeClauses)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ComputeClauses", index, child);
            }
            index += 1;
        }
    }
    if (typed.Into is not null)
    {
        yield return new StructuralChildEdge("Into", -1, typed.Into);
    }
    if (typed.On is not null)
    {
        yield return new StructuralChildEdge("On", -1, typed.On);
    }
    if (typed.OptimizerHints is not null)
    {
        var index = 0;
        foreach (var child in typed.OptimizerHints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OptimizerHints", index, child);
            }
            index += 1;
        }
    }
    if (typed.QueryExpression is not null)
    {
        yield return new StructuralChildEdge("QueryExpression", -1, typed.QueryExpression);
    }
    if (typed.WithCtesAndXmlNamespaces is not null)
    {
        yield return new StructuralChildEdge("WithCtesAndXmlNamespaces", -1, typed.WithCtesAndXmlNamespaces);
    }
    yield break;
}
if (nodeType == typeof(SelectiveXmlIndexPromotedPath))
{
    var typed = (SelectiveXmlIndexPromotedPath)node;
    if (typed.MaxLength is not null)
    {
        yield return new StructuralChildEdge("MaxLength", -1, typed.MaxLength);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Path is not null)
    {
        yield return new StructuralChildEdge("Path", -1, typed.Path);
    }
    if (typed.SQLDataType is not null)
    {
        yield return new StructuralChildEdge("SQLDataType", -1, typed.SQLDataType);
    }
    if (typed.XQueryDataType is not null)
    {
        yield return new StructuralChildEdge("XQueryDataType", -1, typed.XQueryDataType);
    }
    yield break;
}
if (nodeType == typeof(SemanticIndexChunkOption))
{
    var typed = (SemanticIndexChunkOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(SemanticIndexColumn))
{
    var typed = (SemanticIndexColumn)node;
    if (typed.ChunkOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.ChunkOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ChunkOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.ColumnName is not null)
    {
        yield return new StructuralChildEdge("ColumnName", -1, typed.ColumnName);
    }
    if (typed.Language is not null)
    {
        yield return new StructuralChildEdge("Language", -1, typed.Language);
    }
    if (typed.TypeColumnName is not null)
    {
        yield return new StructuralChildEdge("TypeColumnName", -1, typed.TypeColumnName);
    }
    yield break;
}
if (nodeType == typeof(SemanticTableReference))
{
    var typed = (SemanticTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.MatchedColumn is not null)
    {
        yield return new StructuralChildEdge("MatchedColumn", -1, typed.MatchedColumn);
    }
    if (typed.MatchedKey is not null)
    {
        yield return new StructuralChildEdge("MatchedKey", -1, typed.MatchedKey);
    }
    if (typed.SourceKey is not null)
    {
        yield return new StructuralChildEdge("SourceKey", -1, typed.SourceKey);
    }
    if (typed.TableName is not null)
    {
        yield return new StructuralChildEdge("TableName", -1, typed.TableName);
    }
    yield break;
}
if (nodeType == typeof(SendStatement))
{
    var typed = (SendStatement)node;
    if (typed.ConversationHandles is not null)
    {
        var index = 0;
        foreach (var child in typed.ConversationHandles)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ConversationHandles", index, child);
            }
            index += 1;
        }
    }
    if (typed.MessageBody is not null)
    {
        yield return new StructuralChildEdge("MessageBody", -1, typed.MessageBody);
    }
    if (typed.MessageTypeName is not null)
    {
        yield return new StructuralChildEdge("MessageTypeName", -1, typed.MessageTypeName);
    }
    yield break;
}
if (nodeType == typeof(SensitivityClassificationOption))
{
    var typed = (SensitivityClassificationOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}

if (nodeType == typeof(ServiceContract))
{
    var typed = (ServiceContract)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}
if (nodeType == typeof(SessionTimeoutPayloadOption))
{
    var typed = (SessionTimeoutPayloadOption)node;
    if (typed.Timeout is not null)
    {
        yield return new StructuralChildEdge("Timeout", -1, typed.Timeout);
    }
    yield break;
}
if (nodeType == typeof(SetCommandStatement))
{
    var typed = (SetCommandStatement)node;
    if (typed.Commands is not null)
    {
        var index = 0;
        foreach (var child in typed.Commands)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Commands", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(SetErrorLevelStatement))
{
    var typed = (SetErrorLevelStatement)node;
    if (typed.Level is not null)
    {
        yield return new StructuralChildEdge("Level", -1, typed.Level);
    }
    yield break;
}

if (nodeType == typeof(SetIdentityInsertStatement))
{
    var typed = (SetIdentityInsertStatement)node;
    if (typed.Table is not null)
    {
        yield return new StructuralChildEdge("Table", -1, typed.Table);
    }
    yield break;
}

if (nodeType == typeof(SetRowCountStatement))
{
    var typed = (SetRowCountStatement)node;
    if (typed.NumberRows is not null)
    {
        yield return new StructuralChildEdge("NumberRows", -1, typed.NumberRows);
    }
    yield break;
}
if (nodeType == typeof(SetSearchPropertyListAlterFullTextIndexAction))
{
    var typed = (SetSearchPropertyListAlterFullTextIndexAction)node;
    if (typed.SearchPropertyListOption is not null)
    {
        yield return new StructuralChildEdge("SearchPropertyListOption", -1, typed.SearchPropertyListOption);
    }
    yield break;
}

if (nodeType == typeof(SetStopListAlterFullTextIndexAction))
{
    var typed = (SetStopListAlterFullTextIndexAction)node;
    if (typed.StopListOption is not null)
    {
        yield return new StructuralChildEdge("StopListOption", -1, typed.StopListOption);
    }
    yield break;
}
if (nodeType == typeof(SetTextSizeStatement))
{
    var typed = (SetTextSizeStatement)node;
    if (typed.TextSize is not null)
    {
        yield return new StructuralChildEdge("TextSize", -1, typed.TextSize);
    }
    yield break;
}

if (nodeType == typeof(SetUserStatement))
{
    var typed = (SetUserStatement)node;
    if (typed.UserName is not null)
    {
        yield return new StructuralChildEdge("UserName", -1, typed.UserName);
    }
    yield break;
}
if (nodeType == typeof(SetVariableStatement))
{
    var typed = (SetVariableStatement)node;
    if (typed.CursorDefinition is not null)
    {
        yield return new StructuralChildEdge("CursorDefinition", -1, typed.CursorDefinition);
    }
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.Variable is not null)
    {
        yield return new StructuralChildEdge("Variable", -1, typed.Variable);
    }
    yield break;
}


if (nodeType == typeof(SimpleCaseExpression))
{
    var typed = (SimpleCaseExpression)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.ElseExpression is not null)
    {
        yield return new StructuralChildEdge("ElseExpression", -1, typed.ElseExpression);
    }
    if (typed.InputExpression is not null)
    {
        yield return new StructuralChildEdge("InputExpression", -1, typed.InputExpression);
    }
    if (typed.WhenClauses is not null)
    {
        var index = 0;
        foreach (var child in typed.WhenClauses)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("WhenClauses", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(SimpleWhenClause))
{
    var typed = (SimpleWhenClause)node;
    if (typed.ThenExpression is not null)
    {
        yield return new StructuralChildEdge("ThenExpression", -1, typed.ThenExpression);
    }
    if (typed.WhenExpression is not null)
    {
        yield return new StructuralChildEdge("WhenExpression", -1, typed.WhenExpression);
    }
    yield break;
}
if (nodeType == typeof(SingleValueTypeCopyOption))
{
    var typed = (SingleValueTypeCopyOption)node;
    if (typed.SingleValue is not null)
    {
        yield return new StructuralChildEdge("SingleValue", -1, typed.SingleValue);
    }
    yield break;
}
if (nodeType == typeof(SizeFileDeclarationOption))
{
    var typed = (SizeFileDeclarationOption)node;
    if (typed.Size is not null)
    {
        yield return new StructuralChildEdge("Size", -1, typed.Size);
    }
    yield break;
}
if (nodeType == typeof(SoapMethod))
{
    var typed = (SoapMethod)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Namespace is not null)
    {
        yield return new StructuralChildEdge("Namespace", -1, typed.Namespace);
    }
    yield break;
}
if (nodeType == typeof(SourceDeclaration))
{
    var typed = (SourceDeclaration)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(SpatialIndexRegularOption))
{
    var typed = (SpatialIndexRegularOption)node;
    if (typed.Option is not null)
    {
        yield return new StructuralChildEdge("Option", -1, typed.Option);
    }
    yield break;
}

if (nodeType == typeof(SqlDataTypeReference))
{
    var typed = (SqlDataTypeReference)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(StatementList))
{
    var typed = (StatementList)node;
    if (typed.Statements is not null)
    {
        var index = 0;
        foreach (var child in typed.Statements)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Statements", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(StatementListSnippet))
{
    var typed = (StatementListSnippet)node;
    if (typed.Statements is not null)
    {
        var index = 0;
        foreach (var child in typed.Statements)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Statements", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(StatisticsPartitionRange))
{
    var typed = (StatisticsPartitionRange)node;
    if (typed.From is not null)
    {
        yield return new StructuralChildEdge("From", -1, typed.From);
    }
    if (typed.To is not null)
    {
        yield return new StructuralChildEdge("To", -1, typed.To);
    }
    yield break;
}
if (nodeType == typeof(StopListFullTextIndexOption))
{
    var typed = (StopListFullTextIndexOption)node;
    if (typed.StopListName is not null)
    {
        yield return new StructuralChildEdge("StopListName", -1, typed.StopListName);
    }
    yield break;
}
if (nodeType == typeof(StopRestoreOption))
{
    var typed = (StopRestoreOption)node;
    if (typed.After is not null)
    {
        yield return new StructuralChildEdge("After", -1, typed.After);
    }
    if (typed.Mark is not null)
    {
        yield return new StructuralChildEdge("Mark", -1, typed.Mark);
    }
    yield break;
}
if (nodeType == typeof(StringLiteral))
{
    var typed = (StringLiteral)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(SubqueryComparisonPredicate))
{
    var typed = (SubqueryComparisonPredicate)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    if (typed.Subquery is not null)
    {
        yield return new StructuralChildEdge("Subquery", -1, typed.Subquery);
    }
    yield break;
}
if (nodeType == typeof(SystemTimePeriodDefinition))
{
    var typed = (SystemTimePeriodDefinition)node;
    if (typed.EndTimeColumn is not null)
    {
        yield return new StructuralChildEdge("EndTimeColumn", -1, typed.EndTimeColumn);
    }
    if (typed.StartTimeColumn is not null)
    {
        yield return new StructuralChildEdge("StartTimeColumn", -1, typed.StartTimeColumn);
    }
    yield break;
}
if (nodeType == typeof(SystemVersioningTableOption))
{
    var typed = (SystemVersioningTableOption)node;
    if (typed.HistoryTable is not null)
    {
        yield return new StructuralChildEdge("HistoryTable", -1, typed.HistoryTable);
    }
    if (typed.RetentionPeriod is not null)
    {
        yield return new StructuralChildEdge("RetentionPeriod", -1, typed.RetentionPeriod);
    }
    yield break;
}
if (nodeType == typeof(TSEqualCall))
{
    var typed = (TSEqualCall)node;
    if (typed.FirstExpression is not null)
    {
        yield return new StructuralChildEdge("FirstExpression", -1, typed.FirstExpression);
    }
    if (typed.SecondExpression is not null)
    {
        yield return new StructuralChildEdge("SecondExpression", -1, typed.SecondExpression);
    }
    yield break;
}
if (nodeType == typeof(TSqlBatch))
{
    var typed = (TSqlBatch)node;
    if (typed.Statements is not null)
    {
        var index = 0;
        foreach (var child in typed.Statements)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Statements", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(TSqlScript))
{
    var typed = (TSqlScript)node;
    if (typed.Batches is not null)
    {
        var index = 0;
        foreach (var child in typed.Batches)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Batches", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(TableClusteredIndexType))
{
    var typed = (TableClusteredIndexType)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.OrderedColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.OrderedColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OrderedColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(TableDataCompressionOption))
{
    var typed = (TableDataCompressionOption)node;
    if (typed.DataCompressionOption is not null)
    {
        yield return new StructuralChildEdge("DataCompressionOption", -1, typed.DataCompressionOption);
    }
    yield break;
}
if (nodeType == typeof(TableDefinition))
{
    var typed = (TableDefinition)node;
    if (typed.ColumnDefinitions is not null)
    {
        var index = 0;
        foreach (var child in typed.ColumnDefinitions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("ColumnDefinitions", index, child);
            }
            index += 1;
        }
    }
    if (typed.Indexes is not null)
    {
        var index = 0;
        foreach (var child in typed.Indexes)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Indexes", index, child);
            }
            index += 1;
        }
    }
    if (typed.SystemTimePeriod is not null)
    {
        yield return new StructuralChildEdge("SystemTimePeriod", -1, typed.SystemTimePeriod);
    }
    if (typed.TableConstraints is not null)
    {
        var index = 0;
        foreach (var child in typed.TableConstraints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TableConstraints", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(TableDistributionOption))
{
    var typed = (TableDistributionOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(TableHashDistributionPolicy))
{
    var typed = (TableHashDistributionPolicy)node;
    if (typed.DistributionColumn is not null)
    {
        yield return new StructuralChildEdge("DistributionColumn", -1, typed.DistributionColumn);
    }
    if (typed.DistributionColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.DistributionColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("DistributionColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}

if (nodeType == typeof(TableHintsOptimizerHint))
{
    var typed = (TableHintsOptimizerHint)node;
    if (typed.ObjectName is not null)
    {
        yield return new StructuralChildEdge("ObjectName", -1, typed.ObjectName);
    }
    if (typed.TableHints is not null)
    {
        var index = 0;
        foreach (var child in typed.TableHints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TableHints", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(TableIndexOption))
{
    var typed = (TableIndexOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}

if (nodeType == typeof(TablePartitionOption))
{
    var typed = (TablePartitionOption)node;
    if (typed.PartitionColumn is not null)
    {
        yield return new StructuralChildEdge("PartitionColumn", -1, typed.PartitionColumn);
    }
    if (typed.PartitionOptionSpecs is not null)
    {
        yield return new StructuralChildEdge("PartitionOptionSpecs", -1, typed.PartitionOptionSpecs);
    }
    yield break;
}
if (nodeType == typeof(TablePartitionOptionSpecifications))
{
    var typed = (TablePartitionOptionSpecifications)node;
    if (typed.BoundaryValues is not null)
    {
        var index = 0;
        foreach (var child in typed.BoundaryValues)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("BoundaryValues", index, child);
            }
            index += 1;
        }
    }
    yield break;
}


if (nodeType == typeof(TableSampleClause))
{
    var typed = (TableSampleClause)node;
    if (typed.RepeatSeed is not null)
    {
        yield return new StructuralChildEdge("RepeatSeed", -1, typed.RepeatSeed);
    }
    if (typed.SampleNumber is not null)
    {
        yield return new StructuralChildEdge("SampleNumber", -1, typed.SampleNumber);
    }
    yield break;
}
if (nodeType == typeof(TableValuedFunctionReturnType))
{
    var typed = (TableValuedFunctionReturnType)node;
    if (typed.DeclareTableVariableBody is not null)
    {
        yield return new StructuralChildEdge("DeclareTableVariableBody", -1, typed.DeclareTableVariableBody);
    }
    yield break;
}
if (nodeType == typeof(TableXmlCompressionOption))
{
    var typed = (TableXmlCompressionOption)node;
    if (typed.XmlCompressionOption is not null)
    {
        yield return new StructuralChildEdge("XmlCompressionOption", -1, typed.XmlCompressionOption);
    }
    yield break;
}
if (nodeType == typeof(TargetDeclaration))
{
    var typed = (TargetDeclaration)node;
    if (typed.ObjectName is not null)
    {
        yield return new StructuralChildEdge("ObjectName", -1, typed.ObjectName);
    }
    if (typed.TargetDeclarationParameters is not null)
    {
        var index = 0;
        foreach (var child in typed.TargetDeclarationParameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("TargetDeclarationParameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(TargetRecoveryTimeDatabaseOption))
{
    var typed = (TargetRecoveryTimeDatabaseOption)node;
    if (typed.RecoveryTime is not null)
    {
        yield return new StructuralChildEdge("RecoveryTime", -1, typed.RecoveryTime);
    }
    yield break;
}
if (nodeType == typeof(TemporalClause))
{
    var typed = (TemporalClause)node;
    if (typed.EndTime is not null)
    {
        yield return new StructuralChildEdge("EndTime", -1, typed.EndTime);
    }
    if (typed.StartTime is not null)
    {
        yield return new StructuralChildEdge("StartTime", -1, typed.StartTime);
    }
    yield break;
}
if (nodeType == typeof(ThrowStatement))
{
    var typed = (ThrowStatement)node;
    if (typed.ErrorNumber is not null)
    {
        yield return new StructuralChildEdge("ErrorNumber", -1, typed.ErrorNumber);
    }
    if (typed.Message is not null)
    {
        yield return new StructuralChildEdge("Message", -1, typed.Message);
    }
    if (typed.State is not null)
    {
        yield return new StructuralChildEdge("State", -1, typed.State);
    }
    yield break;
}
if (nodeType == typeof(TopRowFilter))
{
    var typed = (TopRowFilter)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(TriggerAction))
{
    var typed = (TriggerAction)node;
    if (typed.EventTypeGroup is not null)
    {
        yield return new StructuralChildEdge("EventTypeGroup", -1, typed.EventTypeGroup);
    }
    yield break;
}
if (nodeType == typeof(TriggerObject))
{
    var typed = (TriggerObject)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}

if (nodeType == typeof(TruncateTableStatement))
{
    var typed = (TruncateTableStatement)node;
    if (typed.PartitionRanges is not null)
    {
        var index = 0;
        foreach (var child in typed.PartitionRanges)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PartitionRanges", index, child);
            }
            index += 1;
        }
    }
    if (typed.TableName is not null)
    {
        yield return new StructuralChildEdge("TableName", -1, typed.TableName);
    }
    yield break;
}

if (nodeType == typeof(TryCastCall))
{
    var typed = (TryCastCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.Parameter is not null)
    {
        yield return new StructuralChildEdge("Parameter", -1, typed.Parameter);
    }
    yield break;
}
if (nodeType == typeof(TryCatchStatement))
{
    var typed = (TryCatchStatement)node;
    if (typed.CatchStatements is not null)
    {
        yield return new StructuralChildEdge("CatchStatements", -1, typed.CatchStatements);
    }
    if (typed.TryStatements is not null)
    {
        yield return new StructuralChildEdge("TryStatements", -1, typed.TryStatements);
    }
    yield break;
}
if (nodeType == typeof(TryConvertCall))
{
    var typed = (TryConvertCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.Parameter is not null)
    {
        yield return new StructuralChildEdge("Parameter", -1, typed.Parameter);
    }
    if (typed.Style is not null)
    {
        yield return new StructuralChildEdge("Style", -1, typed.Style);
    }
    yield break;
}
if (nodeType == typeof(TryParseCall))
{
    var typed = (TryParseCall)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.Culture is not null)
    {
        yield return new StructuralChildEdge("Culture", -1, typed.Culture);
    }
    if (typed.DataType is not null)
    {
        yield return new StructuralChildEdge("DataType", -1, typed.DataType);
    }
    if (typed.StringValue is not null)
    {
        yield return new StructuralChildEdge("StringValue", -1, typed.StringValue);
    }
    yield break;
}
if (nodeType == typeof(UnaryExpression))
{
    var typed = (UnaryExpression)node;
    if (typed.Expression is not null)
    {
        yield return new StructuralChildEdge("Expression", -1, typed.Expression);
    }
    yield break;
}
if (nodeType == typeof(UniqueConstraintDefinition))
{
    var typed = (UniqueConstraintDefinition)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.ConstraintIdentifier is not null)
    {
        yield return new StructuralChildEdge("ConstraintIdentifier", -1, typed.ConstraintIdentifier);
    }
    if (typed.FileStreamOn is not null)
    {
        yield return new StructuralChildEdge("FileStreamOn", -1, typed.FileStreamOn);
    }
    if (typed.IndexOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.IndexOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("IndexOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.IndexType is not null)
    {
        yield return new StructuralChildEdge("IndexType", -1, typed.IndexType);
    }
    if (typed.OnFileGroupOrPartitionScheme is not null)
    {
        yield return new StructuralChildEdge("OnFileGroupOrPartitionScheme", -1, typed.OnFileGroupOrPartitionScheme);
    }
    yield break;
}
if (nodeType == typeof(UnpivotedTableReference))
{
    var typed = (UnpivotedTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.InColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.InColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("InColumns", index, child);
            }
            index += 1;
        }
    }
    if (typed.PivotColumn is not null)
    {
        yield return new StructuralChildEdge("PivotColumn", -1, typed.PivotColumn);
    }
    if (typed.TableReference is not null)
    {
        yield return new StructuralChildEdge("TableReference", -1, typed.TableReference);
    }
    if (typed.ValueColumn is not null)
    {
        yield return new StructuralChildEdge("ValueColumn", -1, typed.ValueColumn);
    }
    yield break;
}
if (nodeType == typeof(UnqualifiedJoin))
{
    var typed = (UnqualifiedJoin)node;
    if (typed.FirstTableReference is not null)
    {
        yield return new StructuralChildEdge("FirstTableReference", -1, typed.FirstTableReference);
    }
    if (typed.SecondTableReference is not null)
    {
        yield return new StructuralChildEdge("SecondTableReference", -1, typed.SecondTableReference);
    }
    yield break;
}
if (nodeType == typeof(UpdateCall))
{
    var typed = (UpdateCall)node;
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    yield break;
}
if (nodeType == typeof(UpdateForClause))
{
    var typed = (UpdateForClause)node;
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(UpdateMergeAction))
{
    var typed = (UpdateMergeAction)node;
    if (typed.SetClauses is not null)
    {
        var index = 0;
        foreach (var child in typed.SetClauses)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SetClauses", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(UpdateSpecification))
{
    var typed = (UpdateSpecification)node;
    if (typed.FromClause is not null)
    {
        yield return new StructuralChildEdge("FromClause", -1, typed.FromClause);
    }
    if (typed.OutputClause is not null)
    {
        yield return new StructuralChildEdge("OutputClause", -1, typed.OutputClause);
    }
    if (typed.OutputIntoClause is not null)
    {
        yield return new StructuralChildEdge("OutputIntoClause", -1, typed.OutputIntoClause);
    }
    if (typed.SetClauses is not null)
    {
        var index = 0;
        foreach (var child in typed.SetClauses)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SetClauses", index, child);
            }
            index += 1;
        }
    }
    if (typed.Target is not null)
    {
        yield return new StructuralChildEdge("Target", -1, typed.Target);
    }
    if (typed.TopRowFilter is not null)
    {
        yield return new StructuralChildEdge("TopRowFilter", -1, typed.TopRowFilter);
    }
    if (typed.WhereClause is not null)
    {
        yield return new StructuralChildEdge("WhereClause", -1, typed.WhereClause);
    }
    yield break;
}
if (nodeType == typeof(UpdateStatement))
{
    var typed = (UpdateStatement)node;
    if (typed.OptimizerHints is not null)
    {
        var index = 0;
        foreach (var child in typed.OptimizerHints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("OptimizerHints", index, child);
            }
            index += 1;
        }
    }
    if (typed.UpdateSpecification is not null)
    {
        yield return new StructuralChildEdge("UpdateSpecification", -1, typed.UpdateSpecification);
    }
    if (typed.WithCtesAndXmlNamespaces is not null)
    {
        yield return new StructuralChildEdge("WithCtesAndXmlNamespaces", -1, typed.WithCtesAndXmlNamespaces);
    }
    yield break;
}
if (nodeType == typeof(UpdateStatisticsStatement))
{
    var typed = (UpdateStatisticsStatement)node;
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    if (typed.StatisticsOptions is not null)
    {
        var index = 0;
        foreach (var child in typed.StatisticsOptions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("StatisticsOptions", index, child);
            }
            index += 1;
        }
    }
    if (typed.SubElements is not null)
    {
        var index = 0;
        foreach (var child in typed.SubElements)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("SubElements", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(UpdateTextStatement))
{
    var typed = (UpdateTextStatement)node;
    if (typed.Column is not null)
    {
        yield return new StructuralChildEdge("Column", -1, typed.Column);
    }
    if (typed.DeleteLength is not null)
    {
        yield return new StructuralChildEdge("DeleteLength", -1, typed.DeleteLength);
    }
    if (typed.InsertOffset is not null)
    {
        yield return new StructuralChildEdge("InsertOffset", -1, typed.InsertOffset);
    }
    if (typed.SourceColumn is not null)
    {
        yield return new StructuralChildEdge("SourceColumn", -1, typed.SourceColumn);
    }
    if (typed.SourceParameter is not null)
    {
        yield return new StructuralChildEdge("SourceParameter", -1, typed.SourceParameter);
    }
    if (typed.TextId is not null)
    {
        yield return new StructuralChildEdge("TextId", -1, typed.TextId);
    }
    if (typed.Timestamp is not null)
    {
        yield return new StructuralChildEdge("Timestamp", -1, typed.Timestamp);
    }
    yield break;
}
if (nodeType == typeof(UseFederationStatement))
{
    var typed = (UseFederationStatement)node;
    if (typed.DistributionName is not null)
    {
        yield return new StructuralChildEdge("DistributionName", -1, typed.DistributionName);
    }
    if (typed.FederationName is not null)
    {
        yield return new StructuralChildEdge("FederationName", -1, typed.FederationName);
    }
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(UseHintList))
{
    var typed = (UseHintList)node;
    if (typed.Hints is not null)
    {
        var index = 0;
        foreach (var child in typed.Hints)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Hints", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(UseStatement))
{
    var typed = (UseStatement)node;
    if (typed.DatabaseName is not null)
    {
        yield return new StructuralChildEdge("DatabaseName", -1, typed.DatabaseName);
    }
    yield break;
}
if (nodeType == typeof(UserDataTypeReference))
{
    var typed = (UserDataTypeReference)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(UserDefinedTypeCallTarget))
{
    var typed = (UserDefinedTypeCallTarget)node;
    if (typed.SchemaObjectName is not null)
    {
        yield return new StructuralChildEdge("SchemaObjectName", -1, typed.SchemaObjectName);
    }
    yield break;
}
if (nodeType == typeof(UserDefinedTypePropertyAccess))
{
    var typed = (UserDefinedTypePropertyAccess)node;
    if (typed.CallTarget is not null)
    {
        yield return new StructuralChildEdge("CallTarget", -1, typed.CallTarget);
    }
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    if (typed.PropertyName is not null)
    {
        yield return new StructuralChildEdge("PropertyName", -1, typed.PropertyName);
    }
    yield break;
}
if (nodeType == typeof(UserLoginOption))
{
    var typed = (UserLoginOption)node;
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    yield break;
}
if (nodeType == typeof(UserRemoteServiceBindingOption))
{
    var typed = (UserRemoteServiceBindingOption)node;
    if (typed.User is not null)
    {
        yield return new StructuralChildEdge("User", -1, typed.User);
    }
    yield break;
}
if (nodeType == typeof(ValuesInsertSource))
{
    var typed = (ValuesInsertSource)node;
    if (typed.RowValues is not null)
    {
        var index = 0;
        foreach (var child in typed.RowValues)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("RowValues", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(VariableMethodCallTableReference))
{
    var typed = (VariableMethodCallTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Columns is not null)
    {
        var index = 0;
        foreach (var child in typed.Columns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Columns", index, child);
            }
            index += 1;
        }
    }
    if (typed.MethodName is not null)
    {
        yield return new StructuralChildEdge("MethodName", -1, typed.MethodName);
    }
    if (typed.Parameters is not null)
    {
        var index = 0;
        foreach (var child in typed.Parameters)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Parameters", index, child);
            }
            index += 1;
        }
    }
    if (typed.Variable is not null)
    {
        yield return new StructuralChildEdge("Variable", -1, typed.Variable);
    }
    yield break;
}
if (nodeType == typeof(VariableReference))
{
    var typed = (VariableReference)node;
    if (typed.Collation is not null)
    {
        yield return new StructuralChildEdge("Collation", -1, typed.Collation);
    }
    yield break;
}
if (nodeType == typeof(VariableTableReference))
{
    var typed = (VariableTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Variable is not null)
    {
        yield return new StructuralChildEdge("Variable", -1, typed.Variable);
    }
    yield break;
}
if (nodeType == typeof(VariableValuePair))
{
    var typed = (VariableValuePair)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    if (typed.Variable is not null)
    {
        yield return new StructuralChildEdge("Variable", -1, typed.Variable);
    }
    yield break;
}
if (nodeType == typeof(VectorDataTypeReference))
{
    var typed = (VectorDataTypeReference)node;
    if (typed.BaseType is not null)
    {
        yield return new StructuralChildEdge("BaseType", -1, typed.BaseType);
    }
    if (typed.Dimension is not null)
    {
        yield return new StructuralChildEdge("Dimension", -1, typed.Dimension);
    }
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    yield break;
}

if (nodeType == typeof(VectorSearchTableReference))
{
    var typed = (VectorSearchTableReference)node;
    if (typed.Alias is not null)
    {
        yield return new StructuralChildEdge("Alias", -1, typed.Alias);
    }
    if (typed.Column is not null)
    {
        yield return new StructuralChildEdge("Column", -1, typed.Column);
    }
    if (typed.Metric is not null)
    {
        yield return new StructuralChildEdge("Metric", -1, typed.Metric);
    }
    if (typed.SimilarTo is not null)
    {
        yield return new StructuralChildEdge("SimilarTo", -1, typed.SimilarTo);
    }
    if (typed.Table is not null)
    {
        yield return new StructuralChildEdge("Table", -1, typed.Table);
    }
    if (typed.TopN is not null)
    {
        yield return new StructuralChildEdge("TopN", -1, typed.TopN);
    }
    yield break;
}

if (nodeType == typeof(ViewDistributionOption))
{
    var typed = (ViewDistributionOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}

if (nodeType == typeof(ViewHashDistributionPolicy))
{
    var typed = (ViewHashDistributionPolicy)node;
    if (typed.DistributionColumn is not null)
    {
        yield return new StructuralChildEdge("DistributionColumn", -1, typed.DistributionColumn);
    }
    if (typed.DistributionColumns is not null)
    {
        var index = 0;
        foreach (var child in typed.DistributionColumns)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("DistributionColumns", index, child);
            }
            index += 1;
        }
    }
    yield break;
}


if (nodeType == typeof(WaitAtLowPriorityOption))
{
    var typed = (WaitAtLowPriorityOption)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(WaitForStatement))
{
    var typed = (WaitForStatement)node;
    if (typed.Parameter is not null)
    {
        yield return new StructuralChildEdge("Parameter", -1, typed.Parameter);
    }
    if (typed.Statement is not null)
    {
        yield return new StructuralChildEdge("Statement", -1, typed.Statement);
    }
    if (typed.Timeout is not null)
    {
        yield return new StructuralChildEdge("Timeout", -1, typed.Timeout);
    }
    yield break;
}
if (nodeType == typeof(WhereClause))
{
    var typed = (WhereClause)node;
    if (typed.Cursor is not null)
    {
        yield return new StructuralChildEdge("Cursor", -1, typed.Cursor);
    }
    if (typed.SearchCondition is not null)
    {
        yield return new StructuralChildEdge("SearchCondition", -1, typed.SearchCondition);
    }
    yield break;
}
if (nodeType == typeof(WhileStatement))
{
    var typed = (WhileStatement)node;
    if (typed.Predicate is not null)
    {
        yield return new StructuralChildEdge("Predicate", -1, typed.Predicate);
    }
    if (typed.Statement is not null)
    {
        yield return new StructuralChildEdge("Statement", -1, typed.Statement);
    }
    yield break;
}
if (nodeType == typeof(WindowClause))
{
    var typed = (WindowClause)node;
    if (typed.WindowDefinition is not null)
    {
        var index = 0;
        foreach (var child in typed.WindowDefinition)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("WindowDefinition", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(WindowDefinition))
{
    var typed = (WindowDefinition)node;
    if (typed.OrderByClause is not null)
    {
        yield return new StructuralChildEdge("OrderByClause", -1, typed.OrderByClause);
    }
    if (typed.Partitions is not null)
    {
        var index = 0;
        foreach (var child in typed.Partitions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Partitions", index, child);
            }
            index += 1;
        }
    }
    if (typed.RefWindowName is not null)
    {
        yield return new StructuralChildEdge("RefWindowName", -1, typed.RefWindowName);
    }
    if (typed.WindowFrameClause is not null)
    {
        yield return new StructuralChildEdge("WindowFrameClause", -1, typed.WindowFrameClause);
    }
    if (typed.WindowName is not null)
    {
        yield return new StructuralChildEdge("WindowName", -1, typed.WindowName);
    }
    yield break;
}
if (nodeType == typeof(WindowDelimiter))
{
    var typed = (WindowDelimiter)node;
    if (typed.OffsetValue is not null)
    {
        yield return new StructuralChildEdge("OffsetValue", -1, typed.OffsetValue);
    }
    yield break;
}
if (nodeType == typeof(WindowFrameClause))
{
    var typed = (WindowFrameClause)node;
    if (typed.Bottom is not null)
    {
        yield return new StructuralChildEdge("Bottom", -1, typed.Bottom);
    }
    if (typed.Top is not null)
    {
        yield return new StructuralChildEdge("Top", -1, typed.Top);
    }
    yield break;
}
if (nodeType == typeof(WindowsCreateLoginSource))
{
    var typed = (WindowsCreateLoginSource)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(WithCtesAndXmlNamespaces))
{
    var typed = (WithCtesAndXmlNamespaces)node;
    if (typed.ChangeTrackingContext is not null)
    {
        yield return new StructuralChildEdge("ChangeTrackingContext", -1, typed.ChangeTrackingContext);
    }
    if (typed.CommonTableExpressions is not null)
    {
        var index = 0;
        foreach (var child in typed.CommonTableExpressions)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("CommonTableExpressions", index, child);
            }
            index += 1;
        }
    }
    if (typed.XmlNamespaces is not null)
    {
        yield return new StructuralChildEdge("XmlNamespaces", -1, typed.XmlNamespaces);
    }
    yield break;
}
if (nodeType == typeof(WithinGroupClause))
{
    var typed = (WithinGroupClause)node;
    if (typed.OrderByClause is not null)
    {
        yield return new StructuralChildEdge("OrderByClause", -1, typed.OrderByClause);
    }
    yield break;
}
if (nodeType == typeof(WitnessDatabaseOption))
{
    var typed = (WitnessDatabaseOption)node;
    if (typed.WitnessServer is not null)
    {
        yield return new StructuralChildEdge("WitnessServer", -1, typed.WitnessServer);
    }
    yield break;
}
if (nodeType == typeof(WlmTimeLiteral))
{
    var typed = (WlmTimeLiteral)node;
    if (typed.TimeString is not null)
    {
        yield return new StructuralChildEdge("TimeString", -1, typed.TimeString);
    }
    yield break;
}

if (nodeType == typeof(WorkloadGroupResourceParameter))
{
    var typed = (WorkloadGroupResourceParameter)node;
    if (typed.ParameterValue is not null)
    {
        yield return new StructuralChildEdge("ParameterValue", -1, typed.ParameterValue);
    }
    yield break;
}
if (nodeType == typeof(WriteTextStatement))
{
    var typed = (WriteTextStatement)node;
    if (typed.Column is not null)
    {
        yield return new StructuralChildEdge("Column", -1, typed.Column);
    }
    if (typed.SourceParameter is not null)
    {
        yield return new StructuralChildEdge("SourceParameter", -1, typed.SourceParameter);
    }
    if (typed.TextId is not null)
    {
        yield return new StructuralChildEdge("TextId", -1, typed.TextId);
    }
    if (typed.Timestamp is not null)
    {
        yield return new StructuralChildEdge("Timestamp", -1, typed.Timestamp);
    }
    yield break;
}
if (nodeType == typeof(WsdlPayloadOption))
{
    var typed = (WsdlPayloadOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(XmlCompressionOption))
{
    var typed = (XmlCompressionOption)node;
    if (typed.PartitionRanges is not null)
    {
        var index = 0;
        foreach (var child in typed.PartitionRanges)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("PartitionRanges", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(XmlDataTypeReference))
{
    var typed = (XmlDataTypeReference)node;
    if (typed.Name is not null)
    {
        yield return new StructuralChildEdge("Name", -1, typed.Name);
    }
    if (typed.XmlSchemaCollection is not null)
    {
        yield return new StructuralChildEdge("XmlSchemaCollection", -1, typed.XmlSchemaCollection);
    }
    yield break;
}
if (nodeType == typeof(XmlForClause))
{
    var typed = (XmlForClause)node;
    if (typed.Options is not null)
    {
        var index = 0;
        foreach (var child in typed.Options)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("Options", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(XmlForClauseOption))
{
    var typed = (XmlForClauseOption)node;
    if (typed.Value is not null)
    {
        yield return new StructuralChildEdge("Value", -1, typed.Value);
    }
    yield break;
}
if (nodeType == typeof(XmlNamespaces))
{
    var typed = (XmlNamespaces)node;
    if (typed.XmlNamespacesElements is not null)
    {
        var index = 0;
        foreach (var child in typed.XmlNamespacesElements)
        {
            if (child is not null)
            {
                yield return new StructuralChildEdge("XmlNamespacesElements", index, child);
            }
            index += 1;
        }
    }
    yield break;
}
if (nodeType == typeof(XmlNamespacesAliasElement))
{
    var typed = (XmlNamespacesAliasElement)node;
    if (typed.Identifier is not null)
    {
        yield return new StructuralChildEdge("Identifier", -1, typed.Identifier);
    }
    if (typed.String is not null)
    {
        yield return new StructuralChildEdge("String", -1, typed.String);
    }
    yield break;
}
if (nodeType == typeof(XmlNamespacesDefaultElement))
{
    var typed = (XmlNamespacesDefaultElement)node;
    if (typed.String is not null)
    {
        yield return new StructuralChildEdge("String", -1, typed.String);
    }
    yield break;
}
        yield break;
    }
    public static void WriteAttributes(Utf8JsonWriter writer, TSqlFragment node)
    {
        writer.WriteStartArray("attributes");
        var nodeType = node.GetType();
        if (nodeType == typeof(AIGenerateChunksTableReference))
        {
            var typed = (AIGenerateChunksTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(AIGenerateFixedChunksTableReference))
        {
            var typed = (AIGenerateFixedChunksTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(AcceleratedDatabaseRecoveryDatabaseOption))
        {
            var typed = (AcceleratedDatabaseRecoveryDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(AdHocTableReference))
        {
            var typed = (AdHocTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(AddAlterFullTextIndexAction))
        {
            var typed = (AddAlterFullTextIndexAction)node;
            ParserJson.WriteAttribute(writer, "WithNoPopulation", "boolean", typed.WithNoPopulation);
        }
        if (nodeType == typeof(AddSignatureStatement))
        {
            var typed = (AddSignatureStatement)node;
            ParserJson.WriteAttribute(writer, "ElementKind", "enum", typed.ElementKind);
            ParserJson.WriteAttribute(writer, "IsCounter", "boolean", typed.IsCounter);
        }
        if (nodeType == typeof(AlgorithmKeyOption))
        {
            var typed = (AlgorithmKeyOption)node;
            ParserJson.WriteAttribute(writer, "Algorithm", "enum", typed.Algorithm);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AlterAssemblyStatement))
        {
            var typed = (AlterAssemblyStatement)node;
            ParserJson.WriteAttribute(writer, "IsDropAll", "boolean", typed.IsDropAll);
        }
        if (nodeType == typeof(AlterAsymmetricKeyStatement))
        {
            var typed = (AlterAsymmetricKeyStatement)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(AlterAuthorizationStatement))
        {
            var typed = (AlterAuthorizationStatement)node;
            ParserJson.WriteAttribute(writer, "ToSchemaOwner", "boolean", typed.ToSchemaOwner);
        }
        if (nodeType == typeof(AlterAvailabilityGroupAction))
        {
            var typed = (AlterAvailabilityGroupAction)node;
            ParserJson.WriteAttribute(writer, "ActionType", "enum", typed.ActionType);
        }
        if (nodeType == typeof(AlterAvailabilityGroupFailoverAction))
        {
            var typed = (AlterAvailabilityGroupFailoverAction)node;
            ParserJson.WriteAttribute(writer, "ActionType", "enum", typed.ActionType);
        }
        if (nodeType == typeof(AlterAvailabilityGroupFailoverOption))
        {
            var typed = (AlterAvailabilityGroupFailoverOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AlterAvailabilityGroupStatement))
        {
            var typed = (AlterAvailabilityGroupStatement)node;
            ParserJson.WriteAttribute(writer, "AlterAvailabilityGroupStatementType", "enum", typed.AlterAvailabilityGroupStatementType);
        }
        if (nodeType == typeof(AlterCertificateStatement))
        {
            var typed = (AlterCertificateStatement)node;
            ParserJson.WriteAttribute(writer, "ActiveForBeginDialog", "enum", typed.ActiveForBeginDialog);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(AlterColumnAlterFullTextIndexAction))
        {
            var typed = (AlterColumnAlterFullTextIndexAction)node;
            ParserJson.WriteAttribute(writer, "WithNoPopulation", "boolean", typed.WithNoPopulation);
        }
        if (nodeType == typeof(AlterColumnEncryptionKeyStatement))
        {
            var typed = (AlterColumnEncryptionKeyStatement)node;
            ParserJson.WriteAttribute(writer, "AlterType", "enum", typed.AlterType);
        }
        if (nodeType == typeof(AlterCredentialStatement))
        {
            var typed = (AlterCredentialStatement)node;
            ParserJson.WriteAttribute(writer, "IsDatabaseScoped", "boolean", typed.IsDatabaseScoped);
        }
        if (nodeType == typeof(AlterCryptographicProviderStatement))
        {
            var typed = (AlterCryptographicProviderStatement)node;
            ParserJson.WriteAttribute(writer, "Option", "enum", typed.Option);
        }
        if (nodeType == typeof(AlterDatabaseAddFileGroupStatement))
        {
            var typed = (AlterDatabaseAddFileGroupStatement)node;
            ParserJson.WriteAttribute(writer, "ContainsFileStream", "boolean", typed.ContainsFileStream);
            ParserJson.WriteAttribute(writer, "ContainsMemoryOptimizedData", "boolean", typed.ContainsMemoryOptimizedData);
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
        }
        if (nodeType == typeof(AlterDatabaseAddFileStatement))
        {
            var typed = (AlterDatabaseAddFileStatement)node;
            ParserJson.WriteAttribute(writer, "IsLog", "boolean", typed.IsLog);
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
        }
        if (nodeType == typeof(AlterDatabaseAuditSpecificationStatement))
        {
            var typed = (AlterDatabaseAuditSpecificationStatement)node;
            ParserJson.WriteAttribute(writer, "AuditState", "enum", typed.AuditState);
        }
        if (nodeType == typeof(AlterDatabaseCollateStatement))
        {
            var typed = (AlterDatabaseCollateStatement)node;
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
        }
        if (nodeType == typeof(AlterDatabaseEncryptionKeyStatement))
        {
            var typed = (AlterDatabaseEncryptionKeyStatement)node;
            ParserJson.WriteAttribute(writer, "Algorithm", "enum", typed.Algorithm);
            ParserJson.WriteAttribute(writer, "Regenerate", "boolean", typed.Regenerate);
        }
        if (nodeType == typeof(AlterDatabaseModifyFileGroupStatement))
        {
            var typed = (AlterDatabaseModifyFileGroupStatement)node;
            ParserJson.WriteAttribute(writer, "MakeDefault", "boolean", typed.MakeDefault);
            ParserJson.WriteAttribute(writer, "UpdatabilityOption", "enum", typed.UpdatabilityOption);
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
        }
        if (nodeType == typeof(AlterDatabaseModifyFileStatement))
        {
            var typed = (AlterDatabaseModifyFileStatement)node;
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
        }
        if (nodeType == typeof(AlterDatabaseModifyNameStatement))
        {
            var typed = (AlterDatabaseModifyNameStatement)node;
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
        }
        if (nodeType == typeof(AlterDatabasePerformCutoverStatement))
        {
            var typed = (AlterDatabasePerformCutoverStatement)node;
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
        }
        if (nodeType == typeof(AlterDatabaseRebuildLogStatement))
        {
            var typed = (AlterDatabaseRebuildLogStatement)node;
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
        }
        if (nodeType == typeof(AlterDatabaseRemoveFileGroupStatement))
        {
            var typed = (AlterDatabaseRemoveFileGroupStatement)node;
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
        }
        if (nodeType == typeof(AlterDatabaseRemoveFileStatement))
        {
            var typed = (AlterDatabaseRemoveFileStatement)node;
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
        }
        if (nodeType == typeof(AlterDatabaseScopedConfigurationClearStatement))
        {
            var typed = (AlterDatabaseScopedConfigurationClearStatement)node;
            ParserJson.WriteAttribute(writer, "Secondary", "boolean", typed.Secondary);
        }
        if (nodeType == typeof(AlterDatabaseScopedConfigurationSetStatement))
        {
            var typed = (AlterDatabaseScopedConfigurationSetStatement)node;
            ParserJson.WriteAttribute(writer, "Secondary", "boolean", typed.Secondary);
        }
        if (nodeType == typeof(AlterDatabaseSetStatement))
        {
            var typed = (AlterDatabaseSetStatement)node;
            ParserJson.WriteAttribute(writer, "UseCurrent", "boolean", typed.UseCurrent);
            ParserJson.WriteAttribute(writer, "WithManualCutover", "boolean", typed.WithManualCutover);
        }
        if (nodeType == typeof(AlterDatabaseTermination))
        {
            var typed = (AlterDatabaseTermination)node;
            ParserJson.WriteAttribute(writer, "ImmediateRollback", "boolean", typed.ImmediateRollback);
            ParserJson.WriteAttribute(writer, "NoWait", "boolean", typed.NoWait);
        }
        if (nodeType == typeof(AlterEndpointStatement))
        {
            var typed = (AlterEndpointStatement)node;
            ParserJson.WriteAttribute(writer, "EndpointType", "enum", typed.EndpointType);
            ParserJson.WriteAttribute(writer, "Protocol", "enum", typed.Protocol);
            ParserJson.WriteAttribute(writer, "State", "enum", typed.State);
        }
        if (nodeType == typeof(AlterEventSessionStatement))
        {
            var typed = (AlterEventSessionStatement)node;
            ParserJson.WriteAttribute(writer, "SessionScope", "enum", typed.SessionScope);
            ParserJson.WriteAttribute(writer, "StatementType", "enum", typed.StatementType);
        }
        if (nodeType == typeof(AlterExternalDataSourceStatement))
        {
            var typed = (AlterExternalDataSourceStatement)node;
            ParserJson.WriteAttribute(writer, "DataSourceType", "enum", typed.DataSourceType);
            ParserJson.WriteAttribute(writer, "PreviousPushDownOption", "enum", typed.PreviousPushDownOption);
            ParserJson.WriteAttribute(writer, "PushdownOption", "enum", typed.PushdownOption);
        }
        if (nodeType == typeof(AlterExternalModelStatement))
        {
            var typed = (AlterExternalModelStatement)node;
            ParserJson.WriteAttribute(writer, "ModelType", "enum", typed.ModelType);
        }
        if (nodeType == typeof(AlterFederationStatement))
        {
            var typed = (AlterFederationStatement)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(AlterFullTextCatalogStatement))
        {
            var typed = (AlterFullTextCatalogStatement)node;
            ParserJson.WriteAttribute(writer, "Action", "enum", typed.Action);
        }
        if (nodeType == typeof(AlterIndexStatement))
        {
            var typed = (AlterIndexStatement)node;
            ParserJson.WriteAttribute(writer, "All", "boolean", typed.All);
            ParserJson.WriteAttribute(writer, "AlterIndexType", "enum", typed.AlterIndexType);
        }
        if (nodeType == typeof(AlterLoginAddDropCredentialStatement))
        {
            var typed = (AlterLoginAddDropCredentialStatement)node;
            ParserJson.WriteAttribute(writer, "IsAdd", "boolean", typed.IsAdd);
        }
        if (nodeType == typeof(AlterLoginEnableDisableStatement))
        {
            var typed = (AlterLoginEnableDisableStatement)node;
            ParserJson.WriteAttribute(writer, "IsEnable", "boolean", typed.IsEnable);
        }
        if (nodeType == typeof(AlterMasterKeyStatement))
        {
            var typed = (AlterMasterKeyStatement)node;
            ParserJson.WriteAttribute(writer, "Option", "enum", typed.Option);
        }
        if (nodeType == typeof(AlterMessageTypeStatement))
        {
            var typed = (AlterMessageTypeStatement)node;
            ParserJson.WriteAttribute(writer, "ValidationMethod", "enum", typed.ValidationMethod);
        }
        if (nodeType == typeof(AlterPartitionFunctionStatement))
        {
            var typed = (AlterPartitionFunctionStatement)node;
            ParserJson.WriteAttribute(writer, "IsSplit", "boolean", typed.IsSplit);
        }
        if (nodeType == typeof(AlterProcedureStatement))
        {
            var typed = (AlterProcedureStatement)node;
            ParserJson.WriteAttribute(writer, "IsForReplication", "boolean", typed.IsForReplication);
        }
        if (nodeType == typeof(AlterResourceGovernorStatement))
        {
            var typed = (AlterResourceGovernorStatement)node;
            ParserJson.WriteAttribute(writer, "Command", "enum", typed.Command);
        }
        if (nodeType == typeof(AlterSchemaStatement))
        {
            var typed = (AlterSchemaStatement)node;
            ParserJson.WriteAttribute(writer, "ObjectKind", "enum", typed.ObjectKind);
        }
        if (nodeType == typeof(AlterSecurityPolicyStatement))
        {
            var typed = (AlterSecurityPolicyStatement)node;
            ParserJson.WriteAttribute(writer, "ActionType", "enum", typed.ActionType);
            ParserJson.WriteAttribute(writer, "NotForReplication", "boolean", typed.NotForReplication);
        }
        if (nodeType == typeof(AlterServerAuditSpecificationStatement))
        {
            var typed = (AlterServerAuditSpecificationStatement)node;
            ParserJson.WriteAttribute(writer, "AuditState", "enum", typed.AuditState);
        }
        if (nodeType == typeof(AlterServerAuditStatement))
        {
            var typed = (AlterServerAuditStatement)node;
            ParserJson.WriteAttribute(writer, "RemoveWhere", "boolean", typed.RemoveWhere);
        }
        if (nodeType == typeof(AlterServerConfigurationBufferPoolExtensionContainerOption))
        {
            var typed = (AlterServerConfigurationBufferPoolExtensionContainerOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AlterServerConfigurationBufferPoolExtensionOption))
        {
            var typed = (AlterServerConfigurationBufferPoolExtensionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AlterServerConfigurationBufferPoolExtensionSizeOption))
        {
            var typed = (AlterServerConfigurationBufferPoolExtensionSizeOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "SizeUnit", "enum", typed.SizeUnit);
        }
        if (nodeType == typeof(AlterServerConfigurationDiagnosticsLogMaxSizeOption))
        {
            var typed = (AlterServerConfigurationDiagnosticsLogMaxSizeOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "SizeUnit", "enum", typed.SizeUnit);
        }
        if (nodeType == typeof(AlterServerConfigurationDiagnosticsLogOption))
        {
            var typed = (AlterServerConfigurationDiagnosticsLogOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AlterServerConfigurationExternalAuthenticationContainerOption))
        {
            var typed = (AlterServerConfigurationExternalAuthenticationContainerOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AlterServerConfigurationExternalAuthenticationOption))
        {
            var typed = (AlterServerConfigurationExternalAuthenticationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AlterServerConfigurationFailoverClusterPropertyOption))
        {
            var typed = (AlterServerConfigurationFailoverClusterPropertyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AlterServerConfigurationHadrClusterOption))
        {
            var typed = (AlterServerConfigurationHadrClusterOption)node;
            ParserJson.WriteAttribute(writer, "IsLocal", "boolean", typed.IsLocal);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AlterServerConfigurationSoftNumaOption))
        {
            var typed = (AlterServerConfigurationSoftNumaOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AlterServerConfigurationStatement))
        {
            var typed = (AlterServerConfigurationStatement)node;
            ParserJson.WriteAttribute(writer, "ProcessAffinity", "enum", typed.ProcessAffinity);
        }
        if (nodeType == typeof(AlterServiceMasterKeyStatement))
        {
            var typed = (AlterServiceMasterKeyStatement)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(AlterSymmetricKeyStatement))
        {
            var typed = (AlterSymmetricKeyStatement)node;
            ParserJson.WriteAttribute(writer, "IsAdd", "boolean", typed.IsAdd);
        }
        if (nodeType == typeof(AlterTableAddTableElementStatement))
        {
            var typed = (AlterTableAddTableElementStatement)node;
            ParserJson.WriteAttribute(writer, "ExistingRowsCheckEnforcement", "enum", typed.ExistingRowsCheckEnforcement);
        }
        if (nodeType == typeof(AlterTableAlterColumnStatement))
        {
            var typed = (AlterTableAlterColumnStatement)node;
            ParserJson.WriteAttribute(writer, "AlterTableAlterColumnOption", "enum", typed.AlterTableAlterColumnOption);
            ParserJson.WriteAttribute(writer, "GeneratedAlways", "enum", typed.GeneratedAlways);
            ParserJson.WriteAttribute(writer, "IsHidden", "boolean", typed.IsHidden);
            ParserJson.WriteAttribute(writer, "IsMasked", "boolean", typed.IsMasked);
        }
        if (nodeType == typeof(AlterTableAlterIndexStatement))
        {
            var typed = (AlterTableAlterIndexStatement)node;
            ParserJson.WriteAttribute(writer, "AlterIndexType", "enum", typed.AlterIndexType);
        }
        if (nodeType == typeof(AlterTableAlterPartitionStatement))
        {
            var typed = (AlterTableAlterPartitionStatement)node;
            ParserJson.WriteAttribute(writer, "IsSplit", "boolean", typed.IsSplit);
        }
        if (nodeType == typeof(AlterTableChangeTrackingModificationStatement))
        {
            var typed = (AlterTableChangeTrackingModificationStatement)node;
            ParserJson.WriteAttribute(writer, "IsEnable", "boolean", typed.IsEnable);
            ParserJson.WriteAttribute(writer, "TrackColumnsUpdated", "enum", typed.TrackColumnsUpdated);
        }
        if (nodeType == typeof(AlterTableConstraintModificationStatement))
        {
            var typed = (AlterTableConstraintModificationStatement)node;
            ParserJson.WriteAttribute(writer, "All", "boolean", typed.All);
            ParserJson.WriteAttribute(writer, "ConstraintEnforcement", "enum", typed.ConstraintEnforcement);
            ParserJson.WriteAttribute(writer, "ExistingRowsCheckEnforcement", "enum", typed.ExistingRowsCheckEnforcement);
        }
        if (nodeType == typeof(AlterTableDropTableElement))
        {
            var typed = (AlterTableDropTableElement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
            ParserJson.WriteAttribute(writer, "TableElementType", "enum", typed.TableElementType);
        }
        if (nodeType == typeof(AlterTableFileTableNamespaceStatement))
        {
            var typed = (AlterTableFileTableNamespaceStatement)node;
            ParserJson.WriteAttribute(writer, "IsEnable", "boolean", typed.IsEnable);
        }
        if (nodeType == typeof(AlterTableTriggerModificationStatement))
        {
            var typed = (AlterTableTriggerModificationStatement)node;
            ParserJson.WriteAttribute(writer, "All", "boolean", typed.All);
            ParserJson.WriteAttribute(writer, "TriggerEnforcement", "enum", typed.TriggerEnforcement);
        }
        if (nodeType == typeof(AlterTriggerStatement))
        {
            var typed = (AlterTriggerStatement)node;
            ParserJson.WriteAttribute(writer, "IsNotForReplication", "boolean", typed.IsNotForReplication);
            ParserJson.WriteAttribute(writer, "TriggerType", "enum", typed.TriggerType);
            ParserJson.WriteAttribute(writer, "WithAppend", "boolean", typed.WithAppend);
        }
        if (nodeType == typeof(AlterViewStatement))
        {
            var typed = (AlterViewStatement)node;
            ParserJson.WriteAttribute(writer, "IsDisable", "boolean", typed.IsDisable);
            ParserJson.WriteAttribute(writer, "IsMaterialized", "boolean", typed.IsMaterialized);
            ParserJson.WriteAttribute(writer, "IsRebuild", "boolean", typed.IsRebuild);
            ParserJson.WriteAttribute(writer, "WithCheckOption", "boolean", typed.WithCheckOption);
        }
        if (nodeType == typeof(ApplicationRoleOption))
        {
            var typed = (ApplicationRoleOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AssemblyOption))
        {
            var typed = (AssemblyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AssignmentSetClause))
        {
            var typed = (AssignmentSetClause)node;
            ParserJson.WriteAttribute(writer, "AssignmentKind", "enum", typed.AssignmentKind);
        }
        if (nodeType == typeof(AuditActionGroupReference))
        {
            var typed = (AuditActionGroupReference)node;
            ParserJson.WriteAttribute(writer, "Group", "enum", typed.Group);
        }
        if (nodeType == typeof(AuditGuidAuditOption))
        {
            var typed = (AuditGuidAuditOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AuditSpecificationPart))
        {
            var typed = (AuditSpecificationPart)node;
            ParserJson.WriteAttribute(writer, "IsDrop", "boolean", typed.IsDrop);
        }
        if (nodeType == typeof(AuditTarget))
        {
            var typed = (AuditTarget)node;
            ParserJson.WriteAttribute(writer, "TargetKind", "enum", typed.TargetKind);
        }
        if (nodeType == typeof(AuthenticationEndpointProtocolOption))
        {
            var typed = (AuthenticationEndpointProtocolOption)node;
            ParserJson.WriteAttribute(writer, "AuthenticationTypes", "enum", typed.AuthenticationTypes);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(AuthenticationPayloadOption))
        {
            var typed = (AuthenticationPayloadOption)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
            ParserJson.WriteAttribute(writer, "Protocol", "enum", typed.Protocol);
            ParserJson.WriteAttribute(writer, "TryCertificateFirst", "boolean", typed.TryCertificateFirst);
        }
        if (nodeType == typeof(AutoCleanupChangeTrackingOptionDetail))
        {
            var typed = (AutoCleanupChangeTrackingOptionDetail)node;
            ParserJson.WriteAttribute(writer, "IsOn", "boolean", typed.IsOn);
        }
        if (nodeType == typeof(AutoCreateStatisticsDatabaseOption))
        {
            var typed = (AutoCreateStatisticsDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "HasIncremental", "boolean", typed.HasIncremental);
            ParserJson.WriteAttribute(writer, "IncrementalState", "enum", typed.IncrementalState);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(AutomaticTuningCreateIndexOption))
        {
            var typed = (AutomaticTuningCreateIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(AutomaticTuningDatabaseOption))
        {
            var typed = (AutomaticTuningDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "AutomaticTuningState", "enum", typed.AutomaticTuningState);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(AutomaticTuningDropIndexOption))
        {
            var typed = (AutomaticTuningDropIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(AutomaticTuningForceLastGoodPlanOption))
        {
            var typed = (AutomaticTuningForceLastGoodPlanOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(AutomaticTuningMaintainIndexOption))
        {
            var typed = (AutomaticTuningMaintainIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(AutomaticTuningOption))
        {
            var typed = (AutomaticTuningOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(AvailabilityModeReplicaOption))
        {
            var typed = (AvailabilityModeReplicaOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(BackupCertificateStatement))
        {
            var typed = (BackupCertificateStatement)node;
            ParserJson.WriteAttribute(writer, "ActiveForBeginDialog", "enum", typed.ActiveForBeginDialog);
        }
        if (nodeType == typeof(BackupEncryptionOption))
        {
            var typed = (BackupEncryptionOption)node;
            ParserJson.WriteAttribute(writer, "Algorithm", "enum", typed.Algorithm);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(BackupOption))
        {
            var typed = (BackupOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(BackupRestoreFileInfo))
        {
            var typed = (BackupRestoreFileInfo)node;
            ParserJson.WriteAttribute(writer, "ItemKind", "enum", typed.ItemKind);
        }
        if (nodeType == typeof(BeginDialogStatement))
        {
            var typed = (BeginDialogStatement)node;
            ParserJson.WriteAttribute(writer, "IsConversation", "boolean", typed.IsConversation);
        }
        if (nodeType == typeof(BeginTransactionStatement))
        {
            var typed = (BeginTransactionStatement)node;
            ParserJson.WriteAttribute(writer, "Distributed", "boolean", typed.Distributed);
            ParserJson.WriteAttribute(writer, "MarkDefined", "boolean", typed.MarkDefined);
        }
        if (nodeType == typeof(BinaryExpression))
        {
            var typed = (BinaryExpression)node;
            ParserJson.WriteAttribute(writer, "BinaryExpressionType", "enum", typed.BinaryExpressionType);
        }
        if (nodeType == typeof(BinaryLiteral))
        {
            var typed = (BinaryLiteral)node;
            ParserJson.WriteAttribute(writer, "IsLargeObject", "boolean", typed.IsLargeObject);
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(BinaryQueryExpression))
        {
            var typed = (BinaryQueryExpression)node;
            ParserJson.WriteAttribute(writer, "All", "boolean", typed.All);
            ParserJson.WriteAttribute(writer, "BinaryQueryExpressionType", "enum", typed.BinaryQueryExpressionType);
        }
        if (nodeType == typeof(BooleanBinaryExpression))
        {
            var typed = (BooleanBinaryExpression)node;
            ParserJson.WriteAttribute(writer, "BinaryExpressionType", "enum", typed.BinaryExpressionType);
        }
        if (nodeType == typeof(BooleanComparisonExpression))
        {
            var typed = (BooleanComparisonExpression)node;
            ParserJson.WriteAttribute(writer, "ComparisonType", "enum", typed.ComparisonType);
        }
        if (nodeType == typeof(BooleanExpressionSnippet))
        {
            var typed = (BooleanExpressionSnippet)node;
            ParserJson.WriteAttribute(writer, "Script", "string", typed.Script);
        }
        if (nodeType == typeof(BooleanIsNullExpression))
        {
            var typed = (BooleanIsNullExpression)node;
            ParserJson.WriteAttribute(writer, "IsNot", "boolean", typed.IsNot);
        }
        if (nodeType == typeof(BooleanTernaryExpression))
        {
            var typed = (BooleanTernaryExpression)node;
            ParserJson.WriteAttribute(writer, "TernaryExpressionType", "enum", typed.TernaryExpressionType);
        }
        if (nodeType == typeof(BoundingBoxParameter))
        {
            var typed = (BoundingBoxParameter)node;
            ParserJson.WriteAttribute(writer, "Parameter", "enum", typed.Parameter);
        }
        if (nodeType == typeof(BrokerPriorityParameter))
        {
            var typed = (BrokerPriorityParameter)node;
            ParserJson.WriteAttribute(writer, "IsDefaultOrAny", "enum", typed.IsDefaultOrAny);
            ParserJson.WriteAttribute(writer, "ParameterType", "enum", typed.ParameterType);
        }
        if (nodeType == typeof(BuiltInFunctionTableReference))
        {
            var typed = (BuiltInFunctionTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(BulkInsertOption))
        {
            var typed = (BulkInsertOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(BulkOpenRowset))
        {
            var typed = (BulkOpenRowset)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(CatalogCollationOption))
        {
            var typed = (CatalogCollationOption)node;
            ParserJson.WriteAttribute(writer, "CatalogCollation", "enum", typed.CatalogCollation);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(CertificateOption))
        {
            var typed = (CertificateOption)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(ChangeRetentionChangeTrackingOptionDetail))
        {
            var typed = (ChangeRetentionChangeTrackingOptionDetail)node;
            ParserJson.WriteAttribute(writer, "Unit", "enum", typed.Unit);
        }
        if (nodeType == typeof(ChangeTableChangesTableReference))
        {
            var typed = (ChangeTableChangesTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
            ParserJson.WriteAttribute(writer, "ForceSeek", "boolean", typed.ForceSeek);
        }
        if (nodeType == typeof(ChangeTableVersionTableReference))
        {
            var typed = (ChangeTableVersionTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
            ParserJson.WriteAttribute(writer, "ForceSeek", "boolean", typed.ForceSeek);
        }
        if (nodeType == typeof(ChangeTrackingDatabaseOption))
        {
            var typed = (ChangeTrackingDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(ChangeTrackingFullTextIndexOption))
        {
            var typed = (ChangeTrackingFullTextIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(CharacterSetPayloadOption))
        {
            var typed = (CharacterSetPayloadOption)node;
            ParserJson.WriteAttribute(writer, "IsSql", "boolean", typed.IsSql);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(CheckConstraintDefinition))
        {
            var typed = (CheckConstraintDefinition)node;
            ParserJson.WriteAttribute(writer, "NotForReplication", "boolean", typed.NotForReplication);
        }
        if (nodeType == typeof(ChildObjectName))
        {
            var typed = (ChildObjectName)node;
            ParserJson.WriteAttribute(writer, "Count", "integer", typed.Count);
        }
        if (nodeType == typeof(ClassifierEndTimeOption))
        {
            var typed = (ClassifierEndTimeOption)node;
            ParserJson.WriteAttribute(writer, "OptionType", "enum", typed.OptionType);
        }
        if (nodeType == typeof(ClassifierImportanceOption))
        {
            var typed = (ClassifierImportanceOption)node;
            ParserJson.WriteAttribute(writer, "Importance", "enum", typed.Importance);
            ParserJson.WriteAttribute(writer, "OptionType", "enum", typed.OptionType);
        }
        if (nodeType == typeof(ClassifierMemberNameOption))
        {
            var typed = (ClassifierMemberNameOption)node;
            ParserJson.WriteAttribute(writer, "OptionType", "enum", typed.OptionType);
        }
        if (nodeType == typeof(ClassifierStartTimeOption))
        {
            var typed = (ClassifierStartTimeOption)node;
            ParserJson.WriteAttribute(writer, "OptionType", "enum", typed.OptionType);
        }
        if (nodeType == typeof(ClassifierWlmContextOption))
        {
            var typed = (ClassifierWlmContextOption)node;
            ParserJson.WriteAttribute(writer, "OptionType", "enum", typed.OptionType);
        }
        if (nodeType == typeof(ClassifierWlmLabelOption))
        {
            var typed = (ClassifierWlmLabelOption)node;
            ParserJson.WriteAttribute(writer, "OptionType", "enum", typed.OptionType);
        }
        if (nodeType == typeof(ClassifierWorkloadGroupOption))
        {
            var typed = (ClassifierWorkloadGroupOption)node;
            ParserJson.WriteAttribute(writer, "OptionType", "enum", typed.OptionType);
        }
        if (nodeType == typeof(CloseSymmetricKeyStatement))
        {
            var typed = (CloseSymmetricKeyStatement)node;
            ParserJson.WriteAttribute(writer, "All", "boolean", typed.All);
        }
        if (nodeType == typeof(ClusterByTableOption))
        {
            var typed = (ClusterByTableOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ColumnDefinition))
        {
            var typed = (ColumnDefinition)node;
            ParserJson.WriteAttribute(writer, "GeneratedAlways", "enum", typed.GeneratedAlways);
            ParserJson.WriteAttribute(writer, "IsHidden", "boolean", typed.IsHidden);
            ParserJson.WriteAttribute(writer, "IsMasked", "boolean", typed.IsMasked);
            ParserJson.WriteAttribute(writer, "IsPersisted", "boolean", typed.IsPersisted);
            ParserJson.WriteAttribute(writer, "IsRowGuidCol", "boolean", typed.IsRowGuidCol);
        }
        if (nodeType == typeof(ColumnEncryptionAlgorithmNameParameter))
        {
            var typed = (ColumnEncryptionAlgorithmNameParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterKind", "enum", typed.ParameterKind);
        }
        if (nodeType == typeof(ColumnEncryptionAlgorithmParameter))
        {
            var typed = (ColumnEncryptionAlgorithmParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterKind", "enum", typed.ParameterKind);
        }
        if (nodeType == typeof(ColumnEncryptionKeyNameParameter))
        {
            var typed = (ColumnEncryptionKeyNameParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterKind", "enum", typed.ParameterKind);
        }
        if (nodeType == typeof(ColumnEncryptionTypeParameter))
        {
            var typed = (ColumnEncryptionTypeParameter)node;
            ParserJson.WriteAttribute(writer, "EncryptionType", "enum", typed.EncryptionType);
            ParserJson.WriteAttribute(writer, "ParameterKind", "enum", typed.ParameterKind);
        }
        if (nodeType == typeof(ColumnMasterKeyEnclaveComputationsParameter))
        {
            var typed = (ColumnMasterKeyEnclaveComputationsParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterKind", "enum", typed.ParameterKind);
        }
        if (nodeType == typeof(ColumnMasterKeyNameParameter))
        {
            var typed = (ColumnMasterKeyNameParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterKind", "enum", typed.ParameterKind);
        }
        if (nodeType == typeof(ColumnMasterKeyPathParameter))
        {
            var typed = (ColumnMasterKeyPathParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterKind", "enum", typed.ParameterKind);
        }
        if (nodeType == typeof(ColumnMasterKeyStoreProviderNameParameter))
        {
            var typed = (ColumnMasterKeyStoreProviderNameParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterKind", "enum", typed.ParameterKind);
        }
        if (nodeType == typeof(ColumnReferenceExpression))
        {
            var typed = (ColumnReferenceExpression)node;
            ParserJson.WriteAttribute(writer, "ColumnType", "enum", typed.ColumnType);
        }
        if (nodeType == typeof(ColumnStorageOptions))
        {
            var typed = (ColumnStorageOptions)node;
            ParserJson.WriteAttribute(writer, "IsFileStream", "boolean", typed.IsFileStream);
            ParserJson.WriteAttribute(writer, "SparseOption", "enum", typed.SparseOption);
        }
        if (nodeType == typeof(ColumnWithSortOrder))
        {
            var typed = (ColumnWithSortOrder)node;
            ParserJson.WriteAttribute(writer, "SortOrder", "enum", typed.SortOrder);
        }
        if (nodeType == typeof(CommandSecurityElement80))
        {
            var typed = (CommandSecurityElement80)node;
            ParserJson.WriteAttribute(writer, "All", "boolean", typed.All);
            ParserJson.WriteAttribute(writer, "CommandOptions", "enum", typed.CommandOptions);
        }
        if (nodeType == typeof(CommitTransactionStatement))
        {
            var typed = (CommitTransactionStatement)node;
            ParserJson.WriteAttribute(writer, "DelayedDurabilityOption", "enum", typed.DelayedDurabilityOption);
        }
        if (nodeType == typeof(CompressionDelayIndexOption))
        {
            var typed = (CompressionDelayIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "TimeUnit", "enum", typed.TimeUnit);
        }
        if (nodeType == typeof(CompressionEndpointProtocolOption))
        {
            var typed = (CompressionEndpointProtocolOption)node;
            ParserJson.WriteAttribute(writer, "IsEnabled", "boolean", typed.IsEnabled);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(ComputeFunction))
        {
            var typed = (ComputeFunction)node;
            ParserJson.WriteAttribute(writer, "ComputeFunctionType", "enum", typed.ComputeFunctionType);
        }
        if (nodeType == typeof(ContainmentDatabaseOption))
        {
            var typed = (ContainmentDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(ContractMessage))
        {
            var typed = (ContractMessage)node;
            ParserJson.WriteAttribute(writer, "SentBy", "enum", typed.SentBy);
        }
        if (nodeType == typeof(CopyOption))
        {
            var typed = (CopyOption)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(CreateAsymmetricKeyStatement))
        {
            var typed = (CreateAsymmetricKeyStatement)node;
            ParserJson.WriteAttribute(writer, "EncryptionAlgorithm", "enum", typed.EncryptionAlgorithm);
        }
        if (nodeType == typeof(CreateCertificateStatement))
        {
            var typed = (CreateCertificateStatement)node;
            ParserJson.WriteAttribute(writer, "ActiveForBeginDialog", "enum", typed.ActiveForBeginDialog);
        }
        if (nodeType == typeof(CreateColumnStoreIndexStatement))
        {
            var typed = (CreateColumnStoreIndexStatement)node;
            ParserJson.WriteAttribute(writer, "Clustered", "boolean", typed.Clustered);
        }
        if (nodeType == typeof(CreateCredentialStatement))
        {
            var typed = (CreateCredentialStatement)node;
            ParserJson.WriteAttribute(writer, "IsDatabaseScoped", "boolean", typed.IsDatabaseScoped);
        }
        if (nodeType == typeof(CreateDatabaseAuditSpecificationStatement))
        {
            var typed = (CreateDatabaseAuditSpecificationStatement)node;
            ParserJson.WriteAttribute(writer, "AuditState", "enum", typed.AuditState);
        }
        if (nodeType == typeof(CreateDatabaseEncryptionKeyStatement))
        {
            var typed = (CreateDatabaseEncryptionKeyStatement)node;
            ParserJson.WriteAttribute(writer, "Algorithm", "enum", typed.Algorithm);
        }
        if (nodeType == typeof(CreateDatabaseStatement))
        {
            var typed = (CreateDatabaseStatement)node;
            ParserJson.WriteAttribute(writer, "AttachMode", "enum", typed.AttachMode);
        }
        if (nodeType == typeof(CreateEndpointStatement))
        {
            var typed = (CreateEndpointStatement)node;
            ParserJson.WriteAttribute(writer, "EndpointType", "enum", typed.EndpointType);
            ParserJson.WriteAttribute(writer, "Protocol", "enum", typed.Protocol);
            ParserJson.WriteAttribute(writer, "State", "enum", typed.State);
        }
        if (nodeType == typeof(CreateEventNotificationStatement))
        {
            var typed = (CreateEventNotificationStatement)node;
            ParserJson.WriteAttribute(writer, "WithFanIn", "boolean", typed.WithFanIn);
        }
        if (nodeType == typeof(CreateEventSessionStatement))
        {
            var typed = (CreateEventSessionStatement)node;
            ParserJson.WriteAttribute(writer, "SessionScope", "enum", typed.SessionScope);
        }
        if (nodeType == typeof(CreateExternalDataSourceStatement))
        {
            var typed = (CreateExternalDataSourceStatement)node;
            ParserJson.WriteAttribute(writer, "DataSourceType", "enum", typed.DataSourceType);
            ParserJson.WriteAttribute(writer, "PushdownOption", "enum", typed.PushdownOption);
        }
        if (nodeType == typeof(CreateExternalFileFormatStatement))
        {
            var typed = (CreateExternalFileFormatStatement)node;
            ParserJson.WriteAttribute(writer, "FormatType", "enum", typed.FormatType);
        }
        if (nodeType == typeof(CreateExternalModelStatement))
        {
            var typed = (CreateExternalModelStatement)node;
            ParserJson.WriteAttribute(writer, "ModelType", "enum", typed.ModelType);
        }
        if (nodeType == typeof(CreateFullTextCatalogStatement))
        {
            var typed = (CreateFullTextCatalogStatement)node;
            ParserJson.WriteAttribute(writer, "IsDefault", "boolean", typed.IsDefault);
        }
        if (nodeType == typeof(CreateFullTextStopListStatement))
        {
            var typed = (CreateFullTextStopListStatement)node;
            ParserJson.WriteAttribute(writer, "IsSystemStopList", "boolean", typed.IsSystemStopList);
        }
        if (nodeType == typeof(CreateIndexStatement))
        {
            var typed = (CreateIndexStatement)node;
            ParserJson.WriteAttribute(writer, "Clustered", "boolean", typed.Clustered);
            ParserJson.WriteAttribute(writer, "Translated80SyntaxTo90", "boolean", typed.Translated80SyntaxTo90);
            ParserJson.WriteAttribute(writer, "Unique", "boolean", typed.Unique);
        }
        if (nodeType == typeof(CreateMessageTypeStatement))
        {
            var typed = (CreateMessageTypeStatement)node;
            ParserJson.WriteAttribute(writer, "ValidationMethod", "enum", typed.ValidationMethod);
        }
        if (nodeType == typeof(CreateOrAlterProcedureStatement))
        {
            var typed = (CreateOrAlterProcedureStatement)node;
            ParserJson.WriteAttribute(writer, "IsForReplication", "boolean", typed.IsForReplication);
        }
        if (nodeType == typeof(CreateOrAlterTriggerStatement))
        {
            var typed = (CreateOrAlterTriggerStatement)node;
            ParserJson.WriteAttribute(writer, "IsNotForReplication", "boolean", typed.IsNotForReplication);
            ParserJson.WriteAttribute(writer, "TriggerType", "enum", typed.TriggerType);
            ParserJson.WriteAttribute(writer, "WithAppend", "boolean", typed.WithAppend);
        }
        if (nodeType == typeof(CreateOrAlterViewStatement))
        {
            var typed = (CreateOrAlterViewStatement)node;
            ParserJson.WriteAttribute(writer, "IsMaterialized", "boolean", typed.IsMaterialized);
            ParserJson.WriteAttribute(writer, "WithCheckOption", "boolean", typed.WithCheckOption);
        }
        if (nodeType == typeof(CreatePartitionFunctionStatement))
        {
            var typed = (CreatePartitionFunctionStatement)node;
            ParserJson.WriteAttribute(writer, "Range", "enum", typed.Range);
        }
        if (nodeType == typeof(CreatePartitionSchemeStatement))
        {
            var typed = (CreatePartitionSchemeStatement)node;
            ParserJson.WriteAttribute(writer, "IsAll", "boolean", typed.IsAll);
        }
        if (nodeType == typeof(CreateProcedureStatement))
        {
            var typed = (CreateProcedureStatement)node;
            ParserJson.WriteAttribute(writer, "IsForReplication", "boolean", typed.IsForReplication);
        }
        if (nodeType == typeof(CreateSecurityPolicyStatement))
        {
            var typed = (CreateSecurityPolicyStatement)node;
            ParserJson.WriteAttribute(writer, "ActionType", "enum", typed.ActionType);
            ParserJson.WriteAttribute(writer, "NotForReplication", "boolean", typed.NotForReplication);
        }
        if (nodeType == typeof(CreateSelectiveXmlIndexStatement))
        {
            var typed = (CreateSelectiveXmlIndexStatement)node;
            ParserJson.WriteAttribute(writer, "IsSecondary", "boolean", typed.IsSecondary);
        }
        if (nodeType == typeof(CreateServerAuditSpecificationStatement))
        {
            var typed = (CreateServerAuditSpecificationStatement)node;
            ParserJson.WriteAttribute(writer, "AuditState", "enum", typed.AuditState);
        }
        if (nodeType == typeof(CreateSpatialIndexStatement))
        {
            var typed = (CreateSpatialIndexStatement)node;
            ParserJson.WriteAttribute(writer, "SpatialIndexingScheme", "enum", typed.SpatialIndexingScheme);
        }
        if (nodeType == typeof(CreateTableStatement))
        {
            var typed = (CreateTableStatement)node;
            ParserJson.WriteAttribute(writer, "AsEdge", "boolean", typed.AsEdge);
            ParserJson.WriteAttribute(writer, "AsFileTable", "boolean", typed.AsFileTable);
            ParserJson.WriteAttribute(writer, "AsNode", "boolean", typed.AsNode);
        }
        if (nodeType == typeof(CreateTriggerStatement))
        {
            var typed = (CreateTriggerStatement)node;
            ParserJson.WriteAttribute(writer, "IsNotForReplication", "boolean", typed.IsNotForReplication);
            ParserJson.WriteAttribute(writer, "TriggerType", "enum", typed.TriggerType);
            ParserJson.WriteAttribute(writer, "WithAppend", "boolean", typed.WithAppend);
        }
        if (nodeType == typeof(CreateViewStatement))
        {
            var typed = (CreateViewStatement)node;
            ParserJson.WriteAttribute(writer, "IsMaterialized", "boolean", typed.IsMaterialized);
            ParserJson.WriteAttribute(writer, "WithCheckOption", "boolean", typed.WithCheckOption);
        }
        if (nodeType == typeof(CreateXmlIndexStatement))
        {
            var typed = (CreateXmlIndexStatement)node;
            ParserJson.WriteAttribute(writer, "Primary", "boolean", typed.Primary);
            ParserJson.WriteAttribute(writer, "SecondaryXmlIndexType", "enum", typed.SecondaryXmlIndexType);
        }
        if (nodeType == typeof(CreationDispositionKeyOption))
        {
            var typed = (CreationDispositionKeyOption)node;
            ParserJson.WriteAttribute(writer, "IsCreateNew", "boolean", typed.IsCreateNew);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(CryptoMechanism))
        {
            var typed = (CryptoMechanism)node;
            ParserJson.WriteAttribute(writer, "CryptoMechanismType", "enum", typed.CryptoMechanismType);
        }
        if (nodeType == typeof(CursorDefaultDatabaseOption))
        {
            var typed = (CursorDefaultDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "IsLocal", "boolean", typed.IsLocal);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(CursorId))
        {
            var typed = (CursorId)node;
            ParserJson.WriteAttribute(writer, "IsGlobal", "boolean", typed.IsGlobal);
        }
        if (nodeType == typeof(CursorOption))
        {
            var typed = (CursorOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DWCompatibilityLevelConfigurationOption))
        {
            var typed = (DWCompatibilityLevelConfigurationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DataCompressionOption))
        {
            var typed = (DataCompressionOption)node;
            ParserJson.WriteAttribute(writer, "CompressionLevel", "enum", typed.CompressionLevel);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DataModificationTableReference))
        {
            var typed = (DataModificationTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(DataRetentionTableOption))
        {
            var typed = (DataRetentionTableOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(DataTypeSequenceOption))
        {
            var typed = (DataTypeSequenceOption)node;
            ParserJson.WriteAttribute(writer, "NoValue", "boolean", typed.NoValue);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DatabaseAuditAction))
        {
            var typed = (DatabaseAuditAction)node;
            ParserJson.WriteAttribute(writer, "ActionKind", "enum", typed.ActionKind);
        }
        if (nodeType == typeof(DatabaseConfigurationClearOption))
        {
            var typed = (DatabaseConfigurationClearOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DatabaseConfigurationSetOption))
        {
            var typed = (DatabaseConfigurationSetOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DatabaseOption))
        {
            var typed = (DatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DbccNamedLiteral))
        {
            var typed = (DbccNamedLiteral)node;
            ParserJson.WriteAttribute(writer, "Name", "string", typed.Name);
        }
        if (nodeType == typeof(DbccOption))
        {
            var typed = (DbccOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DbccStatement))
        {
            var typed = (DbccStatement)node;
            ParserJson.WriteAttribute(writer, "Command", "enum", typed.Command);
            ParserJson.WriteAttribute(writer, "DllName", "string", typed.DllName);
            ParserJson.WriteAttribute(writer, "OptionsUseJoin", "boolean", typed.OptionsUseJoin);
            ParserJson.WriteAttribute(writer, "ParenthesisRequired", "boolean", typed.ParenthesisRequired);
        }
        if (nodeType == typeof(DeclareTableVariableBody))
        {
            var typed = (DeclareTableVariableBody)node;
            ParserJson.WriteAttribute(writer, "AsDefined", "boolean", typed.AsDefined);
        }
        if (nodeType == typeof(DefaultConstraintDefinition))
        {
            var typed = (DefaultConstraintDefinition)node;
            ParserJson.WriteAttribute(writer, "WithValues", "boolean", typed.WithValues);
        }
        if (nodeType == typeof(DefaultLiteral))
        {
            var typed = (DefaultLiteral)node;
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(DelayedDurabilityDatabaseOption))
        {
            var typed = (DelayedDurabilityDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(DenyStatement))
        {
            var typed = (DenyStatement)node;
            ParserJson.WriteAttribute(writer, "CascadeOption", "boolean", typed.CascadeOption);
        }
        if (nodeType == typeof(DenyStatement80))
        {
            var typed = (DenyStatement80)node;
            ParserJson.WriteAttribute(writer, "CascadeOption", "boolean", typed.CascadeOption);
        }
        if (nodeType == typeof(DeviceInfo))
        {
            var typed = (DeviceInfo)node;
            ParserJson.WriteAttribute(writer, "DeviceType", "enum", typed.DeviceType);
        }
        if (nodeType == typeof(DiskStatement))
        {
            var typed = (DiskStatement)node;
            ParserJson.WriteAttribute(writer, "DiskStatementType", "enum", typed.DiskStatementType);
        }
        if (nodeType == typeof(DiskStatementOption))
        {
            var typed = (DiskStatementOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DistinctPredicate))
        {
            var typed = (DistinctPredicate)node;
            ParserJson.WriteAttribute(writer, "IsNot", "boolean", typed.IsNot);
        }
        if (nodeType == typeof(DropAggregateStatement))
        {
            var typed = (DropAggregateStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropAlterFullTextIndexAction))
        {
            var typed = (DropAlterFullTextIndexAction)node;
            ParserJson.WriteAttribute(writer, "WithNoPopulation", "boolean", typed.WithNoPopulation);
        }
        if (nodeType == typeof(DropApplicationRoleStatement))
        {
            var typed = (DropApplicationRoleStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropAssemblyStatement))
        {
            var typed = (DropAssemblyStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
            ParserJson.WriteAttribute(writer, "WithNoDependents", "boolean", typed.WithNoDependents);
        }
        if (nodeType == typeof(DropAsymmetricKeyStatement))
        {
            var typed = (DropAsymmetricKeyStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
            ParserJson.WriteAttribute(writer, "RemoveProviderKey", "boolean", typed.RemoveProviderKey);
        }
        if (nodeType == typeof(DropAvailabilityGroupStatement))
        {
            var typed = (DropAvailabilityGroupStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropBrokerPriorityStatement))
        {
            var typed = (DropBrokerPriorityStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropCertificateStatement))
        {
            var typed = (DropCertificateStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropClusteredConstraintMoveOption))
        {
            var typed = (DropClusteredConstraintMoveOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DropClusteredConstraintStateOption))
        {
            var typed = (DropClusteredConstraintStateOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(DropClusteredConstraintValueOption))
        {
            var typed = (DropClusteredConstraintValueOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DropClusteredConstraintWaitAtLowPriorityLockOption))
        {
            var typed = (DropClusteredConstraintWaitAtLowPriorityLockOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(DropColumnEncryptionKeyStatement))
        {
            var typed = (DropColumnEncryptionKeyStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropColumnMasterKeyStatement))
        {
            var typed = (DropColumnMasterKeyStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropContractStatement))
        {
            var typed = (DropContractStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropCredentialStatement))
        {
            var typed = (DropCredentialStatement)node;
            ParserJson.WriteAttribute(writer, "IsDatabaseScoped", "boolean", typed.IsDatabaseScoped);
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropCryptographicProviderStatement))
        {
            var typed = (DropCryptographicProviderStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropDatabaseAuditSpecificationStatement))
        {
            var typed = (DropDatabaseAuditSpecificationStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropDatabaseStatement))
        {
            var typed = (DropDatabaseStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropDefaultStatement))
        {
            var typed = (DropDefaultStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropEndpointStatement))
        {
            var typed = (DropEndpointStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropEventSessionStatement))
        {
            var typed = (DropEventSessionStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
            ParserJson.WriteAttribute(writer, "SessionScope", "enum", typed.SessionScope);
        }
        if (nodeType == typeof(DropExternalDataSourceStatement))
        {
            var typed = (DropExternalDataSourceStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropExternalFileFormatStatement))
        {
            var typed = (DropExternalFileFormatStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropExternalModelStatement))
        {
            var typed = (DropExternalModelStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropExternalResourcePoolStatement))
        {
            var typed = (DropExternalResourcePoolStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropExternalStreamStatement))
        {
            var typed = (DropExternalStreamStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropExternalStreamingJobStatement))
        {
            var typed = (DropExternalStreamingJobStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropExternalTableStatement))
        {
            var typed = (DropExternalTableStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropFederationStatement))
        {
            var typed = (DropFederationStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropFullTextCatalogStatement))
        {
            var typed = (DropFullTextCatalogStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropFullTextStopListStatement))
        {
            var typed = (DropFullTextStopListStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropFunctionStatement))
        {
            var typed = (DropFunctionStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropIndexStatement))
        {
            var typed = (DropIndexStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropLoginStatement))
        {
            var typed = (DropLoginStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropMessageTypeStatement))
        {
            var typed = (DropMessageTypeStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropPartitionFunctionStatement))
        {
            var typed = (DropPartitionFunctionStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropPartitionSchemeStatement))
        {
            var typed = (DropPartitionSchemeStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropProcedureStatement))
        {
            var typed = (DropProcedureStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropRemoteServiceBindingStatement))
        {
            var typed = (DropRemoteServiceBindingStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropResourcePoolStatement))
        {
            var typed = (DropResourcePoolStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropRoleStatement))
        {
            var typed = (DropRoleStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropRouteStatement))
        {
            var typed = (DropRouteStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropRuleStatement))
        {
            var typed = (DropRuleStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropSchemaStatement))
        {
            var typed = (DropSchemaStatement)node;
            ParserJson.WriteAttribute(writer, "DropBehavior", "enum", typed.DropBehavior);
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropSearchPropertyListStatement))
        {
            var typed = (DropSearchPropertyListStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropSecurityPolicyStatement))
        {
            var typed = (DropSecurityPolicyStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropSequenceStatement))
        {
            var typed = (DropSequenceStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropServerAuditSpecificationStatement))
        {
            var typed = (DropServerAuditSpecificationStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropServerAuditStatement))
        {
            var typed = (DropServerAuditStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropServerRoleStatement))
        {
            var typed = (DropServerRoleStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropServiceStatement))
        {
            var typed = (DropServiceStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropSignatureStatement))
        {
            var typed = (DropSignatureStatement)node;
            ParserJson.WriteAttribute(writer, "ElementKind", "enum", typed.ElementKind);
            ParserJson.WriteAttribute(writer, "IsCounter", "boolean", typed.IsCounter);
        }
        if (nodeType == typeof(DropSymmetricKeyStatement))
        {
            var typed = (DropSymmetricKeyStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
            ParserJson.WriteAttribute(writer, "RemoveProviderKey", "boolean", typed.RemoveProviderKey);
        }
        if (nodeType == typeof(DropSynonymStatement))
        {
            var typed = (DropSynonymStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropTableStatement))
        {
            var typed = (DropTableStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropTriggerStatement))
        {
            var typed = (DropTriggerStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
            ParserJson.WriteAttribute(writer, "TriggerScope", "enum", typed.TriggerScope);
        }
        if (nodeType == typeof(DropTypeStatement))
        {
            var typed = (DropTypeStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropUserStatement))
        {
            var typed = (DropUserStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropViewStatement))
        {
            var typed = (DropViewStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropWorkloadClassifierStatement))
        {
            var typed = (DropWorkloadClassifierStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DropWorkloadGroupStatement))
        {
            var typed = (DropWorkloadGroupStatement)node;
            ParserJson.WriteAttribute(writer, "IsIfExists", "boolean", typed.IsIfExists);
        }
        if (nodeType == typeof(DurabilityTableOption))
        {
            var typed = (DurabilityTableOption)node;
            ParserJson.WriteAttribute(writer, "DurabilityTableOptionKind", "enum", typed.DurabilityTableOptionKind);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ElasticPoolSpecification))
        {
            var typed = (ElasticPoolSpecification)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(EnableDisableTriggerStatement))
        {
            var typed = (EnableDisableTriggerStatement)node;
            ParserJson.WriteAttribute(writer, "All", "boolean", typed.All);
            ParserJson.WriteAttribute(writer, "TriggerEnforcement", "enum", typed.TriggerEnforcement);
        }
        if (nodeType == typeof(EnabledDisabledPayloadOption))
        {
            var typed = (EnabledDisabledPayloadOption)node;
            ParserJson.WriteAttribute(writer, "IsEnabled", "boolean", typed.IsEnabled);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(EncryptedValueParameter))
        {
            var typed = (EncryptedValueParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterKind", "enum", typed.ParameterKind);
        }
        if (nodeType == typeof(EncryptionPayloadOption))
        {
            var typed = (EncryptionPayloadOption)node;
            ParserJson.WriteAttribute(writer, "AlgorithmPartOne", "enum", typed.AlgorithmPartOne);
            ParserJson.WriteAttribute(writer, "AlgorithmPartTwo", "enum", typed.AlgorithmPartTwo);
            ParserJson.WriteAttribute(writer, "EncryptionSupport", "enum", typed.EncryptionSupport);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(EndConversationStatement))
        {
            var typed = (EndConversationStatement)node;
            ParserJson.WriteAttribute(writer, "WithCleanup", "boolean", typed.WithCleanup);
        }
        if (nodeType == typeof(EndpointAffinity))
        {
            var typed = (EndpointAffinity)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(EventGroupContainer))
        {
            var typed = (EventGroupContainer)node;
            ParserJson.WriteAttribute(writer, "EventGroup", "enum", typed.EventGroup);
        }
        if (nodeType == typeof(EventNotificationObjectScope))
        {
            var typed = (EventNotificationObjectScope)node;
            ParserJson.WriteAttribute(writer, "Target", "enum", typed.Target);
        }
        if (nodeType == typeof(EventRetentionSessionOption))
        {
            var typed = (EventRetentionSessionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(EventSessionStatement))
        {
            var typed = (EventSessionStatement)node;
            ParserJson.WriteAttribute(writer, "SessionScope", "enum", typed.SessionScope);
        }
        if (nodeType == typeof(EventTypeContainer))
        {
            var typed = (EventTypeContainer)node;
            ParserJson.WriteAttribute(writer, "EventType", "enum", typed.EventType);
        }
        if (nodeType == typeof(ExecuteAsClause))
        {
            var typed = (ExecuteAsClause)node;
            ParserJson.WriteAttribute(writer, "ExecuteAsOption", "enum", typed.ExecuteAsOption);
        }
        if (nodeType == typeof(ExecuteAsFunctionOption))
        {
            var typed = (ExecuteAsFunctionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExecuteAsProcedureOption))
        {
            var typed = (ExecuteAsProcedureOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExecuteAsStatement))
        {
            var typed = (ExecuteAsStatement)node;
            ParserJson.WriteAttribute(writer, "WithNoRevert", "boolean", typed.WithNoRevert);
        }
        if (nodeType == typeof(ExecuteAsTriggerOption))
        {
            var typed = (ExecuteAsTriggerOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExecuteContext))
        {
            var typed = (ExecuteContext)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(ExecuteOption))
        {
            var typed = (ExecuteOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExecuteParameter))
        {
            var typed = (ExecuteParameter)node;
            ParserJson.WriteAttribute(writer, "IsOutput", "boolean", typed.IsOutput);
        }
        if (nodeType == typeof(ExpressionGroupingSpecification))
        {
            var typed = (ExpressionGroupingSpecification)node;
            ParserJson.WriteAttribute(writer, "DistributedAggregation", "boolean", typed.DistributedAggregation);
        }
        if (nodeType == typeof(ExpressionWithSortOrder))
        {
            var typed = (ExpressionWithSortOrder)node;
            ParserJson.WriteAttribute(writer, "SortOrder", "enum", typed.SortOrder);
        }
        if (nodeType == typeof(ExternalDataSourceLiteralOrIdentifierOption))
        {
            var typed = (ExternalDataSourceLiteralOrIdentifierOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExternalFileFormatContainerOption))
        {
            var typed = (ExternalFileFormatContainerOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExternalFileFormatLiteralOption))
        {
            var typed = (ExternalFileFormatLiteralOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExternalFileFormatUseDefaultTypeOption))
        {
            var typed = (ExternalFileFormatUseDefaultTypeOption)node;
            ParserJson.WriteAttribute(writer, "ExternalFileFormatUseDefaultType", "enum", typed.ExternalFileFormatUseDefaultType);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExternalResourcePoolAffinitySpecification))
        {
            var typed = (ExternalResourcePoolAffinitySpecification)node;
            ParserJson.WriteAttribute(writer, "AffinityType", "enum", typed.AffinityType);
            ParserJson.WriteAttribute(writer, "IsAuto", "boolean", typed.IsAuto);
        }
        if (nodeType == typeof(ExternalResourcePoolParameter))
        {
            var typed = (ExternalResourcePoolParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterType", "enum", typed.ParameterType);
        }
        if (nodeType == typeof(ExternalStreamLiteralOrIdentifierOption))
        {
            var typed = (ExternalStreamLiteralOrIdentifierOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExternalTableDistributionOption))
        {
            var typed = (ExternalTableDistributionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExternalTableLiteralOrIdentifierOption))
        {
            var typed = (ExternalTableLiteralOrIdentifierOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ExternalTableRejectTypeOption))
        {
            var typed = (ExternalTableRejectTypeOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(FailoverModeReplicaOption))
        {
            var typed = (FailoverModeReplicaOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(FetchType))
        {
            var typed = (FetchType)node;
            ParserJson.WriteAttribute(writer, "Orientation", "enum", typed.Orientation);
        }
        if (nodeType == typeof(FileDeclaration))
        {
            var typed = (FileDeclaration)node;
            ParserJson.WriteAttribute(writer, "IsPrimary", "boolean", typed.IsPrimary);
        }
        if (nodeType == typeof(FileDeclarationOption))
        {
            var typed = (FileDeclarationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(FileEncryptionSource))
        {
            var typed = (FileEncryptionSource)node;
            ParserJson.WriteAttribute(writer, "IsExecutable", "boolean", typed.IsExecutable);
        }
        if (nodeType == typeof(FileGroupDefinition))
        {
            var typed = (FileGroupDefinition)node;
            ParserJson.WriteAttribute(writer, "ContainsFileStream", "boolean", typed.ContainsFileStream);
            ParserJson.WriteAttribute(writer, "ContainsMemoryOptimizedData", "boolean", typed.ContainsMemoryOptimizedData);
            ParserJson.WriteAttribute(writer, "IsDefault", "boolean", typed.IsDefault);
        }
        if (nodeType == typeof(FileGrowthFileDeclarationOption))
        {
            var typed = (FileGrowthFileDeclarationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Units", "enum", typed.Units);
        }
        if (nodeType == typeof(FileNameFileDeclarationOption))
        {
            var typed = (FileNameFileDeclarationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(FileStreamDatabaseOption))
        {
            var typed = (FileStreamDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "NonTransactedAccess", "enum", typed.NonTransactedAccess);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(FileStreamOnDropIndexOption))
        {
            var typed = (FileStreamOnDropIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(FileStreamOnTableOption))
        {
            var typed = (FileStreamOnTableOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(FileStreamRestoreOption))
        {
            var typed = (FileStreamRestoreOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(FileTableCollateFileNameTableOption))
        {
            var typed = (FileTableCollateFileNameTableOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(FileTableConstraintNameTableOption))
        {
            var typed = (FileTableConstraintNameTableOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(FileTableDirectoryTableOption))
        {
            var typed = (FileTableDirectoryTableOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ForceSeekTableHint))
        {
            var typed = (ForceSeekTableHint)node;
            ParserJson.WriteAttribute(writer, "HintKind", "enum", typed.HintKind);
        }
        if (nodeType == typeof(ForeignKeyConstraintDefinition))
        {
            var typed = (ForeignKeyConstraintDefinition)node;
            ParserJson.WriteAttribute(writer, "DeleteAction", "enum", typed.DeleteAction);
            ParserJson.WriteAttribute(writer, "IsEnforced", "boolean", typed.IsEnforced);
            ParserJson.WriteAttribute(writer, "NotForReplication", "boolean", typed.NotForReplication);
            ParserJson.WriteAttribute(writer, "UpdateAction", "enum", typed.UpdateAction);
        }
        if (nodeType == typeof(FullTextCatalogAndFileGroup))
        {
            var typed = (FullTextCatalogAndFileGroup)node;
            ParserJson.WriteAttribute(writer, "FileGroupIsFirst", "boolean", typed.FileGroupIsFirst);
        }
        if (nodeType == typeof(FullTextIndexColumn))
        {
            var typed = (FullTextIndexColumn)node;
            ParserJson.WriteAttribute(writer, "StatisticalSemantics", "boolean", typed.StatisticalSemantics);
        }
        if (nodeType == typeof(FullTextPredicate))
        {
            var typed = (FullTextPredicate)node;
            ParserJson.WriteAttribute(writer, "FullTextFunctionType", "enum", typed.FullTextFunctionType);
        }
        if (nodeType == typeof(FullTextStopListAction))
        {
            var typed = (FullTextStopListAction)node;
            ParserJson.WriteAttribute(writer, "IsAdd", "boolean", typed.IsAdd);
            ParserJson.WriteAttribute(writer, "IsAll", "boolean", typed.IsAll);
        }
        if (nodeType == typeof(FullTextTableReference))
        {
            var typed = (FullTextTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
            ParserJson.WriteAttribute(writer, "FullTextFunctionType", "enum", typed.FullTextFunctionType);
        }
        if (nodeType == typeof(FunctionCall))
        {
            var typed = (FunctionCall)node;
            ParserJson.WriteAttribute(writer, "UniqueRowFilter", "enum", typed.UniqueRowFilter);
            ParserJson.WriteAttribute(writer, "WithArrayWrapper", "boolean", typed.WithArrayWrapper);
        }
        if (nodeType == typeof(FunctionOption))
        {
            var typed = (FunctionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(GeneralSetCommand))
        {
            var typed = (GeneralSetCommand)node;
            ParserJson.WriteAttribute(writer, "CommandType", "enum", typed.CommandType);
        }
        if (nodeType == typeof(GenericConfigurationOption))
        {
            var typed = (GenericConfigurationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(GlobalFunctionTableReference))
        {
            var typed = (GlobalFunctionTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(GlobalVariableExpression))
        {
            var typed = (GlobalVariableExpression)node;
            ParserJson.WriteAttribute(writer, "Name", "string", typed.Name);
        }
        if (nodeType == typeof(GrantStatement))
        {
            var typed = (GrantStatement)node;
            ParserJson.WriteAttribute(writer, "WithGrantOption", "boolean", typed.WithGrantOption);
        }
        if (nodeType == typeof(GrantStatement80))
        {
            var typed = (GrantStatement80)node;
            ParserJson.WriteAttribute(writer, "WithGrantOption", "boolean", typed.WithGrantOption);
        }
        if (nodeType == typeof(GraphConnectionConstraintDefinition))
        {
            var typed = (GraphConnectionConstraintDefinition)node;
            ParserJson.WriteAttribute(writer, "DeleteAction", "enum", typed.DeleteAction);
        }
        if (nodeType == typeof(GraphMatchCompositeExpression))
        {
            var typed = (GraphMatchCompositeExpression)node;
            ParserJson.WriteAttribute(writer, "ArrowOnRight", "boolean", typed.ArrowOnRight);
        }
        if (nodeType == typeof(GraphMatchExpression))
        {
            var typed = (GraphMatchExpression)node;
            ParserJson.WriteAttribute(writer, "ArrowOnRight", "boolean", typed.ArrowOnRight);
        }
        if (nodeType == typeof(GraphMatchNodeExpression))
        {
            var typed = (GraphMatchNodeExpression)node;
            ParserJson.WriteAttribute(writer, "UsesLastNode", "boolean", typed.UsesLastNode);
        }
        if (nodeType == typeof(GraphMatchRecursivePredicate))
        {
            var typed = (GraphMatchRecursivePredicate)node;
            ParserJson.WriteAttribute(writer, "AnchorOnLeft", "boolean", typed.AnchorOnLeft);
            ParserJson.WriteAttribute(writer, "Function", "enum", typed.Function);
        }
        if (nodeType == typeof(GraphRecursiveMatchQuantifier))
        {
            var typed = (GraphRecursiveMatchQuantifier)node;
            ParserJson.WriteAttribute(writer, "IsPlusSign", "boolean", typed.IsPlusSign);
        }
        if (nodeType == typeof(GridParameter))
        {
            var typed = (GridParameter)node;
            ParserJson.WriteAttribute(writer, "Parameter", "enum", typed.Parameter);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(GroupByClause))
        {
            var typed = (GroupByClause)node;
            ParserJson.WriteAttribute(writer, "All", "boolean", typed.All);
            ParserJson.WriteAttribute(writer, "GroupByOption", "enum", typed.GroupByOption);
        }
        if (nodeType == typeof(HadrAvailabilityGroupDatabaseOption))
        {
            var typed = (HadrAvailabilityGroupDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "HadrOption", "enum", typed.HadrOption);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(HadrDatabaseOption))
        {
            var typed = (HadrDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "HadrOption", "enum", typed.HadrOption);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(Identifier))
        {
            var typed = (Identifier)node;
            ParserJson.WriteAttribute(writer, "QuoteType", "enum", typed.QuoteType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(IdentifierAtomicBlockOption))
        {
            var typed = (IdentifierAtomicBlockOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(IdentifierDatabaseOption))
        {
            var typed = (IdentifierDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(IdentifierLiteral))
        {
            var typed = (IdentifierLiteral)node;
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "QuoteType", "enum", typed.QuoteType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(IdentifierOrValueExpression))
        {
            var typed = (IdentifierOrValueExpression)node;
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(IdentifierPrincipalOption))
        {
            var typed = (IdentifierPrincipalOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(IdentifierSnippet))
        {
            var typed = (IdentifierSnippet)node;
            ParserJson.WriteAttribute(writer, "QuoteType", "enum", typed.QuoteType);
            ParserJson.WriteAttribute(writer, "Script", "string", typed.Script);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(IdentityOptions))
        {
            var typed = (IdentityOptions)node;
            ParserJson.WriteAttribute(writer, "IsIdentityNotForReplication", "boolean", typed.IsIdentityNotForReplication);
        }
        if (nodeType == typeof(IdentityValueKeyOption))
        {
            var typed = (IdentityValueKeyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(IgnoreDupKeyIndexOption))
        {
            var typed = (IgnoreDupKeyIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
            ParserJson.WriteAttribute(writer, "SuppressMessagesOption", "boolean", typed.SuppressMessagesOption);
        }
        if (nodeType == typeof(InPredicate))
        {
            var typed = (InPredicate)node;
            ParserJson.WriteAttribute(writer, "NotDefined", "boolean", typed.NotDefined);
        }
        if (nodeType == typeof(IndexDefinition))
        {
            var typed = (IndexDefinition)node;
            ParserJson.WriteAttribute(writer, "Unique", "boolean", typed.Unique);
        }
        if (nodeType == typeof(IndexExpressionOption))
        {
            var typed = (IndexExpressionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(IndexStateOption))
        {
            var typed = (IndexStateOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(IndexTableHint))
        {
            var typed = (IndexTableHint)node;
            ParserJson.WriteAttribute(writer, "HintKind", "enum", typed.HintKind);
        }
        if (nodeType == typeof(IndexType))
        {
            var typed = (IndexType)node;
            ParserJson.WriteAttribute(writer, "IndexTypeKind", "enum", typed.IndexTypeKind);
        }
        if (nodeType == typeof(InlineDerivedTable))
        {
            var typed = (InlineDerivedTable)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(InlineFunctionOption))
        {
            var typed = (InlineFunctionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(InlineResultSetDefinition))
        {
            var typed = (InlineResultSetDefinition)node;
            ParserJson.WriteAttribute(writer, "ResultSetType", "enum", typed.ResultSetType);
        }
        if (nodeType == typeof(InsertBulkColumnDefinition))
        {
            var typed = (InsertBulkColumnDefinition)node;
            ParserJson.WriteAttribute(writer, "NullNotNull", "enum", typed.NullNotNull);
        }
        if (nodeType == typeof(InsertSpecification))
        {
            var typed = (InsertSpecification)node;
            ParserJson.WriteAttribute(writer, "InsertOption", "enum", typed.InsertOption);
        }
        if (nodeType == typeof(IntegerLiteral))
        {
            var typed = (IntegerLiteral)node;
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(InternalOpenRowset))
        {
            var typed = (InternalOpenRowset)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(JsonForClauseOption))
        {
            var typed = (JsonForClauseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(KeySourceKeyOption))
        {
            var typed = (KeySourceKeyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(KillQueryNotificationSubscriptionStatement))
        {
            var typed = (KillQueryNotificationSubscriptionStatement)node;
            ParserJson.WriteAttribute(writer, "All", "boolean", typed.All);
        }
        if (nodeType == typeof(KillStatement))
        {
            var typed = (KillStatement)node;
            ParserJson.WriteAttribute(writer, "WithStatusOnly", "boolean", typed.WithStatusOnly);
        }
        if (nodeType == typeof(LabelStatement))
        {
            var typed = (LabelStatement)node;
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(LedgerOption))
        {
            var typed = (LedgerOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(LedgerTableOption))
        {
            var typed = (LedgerTableOption)node;
            ParserJson.WriteAttribute(writer, "AppendOnly", "enum", typed.AppendOnly);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(LedgerViewOption))
        {
            var typed = (LedgerViewOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LikePredicate))
        {
            var typed = (LikePredicate)node;
            ParserJson.WriteAttribute(writer, "NotDefined", "boolean", typed.NotDefined);
            ParserJson.WriteAttribute(writer, "OdbcEscape", "boolean", typed.OdbcEscape);
        }
        if (nodeType == typeof(ListenerIPEndpointProtocolOption))
        {
            var typed = (ListenerIPEndpointProtocolOption)node;
            ParserJson.WriteAttribute(writer, "IsAll", "boolean", typed.IsAll);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(LiteralAtomicBlockOption))
        {
            var typed = (LiteralAtomicBlockOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LiteralAuditTargetOption))
        {
            var typed = (LiteralAuditTargetOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LiteralAvailabilityGroupOption))
        {
            var typed = (LiteralAvailabilityGroupOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LiteralBulkInsertOption))
        {
            var typed = (LiteralBulkInsertOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LiteralDatabaseOption))
        {
            var typed = (LiteralDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LiteralEndpointProtocolOption))
        {
            var typed = (LiteralEndpointProtocolOption)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(LiteralOpenRowsetCosmosOption))
        {
            var typed = (LiteralOpenRowsetCosmosOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LiteralOptimizerHint))
        {
            var typed = (LiteralOptimizerHint)node;
            ParserJson.WriteAttribute(writer, "HintKind", "enum", typed.HintKind);
        }
        if (nodeType == typeof(LiteralPayloadOption))
        {
            var typed = (LiteralPayloadOption)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(LiteralPrincipalOption))
        {
            var typed = (LiteralPrincipalOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LiteralReplicaOption))
        {
            var typed = (LiteralReplicaOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LiteralSessionOption))
        {
            var typed = (LiteralSessionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Unit", "enum", typed.Unit);
        }
        if (nodeType == typeof(LiteralStatisticsOption))
        {
            var typed = (LiteralStatisticsOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LiteralTableHint))
        {
            var typed = (LiteralTableHint)node;
            ParserJson.WriteAttribute(writer, "HintKind", "enum", typed.HintKind);
        }
        if (nodeType == typeof(LocationOption))
        {
            var typed = (LocationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LockEscalationTableOption))
        {
            var typed = (LockEscalationTableOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(LoginTypePayloadOption))
        {
            var typed = (LoginTypePayloadOption)node;
            ParserJson.WriteAttribute(writer, "IsWindows", "boolean", typed.IsWindows);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(LowPriorityLockWaitAbortAfterWaitOption))
        {
            var typed = (LowPriorityLockWaitAbortAfterWaitOption)node;
            ParserJson.WriteAttribute(writer, "AbortAfterWait", "enum", typed.AbortAfterWait);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(LowPriorityLockWaitMaxDurationOption))
        {
            var typed = (LowPriorityLockWaitMaxDurationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Unit", "enum", typed.Unit);
        }
        if (nodeType == typeof(LowPriorityLockWaitTableSwitchOption))
        {
            var typed = (LowPriorityLockWaitTableSwitchOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(MaxDispatchLatencySessionOption))
        {
            var typed = (MaxDispatchLatencySessionOption)node;
            ParserJson.WriteAttribute(writer, "IsInfinite", "boolean", typed.IsInfinite);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(MaxDopConfigurationOption))
        {
            var typed = (MaxDopConfigurationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Primary", "boolean", typed.Primary);
        }
        if (nodeType == typeof(MaxDurationOption))
        {
            var typed = (MaxDurationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Unit", "enum", typed.Unit);
        }
        if (nodeType == typeof(MaxLiteral))
        {
            var typed = (MaxLiteral)node;
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(MaxRolloverFilesAuditTargetOption))
        {
            var typed = (MaxRolloverFilesAuditTargetOption)node;
            ParserJson.WriteAttribute(writer, "IsUnlimited", "boolean", typed.IsUnlimited);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(MaxSizeAuditTargetOption))
        {
            var typed = (MaxSizeAuditTargetOption)node;
            ParserJson.WriteAttribute(writer, "IsUnlimited", "boolean", typed.IsUnlimited);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Unit", "enum", typed.Unit);
        }
        if (nodeType == typeof(MaxSizeDatabaseOption))
        {
            var typed = (MaxSizeDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Units", "enum", typed.Units);
        }
        if (nodeType == typeof(MaxSizeFileDeclarationOption))
        {
            var typed = (MaxSizeFileDeclarationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Units", "enum", typed.Units);
            ParserJson.WriteAttribute(writer, "Unlimited", "boolean", typed.Unlimited);
        }
        if (nodeType == typeof(MemoryOptimizedTableOption))
        {
            var typed = (MemoryOptimizedTableOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(MemoryPartitionSessionOption))
        {
            var typed = (MemoryPartitionSessionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(MergeActionClause))
        {
            var typed = (MergeActionClause)node;
            ParserJson.WriteAttribute(writer, "Condition", "enum", typed.Condition);
        }
        if (nodeType == typeof(MoneyLiteral))
        {
            var typed = (MoneyLiteral)node;
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(MoveRestoreOption))
        {
            var typed = (MoveRestoreOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(MoveToDropIndexOption))
        {
            var typed = (MoveToDropIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(MultiPartIdentifier))
        {
            var typed = (MultiPartIdentifier)node;
            ParserJson.WriteAttribute(writer, "Count", "integer", typed.Count);
        }
        if (nodeType == typeof(NameFileDeclarationOption))
        {
            var typed = (NameFileDeclarationOption)node;
            ParserJson.WriteAttribute(writer, "IsNewName", "boolean", typed.IsNewName);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(NamedTableReference))
        {
            var typed = (NamedTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(NullLiteral))
        {
            var typed = (NullLiteral)node;
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(NullableConstraintDefinition))
        {
            var typed = (NullableConstraintDefinition)node;
            ParserJson.WriteAttribute(writer, "Nullable", "boolean", typed.Nullable);
        }
        if (nodeType == typeof(NumericLiteral))
        {
            var typed = (NumericLiteral)node;
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(OdbcFunctionCall))
        {
            var typed = (OdbcFunctionCall)node;
            ParserJson.WriteAttribute(writer, "ParametersUsed", "boolean", typed.ParametersUsed);
        }
        if (nodeType == typeof(OdbcLiteral))
        {
            var typed = (OdbcLiteral)node;
            ParserJson.WriteAttribute(writer, "IsNational", "boolean", typed.IsNational);
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "OdbcLiteralType", "enum", typed.OdbcLiteralType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(OffsetClause))
        {
            var typed = (OffsetClause)node;
            ParserJson.WriteAttribute(writer, "WithApproximate", "boolean", typed.WithApproximate);
        }
        if (nodeType == typeof(OnFailureAuditOption))
        {
            var typed = (OnFailureAuditOption)node;
            ParserJson.WriteAttribute(writer, "OnFailureAction", "enum", typed.OnFailureAction);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(OnOffAssemblyOption))
        {
            var typed = (OnOffAssemblyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnOffAtomicBlockOption))
        {
            var typed = (OnOffAtomicBlockOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnOffAuditTargetOption))
        {
            var typed = (OnOffAuditTargetOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(OnOffDatabaseOption))
        {
            var typed = (OnOffDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnOffDialogOption))
        {
            var typed = (OnOffDialogOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnOffFullTextCatalogOption))
        {
            var typed = (OnOffFullTextCatalogOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnOffOptionValue))
        {
            var typed = (OnOffOptionValue)node;
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnOffPrimaryConfigurationOption))
        {
            var typed = (OnOffPrimaryConfigurationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnOffPrincipalOption))
        {
            var typed = (OnOffPrincipalOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnOffRemoteServiceBindingOption))
        {
            var typed = (OnOffRemoteServiceBindingOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnOffSessionOption))
        {
            var typed = (OnOffSessionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnOffStatisticsOption))
        {
            var typed = (OnOffStatisticsOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OnlineIndexOption))
        {
            var typed = (OnlineIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OpenJsonTableReference))
        {
            var typed = (OpenJsonTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(OpenQueryTableReference))
        {
            var typed = (OpenQueryTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(OpenRowsetCosmos))
        {
            var typed = (OpenRowsetCosmos)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(OpenRowsetCosmosOption))
        {
            var typed = (OpenRowsetCosmosOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(OpenRowsetTableReference))
        {
            var typed = (OpenRowsetTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(OpenXmlTableReference))
        {
            var typed = (OpenXmlTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(OperatorAuditOption))
        {
            var typed = (OperatorAuditOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(OptimizeForOptimizerHint))
        {
            var typed = (OptimizeForOptimizerHint)node;
            ParserJson.WriteAttribute(writer, "HintKind", "enum", typed.HintKind);
            ParserJson.WriteAttribute(writer, "IsForUnknown", "boolean", typed.IsForUnknown);
        }
        if (nodeType == typeof(OptimizedLockingDatabaseOption))
        {
            var typed = (OptimizedLockingDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(OptimizerHint))
        {
            var typed = (OptimizerHint)node;
            ParserJson.WriteAttribute(writer, "HintKind", "enum", typed.HintKind);
        }
        if (nodeType == typeof(OrderBulkInsertOption))
        {
            var typed = (OrderBulkInsertOption)node;
            ParserJson.WriteAttribute(writer, "IsUnique", "boolean", typed.IsUnique);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(OrderIndexOption))
        {
            var typed = (OrderIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(PageVerifyDatabaseOption))
        {
            var typed = (PageVerifyDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(ParameterizationDatabaseOption))
        {
            var typed = (ParameterizationDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "IsSimple", "boolean", typed.IsSimple);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ParameterlessCall))
        {
            var typed = (ParameterlessCall)node;
            ParserJson.WriteAttribute(writer, "ParameterlessCallType", "enum", typed.ParameterlessCallType);
        }
        if (nodeType == typeof(PartitionSpecifier))
        {
            var typed = (PartitionSpecifier)node;
            ParserJson.WriteAttribute(writer, "All", "boolean", typed.All);
        }
        if (nodeType == typeof(PartnerDatabaseOption))
        {
            var typed = (PartnerDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "PartnerOption", "enum", typed.PartnerOption);
        }
        if (nodeType == typeof(PasswordAlterPrincipalOption))
        {
            var typed = (PasswordAlterPrincipalOption)node;
            ParserJson.WriteAttribute(writer, "Hashed", "boolean", typed.Hashed);
            ParserJson.WriteAttribute(writer, "MustChange", "boolean", typed.MustChange);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Unlock", "boolean", typed.Unlock);
        }
        if (nodeType == typeof(PasswordCreateLoginSource))
        {
            var typed = (PasswordCreateLoginSource)node;
            ParserJson.WriteAttribute(writer, "Hashed", "boolean", typed.Hashed);
            ParserJson.WriteAttribute(writer, "MustChange", "boolean", typed.MustChange);
        }
        if (nodeType == typeof(PermissionSetAssemblyOption))
        {
            var typed = (PermissionSetAssemblyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "PermissionSetOption", "enum", typed.PermissionSetOption);
        }
        if (nodeType == typeof(PivotedTableReference))
        {
            var typed = (PivotedTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(PortsEndpointProtocolOption))
        {
            var typed = (PortsEndpointProtocolOption)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
            ParserJson.WriteAttribute(writer, "PortTypes", "enum", typed.PortTypes);
        }
        if (nodeType == typeof(PredicateSetStatement))
        {
            var typed = (PredicateSetStatement)node;
            ParserJson.WriteAttribute(writer, "IsOn", "boolean", typed.IsOn);
            ParserJson.WriteAttribute(writer, "Options", "enum", typed.Options);
        }
        if (nodeType == typeof(PredictTableReference))
        {
            var typed = (PredictTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(PrimaryRoleReplicaOption))
        {
            var typed = (PrimaryRoleReplicaOption)node;
            ParserJson.WriteAttribute(writer, "AllowConnections", "enum", typed.AllowConnections);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(PrincipalOption))
        {
            var typed = (PrincipalOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(Privilege80))
        {
            var typed = (Privilege80)node;
            ParserJson.WriteAttribute(writer, "PrivilegeType80", "enum", typed.PrivilegeType80);
        }
        if (nodeType == typeof(ProcedureOption))
        {
            var typed = (ProcedureOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ProcedureParameter))
        {
            var typed = (ProcedureParameter)node;
            ParserJson.WriteAttribute(writer, "IsVarying", "boolean", typed.IsVarying);
            ParserJson.WriteAttribute(writer, "Modifier", "enum", typed.Modifier);
        }
        if (nodeType == typeof(ProviderKeyNameKeyOption))
        {
            var typed = (ProviderKeyNameKeyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(QualifiedJoin))
        {
            var typed = (QualifiedJoin)node;
            ParserJson.WriteAttribute(writer, "JoinHint", "enum", typed.JoinHint);
            ParserJson.WriteAttribute(writer, "QualifiedJoinType", "enum", typed.QualifiedJoinType);
        }
        if (nodeType == typeof(QueryDerivedTable))
        {
            var typed = (QueryDerivedTable)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(QuerySpecification))
        {
            var typed = (QuerySpecification)node;
            ParserJson.WriteAttribute(writer, "UniqueRowFilter", "enum", typed.UniqueRowFilter);
        }
        if (nodeType == typeof(QueryStoreCapturePolicyOption))
        {
            var typed = (QueryStoreCapturePolicyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(QueryStoreDataFlushIntervalOption))
        {
            var typed = (QueryStoreDataFlushIntervalOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(QueryStoreDatabaseOption))
        {
            var typed = (QueryStoreDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "Clear", "boolean", typed.Clear);
            ParserJson.WriteAttribute(writer, "ClearAll", "boolean", typed.ClearAll);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(QueryStoreDesiredStateOption))
        {
            var typed = (QueryStoreDesiredStateOption)node;
            ParserJson.WriteAttribute(writer, "OperationModeSpecified", "boolean", typed.OperationModeSpecified);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(QueryStoreIntervalLengthOption))
        {
            var typed = (QueryStoreIntervalLengthOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(QueryStoreMaxPlansPerQueryOption))
        {
            var typed = (QueryStoreMaxPlansPerQueryOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(QueryStoreMaxStorageSizeOption))
        {
            var typed = (QueryStoreMaxStorageSizeOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(QueryStoreSizeCleanupPolicyOption))
        {
            var typed = (QueryStoreSizeCleanupPolicyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(QueryStoreTimeCleanupPolicyOption))
        {
            var typed = (QueryStoreTimeCleanupPolicyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(QueryStoreWaitStatsCaptureOption))
        {
            var typed = (QueryStoreWaitStatsCaptureOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(QueueDelayAuditOption))
        {
            var typed = (QueueDelayAuditOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(QueueExecuteAsOption))
        {
            var typed = (QueueExecuteAsOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(QueueOption))
        {
            var typed = (QueueOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(QueueProcedureOption))
        {
            var typed = (QueueProcedureOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(QueueStateOption))
        {
            var typed = (QueueStateOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(QueueValueOption))
        {
            var typed = (QueueValueOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(RaiseErrorStatement))
        {
            var typed = (RaiseErrorStatement)node;
            ParserJson.WriteAttribute(writer, "RaiseErrorOptions", "enum", typed.RaiseErrorOptions);
        }
        if (nodeType == typeof(ReadTextStatement))
        {
            var typed = (ReadTextStatement)node;
            ParserJson.WriteAttribute(writer, "HoldLock", "boolean", typed.HoldLock);
        }
        if (nodeType == typeof(RealLiteral))
        {
            var typed = (RealLiteral)node;
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(ReceiveStatement))
        {
            var typed = (ReceiveStatement)node;
            ParserJson.WriteAttribute(writer, "IsConversationGroupIdWhere", "boolean", typed.IsConversationGroupIdWhere);
        }
        if (nodeType == typeof(ReconfigureStatement))
        {
            var typed = (ReconfigureStatement)node;
            ParserJson.WriteAttribute(writer, "WithOverride", "boolean", typed.WithOverride);
        }
        if (nodeType == typeof(RecoveryDatabaseOption))
        {
            var typed = (RecoveryDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(RemoteDataArchiveAlterTableOption))
        {
            var typed = (RemoteDataArchiveAlterTableOption)node;
            ParserJson.WriteAttribute(writer, "IsFilterPredicateSpecified", "boolean", typed.IsFilterPredicateSpecified);
            ParserJson.WriteAttribute(writer, "IsMigrationStateSpecified", "boolean", typed.IsMigrationStateSpecified);
            ParserJson.WriteAttribute(writer, "MigrationState", "enum", typed.MigrationState);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "RdaTableOption", "enum", typed.RdaTableOption);
        }
        if (nodeType == typeof(RemoteDataArchiveDatabaseOption))
        {
            var typed = (RemoteDataArchiveDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(RemoteDataArchiveDbCredentialSetting))
        {
            var typed = (RemoteDataArchiveDbCredentialSetting)node;
            ParserJson.WriteAttribute(writer, "SettingKind", "enum", typed.SettingKind);
        }
        if (nodeType == typeof(RemoteDataArchiveDbFederatedServiceAccountSetting))
        {
            var typed = (RemoteDataArchiveDbFederatedServiceAccountSetting)node;
            ParserJson.WriteAttribute(writer, "IsOn", "boolean", typed.IsOn);
            ParserJson.WriteAttribute(writer, "SettingKind", "enum", typed.SettingKind);
        }
        if (nodeType == typeof(RemoteDataArchiveDbServerSetting))
        {
            var typed = (RemoteDataArchiveDbServerSetting)node;
            ParserJson.WriteAttribute(writer, "SettingKind", "enum", typed.SettingKind);
        }
        if (nodeType == typeof(RemoteDataArchiveTableOption))
        {
            var typed = (RemoteDataArchiveTableOption)node;
            ParserJson.WriteAttribute(writer, "MigrationState", "enum", typed.MigrationState);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "RdaTableOption", "enum", typed.RdaTableOption);
        }
        if (nodeType == typeof(RenameEntityStatement))
        {
            var typed = (RenameEntityStatement)node;
            ParserJson.WriteAttribute(writer, "RenameEntityType", "enum", typed.RenameEntityType);
            ParserJson.WriteAttribute(writer, "SeparatorType", "enum", typed.SeparatorType);
        }
        if (nodeType == typeof(ResampleStatisticsOption))
        {
            var typed = (ResampleStatisticsOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ResourcePoolAffinitySpecification))
        {
            var typed = (ResourcePoolAffinitySpecification)node;
            ParserJson.WriteAttribute(writer, "AffinityType", "enum", typed.AffinityType);
            ParserJson.WriteAttribute(writer, "IsAuto", "boolean", typed.IsAuto);
        }
        if (nodeType == typeof(ResourcePoolParameter))
        {
            var typed = (ResourcePoolParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterType", "enum", typed.ParameterType);
        }
        if (nodeType == typeof(RestoreMasterKeyStatement))
        {
            var typed = (RestoreMasterKeyStatement)node;
            ParserJson.WriteAttribute(writer, "IsForce", "boolean", typed.IsForce);
        }
        if (nodeType == typeof(RestoreOption))
        {
            var typed = (RestoreOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(RestoreServiceMasterKeyStatement))
        {
            var typed = (RestoreServiceMasterKeyStatement)node;
            ParserJson.WriteAttribute(writer, "IsForce", "boolean", typed.IsForce);
        }
        if (nodeType == typeof(RestoreStatement))
        {
            var typed = (RestoreStatement)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(ResultSetDefinition))
        {
            var typed = (ResultSetDefinition)node;
            ParserJson.WriteAttribute(writer, "ResultSetType", "enum", typed.ResultSetType);
        }
        if (nodeType == typeof(ResultSetsExecuteOption))
        {
            var typed = (ResultSetsExecuteOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "ResultSetsOptionKind", "enum", typed.ResultSetsOptionKind);
        }
        if (nodeType == typeof(RetentionDaysAuditTargetOption))
        {
            var typed = (RetentionDaysAuditTargetOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(RetentionPeriodDefinition))
        {
            var typed = (RetentionPeriodDefinition)node;
            ParserJson.WriteAttribute(writer, "IsInfinity", "boolean", typed.IsInfinity);
            ParserJson.WriteAttribute(writer, "Units", "enum", typed.Units);
        }
        if (nodeType == typeof(RevokeStatement))
        {
            var typed = (RevokeStatement)node;
            ParserJson.WriteAttribute(writer, "CascadeOption", "boolean", typed.CascadeOption);
            ParserJson.WriteAttribute(writer, "GrantOptionFor", "boolean", typed.GrantOptionFor);
        }
        if (nodeType == typeof(RevokeStatement80))
        {
            var typed = (RevokeStatement80)node;
            ParserJson.WriteAttribute(writer, "CascadeOption", "boolean", typed.CascadeOption);
            ParserJson.WriteAttribute(writer, "GrantOptionFor", "boolean", typed.GrantOptionFor);
        }
        if (nodeType == typeof(RolePayloadOption))
        {
            var typed = (RolePayloadOption)node;
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
            ParserJson.WriteAttribute(writer, "Role", "enum", typed.Role);
        }
        if (nodeType == typeof(RouteOption))
        {
            var typed = (RouteOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ScalarExpressionDialogOption))
        {
            var typed = (ScalarExpressionDialogOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ScalarExpressionRestoreOption))
        {
            var typed = (ScalarExpressionRestoreOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ScalarExpressionSequenceOption))
        {
            var typed = (ScalarExpressionSequenceOption)node;
            ParserJson.WriteAttribute(writer, "NoValue", "boolean", typed.NoValue);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ScalarExpressionSnippet))
        {
            var typed = (ScalarExpressionSnippet)node;
            ParserJson.WriteAttribute(writer, "Script", "string", typed.Script);
        }
        if (nodeType == typeof(SchemaDeclarationItemOpenjson))
        {
            var typed = (SchemaDeclarationItemOpenjson)node;
            ParserJson.WriteAttribute(writer, "AsJson", "boolean", typed.AsJson);
        }
        if (nodeType == typeof(SchemaObjectFunctionTableReference))
        {
            var typed = (SchemaObjectFunctionTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(SchemaObjectName))
        {
            var typed = (SchemaObjectName)node;
            ParserJson.WriteAttribute(writer, "Count", "integer", typed.Count);
        }
        if (nodeType == typeof(SchemaObjectNameSnippet))
        {
            var typed = (SchemaObjectNameSnippet)node;
            ParserJson.WriteAttribute(writer, "Count", "integer", typed.Count);
            ParserJson.WriteAttribute(writer, "Script", "string", typed.Script);
        }
        if (nodeType == typeof(SchemaObjectResultSetDefinition))
        {
            var typed = (SchemaObjectResultSetDefinition)node;
            ParserJson.WriteAttribute(writer, "ResultSetType", "enum", typed.ResultSetType);
        }
        if (nodeType == typeof(SchemaPayloadOption))
        {
            var typed = (SchemaPayloadOption)node;
            ParserJson.WriteAttribute(writer, "IsStandard", "boolean", typed.IsStandard);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(SearchPropertyListFullTextIndexOption))
        {
            var typed = (SearchPropertyListFullTextIndexOption)node;
            ParserJson.WriteAttribute(writer, "IsOff", "boolean", typed.IsOff);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(SecondaryRoleReplicaOption))
        {
            var typed = (SecondaryRoleReplicaOption)node;
            ParserJson.WriteAttribute(writer, "AllowConnections", "enum", typed.AllowConnections);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(SecurityPolicyOption))
        {
            var typed = (SecurityPolicyOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(SecurityPredicateAction))
        {
            var typed = (SecurityPredicateAction)node;
            ParserJson.WriteAttribute(writer, "ActionType", "enum", typed.ActionType);
            ParserJson.WriteAttribute(writer, "SecurityPredicateOperation", "enum", typed.SecurityPredicateOperation);
            ParserJson.WriteAttribute(writer, "SecurityPredicateType", "enum", typed.SecurityPredicateType);
        }
        if (nodeType == typeof(SecurityPrincipal))
        {
            var typed = (SecurityPrincipal)node;
            ParserJson.WriteAttribute(writer, "PrincipalType", "enum", typed.PrincipalType);
        }
        if (nodeType == typeof(SecurityTargetObject))
        {
            var typed = (SecurityTargetObject)node;
            ParserJson.WriteAttribute(writer, "ObjectKind", "enum", typed.ObjectKind);
        }
        if (nodeType == typeof(SecurityUserClause80))
        {
            var typed = (SecurityUserClause80)node;
            ParserJson.WriteAttribute(writer, "UserType80", "enum", typed.UserType80);
        }
        if (nodeType == typeof(SelectSetVariable))
        {
            var typed = (SelectSetVariable)node;
            ParserJson.WriteAttribute(writer, "AssignmentKind", "enum", typed.AssignmentKind);
        }
        if (nodeType == typeof(SelectStatementSnippet))
        {
            var typed = (SelectStatementSnippet)node;
            ParserJson.WriteAttribute(writer, "Script", "string", typed.Script);
        }
        if (nodeType == typeof(SelectiveXmlIndexPromotedPath))
        {
            var typed = (SelectiveXmlIndexPromotedPath)node;
            ParserJson.WriteAttribute(writer, "IsSingleton", "boolean", typed.IsSingleton);
        }
        if (nodeType == typeof(SemanticIndexChunkOption))
        {
            var typed = (SemanticIndexChunkOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(SemanticIndexColumn))
        {
            var typed = (SemanticIndexColumn)node;
            ParserJson.WriteAttribute(writer, "SearchType", "enum", typed.SearchType);
        }
        if (nodeType == typeof(SemanticTableReference))
        {
            var typed = (SemanticTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
            ParserJson.WriteAttribute(writer, "SemanticFunctionType", "enum", typed.SemanticFunctionType);
        }
        if (nodeType == typeof(SensitivityClassificationOption))
        {
            var typed = (SensitivityClassificationOption)node;
            ParserJson.WriteAttribute(writer, "Type", "enum", typed.Type);
        }
        if (nodeType == typeof(SequenceOption))
        {
            var typed = (SequenceOption)node;
            ParserJson.WriteAttribute(writer, "NoValue", "boolean", typed.NoValue);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ServiceContract))
        {
            var typed = (ServiceContract)node;
            ParserJson.WriteAttribute(writer, "Action", "enum", typed.Action);
        }
        if (nodeType == typeof(SessionTimeoutPayloadOption))
        {
            var typed = (SessionTimeoutPayloadOption)node;
            ParserJson.WriteAttribute(writer, "IsNever", "boolean", typed.IsNever);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(SetFipsFlaggerCommand))
        {
            var typed = (SetFipsFlaggerCommand)node;
            ParserJson.WriteAttribute(writer, "ComplianceLevel", "enum", typed.ComplianceLevel);
        }
        if (nodeType == typeof(SetIdentityInsertStatement))
        {
            var typed = (SetIdentityInsertStatement)node;
            ParserJson.WriteAttribute(writer, "IsOn", "boolean", typed.IsOn);
        }
        if (nodeType == typeof(SetOffsetsStatement))
        {
            var typed = (SetOffsetsStatement)node;
            ParserJson.WriteAttribute(writer, "IsOn", "boolean", typed.IsOn);
            ParserJson.WriteAttribute(writer, "Options", "enum", typed.Options);
        }
        if (nodeType == typeof(SetSearchPropertyListAlterFullTextIndexAction))
        {
            var typed = (SetSearchPropertyListAlterFullTextIndexAction)node;
            ParserJson.WriteAttribute(writer, "WithNoPopulation", "boolean", typed.WithNoPopulation);
        }
        if (nodeType == typeof(SetStatisticsStatement))
        {
            var typed = (SetStatisticsStatement)node;
            ParserJson.WriteAttribute(writer, "IsOn", "boolean", typed.IsOn);
            ParserJson.WriteAttribute(writer, "Options", "enum", typed.Options);
        }
        if (nodeType == typeof(SetStopListAlterFullTextIndexAction))
        {
            var typed = (SetStopListAlterFullTextIndexAction)node;
            ParserJson.WriteAttribute(writer, "WithNoPopulation", "boolean", typed.WithNoPopulation);
        }
        if (nodeType == typeof(SetTransactionIsolationLevelStatement))
        {
            var typed = (SetTransactionIsolationLevelStatement)node;
            ParserJson.WriteAttribute(writer, "Level", "enum", typed.Level);
        }
        if (nodeType == typeof(SetUserStatement))
        {
            var typed = (SetUserStatement)node;
            ParserJson.WriteAttribute(writer, "WithNoReset", "boolean", typed.WithNoReset);
        }
        if (nodeType == typeof(SetVariableStatement))
        {
            var typed = (SetVariableStatement)node;
            ParserJson.WriteAttribute(writer, "AssignmentKind", "enum", typed.AssignmentKind);
            ParserJson.WriteAttribute(writer, "FunctionCallExists", "boolean", typed.FunctionCallExists);
            ParserJson.WriteAttribute(writer, "SeparatorType", "enum", typed.SeparatorType);
        }
        if (nodeType == typeof(ShutdownStatement))
        {
            var typed = (ShutdownStatement)node;
            ParserJson.WriteAttribute(writer, "WithNoWait", "boolean", typed.WithNoWait);
        }
        if (nodeType == typeof(SimpleAlterFullTextIndexAction))
        {
            var typed = (SimpleAlterFullTextIndexAction)node;
            ParserJson.WriteAttribute(writer, "ActionKind", "enum", typed.ActionKind);
        }
        if (nodeType == typeof(SizeFileDeclarationOption))
        {
            var typed = (SizeFileDeclarationOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Units", "enum", typed.Units);
        }
        if (nodeType == typeof(SoapMethod))
        {
            var typed = (SoapMethod)node;
            ParserJson.WriteAttribute(writer, "Action", "enum", typed.Action);
            ParserJson.WriteAttribute(writer, "Format", "enum", typed.Format);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
            ParserJson.WriteAttribute(writer, "Schema", "enum", typed.Schema);
        }
        if (nodeType == typeof(SqlCommandIdentifier))
        {
            var typed = (SqlCommandIdentifier)node;
            ParserJson.WriteAttribute(writer, "QuoteType", "enum", typed.QuoteType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(SqlDataTypeReference))
        {
            var typed = (SqlDataTypeReference)node;
            ParserJson.WriteAttribute(writer, "SqlDataTypeOption", "enum", typed.SqlDataTypeOption);
        }
        if (nodeType == typeof(StateAuditOption))
        {
            var typed = (StateAuditOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Value", "enum", typed.Value);
        }
        if (nodeType == typeof(StatementListSnippet))
        {
            var typed = (StatementListSnippet)node;
            ParserJson.WriteAttribute(writer, "Script", "string", typed.Script);
        }
        if (nodeType == typeof(StatisticsOption))
        {
            var typed = (StatisticsOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(StopListFullTextIndexOption))
        {
            var typed = (StopListFullTextIndexOption)node;
            ParserJson.WriteAttribute(writer, "IsOff", "boolean", typed.IsOff);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(StopRestoreOption))
        {
            var typed = (StopRestoreOption)node;
            ParserJson.WriteAttribute(writer, "IsStopAt", "boolean", typed.IsStopAt);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(StringLiteral))
        {
            var typed = (StringLiteral)node;
            ParserJson.WriteAttribute(writer, "IsLargeObject", "boolean", typed.IsLargeObject);
            ParserJson.WriteAttribute(writer, "IsNational", "boolean", typed.IsNational);
            ParserJson.WriteAttribute(writer, "LiteralType", "enum", typed.LiteralType);
            ParserJson.WriteAttribute(writer, "Value", "string", typed.Value);
        }
        if (nodeType == typeof(SubqueryComparisonPredicate))
        {
            var typed = (SubqueryComparisonPredicate)node;
            ParserJson.WriteAttribute(writer, "ComparisonType", "enum", typed.ComparisonType);
            ParserJson.WriteAttribute(writer, "SubqueryComparisonPredicateType", "enum", typed.SubqueryComparisonPredicateType);
        }
        if (nodeType == typeof(SystemVersioningTableOption))
        {
            var typed = (SystemVersioningTableOption)node;
            ParserJson.WriteAttribute(writer, "ConsistencyCheckEnabled", "enum", typed.ConsistencyCheckEnabled);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "OptionState", "enum", typed.OptionState);
        }
        if (nodeType == typeof(TSqlFragmentSnippet))
        {
            var typed = (TSqlFragmentSnippet)node;
            ParserJson.WriteAttribute(writer, "Script", "string", typed.Script);
        }
        if (nodeType == typeof(TSqlStatementSnippet))
        {
            var typed = (TSqlStatementSnippet)node;
            ParserJson.WriteAttribute(writer, "Script", "string", typed.Script);
        }
        if (nodeType == typeof(TableClusteredIndexType))
        {
            var typed = (TableClusteredIndexType)node;
            ParserJson.WriteAttribute(writer, "ColumnStore", "boolean", typed.ColumnStore);
        }
        if (nodeType == typeof(TableDataCompressionOption))
        {
            var typed = (TableDataCompressionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(TableDistributionOption))
        {
            var typed = (TableDistributionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(TableHint))
        {
            var typed = (TableHint)node;
            ParserJson.WriteAttribute(writer, "HintKind", "enum", typed.HintKind);
        }
        if (nodeType == typeof(TableHintsOptimizerHint))
        {
            var typed = (TableHintsOptimizerHint)node;
            ParserJson.WriteAttribute(writer, "HintKind", "enum", typed.HintKind);
        }
        if (nodeType == typeof(TableIndexOption))
        {
            var typed = (TableIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(TablePartitionOption))
        {
            var typed = (TablePartitionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(TablePartitionOptionSpecifications))
        {
            var typed = (TablePartitionOptionSpecifications)node;
            ParserJson.WriteAttribute(writer, "Range", "enum", typed.Range);
        }
        if (nodeType == typeof(TableSampleClause))
        {
            var typed = (TableSampleClause)node;
            ParserJson.WriteAttribute(writer, "System", "boolean", typed.System);
            ParserJson.WriteAttribute(writer, "TableSampleClauseOption", "enum", typed.TableSampleClauseOption);
        }
        if (nodeType == typeof(TableXmlCompressionOption))
        {
            var typed = (TableXmlCompressionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(TargetRecoveryTimeDatabaseOption))
        {
            var typed = (TargetRecoveryTimeDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "Unit", "enum", typed.Unit);
        }
        if (nodeType == typeof(TemporalClause))
        {
            var typed = (TemporalClause)node;
            ParserJson.WriteAttribute(writer, "TemporalClauseType", "enum", typed.TemporalClauseType);
        }
        if (nodeType == typeof(TopRowFilter))
        {
            var typed = (TopRowFilter)node;
            ParserJson.WriteAttribute(writer, "Percent", "boolean", typed.Percent);
            ParserJson.WriteAttribute(writer, "WithApproximate", "boolean", typed.WithApproximate);
            ParserJson.WriteAttribute(writer, "WithTies", "boolean", typed.WithTies);
        }
        if (nodeType == typeof(TriggerAction))
        {
            var typed = (TriggerAction)node;
            ParserJson.WriteAttribute(writer, "TriggerActionType", "enum", typed.TriggerActionType);
        }
        if (nodeType == typeof(TriggerObject))
        {
            var typed = (TriggerObject)node;
            ParserJson.WriteAttribute(writer, "TriggerScope", "enum", typed.TriggerScope);
        }
        if (nodeType == typeof(TriggerOption))
        {
            var typed = (TriggerOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(TruncateTargetTableSwitchOption))
        {
            var typed = (TruncateTargetTableSwitchOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "TruncateTarget", "boolean", typed.TruncateTarget);
        }
        if (nodeType == typeof(UnaryExpression))
        {
            var typed = (UnaryExpression)node;
            ParserJson.WriteAttribute(writer, "UnaryExpressionType", "enum", typed.UnaryExpressionType);
        }
        if (nodeType == typeof(UniqueConstraintDefinition))
        {
            var typed = (UniqueConstraintDefinition)node;
            ParserJson.WriteAttribute(writer, "Clustered", "boolean", typed.Clustered);
            ParserJson.WriteAttribute(writer, "IsEnforced", "boolean", typed.IsEnforced);
            ParserJson.WriteAttribute(writer, "IsPrimaryKey", "boolean", typed.IsPrimaryKey);
        }
        if (nodeType == typeof(UnpivotedTableReference))
        {
            var typed = (UnpivotedTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(UnqualifiedJoin))
        {
            var typed = (UnqualifiedJoin)node;
            ParserJson.WriteAttribute(writer, "UnqualifiedJoinType", "enum", typed.UnqualifiedJoinType);
        }
        if (nodeType == typeof(UpdateTextStatement))
        {
            var typed = (UpdateTextStatement)node;
            ParserJson.WriteAttribute(writer, "Bulk", "boolean", typed.Bulk);
            ParserJson.WriteAttribute(writer, "WithLog", "boolean", typed.WithLog);
        }
        if (nodeType == typeof(UseFederationStatement))
        {
            var typed = (UseFederationStatement)node;
            ParserJson.WriteAttribute(writer, "Filtering", "boolean", typed.Filtering);
        }
        if (nodeType == typeof(UseHintList))
        {
            var typed = (UseHintList)node;
            ParserJson.WriteAttribute(writer, "HintKind", "enum", typed.HintKind);
        }
        if (nodeType == typeof(UserLoginOption))
        {
            var typed = (UserLoginOption)node;
            ParserJson.WriteAttribute(writer, "UserLoginOptionType", "enum", typed.UserLoginOptionType);
        }
        if (nodeType == typeof(UserRemoteServiceBindingOption))
        {
            var typed = (UserRemoteServiceBindingOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ValuesInsertSource))
        {
            var typed = (ValuesInsertSource)node;
            ParserJson.WriteAttribute(writer, "IsDefaultValues", "boolean", typed.IsDefaultValues);
        }
        if (nodeType == typeof(VariableMethodCallTableReference))
        {
            var typed = (VariableMethodCallTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(VariableReference))
        {
            var typed = (VariableReference)node;
            ParserJson.WriteAttribute(writer, "Name", "string", typed.Name);
        }
        if (nodeType == typeof(VariableTableReference))
        {
            var typed = (VariableTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
        }
        if (nodeType == typeof(VariableValuePair))
        {
            var typed = (VariableValuePair)node;
            ParserJson.WriteAttribute(writer, "IsForUnknown", "boolean", typed.IsForUnknown);
        }
        if (nodeType == typeof(VectorMetricIndexOption))
        {
            var typed = (VectorMetricIndexOption)node;
            ParserJson.WriteAttribute(writer, "MetricType", "enum", typed.MetricType);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(VectorSearchTableReference))
        {
            var typed = (VectorSearchTableReference)node;
            ParserJson.WriteAttribute(writer, "ForPath", "boolean", typed.ForPath);
            ParserJson.WriteAttribute(writer, "ForceAnnOnly", "boolean", typed.ForceAnnOnly);
        }
        if (nodeType == typeof(VectorTypeIndexOption))
        {
            var typed = (VectorTypeIndexOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
            ParserJson.WriteAttribute(writer, "VectorType", "enum", typed.VectorType);
        }
        if (nodeType == typeof(ViewDistributionOption))
        {
            var typed = (ViewDistributionOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ViewForAppendOption))
        {
            var typed = (ViewForAppendOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(ViewOption))
        {
            var typed = (ViewOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(WaitAtLowPriorityOption))
        {
            var typed = (WaitAtLowPriorityOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(WaitForStatement))
        {
            var typed = (WaitForStatement)node;
            ParserJson.WriteAttribute(writer, "WaitForOption", "enum", typed.WaitForOption);
        }
        if (nodeType == typeof(WindowDelimiter))
        {
            var typed = (WindowDelimiter)node;
            ParserJson.WriteAttribute(writer, "WindowDelimiterType", "enum", typed.WindowDelimiterType);
        }
        if (nodeType == typeof(WindowFrameClause))
        {
            var typed = (WindowFrameClause)node;
            ParserJson.WriteAttribute(writer, "WindowFrameType", "enum", typed.WindowFrameType);
        }
        if (nodeType == typeof(WithinGroupClause))
        {
            var typed = (WithinGroupClause)node;
            ParserJson.WriteAttribute(writer, "HasGraphPath", "boolean", typed.HasGraphPath);
        }
        if (nodeType == typeof(WitnessDatabaseOption))
        {
            var typed = (WitnessDatabaseOption)node;
            ParserJson.WriteAttribute(writer, "IsOff", "boolean", typed.IsOff);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(WorkloadGroupImportanceParameter))
        {
            var typed = (WorkloadGroupImportanceParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterType", "enum", typed.ParameterType);
            ParserJson.WriteAttribute(writer, "ParameterValue", "enum", typed.ParameterValue);
        }
        if (nodeType == typeof(WorkloadGroupResourceParameter))
        {
            var typed = (WorkloadGroupResourceParameter)node;
            ParserJson.WriteAttribute(writer, "ParameterType", "enum", typed.ParameterType);
        }
        if (nodeType == typeof(WriteTextStatement))
        {
            var typed = (WriteTextStatement)node;
            ParserJson.WriteAttribute(writer, "Bulk", "boolean", typed.Bulk);
            ParserJson.WriteAttribute(writer, "WithLog", "boolean", typed.WithLog);
        }
        if (nodeType == typeof(WsdlPayloadOption))
        {
            var typed = (WsdlPayloadOption)node;
            ParserJson.WriteAttribute(writer, "IsNone", "boolean", typed.IsNone);
            ParserJson.WriteAttribute(writer, "Kind", "enum", typed.Kind);
        }
        if (nodeType == typeof(XmlCompressionOption))
        {
            var typed = (XmlCompressionOption)node;
            ParserJson.WriteAttribute(writer, "IsCompressed", "enum", typed.IsCompressed);
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        if (nodeType == typeof(XmlDataTypeReference))
        {
            var typed = (XmlDataTypeReference)node;
            ParserJson.WriteAttribute(writer, "XmlDataTypeOption", "enum", typed.XmlDataTypeOption);
        }
        if (nodeType == typeof(XmlForClauseOption))
        {
            var typed = (XmlForClauseOption)node;
            ParserJson.WriteAttribute(writer, "OptionKind", "enum", typed.OptionKind);
        }
        writer.WriteEndArray();
    }
}
