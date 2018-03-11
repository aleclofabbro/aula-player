import { connect, MapStateToProps, MapDispatchToProps, MergeProps } from 'react-redux';
import { State as GlobalState } from '../redux-engine/src/reducers/aulaPlayerApp';
import * as actionCreators from '../redux-engine/src/actions/creators';
import { App as AppView, Props, Actions, State } from '../components/App';
import { Song } from '../redux-engine/src/types/models';

const mapStateToProps: MapStateToProps<State, {}, GlobalState> = state => {
  return {
    library: {
      songs: state.songs.library,
    },
    player: {
      playing: state.status.songPlaying,
      song: state.songs.selected,
      time: state.status.playTime,
      songLenght: state.status.songLenght
    },
    loadingLib: state.status.loadingLibrary
  };
};

const mapDispatchToProps: MapDispatchToProps<Actions, {}> = dispatch => {
  return {
    library: {
      selectSong: id => dispatch(actionCreators.selectSong(id))
    },
    player: {
      play: () => dispatch(actionCreators.play()),
      stop: () => dispatch(actionCreators.stop())
    }
  };
};

const mergeProps: MergeProps<State, Actions, {}, Props> = (state, actions) => {
  const props = {
    ...state,
    ...actions,
    library: {
      ...actions.library,
      ...state.library
    },
    player: {
      ...actions.player,
      ...state.player
    }
  };
  return props;
};

export const App =
  connect<State, Actions, {}, Props, GlobalState>(mapStateToProps, mapDispatchToProps, mergeProps)(AppView);
