"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appError = function (error) {
    return {
        type: 'AppError',
        payload: error
    };
};
exports.loadSongLibraryDone = function () {
    return {
        type: 'LoadSongLibraryDone'
    };
};
exports.loadSongLibrary = function () {
    return {
        type: 'LoadSongLibrary'
    };
};
exports.songLibrary = function (songs) {
    return {
        type: 'SongLibrary',
        payload: songs
    };
};
exports.selectSong = function (id) {
    return {
        type: 'SelectSong',
        payload: id
    };
};
exports.play = function () {
    return {
        type: 'Play'
    };
};
exports.stop = function () {
    return {
        type: 'Stop'
    };
};
exports.setPlayTime = function (time) {
    return {
        type: 'SetPlayTime',
        payload: time
    };
};
exports.setSongLenght = function (time) {
    return {
        type: 'SetSongLenght',
        payload: time
    };
};
//# sourceMappingURL=creators.js.map