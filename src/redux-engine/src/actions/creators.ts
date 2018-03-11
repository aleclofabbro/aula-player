import * as Actions from '../types/actions';
import { Song } from './../types/models';

export const appError = (error: string): Actions.AppError => {
  return {
    type: 'AppError',
    payload: error
  };
};

export const loadSongLibraryDone = (): Actions.LoadSongLibraryDone => {
  return {
    type: 'LoadSongLibraryDone'
  };
};
export const loadSongLibrary = (): Actions.LoadSongLibrary => {
  return {
    type: 'LoadSongLibrary'
  };
};
export const songLibrary = (songs: Song[]): Actions.SongLibrary => {
  return {
    type: 'SongLibrary',
    payload: songs
  };
};

export const selectSong = (id: Song | Song['id']): Actions.SelectSong => {
  return {
    type: 'SelectSong',
    payload: id
  };
};

export const play = (): Actions.Play => {
  return {
    type: 'Play'
  };
};
export const stop = (): Actions.Stop => {
  return {
    type: 'Stop'
  };
};
export const setPlayTime = (time: number): Actions.SetPlayTime => {
  return {
    type: 'SetPlayTime',
    payload: time
  };
};
export const setSongLenght = (time: number): Actions.SetSongLenght => {
  return {
    type: 'SetSongLenght',
    payload: time
  };
};
