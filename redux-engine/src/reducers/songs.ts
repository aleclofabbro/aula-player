import { Reducer } from 'redux';
import { LoadSongLibrary, LoadSongLibraryDone, Play, SelectSong, SongLibrary, Stop } from '../types/actions';
import { Song } from './../types/models';

export interface SongsState {
  library: Song[];
  selected: Song | null;
  playing: boolean;
  loadingLibrary: boolean;
}
type Actions =
  | Play
  | Stop
  | SongLibrary
  | SelectSong
  | LoadSongLibrary
  | LoadSongLibraryDone;

const init: SongsState = {
  library: [] as Song[],
  selected: null,
  playing: false,
  loadingLibrary: true
};

export const songs: Reducer<SongsState> = (state: SongsState = init, action: Actions) => {
  switch (action.type) {
    case 'SongLibrary':
      return { ...state, library: action.payload };
    case 'SelectSong':
      return { ...state, selected: getSongById(state.library, action.payload) };
    case 'Play':
      return { ...state, playing: true };
    case 'Stop':
      return { ...state, playing: false };
    case 'LoadSongLibrary':
      return { ...state, loadingLibrary: true };
    case 'LoadSongLibraryDone':
      return { ...state, loadingLibrary: false };
    default:
      return state;
  }
};

const getSongById = (library: Song[], id: string) => library.find(song => song.id === id) || null;
