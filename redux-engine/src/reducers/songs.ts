import { Play, SelectSong, SongLibrary, Stop } from '../types/actions';
import { Song } from './../types/models';

export interface SongsState {
  library: Song[];
  selected: Song | null;
  playing: boolean;
}
type Actions =
  | Play
  | Stop
  | SongLibrary
  | SelectSong;

const init: SongsState = {
  library: [] as Song[],
  selected: null,
  playing: false,
};

export const songs = (state: SongsState = init, action: Actions): SongsState => {
  switch (action.type) {
    case 'SongLibrary':
      return { ...state, library: action.payload };
    case 'SelectSong':
      return { ...state, selected: getSongById(state.library, action.payload) };
    case 'Play':
      return { ...state, playing: true };
    case 'Stop':
      return { ...state, playing: false };
    default:
      return state;
  }
};

const getSongById = (library: Song[], id: string) => library.find(song => song.id === id) || null;
