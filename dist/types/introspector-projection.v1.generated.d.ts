export declare const INTROSPECTOR_PROJECTION_ABI: {
    readonly allowlistSha256: "7a643f7cfaffc8cf599587e73a79cbf82ae15d496d574f1ded9b263007aec977";
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
    readonly manifestSha256: "c772369fd341ee586e13e1d080b2f4d2842bbd946c9c2f0b3b4e805b8f0a576b";
    readonly parser: "TSql160Parser";
    readonly projectionVersion: 1;
    readonly resultSchemaSha256: "0ffa1b8f8804b3322a95d31072537e06720b815ce9741ee6f9a6fbe4393ae10a";
};
export declare const TSQL_STRUCTURAL_NODE_KINDS: readonly ["AIAnalyzeSentimentFunctionCall", "AIClassifyFunctionCall", "AIExtractFunctionCall", "AIFixGrammarFunctionCall", "AIGenerateChunksTableReference", "AIGenerateEmbeddingsFunctionCall", "AIGenerateFixedChunksTableReference", "AIGenerateResponseFunctionCall", "AISummarizeFunctionCall", "AITranslateFunctionCall", "AcceleratedDatabaseRecoveryDatabaseOption", "AdHocDataSource", "AdHocTableReference", "AddAlterFullTextIndexAction", "AddFileSpec", "AddMemberAlterRoleAction", "AddSearchPropertyListAction", "AddSensitivityClassificationStatement", "AddSignatureStatement", "AlgorithmKeyOption", "AlterApplicationRoleStatement", "AlterAssemblyStatement", "AlterAsymmetricKeyStatement", "AlterAuthorizationStatement", "AlterAvailabilityGroupAction", "AlterAvailabilityGroupFailoverAction", "AlterAvailabilityGroupFailoverOption", "AlterAvailabilityGroupStatement", "AlterBrokerPriorityStatement", "AlterCertificateStatement", "AlterColumnAlterFullTextIndexAction", "AlterColumnEncryptionKeyStatement", "AlterCredentialStatement", "AlterCryptographicProviderStatement", "AlterDatabaseAddFileGroupStatement", "AlterDatabaseAddFileStatement", "AlterDatabaseAuditSpecificationStatement", "AlterDatabaseCollateStatement", "AlterDatabaseEncryptionKeyStatement", "AlterDatabaseModifyFileGroupStatement", "AlterDatabaseModifyFileStatement", "AlterDatabaseModifyNameStatement", "AlterDatabasePerformCutoverStatement", "AlterDatabaseRebuildLogStatement", "AlterDatabaseRemoveFileGroupStatement", "AlterDatabaseRemoveFileStatement", "AlterDatabaseScopedConfigurationClearStatement", "AlterDatabaseScopedConfigurationSetStatement", "AlterDatabaseSetStatement", "AlterDatabaseTermination", "AlterEndpointStatement", "AlterEventSessionStatement", "AlterExternalDataSourceStatement", "AlterExternalFunctionStatement", "AlterExternalLanguageStatement", "AlterExternalLibraryStatement", "AlterExternalModelStatement", "AlterExternalResourcePoolStatement", "AlterFederationStatement", "AlterFullTextCatalogStatement", "AlterFullTextIndexStatement", "AlterFullTextStopListStatement", "AlterFunctionStatement", "AlterIndexStatement", "AlterLoginAddDropCredentialStatement", "AlterLoginEnableDisableStatement", "AlterLoginOptionsStatement", "AlterMasterKeyStatement", "AlterMessageTypeStatement", "AlterPartitionFunctionStatement", "AlterPartitionSchemeStatement", "AlterProcedureStatement", "AlterQueueStatement", "AlterRemoteServiceBindingStatement", "AlterResourceGovernorStatement", "AlterResourcePoolStatement", "AlterRoleStatement", "AlterRouteStatement", "AlterSchemaStatement", "AlterSearchPropertyListStatement", "AlterSecurityPolicyStatement", "AlterSequenceStatement", "AlterServerAuditSpecificationStatement", "AlterServerAuditStatement", "AlterServerConfigurationBufferPoolExtensionContainerOption", "AlterServerConfigurationBufferPoolExtensionOption", "AlterServerConfigurationBufferPoolExtensionSizeOption", "AlterServerConfigurationDiagnosticsLogMaxSizeOption", "AlterServerConfigurationDiagnosticsLogOption", "AlterServerConfigurationExternalAuthenticationContainerOption", "AlterServerConfigurationExternalAuthenticationOption", "AlterServerConfigurationFailoverClusterPropertyOption", "AlterServerConfigurationHadrClusterOption", "AlterServerConfigurationSetBufferPoolExtensionStatement", "AlterServerConfigurationSetDiagnosticsLogStatement", "AlterServerConfigurationSetExternalAuthenticationStatement", "AlterServerConfigurationSetFailoverClusterPropertyStatement", "AlterServerConfigurationSetHadrClusterStatement", "AlterServerConfigurationSetSoftNumaStatement", "AlterServerConfigurationSoftNumaOption", "AlterServerConfigurationStatement", "AlterServerRoleStatement", "AlterServiceMasterKeyStatement", "AlterServiceStatement", "AlterSymmetricKeyStatement", "AlterTableAddClusterByStatement", "AlterTableAddTableElementStatement", "AlterTableAlterColumnStatement", "AlterTableAlterIndexStatement", "AlterTableAlterPartitionStatement", "AlterTableChangeTrackingModificationStatement", "AlterTableConstraintModificationStatement", "AlterTableDropTableElement", "AlterTableDropTableElementStatement", "AlterTableFileTableNamespaceStatement", "AlterTableRebuildStatement", "AlterTableSetStatement", "AlterTableSwitchStatement", "AlterTableTriggerModificationStatement", "AlterTriggerStatement", "AlterUserStatement", "AlterViewStatement", "AlterWorkloadGroupStatement", "AlterXmlSchemaCollectionStatement", "ApplicationRoleOption", "AssemblyEncryptionSource", "AssemblyName", "AssemblyOption", "AssignmentSetClause", "AsymmetricKeyCreateLoginSource", "AtTimeZoneCall", "AuditActionGroupReference", "AuditActionSpecification", "AuditGuidAuditOption", "AuditSpecificationPart", "AuditTarget", "AuthenticationEndpointProtocolOption", "AuthenticationPayloadOption", "AutoCleanupChangeTrackingOptionDetail", "AutoCreateStatisticsDatabaseOption", "AutomaticTuningCreateIndexOption", "AutomaticTuningDatabaseOption", "AutomaticTuningDropIndexOption", "AutomaticTuningForceLastGoodPlanOption", "AutomaticTuningMaintainIndexOption", "AutomaticTuningOption", "AvailabilityModeReplicaOption", "AvailabilityReplica", "BackupCertificateStatement", "BackupDatabaseStatement", "BackupEncryptionOption", "BackupMasterKeyStatement", "BackupOption", "BackupRestoreFileInfo", "BackupServiceMasterKeyStatement", "BackupTransactionLogStatement", "BackwardsCompatibleDropIndexClause", "BeginConversationTimerStatement", "BeginDialogStatement", "BeginEndAtomicBlockStatement", "BeginEndBlockStatement", "BeginTransactionStatement", "BinaryExpression", "BinaryLiteral", "BinaryQueryExpression", "BooleanBinaryExpression", "BooleanComparisonExpression", "BooleanExpressionSnippet", "BooleanIsNullExpression", "BooleanNotExpression", "BooleanParenthesisExpression", "BooleanTernaryExpression", "BoundingBoxParameter", "BoundingBoxSpatialIndexOption", "BreakStatement", "BrokerPriorityParameter", "BrowseForClause", "BuiltInFunctionTableReference", "BulkInsertOption", "BulkInsertStatement", "BulkOpenRowset", "CastCall", "CatalogCollationOption", "CellsPerObjectSpatialIndexOption", "CertificateCreateLoginSource", "CertificateOption", "ChangeRetentionChangeTrackingOptionDetail", "ChangeTableChangesTableReference", "ChangeTableVersionTableReference", "ChangeTrackingDatabaseOption", "ChangeTrackingFullTextIndexOption", "CharacterSetPayloadOption", "CheckConstraintDefinition", "CheckpointStatement", "ChildObjectName", "ClassifierEndTimeOption", "ClassifierImportanceOption", "ClassifierMemberNameOption", "ClassifierStartTimeOption", "ClassifierWlmContextOption", "ClassifierWlmLabelOption", "ClassifierWorkloadGroupOption", "CloseCursorStatement", "CloseMasterKeyStatement", "CloseSymmetricKeyStatement", "ClusterByTableOption", "CoalesceExpression", "ColumnDefinition", "ColumnDefinitionBase", "ColumnEncryptionAlgorithmNameParameter", "ColumnEncryptionAlgorithmParameter", "ColumnEncryptionDefinition", "ColumnEncryptionKeyNameParameter", "ColumnEncryptionKeyValue", "ColumnEncryptionTypeParameter", "ColumnMasterKeyEnclaveComputationsParameter", "ColumnMasterKeyNameParameter", "ColumnMasterKeyPathParameter", "ColumnMasterKeyStoreProviderNameParameter", "ColumnReferenceExpression", "ColumnStorageOptions", "ColumnWithSortOrder", "CommandSecurityElement80", "CommitTransactionStatement", "CommonTableExpression", "CompositeGroupingSpecification", "CompressionDelayIndexOption", "CompressionEndpointProtocolOption", "CompressionPartitionRange", "ComputeClause", "ComputeFunction", "ContainmentDatabaseOption", "ContinueStatement", "ContractMessage", "ConvertCall", "CopyColumnOption", "CopyCredentialOption", "CopyOption", "CopyStatement", "CreateAggregateStatement", "CreateApplicationRoleStatement", "CreateAssemblyStatement", "CreateAsymmetricKeyStatement", "CreateAvailabilityGroupStatement", "CreateBrokerPriorityStatement", "CreateCertificateStatement", "CreateColumnEncryptionKeyStatement", "CreateColumnMasterKeyStatement", "CreateColumnStoreIndexStatement", "CreateContractStatement", "CreateCredentialStatement", "CreateCryptographicProviderStatement", "CreateDatabaseAuditSpecificationStatement", "CreateDatabaseEncryptionKeyStatement", "CreateDatabaseStatement", "CreateDefaultStatement", "CreateEndpointStatement", "CreateEventNotificationStatement", "CreateEventSessionStatement", "CreateExternalDataSourceStatement", "CreateExternalFileFormatStatement", "CreateExternalFunctionStatement", "CreateExternalLanguageStatement", "CreateExternalLibraryStatement", "CreateExternalModelStatement", "CreateExternalResourcePoolStatement", "CreateExternalStreamStatement", "CreateExternalStreamingJobStatement", "CreateExternalTableStatement", "CreateFederationStatement", "CreateFullTextCatalogStatement", "CreateFullTextIndexStatement", "CreateFullTextStopListStatement", "CreateFunctionStatement", "CreateIndexStatement", "CreateJsonIndexStatement", "CreateLoginStatement", "CreateMasterKeyStatement", "CreateMessageTypeStatement", "CreateOrAlterExternalFunctionStatement", "CreateOrAlterFunctionStatement", "CreateOrAlterProcedureStatement", "CreateOrAlterTriggerStatement", "CreateOrAlterViewStatement", "CreatePartitionFunctionStatement", "CreatePartitionSchemeStatement", "CreateProcedureStatement", "CreateQueueStatement", "CreateRemoteServiceBindingStatement", "CreateResourcePoolStatement", "CreateRoleStatement", "CreateRouteStatement", "CreateRuleStatement", "CreateSchemaStatement", "CreateSearchPropertyListStatement", "CreateSecurityPolicyStatement", "CreateSelectiveXmlIndexStatement", "CreateSemanticIndexStatement", "CreateSequenceStatement", "CreateServerAuditSpecificationStatement", "CreateServerAuditStatement", "CreateServerRoleStatement", "CreateServiceStatement", "CreateSpatialIndexStatement", "CreateStatisticsStatement", "CreateSymmetricKeyStatement", "CreateSynonymStatement", "CreateTableStatement", "CreateTriggerStatement", "CreateTypeTableStatement", "CreateTypeUddtStatement", "CreateTypeUdtStatement", "CreateUserStatement", "CreateVectorIndexStatement", "CreateViewStatement", "CreateWorkloadClassifierStatement", "CreateWorkloadGroupStatement", "CreateXmlIndexStatement", "CreateXmlSchemaCollectionStatement", "CreationDispositionKeyOption", "CryptoMechanism", "CubeGroupingSpecification", "CursorDefaultDatabaseOption", "CursorDefinition", "CursorId", "CursorOption", "DWCompatibilityLevelConfigurationOption", "DataCompressionOption", "DataModificationTableReference", "DataRetentionTableOption", "DataTypeSequenceOption", "DatabaseAuditAction", "DatabaseConfigurationClearOption", "DatabaseConfigurationSetOption", "DatabaseOption", "DbccNamedLiteral", "DbccOption", "DbccStatement", "DeallocateCursorStatement", "DeclareCursorStatement", "DeclareTableVariableBody", "DeclareTableVariableStatement", "DeclareVariableElement", "DeclareVariableStatement", "DefaultConstraintDefinition", "DefaultLiteral", "DelayedDurabilityDatabaseOption", "DeleteMergeAction", "DeleteSpecification", "DeleteStatement", "DenyStatement", "DenyStatement80", "DeviceInfo", "DiskStatement", "DiskStatementOption", "DistinctPredicate", "DropAggregateStatement", "DropAlterFullTextIndexAction", "DropApplicationRoleStatement", "DropAssemblyStatement", "DropAsymmetricKeyStatement", "DropAvailabilityGroupStatement", "DropBrokerPriorityStatement", "DropCertificateStatement", "DropClusteredConstraintMoveOption", "DropClusteredConstraintStateOption", "DropClusteredConstraintValueOption", "DropClusteredConstraintWaitAtLowPriorityLockOption", "DropColumnEncryptionKeyStatement", "DropColumnMasterKeyStatement", "DropContractStatement", "DropCredentialStatement", "DropCryptographicProviderStatement", "DropDatabaseAuditSpecificationStatement", "DropDatabaseEncryptionKeyStatement", "DropDatabaseStatement", "DropDefaultStatement", "DropEndpointStatement", "DropEventNotificationStatement", "DropEventSessionStatement", "DropExternalDataSourceStatement", "DropExternalFileFormatStatement", "DropExternalLanguageStatement", "DropExternalLibraryStatement", "DropExternalModelStatement", "DropExternalResourcePoolStatement", "DropExternalStreamStatement", "DropExternalStreamingJobStatement", "DropExternalTableStatement", "DropFederationStatement", "DropFullTextCatalogStatement", "DropFullTextIndexStatement", "DropFullTextStopListStatement", "DropFunctionStatement", "DropIndexClause", "DropIndexStatement", "DropLoginStatement", "DropMasterKeyStatement", "DropMemberAlterRoleAction", "DropMessageTypeStatement", "DropPartitionFunctionStatement", "DropPartitionSchemeStatement", "DropProcedureStatement", "DropQueueStatement", "DropRemoteServiceBindingStatement", "DropResourcePoolStatement", "DropRoleStatement", "DropRouteStatement", "DropRuleStatement", "DropSchemaStatement", "DropSearchPropertyListAction", "DropSearchPropertyListStatement", "DropSecurityPolicyStatement", "DropSensitivityClassificationStatement", "DropSequenceStatement", "DropServerAuditSpecificationStatement", "DropServerAuditStatement", "DropServerRoleStatement", "DropServiceStatement", "DropSignatureStatement", "DropStatisticsStatement", "DropSymmetricKeyStatement", "DropSynonymStatement", "DropTableStatement", "DropTriggerStatement", "DropTypeStatement", "DropUserStatement", "DropViewStatement", "DropWorkloadClassifierStatement", "DropWorkloadGroupStatement", "DropXmlSchemaCollectionStatement", "DurabilityTableOption", "ElasticPoolSpecification", "EnableDisableTriggerStatement", "EnabledDisabledPayloadOption", "EncryptedValueParameter", "EncryptionPayloadOption", "EndConversationStatement", "EndpointAffinity", "EventDeclaration", "EventDeclarationCompareFunctionParameter", "EventDeclarationSetParameter", "EventGroupContainer", "EventNotificationObjectScope", "EventRetentionSessionOption", "EventSessionObjectName", "EventSessionStatement", "EventTypeContainer", "ExecutableProcedureReference", "ExecutableStringList", "ExecuteAsClause", "ExecuteAsFunctionOption", "ExecuteAsProcedureOption", "ExecuteAsStatement", "ExecuteAsTriggerOption", "ExecuteContext", "ExecuteInsertSource", "ExecuteOption", "ExecuteParameter", "ExecuteSpecification", "ExecuteStatement", "ExistsPredicate", "ExpressionCallTarget", "ExpressionGroupingSpecification", "ExpressionWithSortOrder", "ExternalCreateLoginSource", "ExternalDataSourceLiteralOrIdentifierOption", "ExternalFileFormatContainerOption", "ExternalFileFormatLiteralOption", "ExternalFileFormatUseDefaultTypeOption", "ExternalLanguageFileOption", "ExternalLibraryFileOption", "ExternalResourcePoolAffinitySpecification", "ExternalResourcePoolParameter", "ExternalResourcePoolStatement", "ExternalStreamLiteralOrIdentifierOption", "ExternalTableColumnDefinition", "ExternalTableDistributionOption", "ExternalTableLiteralOrIdentifierOption", "ExternalTableRejectTypeOption", "ExternalTableReplicatedDistributionPolicy", "ExternalTableRoundRobinDistributionPolicy", "ExternalTableShardedDistributionPolicy", "ExtractFromExpression", "FailoverModeReplicaOption", "FederationScheme", "FetchCursorStatement", "FetchType", "FileDeclaration", "FileDeclarationOption", "FileEncryptionSource", "FileGroupDefinition", "FileGroupOrPartitionScheme", "FileGrowthFileDeclarationOption", "FileNameFileDeclarationOption", "FileStreamDatabaseOption", "FileStreamOnDropIndexOption", "FileStreamOnTableOption", "FileStreamRestoreOption", "FileTableCollateFileNameTableOption", "FileTableConstraintNameTableOption", "FileTableDirectoryTableOption", "ForceSeekTableHint", "ForeignKeyConstraintDefinition", "FromClause", "FullTextCatalogAndFileGroup", "FullTextIndexColumn", "FullTextPredicate", "FullTextStopListAction", "FullTextTableReference", "FunctionCall", "FunctionCallSetClause", "FunctionOption", "GeneralSetCommand", "GenericConfigurationOption", "GetConversationGroupStatement", "GlobalFunctionTableReference", "GlobalVariableExpression", "GoToStatement", "GrandTotalGroupingSpecification", "GrantStatement", "GrantStatement80", "GraphConnectionBetweenNodes", "GraphConnectionConstraintDefinition", "GraphMatchCompositeExpression", "GraphMatchExpression", "GraphMatchLastNodePredicate", "GraphMatchNodeExpression", "GraphMatchPredicate", "GraphMatchRecursivePredicate", "GraphRecursiveMatchQuantifier", "GridParameter", "GridsSpatialIndexOption", "GroupByClause", "GroupingSetsGroupingSpecification", "HadrAvailabilityGroupDatabaseOption", "HadrDatabaseOption", "HavingClause", "IIfCall", "IPv4", "Identifier", "IdentifierAtomicBlockOption", "IdentifierDatabaseOption", "IdentifierLiteral", "IdentifierOrScalarExpression", "IdentifierOrValueExpression", "IdentifierPrincipalOption", "IdentifierSnippet", "IdentityFunctionCall", "IdentityOptions", "IdentityValueKeyOption", "IfStatement", "IgnoreDupKeyIndexOption", "InPredicate", "IndexDefinition", "IndexExpressionOption", "IndexStateOption", "IndexTableHint", "IndexType", "InlineDerivedTable", "InlineFunctionOption", "InlineResultSetDefinition", "InsertBulkColumnDefinition", "InsertBulkStatement", "InsertMergeAction", "InsertSpecification", "InsertStatement", "IntegerLiteral", "InternalOpenRowset", "InvokeExternalApiFunctionCall", "JoinParenthesisTableReference", "JsonForClause", "JsonForClauseOption", "JsonKeyValue", "KeySourceKeyOption", "KillQueryNotificationSubscriptionStatement", "KillStatement", "KillStatsJobStatement", "LabelStatement", "LedgerOption", "LedgerTableOption", "LedgerViewOption", "LeftFunctionCall", "LikePredicate", "LineNoStatement", "ListTypeCopyOption", "ListenerIPEndpointProtocolOption", "LiteralAtomicBlockOption", "LiteralAuditTargetOption", "LiteralAvailabilityGroupOption", "LiteralBulkInsertOption", "LiteralDatabaseOption", "LiteralEndpointProtocolOption", "LiteralOpenRowsetCosmosOption", "LiteralOptimizerHint", "LiteralOptionValue", "LiteralPayloadOption", "LiteralPrincipalOption", "LiteralRange", "LiteralReplicaOption", "LiteralSessionOption", "LiteralStatisticsOption", "LiteralTableHint", "LocationOption", "LockEscalationTableOption", "LoginTypePayloadOption", "LowPriorityLockWaitAbortAfterWaitOption", "LowPriorityLockWaitMaxDurationOption", "LowPriorityLockWaitTableSwitchOption", "MaxDispatchLatencySessionOption", "MaxDopConfigurationOption", "MaxDurationOption", "MaxLiteral", "MaxRolloverFilesAuditTargetOption", "MaxSizeAuditTargetOption", "MaxSizeDatabaseOption", "MaxSizeFileDeclarationOption", "MemoryOptimizedTableOption", "MemoryPartitionSessionOption", "MergeActionClause", "MergeSpecification", "MergeStatement", "MethodSpecifier", "MirrorToClause", "MoneyLiteral", "MoveConversationStatement", "MoveRestoreOption", "MoveToDropIndexOption", "MultiPartIdentifier", "MultiPartIdentifierCallTarget", "NameFileDeclarationOption", "NamedTableReference", "NextValueForExpression", "NullIfExpression", "NullLiteral", "NullableConstraintDefinition", "NumericLiteral", "OdbcConvertSpecification", "OdbcFunctionCall", "OdbcLiteral", "OdbcQualifiedJoinTableReference", "OffsetClause", "OnFailureAuditOption", "OnOffAssemblyOption", "OnOffAtomicBlockOption", "OnOffAuditTargetOption", "OnOffDatabaseOption", "OnOffDialogOption", "OnOffFullTextCatalogOption", "OnOffOptionValue", "OnOffPrimaryConfigurationOption", "OnOffPrincipalOption", "OnOffRemoteServiceBindingOption", "OnOffSessionOption", "OnOffStatisticsOption", "OnlineIndexLowPriorityLockWaitOption", "OnlineIndexOption", "OpenCursorStatement", "OpenJsonTableReference", "OpenMasterKeyStatement", "OpenQueryTableReference", "OpenRowsetColumnDefinition", "OpenRowsetCosmos", "OpenRowsetCosmosOption", "OpenRowsetTableReference", "OpenSymmetricKeyStatement", "OpenXmlTableReference", "OperatorAuditOption", "OptimizeForOptimizerHint", "OptimizedLockingDatabaseOption", "OptimizerHint", "OrderBulkInsertOption", "OrderByClause", "OrderIndexOption", "OutputClause", "OutputIntoClause", "OverClause", "PageVerifyDatabaseOption", "ParameterizationDatabaseOption", "ParameterlessCall", "ParenthesisExpression", "ParseCall", "PartitionFunctionCall", "PartitionParameterType", "PartitionSpecifier", "PartnerDatabaseOption", "PasswordAlterPrincipalOption", "PasswordCreateLoginSource", "Permission", "PermissionSetAssemblyOption", "PivotedTableReference", "PortsEndpointProtocolOption", "PredicateSetStatement", "PredictTableReference", "PrimaryRoleReplicaOption", "PrincipalOption", "PrintStatement", "Privilege80", "PrivilegeSecurityElement80", "ProcedureOption", "ProcedureParameter", "ProcedureReference", "ProcedureReferenceName", "ProcessAffinityRange", "ProviderEncryptionSource", "ProviderKeyNameKeyOption", "QualifiedJoin", "QueryDerivedTable", "QueryParenthesisExpression", "QuerySpecification", "QueryStoreCapturePolicyOption", "QueryStoreDataFlushIntervalOption", "QueryStoreDatabaseOption", "QueryStoreDesiredStateOption", "QueryStoreIntervalLengthOption", "QueryStoreMaxPlansPerQueryOption", "QueryStoreMaxStorageSizeOption", "QueryStoreSizeCleanupPolicyOption", "QueryStoreTimeCleanupPolicyOption", "QueryStoreWaitStatsCaptureOption", "QueueDelayAuditOption", "QueueExecuteAsOption", "QueueOption", "QueueProcedureOption", "QueueStateOption", "QueueValueOption", "RaiseErrorLegacyStatement", "RaiseErrorStatement", "ReadOnlyForClause", "ReadTextStatement", "RealLiteral", "ReceiveStatement", "ReconfigureStatement", "RecoveryDatabaseOption", "RegexpLikePredicate", "RemoteDataArchiveAlterTableOption", "RemoteDataArchiveDatabaseOption", "RemoteDataArchiveDbCredentialSetting", "RemoteDataArchiveDbFederatedServiceAccountSetting", "RemoteDataArchiveDbServerSetting", "RemoteDataArchiveTableOption", "RenameAlterRoleAction", "RenameEntityStatement", "ResampleStatisticsOption", "ResourcePoolAffinitySpecification", "ResourcePoolParameter", "ResourcePoolStatement", "RestoreMasterKeyStatement", "RestoreOption", "RestoreServiceMasterKeyStatement", "RestoreStatement", "ResultColumnDefinition", "ResultSetDefinition", "ResultSetsExecuteOption", "RetentionDaysAuditTargetOption", "RetentionPeriodDefinition", "ReturnStatement", "RevertStatement", "RevokeStatement", "RevokeStatement80", "RightFunctionCall", "RolePayloadOption", "RollbackTransactionStatement", "RollupGroupingSpecification", "RouteOption", "RowValue", "SaveTransactionStatement", "ScalarExpressionDialogOption", "ScalarExpressionRestoreOption", "ScalarExpressionSequenceOption", "ScalarExpressionSnippet", "ScalarFunctionReturnType", "ScalarSubquery", "SchemaDeclarationItem", "SchemaDeclarationItemOpenjson", "SchemaObjectFunctionTableReference", "SchemaObjectName", "SchemaObjectNameOrValueExpression", "SchemaObjectNameSnippet", "SchemaObjectResultSetDefinition", "SchemaPayloadOption", "SearchPropertyListFullTextIndexOption", "SearchedCaseExpression", "SearchedWhenClause", "SecondaryRoleReplicaOption", "SecurityPolicyOption", "SecurityPredicateAction", "SecurityPrincipal", "SecurityTargetObject", "SecurityTargetObjectName", "SecurityUserClause80", "SelectFunctionReturnType", "SelectInsertSource", "SelectScalarExpression", "SelectSetVariable", "SelectStarExpression", "SelectStatement", "SelectStatementSnippet", "SelectiveXmlIndexPromotedPath", "SemanticIndexChunkOption", "SemanticIndexColumn", "SemanticTableReference", "SendStatement", "SensitivityClassificationOption", "SequenceOption", "ServiceContract", "SessionTimeoutPayloadOption", "SetCommandStatement", "SetErrorLevelStatement", "SetFipsFlaggerCommand", "SetIdentityInsertStatement", "SetOffsetsStatement", "SetRowCountStatement", "SetSearchPropertyListAlterFullTextIndexAction", "SetStatisticsStatement", "SetStopListAlterFullTextIndexAction", "SetTextSizeStatement", "SetTransactionIsolationLevelStatement", "SetUserStatement", "SetVariableStatement", "ShutdownStatement", "SimpleAlterFullTextIndexAction", "SimpleCaseExpression", "SimpleWhenClause", "SingleValueTypeCopyOption", "SizeFileDeclarationOption", "SoapMethod", "SourceDeclaration", "SpatialIndexRegularOption", "SqlCommandIdentifier", "SqlDataTypeReference", "StateAuditOption", "StatementList", "StatementListSnippet", "StatisticsOption", "StatisticsPartitionRange", "StopListFullTextIndexOption", "StopRestoreOption", "StringLiteral", "SubqueryComparisonPredicate", "SystemTimePeriodDefinition", "SystemVersioningTableOption", "TSEqualCall", "TSqlBatch", "TSqlFragmentSnippet", "TSqlScript", "TSqlStatementSnippet", "TableClusteredIndexType", "TableDataCompressionOption", "TableDefinition", "TableDistributionOption", "TableHashDistributionPolicy", "TableHint", "TableHintsOptimizerHint", "TableIndexOption", "TableNonClusteredIndexType", "TablePartitionOption", "TablePartitionOptionSpecifications", "TableReplicateDistributionPolicy", "TableRoundRobinDistributionPolicy", "TableSampleClause", "TableValuedFunctionReturnType", "TableXmlCompressionOption", "TargetDeclaration", "TargetRecoveryTimeDatabaseOption", "TemporalClause", "ThrowStatement", "TopRowFilter", "TriggerAction", "TriggerObject", "TriggerOption", "TruncateTableStatement", "TruncateTargetTableSwitchOption", "TryCastCall", "TryCatchStatement", "TryConvertCall", "TryParseCall", "UnaryExpression", "UniqueConstraintDefinition", "UnpivotedTableReference", "UnqualifiedJoin", "UpdateCall", "UpdateForClause", "UpdateMergeAction", "UpdateSpecification", "UpdateStatement", "UpdateStatisticsStatement", "UpdateTextStatement", "UseFederationStatement", "UseHintList", "UseStatement", "UserDataTypeReference", "UserDefinedTypeCallTarget", "UserDefinedTypePropertyAccess", "UserLoginOption", "UserRemoteServiceBindingOption", "ValuesInsertSource", "VariableMethodCallTableReference", "VariableReference", "VariableTableReference", "VariableValuePair", "VectorDataTypeReference", "VectorMetricIndexOption", "VectorSearchTableReference", "VectorTypeIndexOption", "ViewDistributionOption", "ViewForAppendOption", "ViewHashDistributionPolicy", "ViewOption", "ViewRoundRobinDistributionPolicy", "WaitAtLowPriorityOption", "WaitForStatement", "WhereClause", "WhileStatement", "WindowClause", "WindowDefinition", "WindowDelimiter", "WindowFrameClause", "WindowsCreateLoginSource", "WithCtesAndXmlNamespaces", "WithinGroupClause", "WitnessDatabaseOption", "WlmTimeLiteral", "WorkloadGroupImportanceParameter", "WorkloadGroupResourceParameter", "WriteTextStatement", "WsdlPayloadOption", "XmlCompressionOption", "XmlDataTypeReference", "XmlForClause", "XmlForClauseOption", "XmlNamespaces", "XmlNamespacesAliasElement", "XmlNamespacesDefaultElement"];
export type TsqlStructuralNodeKind = (typeof TSQL_STRUCTURAL_NODE_KINDS)[number];
export declare const TSQL_STRUCTURAL_EDGE_NAMES: readonly ["AbsentOrNullOnNull", "Account", "Action", "ActionClauses", "Actions", "AddFiles", "AdHocDataSource", "Affinity", "AffinitySpecification", "After", "AggregateFunctionIdentifier", "Algorithm", "Alias", "AlterTableDropTableElements", "ApiFormat", "ApplicationRoleOptions", "Arguments", "AsClause", "Assembly", "AssemblyName", "AttestedBy", "AuditName", "AuditTarget", "BaseIdentifier", "BaseType", "Batches", "Body", "Bottom", "Boundary", "BoundaryValue", "BoundaryValues", "BoundingBoxParameters", "BrokerInstanceSpecifier", "BrokerPriorityParameters", "BrokerService", "ByExpressions", "CallTarget", "CatalogAndFileGroup", "CatalogName", "CatchStatements", "Certificate", "CertificateOptions", "CertificateSource", "ChangeTrackingContext", "CheckCondition", "ChildIdentifier", "ChunkOptions", "ChunkSize", "ChunkType", "ClassifierFunction", "ClassifierName", "ClassName", "ClonePointInTime", "CloneSource", "ClusterByOption", "Collation", "Column", "ColumnDefinition", "ColumnDefinitions", "ColumnEncryptionKeyValues", "ColumnIdentifier", "ColumnName", "ColumnOrdinal", "Columns", "ColumnValues", "Commands", "CommonTableExpressions", "ComputeClauses", "ComputedColumnExpression", "ComputeFunctions", "ConstraintIdentifier", "ConstraintNames", "Constraints", "Containment", "Content", "ContractName", "Conversation", "ConversationHandles", "Cookie", "CopyOf", "Credential", "CredentialName", "CryptographicProviderName", "Cryptos", "CtasColumns", "Culture", "Cursor", "CursorDefinition", "DatabaseIdentifier", "DatabaseName", "Databases", "DatabaseSnapshot", "DataCompressionOption", "DataFiles", "DataModificationSpecification", "DataSource", "DataType", "DateValue", "Days", "Declarations", "DeclareTableVariableBody", "DecryptionMechanism", "DecryptionPassword", "DefaultConstraint", "DefaultValue", "Definition", "Definitions", "Delay", "DeleteLength", "DeleteSpecification", "Description", "Details", "Devices", "Dimension", "DirectoryName", "DistributionColumn", "DistributionColumns", "DistributionName", "DropClusteredConstraintOptions", "DropEventDeclarations", "DropFiles", "DropIndexClauses", "DropTargetDeclarations", "Duration", "Edge", "ElasticPoolName", "Element", "ElseExpression", "ElseStatement", "EnableChunkSetId", "EncryptingMechanisms", "Encryption", "EncryptionAlgorithm", "EncryptionPassword", "Encryptor", "EndTime", "EndTimeColumn", "EnvironmentVariables", "ErrorCode", "ErrorDescription", "ErrorNumber", "EscapeExpression", "EventDeclarationActionParameters", "EventDeclarationPredicateParameter", "EventDeclarations", "EventDeclarationSetParameters", "EventField", "EventTypeGroup", "EventTypeGroups", "EventValue", "ExecutableEntity", "Execute", "ExecuteAs", "ExecuteAsClause", "ExecuteContext", "ExecuteSpecification", "Expression", "ExpressionName", "Expressions", "ExternalDataSourceOptions", "ExternalFileFormatOptions", "ExternalLanguageFiles", "ExternalLibraryFiles", "ExternalModelName", "ExternalModelParameters", "ExternalName", "ExternalPoolName", "ExternalResourcePoolParameters", "ExternalStreamOptions", "ExternalTableOptions", "ExtractedElement", "FederationName", "FederationScheme", "FetchExpression", "FetchType", "FieldNumber", "File", "FileDeclaration", "FileDeclarations", "FileGroup", "FileGroupName", "FileGroups", "FileName", "Files", "FileStreamOn", "FileStreamOption", "FilterColumn", "FilterPredicate", "FirstExpression", "FirstParameter", "FirstQueryExpression", "FirstTableReference", "Flags", "FlushInterval", "ForClause", "ForJsonPaths", "ForName", "From", "FromClause", "FromNode", "FromNodeToNodeList", "FullTextIndexColumns", "FulltextStoplistOption", "FunctionCall", "FunctionName", "FunctionSetName", "GenericOptionKind", "GenericOptionState", "GridParameters", "Group", "GroupByClause", "GroupId", "GroupingSpecifications", "GroupName", "GrowthIncrement", "Guid", "Handle", "HavingClause", "Hints", "HistoryTable", "Id", "Identifier", "Identifiers", "Identity", "IdentityIncrement", "IdentityOptions", "IdentityPhrase", "IdentitySeed", "IgnoreRespectNulls", "IncludeColumns", "InColumns", "Increment", "Index", "Indexes", "IndexIdentifier", "IndexOptions", "IndexType", "IndexValue", "IndexValues", "InitiatorServiceName", "InitString", "Input", "InputExpression", "InputOptions", "InsertOffset", "InsertSource", "InsertSpecification", "InstanceSpec", "Into", "IntoTable", "IntoTableColumns", "IntoVariables", "IPv4PartOne", "IPv4PartTwo", "IPv6", "Items", "JobId", "Join", "JsonColumn", "JsonKeyName", "JsonOrderByClause", "JsonParameters", "JsonPath", "JsonValue", "Key", "KeyIndexName", "KeyName", "KeyOptions", "KeySource", "LabelName", "Labels", "Language", "LanguageTerm", "LedgerViewOption", "LeftExpression", "LeftNode", "Level", "LineNo", "LinkedServer", "Literal", "Literals", "LocalRuntimePath", "Location", "LocationValue", "LogicalDevice", "LogicalFileName", "LogOn", "LowerLimit", "LowPriorityLockWaitOption", "Mapping", "Mark", "MarkDescription", "MaskingFunction", "MatchedColumn", "MatchedKey", "MaxDuration", "MaxLength", "MaxPlansPerQuery", "MaxQdsSize", "MaxSize", "Member", "MemberName", "MergeSpecification", "Message", "MessageBody", "Messages", "MessageTypeName", "MethodName", "MethodSpecifier", "Metric", "MirrorToClauses", "ModelName", "ModelSubquery", "ModelVariable", "MoveTo", "MultiPartIdentifier", "MutatorFunction", "Name", "Namespace", "NewDatabaseName", "NewFileGroupName", "NewName", "NewValue", "Node", "Notifications", "Nullable", "NullableConstraint", "Number", "NumberRows", "Object", "ObjectName", "Objects", "OctetFour", "OctetOne", "OctetThree", "OctetTwo", "Offset", "OffsetClause", "OffsetExpression", "OffsetValue", "OldName", "OldPassword", "On", "OnFileGroup", "OnFileGroupOrPartitionScheme", "OnName", "Operation", "OperationTypeColumnName", "OperationTypeDescColumnName", "OptimizerHints", "Option", "OptionalParameters", "Options", "OptionValue", "OrderByClause", "OrderByElements", "OrderedColumns", "OrderHint", "OSFileName", "OuterNodeExpression", "OutputClause", "OutputIntoClause", "OutputOptions", "OverClause", "Overlap", "Owner", "Pairs", "Parameter", "Parameters", "ParameterType", "ParameterValue", "Partition", "PartitionColumn", "PartitionFunction", "PartitionOptionSpecs", "PartitionRanges", "Partitions", "PartitionSchemeColumns", "PartnerServer", "Parts", "PassPhrase", "Password", "PasswordOrSignature", "Path", "PathName", "Pattern", "PayloadOptions", "Permissions", "PhysicalDevice", "PivotColumn", "PlanHandle", "Platform", "PoolAffinityRanges", "PoolName", "Predicate", "PredicateExpression", "PredictTableReference", "PrimaryKeyColumns", "PrimaryKeyValues", "Principal", "PrincipalName", "Principals", "PrivateKeyPath", "Privileges", "ProcedureReference", "ProcedureVariable", "ProcessAffinityRanges", "PromotedPaths", "PromptPart1", "PromptPart2", "PropertyListName", "PropertyName", "ProtocolOptions", "Provider", "ProviderName", "ProviderString", "Qualifier", "Query", "QueryExpression", "Queue", "QueueName", "QueueOptions", "RecoveryTime", "RecursiveQuantifier", "ReferencedTableColumns", "ReferenceTableName", "RefWindowName", "RepeatSeed", "Replicas", "ResourcePoolParameters", "ResultColumnDefinitions", "RetentionPeriod", "ReturnType", "RightExpression", "RightNode", "RollbackAfter", "RouteOptions", "RowOffset", "RowPattern", "RowValues", "RunTime", "SampleNumber", "ScalarExpression", "Schema", "SchemaDeclarationItems", "SchemaIdentifier", "SchemaObject", "SchemaObjectName", "Scope", "SearchCondition", "SearchPropertyListOption", "SecondaryXmlIndexName", "SecondExpression", "SecondParameter", "SecondQueryExpression", "SecondTableReference", "Secret", "SecurityElement80", "SecurityPolicyOptions", "SecurityPredicateActions", "SecurityTargetObject", "SecurityUserClause80", "Seed", "Select", "SelectColumns", "SelectElements", "SelectStatement", "SequenceName", "SequenceNumberColumnName", "SequenceOptions", "Server", "ServerIdentifier", "ServerName", "Service", "ServiceContracts", "SessionOptions", "SetClauses", "Sets", "Settings", "ShardingColumn", "Signature", "SimilarTo", "SinceVersion", "SingleValue", "Size", "Source", "SourceColumn", "SourceDeclaration", "SourceKey", "SourceParameter", "SourcePartitionNumber", "SourceSearchPropertyList", "SourceStopListName", "SpatialColumnName", "SpatialIndexOptions", "SpecificationName", "SQLDataType", "StaleQueryThreshold", "StartTime", "StartTimeColumn", "State", "Statement", "StatementList", "Statements", "StatisticsOptions", "StatsIntervalLength", "StopListName", "StopListOption", "StopWord", "StorageOptions", "String", "Strings", "StringValue", "Style", "SubElements", "Suboptions", "Subquery", "SubscriptionId", "SystemTimePeriod", "Table", "TableAlias", "TableConstraints", "TableHints", "TableName", "TableReference", "TableReferences", "TableSampleClause", "Target", "TargetDeclarationParameters", "TargetDeclarations", "TargetObject", "TargetObjectName", "TargetOptions", "TargetPartitionNumber", "TargetServiceName", "TargetTable", "TemporalClause", "Termination", "Text", "TextId", "TextImageOn", "TextPointer", "TextSize", "ThenExpression", "ThenStatement", "ThirdExpression", "ThirdParameter", "Time", "Timeout", "Timestamp", "TimeString", "TimeZone", "To", "ToNode", "Top", "TopN", "TopRowFilter", "TransactionIdColumnName", "TriggerActions", "TriggerNames", "TriggerObject", "TrimOptions", "TryStatements", "TypeColumn", "TypeColumnName", "UpdateSpecification", "UpperLimit", "User", "UserId", "UserLoginOption", "UserName", "UserOptions", "Users", "UsingXmlIndexName", "Value", "ValueColumn", "ValueColumns", "ValueExpression", "Values", "VarArgs", "Variable", "VariableName", "VectorColumn", "VectorIndexOptions", "ViewName", "ViewOptions", "WhenClauses", "WhenExpression", "Where", "WhereClause", "WindowClause", "WindowDefinition", "WindowFrameClause", "WindowName", "WithColumns", "WithCtesAndXmlNamespaces", "WithinGroupClause", "WitnessServer", "WlmContext", "WlmLabel", "WorkloadGroupName", "WorkloadGroupParameters", "XmlColumn", "XmlCompressionOption", "XmlNamespaces", "XmlNamespacesElements", "XmlSchemaCollection", "XmlSchemaCollectionName", "XQueryDataType"];
export type TsqlStructuralEdgeName = (typeof TSQL_STRUCTURAL_EDGE_NAMES)[number];
export declare const TSQL_STRUCTURAL_EDGE_POLICIES: readonly [{
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "AddAlterFullTextIndexAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileName";
    readonly parentKind: "AddFileSpec";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "AddFileSpec";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Member";
    readonly parentKind: "AddMemberAlterRoleAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Description";
    readonly parentKind: "AddSearchPropertyListAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Guid";
    readonly parentKind: "AddSearchPropertyListAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Id";
    readonly parentKind: "AddSearchPropertyListAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PropertyName";
    readonly parentKind: "AddSearchPropertyListAction";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "AddSensitivityClassificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AddSensitivityClassificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Cryptos";
    readonly parentKind: "AddSignatureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Element";
    readonly parentKind: "AddSignatureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "InitString";
    readonly parentKind: "AdHocDataSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ProviderName";
    readonly parentKind: "AdHocDataSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "AdHocTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataSource";
    readonly parentKind: "AdHocTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Object";
    readonly parentKind: "AdHocTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIAnalyzeSentimentFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AIAnalyzeSentimentFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIClassifyFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AIClassifyFunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Labels";
    readonly parentKind: "AIClassifyFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIExtractFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AIExtractFunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Labels";
    readonly parentKind: "AIExtractFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIFixGrammarFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AIFixGrammarFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "AIGenerateChunksTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ChunkType";
    readonly parentKind: "AIGenerateChunksTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Source";
    readonly parentKind: "AIGenerateChunksTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIGenerateEmbeddingsFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AIGenerateEmbeddingsFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ModelName";
    readonly parentKind: "AIGenerateEmbeddingsFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionalParameters";
    readonly parentKind: "AIGenerateEmbeddingsFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ChunkSize";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ChunkType";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EnableChunkSetId";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Overlap";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Source";
    readonly parentKind: "AIGenerateFixedChunksTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AIGenerateResponseFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PromptPart1";
    readonly parentKind: "AIGenerateResponseFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PromptPart2";
    readonly parentKind: "AIGenerateResponseFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AISummarizeFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AISummarizeFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AITranslateFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Input";
    readonly parentKind: "AITranslateFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Language";
    readonly parentKind: "AITranslateFunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ApplicationRoleOptions";
    readonly parentKind: "AlterApplicationRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterApplicationRoleStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "AddFiles";
    readonly parentKind: "AlterAssemblyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "DropFiles";
    readonly parentKind: "AlterAssemblyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterAssemblyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterAssemblyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "AlterAssemblyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AttestedBy";
    readonly parentKind: "AlterAsymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DecryptionPassword";
    readonly parentKind: "AlterAsymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionPassword";
    readonly parentKind: "AlterAsymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterAsymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PrincipalName";
    readonly parentKind: "AlterAuthorizationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecurityTargetObject";
    readonly parentKind: "AlterAuthorizationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterAvailabilityGroupFailoverAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "AlterAvailabilityGroupFailoverOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterAvailabilityGroupStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Databases";
    readonly parentKind: "AlterAvailabilityGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterAvailabilityGroupStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterAvailabilityGroupStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Replicas";
    readonly parentKind: "AlterAvailabilityGroupStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "BrokerPriorityParameters";
    readonly parentKind: "AlterBrokerPriorityStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterBrokerPriorityStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AttestedBy";
    readonly parentKind: "AlterCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DecryptionPassword";
    readonly parentKind: "AlterCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionPassword";
    readonly parentKind: "AlterCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PrivateKeyPath";
    readonly parentKind: "AlterCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "AlterColumnAlterFullTextIndexAction";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ColumnEncryptionKeyValues";
    readonly parentKind: "AlterColumnEncryptionKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterColumnEncryptionKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identity";
    readonly parentKind: "AlterCredentialStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterCredentialStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Secret";
    readonly parentKind: "AlterCredentialStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "AlterCryptographicProviderStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterCryptographicProviderStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseAddFileGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "AlterDatabaseAddFileGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseAddFileStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "FileDeclarations";
    readonly parentKind: "AlterDatabaseAddFileStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "AlterDatabaseAddFileStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "AlterDatabaseAuditSpecificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parts";
    readonly parentKind: "AlterDatabaseAuditSpecificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SpecificationName";
    readonly parentKind: "AlterDatabaseAuditSpecificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AlterDatabaseCollateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseCollateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Encryptor";
    readonly parentKind: "AlterDatabaseEncryptionKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseModifyFileGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "AlterDatabaseModifyFileGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "NewFileGroupName";
    readonly parentKind: "AlterDatabaseModifyFileGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Termination";
    readonly parentKind: "AlterDatabaseModifyFileGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseModifyFileStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileDeclaration";
    readonly parentKind: "AlterDatabaseModifyFileStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseModifyNameStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "NewDatabaseName";
    readonly parentKind: "AlterDatabaseModifyNameStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabasePerformCutoverStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseRebuildLogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileDeclaration";
    readonly parentKind: "AlterDatabaseRebuildLogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseRemoveFileGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "AlterDatabaseRemoveFileGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseRemoveFileStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "AlterDatabaseRemoveFileStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Option";
    readonly parentKind: "AlterDatabaseScopedConfigurationClearStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Option";
    readonly parentKind: "AlterDatabaseScopedConfigurationSetStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "AlterDatabaseSetStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterDatabaseSetStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Termination";
    readonly parentKind: "AlterDatabaseSetStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RollbackAfter";
    readonly parentKind: "AlterDatabaseTermination";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Affinity";
    readonly parentKind: "AlterEndpointStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterEndpointStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PayloadOptions";
    readonly parentKind: "AlterEndpointStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ProtocolOptions";
    readonly parentKind: "AlterEndpointStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "DropEventDeclarations";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "DropTargetDeclarations";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "EventDeclarations";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SessionOptions";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TargetDeclarations";
    readonly parentKind: "AlterEventSessionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalDataSourceOptions";
    readonly parentKind: "AlterExternalDataSourceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Location";
    readonly parentKind: "AlterExternalDataSourceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalDataSourceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExternalName";
    readonly parentKind: "AlterExternalFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "AlterExternalFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "AlterExternalFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalLanguageFiles";
    readonly parentKind: "AlterExternalLanguageStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalLanguageStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Operation";
    readonly parentKind: "AlterExternalLanguageStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "AlterExternalLanguageStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Platform";
    readonly parentKind: "AlterExternalLanguageStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalLibraryFiles";
    readonly parentKind: "AlterExternalLibraryStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Language";
    readonly parentKind: "AlterExternalLibraryStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalLibraryStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "AlterExternalLibraryStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ApiFormat";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Credential";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LocalRuntimePath";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Location";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ModelName";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Parameters";
    readonly parentKind: "AlterExternalModelStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalResourcePoolParameters";
    readonly parentKind: "AlterExternalResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterExternalResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Boundary";
    readonly parentKind: "AlterFederationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DistributionName";
    readonly parentKind: "AlterFederationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterFederationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterFullTextCatalogStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterFullTextCatalogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterFullTextIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "AlterFullTextIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterFullTextStopListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterFullTextStopListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OrderHint";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "AlterFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Partition";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PromotedPaths";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "XmlNamespaces";
    readonly parentKind: "AlterIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CredentialName";
    readonly parentKind: "AlterLoginAddDropCredentialStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterLoginAddDropCredentialStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterLoginEnableDisableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterLoginOptionsStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterLoginOptionsStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "AlterMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterMessageTypeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "XmlSchemaCollectionName";
    readonly parentKind: "AlterMessageTypeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Boundary";
    readonly parentKind: "AlterPartitionFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterPartitionFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "AlterPartitionSchemeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterPartitionSchemeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "AlterProcedureStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterProcedureStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "AlterProcedureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureReference";
    readonly parentKind: "AlterProcedureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "AlterProcedureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterQueueStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "QueueOptions";
    readonly parentKind: "AlterQueueStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterRemoteServiceBindingStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterRemoteServiceBindingStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ClassifierFunction";
    readonly parentKind: "AlterResourceGovernorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterResourcePoolStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ResourcePoolParameters";
    readonly parentKind: "AlterResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterRouteStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "RouteOptions";
    readonly parentKind: "AlterRouteStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterSchemaStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ObjectName";
    readonly parentKind: "AlterSchemaStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterSearchPropertyListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterSearchPropertyListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterSecurityPolicyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SecurityPolicyOptions";
    readonly parentKind: "AlterSecurityPolicyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SecurityPredicateActions";
    readonly parentKind: "AlterSecurityPolicyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterSequenceStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SequenceOptions";
    readonly parentKind: "AlterSequenceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "AlterServerAuditSpecificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parts";
    readonly parentKind: "AlterServerAuditSpecificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SpecificationName";
    readonly parentKind: "AlterServerAuditSpecificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "AlterServerAuditStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AuditTarget";
    readonly parentKind: "AlterServerAuditStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "NewName";
    readonly parentKind: "AlterServerAuditStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerAuditStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PredicateExpression";
    readonly parentKind: "AlterServerAuditStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationBufferPoolExtensionContainerOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Suboptions";
    readonly parentKind: "AlterServerConfigurationBufferPoolExtensionContainerOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationBufferPoolExtensionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationBufferPoolExtensionSizeOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationDiagnosticsLogMaxSizeOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationDiagnosticsLogOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationExternalAuthenticationContainerOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Suboptions";
    readonly parentKind: "AlterServerConfigurationExternalAuthenticationContainerOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationExternalAuthenticationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationFailoverClusterPropertyOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationHadrClusterOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetBufferPoolExtensionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetDiagnosticsLogStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetExternalAuthenticationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetFailoverClusterPropertyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetHadrClusterStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterServerConfigurationSetSoftNumaStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "AlterServerConfigurationSoftNumaOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ProcessAffinityRanges";
    readonly parentKind: "AlterServerConfigurationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "AlterServerRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterServerRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Account";
    readonly parentKind: "AlterServiceMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "AlterServiceMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterServiceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "QueueName";
    readonly parentKind: "AlterServiceStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ServiceContracts";
    readonly parentKind: "AlterServiceStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "EncryptingMechanisms";
    readonly parentKind: "AlterSymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterSymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ClusterByOption";
    readonly parentKind: "AlterTableAddClusterByStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableAddClusterByStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Definition";
    readonly parentKind: "AlterTableAddTableElementStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableAddTableElementStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnIdentifier";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Encryption";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MaskingFunction";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StorageOptions";
    readonly parentKind: "AlterTableAlterColumnStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IndexIdentifier";
    readonly parentKind: "AlterTableAlterIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "AlterTableAlterIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableAlterIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "BoundaryValue";
    readonly parentKind: "AlterTableAlterPartitionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableAlterPartitionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableChangeTrackingModificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ConstraintNames";
    readonly parentKind: "AlterTableConstraintModificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableConstraintModificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "DropClusteredConstraintOptions";
    readonly parentKind: "AlterTableDropTableElement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterTableDropTableElement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "AlterTableDropTableElements";
    readonly parentKind: "AlterTableDropTableElementStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableDropTableElementStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableFileTableNamespaceStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "AlterTableRebuildStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Partition";
    readonly parentKind: "AlterTableRebuildStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableRebuildStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterTableSetStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableSetStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterTableSwitchStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableSwitchStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SourcePartitionNumber";
    readonly parentKind: "AlterTableSwitchStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TargetPartitionNumber";
    readonly parentKind: "AlterTableSwitchStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TargetTable";
    readonly parentKind: "AlterTableSwitchStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterTableTriggerModificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TriggerNames";
    readonly parentKind: "AlterTableTriggerModificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TriggerActions";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TriggerObject";
    readonly parentKind: "AlterTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterUserStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "UserOptions";
    readonly parentKind: "AlterUserStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "AlterViewStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "AlterViewStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "AlterViewStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ViewOptions";
    readonly parentKind: "AlterViewStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExternalPoolName";
    readonly parentKind: "AlterWorkloadGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterWorkloadGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PoolName";
    readonly parentKind: "AlterWorkloadGroupStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "WorkloadGroupParameters";
    readonly parentKind: "AlterWorkloadGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "AlterXmlSchemaCollectionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AlterXmlSchemaCollectionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ApplicationRoleOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Assembly";
    readonly parentKind: "AssemblyEncryptionSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ClassName";
    readonly parentKind: "AssemblyName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "AssemblyName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "AssignmentSetClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "NewValue";
    readonly parentKind: "AssignmentSetClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "AssignmentSetClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Credential";
    readonly parentKind: "AsymmetricKeyCreateLoginSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Key";
    readonly parentKind: "AsymmetricKeyCreateLoginSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "AtTimeZoneCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DateValue";
    readonly parentKind: "AtTimeZoneCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TimeZone";
    readonly parentKind: "AtTimeZoneCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Actions";
    readonly parentKind: "AuditActionSpecification";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Principals";
    readonly parentKind: "AuditActionSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TargetObject";
    readonly parentKind: "AuditActionSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Guid";
    readonly parentKind: "AuditGuidAuditOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Details";
    readonly parentKind: "AuditSpecificationPart";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TargetOptions";
    readonly parentKind: "AuditTarget";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Certificate";
    readonly parentKind: "AuthenticationPayloadOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AutomaticTuningDatabaseOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "AvailabilityReplica";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ServerName";
    readonly parentKind: "AvailabilityReplica";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DecryptionPassword";
    readonly parentKind: "BackupCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionPassword";
    readonly parentKind: "BackupCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "BackupCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "BackupCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PrivateKeyPath";
    readonly parentKind: "BackupCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "BackupDatabaseStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Devices";
    readonly parentKind: "BackupDatabaseStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Files";
    readonly parentKind: "BackupDatabaseStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "MirrorToClauses";
    readonly parentKind: "BackupDatabaseStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BackupDatabaseStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Encryptor";
    readonly parentKind: "BackupEncryptionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "BackupEncryptionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "BackupMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "BackupMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "BackupOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Items";
    readonly parentKind: "BackupRestoreFileInfo";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "BackupServiceMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "BackupServiceMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "BackupTransactionLogStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Devices";
    readonly parentKind: "BackupTransactionLogStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "MirrorToClauses";
    readonly parentKind: "BackupTransactionLogStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BackupTransactionLogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Index";
    readonly parentKind: "BackwardsCompatibleDropIndexClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Handle";
    readonly parentKind: "BeginConversationTimerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Timeout";
    readonly parentKind: "BeginConversationTimerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ContractName";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Handle";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "InitiatorServiceName";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "InstanceSpec";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TargetServiceName";
    readonly parentKind: "BeginDialogStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BeginEndAtomicBlockStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "BeginEndAtomicBlockStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "BeginEndBlockStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MarkDescription";
    readonly parentKind: "BeginTransactionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "BeginTransactionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "BinaryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "BinaryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "BinaryLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstQueryExpression";
    readonly parentKind: "BinaryQueryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ForClause";
    readonly parentKind: "BinaryQueryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OffsetClause";
    readonly parentKind: "BinaryQueryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "BinaryQueryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondQueryExpression";
    readonly parentKind: "BinaryQueryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "BooleanBinaryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "BooleanBinaryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "BooleanComparisonExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "BooleanComparisonExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "BooleanIsNullExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "BooleanNotExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "BooleanParenthesisExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "BooleanTernaryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "BooleanTernaryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ThirdExpression";
    readonly parentKind: "BooleanTernaryExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "BoundingBoxParameter";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "BoundingBoxParameters";
    readonly parentKind: "BoundingBoxSpatialIndexOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "BrokerPriorityParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "BuiltInFunctionTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "BuiltInFunctionTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "BuiltInFunctionTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "From";
    readonly parentKind: "BulkInsertStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BulkInsertStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "BulkInsertStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "BulkOpenRowset";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "BulkOpenRowset";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "DataFiles";
    readonly parentKind: "BulkOpenRowset";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "BulkOpenRowset";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "WithColumns";
    readonly parentKind: "BulkOpenRowset";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "CastCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "CastCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "CastCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "CellsPerObjectSpatialIndexOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Certificate";
    readonly parentKind: "CertificateCreateLoginSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Credential";
    readonly parentKind: "CertificateCreateLoginSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "CertificateOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RetentionPeriod";
    readonly parentKind: "ChangeRetentionChangeTrackingOptionDetail";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "ChangeTableChangesTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "ChangeTableChangesTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SinceVersion";
    readonly parentKind: "ChangeTableChangesTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "ChangeTableChangesTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "ChangeTableVersionTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "ChangeTableVersionTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PrimaryKeyColumns";
    readonly parentKind: "ChangeTableVersionTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PrimaryKeyValues";
    readonly parentKind: "ChangeTableVersionTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "ChangeTableVersionTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Details";
    readonly parentKind: "ChangeTrackingDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CheckCondition";
    readonly parentKind: "CheckConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "CheckConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Duration";
    readonly parentKind: "CheckpointStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "BaseIdentifier";
    readonly parentKind: "ChildObjectName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ChildIdentifier";
    readonly parentKind: "ChildObjectName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseIdentifier";
    readonly parentKind: "ChildObjectName";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Identifiers";
    readonly parentKind: "ChildObjectName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaIdentifier";
    readonly parentKind: "ChildObjectName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ServerIdentifier";
    readonly parentKind: "ChildObjectName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Time";
    readonly parentKind: "ClassifierEndTimeOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MemberName";
    readonly parentKind: "ClassifierMemberNameOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Time";
    readonly parentKind: "ClassifierStartTimeOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WlmContext";
    readonly parentKind: "ClassifierWlmContextOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WlmLabel";
    readonly parentKind: "ClassifierWlmLabelOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WorkloadGroupName";
    readonly parentKind: "ClassifierWorkloadGroupOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Cursor";
    readonly parentKind: "CloseCursorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CloseSymmetricKeyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "ClusterByTableOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "CoalesceExpression";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Expressions";
    readonly parentKind: "CoalesceExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ColumnDefinitionBase";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnIdentifier";
    readonly parentKind: "ColumnDefinitionBase";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ColumnDefinitionBase";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnIdentifier";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ComputedColumnExpression";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Constraints";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DefaultConstraint";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Encryption";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IdentityOptions";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Index";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MaskingFunction";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StorageOptions";
    readonly parentKind: "ColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Algorithm";
    readonly parentKind: "ColumnEncryptionAlgorithmNameParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionAlgorithm";
    readonly parentKind: "ColumnEncryptionAlgorithmParameter";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "ColumnEncryptionDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ColumnEncryptionKeyNameParameter";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "ColumnEncryptionKeyValue";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Signature";
    readonly parentKind: "ColumnMasterKeyEnclaveComputationsParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ColumnMasterKeyNameParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Path";
    readonly parentKind: "ColumnMasterKeyPathParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ColumnMasterKeyStoreProviderNameParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ColumnReferenceExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MultiPartIdentifier";
    readonly parentKind: "ColumnReferenceExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "ColumnWithSortOrder";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CommitTransactionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CommonTableExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExpressionName";
    readonly parentKind: "CommonTableExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "CommonTableExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "CommonTableExpression";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Items";
    readonly parentKind: "CompositeGroupingSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "CompressionDelayIndexOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "From";
    readonly parentKind: "CompressionPartitionRange";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "CompressionPartitionRange";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ByExpressions";
    readonly parentKind: "ComputeClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ComputeFunctions";
    readonly parentKind: "ComputeClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ComputeFunction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ContractMessage";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ConvertCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ConvertCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "ConvertCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Style";
    readonly parentKind: "ConvertCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnName";
    readonly parentKind: "CopyColumnOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DefaultValue";
    readonly parentKind: "CopyColumnOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FieldNumber";
    readonly parentKind: "CopyColumnOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identity";
    readonly parentKind: "CopyCredentialOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Secret";
    readonly parentKind: "CopyCredentialOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "CopyOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "From";
    readonly parentKind: "CopyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Into";
    readonly parentKind: "CopyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "CopyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CopyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AssemblyName";
    readonly parentKind: "CreateAggregateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateAggregateStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateAggregateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "CreateAggregateStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ApplicationRoleOptions";
    readonly parentKind: "CreateApplicationRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateApplicationRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateAssemblyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateAssemblyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateAssemblyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateAssemblyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "KeySource";
    readonly parentKind: "CreateAsymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateAsymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateAsymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "CreateAsymmetricKeyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Databases";
    readonly parentKind: "CreateAvailabilityGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateAvailabilityGroupStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateAvailabilityGroupStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Replicas";
    readonly parentKind: "CreateAvailabilityGroupStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "BrokerPriorityParameters";
    readonly parentKind: "CreateBrokerPriorityStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateBrokerPriorityStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "CertificateOptions";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CertificateSource";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DecryptionPassword";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionPassword";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PrivateKeyPath";
    readonly parentKind: "CreateCertificateStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ColumnEncryptionKeyValues";
    readonly parentKind: "CreateColumnEncryptionKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateColumnEncryptionKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateColumnMasterKeyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateColumnMasterKeyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FilterPredicate";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OrderedColumns";
    readonly parentKind: "CreateColumnStoreIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Messages";
    readonly parentKind: "CreateContractStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateContractStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateContractStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CryptographicProviderName";
    readonly parentKind: "CreateCredentialStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identity";
    readonly parentKind: "CreateCredentialStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateCredentialStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Secret";
    readonly parentKind: "CreateCredentialStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "CreateCryptographicProviderStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateCryptographicProviderStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "CreateDatabaseAuditSpecificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parts";
    readonly parentKind: "CreateDatabaseAuditSpecificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SpecificationName";
    readonly parentKind: "CreateDatabaseAuditSpecificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Encryptor";
    readonly parentKind: "CreateDatabaseEncryptionKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Containment";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CopyOf";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseSnapshot";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "FileGroups";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "LogOn";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateDatabaseStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "CreateDefaultStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateDefaultStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Affinity";
    readonly parentKind: "CreateEndpointStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateEndpointStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateEndpointStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PayloadOptions";
    readonly parentKind: "CreateEndpointStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ProtocolOptions";
    readonly parentKind: "CreateEndpointStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "BrokerInstanceSpecifier";
    readonly parentKind: "CreateEventNotificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "BrokerService";
    readonly parentKind: "CreateEventNotificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "EventTypeGroups";
    readonly parentKind: "CreateEventNotificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateEventNotificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Scope";
    readonly parentKind: "CreateEventNotificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "EventDeclarations";
    readonly parentKind: "CreateEventSessionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateEventSessionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SessionOptions";
    readonly parentKind: "CreateEventSessionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TargetDeclarations";
    readonly parentKind: "CreateEventSessionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalDataSourceOptions";
    readonly parentKind: "CreateExternalDataSourceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Location";
    readonly parentKind: "CreateExternalDataSourceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalDataSourceStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalFileFormatOptions";
    readonly parentKind: "CreateExternalFileFormatStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalFileFormatStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExternalName";
    readonly parentKind: "CreateExternalFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateExternalFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "CreateExternalFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalLanguageFiles";
    readonly parentKind: "CreateExternalLanguageStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalLanguageStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateExternalLanguageStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalLibraryFiles";
    readonly parentKind: "CreateExternalLibraryStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Language";
    readonly parentKind: "CreateExternalLibraryStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalLibraryStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateExternalLibraryStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ApiFormat";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Credential";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LocalRuntimePath";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Location";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ModelName";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateExternalModelStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalResourcePoolParameters";
    readonly parentKind: "CreateExternalResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalStreamingJobStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Statement";
    readonly parentKind: "CreateExternalStreamingJobStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalStreamOptions";
    readonly parentKind: "CreateExternalStreamStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "InputOptions";
    readonly parentKind: "CreateExternalStreamStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Location";
    readonly parentKind: "CreateExternalStreamStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateExternalStreamStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OutputOptions";
    readonly parentKind: "CreateExternalStreamStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ColumnDefinitions";
    readonly parentKind: "CreateExternalTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataSource";
    readonly parentKind: "CreateExternalTableStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalTableOptions";
    readonly parentKind: "CreateExternalTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "CreateExternalTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "CreateExternalTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "CreateFederationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DistributionName";
    readonly parentKind: "CreateFederationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateFederationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileGroup";
    readonly parentKind: "CreateFullTextCatalogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateFullTextCatalogStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateFullTextCatalogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateFullTextCatalogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Path";
    readonly parentKind: "CreateFullTextCatalogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CatalogAndFileGroup";
    readonly parentKind: "CreateFullTextIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "FullTextIndexColumns";
    readonly parentKind: "CreateFullTextIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "KeyIndexName";
    readonly parentKind: "CreateFullTextIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateFullTextIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateFullTextIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "CreateFullTextStopListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateFullTextStopListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateFullTextStopListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SourceStopListName";
    readonly parentKind: "CreateFullTextStopListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OrderHint";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOn";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FilterPredicate";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IncludeColumns";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ForJsonPaths";
    readonly parentKind: "CreateJsonIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateJsonIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "JsonColumn";
    readonly parentKind: "CreateJsonIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateJsonIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateJsonIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateLoginStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Source";
    readonly parentKind: "CreateLoginStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "CreateMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateMessageTypeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateMessageTypeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "XmlSchemaCollectionName";
    readonly parentKind: "CreateMessageTypeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExternalName";
    readonly parentKind: "CreateOrAlterExternalFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateOrAlterExternalFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateOrAlterExternalFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "CreateOrAlterExternalFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OrderHint";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ReturnType";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateOrAlterFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateOrAlterProcedureStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateOrAlterProcedureStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateOrAlterProcedureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureReference";
    readonly parentKind: "CreateOrAlterProcedureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateOrAlterProcedureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TriggerActions";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TriggerObject";
    readonly parentKind: "CreateOrAlterTriggerStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateOrAlterViewStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "CreateOrAlterViewStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "CreateOrAlterViewStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ViewOptions";
    readonly parentKind: "CreateOrAlterViewStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "BoundaryValues";
    readonly parentKind: "CreatePartitionFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreatePartitionFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ParameterType";
    readonly parentKind: "CreatePartitionFunctionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "FileGroups";
    readonly parentKind: "CreatePartitionSchemeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreatePartitionSchemeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PartitionFunction";
    readonly parentKind: "CreatePartitionSchemeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateProcedureStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateProcedureStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "CreateProcedureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureReference";
    readonly parentKind: "CreateProcedureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateProcedureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateQueueStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroup";
    readonly parentKind: "CreateQueueStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "QueueOptions";
    readonly parentKind: "CreateQueueStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateRemoteServiceBindingStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateRemoteServiceBindingStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateRemoteServiceBindingStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Service";
    readonly parentKind: "CreateRemoteServiceBindingStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateResourcePoolStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ResourcePoolParameters";
    readonly parentKind: "CreateResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateRouteStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateRouteStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "RouteOptions";
    readonly parentKind: "CreateRouteStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "CreateRuleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateRuleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSchemaStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateSchemaStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateSchemaStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSearchPropertyListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateSearchPropertyListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SourceSearchPropertyList";
    readonly parentKind: "CreateSearchPropertyListStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSecurityPolicyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SecurityPolicyOptions";
    readonly parentKind: "CreateSecurityPolicyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SecurityPredicateActions";
    readonly parentKind: "CreateSecurityPolicyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PathName";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PromotedPaths";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "UsingXmlIndexName";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "XmlColumn";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "XmlNamespaces";
    readonly parentKind: "CreateSelectiveXmlIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExternalModelName";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExternalModelParameters";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FulltextStoplistOption";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "VectorIndexOptions";
    readonly parentKind: "CreateSemanticIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSequenceStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SequenceOptions";
    readonly parentKind: "CreateSequenceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "CreateServerAuditSpecificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parts";
    readonly parentKind: "CreateServerAuditSpecificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SpecificationName";
    readonly parentKind: "CreateServerAuditSpecificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AuditName";
    readonly parentKind: "CreateServerAuditStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AuditTarget";
    readonly parentKind: "CreateServerAuditStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateServerAuditStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PredicateExpression";
    readonly parentKind: "CreateServerAuditStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateServerRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateServerRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateServiceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateServiceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "QueueName";
    readonly parentKind: "CreateServiceStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ServiceContracts";
    readonly parentKind: "CreateServiceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSpatialIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Object";
    readonly parentKind: "CreateSpatialIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroup";
    readonly parentKind: "CreateSpatialIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SpatialColumnName";
    readonly parentKind: "CreateSpatialIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SpatialIndexOptions";
    readonly parentKind: "CreateSpatialIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateStatisticsStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FilterPredicate";
    readonly parentKind: "CreateStatisticsStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateStatisticsStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateStatisticsStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "StatisticsOptions";
    readonly parentKind: "CreateStatisticsStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "EncryptingMechanisms";
    readonly parentKind: "CreateSymmetricKeyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "KeyOptions";
    readonly parentKind: "CreateSymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "CreateSymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Provider";
    readonly parentKind: "CreateSymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ForName";
    readonly parentKind: "CreateSynonymStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateSynonymStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ClonePointInTime";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CloneSource";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "CtasColumns";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Definition";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FederationScheme";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOn";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TextImageOn";
    readonly parentKind: "CreateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodSpecifier";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatementList";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TriggerActions";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TriggerObject";
    readonly parentKind: "CreateTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Definition";
    readonly parentKind: "CreateTypeTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateTypeTableStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateTypeTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "CreateTypeUddtStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateTypeUddtStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "NullableConstraint";
    readonly parentKind: "CreateTypeUddtStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AssemblyName";
    readonly parentKind: "CreateTypeUdtStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateTypeUdtStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateUserStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "UserLoginOption";
    readonly parentKind: "CreateUserStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "UserOptions";
    readonly parentKind: "CreateUserStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateVectorIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateVectorIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateVectorIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateVectorIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "VectorColumn";
    readonly parentKind: "CreateVectorIndexStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "CreateViewStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "CreateViewStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "CreateViewStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ViewOptions";
    readonly parentKind: "CreateViewStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ClassifierName";
    readonly parentKind: "CreateWorkloadClassifierStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CreateWorkloadClassifierStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExternalPoolName";
    readonly parentKind: "CreateWorkloadGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateWorkloadGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PoolName";
    readonly parentKind: "CreateWorkloadGroupStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "WorkloadGroupParameters";
    readonly parentKind: "CreateWorkloadGroupStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnName";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondaryXmlIndexName";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "XmlColumn";
    readonly parentKind: "CreateXmlIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "CreateXmlSchemaCollectionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CreateXmlSchemaCollectionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "CryptoMechanism";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PasswordOrSignature";
    readonly parentKind: "CryptoMechanism";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Arguments";
    readonly parentKind: "CubeGroupingSpecification";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "CursorDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Select";
    readonly parentKind: "CursorDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "CursorId";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PlanHandle";
    readonly parentKind: "DatabaseConfigurationClearOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionKind";
    readonly parentKind: "DatabaseConfigurationSetOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PartitionRanges";
    readonly parentKind: "DataCompressionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "DataModificationTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "DataModificationTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataModificationSpecification";
    readonly parentKind: "DataModificationTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FilterColumn";
    readonly parentKind: "DataRetentionTableOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RetentionPeriod";
    readonly parentKind: "DataRetentionTableOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "DataTypeSequenceOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "DbccNamedLiteral";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Literals";
    readonly parentKind: "DbccStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "DbccStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Cursor";
    readonly parentKind: "DeallocateCursorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CursorDefinition";
    readonly parentKind: "DeclareCursorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DeclareCursorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Definition";
    readonly parentKind: "DeclareTableVariableBody";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "VariableName";
    readonly parentKind: "DeclareTableVariableBody";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Body";
    readonly parentKind: "DeclareTableVariableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "DeclareVariableElement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Nullable";
    readonly parentKind: "DeclareVariableElement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "DeclareVariableElement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "VariableName";
    readonly parentKind: "DeclareVariableElement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Declarations";
    readonly parentKind: "DeclareVariableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "DefaultConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "DefaultConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "DefaultConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "DefaultLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FromClause";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OutputClause";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OutputIntoClause";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TopRowFilter";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WhereClause";
    readonly parentKind: "DeleteSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DeleteSpecification";
    readonly parentKind: "DeleteStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "DeleteStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "DeleteStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecurityElement80";
    readonly parentKind: "DenyStatement80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecurityUserClause80";
    readonly parentKind: "DenyStatement80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AsClause";
    readonly parentKind: "DenyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Permissions";
    readonly parentKind: "DenyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Principals";
    readonly parentKind: "DenyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecurityTargetObject";
    readonly parentKind: "DenyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LogicalDevice";
    readonly parentKind: "DeviceInfo";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PhysicalDevice";
    readonly parentKind: "DeviceInfo";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "DiskStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "DiskStatementOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "DistinctPredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "DistinctPredicate";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropAggregateStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "DropAlterFullTextIndexAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropApplicationRoleStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropAssemblyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropAsymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropAvailabilityGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropBrokerPriorityStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropCertificateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "DropClusteredConstraintMoveOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "DropClusteredConstraintValueOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "DropClusteredConstraintWaitAtLowPriorityLockOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropColumnEncryptionKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropColumnMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropContractStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropCredentialStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropCryptographicProviderStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropDatabaseAuditSpecificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Databases";
    readonly parentKind: "DropDatabaseStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropDefaultStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropEndpointStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Notifications";
    readonly parentKind: "DropEventNotificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Scope";
    readonly parentKind: "DropEventNotificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropEventSessionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalDataSourceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalFileFormatStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalLanguageStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "DropExternalLanguageStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalLibraryStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Owner";
    readonly parentKind: "DropExternalLibraryStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalModelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalStreamingJobStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropExternalStreamStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropExternalTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropFederationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropFullTextCatalogStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableName";
    readonly parentKind: "DropFullTextIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropFullTextStopListStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Index";
    readonly parentKind: "DropIndexClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Object";
    readonly parentKind: "DropIndexClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "DropIndexClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "DropIndexClauses";
    readonly parentKind: "DropIndexStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropLoginStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Member";
    readonly parentKind: "DropMemberAlterRoleAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropMessageTypeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropPartitionFunctionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropPartitionSchemeStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropProcedureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropQueueStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropRemoteServiceBindingStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropRouteStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropRuleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Schema";
    readonly parentKind: "DropSchemaStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PropertyName";
    readonly parentKind: "DropSearchPropertyListAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropSearchPropertyListStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropSecurityPolicyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "DropSensitivityClassificationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropSequenceStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropServerAuditSpecificationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropServerAuditStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropServerRoleStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropServiceStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Cryptos";
    readonly parentKind: "DropSignatureStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Element";
    readonly parentKind: "DropSignatureStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropStatisticsStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropSymmetricKeyStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropSynonymStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropTableStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropTypeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropUserStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Objects";
    readonly parentKind: "DropViewStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropWorkloadClassifierStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropWorkloadGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "DropXmlSchemaCollectionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionKind";
    readonly parentKind: "DWCompatibilityLevelConfigurationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "DWCompatibilityLevelConfigurationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ElasticPoolName";
    readonly parentKind: "ElasticPoolSpecification";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TriggerNames";
    readonly parentKind: "EnableDisableTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TriggerObject";
    readonly parentKind: "EnableDisableTriggerStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "EncryptedValueParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Conversation";
    readonly parentKind: "EndConversationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ErrorCode";
    readonly parentKind: "EndConversationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ErrorDescription";
    readonly parentKind: "EndConversationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "EndpointAffinity";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EventValue";
    readonly parentKind: "EventDeclarationCompareFunctionParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "EventDeclarationCompareFunctionParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SourceDeclaration";
    readonly parentKind: "EventDeclarationCompareFunctionParameter";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "EventDeclarationActionParameters";
    readonly parentKind: "EventDeclaration";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EventDeclarationPredicateParameter";
    readonly parentKind: "EventDeclaration";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "EventDeclarationSetParameters";
    readonly parentKind: "EventDeclaration";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ObjectName";
    readonly parentKind: "EventDeclaration";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EventField";
    readonly parentKind: "EventDeclarationSetParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EventValue";
    readonly parentKind: "EventDeclarationSetParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "QueueName";
    readonly parentKind: "EventNotificationObjectScope";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MultiPartIdentifier";
    readonly parentKind: "EventSessionObjectName";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "EventDeclarations";
    readonly parentKind: "EventSessionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "EventSessionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SessionOptions";
    readonly parentKind: "EventSessionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TargetDeclarations";
    readonly parentKind: "EventSessionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AdHocDataSource";
    readonly parentKind: "ExecutableProcedureReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "ExecutableProcedureReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureReference";
    readonly parentKind: "ExecutableProcedureReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "ExecutableStringList";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Strings";
    readonly parentKind: "ExecutableStringList";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Literal";
    readonly parentKind: "ExecuteAsClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteAs";
    readonly parentKind: "ExecuteAsFunctionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteAs";
    readonly parentKind: "ExecuteAsProcedureOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Cookie";
    readonly parentKind: "ExecuteAsStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteContext";
    readonly parentKind: "ExecuteAsStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteAsClause";
    readonly parentKind: "ExecuteAsTriggerOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Principal";
    readonly parentKind: "ExecuteContext";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Execute";
    readonly parentKind: "ExecuteInsertSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "ExecuteParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "ExecuteParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExecutableEntity";
    readonly parentKind: "ExecuteSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteContext";
    readonly parentKind: "ExecuteSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LinkedServer";
    readonly parentKind: "ExecuteSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "ExecuteSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExecuteSpecification";
    readonly parentKind: "ExecuteStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "ExecuteStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Subquery";
    readonly parentKind: "ExistsPredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ExpressionCallTarget";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ExpressionGroupingSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ExpressionWithSortOrder";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "ExternalCreateLoginSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ExternalDataSourceLiteralOrIdentifierOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Suboptions";
    readonly parentKind: "ExternalFileFormatContainerOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ExternalFileFormatLiteralOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Content";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EnvironmentVariables";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileName";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Parameters";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Path";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Platform";
    readonly parentKind: "ExternalLanguageFileOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Content";
    readonly parentKind: "ExternalLibraryFileOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Path";
    readonly parentKind: "ExternalLibraryFileOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Platform";
    readonly parentKind: "ExternalLibraryFileOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "ExternalResourcePoolAffinitySpecification";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PoolAffinityRanges";
    readonly parentKind: "ExternalResourcePoolAffinitySpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AffinitySpecification";
    readonly parentKind: "ExternalResourcePoolParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "ExternalResourcePoolParameter";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ExternalResourcePoolParameters";
    readonly parentKind: "ExternalResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ExternalResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ExternalStreamLiteralOrIdentifierOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnDefinition";
    readonly parentKind: "ExternalTableColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "NullableConstraint";
    readonly parentKind: "ExternalTableColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ExternalTableDistributionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ExternalTableLiteralOrIdentifierOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ShardingColumn";
    readonly parentKind: "ExternalTableShardedDistributionPolicy";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ExtractFromExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ExtractedElement";
    readonly parentKind: "ExtractFromExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnName";
    readonly parentKind: "FederationScheme";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DistributionName";
    readonly parentKind: "FederationScheme";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Cursor";
    readonly parentKind: "FetchCursorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FetchType";
    readonly parentKind: "FetchCursorStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IntoVariables";
    readonly parentKind: "FetchCursorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RowOffset";
    readonly parentKind: "FetchType";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "FileDeclaration";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "FileEncryptionSource";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "FileDeclarations";
    readonly parentKind: "FileGroupDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "FileGroupDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "FileGroupOrPartitionScheme";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PartitionSchemeColumns";
    readonly parentKind: "FileGroupOrPartitionScheme";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "GrowthIncrement";
    readonly parentKind: "FileGrowthFileDeclarationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OSFileName";
    readonly parentKind: "FileNameFileDeclarationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DirectoryName";
    readonly parentKind: "FileStreamDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOn";
    readonly parentKind: "FileStreamOnDropIndexOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "FileStreamOnTableOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOption";
    readonly parentKind: "FileStreamRestoreOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "FileTableCollateFileNameTableOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "FileTableConstraintNameTableOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "FileTableDirectoryTableOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ColumnValues";
    readonly parentKind: "ForceSeekTableHint";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IndexValue";
    readonly parentKind: "ForceSeekTableHint";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "ForeignKeyConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "ForeignKeyConstraintDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ReferencedTableColumns";
    readonly parentKind: "ForeignKeyConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ReferenceTableName";
    readonly parentKind: "ForeignKeyConstraintDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PredictTableReference";
    readonly parentKind: "FromClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TableReferences";
    readonly parentKind: "FromClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CatalogName";
    readonly parentKind: "FullTextCatalogAndFileGroup";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileGroupName";
    readonly parentKind: "FullTextCatalogAndFileGroup";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LanguageTerm";
    readonly parentKind: "FullTextIndexColumn";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "FullTextIndexColumn";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TypeColumn";
    readonly parentKind: "FullTextIndexColumn";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "FullTextPredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LanguageTerm";
    readonly parentKind: "FullTextPredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PropertyName";
    readonly parentKind: "FullTextPredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "FullTextPredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LanguageTerm";
    readonly parentKind: "FullTextStopListAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StopWord";
    readonly parentKind: "FullTextStopListAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Language";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PropertyName";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableName";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TopN";
    readonly parentKind: "FullTextTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "AbsentOrNullOnNull";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CallTarget";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FunctionName";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IgnoreRespectNulls";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "JsonOrderByClause";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "JsonParameters";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OverClause";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ReturnType";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MutatorFunction";
    readonly parentKind: "FunctionCallSetClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TrimOptions";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WithinGroupClause";
    readonly parentKind: "FunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "GeneralSetCommand";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionKind";
    readonly parentKind: "GenericConfigurationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionState";
    readonly parentKind: "GenericConfigurationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "GroupId";
    readonly parentKind: "GetConversationGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Queue";
    readonly parentKind: "GetConversationGroupStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "GlobalFunctionTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "GlobalFunctionTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "GlobalFunctionTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "GlobalVariableExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LabelName";
    readonly parentKind: "GoToStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AsClause";
    readonly parentKind: "GrantStatement80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecurityElement80";
    readonly parentKind: "GrantStatement80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecurityUserClause80";
    readonly parentKind: "GrantStatement80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AsClause";
    readonly parentKind: "GrantStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Permissions";
    readonly parentKind: "GrantStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Principals";
    readonly parentKind: "GrantStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecurityTargetObject";
    readonly parentKind: "GrantStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FromNode";
    readonly parentKind: "GraphConnectionBetweenNodes";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ToNode";
    readonly parentKind: "GraphConnectionBetweenNodes";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "GraphConnectionConstraintDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "FromNodeToNodeList";
    readonly parentKind: "GraphConnectionConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Edge";
    readonly parentKind: "GraphMatchCompositeExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LeftNode";
    readonly parentKind: "GraphMatchCompositeExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RightNode";
    readonly parentKind: "GraphMatchCompositeExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Edge";
    readonly parentKind: "GraphMatchExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LeftNode";
    readonly parentKind: "GraphMatchExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RightNode";
    readonly parentKind: "GraphMatchExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LeftExpression";
    readonly parentKind: "GraphMatchLastNodePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RightExpression";
    readonly parentKind: "GraphMatchLastNodePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Node";
    readonly parentKind: "GraphMatchNodeExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "GraphMatchPredicate";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Expression";
    readonly parentKind: "GraphMatchRecursivePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OuterNodeExpression";
    readonly parentKind: "GraphMatchRecursivePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RecursiveQuantifier";
    readonly parentKind: "GraphMatchRecursivePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LowerLimit";
    readonly parentKind: "GraphRecursiveMatchQuantifier";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "UpperLimit";
    readonly parentKind: "GraphRecursiveMatchQuantifier";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "GridParameters";
    readonly parentKind: "GridsSpatialIndexOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "GroupingSpecifications";
    readonly parentKind: "GroupByClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Sets";
    readonly parentKind: "GroupingSetsGroupingSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "GroupName";
    readonly parentKind: "HadrAvailabilityGroupDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "HavingClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "IdentifierAtomicBlockOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "IdentifierDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "IdentifierLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "IdentifierOrScalarExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ScalarExpression";
    readonly parentKind: "IdentifierOrScalarExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "IdentifierOrValueExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ValueExpression";
    readonly parentKind: "IdentifierOrValueExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "IdentifierPrincipalOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "IdentityFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Increment";
    readonly parentKind: "IdentityFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Seed";
    readonly parentKind: "IdentityFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IdentityIncrement";
    readonly parentKind: "IdentityOptions";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IdentitySeed";
    readonly parentKind: "IdentityOptions";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IdentityPhrase";
    readonly parentKind: "IdentityValueKeyOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ElseStatement";
    readonly parentKind: "IfStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Predicate";
    readonly parentKind: "IfStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ThenStatement";
    readonly parentKind: "IfStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "IIfCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ElseExpression";
    readonly parentKind: "IIfCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Predicate";
    readonly parentKind: "IIfCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ThenExpression";
    readonly parentKind: "IIfCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "IndexDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOn";
    readonly parentKind: "IndexDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FilterPredicate";
    readonly parentKind: "IndexDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IncludeColumns";
    readonly parentKind: "IndexDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "IndexDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IndexType";
    readonly parentKind: "IndexDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "IndexDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "IndexDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "IndexExpressionOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexValues";
    readonly parentKind: "IndexTableHint";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "InlineDerivedTable";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "InlineDerivedTable";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "RowValues";
    readonly parentKind: "InlineDerivedTable";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ResultColumnDefinitions";
    readonly parentKind: "InlineResultSetDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "InPredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Subquery";
    readonly parentKind: "InPredicate";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Values";
    readonly parentKind: "InPredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "InsertBulkColumnDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ColumnDefinitions";
    readonly parentKind: "InsertBulkStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "InsertBulkStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "InsertBulkStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "InsertMergeAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Source";
    readonly parentKind: "InsertMergeAction";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "InsertSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "InsertSource";
    readonly parentKind: "InsertSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OutputClause";
    readonly parentKind: "InsertSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OutputIntoClause";
    readonly parentKind: "InsertSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "InsertSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TopRowFilter";
    readonly parentKind: "InsertSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "InsertSpecification";
    readonly parentKind: "InsertStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "InsertStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "InsertStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "IntegerLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "InternalOpenRowset";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "InternalOpenRowset";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "VarArgs";
    readonly parentKind: "InternalOpenRowset";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Arguments";
    readonly parentKind: "InvokeExternalApiFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "InvokeExternalApiFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FunctionName";
    readonly parentKind: "InvokeExternalApiFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FunctionSetName";
    readonly parentKind: "InvokeExternalApiFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OctetFour";
    readonly parentKind: "IPv4";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OctetOne";
    readonly parentKind: "IPv4";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OctetThree";
    readonly parentKind: "IPv4";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OctetTwo";
    readonly parentKind: "IPv4";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Join";
    readonly parentKind: "JoinParenthesisTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "JsonForClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "JsonForClauseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "JsonKeyName";
    readonly parentKind: "JsonKeyValue";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "JsonValue";
    readonly parentKind: "JsonKeyValue";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PassPhrase";
    readonly parentKind: "KeySourceKeyOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SubscriptionId";
    readonly parentKind: "KillQueryNotificationSubscriptionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "KillStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "JobId";
    readonly parentKind: "KillStatsJobStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LedgerViewOption";
    readonly parentKind: "LedgerTableOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OperationTypeColumnName";
    readonly parentKind: "LedgerViewOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OperationTypeDescColumnName";
    readonly parentKind: "LedgerViewOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SequenceNumberColumnName";
    readonly parentKind: "LedgerViewOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TransactionIdColumnName";
    readonly parentKind: "LedgerViewOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ViewName";
    readonly parentKind: "LedgerViewOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "LeftFunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "LeftFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EscapeExpression";
    readonly parentKind: "LikePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "LikePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "LikePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LineNo";
    readonly parentKind: "LineNoStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IPv4PartOne";
    readonly parentKind: "ListenerIPEndpointProtocolOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IPv4PartTwo";
    readonly parentKind: "ListenerIPEndpointProtocolOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IPv6";
    readonly parentKind: "ListenerIPEndpointProtocolOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "ListTypeCopyOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralAtomicBlockOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralAuditTargetOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralAvailabilityGroupOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralBulkInsertOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralEndpointProtocolOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralOpenRowsetCosmosOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralOptimizerHint";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralOptionValue";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralPayloadOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralPrincipalOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "From";
    readonly parentKind: "LiteralRange";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "LiteralRange";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralReplicaOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralSessionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Literal";
    readonly parentKind: "LiteralStatisticsOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "LiteralTableHint";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LocationValue";
    readonly parentKind: "LocationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MaxDuration";
    readonly parentKind: "LowPriorityLockWaitMaxDurationOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "LowPriorityLockWaitTableSwitchOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "MaxDispatchLatencySessionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionKind";
    readonly parentKind: "MaxDopConfigurationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "MaxDopConfigurationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MaxDuration";
    readonly parentKind: "MaxDurationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "MaxLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "MaxRolloverFilesAuditTargetOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Size";
    readonly parentKind: "MaxSizeAuditTargetOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MaxSize";
    readonly parentKind: "MaxSizeDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MaxSize";
    readonly parentKind: "MaxSizeFileDeclarationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Action";
    readonly parentKind: "MergeActionClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "MergeActionClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ActionClauses";
    readonly parentKind: "MergeSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OutputClause";
    readonly parentKind: "MergeSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OutputIntoClause";
    readonly parentKind: "MergeSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "MergeSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableAlias";
    readonly parentKind: "MergeSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableReference";
    readonly parentKind: "MergeSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "MergeSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TopRowFilter";
    readonly parentKind: "MergeSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MergeSpecification";
    readonly parentKind: "MergeStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "MergeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "MergeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AssemblyName";
    readonly parentKind: "MethodSpecifier";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ClassName";
    readonly parentKind: "MethodSpecifier";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodName";
    readonly parentKind: "MethodSpecifier";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Devices";
    readonly parentKind: "MirrorToClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "MoneyLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Conversation";
    readonly parentKind: "MoveConversationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Group";
    readonly parentKind: "MoveConversationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LogicalFileName";
    readonly parentKind: "MoveRestoreOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OSFileName";
    readonly parentKind: "MoveRestoreOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MoveTo";
    readonly parentKind: "MoveToDropIndexOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MultiPartIdentifier";
    readonly parentKind: "MultiPartIdentifierCallTarget";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Identifiers";
    readonly parentKind: "MultiPartIdentifier";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "NamedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObject";
    readonly parentKind: "NamedTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TableHints";
    readonly parentKind: "NamedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableSampleClause";
    readonly parentKind: "NamedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TemporalClause";
    readonly parentKind: "NamedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LogicalFileName";
    readonly parentKind: "NameFileDeclarationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "NextValueForExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OverClause";
    readonly parentKind: "NextValueForExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SequenceName";
    readonly parentKind: "NextValueForExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "NullableConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "NullIfExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "NullIfExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "NullIfExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "NullLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "NumericLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "OdbcConvertSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "OdbcFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "OdbcFunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "OdbcFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "OdbcLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableReference";
    readonly parentKind: "OdbcQualifiedJoinTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FetchExpression";
    readonly parentKind: "OffsetClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OffsetExpression";
    readonly parentKind: "OffsetClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "OnlineIndexLowPriorityLockWaitOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LowPriorityLockWaitOption";
    readonly parentKind: "OnlineIndexOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "GenericOptionKind";
    readonly parentKind: "OnOffPrimaryConfigurationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Cursor";
    readonly parentKind: "OpenCursorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "OpenJsonTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RowPattern";
    readonly parentKind: "OpenJsonTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SchemaDeclarationItems";
    readonly parentKind: "OpenJsonTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "OpenJsonTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "OpenMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "OpenQueryTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "LinkedServer";
    readonly parentKind: "OpenQueryTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Query";
    readonly parentKind: "OpenQueryTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "OpenRowsetColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnIdentifier";
    readonly parentKind: "OpenRowsetColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnOrdinal";
    readonly parentKind: "OpenRowsetColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "OpenRowsetColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "JsonPath";
    readonly parentKind: "OpenRowsetColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "OpenRowsetCosmos";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "OpenRowsetCosmos";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "OpenRowsetCosmos";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "WithColumns";
    readonly parentKind: "OpenRowsetCosmos";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataSource";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Object";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ProviderName";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ProviderString";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Query";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "UserId";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "WithColumns";
    readonly parentKind: "OpenRowsetTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DecryptionMechanism";
    readonly parentKind: "OpenSymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "OpenSymmetricKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Flags";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RowPattern";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SchemaDeclarationItems";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableName";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "OpenXmlTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Pairs";
    readonly parentKind: "OptimizeForOptimizerHint";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "OrderBulkInsertOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OrderByElements";
    readonly parentKind: "OrderByClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "OrderIndexOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SelectColumns";
    readonly parentKind: "OutputClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IntoTableColumns";
    readonly parentKind: "OutputIntoClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IntoTable";
    readonly parentKind: "OutputIntoClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SelectColumns";
    readonly parentKind: "OutputIntoClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "OverClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Partitions";
    readonly parentKind: "OverClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WindowFrameClause";
    readonly parentKind: "OverClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WindowName";
    readonly parentKind: "OverClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ParameterlessCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ParenthesisExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ParenthesisExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ParseCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Culture";
    readonly parentKind: "ParseCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ParseCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StringValue";
    readonly parentKind: "ParseCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "PartitionFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "PartitionFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FunctionName";
    readonly parentKind: "PartitionFunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "PartitionFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "PartitionParameterType";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "PartitionParameterType";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Number";
    readonly parentKind: "PartitionSpecifier";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PartnerServer";
    readonly parentKind: "PartnerDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Timeout";
    readonly parentKind: "PartnerDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OldPassword";
    readonly parentKind: "PasswordAlterPrincipalOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "PasswordAlterPrincipalOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "PasswordCreateLoginSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "PasswordCreateLoginSource";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "Permission";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Identifiers";
    readonly parentKind: "Permission";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AggregateFunctionIdentifier";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "InColumns";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PivotColumn";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableReference";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ValueColumns";
    readonly parentKind: "PivotedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "PredictTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataSource";
    readonly parentKind: "PredictTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ModelSubquery";
    readonly parentKind: "PredictTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ModelVariable";
    readonly parentKind: "PredictTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RunTime";
    readonly parentKind: "PredictTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SchemaDeclarationItems";
    readonly parentKind: "PredictTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "PrintStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "Privilege80";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "PrivilegeSecurityElement80";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Privileges";
    readonly parentKind: "PrivilegeSecurityElement80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "PrivilegeSecurityElement80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ProcedureParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Nullable";
    readonly parentKind: "ProcedureParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ProcedureParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "VariableName";
    readonly parentKind: "ProcedureParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureReference";
    readonly parentKind: "ProcedureReferenceName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ProcedureVariable";
    readonly parentKind: "ProcedureReferenceName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ProcedureReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Number";
    readonly parentKind: "ProcedureReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "From";
    readonly parentKind: "ProcessAffinityRange";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "ProcessAffinityRange";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "KeyOptions";
    readonly parentKind: "ProviderEncryptionSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ProviderEncryptionSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "KeyName";
    readonly parentKind: "ProviderKeyNameKeyOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstTableReference";
    readonly parentKind: "QualifiedJoin";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "QualifiedJoin";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondTableReference";
    readonly parentKind: "QualifiedJoin";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "QueryDerivedTable";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "QueryDerivedTable";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "QueryDerivedTable";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ForClause";
    readonly parentKind: "QueryParenthesisExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OffsetClause";
    readonly parentKind: "QueryParenthesisExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "QueryParenthesisExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "QueryParenthesisExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ForClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FromClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "GroupByClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "HavingClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OffsetClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SelectElements";
    readonly parentKind: "QuerySpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TopRowFilter";
    readonly parentKind: "QuerySpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WhereClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WindowClause";
    readonly parentKind: "QuerySpecification";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "QueryStoreDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FlushInterval";
    readonly parentKind: "QueryStoreDataFlushIntervalOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StatsIntervalLength";
    readonly parentKind: "QueryStoreIntervalLengthOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MaxPlansPerQuery";
    readonly parentKind: "QueryStoreMaxPlansPerQueryOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MaxQdsSize";
    readonly parentKind: "QueryStoreMaxStorageSizeOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StaleQueryThreshold";
    readonly parentKind: "QueryStoreTimeCleanupPolicyOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Delay";
    readonly parentKind: "QueueDelayAuditOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "QueueExecuteAsOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "QueueProcedureOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "QueueValueOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstParameter";
    readonly parentKind: "RaiseErrorLegacyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondParameter";
    readonly parentKind: "RaiseErrorLegacyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstParameter";
    readonly parentKind: "RaiseErrorStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OptionalParameters";
    readonly parentKind: "RaiseErrorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondParameter";
    readonly parentKind: "RaiseErrorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ThirdParameter";
    readonly parentKind: "RaiseErrorStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "ReadTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Offset";
    readonly parentKind: "ReadTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Size";
    readonly parentKind: "ReadTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TextPointer";
    readonly parentKind: "ReadTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "RealLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Into";
    readonly parentKind: "ReceiveStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Queue";
    readonly parentKind: "ReceiveStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SelectElements";
    readonly parentKind: "ReceiveStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Top";
    readonly parentKind: "ReceiveStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Where";
    readonly parentKind: "ReceiveStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Flags";
    readonly parentKind: "RegexpLikePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Pattern";
    readonly parentKind: "RegexpLikePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Text";
    readonly parentKind: "RegexpLikePredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FilterPredicate";
    readonly parentKind: "RemoteDataArchiveAlterTableOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Settings";
    readonly parentKind: "RemoteDataArchiveDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Credential";
    readonly parentKind: "RemoteDataArchiveDbCredentialSetting";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Server";
    readonly parentKind: "RemoteDataArchiveDbServerSetting";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "NewName";
    readonly parentKind: "RenameAlterRoleAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "NewName";
    readonly parentKind: "RenameEntityStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OldName";
    readonly parentKind: "RenameEntityStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Partitions";
    readonly parentKind: "ResampleStatisticsOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "ResourcePoolAffinitySpecification";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PoolAffinityRanges";
    readonly parentKind: "ResourcePoolAffinitySpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AffinitySpecification";
    readonly parentKind: "ResourcePoolParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "ResourcePoolParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ResourcePoolStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ResourcePoolParameters";
    readonly parentKind: "ResourcePoolStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EncryptionPassword";
    readonly parentKind: "RestoreMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "RestoreMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "RestoreMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "File";
    readonly parentKind: "RestoreServiceMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Password";
    readonly parentKind: "RestoreServiceMasterKeyStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "RestoreStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Devices";
    readonly parentKind: "RestoreStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Files";
    readonly parentKind: "RestoreStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "RestoreStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnDefinition";
    readonly parentKind: "ResultColumnDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Nullable";
    readonly parentKind: "ResultColumnDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Definitions";
    readonly parentKind: "ResultSetsExecuteOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Days";
    readonly parentKind: "RetentionDaysAuditTargetOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Duration";
    readonly parentKind: "RetentionPeriodDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "ReturnStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Cookie";
    readonly parentKind: "RevertStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AsClause";
    readonly parentKind: "RevokeStatement80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecurityElement80";
    readonly parentKind: "RevokeStatement80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecurityUserClause80";
    readonly parentKind: "RevokeStatement80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "AsClause";
    readonly parentKind: "RevokeStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Permissions";
    readonly parentKind: "RevokeStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Principals";
    readonly parentKind: "RevokeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecurityTargetObject";
    readonly parentKind: "RevokeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "RightFunctionCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "RightFunctionCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "RollbackTransactionStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Arguments";
    readonly parentKind: "RollupGroupingSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Literal";
    readonly parentKind: "RouteOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ColumnValues";
    readonly parentKind: "RowValue";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "SaveTransactionStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ScalarExpressionDialogOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ScalarExpressionRestoreOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OptionValue";
    readonly parentKind: "ScalarExpressionSequenceOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "ScalarFunctionReturnType";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "ScalarSubquery";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "ScalarSubquery";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnDefinition";
    readonly parentKind: "SchemaDeclarationItem";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Mapping";
    readonly parentKind: "SchemaDeclarationItem";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnDefinition";
    readonly parentKind: "SchemaDeclarationItemOpenjson";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Mapping";
    readonly parentKind: "SchemaDeclarationItemOpenjson";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "SchemaObjectFunctionTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "SchemaObjectFunctionTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "SchemaObjectFunctionTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObject";
    readonly parentKind: "SchemaObjectFunctionTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "BaseIdentifier";
    readonly parentKind: "SchemaObjectName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseIdentifier";
    readonly parentKind: "SchemaObjectName";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Identifiers";
    readonly parentKind: "SchemaObjectName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "SchemaObjectNameOrValueExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ValueExpression";
    readonly parentKind: "SchemaObjectNameOrValueExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaIdentifier";
    readonly parentKind: "SchemaObjectName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ServerIdentifier";
    readonly parentKind: "SchemaObjectName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "BaseIdentifier";
    readonly parentKind: "SchemaObjectNameSnippet";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseIdentifier";
    readonly parentKind: "SchemaObjectNameSnippet";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Identifiers";
    readonly parentKind: "SchemaObjectNameSnippet";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaIdentifier";
    readonly parentKind: "SchemaObjectNameSnippet";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ServerIdentifier";
    readonly parentKind: "SchemaObjectNameSnippet";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "SchemaObjectResultSetDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "SearchedCaseExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ElseExpression";
    readonly parentKind: "SearchedCaseExpression";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "WhenClauses";
    readonly parentKind: "SearchedCaseExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ThenExpression";
    readonly parentKind: "SearchedWhenClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WhenExpression";
    readonly parentKind: "SearchedWhenClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PropertyListName";
    readonly parentKind: "SearchPropertyListFullTextIndexOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FunctionCall";
    readonly parentKind: "SecurityPredicateAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TargetObjectName";
    readonly parentKind: "SecurityPredicateAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "SecurityPrincipal";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "SecurityTargetObject";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MultiPartIdentifier";
    readonly parentKind: "SecurityTargetObjectName";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ObjectName";
    readonly parentKind: "SecurityTargetObject";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Users";
    readonly parentKind: "SecurityUserClause80";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SelectStatement";
    readonly parentKind: "SelectFunctionReturnType";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Select";
    readonly parentKind: "SelectInsertSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MaxLength";
    readonly parentKind: "SelectiveXmlIndexPromotedPath";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "SelectiveXmlIndexPromotedPath";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Path";
    readonly parentKind: "SelectiveXmlIndexPromotedPath";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SQLDataType";
    readonly parentKind: "SelectiveXmlIndexPromotedPath";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "XQueryDataType";
    readonly parentKind: "SelectiveXmlIndexPromotedPath";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnName";
    readonly parentKind: "SelectScalarExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "SelectScalarExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "SelectSetVariable";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "SelectSetVariable";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Qualifier";
    readonly parentKind: "SelectStarExpression";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ComputeClauses";
    readonly parentKind: "SelectStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Into";
    readonly parentKind: "SelectStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "On";
    readonly parentKind: "SelectStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "SelectStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "SelectStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ComputeClauses";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Into";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "On";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "QueryExpression";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "SelectStatementSnippet";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "SelectStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "SemanticIndexChunkOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ChunkOptions";
    readonly parentKind: "SemanticIndexColumn";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ColumnName";
    readonly parentKind: "SemanticIndexColumn";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Language";
    readonly parentKind: "SemanticIndexColumn";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TypeColumnName";
    readonly parentKind: "SemanticIndexColumn";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MatchedColumn";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MatchedKey";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SourceKey";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableName";
    readonly parentKind: "SemanticTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ConversationHandles";
    readonly parentKind: "SendStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MessageBody";
    readonly parentKind: "SendStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MessageTypeName";
    readonly parentKind: "SendStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "SensitivityClassificationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "ServiceContract";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Timeout";
    readonly parentKind: "SessionTimeoutPayloadOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Commands";
    readonly parentKind: "SetCommandStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Level";
    readonly parentKind: "SetErrorLevelStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Table";
    readonly parentKind: "SetIdentityInsertStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "NumberRows";
    readonly parentKind: "SetRowCountStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SearchPropertyListOption";
    readonly parentKind: "SetSearchPropertyListAlterFullTextIndexAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StopListOption";
    readonly parentKind: "SetStopListAlterFullTextIndexAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TextSize";
    readonly parentKind: "SetTextSizeStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "UserName";
    readonly parentKind: "SetUserStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CursorDefinition";
    readonly parentKind: "SetVariableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "SetVariableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "SetVariableStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "SetVariableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "SetVariableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "SimpleCaseExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ElseExpression";
    readonly parentKind: "SimpleCaseExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "InputExpression";
    readonly parentKind: "SimpleCaseExpression";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "WhenClauses";
    readonly parentKind: "SimpleCaseExpression";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ThenExpression";
    readonly parentKind: "SimpleWhenClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WhenExpression";
    readonly parentKind: "SimpleWhenClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SingleValue";
    readonly parentKind: "SingleValueTypeCopyOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Size";
    readonly parentKind: "SizeFileDeclarationOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "SoapMethod";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "SoapMethod";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Namespace";
    readonly parentKind: "SoapMethod";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "SourceDeclaration";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Option";
    readonly parentKind: "SpatialIndexRegularOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "SqlDataTypeReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "SqlDataTypeReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Statements";
    readonly parentKind: "StatementListSnippet";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Statements";
    readonly parentKind: "StatementList";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "From";
    readonly parentKind: "StatisticsPartitionRange";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "To";
    readonly parentKind: "StatisticsPartitionRange";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StopListName";
    readonly parentKind: "StopListFullTextIndexOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "After";
    readonly parentKind: "StopRestoreOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Mark";
    readonly parentKind: "StopRestoreOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "StringLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "SubqueryComparisonPredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Subquery";
    readonly parentKind: "SubqueryComparisonPredicate";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EndTimeColumn";
    readonly parentKind: "SystemTimePeriodDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StartTimeColumn";
    readonly parentKind: "SystemTimePeriodDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "HistoryTable";
    readonly parentKind: "SystemVersioningTableOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RetentionPeriod";
    readonly parentKind: "SystemVersioningTableOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "TableClusteredIndexType";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OrderedColumns";
    readonly parentKind: "TableClusteredIndexType";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataCompressionOption";
    readonly parentKind: "TableDataCompressionOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "ColumnDefinitions";
    readonly parentKind: "TableDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Indexes";
    readonly parentKind: "TableDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SystemTimePeriod";
    readonly parentKind: "TableDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TableConstraints";
    readonly parentKind: "TableDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "TableDistributionOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "DistributionColumns";
    readonly parentKind: "TableHashDistributionPolicy";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DistributionColumn";
    readonly parentKind: "TableHashDistributionPolicy";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ObjectName";
    readonly parentKind: "TableHintsOptimizerHint";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TableHints";
    readonly parentKind: "TableHintsOptimizerHint";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "TableIndexOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PartitionColumn";
    readonly parentKind: "TablePartitionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PartitionOptionSpecs";
    readonly parentKind: "TablePartitionOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "BoundaryValues";
    readonly parentKind: "TablePartitionOptionSpecifications";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RepeatSeed";
    readonly parentKind: "TableSampleClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SampleNumber";
    readonly parentKind: "TableSampleClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DeclareTableVariableBody";
    readonly parentKind: "TableValuedFunctionReturnType";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "XmlCompressionOption";
    readonly parentKind: "TableXmlCompressionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ObjectName";
    readonly parentKind: "TargetDeclaration";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "TargetDeclarationParameters";
    readonly parentKind: "TargetDeclaration";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RecoveryTime";
    readonly parentKind: "TargetRecoveryTimeDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EndTime";
    readonly parentKind: "TemporalClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StartTime";
    readonly parentKind: "TemporalClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ErrorNumber";
    readonly parentKind: "ThrowStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Message";
    readonly parentKind: "ThrowStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "State";
    readonly parentKind: "ThrowStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "TopRowFilter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "EventTypeGroup";
    readonly parentKind: "TriggerAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "TriggerObject";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PartitionRanges";
    readonly parentKind: "TruncateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableName";
    readonly parentKind: "TruncateTableStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "TryCastCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "TryCastCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "TryCastCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CatchStatements";
    readonly parentKind: "TryCatchStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TryStatements";
    readonly parentKind: "TryCatchStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "TryConvertCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "TryConvertCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "TryConvertCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Style";
    readonly parentKind: "TryConvertCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "TryParseCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Culture";
    readonly parentKind: "TryParseCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DataType";
    readonly parentKind: "TryParseCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "StringValue";
    readonly parentKind: "TryParseCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstExpression";
    readonly parentKind: "TSEqualCall";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondExpression";
    readonly parentKind: "TSEqualCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Statements";
    readonly parentKind: "TSqlBatch";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Batches";
    readonly parentKind: "TSqlScript";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Expression";
    readonly parentKind: "UnaryExpression";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ConstraintIdentifier";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FileStreamOn";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "IndexOptions";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "IndexType";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OnFileGroupOrPartitionScheme";
    readonly parentKind: "UniqueConstraintDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "UnpivotedTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "InColumns";
    readonly parentKind: "UnpivotedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PivotColumn";
    readonly parentKind: "UnpivotedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TableReference";
    readonly parentKind: "UnpivotedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ValueColumn";
    readonly parentKind: "UnpivotedTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FirstTableReference";
    readonly parentKind: "UnqualifiedJoin";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SecondTableReference";
    readonly parentKind: "UnqualifiedJoin";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "UpdateCall";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "UpdateForClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SetClauses";
    readonly parentKind: "UpdateMergeAction";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FromClause";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OutputClause";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OutputIntoClause";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SetClauses";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Target";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TopRowFilter";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WhereClause";
    readonly parentKind: "UpdateSpecification";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "OptimizerHints";
    readonly parentKind: "UpdateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "UpdateSpecification";
    readonly parentKind: "UpdateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WithCtesAndXmlNamespaces";
    readonly parentKind: "UpdateStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "UpdateStatisticsStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "StatisticsOptions";
    readonly parentKind: "UpdateStatisticsStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "SubElements";
    readonly parentKind: "UpdateStatisticsStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DeleteLength";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "InsertOffset";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SourceColumn";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SourceParameter";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TextId";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Timestamp";
    readonly parentKind: "UpdateTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DistributionName";
    readonly parentKind: "UseFederationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "FederationName";
    readonly parentKind: "UseFederationStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "UseFederationStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Hints";
    readonly parentKind: "UseHintList";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "UserDataTypeReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "UserDataTypeReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SchemaObjectName";
    readonly parentKind: "UserDefinedTypeCallTarget";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "CallTarget";
    readonly parentKind: "UserDefinedTypePropertyAccess";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "UserDefinedTypePropertyAccess";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "PropertyName";
    readonly parentKind: "UserDefinedTypePropertyAccess";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "UserLoginOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "User";
    readonly parentKind: "UserRemoteServiceBindingOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DatabaseName";
    readonly parentKind: "UseStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "RowValues";
    readonly parentKind: "ValuesInsertSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "VariableMethodCallTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Columns";
    readonly parentKind: "VariableMethodCallTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "MethodName";
    readonly parentKind: "VariableMethodCallTableReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Parameters";
    readonly parentKind: "VariableMethodCallTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "VariableMethodCallTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Collation";
    readonly parentKind: "VariableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "VariableTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "VariableTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "VariableValuePair";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Variable";
    readonly parentKind: "VariableValuePair";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "BaseType";
    readonly parentKind: "VectorDataTypeReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Dimension";
    readonly parentKind: "VectorDataTypeReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "VectorDataTypeReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Alias";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Metric";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SimilarTo";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Table";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TopN";
    readonly parentKind: "VectorSearchTableReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "ViewDistributionOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "DistributionColumns";
    readonly parentKind: "ViewHashDistributionPolicy";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "DistributionColumn";
    readonly parentKind: "ViewHashDistributionPolicy";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "WaitAtLowPriorityOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Parameter";
    readonly parentKind: "WaitForStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Statement";
    readonly parentKind: "WaitForStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Timeout";
    readonly parentKind: "WaitForStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Cursor";
    readonly parentKind: "WhereClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SearchCondition";
    readonly parentKind: "WhereClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Predicate";
    readonly parentKind: "WhileStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Statement";
    readonly parentKind: "WhileStatement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "WindowDefinition";
    readonly parentKind: "WindowClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "WindowDefinition";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Partitions";
    readonly parentKind: "WindowDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "RefWindowName";
    readonly parentKind: "WindowDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WindowFrameClause";
    readonly parentKind: "WindowDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WindowName";
    readonly parentKind: "WindowDefinition";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OffsetValue";
    readonly parentKind: "WindowDelimiter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Bottom";
    readonly parentKind: "WindowFrameClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Top";
    readonly parentKind: "WindowFrameClause";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "WindowsCreateLoginSource";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ChangeTrackingContext";
    readonly parentKind: "WithCtesAndXmlNamespaces";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "CommonTableExpressions";
    readonly parentKind: "WithCtesAndXmlNamespaces";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "XmlNamespaces";
    readonly parentKind: "WithCtesAndXmlNamespaces";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "OrderByClause";
    readonly parentKind: "WithinGroupClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "WitnessServer";
    readonly parentKind: "WitnessDatabaseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TimeString";
    readonly parentKind: "WlmTimeLiteral";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "ParameterValue";
    readonly parentKind: "WorkloadGroupResourceParameter";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Column";
    readonly parentKind: "WriteTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "SourceParameter";
    readonly parentKind: "WriteTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "TextId";
    readonly parentKind: "WriteTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Timestamp";
    readonly parentKind: "WriteTextStatement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "WsdlPayloadOption";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "PartitionRanges";
    readonly parentKind: "XmlCompressionOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Name";
    readonly parentKind: "XmlDataTypeReference";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "XmlSchemaCollection";
    readonly parentKind: "XmlDataTypeReference";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "Options";
    readonly parentKind: "XmlForClause";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Value";
    readonly parentKind: "XmlForClauseOption";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "Identifier";
    readonly parentKind: "XmlNamespacesAliasElement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "String";
    readonly parentKind: "XmlNamespacesAliasElement";
}, {
    readonly edgeKind: "single";
    readonly edgeName: "String";
    readonly parentKind: "XmlNamespacesDefaultElement";
}, {
    readonly edgeKind: "array";
    readonly edgeName: "XmlNamespacesElements";
    readonly parentKind: "XmlNamespaces";
}];
export declare const TSQL_STRUCTURAL_ATTRIBUTE_NAMES: readonly ["QuoteType", "Value"];
export type TsqlStructuralAttributeName = (typeof TSQL_STRUCTURAL_ATTRIBUTE_NAMES)[number];
export declare const TSQL_STRUCTURAL_ATTRIBUTE_KINDS: readonly ["enum", "identifier"];
export type TsqlStructuralAttributeKind = (typeof TSQL_STRUCTURAL_ATTRIBUTE_KINDS)[number];
export declare const TSQL_STRUCTURAL_ATTRIBUTE_POLICIES: readonly [{
    readonly allowedValues: readonly ["DoubleQuote", "NotQuoted", "SquareBracket"];
    readonly attributeKind: "enum";
    readonly nodeKind: "Identifier";
    readonly propertyName: "QuoteType";
}, {
    readonly attributeKind: "identifier";
    readonly nodeKind: "Identifier";
    readonly propertyName: "Value";
}];
export declare const TSQL_IDENTIFIER_STATES: readonly ["present", "redacted"];
export type TsqlIdentifierState = (typeof TSQL_IDENTIFIER_STATES)[number];
export declare const TSQL_INSPECT_COORDINATE_STATES: readonly ["available", "unavailable"];
export type TsqlInspectCoordinateState = (typeof TSQL_INSPECT_COORDINATE_STATES)[number];
export declare const TSQL_INSPECT_TOKEN_TYPES: readonly [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243];
export type TsqlInspectTokenType = (typeof TSQL_INSPECT_TOKEN_TYPES)[number];
