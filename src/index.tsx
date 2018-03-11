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
        title: 'symphony40',
        imgUrl: 'imgUrl1',
        author: 'mozart',
        songUrl: 'https://www.mfiles.co.uk/mp3-downloads/mozart-symphony40-1.mp3'
      },
      {
        id: 'id2',
        title: 'Symphony5',
        imgUrl: 'imgUrl2',
        author: 'Beethoven',
        songUrl: 'https://www.mfiles.co.uk/mp3-downloads/Beethoven-Symphony5-1.mp3'
      }
    ]),                                 500))
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