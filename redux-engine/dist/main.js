"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const middlewares_1 = require("./mw/middlewares");
const aulaPlayerApp_1 = require("./reducers/aulaPlayerApp");
exports.store = (config) => {
    const loadSongLibraryMW = middlewares_1.loadSongLibrary(config.songLibraryProvider);
    return redux_1.createStore(aulaPlayerApp_1.aulaPlayerApp, redux_1.applyMiddleware(loadSongLibraryMW));
};
//# sourceMappingURL=main.js.map