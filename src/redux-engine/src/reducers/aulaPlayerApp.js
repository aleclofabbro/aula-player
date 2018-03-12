"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var songs_1 = require("./songs");
var status_1 = require("./status");
exports.aulaPlayerApp = redux_1.combineReducers({
    songs: songs_1.songs,
    status: status_1.status
});
//# sourceMappingURL=aulaPlayerApp.js.map