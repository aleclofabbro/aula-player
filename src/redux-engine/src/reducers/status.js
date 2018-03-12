"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var init = {
    songPlaying: false,
    playTime: 0,
    loadingLibrary: false,
    songLenght: 0
};
exports.status = function (state, action) {
    if (state === void 0) { state = init; }
    switch (action.type) {
        case 'Play':
            return tslib_1.__assign({}, state, { songPlaying: true });
        case 'Stop':
            return tslib_1.__assign({}, state, { songPlaying: false });
        case 'LoadSongLibrary':
            return tslib_1.__assign({}, state, { loadingLibrary: true });
        case 'LoadSongLibraryDone':
            return tslib_1.__assign({}, state, { loadingLibrary: false });
        case 'SetPlayTime':
            return tslib_1.__assign({}, state, { playTime: action.payload });
        case 'SetSongLenght':
            return tslib_1.__assign({}, state, { songLenght: action.payload });
        case 'SelectSong':
            return tslib_1.__assign({}, state, { playTime: 0 });
        default:
            return state;
    }
};
//# sourceMappingURL=status.js.map