import { Song } from './models';
// tslint:disable:no-reserved-keywords
export interface Action<T extends string> {
  type: T;
}
export interface ActionP<T extends string, P> extends Action<T> {
  payload: P;
}

export type LoadSongLibrary = Action<'LoadSongLibrary'>;
export type SongLibrary = ActionP<'SongLibrary', Song[]>;

export type SelectSong = ActionP<'SelectSong', Song['id']>;

export type Play = Action<'Play'>;
export type Stop = Action<'Stop'>;
