import { StatelessComponent } from 'react';
import { Song } from '../redux-engine/src/types/models';
import * as React from 'react';
export interface Props {
  songs: Song[];
}

export const App: StatelessComponent<Props> =  (props) => (
  <pre>
    {JSON.stringify(props, null, 4)}
  </pre>
);