import { Song } from './models';
// tslint:disable:no-reserved-keywords
export interface Action<T extends string> {
  type: T;
}
export interface ActionP<T extends string, P> extends Action<T> {
  payload: P;
}

export type AppError = ActionP<'AppError', string>;

export type LoadSongLibraryDone = Action<'LoadSongLibraryDone'>;
export type LoadSongLibrary = Action<'LoadSongLibrary'>;
export type SongLibrary = ActionP<'SongLibrary', Song[]>;

export type SelectSong = ActionP<'SelectSong', Song | Song['id']>;

export type Play = Action<'Play'>;
export type Stop = Action<'Stop'>;
export type SetPlayTime = ActionP<'SetPlayTime', number>;
export type SetSongLenght = ActionP<'SetSongLenght', number>;

export type ClientsListenings = ActionP<'ClientsListenings', Song['id'][]>;
