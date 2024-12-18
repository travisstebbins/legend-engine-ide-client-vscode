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
  type PlainObject,
  type V1_RawLambda,
  DataCube,
} from '@finos/legend-vscode-extension-dependencies';
import { LSPDataCubeEngine } from './LSPDataCubeEngine';
import { type VSCodeEvent } from 'vscode-notebook-renderer/events';

export const PurebookCubeRenderer = (props: {
  cellUri: string;
  lambda: PlainObject<V1_RawLambda>;
  postMessage: (message: unknown) => void;
  onDidReceiveMessage: VSCodeEvent<{ command: string; messageId: string; result: unknown }>;
}): React.ReactNode => {
  const { cellUri, lambda, postMessage, onDidReceiveMessage } = props;
  const engine = new LSPDataCubeEngine(
    cellUri,
    lambda,
    postMessage,
    onDidReceiveMessage,
  );
  return (
    <div
      id={`purebook-cube-renderer-${cellUri}`}
      className="purebook-cube-renderer-container"
      style={{ height: '500px' }}
    >
      <DataCube engine={engine} />
    </div>
  );
};