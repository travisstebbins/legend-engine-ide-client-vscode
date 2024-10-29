/**
 * Copyright (c) 2023-present, Goldman Sachs
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
  type ApplicationStore,
  type Entity,
  type ExecutionOptions,
  type PlainObject,
  type V1_ExecuteInput,
  buildPureGraphManager,
  GraphManagerState,
  guaranteeType,
  PureProtocolProcessorPlugin,
  V1_EntitlementReportAnalyticsInput,
  V1_PureGraphManager,
} from '@finos/legend-vscode-extension-dependencies';
import { type LegendVSCodeApplicationConfig } from '../application/LegendVSCodeApplicationConfig';
import { type LegendVSCodePluginManager } from '../application/LegendVSCodePluginManager';
import { type V1_LSPEngine } from '../graph/V1_LSPEngine';
import { V1_LSPExecuteInput } from '../model/engine/ExecuteQueryInput';
import {
  V1_LSPEntitlementReportAnallyticsInput,
  V1_LSPEntitlementReportAnallyticsInputModelSchema,
} from '../model/engine/EntitlementReportAnalyticsInput';
import { serialize } from 'serializr';

export const buildGraphManagerStateFromEntities = async (
  entities: Entity[],
  applicationStore: ApplicationStore<
    LegendVSCodeApplicationConfig,
    LegendVSCodePluginManager
  >,
  engine: V1_LSPEngine,
): Promise<GraphManagerState> => {
  const newGraphManager = buildPureGraphManager(
    applicationStore.pluginManager,
    applicationStore.logService,
    engine,
  );
  const graphManagerState = new GraphManagerState(
    applicationStore.pluginManager,
    applicationStore.logService,
    newGraphManager,
  );
  const graphManager = guaranteeType<V1_PureGraphManager>(
    graphManagerState.graphManager,
    V1_PureGraphManager,
  );
  await graphManager.initialize(
    {
      env: 'dev',
      tabSize: 2,
      clientConfig: {},
    },
    {
      engine,
    },
  );
  await graphManagerState.initializeSystem();
  await graphManagerState.graphManager.buildGraph(
    graphManagerState.graph,
    entities,
    graphManagerState.graphBuildState,
    {},
  );
  return graphManagerState;
};

export const executeInputToLSPExecuteInput = (
  input: V1_ExecuteInput,
  options?: ExecutionOptions,
): PlainObject<V1_LSPExecuteInput> =>
  V1_LSPExecuteInput.serialization.toJson({
    lambda: input.function,
    mapping: input.mapping,
    runtime: input.runtime,
    context: input.context,
    parameterValues: input.parameterValues.reduce(
      (acc, val) => ({
        ...acc,
        [val.name]: (val.value as { _type: string; value: unknown }).value,
      }),
      {},
    ),
    serializationFormat: options?.serializationFormat,
  });

export const entitlementReportAnalyticsInputToLSPInput = (
  input: V1_EntitlementReportAnalyticsInput,
  plugins: PureProtocolProcessorPlugin[],
): PlainObject<V1_LSPEntitlementReportAnallyticsInput> =>
  serialize(V1_LSPEntitlementReportAnallyticsInputModelSchema(plugins), {
    lambda: input.storeEntitlementAnalyticsInput.query,
    runtime: input.storeEntitlementAnalyticsInput.runtime,
    mapping: input.storeEntitlementAnalyticsInput.mapping,
    reports: input.reports,
  });
