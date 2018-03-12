import {
  AppError,
  LoadSongLibrary,
  LoadSongLibraryDone,
  Play,
  SelectSong,
  SongLibrary,
  Stop
} from '../types/actions';
import { MiddlewareHelper } from '../types/redux-types-helpers';
import { appError, loadSongLibraryDone, selectSong, songLibrary, stop } from './../actions/creators';
import { State } from './../reducers/aulaPlayerApp';
import { Song } from './../types/models';

export type SongLibraryProvider = () => Promise<Song[]>;
export type LoadSongMW = MiddlewareHelper<
  State,
  LoadSongLibrary,
  LoadSongLibraryDone | SelectSong | SongLibrary | AppError
>;
export const loadSongLibrary = (
  songLibraryProvider: SongLibraryProvider
): LoadSongMW => store => next => action => {
  if (action.type === 'LoadSongLibrary') {
    songLibraryProvider()
      .then(songs => {
        store.dispatch(songLibrary(songs));
        store.dispatch(selectSong(songs[0] || null));
      })
      .catch(error => store.dispatch(appError(`Could not load library: ${error}`)))
      .then(() => store.dispatch(loadSongLibraryDone()));
  }
  next(action);
};

export type EmitListeningMW = MiddlewareHelper<
  State,
  Play | Stop,
  void
>;
export const emitListening = (
  emit: (song: string | null) => void
): EmitListeningMW => store => next => action => {
  if (action.type === 'Play') {
    const selected = store.getState().songs.selected;
    emit(selected && selected.id);
  } else if (action.type === 'Stop') {
    emit(null);
  }
  next(action);
};

export type StopOnChangeSelectionMW = MiddlewareHelper<State, SelectSong, Stop>;
export const stopOnChangeSelection: StopOnChangeSelectionMW = store => next => action => {
  if (action.type === 'SelectSong') {
    const songId = typeof action.payload === 'string' ? action.payload : action.payload.id;
    const selected = store.getState().songs.selected;
    if (selected && selected.id !== songId) {
      store.dispatch(stop());
    }
  }
  next(action);
};
