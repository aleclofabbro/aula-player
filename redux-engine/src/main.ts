import { createStore } from 'redux';
import { aulaPlayerApp, State } from './reducers/aulaPlayerApp';

export const store = createStore<State>(aulaPlayerApp);
