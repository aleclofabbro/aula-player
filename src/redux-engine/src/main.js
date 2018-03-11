"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const middlewares_1 = require("./mw/middlewares");
const aulaPlayerApp_1 = require("./reducers/aulaPlayerApp");
exports.storeFactory = (config) => {
    // tslint:disable-next-line:no-console
    console.log(redux_1.createStore);
    // tslint:disable-next-line:no-console
    console.log(middlewares_1.loadSongLibrary);
    // tslint:disable-next-line:no-console
    console.log(aulaPlayerApp_1.aulaPlayerApp);
    const loadSongLibraryMW = middlewares_1.loadSongLibrary(config.songLibraryProvider);
    return redux_1.createStore(aulaPlayerApp_1.aulaPlayerApp, redux_1.applyMiddleware(loadSongLibraryMW));
};
//# sourceMappingURL=main.js.map