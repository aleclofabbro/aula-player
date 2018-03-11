import { StatelessComponent } from 'react';
import { Library } from './Library';
import { Player, Props as PlayerProps } from './Player';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Song } from '../redux-engine/src/types/models';
import * as React from 'react';
import { RefreshIndicator, RefreshIndicatorProps } from 'material-ui';
export interface Props {
  songs: Song[];
  loadingLib: boolean;
  player: PlayerProps;
}

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
        <Library songs={props.songs}/>
        <Player {...props.player} />
      </div>
    </MuiThemeProvider>
  );
};