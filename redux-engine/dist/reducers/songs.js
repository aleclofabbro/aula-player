"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init = {
    library: [],
    selected: null,
    playing: false,
    loadingLibrary: true
};
exports.songs = (state = init, action) => {
    switch (action.type) {
        case 'SongLibrary':
            return Object.assign({}, state, { library: action.payload });
        case 'SelectSong':
            return Object.assign({}, state, { selected: getSongById(state.library, action.payload) });
        case 'Play':
            return Object.assign({}, state, { playing: true });
        case 'Stop':
            return Object.assign({}, state, { playing: false });
        case 'LoadSongLibrary':
            return Object.assign({}, state, { loadingLibrary: true });
        case 'LoadSongLibraryDone':
            return Object.assign({}, state, { loadingLibrary: false });
        default:
            return state;
    }
};
const getSongById = (library, id) => library.find(song => song.id === id) || null;
//# sourceMappingURL=songs.js.map