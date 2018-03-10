"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init = {
    songPlaying: false,
    loadingLibrary: false
};
exports.status = (state = init, action) => {
    switch (action.type) {
        case 'Play':
            return Object.assign({}, state, { songPlaying: true });
        case 'Stop':
            return Object.assign({}, state, { songPlaying: false });
        case 'LoadSongLibrary':
            return Object.assign({}, state, { loadingLibrary: true });
        case 'LoadSongLibraryDone':
            return Object.assign({}, state, { loadingLibrary: false });
        default:
            return state;
    }
};
//# sourceMappingURL=status.js.map