import { Reducer } from 'redux';
import { ClientsListenings, SelectSong, SongLibrary } from '../types/actions';
import { Song } from './../types/models';

export interface SongsState {
  library: Song[];
  selected: Song | null;
  clientsListenings: Song['id'][];
}
type Actions =
  | SongLibrary
  | SelectSong
  | ClientsListenings;

const init: SongsState = {
  library: [],
  selected: null,
  clientsListenings: []
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
    case 'ClientsListenings':
      return { ...state, clientsListenings: action.payload };
    default:
      return state;
  }
};
