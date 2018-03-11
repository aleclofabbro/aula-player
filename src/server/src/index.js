"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("./ws");
// tslint:disable-next-line:no-require-imports no-var-requires
var http = require('http');
var app = express();
var httpServer = new http.Server(app);
ws_1.ws(httpServer);
app.get('/library', function (_req, res) { return res.sendfile('./library.json'); });
app.listen(8080);
//# sourceMappingURL=index.js.map