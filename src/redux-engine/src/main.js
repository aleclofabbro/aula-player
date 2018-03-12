"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var middlewares_1 = require("./mw/middlewares");
var aulaPlayerApp_1 = require("./reducers/aulaPlayerApp");
exports.storeFactory = function (config) {
    var loadSongLibraryMW = middlewares_1.loadSongLibrary(config.songLibraryProvider);
    var listeningMW = middlewares_1.emitListening(config.emitListening);
    return redux_1.createStore(aulaPlayerApp_1.aulaPlayerApp, redux_1.applyMiddleware(loadSongLibraryMW, listeningMW));
};
//# sourceMappingURL=main.js.map