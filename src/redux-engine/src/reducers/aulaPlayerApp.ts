import { combineReducers } from 'redux';
import { songs, SongsState } from './songs';
import { status, StatusState } from './status';

export interface State {
  songs: SongsState;
  status: StatusState;
}

export const aulaPlayerApp = combineReducers<State>({
  songs,
  status
});
