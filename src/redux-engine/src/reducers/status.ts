import { Reducer } from 'redux';
import { LoadSongLibrary, LoadSongLibraryDone, Play, SetPlayTime, SetSongLenght, Stop } from '../types/actions';

export interface StatusState {
  songPlaying: boolean;
  loadingLibrary: boolean;
  playTime: number;
  songLenght: number;
}
type Actions =
  | Play
  | Stop
  | LoadSongLibrary
  | LoadSongLibraryDone
  | SetPlayTime
  | SetSongLenght;

const init: StatusState = {
  songPlaying: false,
  playTime: 0,
  loadingLibrary: false,
  songLenght: 0
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
    case 'SetPlayTime':
      return { ...state, playTime: action.payload };
    case 'SetSongLenght':
      return { ...state, songLenght: action.payload };
    default:
      return state;
  }
};
