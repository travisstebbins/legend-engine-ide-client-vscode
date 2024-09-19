import {
  type ApplicationStore,
  buildPureGraphManager,
  GraphManagerState,
} from '@finos/legend-vscode-extension-dependencies';
import { type LegendEntity } from '../model/LegendEntity';
import { type LegendVSCodeApplicationConfig } from '../application/LegendVSCodeApplicationConfig';
import { type LegendVSCodePluginManager } from '../application/LegendVSCodePluginManager';
import { V1_VSCodeLSPServerClient } from '../graph/V1_VSCodeLSPServerClient';

export const buildGraphManagerStateFromEntities = async (
  entities: LegendEntity[],
  applicationStore: ApplicationStore<
    LegendVSCodeApplicationConfig,
    LegendVSCodePluginManager
  >,
): Promise<GraphManagerState> => {
  const serverClient = new V1_VSCodeLSPServerClient();
  const graphManager = buildPureGraphManager(
    applicationStore.pluginManager,
    applicationStore.logService,
    serverClient,
  );
  const graphManagerState = new GraphManagerState(
    applicationStore.pluginManager,
    applicationStore.logService,
    graphManager,
  );
  await graphManagerState.graphManager.initialize({
    env: 'dev',
    tabSize: 2,
    clientConfig: {
      baseUrl: applicationStore.config.engineServerUrl,
      enableCompression: true,
    },
  });
  await graphManagerState.initializeSystem();
  await graphManagerState.graphManager.buildGraph(
    graphManagerState.graph,
    entities,
    graphManagerState.graphBuildState,
    {},
  );
  return graphManagerState;
};
