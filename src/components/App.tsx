import { StatelessComponent } from 'react';
import {
  Library,
  State as LibraryState,
  Actions as LibraryActions
} from './Library';
import {
  Player,
  State as PlayerState,
  Actions as PlayerActions
} from './Player';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import { RefreshIndicator, RefreshIndicatorProps } from 'material-ui';

export interface State {
  loadingLib: boolean;
  library: LibraryState;
  player: PlayerState;
}

export interface Actions {
  library: LibraryActions;
  player: PlayerActions;
}

export type Props = Actions & State;

export const App: StatelessComponent<Props> =  (props) => {
  // const style = {
  //   container: {
  //     position: 'relative'
  //   }
  // };
  const refreshProps: RefreshIndicatorProps = {
    size: 40,
    left: 10,
    top: 0,
    status: props.loadingLib ? 'loading' : 'hide',
    style: {
      display: 'inline-block',
      position: 'relative'
    },
  };
  return (
    <MuiThemeProvider>
      <div>
        <RefreshIndicator {...refreshProps}/>
        <Library {...props.library}/>
        <Player {...props.player} />
      </div>
    </MuiThemeProvider>
  );
};