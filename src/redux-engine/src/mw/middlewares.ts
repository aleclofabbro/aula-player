import {
  AppError,
  LoadSongLibrary,
  LoadSongLibraryDone,
  SelectSong,
  SongLibrary
} from '../types/actions';
import { MiddlewareHelper } from '../types/redux-types-helpers';
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
        store.dispatch({ type: 'SongLibrary', payload: songs });
        store.dispatch({ type: 'SelectSong', payload: songs[0] || null });
      })
      .catch(error =>
        store.dispatch({
          type: 'AppError',
          payload: `Could not load library: ${error}`
        })
      )
      .then(() => store.dispatch({ type: 'LoadSongLibraryDone' }));
  }
  next(action);
};
