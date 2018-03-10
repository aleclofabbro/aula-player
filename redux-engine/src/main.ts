import { applyMiddleware, createStore, Middleware } from 'redux';
import { loadSongLibrary, SongLibraryProvider } from './mw/middlewares';
import { aulaPlayerApp, State } from './reducers/aulaPlayerApp';

interface Config {
  songLibraryProvider: SongLibraryProvider;
}
export const store = (config: Config) => {
  const loadSongLibraryMW = loadSongLibrary(config.songLibraryProvider);

  return createStore<State>(
    aulaPlayerApp,
    applyMiddleware(
      loadSongLibraryMW as Middleware
    )
  );
};
