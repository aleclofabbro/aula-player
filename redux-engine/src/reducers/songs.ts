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

export const songs: Reducer<SongsState> = (state: SongsState = init, action: Actions) => {
  switch (action.type) {
    case 'SongLibrary':
      return { ...state, library: action.payload };
    case 'SelectSong':
      return { ...state, selected: getSongById(state.library, action.payload) };
    default:
      return state;
  }
};

const getSongById = (library: Song[], id: string) => library.find(song => song.id === id) || null;
