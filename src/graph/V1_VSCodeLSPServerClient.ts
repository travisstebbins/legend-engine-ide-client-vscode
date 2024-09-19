/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  type ClassifierPathMapping,
  type EXECUTION_SERIALIZATION_FORMAT,
  type GenerationMode,
  type PlainObject,
  type ServiceExecutionMode,
  type SubtypeInfo,
  type TracerService,
  type V1_ArtifactGenerationExtensionInput,
  type V1_ArtifactGenerationExtensionOutput,
  type V1_CheckEntitlementsResult,
  type V1_CompileResult,
  type V1_DatabaseBuilderInput,
  type V1_DatabaseToModelGenerationInput,
  type V1_DebugTestsResult,
  type V1_DeploymentResult,
  type V1_EntitlementReportAnalyticsInput,
  type V1_ExecuteInput,
  type V1_ExecutionPlan,
  type V1_ExecutionResult,
  type V1_ExternalFormatDescription,
  type V1_ExternalFormatModelGenerationInput,
  type V1_FunctionActivatorError,
  type V1_FunctionActivatorInfo,
  type V1_FunctionActivatorInput,
  type V1_GenerateFileInput,
  type V1_GenerateSchemaInput,
  type V1_GenerationConfigurationDescription,
  type V1_GenerationOutput,
  type V1_GrammarParserBatchInputEntry,
  type V1_ImportConfigurationDescription,
  type V1_LambdaPrefix,
  type V1_LambdaReturnTypeInput,
  type V1_LambdaReturnTypeResult,
  type V1_LightQuery,
  type V1_MappingModelCoverageAnalysisInput,
  type V1_MappingModelCoverageAnalysisResult,
  type V1_ParserError,
  type V1_PureModelContext,
  type V1_PureModelContextData,
  type V1_Query,
  type V1_QuerySearchSpecification,
  type V1_RawLambda,
  type V1_RawRelationalOperationElement,
  type V1_RawSQLExecuteInput,
  type V1_RelationalConnectionBuilder,
  type V1_RenderStyle,
  type V1_RunTestsInput,
  type V1_RunTestsResult,
  type V1_ServiceConfigurationInfo,
  type V1_ServiceRegistrationResult,
  type V1_ServiceStorage,
  type V1_StoreEntitlementAnalysisInput,
  type V1_SurveyDatasetsResult,
  type V1_TestDataGenerationInput,
  type V1_TestDataGenerationResult,
  type V1_ValueSpecification,
} from '@finos/legend-vscode-extension-dependencies';
import { type V1_EngineServerClient } from '@finos/legend-graph';

export class V1_VSCodeLSPServerClient implements V1_EngineServerClient {
  enableCompression = false;

  // ------------------------------------------- Helper -------------------------------------------
  setEnv = (value: string | undefined): void => {
    throw new Error('setEnv not yet implemented');
  };
  setCurrentUserId = (value: string | undefined): void => {
    throw new Error('setCurrentUserId not yet implemented');
  };
  setBaseUrl = (val: string | undefined): void => {
    throw new Error('setBaseUrl not yet implemented');
  };
  setBaseUrlForServiceRegistration = (val: string | undefined): void => {
    throw new Error('setBaseUrlForServiceRegistration not yet implemented');
  };
  setCompression = (val: boolean): void => {
    throw new Error('setCompression not yet implemented');
  };
  setDebugPayload = (val: boolean): void => {
    throw new Error('setDebugPayload not yet implemented');
  };
  setTracerService = (val: TracerService): void => {
    throw new Error('setTracerService not yet implemented');
  };

  // ------------------------------------------- Server -------------------------------------------

  getCurrentUserId = (): Promise<string> => {
    throw new Error('getCurrentUserId not yet implemented');
  };

  // ------------------------------------------- Lambda -------------------------------------------

  getLambdaPrefixes = (): Promise<PlainObject<V1_LambdaPrefix>[]> => {
    throw new Error('getLambdaPrefixes not yet implemented');
  };

  // ------------------------------------------- Protocol -------------------------------------------

