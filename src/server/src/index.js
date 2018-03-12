"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http_1 = require("http");
var ws_1 = require("./ws");
// tslint:disable-next-line:no-require-imports no-var-requires
var cors = require('cors');
// tslint:disable-next-line:no-require-imports no-var-requires
var app = express();
app.use(cors());
var httpServer = http_1.createServer(app);
ws_1.ws(httpServer);
app.options('/library', cors()); // enable pre-flight request for DELETE request
// tslint:disable-next-line:variable-name
app.get('/library', function (_req, res) { return res.sendfile('./library.json'); });
httpServer.listen(8080);
//# sourceMappingURL=index.js.map