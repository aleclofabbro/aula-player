"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var songs_1 = require("./songs");
exports.aulaPlayerApp = redux_1.combineReducers({
    songs: songs_1.songs,
});
//# sourceMappingURL=aulaPlayerApp.js.map