  getClassifierPathMap = (): Promise<ClassifierPathMapping[]> => {
    throw new Error('getClassifierPathMap not yet implemented');
  };
  getSubtypeInfo = (): Promise<SubtypeInfo> => {
    throw new Error('getSubtypeInfo not yet implemented');
  };

  // ------------------------------------------- SDLC -------------------------------------------

  createPrototypeProject = (): Promise<{
    projectId: string;
    webUrl: string | undefined;
    owner: string;
  }> => {
    throw new Error('createPrototypeProject not yet implemented');
  };
  validUserAccessRole = (userId: string): Promise<boolean> => {
    throw new Error('validUserAccessRole not yet implemented');
  };

  // ------------------------------------------- Grammar -------------------------------------------

  grammarToJSON_model = (
    input: string,
    sourceId?: string,
    lineOffset?: number,
    returnSourceInformation?: boolean,
  ): Promise<PlainObject<V1_PureModelContextData>> => {
    throw new Error('grammarToJSON_model not yet implemented');
  };
  grammarToJSON_lambda = (
    input: string,
    sourceId?: string,
    lineOffset?: number,
    columnOffset?: number,
    returnSourceInformation?: boolean,
  ): Promise<PlainObject<V1_RawLambda>> => {
    throw new Error('grammarToJSON_lambda not yet implemented');
  };
  grammarToJSON_lambda_batch = (
    input: Record<string, V1_GrammarParserBatchInputEntry>,
  ): Promise<{
    errors?: Record<string, PlainObject<V1_ParserError>> | undefined;
    result?: Record<string, PlainObject<V1_RawLambda>> | undefined;
  }> => {
    throw new Error('grammarToJSON_lambda_batch not yet implemented');
  };
  grammarToJSON_valueSpecification_batch = (
    input: Record<string, V1_GrammarParserBatchInputEntry>,
  ): Promise<{
    errors?: Record<string, PlainObject<V1_ParserError>> | undefined;
    result?: Record<string, PlainObject<V1_ValueSpecification>> | undefined;
  }> => {
    throw new Error(
      'grammarToJSON_valueSpecification_batch not yet implemented',
    );
  };
  grammarToJSON_valueSpecification = (
    input: string,
  ): Promise<PlainObject<V1_ValueSpecification>> => {
    throw new Error('grammarToJSON_valueSpecification not yet implemented');
  };
  grammarToJSON_relationalOperationElement = (
    input: string,
    sourceId?: string,
    lineOffset?: number,
    columnOffset?: number,
    returnSourceInformation?: boolean,
  ): Promise<PlainObject<V1_RawRelationalOperationElement>> => {
    throw new Error(
      'grammarToJSON_relationalOperationElement not yet implemented',
    );
  };
  grammarToJSON_relationalOperationElement_batch = (
    input: Record<string, V1_GrammarParserBatchInputEntry>,
  ): Promise<{
    errors?: Record<string, PlainObject<V1_ParserError>> | undefined;
    result?:
      | Record<string, PlainObject<V1_RawRelationalOperationElement>>
      | undefined;
  }> => {
    throw new Error(
      'grammarToJSON_relationalOperationElement_batch not yet implemented',
    );
  };
  JSONToGrammar_model = (
    input: PlainObject<V1_PureModelContextData>,
    renderStyle?: V1_RenderStyle,
  ): Promise<string> => {
    throw new Error('JSONToGrammar_model not yet implemented');
  };
  JSONToGrammar_lambda = (
    input: PlainObject<V1_RawLambda>,
    renderStyle?: V1_RenderStyle,
  ): Promise<string> => {
    throw new Error('JSONToGrammar_lambda not yet implemented');
  };
  JSONToGrammar_lambda_batch = (
    input: Record<string, PlainObject<V1_RawLambda>>,
    renderStyle?: V1_RenderStyle,
  ): Promise<Record<string, string>> => {
    throw new Error('JSONToGrammar_lambda_batch not yet implemented');
  };
  JSONToGrammar_valueSpecification_batch = (
    input: Record<string, PlainObject<V1_ValueSpecification>>,
    renderStyle?: V1_RenderStyle,
  ): Promise<Record<string, string>> => {
    throw new Error(
      'JSONToGrammar_valueSpecification_batch not yet implemented',
    );
  };
  JSONToGrammar_valueSpecification = (
    input: PlainObject<V1_ValueSpecification>,
    renderStyle?: V1_RenderStyle,
  ): Promise<string> => {
    throw new Error('JSONToGrammar_valueSpecification not yet implemented');
  };
  JSONToGrammar_relationalOperationElement = (
    input: PlainObject<V1_RawRelationalOperationElement>,
    renderStyle?: V1_RenderStyle,
  ): Promise<string> => {
    throw new Error(
      'JSONToGrammar_relationalOperationElement not yet implemented',
    );
  };
  JSONToGrammar_relationalOperationElement_batch = (
    input: Record<string, PlainObject<V1_RawRelationalOperationElement>>,
    renderStyle?: V1_RenderStyle,
  ): Promise<Record<string, string>> => {
    throw new Error(
      'JSONToGrammar_relationalOperationElement_batch not yet implemented',
    );
  };

