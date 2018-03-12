import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storeFactory } from './redux-engine/src/main';
import { Provider } from 'react-redux';
import { App } from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import * as socketIo from 'socket.io-client';

/**
 * IO
 */

const serverUrl = 'http://localhost:8080';
const songLibraryProvider = () =>
  fetch(`${serverUrl}/library`)
    .then(resp => resp.json());

const socket = socketIo(serverUrl);
const emitListening = (song: string | null) => socket.emit('listening', song);
const subscribeClientsListening = (subscriber: (listenings: string[]) => void) =>
  socket.on('clients-listening', subscriber);

/**
 * end IO
 */

const store = storeFactory({
  songLibraryProvider,
  emitListening,
  subscribeClientsListening
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

store.dispatch({type: 'LoadSongLibrary'});

// tslint:disable-next-line:no-any
(window as any).store = store;