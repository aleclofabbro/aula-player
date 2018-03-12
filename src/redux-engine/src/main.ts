import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { clientsListenings } from './actions/creators';
import {
  emitListening,
  loadSongLibrary,
  SongLibraryProvider,
  stopOnChangeSelection
} from './mw/middlewares';
import { aulaPlayerApp, State } from './reducers/aulaPlayerApp';

export interface Config {
  songLibraryProvider: SongLibraryProvider;
  emitListening(song: string | null): void;
  subscribeClientsListening(subscriber: (listenings: string[]) => void): void;
}
export const storeFactory = (config: Config): Store<State> => {
  const loadSongLibraryMW = loadSongLibrary(config.songLibraryProvider);
  const listeningMW = emitListening(config.emitListening);
  const store = createStore<State>(
    aulaPlayerApp,
    applyMiddleware(
      loadSongLibraryMW as Middleware,
      listeningMW as Middleware,
      stopOnChangeSelection as Middleware
    )
  );
  config.subscribeClientsListening(listenings =>
    store.dispatch(clientsListenings(listenings))
  );

  return store;
};