  // ------------------------------------------- Test ---------------------------------------

  runTests = (
    input: PlainObject<V1_RunTestsInput>,
  ): Promise<PlainObject<V1_RunTestsResult>> => {
    throw new Error('runTests not yet implemented');
  };
  debugTests = (
    input: PlainObject<V1_RunTestsInput>,
  ): Promise<PlainObject<V1_DebugTestsResult>> => {
    throw new Error('debugTests not yet implemented');
  };

  // ------------------------------------------- External Format ---------------------------------------

  getAvailableExternalFormatsDescriptions = (): Promise<
    PlainObject<V1_ExternalFormatDescription>[]
  > => {
    throw new Error(
      'getAvailableExternalFormatsDescriptions not yet implemented',
    );
  };
  generateModel = (
    input: PlainObject<V1_ExternalFormatModelGenerationInput>,
  ): Promise<PlainObject<V1_PureModelContextData>[]> => {
    throw new Error('generateModel not yet implemented');
  };
  generateSchema = (
    input: PlainObject<V1_GenerateSchemaInput>,
  ): Promise<PlainObject<V1_PureModelContextData>[]> => {
    throw new Error('generateSchema not yet implemented');
  };

  // ------------------------------------------- Code Import -------------------------------------------

  getAvailableCodeImportDescriptions = (): Promise<
    PlainObject<V1_ImportConfigurationDescription>[]
  > => {
    throw new Error('getAvailableCodeImportDescriptions not yet implemented');
  };

  // ------------------------------------------- Schema Import -------------------------------------------

  getAvailableSchemaImportDescriptions = (): Promise<
    PlainObject<V1_ImportConfigurationDescription>[]
  > => {
    throw new Error('getAvailableSchemaImportDescriptions not yet implemented');
  };

  // ------------------------------------------- Code Generation -------------------------------------------

  getAvailableCodeGenerationDescriptions = (): Promise<
    PlainObject<V1_GenerationConfigurationDescription>[]
  > => {
    throw new Error(
      'getAvailableCodeGenerationDescriptions not yet implemented',
    );
  };
  generateFile = (
    mode: GenerationMode,
    type: string,
    input: PlainObject<V1_GenerateFileInput>,
  ): Promise<PlainObject<V1_GenerationOutput>[]> => {
    throw new Error('generateFile not yet implemented');
  };
  generateAritfacts = (
    input: PlainObject<V1_ArtifactGenerationExtensionInput>,
  ): Promise<PlainObject<V1_ArtifactGenerationExtensionOutput>> => {
    throw new Error('generateAritfacts not yet implemented');
  };

  // ------------------------------------------- Schema Generation -------------------------------------------

  getAvailableSchemaGenerationDescriptions = (): Promise<
    PlainObject<V1_GenerationConfigurationDescription>[]
  > => {
    throw new Error(
      'getAvailableSchemaGenerationDescriptions not yet implemented',
    );
  };

  // --------------------------------------------- Test Data Generation ---------------------------------------------

