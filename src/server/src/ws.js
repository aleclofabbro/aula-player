"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// tslint:disable-next-line:no-require-imports no-var-requires
var socketIo = require('socket.io');
// tslint:disable-next-line:no-any
exports.ws = function (app) {
    var io = socketIo(app);
    var clients = [];
    var broadcastNowListenings = function () {
        var newListenings = clients
            .map(function (client) { return client.listensSong; })
            .filter(function (id) { return typeof id === 'string'; });
        io.sockets.emit('client-listening', newListenings);
    };
    io.on('connection', function (socket) {
        clients = clients.concat({
            socket: socket,
            listensSong: null
        });
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
// io.on('connection', function(socket) {
//   var addedUser = false;
//   // when the client emits 'new message', this listens and executes
//   socket.on('new message', function(data) {
//     // we tell the client to execute 'new message'
//     socket.broadcast.emit('new message', {
//       username: socket.username,
//       message: data
//     });
//   });
//   // when the client emits 'add user', this listens and executes
//   socket.on('add user', function(username) {
//     if (addedUser) return;
//     // we store the username in the socket session for this client
//     socket.username = username;
//     ++numUsers;
//     addedUser = true;
//     socket.emit('login', {
//       numUsers: numUsers
//     });
//     // echo globally (all clients) that a person has connected
//     socket.broadcast.emit('user joined', {
//       username: socket.username,
//       numUsers: numUsers
//     });
//   });
//   // when the client emits 'typing', we broadcast it to others
//   socket.on('typing', function() {
//     socket.broadcast.emit('typing', {
//       username: socket.username
//     });
//   });
//   // when the client emits 'stop typing', we broadcast it to others
//   socket.on('stop typing', function() {
//     socket.broadcast.emit('stop typing', {
//       username: socket.username
//     });
//   });
//   // when the user disconnects.. perform this
//   socket.on('disconnect', function() {
//     if (addedUser) {
//       --numUsers;
//       // echo globally that this client has left
//       socket.broadcast.emit('user left', {
//         username: socket.username,
//         numUsers: numUsers
//       });
//     }
//   });
// });
//# sourceMappingURL=ws.js.map