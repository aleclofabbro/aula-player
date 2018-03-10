"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init = {
    library: [],
    selected: null,
};
const getSongById = (library, id) => library.find(song => song.id === id) || null;
exports.songs = (state = init, action) => {
    switch (action.type) {
        case 'SongLibrary':
            return Object.assign({}, state, { library: action.payload });
        case 'SelectSong':
            return Object.assign({}, state, { selected: getSongById(state.library, action.payload) });
        default:
            return state;
    }
};
//# sourceMappingURL=songs.js.map