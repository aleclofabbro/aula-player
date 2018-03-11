import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storeFactory } from './redux-engine/src/main';
import { Provider } from 'react-redux';
import { App } from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory({
  songLibraryProvider: () =>
    new Promise((resolve) => setTimeout(() => resolve([
      {
        id: 'id1',
        title: 'title1',
        imgUrl: 'imgUrl1',
        author: 'author1',
        songUrl: 'songUrl1'
      },
      {
        id: 'id2',
        title: 'title2',
        imgUrl: 'imgUrl2',
        author: 'author2',
        songUrl: 'songUrl2'
      }
    ]),                                 2000))
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