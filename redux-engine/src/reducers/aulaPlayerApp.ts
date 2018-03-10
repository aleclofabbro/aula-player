import { combineReducers } from 'redux';
import { songs, SongsState } from './songs';

export interface State {
  songs: SongsState;
}

export const aulaPlayerApp = combineReducers<State>({
  songs,
});
