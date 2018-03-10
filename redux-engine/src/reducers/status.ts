import { Reducer } from 'redux';
import { LoadSongLibrary, LoadSongLibraryDone, Play, Stop } from '../types/actions';

export interface StatusState {
  songPlaying: boolean;
  loadingLibrary: boolean;
}
type Actions =
  | Play
  | Stop
  | LoadSongLibrary
  | LoadSongLibraryDone;

const init: StatusState = {
  songPlaying: false,
  loadingLibrary: false
};

export const status: Reducer<StatusState> = (state: StatusState = init, action: Actions) => {
  switch (action.type) {
    case 'Play':
      return { ...state, songPlaying: true };
    case 'Stop':
      return { ...state, songPlaying: false };
    case 'LoadSongLibrary':
      return { ...state, loadingLibrary: true };
    case 'LoadSongLibraryDone':
      return { ...state, loadingLibrary: false };
    default:
      return state;
  }
};
