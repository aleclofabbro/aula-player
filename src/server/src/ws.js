"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// tslint:disable-next-line:no-require-imports no-var-requires
var socketIo = require("socket.io");
// tslint:disable-next-line:no-any
exports.ws = function (server) {
    var io = socketIo(server);
    var clients = [];
    var broadcastNowListenings = function (toSocket) {
        var newListenings = clients
            .map(function (client) { return client.listensSong; })
            .filter(function (id) { return typeof id === 'string'; });
        (toSocket || io.sockets).emit('clients-listening', newListenings);
    };
    // tslint:disable-next-line:no-any
    io.on('connection', function (socket) {
        clients = clients.concat({
            socket: socket,
            listensSong: null
        });
        broadcastNowListenings(socket);
        socket.on('listening', function (songId) {
            clients = clients.map(function (client) {
                return client.socket === socket
                    ? tslib_1.__assign({}, client, { listensSong: songId }) : client;
            });
            broadcastNowListenings();
        });
        socket.on('disconnect', function () {
            clients = clients.filter(function (client) { return client.socket !== socket; });
            broadcastNowListenings();
        });
    });
};
//# sourceMappingURL=ws.js.map