  generateTestData = (
    input: PlainObject<V1_TestDataGenerationInput>,
  ): Promise<PlainObject<V1_TestDataGenerationResult>> => {
    throw new Error('generateTestData not yet implemented');
  };

  // ------------------------------------------- Compile -------------------------------------------

  compile = (
    input: PlainObject<V1_PureModelContext>,
  ): Promise<PlainObject<V1_CompileResult>> => {
    throw new Error('compile not yet implemented');
  };
  lambdaReturnType = (
    input: PlainObject<V1_LambdaReturnTypeInput>,
  ): Promise<PlainObject<V1_LambdaReturnTypeResult>> => {
    throw new Error('lambdaReturnType not yet implemented');
  };

  // ------------------------------------------- Execute -------------------------------------------

  runQuery = (
    input: PlainObject<V1_ExecuteInput>,
    options?: {
      returnAsResponse?: boolean;
      serializationFormat?: EXECUTION_SERIALIZATION_FORMAT | undefined;
      abortController?: AbortController | undefined;
    },
  ): Promise<PlainObject<V1_ExecutionResult> | Response> => {
    throw new Error('runQuery not yet implemented');
  };
  generatePlan = (
    input: PlainObject<V1_ExecuteInput>,
  ): Promise<PlainObject<V1_ExecutionPlan>> => {
    throw new Error('generatePlan not yet implemented');
  };
  debugPlanGeneration = (
    input: PlainObject<V1_ExecuteInput>,
  ): Promise<{ plan: PlainObject<V1_ExecutionPlan>; debug: string[] }> => {
    throw new Error('debugPlanGeneration not yet implemented');
  };
  generateTestDataWithDefaultSeed = (
    input: PlainObject<V1_ExecuteInput>,
  ): Promise<string> => {
    throw new Error('generateTestDataWithDefaultSeed not yet implemented');
  };
  generateTestDataWithSeed = (
    input: PlainObject<V1_ExecuteInput>,
  ): Promise<string> => {
    throw new Error('generateTestDataWithSeed not yet implemented');
  };
  /**
   * TODO: this is an internal API that should me refactored out using extension mechanism
   */
  INTERNAL__cancelUserExecutions = (
    userID: string,
    broadcastToCluster: boolean,
  ): Promise<string> => {
    throw new Error('INTERNAL__cancelUserExecutions not yet implemented');
  };

  // ------------------------------------------- Query -------------------------------------------

  searchQueries = (
    searchSpecification: PlainObject<V1_QuerySearchSpecification>,
  ): Promise<PlainObject<V1_LightQuery>[]> => {
    throw new Error('searchQueries not yet implemented');
  };
  getQueries = (queryIds: string[]): Promise<PlainObject<V1_LightQuery>[]> => {
    throw new Error('getQueries not yet implemented');
  };
  getQuery = (queryId: string): Promise<PlainObject<V1_Query>> => {
    throw new Error('getQuery not yet implemented');
  };
  createQuery = (
    query: PlainObject<V1_Query>,
  ): Promise<PlainObject<V1_Query>> => {
    throw new Error('createQuery not yet implemented');
  };
  updateQuery = (
    queryId: string,
    query: PlainObject<V1_Query>,
  ): Promise<PlainObject<V1_Query>> => {
    throw new Error('updateQuery not yet implemented');
  };
  patchQuery = (
    queryId: string,
    query: PlainObject<Partial<V1_Query>>,
  ): Promise<PlainObject<V1_Query>> => {
    throw new Error('patchQuery not yet implemented');
  };
  deleteQuery = (queryId: string): Promise<PlainObject<V1_Query>> => {
    throw new Error('deleteQuery not yet implemented');
  };

  // --------------------------------------- Analysis ---------------------------------------

