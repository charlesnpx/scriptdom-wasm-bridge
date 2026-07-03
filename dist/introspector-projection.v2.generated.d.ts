export declare const INTROSPECTOR_PROJECTION_ABI: {
    readonly allowlistSha256: "03647b12fe1f822f63f06687ac05e9f8a63b65a5837c6af6d5dee4e5177ec9f7";
    readonly identifierRedactionProfile: "v1-conservative";
    readonly limits: {
        readonly nodes: 100000;
        readonly parseErrors: 1000;
        readonly pathSegments: 250000;
        readonly privateOptionsJsonUtf16CodeUnits: 80;
        readonly projectedOutputUtf16CodeUnits: 4194304;
        readonly serializedEnvelopeUtf8Bytes: 16777216;
        readonly sqlUtf16CodeUnits: 2097152;
        readonly tokens: 250000;
        readonly traversalDepth: 1000;
        readonly traversedFragments: 250000;
    };
    readonly manifestSha256: "6f3f6c8b2d1b96825959efbbc99a5939de11a2e60687d899703358310d104d0a";
    readonly parser: "TSql160Parser";
    readonly projectionVersion: 2;
    readonly resultSchemaSha256: "759cbfa7cc1dcf8a47ea3985bd962b790c23018692519c6daa621db49f64cecc";
};
export declare const TSQL_STRUCTURAL_NODE_KINDS: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateChunksTableReference", "AIGenerateEmbeddingsFunctionCall", "AIGenerateFixedChunksTableReference", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AcceleratedDatabaseRecoveryDatabaseOption", "AdHocDataSource", "AdHocTableReference", "AddAlterFullTextIndexAction", "AddFileSpec", "AddMemberAlterRoleAction", "AddSearchPropertyListAction", "AddSensitivityClassificationStatement", "AddSignatureStatement", "AlgorithmKeyOption", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupAction", "AlterAvailabilityGroupFailoverAction", "AlterAvailabilityGroupFailoverOption", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnAlterFullTextIndexAction", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterDatabaseTermination", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationBufferPoolExtensionContainerOption", "AlterServerConfigurationBufferPoolExtensionOption", "AlterServerConfigurationBufferPoolExtensionSizeOption", "AlterServerConfigurationDiagnosticsLogMaxSizeOption", "AlterServerConfigurationDiagnosticsLogOption", "AlterServerConfigurationExternalAuthenticationContainerOption", "AlterServerConfigurationExternalAuthenticationOption", "AlterServerConfigurationFailoverClusterPropertyOption", "AlterServerConfigurationHadrClusterOption", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationSoftNumaOption", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "ApplicationRoleOption", "AssemblyEncryptionSource", "AssemblyName", "AssemblyOption", "AssignmentSetClause", "AsymmetricKeyCreateLoginSource", "AtTimeZoneCall", "AuditActionGroupReference", "AuditActionSpecification", "AuditGuidAuditOption", "AuditSpecificationPart", "AuditTarget", "AuthenticationEndpointProtocolOption", "AuthenticationPayloadOption", "AutoCleanupChangeTrackingOptionDetail", "AutoCreateStatisticsDatabaseOption", "AutomaticTuningCreateIndexOption", "AutomaticTuningDatabaseOption", "AutomaticTuningDropIndexOption", "AutomaticTuningForceLastGoodPlanOption", "AutomaticTuningMaintainIndexOption", "AutomaticTuningOption", "AvailabilityModeReplicaOption", "AvailabilityReplica", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupEncryptionOption", "BackupMasterKeyStatement", "BackupOption", "BackupRestoreFileInfo", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BackwardsCompatibleDropIndexClause", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BinaryExpression", "BinaryLiteral", "BinaryQueryExpression", "BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "BoundingBoxParameter", "BoundingBoxSpatialIndexOption", "BreakStatement", "BrokerPriorityParameter", "BrowseForClause", "BuiltInFunctionTableReference", "BulkInsertOption", "BulkInsertStatement", "BulkOpenRowset", "CastCall", "CatalogCollationOption", "CellsPerObjectSpatialIndexOption", "CertificateCreateLoginSource", "CertificateOption", "ChangeRetentionChangeTrackingOptionDetail", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "ChangeTrackingDatabaseOption", "ChangeTrackingFullTextIndexOption", "CharacterSetPayloadOption", "CheckConstraintDefinition", "CheckpointStatement", "ChildObjectName", "ClassifierEndTimeOption", "ClassifierImportanceOption", "ClassifierMemberNameOption", "ClassifierStartTimeOption", "ClassifierWlmContextOption", "ClassifierWlmLabelOption", "ClassifierWorkloadGroupOption", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "ClusterByTableOption", "CoalesceExpression", "ColumnDefinition", "ColumnDefinitionBase", "ColumnEncryptionAlgorithmNameParameter", "ColumnEncryptionAlgorithmParameter", "ColumnEncryptionDefinition", "ColumnEncryptionKeyNameParameter", "ColumnEncryptionKeyValue", "ColumnEncryptionTypeParameter", "ColumnMasterKeyEnclaveComputationsParameter", "ColumnMasterKeyNameParameter", "ColumnMasterKeyPathParameter", "ColumnMasterKeyStoreProviderNameParameter", "ColumnReferenceExpression", "ColumnStorageOptions", "ColumnWithSortOrder", "CommandSecurityElement80", "CommitTransactionStatement", "CommonTableExpression", "CompositeGroupingSpecification", "CompressionDelayIndexOption", "CompressionEndpointProtocolOption", "CompressionPartitionRange", "ComputeClause", "ComputeFunction", "ContainmentDatabaseOption", "ContinueStatement", "ContractMessage", "ConvertCall", "CopyColumnOption", "CopyCredentialOption", "CopyOption", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamStatement", "CreateExternalStreamingJobStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "CreationDispositionKeyOption", "CryptoMechanism", "CubeGroupingSpecification", "CursorDefaultDatabaseOption", "CursorDefinition", "CursorId", "CursorOption", "DWCompatibilityLevelConfigurationOption", "DataCompressionOption", "DataModificationTableReference", "DataRetentionTableOption", "DataTypeSequenceOption", "DatabaseAuditAction", "DatabaseConfigurationClearOption", "DatabaseConfigurationSetOption", "DatabaseOption", "DbccNamedLiteral", "DbccOption", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableBody", "DeclareTableVariableStatement", "DeclareVariableElement", "DeclareVariableStatement", "DefaultConstraintDefinition", "DefaultLiteral", "DelayedDurabilityDatabaseOption", "DeleteMergeAction", "DeleteSpecification", "DeleteStatement", "DenyStatement", "DenyStatement80", "DeviceInfo", "DiskStatement", "DiskStatementOption", "DistinctPredicate", "DropAggregateStatement", "DropAlterFullTextIndexAction", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropClusteredConstraintMoveOption", "DropClusteredConstraintStateOption", "DropClusteredConstraintValueOption", "DropClusteredConstraintWaitAtLowPriorityLockOption", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamStatement", "DropExternalStreamingJobStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexClause", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMemberAlterRoleAction", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListAction", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "DurabilityTableOption", "ElasticPoolSpecification", "EnableDisableTriggerStatement", "EnabledDisabledPayloadOption", "EncryptedValueParameter", "EncryptionPayloadOption", "EndConversationStatement", "EndpointAffinity", "EventDeclaration", "EventDeclarationCompareFunctionParameter", "EventDeclarationSetParameter", "EventGroupContainer", "EventNotificationObjectScope", "EventRetentionSessionOption", "EventSessionObjectName", "EventSessionStatement", "EventTypeContainer", "ExecutableProcedureReference", "ExecutableStringList", "ExecuteAsClause", "ExecuteAsFunctionOption", "ExecuteAsProcedureOption", "ExecuteAsStatement", "ExecuteAsTriggerOption", "ExecuteContext", "ExecuteInsertSource", "ExecuteOption", "ExecuteParameter", "ExecuteSpecification", "ExecuteStatement", "ExistsPredicate", "ExpressionCallTarget", "ExpressionGroupingSpecification", "ExpressionWithSortOrder", "ExternalCreateLoginSource", "ExternalDataSourceLiteralOrIdentifierOption", "ExternalFileFormatContainerOption", "ExternalFileFormatLiteralOption", "ExternalFileFormatUseDefaultTypeOption", "ExternalLanguageFileOption", "ExternalLibraryFileOption", "ExternalResourcePoolAffinitySpecification", "ExternalResourcePoolParameter", "ExternalResourcePoolStatement", "ExternalStreamLiteralOrIdentifierOption", "ExternalTableColumnDefinition", "ExternalTableDistributionOption", "ExternalTableLiteralOrIdentifierOption", "ExternalTableRejectTypeOption", "ExternalTableReplicatedDistributionPolicy", "ExternalTableRoundRobinDistributionPolicy", "ExternalTableShardedDistributionPolicy", "ExtractFromExpression", "FailoverModeReplicaOption", "FederationScheme", "FetchCursorStatement", "FetchType", "FileDeclaration", "FileDeclarationOption", "FileEncryptionSource", "FileGroupDefinition", "FileGroupOrPartitionScheme", "FileGrowthFileDeclarationOption", "FileNameFileDeclarationOption", "FileStreamDatabaseOption", "FileStreamOnDropIndexOption", "FileStreamOnTableOption", "FileStreamRestoreOption", "FileTableCollateFileNameTableOption", "FileTableConstraintNameTableOption", "FileTableDirectoryTableOption", "ForceSeekTableHint", "ForeignKeyConstraintDefinition", "FromClause", "FullTextCatalogAndFileGroup", "FullTextIndexColumn", "FullTextPredicate", "FullTextStopListAction", "FullTextTableReference", "FunctionCall", "FunctionCallSetClause", "FunctionOption", "GeneralSetCommand", "GenericConfigurationOption", "GetConversationGroupStatement", "GlobalFunctionTableReference", "GlobalVariableExpression", "GoToStatement", "GrandTotalGroupingSpecification", "GrantStatement", "GrantStatement80", "GraphConnectionBetweenNodes", "GraphConnectionConstraintDefinition", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "GridParameter", "GridsSpatialIndexOption", "GroupByClause", "GroupingSetsGroupingSpecification", "HadrAvailabilityGroupDatabaseOption", "HadrDatabaseOption", "HavingClause", "IIfCall", "IPv4", "Identifier", "IdentifierAtomicBlockOption", "IdentifierDatabaseOption", "IdentifierLiteral", "IdentifierOrScalarExpression", "IdentifierOrValueExpression", "IdentifierPrincipalOption", "IdentifierSnippet", "IdentityFunctionCall", "IdentityOptions", "IdentityValueKeyOption", "IfStatement", "IgnoreDupKeyIndexOption", "InPredicate", "IndexDefinition", "IndexExpressionOption", "IndexStateOption", "IndexTableHint", "IndexType", "InlineDerivedTable", "InlineFunctionOption", "InlineResultSetDefinition", "InsertBulkColumnDefinition", "InsertBulkStatement", "InsertMergeAction", "InsertSpecification", "InsertStatement", "IntegerLiteral", "InternalOpenRowset", "InvokeExternalApiFunctionCall", "JoinParenthesisTableReference", "JsonForClause", "JsonForClauseOption", "JsonKeyValue", "KeySourceKeyOption", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LedgerOption", "LedgerTableOption", "LedgerViewOption", "LeftFunctionCall", "LikePredicate", "LineNoStatement", "ListTypeCopyOption", "ListenerIPEndpointProtocolOption", "LiteralAtomicBlockOption", "LiteralAuditTargetOption", "LiteralAvailabilityGroupOption", "LiteralBulkInsertOption", "LiteralDatabaseOption", "LiteralEndpointProtocolOption", "LiteralOpenRowsetCosmosOption", "LiteralOptimizerHint", "LiteralOptionValue", "LiteralPayloadOption", "LiteralPrincipalOption", "LiteralRange", "LiteralReplicaOption", "LiteralSessionOption", "LiteralStatisticsOption", "LiteralTableHint", "LocationOption", "LockEscalationTableOption", "LoginTypePayloadOption", "LowPriorityLockWaitAbortAfterWaitOption", "LowPriorityLockWaitMaxDurationOption", "LowPriorityLockWaitTableSwitchOption", "MaxDispatchLatencySessionOption", "MaxDopConfigurationOption", "MaxDurationOption", "MaxLiteral", "MaxRolloverFilesAuditTargetOption", "MaxSizeAuditTargetOption", "MaxSizeDatabaseOption", "MaxSizeFileDeclarationOption", "MemoryOptimizedTableOption", "MemoryPartitionSessionOption", "MergeActionClause", "MergeSpecification", "MergeStatement", "MethodSpecifier", "MirrorToClause", "MoneyLiteral", "MoveConversationStatement", "MoveRestoreOption", "MoveToDropIndexOption", "MultiPartIdentifier", "MultiPartIdentifierCallTarget", "NameFileDeclarationOption", "NamedTableReference", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NullableConstraintDefinition", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "OdbcQualifiedJoinTableReference", "OffsetClause", "OnFailureAuditOption", "OnOffAssemblyOption", "OnOffAtomicBlockOption", "OnOffAuditTargetOption", "OnOffDatabaseOption", "OnOffDialogOption", "OnOffFullTextCatalogOption", "OnOffOptionValue", "OnOffPrimaryConfigurationOption", "OnOffPrincipalOption", "OnOffRemoteServiceBindingOption", "OnOffSessionOption", "OnOffStatisticsOption", "OnlineIndexLowPriorityLockWaitOption", "OnlineIndexOption", "OpenCursorStatement", "OpenJsonTableReference", "OpenMasterKeyStatement", "OpenQueryTableReference", "OpenRowsetColumnDefinition", "OpenRowsetCosmos", "OpenRowsetCosmosOption", "OpenRowsetTableReference", "OpenSymmetricKeyStatement", "OpenXmlTableReference", "OperatorAuditOption", "OptimizeForOptimizerHint", "OptimizedLockingDatabaseOption", "OptimizerHint", "OrderBulkInsertOption", "OrderByClause", "OrderIndexOption", "OutputClause", "OutputIntoClause", "OverClause", "PageVerifyDatabaseOption", "ParameterizationDatabaseOption", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "PartitionParameterType", "PartitionSpecifier", "PartnerDatabaseOption", "PasswordAlterPrincipalOption", "PasswordCreateLoginSource", "Permission", "PermissionSetAssemblyOption", "PivotedTableReference", "PortsEndpointProtocolOption", "PredicateSetStatement", "PredictTableReference", "PrimaryRoleReplicaOption", "PrincipalOption", "PrintStatement", "Privilege80", "PrivilegeSecurityElement80", "ProcedureOption", "ProcedureParameter", "ProcedureReference", "ProcedureReferenceName", "ProcessAffinityRange", "ProviderEncryptionSource", "ProviderKeyNameKeyOption", "QualifiedJoin", "QueryDerivedTable", "QueryParenthesisExpression", "QuerySpecification", "QueryStoreCapturePolicyOption", "QueryStoreDataFlushIntervalOption", "QueryStoreDatabaseOption", "QueryStoreDesiredStateOption", "QueryStoreIntervalLengthOption", "QueryStoreMaxPlansPerQueryOption", "QueryStoreMaxStorageSizeOption", "QueryStoreSizeCleanupPolicyOption", "QueryStoreTimeCleanupPolicyOption", "QueryStoreWaitStatsCaptureOption", "QueueDelayAuditOption", "QueueExecuteAsOption", "QueueOption", "QueueProcedureOption", "QueueStateOption", "QueueValueOption", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadOnlyForClause", "ReadTextStatement", "RealLiteral", "ReceiveStatement", "ReconfigureStatement", "RecoveryDatabaseOption", "RegexpLikePredicate", "RemoteDataArchiveAlterTableOption", "RemoteDataArchiveDatabaseOption", "RemoteDataArchiveDbCredentialSetting", "RemoteDataArchiveDbFederatedServiceAccountSetting", "RemoteDataArchiveDbServerSetting", "RemoteDataArchiveTableOption", "RenameAlterRoleAction", "RenameEntityStatement", "ResampleStatisticsOption", "ResourcePoolAffinitySpecification", "ResourcePoolParameter", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreOption", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ResultColumnDefinition", "ResultSetDefinition", "ResultSetsExecuteOption", "RetentionDaysAuditTargetOption", "RetentionPeriodDefinition", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RightFunctionCall", "RolePayloadOption", "RollbackTransactionStatement", "RollupGroupingSpecification", "RouteOption", "RowValue", "SaveTransactionStatement", "ScalarExpressionDialogOption", "ScalarExpressionRestoreOption", "ScalarExpressionSequenceOption", "ScalarExpressionSnippet", "ScalarFunctionReturnType", "ScalarSubquery", "SchemaDeclarationItem", "SchemaDeclarationItemOpenjson", "SchemaObjectFunctionTableReference", "SchemaObjectName", "SchemaObjectNameOrValueExpression", "SchemaObjectNameSnippet", "SchemaObjectResultSetDefinition", "SchemaPayloadOption", "SearchPropertyListFullTextIndexOption", "SearchedCaseExpression", "SearchedWhenClause", "SecondaryRoleReplicaOption", "SecurityPolicyOption", "SecurityPredicateAction", "SecurityPrincipal", "SecurityTargetObject", "SecurityTargetObjectName", "SecurityUserClause80", "SelectFunctionReturnType", "SelectInsertSource", "SelectScalarExpression", "SelectSetVariable", "SelectStarExpression", "SelectStatement", "SelectStatementSnippet", "SelectiveXmlIndexPromotedPath", "SemanticIndexChunkOption", "SemanticIndexColumn", "SemanticTableReference", "SendStatement", "SensitivityClassificationOption", "SequenceOption", "ServiceContract", "SessionTimeoutPayloadOption", "SetCommandStatement", "SetErrorLevelStatement", "SetFipsFlaggerCommand", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetSearchPropertyListAlterFullTextIndexAction", "SetStatisticsStatement", "SetStopListAlterFullTextIndexAction", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "SimpleAlterFullTextIndexAction", "SimpleCaseExpression", "SimpleWhenClause", "SingleValueTypeCopyOption", "SizeFileDeclarationOption", "SoapMethod", "SourceDeclaration", "SpatialIndexRegularOption", "SqlCommandIdentifier", "SqlDataTypeReference", "StateAuditOption", "StatementList", "StatementListSnippet", "StatisticsOption", "StatisticsPartitionRange", "StopListFullTextIndexOption", "StopRestoreOption", "StringLiteral", "SubqueryComparisonPredicate", "SystemTimePeriodDefinition", "SystemVersioningTableOption", "TSEqualCall", "TSqlBatch", "TSqlFragmentSnippet", "TSqlScript", "TSqlStatementSnippet", "TableClusteredIndexType", "TableDataCompressionOption", "TableDefinition", "TableDistributionOption", "TableHashDistributionPolicy", "TableHint", "TableHintsOptimizerHint", "TableIndexOption", "TableNonClusteredIndexType", "TablePartitionOption", "TablePartitionOptionSpecifications", "TableReplicateDistributionPolicy", "TableRoundRobinDistributionPolicy", "TableSampleClause", "TableValuedFunctionReturnType", "TableXmlCompressionOption", "TargetDeclaration", "TargetRecoveryTimeDatabaseOption", "TemporalClause", "ThrowStatement", "TopRowFilter", "TriggerAction", "TriggerObject", "TriggerOption", "TruncateTableStatement", "TruncateTargetTableSwitchOption", "TryCastCall", "TryCatchStatement", "TryConvertCall", "TryParseCall", "UnaryExpression", "UniqueConstraintDefinition", "UnpivotedTableReference", "UnqualifiedJoin", "UpdateCall", "UpdateForClause", "UpdateMergeAction", "UpdateSpecification", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseHintList", "UseStatement", "UserDataTypeReference", "UserDefinedTypeCallTarget", "UserDefinedTypePropertyAccess", "UserLoginOption", "UserRemoteServiceBindingOption", "ValuesInsertSource", "VariableMethodCallTableReference", "VariableReference", "VariableTableReference", "VariableValuePair", "VectorDataTypeReference", "VectorMetricIndexOption", "VectorSearchTableReference", "VectorTypeIndexOption", "ViewDistributionOption", "ViewForAppendOption", "ViewHashDistributionPolicy", "ViewOption", "ViewRoundRobinDistributionPolicy", "WaitAtLowPriorityOption", "WaitForStatement", "WhereClause", "WhileStatement", "WindowClause", "WindowDefinition", "WindowDelimiter", "WindowFrameClause", "WindowsCreateLoginSource", "WithCtesAndXmlNamespaces", "WithinGroupClause", "WitnessDatabaseOption", "WlmTimeLiteral", "WorkloadGroupImportanceParameter", "WorkloadGroupResourceParameter", "WriteTextStatement", "WsdlPayloadOption", "XmlCompressionOption", "XmlDataTypeReference", "XmlForClause", "XmlForClauseOption", "XmlNamespaces", "XmlNamespacesAliasElement", "XmlNamespacesDefaultElement"];
export type TsqlStructuralNodeKind = (typeof TSQL_STRUCTURAL_NODE_KINDS)[number];
export declare const TSQL_STRUCTURAL_EDGE_NAMES: readonly ["AbsentOrNullOnNull", "Account", "Action", "ActionClauses", "Actions", "AddFiles", "AdHocDataSource", "Affinity", "AffinitySpecification", "After", "AggregateFunctionIdentifier", "Algorithm", "Alias", "AlterTableDropTableElements", "ApiFormat", "ApplicationRoleOptions", "Arguments", "AsClause", "Assembly", "AssemblyName", "AttestedBy", "AuditName", "AuditTarget", "BaseIdentifier", "BaseType", "Batches", "Body", "Bottom", "Boundary", "BoundaryValue", "BoundaryValues", "BoundingBoxParameters", "BrokerInstanceSpecifier", "BrokerPriorityParameters", "BrokerService", "ByExpressions", "CallTarget", "CatalogAndFileGroup", "CatalogName", "CatchStatements", "Certificate", "CertificateOptions", "CertificateSource", "ChangeTrackingContext", "CheckCondition", "ChildIdentifier", "ChunkOptions", "ChunkSize", "ChunkType", "ClassifierFunction", "ClassifierName", "ClassName", "ClonePointInTime", "CloneSource", "ClusterByOption", "Collation", "Column", "ColumnDefinition", "ColumnDefinitions", "ColumnEncryptionKeyValues", "ColumnIdentifier", "ColumnName", "ColumnOrdinal", "Columns", "ColumnValues", "Commands", "CommonTableExpressions", "ComputeClauses", "ComputedColumnExpression", "ComputeFunctions", "ConstraintIdentifier", "ConstraintNames", "Constraints", "Containment", "Content", "ContractName", "Conversation", "ConversationHandles", "Cookie", "CopyOf", "Credential", "CredentialName", "CryptographicProviderName", "Cryptos", "CtasColumns", "Culture", "Cursor", "CursorDefinition", "DatabaseIdentifier", "DatabaseName", "Databases", "DatabaseSnapshot", "DataCompressionOption", "DataFiles", "DataModificationSpecification", "DataSource", "DataType", "DateValue", "Days", "Declarations", "DeclareTableVariableBody", "DecryptionMechanism", "DecryptionPassword", "DefaultConstraint", "DefaultValue", "Definition", "Definitions", "Delay", "DeleteLength", "DeleteSpecification", "Description", "Details", "Devices", "Dimension", "DirectoryName", "DistributionColumn", "DistributionColumns", "DistributionName", "DropClusteredConstraintOptions", "DropEventDeclarations", "DropFiles", "DropIndexClauses", "DropTargetDeclarations", "Duration", "Edge", "ElasticPoolName", "Element", "ElseExpression", "ElseStatement", "EnableChunkSetId", "EncryptingMechanisms", "Encryption", "EncryptionAlgorithm", "EncryptionPassword", "Encryptor", "EndTime", "EndTimeColumn", "EnvironmentVariables", "ErrorCode", "ErrorDescription", "ErrorNumber", "EscapeExpression", "EventDeclarationActionParameters", "EventDeclarationPredicateParameter", "EventDeclarations", "EventDeclarationSetParameters", "EventField", "EventTypeGroup", "EventTypeGroups", "EventValue", "ExecutableEntity", "Execute", "ExecuteAs", "ExecuteAsClause", "ExecuteContext", "ExecuteSpecification", "Expression", "ExpressionName", "Expressions", "ExternalDataSourceOptions", "ExternalFileFormatOptions", "ExternalLanguageFiles", "ExternalLibraryFiles", "ExternalModelName", "ExternalModelParameters", "ExternalName", "ExternalPoolName", "ExternalResourcePoolParameters", "ExternalStreamOptions", "ExternalTableOptions", "ExtractedElement", "FederationName", "FederationScheme", "FetchExpression", "FetchType", "FieldNumber", "File", "FileDeclaration", "FileDeclarations", "FileGroup", "FileGroupName", "FileGroups", "FileName", "Files", "FileStreamOn", "FileStreamOption", "FilterColumn", "FilterPredicate", "FirstExpression", "FirstParameter", "FirstQueryExpression", "FirstTableReference", "Flags", "FlushInterval", "ForClause", "ForJsonPaths", "ForName", "From", "FromClause", "FromNode", "FromNodeToNodeList", "FullTextIndexColumns", "FulltextStoplistOption", "FunctionCall", "FunctionName", "FunctionSetName", "GenericOptionKind", "GenericOptionState", "GridParameters", "Group", "GroupByClause", "GroupId", "GroupingSpecifications", "GroupName", "GrowthIncrement", "Guid", "Handle", "HavingClause", "Hints", "HistoryTable", "Id", "Identifier", "Identifiers", "Identity", "IdentityIncrement", "IdentityOptions", "IdentityPhrase", "IdentitySeed", "IgnoreRespectNulls", "IncludeColumns", "InColumns", "Increment", "Index", "Indexes", "IndexIdentifier", "IndexOptions", "IndexType", "IndexValue", "IndexValues", "InitiatorServiceName", "InitString", "Input", "InputExpression", "InputOptions", "InsertOffset", "InsertSource", "InsertSpecification", "InstanceSpec", "Into", "IntoTable", "IntoTableColumns", "IntoVariables", "IPv4PartOne", "IPv4PartTwo", "IPv6", "Items", "JobId", "Join", "JsonColumn", "JsonKeyName", "JsonOrderByClause", "JsonParameters", "JsonPath", "JsonValue", "Key", "KeyIndexName", "KeyName", "KeyOptions", "KeySource", "LabelName", "Labels", "Language", "LanguageTerm", "LedgerViewOption", "LeftExpression", "LeftNode", "Level", "LineNo", "LinkedServer", "Literal", "Literals", "LocalRuntimePath", "Location", "LocationValue", "LogicalDevice", "LogicalFileName", "LogOn", "LowerLimit", "LowPriorityLockWaitOption", "Mapping", "Mark", "MarkDescription", "MaskingFunction", "MatchedColumn", "MatchedKey", "MaxDuration", "MaxLength", "MaxPlansPerQuery", "MaxQdsSize", "MaxSize", "Member", "MemberName", "MergeSpecification", "Message", "MessageBody", "Messages", "MessageTypeName", "MethodName", "MethodSpecifier", "Metric", "MirrorToClauses", "ModelName", "ModelSubquery", "ModelVariable", "MoveTo", "MultiPartIdentifier", "MutatorFunction", "Name", "Namespace", "NewDatabaseName", "NewFileGroupName", "NewName", "NewValue", "Node", "Notifications", "Nullable", "NullableConstraint", "Number", "NumberRows", "Object", "ObjectName", "Objects", "OctetFour", "OctetOne", "OctetThree", "OctetTwo", "Offset", "OffsetClause", "OffsetExpression", "OffsetValue", "OldName", "OldPassword", "On", "OnFileGroup", "OnFileGroupOrPartitionScheme", "OnName", "Operation", "OperationTypeColumnName", "OperationTypeDescColumnName", "OptimizerHints", "Option", "OptionalParameters", "Options", "OptionValue", "OrderByClause", "OrderByElements", "OrderedColumns", "OrderHint", "OSFileName", "OuterNodeExpression", "OutputClause", "OutputIntoClause", "OutputOptions", "OverClause", "Overlap", "Owner", "Pairs", "Parameter", "Parameters", "ParameterType", "ParameterValue", "Partition", "PartitionColumn", "PartitionFunction", "PartitionOptionSpecs", "PartitionRanges", "Partitions", "PartitionSchemeColumns", "PartnerServer", "Parts", "PassPhrase", "Password", "PasswordOrSignature", "Path", "PathName", "Pattern", "PayloadOptions", "Permissions", "PhysicalDevice", "PivotColumn", "PlanHandle", "Platform", "PoolAffinityRanges", "PoolName", "Predicate", "PredicateExpression", "PredictTableReference", "PrimaryKeyColumns", "PrimaryKeyValues", "Principal", "PrincipalName", "Principals", "PrivateKeyPath", "Privileges", "ProcedureReference", "ProcedureVariable", "ProcessAffinityRanges", "PromotedPaths", "PromptPart1", "PromptPart2", "PropertyListName", "PropertyName", "ProtocolOptions", "Provider", "ProviderName", "ProviderString", "Qualifier", "Query", "QueryExpression", "Queue", "QueueName", "QueueOptions", "RecoveryTime", "RecursiveQuantifier", "ReferencedTableColumns", "ReferenceTableName", "RefWindowName", "RepeatSeed", "Replicas", "ResourcePoolParameters", "ResultColumnDefinitions", "RetentionPeriod", "ReturnType", "RightExpression", "RightNode", "RollbackAfter", "RouteOptions", "RowOffset", "RowPattern", "RowValues", "RunTime", "SampleNumber", "ScalarExpression", "Schema", "SchemaDeclarationItems", "SchemaIdentifier", "SchemaObject", "SchemaObjectName", "Scope", "SearchCondition", "SearchPropertyListOption", "SecondaryXmlIndexName", "SecondExpression", "SecondParameter", "SecondQueryExpression", "SecondTableReference", "Secret", "SecurityElement80", "SecurityPolicyOptions", "SecurityPredicateActions", "SecurityTargetObject", "SecurityUserClause80", "Seed", "Select", "SelectColumns", "SelectElements", "SelectStatement", "SequenceName", "SequenceNumberColumnName", "SequenceOptions", "Server", "ServerIdentifier", "ServerName", "Service", "ServiceContracts", "SessionOptions", "SetClauses", "Sets", "Settings", "ShardingColumn", "Signature", "SimilarTo", "SinceVersion", "SingleValue", "Size", "Source", "SourceColumn", "SourceDeclaration", "SourceKey", "SourceParameter", "SourcePartitionNumber", "SourceSearchPropertyList", "SourceStopListName", "SpatialColumnName", "SpatialIndexOptions", "SpecificationName", "SQLDataType", "StaleQueryThreshold", "StartTime", "StartTimeColumn", "State", "Statement", "StatementList", "Statements", "StatisticsOptions", "StatsIntervalLength", "StopListName", "StopListOption", "StopWord", "StorageOptions", "String", "Strings", "StringValue", "Style", "SubElements", "Suboptions", "Subquery", "SubscriptionId", "SystemTimePeriod", "Table", "TableAlias", "TableConstraints", "TableHints", "TableName", "TableReference", "TableReferences", "TableSampleClause", "Target", "TargetDeclarationParameters", "TargetDeclarations", "TargetObject", "TargetObjectName", "TargetOptions", "TargetPartitionNumber", "TargetServiceName", "TargetTable", "TemporalClause", "Termination", "Text", "TextId", "TextImageOn", "TextPointer", "TextSize", "ThenExpression", "ThenStatement", "ThirdExpression", "ThirdParameter", "Time", "Timeout", "Timestamp", "TimeString", "TimeZone", "To", "ToNode", "Top", "TopN", "TopRowFilter", "TransactionIdColumnName", "TriggerActions", "TriggerNames", "TriggerObject", "TrimOptions", "TryStatements", "TypeColumn", "TypeColumnName", "UpdateSpecification", "UpperLimit", "User", "UserId", "UserLoginOption", "UserName", "UserOptions", "Users", "UsingXmlIndexName", "Value", "ValueColumn", "ValueColumns", "ValueExpression", "Values", "VarArgs", "Variable", "VariableName", "VectorColumn", "VectorIndexOptions", "ViewName", "ViewOptions", "WhenClauses", "WhenExpression", "Where", "WhereClause", "WindowClause", "WindowDefinition", "WindowFrameClause", "WindowName", "WithColumns", "WithCtesAndXmlNamespaces", "WithinGroupClause", "WitnessServer", "WlmContext", "WlmLabel", "WorkloadGroupName", "WorkloadGroupParameters", "XmlColumn", "XmlCompressionOption", "XmlNamespaces", "XmlNamespacesElements", "XmlSchemaCollection", "XmlSchemaCollectionName", "XQueryDataType"];
export type TsqlStructuralEdgeName = (typeof TSQL_STRUCTURAL_EDGE_NAMES)[number];
export declare const TSQL_STRUCTURAL_EDGE_POLICIES: readonly [{
    readonly childKinds: readonly ["FullTextIndexColumn"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "AddAlterFullTextIndexAction";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "FileName";
    readonly parentKind: "AddFileSpec";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "AddFileSpec";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Member";
    readonly parentKind: "AddMemberAlterRoleAction";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Description";
    readonly parentKind: "AddSearchPropertyListAction";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Guid";
    readonly parentKind: "AddSearchPropertyListAction";
}, {
    readonly childKinds: readonly ["IntegerLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Id";
    readonly parentKind: "AddSearchPropertyListAction";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PropertyName";
    readonly parentKind: "AddSearchPropertyListAction";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "AddSensitivityClassificationStatement";
}, {
    readonly childKinds: readonly ["SensitivityClassificationOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AddSensitivityClassificationStatement";
}, {
    readonly childKinds: readonly ["CryptoMechanism"];
    readonly edgeKind: "array";
    readonly edgeName: "Cryptos";
    readonly parentKind: "AddSignatureStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Element";
    readonly parentKind: "AddSignatureStatement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "InitString";
    readonly parentKind: "AdHocDataSource";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ProviderName";
    readonly parentKind: "AdHocDataSource";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "AdHocTableReference";
}, {
    readonly childKinds: readonly ["AdHocDataSource"];
    readonly edgeKind: "single";
    readonly edgeName: "DataSource";
    readonly parentKind: "AdHocTableReference";
}, {
    readonly childKinds: readonly ["SchemaObjectNameOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Object";
    readonly parentKind: "AdHocTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIAnalyzeSentimentFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AIAnalyzeSentimentFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIClassifyFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AIClassifyFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Labels";
    readonly parentKind: "AIClassifyFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIExtractFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AIExtractFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Labels";
    readonly parentKind: "AIExtractFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIFixGrammarFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AIFixGrammarFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "AIGenerateChunksTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ChunkType";
    readonly parentKind: "AIGenerateChunksTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Source";
    readonly parentKind: "AIGenerateChunksTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIGenerateEmbeddingsFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AIGenerateEmbeddingsFunctionCall";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ModelName";
    readonly parentKind: "AIGenerateEmbeddingsFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionalParameters";
    readonly parentKind: "AIGenerateEmbeddingsFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ChunkSize";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ChunkType";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "EnableChunkSetId";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Overlap";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Source";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIGenerateResponseFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "PromptPart1";
    readonly parentKind: "AIGenerateResponseFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "PromptPart2";
    readonly parentKind: "AIGenerateResponseFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AISummarizeFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AISummarizeFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AITranslateFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AITranslateFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Language";
    readonly parentKind: "AITranslateFunctionCall";
}, {
    readonly childKinds: readonly ["ApplicationRoleOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ApplicationRoleOptions";
    readonly parentKind: "AlterApplicationRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterApplicationRoleStatement";
}, {
    readonly childKinds: readonly ["AddFileSpec"];
    readonly edgeKind: "array";
    readonly edgeName: "AddFiles";
    readonly parentKind: "AlterAssemblyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "array";
    readonly edgeName: "DropFiles";
    readonly parentKind: "AlterAssemblyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterAssemblyStatement";
}, {
    readonly childKinds: readonly ["AssemblyOption", "OnOffAssemblyOption", "PermissionSetAssemblyOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterAssemblyStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "AlterAssemblyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "AttestedBy";
    readonly parentKind: "AlterAsymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "DecryptionPassword";
    readonly parentKind: "AlterAsymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionPassword";
    readonly parentKind: "AlterAsymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterAsymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "PrincipalName";
    readonly parentKind: "AlterAuthorizationStatement";
}, {
    readonly childKinds: readonly ["SecurityTargetObject"];
    readonly edgeKind: "single";
    readonly edgeName: "SecurityTargetObject";
    readonly parentKind: "AlterAuthorizationStatement";
}, {
    readonly childKinds: readonly ["AlterAvailabilityGroupFailoverOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterAvailabilityGroupFailoverAction";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "AlterAvailabilityGroupFailoverOption";
}, {
    readonly childKinds: readonly ["AlterAvailabilityGroupAction", "AlterAvailabilityGroupFailoverAction"];
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterAvailabilityGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Databases";
    readonly parentKind: "AlterAvailabilityGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterAvailabilityGroupStatement";
}, {
    readonly childKinds: readonly ["LiteralAvailabilityGroupOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterAvailabilityGroupStatement";
}, {
    readonly childKinds: readonly ["AvailabilityReplica"];
    readonly edgeKind: "array";
    readonly edgeName: "Replicas";
    readonly parentKind: "AlterAvailabilityGroupStatement";
}, {
    readonly childKinds: readonly ["BrokerPriorityParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "BrokerPriorityParameters";
    readonly parentKind: "AlterBrokerPriorityStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterBrokerPriorityStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "AttestedBy";
    readonly parentKind: "AlterCertificateStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "DecryptionPassword";
    readonly parentKind: "AlterCertificateStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionPassword";
    readonly parentKind: "AlterCertificateStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterCertificateStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PrivateKeyPath";
    readonly parentKind: "AlterCertificateStatement";
}, {
    readonly childKinds: readonly ["FullTextIndexColumn"];
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "AlterColumnAlterFullTextIndexAction";
}, {
    readonly childKinds: readonly ["ColumnEncryptionKeyValue"];
    readonly edgeKind: "array";
    readonly edgeName: "ColumnEncryptionKeyValues";
    readonly parentKind: "AlterColumnEncryptionKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterColumnEncryptionKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Identity";
    readonly parentKind: "AlterCredentialStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterCredentialStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Secret";
    readonly parentKind: "AlterCredentialStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "AlterCryptographicProviderStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterCryptographicProviderStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseAddFileGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "AlterDatabaseAddFileGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseAddFileStatement";
}, {
    readonly childKinds: readonly ["FileDeclaration"];
    readonly edgeKind: "array";
    readonly edgeName: "FileDeclarations";
    readonly parentKind: "AlterDatabaseAddFileStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "AlterDatabaseAddFileStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "AlterDatabaseAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["AuditSpecificationPart"];
    readonly edgeKind: "array";
    readonly edgeName: "Parts";
    readonly parentKind: "AlterDatabaseAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SpecificationName";
    readonly parentKind: "AlterDatabaseAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AlterDatabaseCollateStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseCollateStatement";
}, {
    readonly childKinds: readonly ["CryptoMechanism"];
    readonly edgeKind: "single";
    readonly edgeName: "Encryptor";
    readonly parentKind: "AlterDatabaseEncryptionKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseModifyFileGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "AlterDatabaseModifyFileGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "NewFileGroupName";
    readonly parentKind: "AlterDatabaseModifyFileGroupStatement";
}, {
    readonly childKinds: readonly ["AlterDatabaseTermination"];
    readonly edgeKind: "single";
    readonly edgeName: "Termination";
    readonly parentKind: "AlterDatabaseModifyFileGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseModifyFileStatement";
}, {
    readonly childKinds: readonly ["FileDeclaration"];
    readonly edgeKind: "single";
    readonly edgeName: "FileDeclaration";
    readonly parentKind: "AlterDatabaseModifyFileStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseModifyNameStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "NewDatabaseName";
    readonly parentKind: "AlterDatabaseModifyNameStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabasePerformCutoverStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseRebuildLogStatement";
}, {
    readonly childKinds: readonly ["FileDeclaration"];
    readonly edgeKind: "single";
    readonly edgeName: "FileDeclaration";
    readonly parentKind: "AlterDatabaseRebuildLogStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseRemoveFileGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "AlterDatabaseRemoveFileGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseRemoveFileStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "AlterDatabaseRemoveFileStatement";
}, {
    readonly childKinds: readonly ["DatabaseConfigurationClearOption"];
    readonly edgeKind: "single";
    readonly edgeName: "Option";
    readonly parentKind: "AlterDatabaseScopedConfigurationClearStatement";
}, {
    readonly childKinds: readonly ["DatabaseConfigurationSetOption", "DWCompatibilityLevelConfigurationOption", "GenericConfigurationOption", "MaxDopConfigurationOption", "OnOffPrimaryConfigurationOption"];
    readonly edgeKind: "single";
    readonly edgeName: "Option";
    readonly parentKind: "AlterDatabaseScopedConfigurationSetStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseSetStatement";
}, {
    readonly childKinds: readonly ["AcceleratedDatabaseRecoveryDatabaseOption", "AutoCreateStatisticsDatabaseOption", "AutomaticTuningDatabaseOption", "CatalogCollationOption", "ChangeTrackingDatabaseOption", "ContainmentDatabaseOption", "CursorDefaultDatabaseOption", "DatabaseOption", "DelayedDurabilityDatabaseOption", "ElasticPoolSpecification", "FileStreamDatabaseOption", "HadrAvailabilityGroupDatabaseOption", "HadrDatabaseOption", "IdentifierDatabaseOption", "LedgerOption", "LiteralDatabaseOption", "MaxSizeDatabaseOption", "OnOffDatabaseOption", "OptimizedLockingDatabaseOption", "PageVerifyDatabaseOption", "ParameterizationDatabaseOption", "PartnerDatabaseOption", "QueryStoreDatabaseOption", "RecoveryDatabaseOption", "RemoteDataArchiveDatabaseOption", "TargetRecoveryTimeDatabaseOption", "WitnessDatabaseOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterDatabaseSetStatement";
}, {
    readonly childKinds: readonly ["AlterDatabaseTermination"];
    readonly edgeKind: "single";
    readonly edgeName: "Termination";
    readonly parentKind: "AlterDatabaseSetStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "RollbackAfter";
    readonly parentKind: "AlterDatabaseTermination";
}, {
    readonly childKinds: readonly ["EndpointAffinity"];
    readonly edgeKind: "single";
    readonly edgeName: "Affinity";
    readonly parentKind: "AlterEndpointStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterEndpointStatement";
}, {
    readonly childKinds: readonly ["AuthenticationPayloadOption", "CharacterSetPayloadOption", "EnabledDisabledPayloadOption", "EncryptionPayloadOption", "LiteralPayloadOption", "LoginTypePayloadOption", "RolePayloadOption", "SchemaPayloadOption", "SessionTimeoutPayloadOption", "SoapMethod", "WsdlPayloadOption"];
    readonly edgeKind: "array";
    readonly edgeName: "PayloadOptions";
    readonly parentKind: "AlterEndpointStatement";
}, {
    readonly childKinds: readonly ["AuthenticationEndpointProtocolOption", "CompressionEndpointProtocolOption", "ListenerIPEndpointProtocolOption", "LiteralEndpointProtocolOption", "PortsEndpointProtocolOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ProtocolOptions";
    readonly parentKind: "AlterEndpointStatement";
}, {
    readonly childKinds: readonly ["EventSessionObjectName"];
    readonly edgeKind: "array";
    readonly edgeName: "DropEventDeclarations";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly childKinds: readonly ["EventSessionObjectName"];
    readonly edgeKind: "array";
    readonly edgeName: "DropTargetDeclarations";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly childKinds: readonly ["EventDeclaration"];
    readonly edgeKind: "array";
    readonly edgeName: "EventDeclarations";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly childKinds: readonly ["EventRetentionSessionOption", "LiteralSessionOption", "MaxDispatchLatencySessionOption", "MemoryPartitionSessionOption", "OnOffSessionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "SessionOptions";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly childKinds: readonly ["TargetDeclaration"];
    readonly edgeKind: "array";
    readonly edgeName: "TargetDeclarations";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly childKinds: readonly ["ExternalDataSourceLiteralOrIdentifierOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalDataSourceOptions";
    readonly parentKind: "AlterExternalDataSourceStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Location";
    readonly parentKind: "AlterExternalDataSourceStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalDataSourceStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ExternalName";
    readonly parentKind: "AlterExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "AlterExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "AlterExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["ExternalLanguageFileOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalLanguageFiles";
    readonly parentKind: "AlterExternalLanguageStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalLanguageStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Operation";
    readonly parentKind: "AlterExternalLanguageStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "AlterExternalLanguageStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Platform";
    readonly parentKind: "AlterExternalLanguageStatement";
}, {
    readonly childKinds: readonly ["ExternalLibraryFileOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalLibraryFiles";
    readonly parentKind: "AlterExternalLibraryStatement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Language";
    readonly parentKind: "AlterExternalLibraryStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalLibraryStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "AlterExternalLibraryStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ApiFormat";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Credential";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "LocalRuntimePath";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Location";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ModelName";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Parameters";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly childKinds: readonly ["ExternalResourcePoolParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalResourcePoolParameters";
    readonly parentKind: "AlterExternalResourcePoolStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalResourcePoolStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Boundary";
    readonly parentKind: "AlterFederationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DistributionName";
    readonly parentKind: "AlterFederationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterFederationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterFullTextCatalogStatement";
}, {
    readonly childKinds: readonly ["OnOffFullTextCatalogOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterFullTextCatalogStatement";
}, {
    readonly childKinds: readonly ["AddAlterFullTextIndexAction", "AlterColumnAlterFullTextIndexAction", "DropAlterFullTextIndexAction", "SetSearchPropertyListAlterFullTextIndexAction", "SetStopListAlterFullTextIndexAction", "SimpleAlterFullTextIndexAction"];
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterFullTextIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "AlterFullTextIndexStatement";
}, {
    readonly childKinds: readonly ["FullTextStopListAction"];
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterFullTextStopListStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterFullTextStopListStatement";
}, {
    readonly childKinds: readonly ["MethodSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly childKinds: readonly ["ExecuteAsFunctionOption", "FunctionOption", "InlineFunctionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly childKinds: readonly ["OrderBulkInsertOption"];
    readonly edgeKind: "single";
    readonly edgeName: "OrderHint";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly childKinds: readonly ["ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly childKinds: readonly ["ScalarFunctionReturnType", "SelectFunctionReturnType", "TableValuedFunctionReturnType"];
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly childKinds: readonly ["PartitionSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Partition";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly childKinds: readonly ["SelectiveXmlIndexPromotedPath"];
    readonly edgeKind: "array";
    readonly edgeName: "PromotedPaths";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly childKinds: readonly ["XmlNamespaces"];
    readonly edgeKind: "single";
    readonly edgeName: "XmlNamespaces";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "CredentialName";
    readonly parentKind: "AlterLoginAddDropCredentialStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterLoginAddDropCredentialStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterLoginEnableDisableStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterLoginOptionsStatement";
}, {
    readonly childKinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterLoginOptionsStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "AlterMasterKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterMessageTypeStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "XmlSchemaCollectionName";
    readonly parentKind: "AlterMessageTypeStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Boundary";
    readonly parentKind: "AlterPartitionFunctionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterPartitionFunctionStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "AlterPartitionSchemeStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterPartitionSchemeStatement";
}, {
    readonly childKinds: readonly ["MethodSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "AlterProcedureStatement";
}, {
    readonly childKinds: readonly ["ExecuteAsProcedureOption", "ProcedureOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterProcedureStatement";
}, {
    readonly childKinds: readonly ["ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "AlterProcedureStatement";
}, {
    readonly childKinds: readonly ["ProcedureReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureReference";
    readonly parentKind: "AlterProcedureStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "AlterProcedureStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterQueueStatement";
}, {
    readonly childKinds: readonly ["QueueExecuteAsOption", "QueueOption", "QueueProcedureOption", "QueueStateOption", "QueueValueOption"];
    readonly edgeKind: "array";
    readonly edgeName: "QueueOptions";
    readonly parentKind: "AlterQueueStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterRemoteServiceBindingStatement";
}, {
    readonly childKinds: readonly ["OnOffRemoteServiceBindingOption", "UserRemoteServiceBindingOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterRemoteServiceBindingStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ClassifierFunction";
    readonly parentKind: "AlterResourceGovernorStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterResourcePoolStatement";
}, {
    readonly childKinds: readonly ["ResourcePoolParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "ResourcePoolParameters";
    readonly parentKind: "AlterResourcePoolStatement";
}, {
    readonly childKinds: readonly ["AddMemberAlterRoleAction", "DropMemberAlterRoleAction", "RenameAlterRoleAction"];
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterRouteStatement";
}, {
    readonly childKinds: readonly ["RouteOption"];
    readonly edgeKind: "array";
    readonly edgeName: "RouteOptions";
    readonly parentKind: "AlterRouteStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterSchemaStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ObjectName";
    readonly parentKind: "AlterSchemaStatement";
}, {
    readonly childKinds: readonly ["AddSearchPropertyListAction", "DropSearchPropertyListAction"];
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterSearchPropertyListStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterSearchPropertyListStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterSecurityPolicyStatement";
}, {
    readonly childKinds: readonly ["SecurityPolicyOption"];
    readonly edgeKind: "array";
    readonly edgeName: "SecurityPolicyOptions";
    readonly parentKind: "AlterSecurityPolicyStatement";
}, {
    readonly childKinds: readonly ["SecurityPredicateAction"];
    readonly edgeKind: "array";
    readonly edgeName: "SecurityPredicateActions";
    readonly parentKind: "AlterSecurityPolicyStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterSequenceStatement";
}, {
    readonly childKinds: readonly ["DataTypeSequenceOption", "ScalarExpressionSequenceOption", "SequenceOption"];
    readonly edgeKind: "array";
    readonly edgeName: "SequenceOptions";
    readonly parentKind: "AlterSequenceStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "AlterServerAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["AuditSpecificationPart"];
    readonly edgeKind: "array";
    readonly edgeName: "Parts";
    readonly parentKind: "AlterServerAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SpecificationName";
    readonly parentKind: "AlterServerAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "AlterServerAuditStatement";
}, {
    readonly childKinds: readonly ["AuditTarget"];
    readonly edgeKind: "single";
    readonly edgeName: "AuditTarget";
    readonly parentKind: "AlterServerAuditStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "NewName";
    readonly parentKind: "AlterServerAuditStatement";
}, {
    readonly childKinds: readonly ["AuditGuidAuditOption", "OnFailureAuditOption", "OperatorAuditOption", "QueueDelayAuditOption", "StateAuditOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerAuditStatement";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "PredicateExpression";
    readonly parentKind: "AlterServerAuditStatement";
}, {
    readonly childKinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationBufferPoolExtensionContainerOption";
}, {
    readonly childKinds: readonly ["AlterServerConfigurationBufferPoolExtensionContainerOption", "AlterServerConfigurationBufferPoolExtensionOption", "AlterServerConfigurationBufferPoolExtensionSizeOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Suboptions";
    readonly parentKind: "AlterServerConfigurationBufferPoolExtensionContainerOption";
}, {
    readonly childKinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationBufferPoolExtensionOption";
}, {
    readonly childKinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationBufferPoolExtensionSizeOption";
}, {
    readonly childKinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationDiagnosticsLogMaxSizeOption";
}, {
    readonly childKinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationDiagnosticsLogOption";
}, {
    readonly childKinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationExternalAuthenticationContainerOption";
}, {
    readonly childKinds: readonly ["AlterServerConfigurationExternalAuthenticationContainerOption", "AlterServerConfigurationExternalAuthenticationOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Suboptions";
    readonly parentKind: "AlterServerConfigurationExternalAuthenticationContainerOption";
}, {
    readonly childKinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationExternalAuthenticationOption";
}, {
    readonly childKinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationFailoverClusterPropertyOption";
}, {
    readonly childKinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationHadrClusterOption";
}, {
    readonly childKinds: readonly ["AlterServerConfigurationBufferPoolExtensionContainerOption", "AlterServerConfigurationBufferPoolExtensionOption", "AlterServerConfigurationBufferPoolExtensionSizeOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetBufferPoolExtensionStatement";
}, {
    readonly childKinds: readonly ["AlterServerConfigurationDiagnosticsLogMaxSizeOption", "AlterServerConfigurationDiagnosticsLogOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetDiagnosticsLogStatement";
}, {
    readonly childKinds: readonly ["AlterServerConfigurationExternalAuthenticationContainerOption", "AlterServerConfigurationExternalAuthenticationOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetExternalAuthenticationStatement";
}, {
    readonly childKinds: readonly ["AlterServerConfigurationFailoverClusterPropertyOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetFailoverClusterPropertyStatement";
}, {
    readonly childKinds: readonly ["AlterServerConfigurationHadrClusterOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetHadrClusterStatement";
}, {
    readonly childKinds: readonly ["AlterServerConfigurationSoftNumaOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetSoftNumaStatement";
}, {
    readonly childKinds: readonly ["LiteralOptionValue", "OnOffOptionValue"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationSoftNumaOption";
}, {
    readonly childKinds: readonly ["ProcessAffinityRange"];
    readonly edgeKind: "array";
    readonly edgeName: "ProcessAffinityRanges";
    readonly parentKind: "AlterServerConfigurationStatement";
}, {
    readonly childKinds: readonly ["AddMemberAlterRoleAction", "DropMemberAlterRoleAction", "RenameAlterRoleAction"];
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterServerRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterServerRoleStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Account";
    readonly parentKind: "AlterServiceMasterKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "AlterServiceMasterKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterServiceStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "QueueName";
    readonly parentKind: "AlterServiceStatement";
}, {
    readonly childKinds: readonly ["ServiceContract"];
    readonly edgeKind: "array";
    readonly edgeName: "ServiceContracts";
    readonly parentKind: "AlterServiceStatement";
}, {
    readonly childKinds: readonly ["CryptoMechanism"];
    readonly edgeKind: "array";
    readonly edgeName: "EncryptingMechanisms";
    readonly parentKind: "AlterSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["ClusterByTableOption"];
    readonly edgeKind: "single";
    readonly edgeName: "ClusterByOption";
    readonly parentKind: "AlterTableAddClusterByStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableAddClusterByStatement";
}, {
    readonly childKinds: readonly ["TableDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Definition";
    readonly parentKind: "AlterTableAddTableElementStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableAddTableElementStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnIdentifier";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly childKinds: readonly ["ColumnEncryptionDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Encryption";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "MaskingFunction";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly childKinds: readonly ["ColumnStorageOptions"];
    readonly edgeKind: "single";
    readonly edgeName: "StorageOptions";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "IndexIdentifier";
    readonly parentKind: "AlterTableAlterIndexStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "AlterTableAlterIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableAlterIndexStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "BoundaryValue";
    readonly parentKind: "AlterTableAlterPartitionStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableAlterPartitionStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableChangeTrackingModificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "ConstraintNames";
    readonly parentKind: "AlterTableConstraintModificationStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableConstraintModificationStatement";
}, {
    readonly childKinds: readonly ["DropClusteredConstraintMoveOption", "DropClusteredConstraintStateOption", "DropClusteredConstraintValueOption", "DropClusteredConstraintWaitAtLowPriorityLockOption"];
    readonly edgeKind: "array";
    readonly edgeName: "DropClusteredConstraintOptions";
    readonly parentKind: "AlterTableDropTableElement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterTableDropTableElement";
}, {
    readonly childKinds: readonly ["AlterTableDropTableElement"];
    readonly edgeKind: "array";
    readonly edgeName: "AlterTableDropTableElements";
    readonly parentKind: "AlterTableDropTableElementStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableDropTableElementStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableFileTableNamespaceStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "AlterTableRebuildStatement";
}, {
    readonly childKinds: readonly ["PartitionSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Partition";
    readonly parentKind: "AlterTableRebuildStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableRebuildStatement";
}, {
    readonly childKinds: readonly ["ClusterByTableOption", "DataRetentionTableOption", "DurabilityTableOption", "FileStreamOnTableOption", "FileTableCollateFileNameTableOption", "FileTableConstraintNameTableOption", "FileTableDirectoryTableOption", "LedgerTableOption", "LedgerViewOption", "LocationOption", "LockEscalationTableOption", "MemoryOptimizedTableOption", "RemoteDataArchiveAlterTableOption", "RemoteDataArchiveTableOption", "SystemVersioningTableOption", "TableDataCompressionOption", "TableDistributionOption", "TableIndexOption", "TablePartitionOption", "TableXmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterTableSetStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableSetStatement";
}, {
    readonly childKinds: readonly ["LowPriorityLockWaitTableSwitchOption", "TruncateTargetTableSwitchOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterTableSwitchStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableSwitchStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SourcePartitionNumber";
    readonly parentKind: "AlterTableSwitchStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TargetPartitionNumber";
    readonly parentKind: "AlterTableSwitchStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "TargetTable";
    readonly parentKind: "AlterTableSwitchStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableTriggerModificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "TriggerNames";
    readonly parentKind: "AlterTableTriggerModificationStatement";
}, {
    readonly childKinds: readonly ["MethodSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly childKinds: readonly ["ExecuteAsTriggerOption", "TriggerOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly childKinds: readonly ["TriggerAction"];
    readonly edgeKind: "array";
    readonly edgeName: "TriggerActions";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly childKinds: readonly ["TriggerObject"];
    readonly edgeKind: "single";
    readonly edgeName: "TriggerObject";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterUserStatement";
}, {
    readonly childKinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    readonly edgeKind: "array";
    readonly edgeName: "UserOptions";
    readonly parentKind: "AlterUserStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "AlterViewStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterViewStatement";
}, {
    readonly childKinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "AlterViewStatement";
}, {
    readonly childKinds: readonly ["ViewDistributionOption", "ViewForAppendOption", "ViewOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ViewOptions";
    readonly parentKind: "AlterViewStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ExternalPoolName";
    readonly parentKind: "AlterWorkloadGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterWorkloadGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "PoolName";
    readonly parentKind: "AlterWorkloadGroupStatement";
}, {
    readonly childKinds: readonly ["WorkloadGroupImportanceParameter", "WorkloadGroupResourceParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "WorkloadGroupParameters";
    readonly parentKind: "AlterWorkloadGroupStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "AlterXmlSchemaCollectionStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterXmlSchemaCollectionStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ApplicationRoleOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Assembly";
    readonly parentKind: "AssemblyEncryptionSource";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ClassName";
    readonly parentKind: "AssemblyName";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AssemblyName";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "AssignmentSetClause";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "NewValue";
    readonly parentKind: "AssignmentSetClause";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "AssignmentSetClause";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Credential";
    readonly parentKind: "AsymmetricKeyCreateLoginSource";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Key";
    readonly parentKind: "AsymmetricKeyCreateLoginSource";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AtTimeZoneCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DateValue";
    readonly parentKind: "AtTimeZoneCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TimeZone";
    readonly parentKind: "AtTimeZoneCall";
}, {
    readonly childKinds: readonly ["DatabaseAuditAction"];
    readonly edgeKind: "array";
    readonly edgeName: "Actions";
    readonly parentKind: "AuditActionSpecification";
}, {
    readonly childKinds: readonly ["SecurityPrincipal"];
    readonly edgeKind: "array";
    readonly edgeName: "Principals";
    readonly parentKind: "AuditActionSpecification";
}, {
    readonly childKinds: readonly ["SecurityTargetObject"];
    readonly edgeKind: "single";
    readonly edgeName: "TargetObject";
    readonly parentKind: "AuditActionSpecification";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Guid";
    readonly parentKind: "AuditGuidAuditOption";
}, {
    readonly childKinds: readonly ["AuditActionGroupReference", "AuditActionSpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "Details";
    readonly parentKind: "AuditSpecificationPart";
}, {
    readonly childKinds: readonly ["LiteralAuditTargetOption", "MaxRolloverFilesAuditTargetOption", "MaxSizeAuditTargetOption", "OnOffAuditTargetOption", "RetentionDaysAuditTargetOption"];
    readonly edgeKind: "array";
    readonly edgeName: "TargetOptions";
    readonly parentKind: "AuditTarget";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Certificate";
    readonly parentKind: "AuthenticationPayloadOption";
}, {
    readonly childKinds: readonly ["AutomaticTuningCreateIndexOption", "AutomaticTuningDropIndexOption", "AutomaticTuningForceLastGoodPlanOption", "AutomaticTuningMaintainIndexOption", "AutomaticTuningOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AutomaticTuningDatabaseOption";
}, {
    readonly childKinds: readonly ["AvailabilityModeReplicaOption", "FailoverModeReplicaOption", "LiteralReplicaOption", "PrimaryRoleReplicaOption", "SecondaryRoleReplicaOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AvailabilityReplica";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ServerName";
    readonly parentKind: "AvailabilityReplica";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "DecryptionPassword";
    readonly parentKind: "BackupCertificateStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionPassword";
    readonly parentKind: "BackupCertificateStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "BackupCertificateStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "BackupCertificateStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PrivateKeyPath";
    readonly parentKind: "BackupCertificateStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "BackupDatabaseStatement";
}, {
    readonly childKinds: readonly ["DeviceInfo"];
    readonly edgeKind: "array";
    readonly edgeName: "Devices";
    readonly parentKind: "BackupDatabaseStatement";
}, {
    readonly childKinds: readonly ["BackupRestoreFileInfo"];
    readonly edgeKind: "array";
    readonly edgeName: "Files";
    readonly parentKind: "BackupDatabaseStatement";
}, {
    readonly childKinds: readonly ["MirrorToClause"];
    readonly edgeKind: "array";
    readonly edgeName: "MirrorToClauses";
    readonly parentKind: "BackupDatabaseStatement";
}, {
    readonly childKinds: readonly ["BackupEncryptionOption", "BackupOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BackupDatabaseStatement";
}, {
    readonly childKinds: readonly ["CryptoMechanism"];
    readonly edgeKind: "single";
    readonly edgeName: "Encryptor";
    readonly parentKind: "BackupEncryptionOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "BackupEncryptionOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "BackupMasterKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "BackupMasterKeyStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "BackupOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Items";
    readonly parentKind: "BackupRestoreFileInfo";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "BackupServiceMasterKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "BackupServiceMasterKeyStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "BackupTransactionLogStatement";
}, {
    readonly childKinds: readonly ["DeviceInfo"];
    readonly edgeKind: "array";
    readonly edgeName: "Devices";
    readonly parentKind: "BackupTransactionLogStatement";
}, {
    readonly childKinds: readonly ["MirrorToClause"];
    readonly edgeKind: "array";
    readonly edgeName: "MirrorToClauses";
    readonly parentKind: "BackupTransactionLogStatement";
}, {
    readonly childKinds: readonly ["BackupEncryptionOption", "BackupOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BackupTransactionLogStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName"];
    readonly edgeKind: "single";
    readonly edgeName: "Index";
    readonly parentKind: "BackwardsCompatibleDropIndexClause";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Handle";
    readonly parentKind: "BeginConversationTimerStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Timeout";
    readonly parentKind: "BeginConversationTimerStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "ContractName";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Handle";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "InitiatorServiceName";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "InstanceSpec";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly childKinds: readonly ["OnOffDialogOption", "ScalarExpressionDialogOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TargetServiceName";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly childKinds: readonly ["IdentifierAtomicBlockOption", "LiteralAtomicBlockOption", "OnOffAtomicBlockOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BeginEndAtomicBlockStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "BeginEndAtomicBlockStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "BeginEndBlockStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "MarkDescription";
    readonly parentKind: "BeginTransactionStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "BeginTransactionStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "BinaryExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "BinaryExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "BinaryLiteral";
}, {
    readonly childKinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstQueryExpression";
    readonly parentKind: "BinaryQueryExpression";
}, {
    readonly childKinds: readonly ["BrowseForClause", "JsonForClause", "JsonForClauseOption", "ReadOnlyForClause", "UpdateForClause", "XmlForClause", "XmlForClauseOption"];
    readonly edgeKind: "single";
    readonly edgeName: "ForClause";
    readonly parentKind: "BinaryQueryExpression";
}, {
    readonly childKinds: readonly ["OffsetClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OffsetClause";
    readonly parentKind: "BinaryQueryExpression";
}, {
    readonly childKinds: readonly ["OrderByClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "BinaryQueryExpression";
}, {
    readonly childKinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondQueryExpression";
    readonly parentKind: "BinaryQueryExpression";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "BooleanBinaryExpression";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "BooleanBinaryExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "BooleanComparisonExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "BooleanComparisonExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "BooleanIsNullExpression";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "BooleanNotExpression";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "BooleanParenthesisExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "BooleanTernaryExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "BooleanTernaryExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ThirdExpression";
    readonly parentKind: "BooleanTernaryExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "BoundingBoxParameter";
}, {
    readonly childKinds: readonly ["BoundingBoxParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "BoundingBoxParameters";
    readonly parentKind: "BoundingBoxSpatialIndexOption";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "BrokerPriorityParameter";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "BuiltInFunctionTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "BuiltInFunctionTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "BuiltInFunctionTableReference";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "From";
    readonly parentKind: "BulkInsertStatement";
}, {
    readonly childKinds: readonly ["BulkInsertOption", "LiteralBulkInsertOption", "OrderBulkInsertOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BulkInsertStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "BulkInsertStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "BulkOpenRowset";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "BulkOpenRowset";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "array";
    readonly edgeName: "DataFiles";
    readonly parentKind: "BulkOpenRowset";
}, {
    readonly childKinds: readonly ["BulkInsertOption", "LiteralBulkInsertOption", "OrderBulkInsertOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BulkOpenRowset";
}, {
    readonly childKinds: readonly ["OpenRowsetColumnDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "WithColumns";
    readonly parentKind: "BulkOpenRowset";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "CastCall";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "CastCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "CastCall";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "CellsPerObjectSpatialIndexOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Certificate";
    readonly parentKind: "CertificateCreateLoginSource";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Credential";
    readonly parentKind: "CertificateCreateLoginSource";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "CertificateOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "RetentionPeriod";
    readonly parentKind: "ChangeRetentionChangeTrackingOptionDetail";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "ChangeTableChangesTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "ChangeTableChangesTableReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SinceVersion";
    readonly parentKind: "ChangeTableChangesTableReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "ChangeTableChangesTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "ChangeTableVersionTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "ChangeTableVersionTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "PrimaryKeyColumns";
    readonly parentKind: "ChangeTableVersionTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "PrimaryKeyValues";
    readonly parentKind: "ChangeTableVersionTableReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "ChangeTableVersionTableReference";
}, {
    readonly childKinds: readonly ["AutoCleanupChangeTrackingOptionDetail", "ChangeRetentionChangeTrackingOptionDetail"];
    readonly edgeKind: "array";
    readonly edgeName: "Details";
    readonly parentKind: "ChangeTrackingDatabaseOption";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "CheckCondition";
    readonly parentKind: "CheckConstraintDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "CheckConstraintDefinition";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Duration";
    readonly parentKind: "CheckpointStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "BaseIdentifier";
    readonly parentKind: "ChildObjectName";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ChildIdentifier";
    readonly parentKind: "ChildObjectName";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseIdentifier";
    readonly parentKind: "ChildObjectName";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Identifiers";
    readonly parentKind: "ChildObjectName";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaIdentifier";
    readonly parentKind: "ChildObjectName";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ServerIdentifier";
    readonly parentKind: "ChildObjectName";
}, {
    readonly childKinds: readonly ["WlmTimeLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Time";
    readonly parentKind: "ClassifierEndTimeOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "MemberName";
    readonly parentKind: "ClassifierMemberNameOption";
}, {
    readonly childKinds: readonly ["WlmTimeLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Time";
    readonly parentKind: "ClassifierStartTimeOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "WlmContext";
    readonly parentKind: "ClassifierWlmContextOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "WlmLabel";
    readonly parentKind: "ClassifierWlmLabelOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "WorkloadGroupName";
    readonly parentKind: "ClassifierWorkloadGroupOption";
}, {
    readonly childKinds: readonly ["CursorId"];
    readonly edgeKind: "single";
    readonly edgeName: "Cursor";
    readonly parentKind: "CloseCursorStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CloseSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "ClusterByTableOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "CoalesceExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Expressions";
    readonly parentKind: "CoalesceExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ColumnDefinitionBase";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnIdentifier";
    readonly parentKind: "ColumnDefinitionBase";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ColumnDefinitionBase";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnIdentifier";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ComputedColumnExpression";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["CheckConstraintDefinition", "DefaultConstraintDefinition", "ForeignKeyConstraintDefinition", "GraphConnectionConstraintDefinition", "NullableConstraintDefinition", "UniqueConstraintDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "Constraints";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["DefaultConstraintDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "DefaultConstraint";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["ColumnEncryptionDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Encryption";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["IdentityOptions"];
    readonly edgeKind: "single";
    readonly edgeName: "IdentityOptions";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["IndexDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Index";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "MaskingFunction";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["ColumnStorageOptions"];
    readonly edgeKind: "single";
    readonly edgeName: "StorageOptions";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Algorithm";
    readonly parentKind: "ColumnEncryptionAlgorithmNameParameter";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionAlgorithm";
    readonly parentKind: "ColumnEncryptionAlgorithmParameter";
}, {
    readonly childKinds: readonly ["ColumnEncryptionAlgorithmParameter", "ColumnEncryptionKeyNameParameter", "ColumnEncryptionTypeParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "ColumnEncryptionDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ColumnEncryptionKeyNameParameter";
}, {
    readonly childKinds: readonly ["ColumnEncryptionAlgorithmNameParameter", "ColumnMasterKeyNameParameter", "EncryptedValueParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "ColumnEncryptionKeyValue";
}, {
    readonly childKinds: readonly ["BinaryLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Signature";
    readonly parentKind: "ColumnMasterKeyEnclaveComputationsParameter";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ColumnMasterKeyNameParameter";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Path";
    readonly parentKind: "ColumnMasterKeyPathParameter";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ColumnMasterKeyStoreProviderNameParameter";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ColumnReferenceExpression";
}, {
    readonly childKinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "MultiPartIdentifier";
    readonly parentKind: "ColumnReferenceExpression";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "ColumnWithSortOrder";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CommitTransactionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CommonTableExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ExpressionName";
    readonly parentKind: "CommonTableExpression";
}, {
    readonly childKinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "CommonTableExpression";
}, {
    readonly childKinds: readonly ["WithCtesAndXmlNamespaces"];
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "CommonTableExpression";
}, {
    readonly childKinds: readonly ["CompositeGroupingSpecification", "CubeGroupingSpecification", "ExpressionGroupingSpecification", "GrandTotalGroupingSpecification", "GroupingSetsGroupingSpecification", "RollupGroupingSpecification"];
    readonly edgeKind: "array";
    readonly edgeName: "Items";
    readonly parentKind: "CompositeGroupingSpecification";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "CompressionDelayIndexOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "From";
    readonly parentKind: "CompressionPartitionRange";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "CompressionPartitionRange";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "ByExpressions";
    readonly parentKind: "ComputeClause";
}, {
    readonly childKinds: readonly ["ComputeFunction"];
    readonly edgeKind: "array";
    readonly edgeName: "ComputeFunctions";
    readonly parentKind: "ComputeClause";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ComputeFunction";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ContractMessage";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ConvertCall";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ConvertCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "ConvertCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Style";
    readonly parentKind: "ConvertCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnName";
    readonly parentKind: "CopyColumnOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DefaultValue";
    readonly parentKind: "CopyColumnOption";
}, {
    readonly childKinds: readonly ["IntegerLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "FieldNumber";
    readonly parentKind: "CopyColumnOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Identity";
    readonly parentKind: "CopyCredentialOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Secret";
    readonly parentKind: "CopyCredentialOption";
}, {
    readonly childKinds: readonly ["CopyColumnOption", "CopyCredentialOption", "ListTypeCopyOption", "SingleValueTypeCopyOption"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "CopyOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "array";
    readonly edgeName: "From";
    readonly parentKind: "CopyStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Into";
    readonly parentKind: "CopyStatement";
}, {
    readonly childKinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "CopyStatement";
}, {
    readonly childKinds: readonly ["CopyOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CopyStatement";
}, {
    readonly childKinds: readonly ["AssemblyName"];
    readonly edgeKind: "single";
    readonly edgeName: "AssemblyName";
    readonly parentKind: "CreateAggregateStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateAggregateStatement";
}, {
    readonly childKinds: readonly ["ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateAggregateStatement";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "CreateAggregateStatement";
}, {
    readonly childKinds: readonly ["ApplicationRoleOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ApplicationRoleOptions";
    readonly parentKind: "CreateApplicationRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateApplicationRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateAssemblyStatement";
}, {
    readonly childKinds: readonly ["AssemblyOption", "OnOffAssemblyOption", "PermissionSetAssemblyOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateAssemblyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateAssemblyStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateAssemblyStatement";
}, {
    readonly childKinds: readonly ["AssemblyEncryptionSource", "FileEncryptionSource", "ProviderEncryptionSource"];
    readonly edgeKind: "single";
    readonly edgeName: "KeySource";
    readonly parentKind: "CreateAsymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateAsymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateAsymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "CreateAsymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Databases";
    readonly parentKind: "CreateAvailabilityGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateAvailabilityGroupStatement";
}, {
    readonly childKinds: readonly ["LiteralAvailabilityGroupOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateAvailabilityGroupStatement";
}, {
    readonly childKinds: readonly ["AvailabilityReplica"];
    readonly edgeKind: "array";
    readonly edgeName: "Replicas";
    readonly parentKind: "CreateAvailabilityGroupStatement";
}, {
    readonly childKinds: readonly ["BrokerPriorityParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "BrokerPriorityParameters";
    readonly parentKind: "CreateBrokerPriorityStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateBrokerPriorityStatement";
}, {
    readonly childKinds: readonly ["CertificateOption"];
    readonly edgeKind: "array";
    readonly edgeName: "CertificateOptions";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly childKinds: readonly ["AssemblyEncryptionSource", "FileEncryptionSource", "ProviderEncryptionSource"];
    readonly edgeKind: "single";
    readonly edgeName: "CertificateSource";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "DecryptionPassword";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionPassword";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PrivateKeyPath";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly childKinds: readonly ["ColumnEncryptionKeyValue"];
    readonly edgeKind: "array";
    readonly edgeName: "ColumnEncryptionKeyValues";
    readonly parentKind: "CreateColumnEncryptionKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateColumnEncryptionKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateColumnMasterKeyStatement";
}, {
    readonly childKinds: readonly ["ColumnMasterKeyEnclaveComputationsParameter", "ColumnMasterKeyPathParameter", "ColumnMasterKeyStoreProviderNameParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateColumnMasterKeyStatement";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "FilterPredicate";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly childKinds: readonly ["FileGroupOrPartitionScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "OrderedColumns";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly childKinds: readonly ["ContractMessage"];
    readonly edgeKind: "array";
    readonly edgeName: "Messages";
    readonly parentKind: "CreateContractStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateContractStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateContractStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "CryptographicProviderName";
    readonly parentKind: "CreateCredentialStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Identity";
    readonly parentKind: "CreateCredentialStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateCredentialStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Secret";
    readonly parentKind: "CreateCredentialStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "CreateCryptographicProviderStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateCryptographicProviderStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "CreateDatabaseAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["AuditSpecificationPart"];
    readonly edgeKind: "array";
    readonly edgeName: "Parts";
    readonly parentKind: "CreateDatabaseAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SpecificationName";
    readonly parentKind: "CreateDatabaseAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["CryptoMechanism"];
    readonly edgeKind: "single";
    readonly edgeName: "Encryptor";
    readonly parentKind: "CreateDatabaseEncryptionKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly childKinds: readonly ["ContainmentDatabaseOption"];
    readonly edgeKind: "single";
    readonly edgeName: "Containment";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "CopyOf";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseSnapshot";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly childKinds: readonly ["FileGroupDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "FileGroups";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly childKinds: readonly ["FileDeclaration"];
    readonly edgeKind: "array";
    readonly edgeName: "LogOn";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly childKinds: readonly ["AcceleratedDatabaseRecoveryDatabaseOption", "AutoCreateStatisticsDatabaseOption", "AutomaticTuningDatabaseOption", "CatalogCollationOption", "ChangeTrackingDatabaseOption", "ContainmentDatabaseOption", "CursorDefaultDatabaseOption", "DatabaseOption", "DelayedDurabilityDatabaseOption", "ElasticPoolSpecification", "FileStreamDatabaseOption", "HadrAvailabilityGroupDatabaseOption", "HadrDatabaseOption", "IdentifierDatabaseOption", "LedgerOption", "LiteralDatabaseOption", "MaxSizeDatabaseOption", "OnOffDatabaseOption", "OptimizedLockingDatabaseOption", "PageVerifyDatabaseOption", "ParameterizationDatabaseOption", "PartnerDatabaseOption", "QueryStoreDatabaseOption", "RecoveryDatabaseOption", "RemoteDataArchiveDatabaseOption", "TargetRecoveryTimeDatabaseOption", "WitnessDatabaseOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "CreateDefaultStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateDefaultStatement";
}, {
    readonly childKinds: readonly ["EndpointAffinity"];
    readonly edgeKind: "single";
    readonly edgeName: "Affinity";
    readonly parentKind: "CreateEndpointStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateEndpointStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateEndpointStatement";
}, {
    readonly childKinds: readonly ["AuthenticationPayloadOption", "CharacterSetPayloadOption", "EnabledDisabledPayloadOption", "EncryptionPayloadOption", "LiteralPayloadOption", "LoginTypePayloadOption", "RolePayloadOption", "SchemaPayloadOption", "SessionTimeoutPayloadOption", "SoapMethod", "WsdlPayloadOption"];
    readonly edgeKind: "array";
    readonly edgeName: "PayloadOptions";
    readonly parentKind: "CreateEndpointStatement";
}, {
    readonly childKinds: readonly ["AuthenticationEndpointProtocolOption", "CompressionEndpointProtocolOption", "ListenerIPEndpointProtocolOption", "LiteralEndpointProtocolOption", "PortsEndpointProtocolOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ProtocolOptions";
    readonly parentKind: "CreateEndpointStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "BrokerInstanceSpecifier";
    readonly parentKind: "CreateEventNotificationStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "BrokerService";
    readonly parentKind: "CreateEventNotificationStatement";
}, {
    readonly childKinds: readonly ["EventGroupContainer", "EventTypeContainer"];
    readonly edgeKind: "array";
    readonly edgeName: "EventTypeGroups";
    readonly parentKind: "CreateEventNotificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateEventNotificationStatement";
}, {
    readonly childKinds: readonly ["EventNotificationObjectScope"];
    readonly edgeKind: "single";
    readonly edgeName: "Scope";
    readonly parentKind: "CreateEventNotificationStatement";
}, {
    readonly childKinds: readonly ["EventDeclaration"];
    readonly edgeKind: "array";
    readonly edgeName: "EventDeclarations";
    readonly parentKind: "CreateEventSessionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateEventSessionStatement";
}, {
    readonly childKinds: readonly ["EventRetentionSessionOption", "LiteralSessionOption", "MaxDispatchLatencySessionOption", "MemoryPartitionSessionOption", "OnOffSessionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "SessionOptions";
    readonly parentKind: "CreateEventSessionStatement";
}, {
    readonly childKinds: readonly ["TargetDeclaration"];
    readonly edgeKind: "array";
    readonly edgeName: "TargetDeclarations";
    readonly parentKind: "CreateEventSessionStatement";
}, {
    readonly childKinds: readonly ["ExternalDataSourceLiteralOrIdentifierOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalDataSourceOptions";
    readonly parentKind: "CreateExternalDataSourceStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Location";
    readonly parentKind: "CreateExternalDataSourceStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalDataSourceStatement";
}, {
    readonly childKinds: readonly ["ExternalFileFormatContainerOption", "ExternalFileFormatLiteralOption", "ExternalFileFormatUseDefaultTypeOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalFileFormatOptions";
    readonly parentKind: "CreateExternalFileFormatStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalFileFormatStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ExternalName";
    readonly parentKind: "CreateExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "CreateExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["ExternalLanguageFileOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalLanguageFiles";
    readonly parentKind: "CreateExternalLanguageStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalLanguageStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateExternalLanguageStatement";
}, {
    readonly childKinds: readonly ["ExternalLibraryFileOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalLibraryFiles";
    readonly parentKind: "CreateExternalLibraryStatement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Language";
    readonly parentKind: "CreateExternalLibraryStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalLibraryStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateExternalLibraryStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ApiFormat";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Credential";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "LocalRuntimePath";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Location";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ModelName";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly childKinds: readonly ["ExternalResourcePoolParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalResourcePoolParameters";
    readonly parentKind: "CreateExternalResourcePoolStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalResourcePoolStatement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalStreamingJobStatement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Statement";
    readonly parentKind: "CreateExternalStreamingJobStatement";
}, {
    readonly childKinds: readonly ["ExternalStreamLiteralOrIdentifierOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalStreamOptions";
    readonly parentKind: "CreateExternalStreamStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "InputOptions";
    readonly parentKind: "CreateExternalStreamStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Location";
    readonly parentKind: "CreateExternalStreamStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalStreamStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "OutputOptions";
    readonly parentKind: "CreateExternalStreamStatement";
}, {
    readonly childKinds: readonly ["ExternalTableColumnDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "ColumnDefinitions";
    readonly parentKind: "CreateExternalTableStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DataSource";
    readonly parentKind: "CreateExternalTableStatement";
}, {
    readonly childKinds: readonly ["ExternalTableDistributionOption", "ExternalTableLiteralOrIdentifierOption", "ExternalTableRejectTypeOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalTableOptions";
    readonly parentKind: "CreateExternalTableStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "CreateExternalTableStatement";
}, {
    readonly childKinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "CreateExternalTableStatement";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "CreateFederationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DistributionName";
    readonly parentKind: "CreateFederationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateFederationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "CreateFullTextCatalogStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateFullTextCatalogStatement";
}, {
    readonly childKinds: readonly ["OnOffFullTextCatalogOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateFullTextCatalogStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateFullTextCatalogStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Path";
    readonly parentKind: "CreateFullTextCatalogStatement";
}, {
    readonly childKinds: readonly ["FullTextCatalogAndFileGroup"];
    readonly edgeKind: "single";
    readonly edgeName: "CatalogAndFileGroup";
    readonly parentKind: "CreateFullTextIndexStatement";
}, {
    readonly childKinds: readonly ["FullTextIndexColumn"];
    readonly edgeKind: "array";
    readonly edgeName: "FullTextIndexColumns";
    readonly parentKind: "CreateFullTextIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "KeyIndexName";
    readonly parentKind: "CreateFullTextIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateFullTextIndexStatement";
}, {
    readonly childKinds: readonly ["ChangeTrackingFullTextIndexOption", "SearchPropertyListFullTextIndexOption", "StopListFullTextIndexOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateFullTextIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "CreateFullTextStopListStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateFullTextStopListStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateFullTextStopListStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SourceStopListName";
    readonly parentKind: "CreateFullTextStopListStatement";
}, {
    readonly childKinds: readonly ["MethodSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly childKinds: readonly ["ExecuteAsFunctionOption", "FunctionOption", "InlineFunctionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly childKinds: readonly ["OrderBulkInsertOption"];
    readonly edgeKind: "single";
    readonly edgeName: "OrderHint";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly childKinds: readonly ["ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly childKinds: readonly ["ScalarFunctionReturnType", "SelectFunctionReturnType", "TableValuedFunctionReturnType"];
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly childKinds: readonly ["ColumnWithSortOrder"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOn";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "FilterPredicate";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "IncludeColumns";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly childKinds: readonly ["FileGroupOrPartitionScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "array";
    readonly edgeName: "ForJsonPaths";
    readonly parentKind: "CreateJsonIndexStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateJsonIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "JsonColumn";
    readonly parentKind: "CreateJsonIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateJsonIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateJsonIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateLoginStatement";
}, {
    readonly childKinds: readonly ["AsymmetricKeyCreateLoginSource", "CertificateCreateLoginSource", "ExternalCreateLoginSource", "PasswordCreateLoginSource", "WindowsCreateLoginSource"];
    readonly edgeKind: "single";
    readonly edgeName: "Source";
    readonly parentKind: "CreateLoginStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "CreateMasterKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateMessageTypeStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateMessageTypeStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "XmlSchemaCollectionName";
    readonly parentKind: "CreateMessageTypeStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ExternalName";
    readonly parentKind: "CreateOrAlterExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateOrAlterExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateOrAlterExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "CreateOrAlterExternalFunctionStatement";
}, {
    readonly childKinds: readonly ["MethodSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly childKinds: readonly ["ExecuteAsFunctionOption", "FunctionOption", "InlineFunctionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly childKinds: readonly ["OrderBulkInsertOption"];
    readonly edgeKind: "single";
    readonly edgeName: "OrderHint";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly childKinds: readonly ["ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly childKinds: readonly ["ScalarFunctionReturnType", "SelectFunctionReturnType", "TableValuedFunctionReturnType"];
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly childKinds: readonly ["MethodSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateOrAlterProcedureStatement";
}, {
    readonly childKinds: readonly ["ExecuteAsProcedureOption", "ProcedureOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateOrAlterProcedureStatement";
}, {
    readonly childKinds: readonly ["ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateOrAlterProcedureStatement";
}, {
    readonly childKinds: readonly ["ProcedureReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureReference";
    readonly parentKind: "CreateOrAlterProcedureStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateOrAlterProcedureStatement";
}, {
    readonly childKinds: readonly ["MethodSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly childKinds: readonly ["ExecuteAsTriggerOption", "TriggerOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly childKinds: readonly ["TriggerAction"];
    readonly edgeKind: "array";
    readonly edgeName: "TriggerActions";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly childKinds: readonly ["TriggerObject"];
    readonly edgeKind: "single";
    readonly edgeName: "TriggerObject";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateOrAlterViewStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "CreateOrAlterViewStatement";
}, {
    readonly childKinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "CreateOrAlterViewStatement";
}, {
    readonly childKinds: readonly ["ViewDistributionOption", "ViewForAppendOption", "ViewOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ViewOptions";
    readonly parentKind: "CreateOrAlterViewStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "BoundaryValues";
    readonly parentKind: "CreatePartitionFunctionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreatePartitionFunctionStatement";
}, {
    readonly childKinds: readonly ["PartitionParameterType"];
    readonly edgeKind: "single";
    readonly edgeName: "ParameterType";
    readonly parentKind: "CreatePartitionFunctionStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "FileGroups";
    readonly parentKind: "CreatePartitionSchemeStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreatePartitionSchemeStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "PartitionFunction";
    readonly parentKind: "CreatePartitionSchemeStatement";
}, {
    readonly childKinds: readonly ["MethodSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateProcedureStatement";
}, {
    readonly childKinds: readonly ["ExecuteAsProcedureOption", "ProcedureOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateProcedureStatement";
}, {
    readonly childKinds: readonly ["ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateProcedureStatement";
}, {
    readonly childKinds: readonly ["ProcedureReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureReference";
    readonly parentKind: "CreateProcedureStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateProcedureStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateQueueStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroup";
    readonly parentKind: "CreateQueueStatement";
}, {
    readonly childKinds: readonly ["QueueExecuteAsOption", "QueueOption", "QueueProcedureOption", "QueueStateOption", "QueueValueOption"];
    readonly edgeKind: "array";
    readonly edgeName: "QueueOptions";
    readonly parentKind: "CreateQueueStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateRemoteServiceBindingStatement";
}, {
    readonly childKinds: readonly ["OnOffRemoteServiceBindingOption", "UserRemoteServiceBindingOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateRemoteServiceBindingStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateRemoteServiceBindingStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Service";
    readonly parentKind: "CreateRemoteServiceBindingStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateResourcePoolStatement";
}, {
    readonly childKinds: readonly ["ResourcePoolParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "ResourcePoolParameters";
    readonly parentKind: "CreateResourcePoolStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateRouteStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateRouteStatement";
}, {
    readonly childKinds: readonly ["RouteOption"];
    readonly edgeKind: "array";
    readonly edgeName: "RouteOptions";
    readonly parentKind: "CreateRouteStatement";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "CreateRuleStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateRuleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSchemaStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateSchemaStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateSchemaStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSearchPropertyListStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateSearchPropertyListStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SourceSearchPropertyList";
    readonly parentKind: "CreateSearchPropertyListStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSecurityPolicyStatement";
}, {
    readonly childKinds: readonly ["SecurityPolicyOption"];
    readonly edgeKind: "array";
    readonly edgeName: "SecurityPolicyOptions";
    readonly parentKind: "CreateSecurityPolicyStatement";
}, {
    readonly childKinds: readonly ["SecurityPredicateAction"];
    readonly edgeKind: "array";
    readonly edgeName: "SecurityPredicateActions";
    readonly parentKind: "CreateSecurityPolicyStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "PathName";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly childKinds: readonly ["SelectiveXmlIndexPromotedPath"];
    readonly edgeKind: "array";
    readonly edgeName: "PromotedPaths";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "UsingXmlIndexName";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "XmlColumn";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly childKinds: readonly ["XmlNamespaces"];
    readonly edgeKind: "single";
    readonly edgeName: "XmlNamespaces";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly childKinds: readonly ["SemanticIndexColumn"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ExternalModelName";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ExternalModelParameters";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly childKinds: readonly ["StopListFullTextIndexOption"];
    readonly edgeKind: "single";
    readonly edgeName: "FulltextStoplistOption";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly childKinds: readonly ["FileGroupOrPartitionScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "VectorIndexOptions";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSequenceStatement";
}, {
    readonly childKinds: readonly ["DataTypeSequenceOption", "ScalarExpressionSequenceOption", "SequenceOption"];
    readonly edgeKind: "array";
    readonly edgeName: "SequenceOptions";
    readonly parentKind: "CreateSequenceStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "CreateServerAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["AuditSpecificationPart"];
    readonly edgeKind: "array";
    readonly edgeName: "Parts";
    readonly parentKind: "CreateServerAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SpecificationName";
    readonly parentKind: "CreateServerAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "CreateServerAuditStatement";
}, {
    readonly childKinds: readonly ["AuditTarget"];
    readonly edgeKind: "single";
    readonly edgeName: "AuditTarget";
    readonly parentKind: "CreateServerAuditStatement";
}, {
    readonly childKinds: readonly ["AuditGuidAuditOption", "OnFailureAuditOption", "OperatorAuditOption", "QueueDelayAuditOption", "StateAuditOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateServerAuditStatement";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "PredicateExpression";
    readonly parentKind: "CreateServerAuditStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateServerRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateServerRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateServiceStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateServiceStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "QueueName";
    readonly parentKind: "CreateServiceStatement";
}, {
    readonly childKinds: readonly ["ServiceContract"];
    readonly edgeKind: "array";
    readonly edgeName: "ServiceContracts";
    readonly parentKind: "CreateServiceStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSpatialIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Object";
    readonly parentKind: "CreateSpatialIndexStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroup";
    readonly parentKind: "CreateSpatialIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SpatialColumnName";
    readonly parentKind: "CreateSpatialIndexStatement";
}, {
    readonly childKinds: readonly ["BoundingBoxSpatialIndexOption", "CellsPerObjectSpatialIndexOption", "GridsSpatialIndexOption", "SpatialIndexRegularOption"];
    readonly edgeKind: "array";
    readonly edgeName: "SpatialIndexOptions";
    readonly parentKind: "CreateSpatialIndexStatement";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateStatisticsStatement";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "FilterPredicate";
    readonly parentKind: "CreateStatisticsStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateStatisticsStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateStatisticsStatement";
}, {
    readonly childKinds: readonly ["LiteralStatisticsOption", "OnOffStatisticsOption", "ResampleStatisticsOption", "StatisticsOption"];
    readonly edgeKind: "array";
    readonly edgeName: "StatisticsOptions";
    readonly parentKind: "CreateStatisticsStatement";
}, {
    readonly childKinds: readonly ["CryptoMechanism"];
    readonly edgeKind: "array";
    readonly edgeName: "EncryptingMechanisms";
    readonly parentKind: "CreateSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["AlgorithmKeyOption", "CreationDispositionKeyOption", "IdentityValueKeyOption", "KeySourceKeyOption", "ProviderKeyNameKeyOption"];
    readonly edgeKind: "array";
    readonly edgeName: "KeyOptions";
    readonly parentKind: "CreateSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Provider";
    readonly parentKind: "CreateSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ForName";
    readonly parentKind: "CreateSynonymStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSynonymStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ClonePointInTime";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "CloneSource";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "CtasColumns";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["TableDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Definition";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["FederationScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "FederationScheme";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOn";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["FileGroupOrPartitionScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["ClusterByTableOption", "DataRetentionTableOption", "DurabilityTableOption", "FileStreamOnTableOption", "FileTableCollateFileNameTableOption", "FileTableConstraintNameTableOption", "FileTableDirectoryTableOption", "LedgerTableOption", "LedgerViewOption", "LocationOption", "LockEscalationTableOption", "MemoryOptimizedTableOption", "RemoteDataArchiveAlterTableOption", "RemoteDataArchiveTableOption", "SystemVersioningTableOption", "TableDataCompressionOption", "TableDistributionOption", "TableIndexOption", "TablePartitionOption", "TableXmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "TextImageOn";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly childKinds: readonly ["MethodSpecifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly childKinds: readonly ["ExecuteAsTriggerOption", "TriggerOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly childKinds: readonly ["TriggerAction"];
    readonly edgeKind: "array";
    readonly edgeName: "TriggerActions";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly childKinds: readonly ["TriggerObject"];
    readonly edgeKind: "single";
    readonly edgeName: "TriggerObject";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly childKinds: readonly ["TableDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Definition";
    readonly parentKind: "CreateTypeTableStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateTypeTableStatement";
}, {
    readonly childKinds: readonly ["ClusterByTableOption", "DataRetentionTableOption", "DurabilityTableOption", "FileStreamOnTableOption", "FileTableCollateFileNameTableOption", "FileTableConstraintNameTableOption", "FileTableDirectoryTableOption", "LedgerTableOption", "LedgerViewOption", "LocationOption", "LockEscalationTableOption", "MemoryOptimizedTableOption", "RemoteDataArchiveAlterTableOption", "RemoteDataArchiveTableOption", "SystemVersioningTableOption", "TableDataCompressionOption", "TableDistributionOption", "TableIndexOption", "TablePartitionOption", "TableXmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateTypeTableStatement";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "CreateTypeUddtStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateTypeUddtStatement";
}, {
    readonly childKinds: readonly ["NullableConstraintDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "NullableConstraint";
    readonly parentKind: "CreateTypeUddtStatement";
}, {
    readonly childKinds: readonly ["AssemblyName"];
    readonly edgeKind: "single";
    readonly edgeName: "AssemblyName";
    readonly parentKind: "CreateTypeUdtStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateTypeUdtStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateUserStatement";
}, {
    readonly childKinds: readonly ["UserLoginOption"];
    readonly edgeKind: "single";
    readonly edgeName: "UserLoginOption";
    readonly parentKind: "CreateUserStatement";
}, {
    readonly childKinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    readonly edgeKind: "array";
    readonly edgeName: "UserOptions";
    readonly parentKind: "CreateUserStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateVectorIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateVectorIndexStatement";
}, {
    readonly childKinds: readonly ["FileGroupOrPartitionScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateVectorIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateVectorIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "VectorColumn";
    readonly parentKind: "CreateVectorIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateViewStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "CreateViewStatement";
}, {
    readonly childKinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "CreateViewStatement";
}, {
    readonly childKinds: readonly ["ViewDistributionOption", "ViewForAppendOption", "ViewOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ViewOptions";
    readonly parentKind: "CreateViewStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ClassifierName";
    readonly parentKind: "CreateWorkloadClassifierStatement";
}, {
    readonly childKinds: readonly ["ClassifierEndTimeOption", "ClassifierImportanceOption", "ClassifierMemberNameOption", "ClassifierStartTimeOption", "ClassifierWlmContextOption", "ClassifierWlmLabelOption", "ClassifierWorkloadGroupOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateWorkloadClassifierStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ExternalPoolName";
    readonly parentKind: "CreateWorkloadGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateWorkloadGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "PoolName";
    readonly parentKind: "CreateWorkloadGroupStatement";
}, {
    readonly childKinds: readonly ["WorkloadGroupImportanceParameter", "WorkloadGroupResourceParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "WorkloadGroupParameters";
    readonly parentKind: "CreateWorkloadGroupStatement";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly childKinds: readonly ["FileGroupOrPartitionScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondaryXmlIndexName";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "XmlColumn";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "CreateXmlSchemaCollectionStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateXmlSchemaCollectionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "CryptoMechanism";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PasswordOrSignature";
    readonly parentKind: "CryptoMechanism";
}, {
    readonly childKinds: readonly ["CompositeGroupingSpecification", "CubeGroupingSpecification", "ExpressionGroupingSpecification", "GrandTotalGroupingSpecification", "GroupingSetsGroupingSpecification", "RollupGroupingSpecification"];
    readonly edgeKind: "array";
    readonly edgeName: "Arguments";
    readonly parentKind: "CubeGroupingSpecification";
}, {
    readonly childKinds: readonly ["CursorOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CursorDefinition";
}, {
    readonly childKinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Select";
    readonly parentKind: "CursorDefinition";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CursorId";
}, {
    readonly childKinds: readonly ["BinaryLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PlanHandle";
    readonly parentKind: "DatabaseConfigurationClearOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionKind";
    readonly parentKind: "DatabaseConfigurationSetOption";
}, {
    readonly childKinds: readonly ["CompressionPartitionRange"];
    readonly edgeKind: "array";
    readonly edgeName: "PartitionRanges";
    readonly parentKind: "DataCompressionOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "DataModificationTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "DataModificationTableReference";
}, {
    readonly childKinds: readonly ["DeleteSpecification", "InsertSpecification", "MergeSpecification", "UpdateSpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "DataModificationSpecification";
    readonly parentKind: "DataModificationTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "FilterColumn";
    readonly parentKind: "DataRetentionTableOption";
}, {
    readonly childKinds: readonly ["RetentionPeriodDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "RetentionPeriod";
    readonly parentKind: "DataRetentionTableOption";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "DataTypeSequenceOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "DbccNamedLiteral";
}, {
    readonly childKinds: readonly ["DbccNamedLiteral"];
    readonly edgeKind: "array";
    readonly edgeName: "Literals";
    readonly parentKind: "DbccStatement";
}, {
    readonly childKinds: readonly ["DbccOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "DbccStatement";
}, {
    readonly childKinds: readonly ["CursorId"];
    readonly edgeKind: "single";
    readonly edgeName: "Cursor";
    readonly parentKind: "DeallocateCursorStatement";
}, {
    readonly childKinds: readonly ["CursorDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "CursorDefinition";
    readonly parentKind: "DeclareCursorStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DeclareCursorStatement";
}, {
    readonly childKinds: readonly ["TableDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Definition";
    readonly parentKind: "DeclareTableVariableBody";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "VariableName";
    readonly parentKind: "DeclareTableVariableBody";
}, {
    readonly childKinds: readonly ["DeclareTableVariableBody"];
    readonly edgeKind: "single";
    readonly edgeName: "Body";
    readonly parentKind: "DeclareTableVariableStatement";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "DeclareVariableElement";
}, {
    readonly childKinds: readonly ["NullableConstraintDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Nullable";
    readonly parentKind: "DeclareVariableElement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "DeclareVariableElement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "VariableName";
    readonly parentKind: "DeclareVariableElement";
}, {
    readonly childKinds: readonly ["DeclareVariableElement", "ProcedureParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Declarations";
    readonly parentKind: "DeclareVariableStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "DefaultConstraintDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "DefaultConstraintDefinition";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "DefaultConstraintDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "DefaultLiteral";
}, {
    readonly childKinds: readonly ["FromClause"];
    readonly edgeKind: "single";
    readonly edgeName: "FromClause";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly childKinds: readonly ["OutputClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OutputClause";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly childKinds: readonly ["OutputIntoClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OutputIntoClause";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly childKinds: readonly ["TopRowFilter"];
    readonly edgeKind: "single";
    readonly edgeName: "TopRowFilter";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly childKinds: readonly ["WhereClause"];
    readonly edgeKind: "single";
    readonly edgeName: "WhereClause";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly childKinds: readonly ["DeleteSpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "DeleteSpecification";
    readonly parentKind: "DeleteStatement";
}, {
    readonly childKinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "DeleteStatement";
}, {
    readonly childKinds: readonly ["WithCtesAndXmlNamespaces"];
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "DeleteStatement";
}, {
    readonly childKinds: readonly ["CommandSecurityElement80", "PrivilegeSecurityElement80"];
    readonly edgeKind: "single";
    readonly edgeName: "SecurityElement80";
    readonly parentKind: "DenyStatement80";
}, {
    readonly childKinds: readonly ["SecurityUserClause80"];
    readonly edgeKind: "single";
    readonly edgeName: "SecurityUserClause80";
    readonly parentKind: "DenyStatement80";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AsClause";
    readonly parentKind: "DenyStatement";
}, {
    readonly childKinds: readonly ["Permission"];
    readonly edgeKind: "array";
    readonly edgeName: "Permissions";
    readonly parentKind: "DenyStatement";
}, {
    readonly childKinds: readonly ["SecurityPrincipal"];
    readonly edgeKind: "array";
    readonly edgeName: "Principals";
    readonly parentKind: "DenyStatement";
}, {
    readonly childKinds: readonly ["SecurityTargetObject"];
    readonly edgeKind: "single";
    readonly edgeName: "SecurityTargetObject";
    readonly parentKind: "DenyStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "LogicalDevice";
    readonly parentKind: "DeviceInfo";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "PhysicalDevice";
    readonly parentKind: "DeviceInfo";
}, {
    readonly childKinds: readonly ["DiskStatementOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "DiskStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "DiskStatementOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "DistinctPredicate";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "DistinctPredicate";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropAggregateStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "DropAlterFullTextIndexAction";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropApplicationRoleStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropAssemblyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropAsymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropAvailabilityGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropBrokerPriorityStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropCertificateStatement";
}, {
    readonly childKinds: readonly ["FileGroupOrPartitionScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "DropClusteredConstraintMoveOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "DropClusteredConstraintValueOption";
}, {
    readonly childKinds: readonly ["LowPriorityLockWaitAbortAfterWaitOption", "LowPriorityLockWaitMaxDurationOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "DropClusteredConstraintWaitAtLowPriorityLockOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropColumnEncryptionKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropColumnMasterKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropContractStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropCredentialStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropCryptographicProviderStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropDatabaseAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Databases";
    readonly parentKind: "DropDatabaseStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropDefaultStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropEndpointStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Notifications";
    readonly parentKind: "DropEventNotificationStatement";
}, {
    readonly childKinds: readonly ["EventNotificationObjectScope"];
    readonly edgeKind: "single";
    readonly edgeName: "Scope";
    readonly parentKind: "DropEventNotificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropEventSessionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalDataSourceStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalFileFormatStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalLanguageStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "DropExternalLanguageStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalLibraryStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "DropExternalLibraryStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalModelStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalResourcePoolStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalStreamingJobStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalStreamStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropExternalTableStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropFederationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropFullTextCatalogStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "TableName";
    readonly parentKind: "DropFullTextIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropFullTextStopListStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropFunctionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Index";
    readonly parentKind: "DropIndexClause";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Object";
    readonly parentKind: "DropIndexClause";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "DropIndexClause";
}, {
    readonly childKinds: readonly ["BackwardsCompatibleDropIndexClause", "DropIndexClause"];
    readonly edgeKind: "array";
    readonly edgeName: "DropIndexClauses";
    readonly parentKind: "DropIndexStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropLoginStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Member";
    readonly parentKind: "DropMemberAlterRoleAction";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropMessageTypeStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropPartitionFunctionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropPartitionSchemeStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropProcedureStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropQueueStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropRemoteServiceBindingStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropResourcePoolStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropRouteStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropRuleStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Schema";
    readonly parentKind: "DropSchemaStatement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PropertyName";
    readonly parentKind: "DropSearchPropertyListAction";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropSearchPropertyListStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropSecurityPolicyStatement";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "DropSensitivityClassificationStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropSequenceStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropServerAuditSpecificationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropServerAuditStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropServerRoleStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropServiceStatement";
}, {
    readonly childKinds: readonly ["CryptoMechanism"];
    readonly edgeKind: "array";
    readonly edgeName: "Cryptos";
    readonly parentKind: "DropSignatureStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Element";
    readonly parentKind: "DropSignatureStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropStatisticsStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropSynonymStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropTableStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropTriggerStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropTypeStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropUserStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropViewStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropWorkloadClassifierStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropWorkloadGroupStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropXmlSchemaCollectionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionKind";
    readonly parentKind: "DWCompatibilityLevelConfigurationOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "DWCompatibilityLevelConfigurationOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ElasticPoolName";
    readonly parentKind: "ElasticPoolSpecification";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "array";
    readonly edgeName: "TriggerNames";
    readonly parentKind: "EnableDisableTriggerStatement";
}, {
    readonly childKinds: readonly ["TriggerObject"];
    readonly edgeKind: "single";
    readonly edgeName: "TriggerObject";
    readonly parentKind: "EnableDisableTriggerStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "EncryptedValueParameter";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Conversation";
    readonly parentKind: "EndConversationStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ErrorCode";
    readonly parentKind: "EndConversationStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ErrorDescription";
    readonly parentKind: "EndConversationStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "EndpointAffinity";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "EventValue";
    readonly parentKind: "EventDeclarationCompareFunctionParameter";
}, {
    readonly childKinds: readonly ["EventSessionObjectName"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "EventDeclarationCompareFunctionParameter";
}, {
    readonly childKinds: readonly ["SourceDeclaration"];
    readonly edgeKind: "single";
    readonly edgeName: "SourceDeclaration";
    readonly parentKind: "EventDeclarationCompareFunctionParameter";
}, {
    readonly childKinds: readonly ["EventSessionObjectName"];
    readonly edgeKind: "array";
    readonly edgeName: "EventDeclarationActionParameters";
    readonly parentKind: "EventDeclaration";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "EventDeclarationPredicateParameter";
    readonly parentKind: "EventDeclaration";
}, {
    readonly childKinds: readonly ["EventDeclarationSetParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "EventDeclarationSetParameters";
    readonly parentKind: "EventDeclaration";
}, {
    readonly childKinds: readonly ["EventSessionObjectName"];
    readonly edgeKind: "single";
    readonly edgeName: "ObjectName";
    readonly parentKind: "EventDeclaration";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "EventField";
    readonly parentKind: "EventDeclarationSetParameter";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "EventValue";
    readonly parentKind: "EventDeclarationSetParameter";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "QueueName";
    readonly parentKind: "EventNotificationObjectScope";
}, {
    readonly childKinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "MultiPartIdentifier";
    readonly parentKind: "EventSessionObjectName";
}, {
    readonly childKinds: readonly ["EventDeclaration"];
    readonly edgeKind: "array";
    readonly edgeName: "EventDeclarations";
    readonly parentKind: "EventSessionStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "EventSessionStatement";
}, {
    readonly childKinds: readonly ["EventRetentionSessionOption", "LiteralSessionOption", "MaxDispatchLatencySessionOption", "MemoryPartitionSessionOption", "OnOffSessionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "SessionOptions";
    readonly parentKind: "EventSessionStatement";
}, {
    readonly childKinds: readonly ["TargetDeclaration"];
    readonly edgeKind: "array";
    readonly edgeName: "TargetDeclarations";
    readonly parentKind: "EventSessionStatement";
}, {
    readonly childKinds: readonly ["AdHocDataSource"];
    readonly edgeKind: "single";
    readonly edgeName: "AdHocDataSource";
    readonly parentKind: "ExecutableProcedureReference";
}, {
    readonly childKinds: readonly ["ExecuteParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "ExecutableProcedureReference";
}, {
    readonly childKinds: readonly ["ProcedureReferenceName"];
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureReference";
    readonly parentKind: "ExecutableProcedureReference";
}, {
    readonly childKinds: readonly ["ExecuteParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "ExecutableStringList";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Strings";
    readonly parentKind: "ExecutableStringList";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Literal";
    readonly parentKind: "ExecuteAsClause";
}, {
    readonly childKinds: readonly ["ExecuteAsClause"];
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteAs";
    readonly parentKind: "ExecuteAsFunctionOption";
}, {
    readonly childKinds: readonly ["ExecuteAsClause"];
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteAs";
    readonly parentKind: "ExecuteAsProcedureOption";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Cookie";
    readonly parentKind: "ExecuteAsStatement";
}, {
    readonly childKinds: readonly ["ExecuteContext"];
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteContext";
    readonly parentKind: "ExecuteAsStatement";
}, {
    readonly childKinds: readonly ["ExecuteAsClause"];
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteAsClause";
    readonly parentKind: "ExecuteAsTriggerOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Principal";
    readonly parentKind: "ExecuteContext";
}, {
    readonly childKinds: readonly ["ExecuteSpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "Execute";
    readonly parentKind: "ExecuteInsertSource";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "ExecuteParameter";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "ExecuteParameter";
}, {
    readonly childKinds: readonly ["ExecutableProcedureReference", "ExecutableStringList"];
    readonly edgeKind: "single";
    readonly edgeName: "ExecutableEntity";
    readonly parentKind: "ExecuteSpecification";
}, {
    readonly childKinds: readonly ["ExecuteContext"];
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteContext";
    readonly parentKind: "ExecuteSpecification";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "LinkedServer";
    readonly parentKind: "ExecuteSpecification";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "ExecuteSpecification";
}, {
    readonly childKinds: readonly ["ExecuteSpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteSpecification";
    readonly parentKind: "ExecuteStatement";
}, {
    readonly childKinds: readonly ["ExecuteOption", "ResultSetsExecuteOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "ExecuteStatement";
}, {
    readonly childKinds: readonly ["ScalarSubquery"];
    readonly edgeKind: "single";
    readonly edgeName: "Subquery";
    readonly parentKind: "ExistsPredicate";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ExpressionCallTarget";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ExpressionGroupingSpecification";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ExpressionWithSortOrder";
}, {
    readonly childKinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "ExternalCreateLoginSource";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ExternalDataSourceLiteralOrIdentifierOption";
}, {
    readonly childKinds: readonly ["ExternalFileFormatContainerOption", "ExternalFileFormatLiteralOption", "ExternalFileFormatUseDefaultTypeOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Suboptions";
    readonly parentKind: "ExternalFileFormatContainerOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ExternalFileFormatLiteralOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Content";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "EnvironmentVariables";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "FileName";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Parameters";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Path";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Platform";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Content";
    readonly parentKind: "ExternalLibraryFileOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Path";
    readonly parentKind: "ExternalLibraryFileOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Platform";
    readonly parentKind: "ExternalLibraryFileOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "ExternalResourcePoolAffinitySpecification";
}, {
    readonly childKinds: readonly ["LiteralRange", "ProcessAffinityRange"];
    readonly edgeKind: "array";
    readonly edgeName: "PoolAffinityRanges";
    readonly parentKind: "ExternalResourcePoolAffinitySpecification";
}, {
    readonly childKinds: readonly ["ExternalResourcePoolAffinitySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "AffinitySpecification";
    readonly parentKind: "ExternalResourcePoolParameter";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "ExternalResourcePoolParameter";
}, {
    readonly childKinds: readonly ["ExternalResourcePoolParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "ExternalResourcePoolParameters";
    readonly parentKind: "ExternalResourcePoolStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ExternalResourcePoolStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ExternalStreamLiteralOrIdentifierOption";
}, {
    readonly childKinds: readonly ["ColumnDefinition", "ColumnDefinitionBase", "OpenRowsetColumnDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnDefinition";
    readonly parentKind: "ExternalTableColumnDefinition";
}, {
    readonly childKinds: readonly ["NullableConstraintDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "NullableConstraint";
    readonly parentKind: "ExternalTableColumnDefinition";
}, {
    readonly childKinds: readonly ["ExternalTableReplicatedDistributionPolicy", "ExternalTableRoundRobinDistributionPolicy", "ExternalTableShardedDistributionPolicy"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ExternalTableDistributionOption";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ExternalTableLiteralOrIdentifierOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ShardingColumn";
    readonly parentKind: "ExternalTableShardedDistributionPolicy";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ExtractFromExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ExtractedElement";
    readonly parentKind: "ExtractFromExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnName";
    readonly parentKind: "FederationScheme";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DistributionName";
    readonly parentKind: "FederationScheme";
}, {
    readonly childKinds: readonly ["CursorId"];
    readonly edgeKind: "single";
    readonly edgeName: "Cursor";
    readonly parentKind: "FetchCursorStatement";
}, {
    readonly childKinds: readonly ["FetchType"];
    readonly edgeKind: "single";
    readonly edgeName: "FetchType";
    readonly parentKind: "FetchCursorStatement";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "IntoVariables";
    readonly parentKind: "FetchCursorStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "RowOffset";
    readonly parentKind: "FetchType";
}, {
    readonly childKinds: readonly ["FileDeclarationOption", "FileGrowthFileDeclarationOption", "FileNameFileDeclarationOption", "MaxSizeFileDeclarationOption", "NameFileDeclarationOption", "SizeFileDeclarationOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "FileDeclaration";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "FileEncryptionSource";
}, {
    readonly childKinds: readonly ["FileDeclaration"];
    readonly edgeKind: "array";
    readonly edgeName: "FileDeclarations";
    readonly parentKind: "FileGroupDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "FileGroupDefinition";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "FileGroupOrPartitionScheme";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "PartitionSchemeColumns";
    readonly parentKind: "FileGroupOrPartitionScheme";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "GrowthIncrement";
    readonly parentKind: "FileGrowthFileDeclarationOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "OSFileName";
    readonly parentKind: "FileNameFileDeclarationOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "DirectoryName";
    readonly parentKind: "FileStreamDatabaseOption";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOn";
    readonly parentKind: "FileStreamOnDropIndexOption";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "FileStreamOnTableOption";
}, {
    readonly childKinds: readonly ["FileStreamDatabaseOption"];
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOption";
    readonly parentKind: "FileStreamRestoreOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "FileTableCollateFileNameTableOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "FileTableConstraintNameTableOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "FileTableDirectoryTableOption";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "ColumnValues";
    readonly parentKind: "ForceSeekTableHint";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "IndexValue";
    readonly parentKind: "ForceSeekTableHint";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "ForeignKeyConstraintDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "ForeignKeyConstraintDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "ReferencedTableColumns";
    readonly parentKind: "ForeignKeyConstraintDefinition";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ReferenceTableName";
    readonly parentKind: "ForeignKeyConstraintDefinition";
}, {
    readonly childKinds: readonly ["PredictTableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "PredictTableReference";
    readonly parentKind: "FromClause";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "TableReferences";
    readonly parentKind: "FromClause";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "CatalogName";
    readonly parentKind: "FullTextCatalogAndFileGroup";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "FileGroupName";
    readonly parentKind: "FullTextCatalogAndFileGroup";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "LanguageTerm";
    readonly parentKind: "FullTextIndexColumn";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "FullTextIndexColumn";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "TypeColumn";
    readonly parentKind: "FullTextIndexColumn";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "FullTextPredicate";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "LanguageTerm";
    readonly parentKind: "FullTextPredicate";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PropertyName";
    readonly parentKind: "FullTextPredicate";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "FullTextPredicate";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "LanguageTerm";
    readonly parentKind: "FullTextStopListAction";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "StopWord";
    readonly parentKind: "FullTextStopListAction";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Language";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PropertyName";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "TableName";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TopN";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "AbsentOrNullOnNull";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["ExpressionCallTarget", "MultiPartIdentifierCallTarget", "UserDefinedTypeCallTarget"];
    readonly edgeKind: "single";
    readonly edgeName: "CallTarget";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "FunctionName";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "IgnoreRespectNulls";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["OrderByClause"];
    readonly edgeKind: "single";
    readonly edgeName: "JsonOrderByClause";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["JsonKeyValue"];
    readonly edgeKind: "array";
    readonly edgeName: "JsonParameters";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["OverClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OverClause";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "array";
    readonly edgeName: "ReturnType";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["FunctionCall"];
    readonly edgeKind: "single";
    readonly edgeName: "MutatorFunction";
    readonly parentKind: "FunctionCallSetClause";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "TrimOptions";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["WithinGroupClause"];
    readonly edgeKind: "single";
    readonly edgeName: "WithinGroupClause";
    readonly parentKind: "FunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "GeneralSetCommand";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionKind";
    readonly parentKind: "GenericConfigurationOption";
}, {
    readonly childKinds: readonly ["IdentifierOrScalarExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionState";
    readonly parentKind: "GenericConfigurationOption";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "GroupId";
    readonly parentKind: "GetConversationGroupStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Queue";
    readonly parentKind: "GetConversationGroupStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "GlobalFunctionTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "GlobalFunctionTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "GlobalFunctionTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "GlobalVariableExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "LabelName";
    readonly parentKind: "GoToStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AsClause";
    readonly parentKind: "GrantStatement80";
}, {
    readonly childKinds: readonly ["CommandSecurityElement80", "PrivilegeSecurityElement80"];
    readonly edgeKind: "single";
    readonly edgeName: "SecurityElement80";
    readonly parentKind: "GrantStatement80";
}, {
    readonly childKinds: readonly ["SecurityUserClause80"];
    readonly edgeKind: "single";
    readonly edgeName: "SecurityUserClause80";
    readonly parentKind: "GrantStatement80";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AsClause";
    readonly parentKind: "GrantStatement";
}, {
    readonly childKinds: readonly ["Permission"];
    readonly edgeKind: "array";
    readonly edgeName: "Permissions";
    readonly parentKind: "GrantStatement";
}, {
    readonly childKinds: readonly ["SecurityPrincipal"];
    readonly edgeKind: "array";
    readonly edgeName: "Principals";
    readonly parentKind: "GrantStatement";
}, {
    readonly childKinds: readonly ["SecurityTargetObject"];
    readonly edgeKind: "single";
    readonly edgeName: "SecurityTargetObject";
    readonly parentKind: "GrantStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "FromNode";
    readonly parentKind: "GraphConnectionBetweenNodes";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ToNode";
    readonly parentKind: "GraphConnectionBetweenNodes";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "GraphConnectionConstraintDefinition";
}, {
    readonly childKinds: readonly ["GraphConnectionBetweenNodes"];
    readonly edgeKind: "array";
    readonly edgeName: "FromNodeToNodeList";
    readonly parentKind: "GraphConnectionConstraintDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Edge";
    readonly parentKind: "GraphMatchCompositeExpression";
}, {
    readonly childKinds: readonly ["GraphMatchNodeExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "LeftNode";
    readonly parentKind: "GraphMatchCompositeExpression";
}, {
    readonly childKinds: readonly ["GraphMatchNodeExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "RightNode";
    readonly parentKind: "GraphMatchCompositeExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Edge";
    readonly parentKind: "GraphMatchExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "LeftNode";
    readonly parentKind: "GraphMatchExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "RightNode";
    readonly parentKind: "GraphMatchExpression";
}, {
    readonly childKinds: readonly ["GraphMatchNodeExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "LeftExpression";
    readonly parentKind: "GraphMatchLastNodePredicate";
}, {
    readonly childKinds: readonly ["GraphMatchNodeExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "RightExpression";
    readonly parentKind: "GraphMatchLastNodePredicate";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Node";
    readonly parentKind: "GraphMatchNodeExpression";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "GraphMatchPredicate";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "array";
    readonly edgeName: "Expression";
    readonly parentKind: "GraphMatchRecursivePredicate";
}, {
    readonly childKinds: readonly ["GraphMatchNodeExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "OuterNodeExpression";
    readonly parentKind: "GraphMatchRecursivePredicate";
}, {
    readonly childKinds: readonly ["GraphRecursiveMatchQuantifier"];
    readonly edgeKind: "single";
    readonly edgeName: "RecursiveQuantifier";
    readonly parentKind: "GraphMatchRecursivePredicate";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "LowerLimit";
    readonly parentKind: "GraphRecursiveMatchQuantifier";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "UpperLimit";
    readonly parentKind: "GraphRecursiveMatchQuantifier";
}, {
    readonly childKinds: readonly ["GridParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "GridParameters";
    readonly parentKind: "GridsSpatialIndexOption";
}, {
    readonly childKinds: readonly ["CompositeGroupingSpecification", "CubeGroupingSpecification", "ExpressionGroupingSpecification", "GrandTotalGroupingSpecification", "GroupingSetsGroupingSpecification", "RollupGroupingSpecification"];
    readonly edgeKind: "array";
    readonly edgeName: "GroupingSpecifications";
    readonly parentKind: "GroupByClause";
}, {
    readonly childKinds: readonly ["CompositeGroupingSpecification", "CubeGroupingSpecification", "ExpressionGroupingSpecification", "GrandTotalGroupingSpecification", "GroupingSetsGroupingSpecification", "RollupGroupingSpecification"];
    readonly edgeKind: "array";
    readonly edgeName: "Sets";
    readonly parentKind: "GroupingSetsGroupingSpecification";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "GroupName";
    readonly parentKind: "HadrAvailabilityGroupDatabaseOption";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "HavingClause";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "IdentifierAtomicBlockOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "IdentifierDatabaseOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "IdentifierLiteral";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "IdentifierOrScalarExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ScalarExpression";
    readonly parentKind: "IdentifierOrScalarExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "IdentifierOrValueExpression";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ValueExpression";
    readonly parentKind: "IdentifierOrValueExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "IdentifierPrincipalOption";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "IdentityFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Increment";
    readonly parentKind: "IdentityFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Seed";
    readonly parentKind: "IdentityFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "IdentityIncrement";
    readonly parentKind: "IdentityOptions";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "IdentitySeed";
    readonly parentKind: "IdentityOptions";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "IdentityPhrase";
    readonly parentKind: "IdentityValueKeyOption";
}, {
    readonly childKinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamingJobStatement", "CreateExternalStreamStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamingJobStatement", "DropExternalStreamStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "TSqlStatementSnippet", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    readonly edgeKind: "single";
    readonly edgeName: "ElseStatement";
    readonly parentKind: "IfStatement";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "Predicate";
    readonly parentKind: "IfStatement";
}, {
    readonly childKinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamingJobStatement", "CreateExternalStreamStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamingJobStatement", "DropExternalStreamStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "TSqlStatementSnippet", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    readonly edgeKind: "single";
    readonly edgeName: "ThenStatement";
    readonly parentKind: "IfStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "IIfCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ElseExpression";
    readonly parentKind: "IIfCall";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "Predicate";
    readonly parentKind: "IIfCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ThenExpression";
    readonly parentKind: "IIfCall";
}, {
    readonly childKinds: readonly ["ColumnWithSortOrder"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "IndexDefinition";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOn";
    readonly parentKind: "IndexDefinition";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "FilterPredicate";
    readonly parentKind: "IndexDefinition";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "IncludeColumns";
    readonly parentKind: "IndexDefinition";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "IndexDefinition";
}, {
    readonly childKinds: readonly ["IndexType"];
    readonly edgeKind: "single";
    readonly edgeName: "IndexType";
    readonly parentKind: "IndexDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "IndexDefinition";
}, {
    readonly childKinds: readonly ["FileGroupOrPartitionScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "IndexDefinition";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "IndexExpressionOption";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexValues";
    readonly parentKind: "IndexTableHint";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "InlineDerivedTable";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "InlineDerivedTable";
}, {
    readonly childKinds: readonly ["RowValue"];
    readonly edgeKind: "array";
    readonly edgeName: "RowValues";
    readonly parentKind: "InlineDerivedTable";
}, {
    readonly childKinds: readonly ["ResultColumnDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "ResultColumnDefinitions";
    readonly parentKind: "InlineResultSetDefinition";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "InPredicate";
}, {
    readonly childKinds: readonly ["ScalarSubquery"];
    readonly edgeKind: "single";
    readonly edgeName: "Subquery";
    readonly parentKind: "InPredicate";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Values";
    readonly parentKind: "InPredicate";
}, {
    readonly childKinds: readonly ["ColumnDefinition", "ColumnDefinitionBase", "OpenRowsetColumnDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "InsertBulkColumnDefinition";
}, {
    readonly childKinds: readonly ["InsertBulkColumnDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "ColumnDefinitions";
    readonly parentKind: "InsertBulkStatement";
}, {
    readonly childKinds: readonly ["BulkInsertOption", "LiteralBulkInsertOption", "OrderBulkInsertOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "InsertBulkStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "InsertBulkStatement";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "InsertMergeAction";
}, {
    readonly childKinds: readonly ["ValuesInsertSource"];
    readonly edgeKind: "single";
    readonly edgeName: "Source";
    readonly parentKind: "InsertMergeAction";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "InsertSpecification";
}, {
    readonly childKinds: readonly ["ExecuteInsertSource", "SelectInsertSource", "ValuesInsertSource"];
    readonly edgeKind: "single";
    readonly edgeName: "InsertSource";
    readonly parentKind: "InsertSpecification";
}, {
    readonly childKinds: readonly ["OutputClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OutputClause";
    readonly parentKind: "InsertSpecification";
}, {
    readonly childKinds: readonly ["OutputIntoClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OutputIntoClause";
    readonly parentKind: "InsertSpecification";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "InsertSpecification";
}, {
    readonly childKinds: readonly ["TopRowFilter"];
    readonly edgeKind: "single";
    readonly edgeName: "TopRowFilter";
    readonly parentKind: "InsertSpecification";
}, {
    readonly childKinds: readonly ["InsertSpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "InsertSpecification";
    readonly parentKind: "InsertStatement";
}, {
    readonly childKinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "InsertStatement";
}, {
    readonly childKinds: readonly ["WithCtesAndXmlNamespaces"];
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "InsertStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "IntegerLiteral";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "InternalOpenRowset";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "InternalOpenRowset";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "VarArgs";
    readonly parentKind: "InternalOpenRowset";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Arguments";
    readonly parentKind: "InvokeExternalApiFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "InvokeExternalApiFunctionCall";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "FunctionName";
    readonly parentKind: "InvokeExternalApiFunctionCall";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "FunctionSetName";
    readonly parentKind: "InvokeExternalApiFunctionCall";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "OctetFour";
    readonly parentKind: "IPv4";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "OctetOne";
    readonly parentKind: "IPv4";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "OctetThree";
    readonly parentKind: "IPv4";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "OctetTwo";
    readonly parentKind: "IPv4";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Join";
    readonly parentKind: "JoinParenthesisTableReference";
}, {
    readonly childKinds: readonly ["JsonForClauseOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "JsonForClause";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "JsonForClauseOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "JsonKeyName";
    readonly parentKind: "JsonKeyValue";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "JsonValue";
    readonly parentKind: "JsonKeyValue";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PassPhrase";
    readonly parentKind: "KeySourceKeyOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "SubscriptionId";
    readonly parentKind: "KillQueryNotificationSubscriptionStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "KillStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "JobId";
    readonly parentKind: "KillStatsJobStatement";
}, {
    readonly childKinds: readonly ["LedgerViewOption"];
    readonly edgeKind: "single";
    readonly edgeName: "LedgerViewOption";
    readonly parentKind: "LedgerTableOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "OperationTypeColumnName";
    readonly parentKind: "LedgerViewOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "OperationTypeDescColumnName";
    readonly parentKind: "LedgerViewOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SequenceNumberColumnName";
    readonly parentKind: "LedgerViewOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "TransactionIdColumnName";
    readonly parentKind: "LedgerViewOption";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ViewName";
    readonly parentKind: "LedgerViewOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "LeftFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "LeftFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "EscapeExpression";
    readonly parentKind: "LikePredicate";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "LikePredicate";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "LikePredicate";
}, {
    readonly childKinds: readonly ["IntegerLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "LineNo";
    readonly parentKind: "LineNoStatement";
}, {
    readonly childKinds: readonly ["IPv4"];
    readonly edgeKind: "single";
    readonly edgeName: "IPv4PartOne";
    readonly parentKind: "ListenerIPEndpointProtocolOption";
}, {
    readonly childKinds: readonly ["IPv4"];
    readonly edgeKind: "single";
    readonly edgeName: "IPv4PartTwo";
    readonly parentKind: "ListenerIPEndpointProtocolOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "IPv6";
    readonly parentKind: "ListenerIPEndpointProtocolOption";
}, {
    readonly childKinds: readonly ["CopyColumnOption", "CopyCredentialOption", "ListTypeCopyOption", "SingleValueTypeCopyOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "ListTypeCopyOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralAtomicBlockOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralAuditTargetOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralAvailabilityGroupOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralBulkInsertOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralDatabaseOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralEndpointProtocolOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralOpenRowsetCosmosOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralOptimizerHint";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralOptionValue";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralPayloadOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralPrincipalOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "From";
    readonly parentKind: "LiteralRange";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "LiteralRange";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralReplicaOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralSessionOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Literal";
    readonly parentKind: "LiteralStatisticsOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralTableHint";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "LocationValue";
    readonly parentKind: "LocationOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "MaxDuration";
    readonly parentKind: "LowPriorityLockWaitMaxDurationOption";
}, {
    readonly childKinds: readonly ["LowPriorityLockWaitAbortAfterWaitOption", "LowPriorityLockWaitMaxDurationOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "LowPriorityLockWaitTableSwitchOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "MaxDispatchLatencySessionOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionKind";
    readonly parentKind: "MaxDopConfigurationOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "MaxDopConfigurationOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "MaxDuration";
    readonly parentKind: "MaxDurationOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "MaxLiteral";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "MaxRolloverFilesAuditTargetOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Size";
    readonly parentKind: "MaxSizeAuditTargetOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "MaxSize";
    readonly parentKind: "MaxSizeDatabaseOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "MaxSize";
    readonly parentKind: "MaxSizeFileDeclarationOption";
}, {
    readonly childKinds: readonly ["DeleteMergeAction", "InsertMergeAction", "UpdateMergeAction"];
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "MergeActionClause";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "MergeActionClause";
}, {
    readonly childKinds: readonly ["MergeActionClause"];
    readonly edgeKind: "array";
    readonly edgeName: "ActionClauses";
    readonly parentKind: "MergeSpecification";
}, {
    readonly childKinds: readonly ["OutputClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OutputClause";
    readonly parentKind: "MergeSpecification";
}, {
    readonly childKinds: readonly ["OutputIntoClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OutputIntoClause";
    readonly parentKind: "MergeSpecification";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "MergeSpecification";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "TableAlias";
    readonly parentKind: "MergeSpecification";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TableReference";
    readonly parentKind: "MergeSpecification";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "MergeSpecification";
}, {
    readonly childKinds: readonly ["TopRowFilter"];
    readonly edgeKind: "single";
    readonly edgeName: "TopRowFilter";
    readonly parentKind: "MergeSpecification";
}, {
    readonly childKinds: readonly ["MergeSpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "MergeSpecification";
    readonly parentKind: "MergeStatement";
}, {
    readonly childKinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "MergeStatement";
}, {
    readonly childKinds: readonly ["WithCtesAndXmlNamespaces"];
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "MergeStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AssemblyName";
    readonly parentKind: "MethodSpecifier";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ClassName";
    readonly parentKind: "MethodSpecifier";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodName";
    readonly parentKind: "MethodSpecifier";
}, {
    readonly childKinds: readonly ["DeviceInfo"];
    readonly edgeKind: "array";
    readonly edgeName: "Devices";
    readonly parentKind: "MirrorToClause";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "MoneyLiteral";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Conversation";
    readonly parentKind: "MoveConversationStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Group";
    readonly parentKind: "MoveConversationStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "LogicalFileName";
    readonly parentKind: "MoveRestoreOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "OSFileName";
    readonly parentKind: "MoveRestoreOption";
}, {
    readonly childKinds: readonly ["FileGroupOrPartitionScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "MoveTo";
    readonly parentKind: "MoveToDropIndexOption";
}, {
    readonly childKinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "MultiPartIdentifier";
    readonly parentKind: "MultiPartIdentifierCallTarget";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Identifiers";
    readonly parentKind: "MultiPartIdentifier";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "NamedTableReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObject";
    readonly parentKind: "NamedTableReference";
}, {
    readonly childKinds: readonly ["ForceSeekTableHint", "IndexTableHint", "LiteralTableHint", "TableHint"];
    readonly edgeKind: "array";
    readonly edgeName: "TableHints";
    readonly parentKind: "NamedTableReference";
}, {
    readonly childKinds: readonly ["TableSampleClause"];
    readonly edgeKind: "single";
    readonly edgeName: "TableSampleClause";
    readonly parentKind: "NamedTableReference";
}, {
    readonly childKinds: readonly ["TemporalClause"];
    readonly edgeKind: "single";
    readonly edgeName: "TemporalClause";
    readonly parentKind: "NamedTableReference";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "LogicalFileName";
    readonly parentKind: "NameFileDeclarationOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "NextValueForExpression";
}, {
    readonly childKinds: readonly ["OverClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OverClause";
    readonly parentKind: "NextValueForExpression";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SequenceName";
    readonly parentKind: "NextValueForExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "NullableConstraintDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "NullIfExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "NullIfExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "NullIfExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "NullLiteral";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "NumericLiteral";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "OdbcConvertSpecification";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "OdbcFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "OdbcFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "OdbcFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "OdbcLiteral";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TableReference";
    readonly parentKind: "OdbcQualifiedJoinTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FetchExpression";
    readonly parentKind: "OffsetClause";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "OffsetExpression";
    readonly parentKind: "OffsetClause";
}, {
    readonly childKinds: readonly ["LowPriorityLockWaitAbortAfterWaitOption", "LowPriorityLockWaitMaxDurationOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "OnlineIndexLowPriorityLockWaitOption";
}, {
    readonly childKinds: readonly ["OnlineIndexLowPriorityLockWaitOption"];
    readonly edgeKind: "single";
    readonly edgeName: "LowPriorityLockWaitOption";
    readonly parentKind: "OnlineIndexOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionKind";
    readonly parentKind: "OnOffPrimaryConfigurationOption";
}, {
    readonly childKinds: readonly ["CursorId"];
    readonly edgeKind: "single";
    readonly edgeName: "Cursor";
    readonly parentKind: "OpenCursorStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "OpenJsonTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "RowPattern";
    readonly parentKind: "OpenJsonTableReference";
}, {
    readonly childKinds: readonly ["SchemaDeclarationItemOpenjson"];
    readonly edgeKind: "array";
    readonly edgeName: "SchemaDeclarationItems";
    readonly parentKind: "OpenJsonTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "OpenJsonTableReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "OpenMasterKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "OpenQueryTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "LinkedServer";
    readonly parentKind: "OpenQueryTableReference";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Query";
    readonly parentKind: "OpenQueryTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "OpenRowsetColumnDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnIdentifier";
    readonly parentKind: "OpenRowsetColumnDefinition";
}, {
    readonly childKinds: readonly ["IntegerLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnOrdinal";
    readonly parentKind: "OpenRowsetColumnDefinition";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "OpenRowsetColumnDefinition";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "JsonPath";
    readonly parentKind: "OpenRowsetColumnDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "OpenRowsetCosmos";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "OpenRowsetCosmos";
}, {
    readonly childKinds: readonly ["LiteralOpenRowsetCosmosOption", "OpenRowsetCosmosOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "OpenRowsetCosmos";
}, {
    readonly childKinds: readonly ["OpenRowsetColumnDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "WithColumns";
    readonly parentKind: "OpenRowsetCosmos";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "DataSource";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Object";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ProviderName";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ProviderString";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Query";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "UserId";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly childKinds: readonly ["OpenRowsetColumnDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "WithColumns";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly childKinds: readonly ["CryptoMechanism"];
    readonly edgeKind: "single";
    readonly edgeName: "DecryptionMechanism";
    readonly parentKind: "OpenSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "OpenSymmetricKeyStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Flags";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "RowPattern";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly childKinds: readonly ["SchemaDeclarationItem", "SchemaDeclarationItemOpenjson"];
    readonly edgeKind: "array";
    readonly edgeName: "SchemaDeclarationItems";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "TableName";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly childKinds: readonly ["VariableValuePair"];
    readonly edgeKind: "array";
    readonly edgeName: "Pairs";
    readonly parentKind: "OptimizeForOptimizerHint";
}, {
    readonly childKinds: readonly ["ColumnWithSortOrder"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "OrderBulkInsertOption";
}, {
    readonly childKinds: readonly ["ExpressionWithSortOrder"];
    readonly edgeKind: "array";
    readonly edgeName: "OrderByElements";
    readonly parentKind: "OrderByClause";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "OrderIndexOption";
}, {
    readonly childKinds: readonly ["SelectScalarExpression", "SelectSetVariable", "SelectStarExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "SelectColumns";
    readonly parentKind: "OutputClause";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "IntoTableColumns";
    readonly parentKind: "OutputIntoClause";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "IntoTable";
    readonly parentKind: "OutputIntoClause";
}, {
    readonly childKinds: readonly ["SelectScalarExpression", "SelectSetVariable", "SelectStarExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "SelectColumns";
    readonly parentKind: "OutputIntoClause";
}, {
    readonly childKinds: readonly ["OrderByClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "OverClause";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Partitions";
    readonly parentKind: "OverClause";
}, {
    readonly childKinds: readonly ["WindowFrameClause"];
    readonly edgeKind: "single";
    readonly edgeName: "WindowFrameClause";
    readonly parentKind: "OverClause";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "WindowName";
    readonly parentKind: "OverClause";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ParameterlessCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ParenthesisExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ParenthesisExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ParseCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Culture";
    readonly parentKind: "ParseCall";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ParseCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "StringValue";
    readonly parentKind: "ParseCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "PartitionFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "PartitionFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "FunctionName";
    readonly parentKind: "PartitionFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "PartitionFunctionCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "PartitionParameterType";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "PartitionParameterType";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Number";
    readonly parentKind: "PartitionSpecifier";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "PartnerServer";
    readonly parentKind: "PartnerDatabaseOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Timeout";
    readonly parentKind: "PartnerDatabaseOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "OldPassword";
    readonly parentKind: "PasswordAlterPrincipalOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "PasswordAlterPrincipalOption";
}, {
    readonly childKinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "PasswordCreateLoginSource";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "PasswordCreateLoginSource";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "Permission";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Identifiers";
    readonly parentKind: "Permission";
}, {
    readonly childKinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "AggregateFunctionIdentifier";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "InColumns";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "PivotColumn";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TableReference";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "ValueColumns";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "PredictTableReference";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "NamedTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataSource";
    readonly parentKind: "PredictTableReference";
}, {
    readonly childKinds: readonly ["ScalarSubquery"];
    readonly edgeKind: "single";
    readonly edgeName: "ModelSubquery";
    readonly parentKind: "PredictTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ModelVariable";
    readonly parentKind: "PredictTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "RunTime";
    readonly parentKind: "PredictTableReference";
}, {
    readonly childKinds: readonly ["SchemaDeclarationItem", "SchemaDeclarationItemOpenjson"];
    readonly edgeKind: "array";
    readonly edgeName: "SchemaDeclarationItems";
    readonly parentKind: "PredictTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "PrintStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "Privilege80";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "PrivilegeSecurityElement80";
}, {
    readonly childKinds: readonly ["Privilege80"];
    readonly edgeKind: "array";
    readonly edgeName: "Privileges";
    readonly parentKind: "PrivilegeSecurityElement80";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "PrivilegeSecurityElement80";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ProcedureParameter";
}, {
    readonly childKinds: readonly ["NullableConstraintDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Nullable";
    readonly parentKind: "ProcedureParameter";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ProcedureParameter";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "VariableName";
    readonly parentKind: "ProcedureParameter";
}, {
    readonly childKinds: readonly ["ProcedureReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureReference";
    readonly parentKind: "ProcedureReferenceName";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureVariable";
    readonly parentKind: "ProcedureReferenceName";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ProcedureReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Number";
    readonly parentKind: "ProcedureReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "From";
    readonly parentKind: "ProcessAffinityRange";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "ProcessAffinityRange";
}, {
    readonly childKinds: readonly ["AlgorithmKeyOption", "CreationDispositionKeyOption", "IdentityValueKeyOption", "KeySourceKeyOption", "ProviderKeyNameKeyOption"];
    readonly edgeKind: "array";
    readonly edgeName: "KeyOptions";
    readonly parentKind: "ProviderEncryptionSource";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ProviderEncryptionSource";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "KeyName";
    readonly parentKind: "ProviderKeyNameKeyOption";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstTableReference";
    readonly parentKind: "QualifiedJoin";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "QualifiedJoin";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondTableReference";
    readonly parentKind: "QualifiedJoin";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "QueryDerivedTable";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "QueryDerivedTable";
}, {
    readonly childKinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "QueryDerivedTable";
}, {
    readonly childKinds: readonly ["BrowseForClause", "JsonForClause", "JsonForClauseOption", "ReadOnlyForClause", "UpdateForClause", "XmlForClause", "XmlForClauseOption"];
    readonly edgeKind: "single";
    readonly edgeName: "ForClause";
    readonly parentKind: "QueryParenthesisExpression";
}, {
    readonly childKinds: readonly ["OffsetClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OffsetClause";
    readonly parentKind: "QueryParenthesisExpression";
}, {
    readonly childKinds: readonly ["OrderByClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "QueryParenthesisExpression";
}, {
    readonly childKinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "QueryParenthesisExpression";
}, {
    readonly childKinds: readonly ["BrowseForClause", "JsonForClause", "JsonForClauseOption", "ReadOnlyForClause", "UpdateForClause", "XmlForClause", "XmlForClauseOption"];
    readonly edgeKind: "single";
    readonly edgeName: "ForClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly childKinds: readonly ["FromClause"];
    readonly edgeKind: "single";
    readonly edgeName: "FromClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly childKinds: readonly ["GroupByClause"];
    readonly edgeKind: "single";
    readonly edgeName: "GroupByClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly childKinds: readonly ["HavingClause"];
    readonly edgeKind: "single";
    readonly edgeName: "HavingClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly childKinds: readonly ["OffsetClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OffsetClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly childKinds: readonly ["OrderByClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly childKinds: readonly ["SelectScalarExpression", "SelectSetVariable", "SelectStarExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "SelectElements";
    readonly parentKind: "QuerySpecification";
}, {
    readonly childKinds: readonly ["TopRowFilter"];
    readonly edgeKind: "single";
    readonly edgeName: "TopRowFilter";
    readonly parentKind: "QuerySpecification";
}, {
    readonly childKinds: readonly ["WhereClause"];
    readonly edgeKind: "single";
    readonly edgeName: "WhereClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly childKinds: readonly ["WindowClause"];
    readonly edgeKind: "single";
    readonly edgeName: "WindowClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly childKinds: readonly ["QueryStoreCapturePolicyOption", "QueryStoreDataFlushIntervalOption", "QueryStoreDesiredStateOption", "QueryStoreIntervalLengthOption", "QueryStoreMaxPlansPerQueryOption", "QueryStoreMaxStorageSizeOption", "QueryStoreSizeCleanupPolicyOption", "QueryStoreTimeCleanupPolicyOption", "QueryStoreWaitStatsCaptureOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "QueryStoreDatabaseOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "FlushInterval";
    readonly parentKind: "QueryStoreDataFlushIntervalOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "StatsIntervalLength";
    readonly parentKind: "QueryStoreIntervalLengthOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "MaxPlansPerQuery";
    readonly parentKind: "QueryStoreMaxPlansPerQueryOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "MaxQdsSize";
    readonly parentKind: "QueryStoreMaxStorageSizeOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "StaleQueryThreshold";
    readonly parentKind: "QueryStoreTimeCleanupPolicyOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Delay";
    readonly parentKind: "QueueDelayAuditOption";
}, {
    readonly childKinds: readonly ["ExecuteAsClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "QueueExecuteAsOption";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "QueueProcedureOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "QueueValueOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstParameter";
    readonly parentKind: "RaiseErrorLegacyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondParameter";
    readonly parentKind: "RaiseErrorLegacyStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstParameter";
    readonly parentKind: "RaiseErrorStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "OptionalParameters";
    readonly parentKind: "RaiseErrorStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondParameter";
    readonly parentKind: "RaiseErrorStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ThirdParameter";
    readonly parentKind: "RaiseErrorStatement";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "ReadTextStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Offset";
    readonly parentKind: "ReadTextStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Size";
    readonly parentKind: "ReadTextStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TextPointer";
    readonly parentKind: "ReadTextStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "RealLiteral";
}, {
    readonly childKinds: readonly ["VariableTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Into";
    readonly parentKind: "ReceiveStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Queue";
    readonly parentKind: "ReceiveStatement";
}, {
    readonly childKinds: readonly ["SelectScalarExpression", "SelectSetVariable", "SelectStarExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "SelectElements";
    readonly parentKind: "ReceiveStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Top";
    readonly parentKind: "ReceiveStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Where";
    readonly parentKind: "ReceiveStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Flags";
    readonly parentKind: "RegexpLikePredicate";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Pattern";
    readonly parentKind: "RegexpLikePredicate";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Text";
    readonly parentKind: "RegexpLikePredicate";
}, {
    readonly childKinds: readonly ["FunctionCall"];
    readonly edgeKind: "single";
    readonly edgeName: "FilterPredicate";
    readonly parentKind: "RemoteDataArchiveAlterTableOption";
}, {
    readonly childKinds: readonly ["RemoteDataArchiveDbCredentialSetting", "RemoteDataArchiveDbFederatedServiceAccountSetting", "RemoteDataArchiveDbServerSetting"];
    readonly edgeKind: "array";
    readonly edgeName: "Settings";
    readonly parentKind: "RemoteDataArchiveDatabaseOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Credential";
    readonly parentKind: "RemoteDataArchiveDbCredentialSetting";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Server";
    readonly parentKind: "RemoteDataArchiveDbServerSetting";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "NewName";
    readonly parentKind: "RenameAlterRoleAction";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "NewName";
    readonly parentKind: "RenameEntityStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "OldName";
    readonly parentKind: "RenameEntityStatement";
}, {
    readonly childKinds: readonly ["StatisticsPartitionRange"];
    readonly edgeKind: "array";
    readonly edgeName: "Partitions";
    readonly parentKind: "ResampleStatisticsOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "ResourcePoolAffinitySpecification";
}, {
    readonly childKinds: readonly ["LiteralRange", "ProcessAffinityRange"];
    readonly edgeKind: "array";
    readonly edgeName: "PoolAffinityRanges";
    readonly parentKind: "ResourcePoolAffinitySpecification";
}, {
    readonly childKinds: readonly ["ResourcePoolAffinitySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "AffinitySpecification";
    readonly parentKind: "ResourcePoolParameter";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "ResourcePoolParameter";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ResourcePoolStatement";
}, {
    readonly childKinds: readonly ["ResourcePoolParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "ResourcePoolParameters";
    readonly parentKind: "ResourcePoolStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionPassword";
    readonly parentKind: "RestoreMasterKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "RestoreMasterKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "RestoreMasterKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "RestoreServiceMasterKeyStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "RestoreServiceMasterKeyStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "RestoreStatement";
}, {
    readonly childKinds: readonly ["DeviceInfo"];
    readonly edgeKind: "array";
    readonly edgeName: "Devices";
    readonly parentKind: "RestoreStatement";
}, {
    readonly childKinds: readonly ["BackupRestoreFileInfo"];
    readonly edgeKind: "array";
    readonly edgeName: "Files";
    readonly parentKind: "RestoreStatement";
}, {
    readonly childKinds: readonly ["FileStreamRestoreOption", "MoveRestoreOption", "RestoreOption", "ScalarExpressionRestoreOption", "StopRestoreOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "RestoreStatement";
}, {
    readonly childKinds: readonly ["ColumnDefinition", "ColumnDefinitionBase", "OpenRowsetColumnDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnDefinition";
    readonly parentKind: "ResultColumnDefinition";
}, {
    readonly childKinds: readonly ["NullableConstraintDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "Nullable";
    readonly parentKind: "ResultColumnDefinition";
}, {
    readonly childKinds: readonly ["InlineResultSetDefinition", "ResultSetDefinition", "SchemaObjectResultSetDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "Definitions";
    readonly parentKind: "ResultSetsExecuteOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Days";
    readonly parentKind: "RetentionDaysAuditTargetOption";
}, {
    readonly childKinds: readonly ["IntegerLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Duration";
    readonly parentKind: "RetentionPeriodDefinition";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ReturnStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Cookie";
    readonly parentKind: "RevertStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AsClause";
    readonly parentKind: "RevokeStatement80";
}, {
    readonly childKinds: readonly ["CommandSecurityElement80", "PrivilegeSecurityElement80"];
    readonly edgeKind: "single";
    readonly edgeName: "SecurityElement80";
    readonly parentKind: "RevokeStatement80";
}, {
    readonly childKinds: readonly ["SecurityUserClause80"];
    readonly edgeKind: "single";
    readonly edgeName: "SecurityUserClause80";
    readonly parentKind: "RevokeStatement80";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "AsClause";
    readonly parentKind: "RevokeStatement";
}, {
    readonly childKinds: readonly ["Permission"];
    readonly edgeKind: "array";
    readonly edgeName: "Permissions";
    readonly parentKind: "RevokeStatement";
}, {
    readonly childKinds: readonly ["SecurityPrincipal"];
    readonly edgeKind: "array";
    readonly edgeName: "Principals";
    readonly parentKind: "RevokeStatement";
}, {
    readonly childKinds: readonly ["SecurityTargetObject"];
    readonly edgeKind: "single";
    readonly edgeName: "SecurityTargetObject";
    readonly parentKind: "RevokeStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "RightFunctionCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "RightFunctionCall";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "RollbackTransactionStatement";
}, {
    readonly childKinds: readonly ["CompositeGroupingSpecification", "CubeGroupingSpecification", "ExpressionGroupingSpecification", "GrandTotalGroupingSpecification", "GroupingSetsGroupingSpecification", "RollupGroupingSpecification"];
    readonly edgeKind: "array";
    readonly edgeName: "Arguments";
    readonly parentKind: "RollupGroupingSpecification";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Literal";
    readonly parentKind: "RouteOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "ColumnValues";
    readonly parentKind: "RowValue";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "SaveTransactionStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ScalarExpressionDialogOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ScalarExpressionRestoreOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "ScalarExpressionSequenceOption";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ScalarFunctionReturnType";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ScalarSubquery";
}, {
    readonly childKinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "ScalarSubquery";
}, {
    readonly childKinds: readonly ["ColumnDefinition", "ColumnDefinitionBase", "OpenRowsetColumnDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnDefinition";
    readonly parentKind: "SchemaDeclarationItem";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Mapping";
    readonly parentKind: "SchemaDeclarationItem";
}, {
    readonly childKinds: readonly ["ColumnDefinition", "ColumnDefinitionBase", "OpenRowsetColumnDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnDefinition";
    readonly parentKind: "SchemaDeclarationItemOpenjson";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Mapping";
    readonly parentKind: "SchemaDeclarationItemOpenjson";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "SchemaObjectFunctionTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "SchemaObjectFunctionTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "SchemaObjectFunctionTableReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObject";
    readonly parentKind: "SchemaObjectFunctionTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "BaseIdentifier";
    readonly parentKind: "SchemaObjectName";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseIdentifier";
    readonly parentKind: "SchemaObjectName";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Identifiers";
    readonly parentKind: "SchemaObjectName";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "SchemaObjectNameOrValueExpression";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ValueExpression";
    readonly parentKind: "SchemaObjectNameOrValueExpression";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaIdentifier";
    readonly parentKind: "SchemaObjectName";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ServerIdentifier";
    readonly parentKind: "SchemaObjectName";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "BaseIdentifier";
    readonly parentKind: "SchemaObjectNameSnippet";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseIdentifier";
    readonly parentKind: "SchemaObjectNameSnippet";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Identifiers";
    readonly parentKind: "SchemaObjectNameSnippet";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaIdentifier";
    readonly parentKind: "SchemaObjectNameSnippet";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ServerIdentifier";
    readonly parentKind: "SchemaObjectNameSnippet";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "SchemaObjectResultSetDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "SearchedCaseExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ElseExpression";
    readonly parentKind: "SearchedCaseExpression";
}, {
    readonly childKinds: readonly ["SearchedWhenClause"];
    readonly edgeKind: "array";
    readonly edgeName: "WhenClauses";
    readonly parentKind: "SearchedCaseExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ThenExpression";
    readonly parentKind: "SearchedWhenClause";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "WhenExpression";
    readonly parentKind: "SearchedWhenClause";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "PropertyListName";
    readonly parentKind: "SearchPropertyListFullTextIndexOption";
}, {
    readonly childKinds: readonly ["FunctionCall"];
    readonly edgeKind: "single";
    readonly edgeName: "FunctionCall";
    readonly parentKind: "SecurityPredicateAction";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "TargetObjectName";
    readonly parentKind: "SecurityPredicateAction";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "SecurityPrincipal";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "SecurityTargetObject";
}, {
    readonly childKinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "MultiPartIdentifier";
    readonly parentKind: "SecurityTargetObjectName";
}, {
    readonly childKinds: readonly ["SecurityTargetObjectName"];
    readonly edgeKind: "single";
    readonly edgeName: "ObjectName";
    readonly parentKind: "SecurityTargetObject";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Users";
    readonly parentKind: "SecurityUserClause80";
}, {
    readonly childKinds: readonly ["SelectStatement", "SelectStatementSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "SelectFunctionReturnType";
}, {
    readonly childKinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "Select";
    readonly parentKind: "SelectInsertSource";
}, {
    readonly childKinds: readonly ["IntegerLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "MaxLength";
    readonly parentKind: "SelectiveXmlIndexPromotedPath";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "SelectiveXmlIndexPromotedPath";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Path";
    readonly parentKind: "SelectiveXmlIndexPromotedPath";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SQLDataType";
    readonly parentKind: "SelectiveXmlIndexPromotedPath";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "XQueryDataType";
    readonly parentKind: "SelectiveXmlIndexPromotedPath";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnName";
    readonly parentKind: "SelectScalarExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "SelectScalarExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "SelectSetVariable";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "SelectSetVariable";
}, {
    readonly childKinds: readonly ["ChildObjectName", "MultiPartIdentifier", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Qualifier";
    readonly parentKind: "SelectStarExpression";
}, {
    readonly childKinds: readonly ["ComputeClause"];
    readonly edgeKind: "array";
    readonly edgeName: "ComputeClauses";
    readonly parentKind: "SelectStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Into";
    readonly parentKind: "SelectStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "On";
    readonly parentKind: "SelectStatement";
}, {
    readonly childKinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "SelectStatement";
}, {
    readonly childKinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "SelectStatement";
}, {
    readonly childKinds: readonly ["ComputeClause"];
    readonly edgeKind: "array";
    readonly edgeName: "ComputeClauses";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Into";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "On";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly childKinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly childKinds: readonly ["BinaryQueryExpression", "QueryParenthesisExpression", "QuerySpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly childKinds: readonly ["WithCtesAndXmlNamespaces"];
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly childKinds: readonly ["WithCtesAndXmlNamespaces"];
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "SelectStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "SemanticIndexChunkOption";
}, {
    readonly childKinds: readonly ["SemanticIndexChunkOption"];
    readonly edgeKind: "array";
    readonly edgeName: "ChunkOptions";
    readonly parentKind: "SemanticIndexColumn";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ColumnName";
    readonly parentKind: "SemanticIndexColumn";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Language";
    readonly parentKind: "SemanticIndexColumn";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "TypeColumnName";
    readonly parentKind: "SemanticIndexColumn";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "MatchedColumn";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "MatchedKey";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SourceKey";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "TableName";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "ConversationHandles";
    readonly parentKind: "SendStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "MessageBody";
    readonly parentKind: "SendStatement";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "MessageTypeName";
    readonly parentKind: "SendStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "SensitivityClassificationOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ServiceContract";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Timeout";
    readonly parentKind: "SessionTimeoutPayloadOption";
}, {
    readonly childKinds: readonly ["GeneralSetCommand", "SetFipsFlaggerCommand"];
    readonly edgeKind: "array";
    readonly edgeName: "Commands";
    readonly parentKind: "SetCommandStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Level";
    readonly parentKind: "SetErrorLevelStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Table";
    readonly parentKind: "SetIdentityInsertStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "NumberRows";
    readonly parentKind: "SetRowCountStatement";
}, {
    readonly childKinds: readonly ["SearchPropertyListFullTextIndexOption"];
    readonly edgeKind: "single";
    readonly edgeName: "SearchPropertyListOption";
    readonly parentKind: "SetSearchPropertyListAlterFullTextIndexAction";
}, {
    readonly childKinds: readonly ["StopListFullTextIndexOption"];
    readonly edgeKind: "single";
    readonly edgeName: "StopListOption";
    readonly parentKind: "SetStopListAlterFullTextIndexAction";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TextSize";
    readonly parentKind: "SetTextSizeStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "UserName";
    readonly parentKind: "SetUserStatement";
}, {
    readonly childKinds: readonly ["CursorDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "CursorDefinition";
    readonly parentKind: "SetVariableStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "SetVariableStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "SetVariableStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "SetVariableStatement";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "SetVariableStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "SimpleCaseExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ElseExpression";
    readonly parentKind: "SimpleCaseExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "InputExpression";
    readonly parentKind: "SimpleCaseExpression";
}, {
    readonly childKinds: readonly ["SimpleWhenClause"];
    readonly edgeKind: "array";
    readonly edgeName: "WhenClauses";
    readonly parentKind: "SimpleCaseExpression";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ThenExpression";
    readonly parentKind: "SimpleWhenClause";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "WhenExpression";
    readonly parentKind: "SimpleWhenClause";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "SingleValue";
    readonly parentKind: "SingleValueTypeCopyOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Size";
    readonly parentKind: "SizeFileDeclarationOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "SoapMethod";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "SoapMethod";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Namespace";
    readonly parentKind: "SoapMethod";
}, {
    readonly childKinds: readonly ["EventSessionObjectName"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "SourceDeclaration";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "single";
    readonly edgeName: "Option";
    readonly parentKind: "SpatialIndexRegularOption";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "SqlDataTypeReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "SqlDataTypeReference";
}, {
    readonly childKinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamingJobStatement", "CreateExternalStreamStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamingJobStatement", "DropExternalStreamStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "TSqlStatementSnippet", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    readonly edgeKind: "array";
    readonly edgeName: "Statements";
    readonly parentKind: "StatementListSnippet";
}, {
    readonly childKinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamingJobStatement", "CreateExternalStreamStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamingJobStatement", "DropExternalStreamStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "TSqlStatementSnippet", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    readonly edgeKind: "array";
    readonly edgeName: "Statements";
    readonly parentKind: "StatementList";
}, {
    readonly childKinds: readonly ["IntegerLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "From";
    readonly parentKind: "StatisticsPartitionRange";
}, {
    readonly childKinds: readonly ["IntegerLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "StatisticsPartitionRange";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "StopListName";
    readonly parentKind: "StopListFullTextIndexOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "After";
    readonly parentKind: "StopRestoreOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Mark";
    readonly parentKind: "StopRestoreOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "StringLiteral";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "SubqueryComparisonPredicate";
}, {
    readonly childKinds: readonly ["ScalarSubquery"];
    readonly edgeKind: "single";
    readonly edgeName: "Subquery";
    readonly parentKind: "SubqueryComparisonPredicate";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "EndTimeColumn";
    readonly parentKind: "SystemTimePeriodDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "StartTimeColumn";
    readonly parentKind: "SystemTimePeriodDefinition";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "HistoryTable";
    readonly parentKind: "SystemVersioningTableOption";
}, {
    readonly childKinds: readonly ["RetentionPeriodDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "RetentionPeriod";
    readonly parentKind: "SystemVersioningTableOption";
}, {
    readonly childKinds: readonly ["ColumnWithSortOrder"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "TableClusteredIndexType";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "OrderedColumns";
    readonly parentKind: "TableClusteredIndexType";
}, {
    readonly childKinds: readonly ["DataCompressionOption"];
    readonly edgeKind: "single";
    readonly edgeName: "DataCompressionOption";
    readonly parentKind: "TableDataCompressionOption";
}, {
    readonly childKinds: readonly ["ColumnDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "ColumnDefinitions";
    readonly parentKind: "TableDefinition";
}, {
    readonly childKinds: readonly ["IndexDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "Indexes";
    readonly parentKind: "TableDefinition";
}, {
    readonly childKinds: readonly ["SystemTimePeriodDefinition"];
    readonly edgeKind: "single";
    readonly edgeName: "SystemTimePeriod";
    readonly parentKind: "TableDefinition";
}, {
    readonly childKinds: readonly ["CheckConstraintDefinition", "DefaultConstraintDefinition", "ForeignKeyConstraintDefinition", "GraphConnectionConstraintDefinition", "NullableConstraintDefinition", "UniqueConstraintDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "TableConstraints";
    readonly parentKind: "TableDefinition";
}, {
    readonly childKinds: readonly ["TableHashDistributionPolicy", "TableReplicateDistributionPolicy", "TableRoundRobinDistributionPolicy"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "TableDistributionOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "DistributionColumns";
    readonly parentKind: "TableHashDistributionPolicy";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DistributionColumn";
    readonly parentKind: "TableHashDistributionPolicy";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "ObjectName";
    readonly parentKind: "TableHintsOptimizerHint";
}, {
    readonly childKinds: readonly ["ForceSeekTableHint", "IndexTableHint", "LiteralTableHint", "TableHint"];
    readonly edgeKind: "array";
    readonly edgeName: "TableHints";
    readonly parentKind: "TableHintsOptimizerHint";
}, {
    readonly childKinds: readonly ["TableClusteredIndexType", "TableNonClusteredIndexType"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "TableIndexOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "PartitionColumn";
    readonly parentKind: "TablePartitionOption";
}, {
    readonly childKinds: readonly ["TablePartitionOptionSpecifications"];
    readonly edgeKind: "single";
    readonly edgeName: "PartitionOptionSpecs";
    readonly parentKind: "TablePartitionOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "BoundaryValues";
    readonly parentKind: "TablePartitionOptionSpecifications";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "RepeatSeed";
    readonly parentKind: "TableSampleClause";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SampleNumber";
    readonly parentKind: "TableSampleClause";
}, {
    readonly childKinds: readonly ["DeclareTableVariableBody"];
    readonly edgeKind: "single";
    readonly edgeName: "DeclareTableVariableBody";
    readonly parentKind: "TableValuedFunctionReturnType";
}, {
    readonly childKinds: readonly ["XmlCompressionOption"];
    readonly edgeKind: "single";
    readonly edgeName: "XmlCompressionOption";
    readonly parentKind: "TableXmlCompressionOption";
}, {
    readonly childKinds: readonly ["EventSessionObjectName"];
    readonly edgeKind: "single";
    readonly edgeName: "ObjectName";
    readonly parentKind: "TargetDeclaration";
}, {
    readonly childKinds: readonly ["EventDeclarationSetParameter"];
    readonly edgeKind: "array";
    readonly edgeName: "TargetDeclarationParameters";
    readonly parentKind: "TargetDeclaration";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "RecoveryTime";
    readonly parentKind: "TargetRecoveryTimeDatabaseOption";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "EndTime";
    readonly parentKind: "TemporalClause";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "StartTime";
    readonly parentKind: "TemporalClause";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ErrorNumber";
    readonly parentKind: "ThrowStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Message";
    readonly parentKind: "ThrowStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "State";
    readonly parentKind: "ThrowStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "TopRowFilter";
}, {
    readonly childKinds: readonly ["EventGroupContainer", "EventTypeContainer"];
    readonly edgeKind: "single";
    readonly edgeName: "EventTypeGroup";
    readonly parentKind: "TriggerAction";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "TriggerObject";
}, {
    readonly childKinds: readonly ["CompressionPartitionRange"];
    readonly edgeKind: "array";
    readonly edgeName: "PartitionRanges";
    readonly parentKind: "TruncateTableStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "TableName";
    readonly parentKind: "TruncateTableStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "TryCastCall";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "TryCastCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "TryCastCall";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "CatchStatements";
    readonly parentKind: "TryCatchStatement";
}, {
    readonly childKinds: readonly ["StatementList", "StatementListSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "TryStatements";
    readonly parentKind: "TryCatchStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "TryConvertCall";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "TryConvertCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "TryConvertCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Style";
    readonly parentKind: "TryConvertCall";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "TryParseCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Culture";
    readonly parentKind: "TryParseCall";
}, {
    readonly childKinds: readonly ["SqlDataTypeReference", "UserDataTypeReference", "VectorDataTypeReference", "XmlDataTypeReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "TryParseCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "StringValue";
    readonly parentKind: "TryParseCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "TSEqualCall";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "TSEqualCall";
}, {
    readonly childKinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamingJobStatement", "CreateExternalStreamStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamingJobStatement", "DropExternalStreamStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "TSqlStatementSnippet", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    readonly edgeKind: "array";
    readonly edgeName: "Statements";
    readonly parentKind: "TSqlBatch";
}, {
    readonly childKinds: readonly ["TSqlBatch"];
    readonly edgeKind: "array";
    readonly edgeName: "Batches";
    readonly parentKind: "TSqlScript";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "UnaryExpression";
}, {
    readonly childKinds: readonly ["ColumnWithSortOrder"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly childKinds: readonly ["IdentifierOrValueExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOn";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly childKinds: readonly ["CompressionDelayIndexOption", "DataCompressionOption", "FileStreamOnDropIndexOption", "IgnoreDupKeyIndexOption", "IndexExpressionOption", "IndexStateOption", "MaxDurationOption", "MoveToDropIndexOption", "OnlineIndexOption", "OrderIndexOption", "VectorMetricIndexOption", "VectorTypeIndexOption", "WaitAtLowPriorityOption", "XmlCompressionOption"];
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly childKinds: readonly ["IndexType"];
    readonly edgeKind: "single";
    readonly edgeName: "IndexType";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly childKinds: readonly ["FileGroupOrPartitionScheme"];
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "UnpivotedTableReference";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "InColumns";
    readonly parentKind: "UnpivotedTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "PivotColumn";
    readonly parentKind: "UnpivotedTableReference";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TableReference";
    readonly parentKind: "UnpivotedTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "ValueColumn";
    readonly parentKind: "UnpivotedTableReference";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "FirstTableReference";
    readonly parentKind: "UnqualifiedJoin";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SecondTableReference";
    readonly parentKind: "UnqualifiedJoin";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "UpdateCall";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "UpdateForClause";
}, {
    readonly childKinds: readonly ["AssignmentSetClause", "FunctionCallSetClause"];
    readonly edgeKind: "array";
    readonly edgeName: "SetClauses";
    readonly parentKind: "UpdateMergeAction";
}, {
    readonly childKinds: readonly ["FromClause"];
    readonly edgeKind: "single";
    readonly edgeName: "FromClause";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly childKinds: readonly ["OutputClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OutputClause";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly childKinds: readonly ["OutputIntoClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OutputIntoClause";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly childKinds: readonly ["AssignmentSetClause", "FunctionCallSetClause"];
    readonly edgeKind: "array";
    readonly edgeName: "SetClauses";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "JoinParenthesisTableReference", "NamedTableReference", "OdbcQualifiedJoinTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QualifiedJoin", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "UnqualifiedJoin", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly childKinds: readonly ["TopRowFilter"];
    readonly edgeKind: "single";
    readonly edgeName: "TopRowFilter";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly childKinds: readonly ["WhereClause"];
    readonly edgeKind: "single";
    readonly edgeName: "WhereClause";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly childKinds: readonly ["LiteralOptimizerHint", "OptimizeForOptimizerHint", "OptimizerHint", "TableHintsOptimizerHint", "UseHintList"];
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "UpdateStatement";
}, {
    readonly childKinds: readonly ["UpdateSpecification"];
    readonly edgeKind: "single";
    readonly edgeName: "UpdateSpecification";
    readonly parentKind: "UpdateStatement";
}, {
    readonly childKinds: readonly ["WithCtesAndXmlNamespaces"];
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "UpdateStatement";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "UpdateStatisticsStatement";
}, {
    readonly childKinds: readonly ["LiteralStatisticsOption", "OnOffStatisticsOption", "ResampleStatisticsOption", "StatisticsOption"];
    readonly edgeKind: "array";
    readonly edgeName: "StatisticsOptions";
    readonly parentKind: "UpdateStatisticsStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "SubElements";
    readonly parentKind: "UpdateStatisticsStatement";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "DeleteLength";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "InsertOffset";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "SourceColumn";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SourceParameter";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TextId";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Timestamp";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DistributionName";
    readonly parentKind: "UseFederationStatement";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "FederationName";
    readonly parentKind: "UseFederationStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "UseFederationStatement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "array";
    readonly edgeName: "Hints";
    readonly parentKind: "UseHintList";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "UserDataTypeReference";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "UserDataTypeReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "UserDefinedTypeCallTarget";
}, {
    readonly childKinds: readonly ["ExpressionCallTarget", "MultiPartIdentifierCallTarget", "UserDefinedTypeCallTarget"];
    readonly edgeKind: "single";
    readonly edgeName: "CallTarget";
    readonly parentKind: "UserDefinedTypePropertyAccess";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "UserDefinedTypePropertyAccess";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "PropertyName";
    readonly parentKind: "UserDefinedTypePropertyAccess";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "UserLoginOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "User";
    readonly parentKind: "UserRemoteServiceBindingOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "UseStatement";
}, {
    readonly childKinds: readonly ["RowValue"];
    readonly edgeKind: "array";
    readonly edgeName: "RowValues";
    readonly parentKind: "ValuesInsertSource";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "VariableMethodCallTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "VariableMethodCallTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "MethodName";
    readonly parentKind: "VariableMethodCallTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "VariableMethodCallTableReference";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "VariableMethodCallTableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "VariableReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "VariableTableReference";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "VariableTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "VariableValuePair";
}, {
    readonly childKinds: readonly ["VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "VariableValuePair";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "BaseType";
    readonly parentKind: "VectorDataTypeReference";
}, {
    readonly childKinds: readonly ["IntegerLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Dimension";
    readonly parentKind: "VectorDataTypeReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "VectorDataTypeReference";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Metric";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SimilarTo";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly childKinds: readonly ["AdHocTableReference", "AIGenerateChunksTableReference", "AIGenerateFixedChunksTableReference", "BuiltInFunctionTableReference", "BulkOpenRowset", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "DataModificationTableReference", "FullTextTableReference", "GlobalFunctionTableReference", "InlineDerivedTable", "InternalOpenRowset", "NamedTableReference", "OpenJsonTableReference", "OpenQueryTableReference", "OpenRowsetCosmos", "OpenRowsetTableReference", "OpenXmlTableReference", "PivotedTableReference", "PredictTableReference", "QueryDerivedTable", "SchemaObjectFunctionTableReference", "SemanticTableReference", "UnpivotedTableReference", "VariableMethodCallTableReference", "VariableTableReference", "VectorSearchTableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Table";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TopN";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly childKinds: readonly ["ViewHashDistributionPolicy", "ViewRoundRobinDistributionPolicy"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ViewDistributionOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "array";
    readonly edgeName: "DistributionColumns";
    readonly parentKind: "ViewHashDistributionPolicy";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "DistributionColumn";
    readonly parentKind: "ViewHashDistributionPolicy";
}, {
    readonly childKinds: readonly ["LowPriorityLockWaitAbortAfterWaitOption", "LowPriorityLockWaitMaxDurationOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "WaitAtLowPriorityOption";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "WaitForStatement";
}, {
    readonly childKinds: readonly ["GetConversationGroupStatement", "ReceiveStatement"];
    readonly edgeKind: "single";
    readonly edgeName: "Statement";
    readonly parentKind: "WaitForStatement";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "Timeout";
    readonly parentKind: "WaitForStatement";
}, {
    readonly childKinds: readonly ["CursorId"];
    readonly edgeKind: "single";
    readonly edgeName: "Cursor";
    readonly parentKind: "WhereClause";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "WhereClause";
}, {
    readonly childKinds: readonly ["BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "DistinctPredicate", "EventDeclarationCompareFunctionParameter", "ExistsPredicate", "FullTextPredicate", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "InPredicate", "LikePredicate", "RegexpLikePredicate", "SubqueryComparisonPredicate", "TSEqualCall", "UpdateCall"];
    readonly edgeKind: "single";
    readonly edgeName: "Predicate";
    readonly parentKind: "WhileStatement";
}, {
    readonly childKinds: readonly ["AddSensitivityClassificationStatement", "AddSignatureStatement", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupMasterKeyStatement", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BreakStatement", "BulkInsertStatement", "CheckpointStatement", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "CommitTransactionStatement", "ContinueStatement", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamingJobStatement", "CreateExternalStreamStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableStatement", "DeclareVariableStatement", "DeleteStatement", "DenyStatement", "DenyStatement80", "DiskStatement", "DropAggregateStatement", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamingJobStatement", "DropExternalStreamStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "EnableDisableTriggerStatement", "EndConversationStatement", "EventSessionStatement", "ExecuteAsStatement", "ExecuteStatement", "ExternalResourcePoolStatement", "FetchCursorStatement", "GetConversationGroupStatement", "GoToStatement", "GrantStatement", "GrantStatement80", "IfStatement", "IndexDefinition", "InsertBulkStatement", "InsertStatement", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LineNoStatement", "MergeStatement", "MoveConversationStatement", "OpenCursorStatement", "OpenMasterKeyStatement", "OpenSymmetricKeyStatement", "PredicateSetStatement", "PrintStatement", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadTextStatement", "ReceiveStatement", "ReconfigureStatement", "RenameEntityStatement", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RollbackTransactionStatement", "SaveTransactionStatement", "SelectStatement", "SelectStatementSnippet", "SendStatement", "SetCommandStatement", "SetErrorLevelStatement", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetStatisticsStatement", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "ThrowStatement", "TruncateTableStatement", "TryCatchStatement", "TSqlStatementSnippet", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseStatement", "WaitForStatement", "WhileStatement", "WriteTextStatement"];
    readonly edgeKind: "single";
    readonly edgeName: "Statement";
    readonly parentKind: "WhileStatement";
}, {
    readonly childKinds: readonly ["WindowDefinition"];
    readonly edgeKind: "array";
    readonly edgeName: "WindowDefinition";
    readonly parentKind: "WindowClause";
}, {
    readonly childKinds: readonly ["OrderByClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "WindowDefinition";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "array";
    readonly edgeName: "Partitions";
    readonly parentKind: "WindowDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "RefWindowName";
    readonly parentKind: "WindowDefinition";
}, {
    readonly childKinds: readonly ["WindowFrameClause"];
    readonly edgeKind: "single";
    readonly edgeName: "WindowFrameClause";
    readonly parentKind: "WindowDefinition";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "WindowName";
    readonly parentKind: "WindowDefinition";
}, {
    readonly childKinds: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateEmbeddingsFunctionCall", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AtTimeZoneCall", "BinaryExpression", "BinaryLiteral", "CastCall", "CoalesceExpression", "ColumnReferenceExpression", "ConvertCall", "DefaultLiteral", "ExtractFromExpression", "FunctionCall", "GlobalVariableExpression", "IdentifierLiteral", "IdentityFunctionCall", "IIfCall", "IntegerLiteral", "InvokeExternalApiFunctionCall", "JsonKeyValue", "LeftFunctionCall", "MaxLiteral", "MoneyLiteral", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "RealLiteral", "RightFunctionCall", "ScalarExpressionSnippet", "ScalarSubquery", "SearchedCaseExpression", "SimpleCaseExpression", "SourceDeclaration", "StringLiteral", "TryCastCall", "TryConvertCall", "TryParseCall", "UnaryExpression", "UserDefinedTypePropertyAccess", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "OffsetValue";
    readonly parentKind: "WindowDelimiter";
}, {
    readonly childKinds: readonly ["WindowDelimiter"];
    readonly edgeKind: "single";
    readonly edgeName: "Bottom";
    readonly parentKind: "WindowFrameClause";
}, {
    readonly childKinds: readonly ["WindowDelimiter"];
    readonly edgeKind: "single";
    readonly edgeName: "Top";
    readonly parentKind: "WindowFrameClause";
}, {
    readonly childKinds: readonly ["IdentifierPrincipalOption", "LiteralPrincipalOption", "OnOffPrincipalOption", "PasswordAlterPrincipalOption", "PrincipalOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "WindowsCreateLoginSource";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "ChangeTrackingContext";
    readonly parentKind: "WithCtesAndXmlNamespaces";
}, {
    readonly childKinds: readonly ["CommonTableExpression"];
    readonly edgeKind: "array";
    readonly edgeName: "CommonTableExpressions";
    readonly parentKind: "WithCtesAndXmlNamespaces";
}, {
    readonly childKinds: readonly ["XmlNamespaces"];
    readonly edgeKind: "single";
    readonly edgeName: "XmlNamespaces";
    readonly parentKind: "WithCtesAndXmlNamespaces";
}, {
    readonly childKinds: readonly ["OrderByClause"];
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "WithinGroupClause";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "WitnessServer";
    readonly parentKind: "WitnessDatabaseOption";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "TimeString";
    readonly parentKind: "WlmTimeLiteral";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "WorkloadGroupResourceParameter";
}, {
    readonly childKinds: readonly ["ColumnReferenceExpression"];
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "WriteTextStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "SourceParameter";
    readonly parentKind: "WriteTextStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "GlobalVariableExpression", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral", "VariableReference"];
    readonly edgeKind: "single";
    readonly edgeName: "TextId";
    readonly parentKind: "WriteTextStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Timestamp";
    readonly parentKind: "WriteTextStatement";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "WsdlPayloadOption";
}, {
    readonly childKinds: readonly ["CompressionPartitionRange"];
    readonly edgeKind: "array";
    readonly edgeName: "PartitionRanges";
    readonly parentKind: "XmlCompressionOption";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "XmlDataTypeReference";
}, {
    readonly childKinds: readonly ["ChildObjectName", "SchemaObjectName", "SchemaObjectNameSnippet"];
    readonly edgeKind: "single";
    readonly edgeName: "XmlSchemaCollection";
    readonly parentKind: "XmlDataTypeReference";
}, {
    readonly childKinds: readonly ["XmlForClauseOption"];
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "XmlForClause";
}, {
    readonly childKinds: readonly ["BinaryLiteral", "DefaultLiteral", "IdentifierLiteral", "IntegerLiteral", "MaxLiteral", "MoneyLiteral", "NullLiteral", "NumericLiteral", "OdbcLiteral", "RealLiteral", "StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "XmlForClauseOption";
}, {
    readonly childKinds: readonly ["Identifier", "IdentifierSnippet", "SqlCommandIdentifier"];
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "XmlNamespacesAliasElement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "String";
    readonly parentKind: "XmlNamespacesAliasElement";
}, {
    readonly childKinds: readonly ["StringLiteral"];
    readonly edgeKind: "single";
    readonly edgeName: "String";
    readonly parentKind: "XmlNamespacesDefaultElement";
}, {
    readonly childKinds: readonly ["XmlNamespacesAliasElement", "XmlNamespacesDefaultElement"];
    readonly edgeKind: "array";
    readonly edgeName: "XmlNamespacesElements";
    readonly parentKind: "XmlNamespaces";
}];
export declare const TSQL_STRUCTURAL_ATTRIBUTE_NAMES: readonly ["BinaryExpressionType", "ComparisonType", "FullTextFunctionType", "IsNot", "NotDefined", "OdbcEscape", "QuoteType", "SubqueryComparisonPredicateType", "TernaryExpressionType", "Value"];
export type TsqlStructuralAttributeName = (typeof TSQL_STRUCTURAL_ATTRIBUTE_NAMES)[number];
export declare const TSQL_STRUCTURAL_ATTRIBUTE_KINDS: readonly ["boolean", "enum", "identifier"];
export type TsqlStructuralAttributeKind = (typeof TSQL_STRUCTURAL_ATTRIBUTE_KINDS)[number];
export declare const TSQL_STRUCTURAL_ATTRIBUTE_POLICIES: readonly [{
    readonly allowedValues: readonly ["And", "Or"];
    readonly attributeKind: "enum";
    readonly nodeKind: "BooleanBinaryExpression";
    readonly propertyName: "BinaryExpressionType";
}, {
    readonly allowedValues: readonly ["Equals", "GreaterThan", "GreaterThanOrEqualTo", "IsDistinctFrom", "IsNotDistinctFrom", "LeftOuterJoin", "LessThan", "LessThanOrEqualTo", "NotEqualToBrackets", "NotEqualToExclamation", "NotGreaterThan", "NotLessThan", "NotLike", "RightOuterJoin"];
    readonly attributeKind: "enum";
    readonly nodeKind: "BooleanComparisonExpression";
    readonly propertyName: "ComparisonType";
}, {
    readonly attributeKind: "boolean";
    readonly nodeKind: "BooleanIsNullExpression";
    readonly propertyName: "IsNot";
}, {
    readonly allowedValues: readonly ["Between", "NotBetween"];
    readonly attributeKind: "enum";
    readonly nodeKind: "BooleanTernaryExpression";
    readonly propertyName: "TernaryExpressionType";
}, {
    readonly attributeKind: "boolean";
    readonly nodeKind: "DistinctPredicate";
    readonly propertyName: "IsNot";
}, {
    readonly allowedValues: readonly ["Contains", "FreeText", "None"];
    readonly attributeKind: "enum";
    readonly nodeKind: "FullTextPredicate";
    readonly propertyName: "FullTextFunctionType";
}, {
    readonly allowedValues: readonly ["DoubleQuote", "NotQuoted", "SquareBracket"];
    readonly attributeKind: "enum";
    readonly nodeKind: "Identifier";
    readonly propertyName: "QuoteType";
}, {
    readonly attributeKind: "identifier";
    readonly nodeKind: "Identifier";
    readonly propertyName: "Value";
}, {
    readonly attributeKind: "boolean";
    readonly nodeKind: "InPredicate";
    readonly propertyName: "NotDefined";
}, {
    readonly attributeKind: "boolean";
    readonly nodeKind: "LikePredicate";
    readonly propertyName: "NotDefined";
}, {
    readonly attributeKind: "boolean";
    readonly nodeKind: "LikePredicate";
    readonly propertyName: "OdbcEscape";
}, {
    readonly allowedValues: readonly ["Equals", "GreaterThan", "GreaterThanOrEqualTo", "IsDistinctFrom", "IsNotDistinctFrom", "LeftOuterJoin", "LessThan", "LessThanOrEqualTo", "NotEqualToBrackets", "NotEqualToExclamation", "NotGreaterThan", "NotLessThan", "NotLike", "RightOuterJoin"];
    readonly attributeKind: "enum";
    readonly nodeKind: "SubqueryComparisonPredicate";
    readonly propertyName: "ComparisonType";
}, {
    readonly allowedValues: readonly ["All", "Any", "None"];
    readonly attributeKind: "enum";
    readonly nodeKind: "SubqueryComparisonPredicate";
    readonly propertyName: "SubqueryComparisonPredicateType";
}];
export declare const TSQL_IDENTIFIER_STATES: readonly ["present", "redacted"];
export type TsqlIdentifierState = (typeof TSQL_IDENTIFIER_STATES)[number];
export declare const TSQL_INSPECT_COORDINATE_STATES: readonly ["available", "unavailable"];
export type TsqlInspectCoordinateState = (typeof TSQL_INSPECT_COORDINATE_STATES)[number];
export declare const TSQL_INSPECT_TOKEN_TYPES: readonly [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243];
export type TsqlInspectTokenType = (typeof TSQL_INSPECT_TOKEN_TYPES)[number];
