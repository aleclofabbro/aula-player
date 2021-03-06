import { connect, MapStateToProps, MapDispatchToProps, MergeProps } from 'react-redux';
import { State as GlobalState } from '../redux-engine/src/reducers/aulaPlayerApp';
import * as actionCreators from '../redux-engine/src/actions/creators';
import { App as AppView, Props, Actions, State } from '../components/App';

const mapStateToProps: MapStateToProps<State, {}, GlobalState> = state => {
  const selectedSongId = state.songs.selected;
  return {
    library: {
      songs: state.songs.library,
      currentSongId: selectedSongId && selectedSongId.id,
      clientsListenings: state.songs.clientsListenings
    },
    player: {
      playing: state.status.songPlaying,
      song: selectedSongId,
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
      stop: () => dispatch(actionCreators.stop()),
      setTime: (time: number) => dispatch(actionCreators.setPlayTime(time)),
      setSongLenght: (time: number) => dispatch(actionCreators.setSongLenght(time))
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
