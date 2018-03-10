"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var init = {
    library: [],
    selected: null,
    playing: false,
};
exports.songs = function (state, action) {
    if (state === void 0) { state = init; }
    switch (action.type) {
        case 'SongLibrary':
            return tslib_1.__assign({}, state, { library: action.payload });
        case 'SelectSong':
            return tslib_1.__assign({}, state, { selected: getSongById(state.library, action.payload) });
        case 'Play':
            return tslib_1.__assign({}, state, { playing: true });
        case 'Stop':
            return tslib_1.__assign({}, state, { playing: false });
        default:
            return state;
    }
};
var getSongById = function (library, id) { return library.find(function (song) { return song.id === id; }) || null; };
//# sourceMappingURL=songs.js.map