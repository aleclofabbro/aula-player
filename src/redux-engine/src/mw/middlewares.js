"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSongLibrary = function (songLibraryProvider) { return function (store) { return function (next) { return function (action) {
    if (action.type === 'LoadSongLibrary') {
        songLibraryProvider()
            .then(function (songs) {
            store.dispatch({ type: 'SongLibrary', payload: songs });
            store.dispatch({ type: 'SelectSong', payload: songs[0] || null });
        })
            .catch(function (error) {
            return store.dispatch({
                type: 'AppError',
                payload: "Could not load library: " + error
            });
        })
            .then(function () { return store.dispatch({ type: 'LoadSongLibraryDone' }); });
    }
    next(action);
}; }; }; };
exports.emitListening = function (emit) { return function (store) { return function (next) { return function (action) {
    if (action.type === 'Play') {
        var selected = store.getState().songs.selected;
        emit(selected && selected.id);
    }
    next(action);
}; }; }; };
//# sourceMappingURL=middlewares.js.map