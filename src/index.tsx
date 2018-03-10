import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storeFactory } from './redux-engine/src/main';
import { Provider } from 'react-redux';
import { App } from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// tslint:disable-next-line:no-console
console.log(storeFactory);
const store = storeFactory({
  songLibraryProvider: () =>
    Promise.resolve([
      {
        id: 'id1',
        title: 'title1',
        author: 'author1',
        url: 'url1'
      },
      {
        id: 'id2',
        title: 'title2',
        author: 'author2',
        url: 'url2'
      }
    ])
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
