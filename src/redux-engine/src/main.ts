import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { loadSongLibrary, SongLibraryProvider } from './mw/middlewares';
import { aulaPlayerApp, State } from './reducers/aulaPlayerApp';

export interface Config {
  songLibraryProvider: SongLibraryProvider;
}
export const storeFactory = (config: Config): Store<State> => {
  const loadSongLibraryMW = loadSongLibrary(config.songLibraryProvider);

  return createStore<State>(
    aulaPlayerApp,
    applyMiddleware(
      loadSongLibraryMW as Middleware
    )
  );
};