  analyzeMappingModelCoverage = (
    input: PlainObject<V1_MappingModelCoverageAnalysisInput>,
  ): Promise<PlainObject<V1_MappingModelCoverageAnalysisResult>> => {
    throw new Error('analyzeMappingModelCoverage not yet implemented');
  };
  surveyDatasets = (
    input: PlainObject<V1_StoreEntitlementAnalysisInput>,
  ): Promise<PlainObject<V1_SurveyDatasetsResult>> => {
    throw new Error('surveyDatasets not yet implemented');
  };
  checkDatasetEntitlements = (
    input: PlainObject<V1_EntitlementReportAnalyticsInput>,
  ): Promise<PlainObject<V1_CheckEntitlementsResult>> => {
    throw new Error('checkDatasetEntitlements not yet implemented');
  };
  buildDatabase = (
    input: PlainObject<V1_DatabaseBuilderInput>,
  ): Promise<PlainObject<V1_PureModelContextData>> => {
    throw new Error('buildDatabase not yet implemented');
  };

  // ------------------------------------------- Function ---------------------------------------

  executeRawSQL = (
    input: PlainObject<V1_RawSQLExecuteInput>,
  ): Promise<string> => {
    throw new Error('executeRawSQL not yet implemented');
  };
  getAvailableFunctionActivators = (): Promise<
    PlainObject<V1_FunctionActivatorInfo>[]
  > => {
    throw new Error('getAvailableFunctionActivators not yet implemented');
  };
  validateFunctionActivator = (
    input: PlainObject<V1_FunctionActivatorInput>,
  ): Promise<PlainObject<V1_FunctionActivatorError>[]> => {
    throw new Error('validateFunctionActivator not yet implemented');
  };
  publishFunctionActivatorToSandbox = (
    input: PlainObject<V1_FunctionActivatorInput>,
  ): Promise<PlainObject<V1_DeploymentResult>> => {
    throw new Error('publishFunctionActivatorToSandbox not yet implemented');
  };

  // ------------------------------------------- Relational ---------------------------------------

  generateModelsFromDatabaseSpecification = (
    input: PlainObject<V1_DatabaseToModelGenerationInput>,
  ): Promise<PlainObject<V1_PureModelContextData>> => {
    throw new Error(
      'generateModelsFromDatabaseSpecification not yet implemented',
    );
  };
  getAvailableRelationalDatabaseTypeConfigurations = (): Promise<
    PlainObject<V1_RelationalConnectionBuilder>[]
  > => {
    throw new Error(
      'getAvailableRelationalDatabaseTypeConfigurations not yet implemented',
    );
  };

  // ------------------------------------------- Service -------------------------------------------

  /**
   * TODO: this is an internal API that should be refactored out using extension mechanism
   */
  TEMPORARY__getServerServiceInfo = (): Promise<
    PlainObject<V1_ServiceConfigurationInfo>
  > => {
    throw new Error('TEMPORARY__getServerServiceInfo not yet implemented');
  };
  /**
   * TODO: this is an internal API that should be refactored out using extension mechanism
   */
  TEMPORARY__getServiceVersionInfo = (
    serviceServerUrl: string,
    serviceId: string,
  ): Promise<PlainObject<V1_ServiceStorage>> => {
    throw new Error('TEMPORARY__getServiceVersionInfo not yet implemented');
  };
  /**
   * TODO: this is an internal API that should be refactored out using extension mechanism
   */
  TEMPORARY__activateGenerationId = (
    serviceServerUrl: string,
    generationId: string,
  ): Promise<Response> => {
    throw new Error('TEMPORARY__activateGenerationId not yet implemented');
  };
  runServicePostVal = (
    servicePath: string,
    input: PlainObject,
    assertionId: string,
  ): Promise<PlainObject> => {
    throw new Error('runServicePostVal not yet implemented');
  };
  /**
   * TODO: this is an internal API that should be refactored out using extension mechanism
   */
  INTERNAL__registerService = (
    input: PlainObject<V1_PureModelContext>,
    serviceServerUrl: string,
    serviceExecutionMode: ServiceExecutionMode,
    TEMPORARY__useStoreModel: boolean,
    TEMPORARY__useGenerateLineage: boolean,
    TEMPORARY__useGenerateOpenApi: boolean,
  ): Promise<PlainObject<V1_ServiceRegistrationResult>> => {
    throw new Error('INTERNAL__registerService not yet implemented');
  };
}
