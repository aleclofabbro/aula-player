"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var init = {
    library: [],
    selected: null,
};
var getSongBySelection = function (library, idOrSong) {
    return typeof idOrSong === 'string'
        ? library.find(function (song) { return song.id === idOrSong; }) || null
        : idOrSong;
};
exports.songs = function (state, action) {
    if (state === void 0) { state = init; }
    switch (action.type) {
        case 'SongLibrary':
            return tslib_1.__assign({}, state, { library: action.payload });
        case 'SelectSong':
            return tslib_1.__assign({}, state, { selected: getSongBySelection(state.library, action.payload) });
        default:
            return state;
    }
};
//# sourceMappingURL=songs.js.map