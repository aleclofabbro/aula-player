import { Reducer } from 'redux';
import { SelectSong, SongLibrary } from '../types/actions';
import { Song } from './../types/models';

export interface SongsState {
  library: Song[];
  selected: Song | null;
}
type Actions =
  | SongLibrary
  | SelectSong;

const init: SongsState = {
  library: [] as Song[],
  selected: null,
};

const getSongBySelection = (library: Song[], idOrSong: Song['id'] | Song) => {
  return typeof idOrSong === 'string'
    ? library.find(song => song.id === idOrSong) || null
    : idOrSong;
};

export const songs: Reducer<SongsState> = (state: SongsState = init, action: Actions) => {
  switch (action.type) {
    case 'SongLibrary':
      return { ...state, library: action.payload };
    case 'SelectSong':
      return { ...state, selected: getSongBySelection(state.library, action.payload) };
    default:
      return state;
  }
};
