"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSongLibrary = (songLibraryProvider) => store => next => action => {
    if (action.type === 'LoadSongLibrary') {
        songLibraryProvider()
            .then(songs => store.dispatch({ type: 'SongLibrary', payload: songs }))
            .catch(error => store.dispatch({
            type: 'AppError',
            payload: `Could not load library ${error}`
        }))
            .then(() => store.dispatch({ type: 'LoadSongLibraryDone' }));
    }
    next(action);
};
//# sourceMappingURL=middlewares.js.map