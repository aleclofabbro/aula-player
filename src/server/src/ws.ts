// tslint:disable-next-line:no-require-imports no-var-requires
const socketIo: SocketIOStatic = require('socket.io');
type ClientInfo = {
  listensSong: string | null;
  socket: SocketIO.Socket;
};

// tslint:disable-next-line:no-any
export const ws = (app: any) => {
  const io = socketIo(app);
  let clients: ClientInfo[] = [];
  const broadcastNowListenings = () => {
      const newListenings = clients
        .map(client => client.listensSong)
        .filter<string>((id): id is string => typeof id === 'string');
      io.sockets.emit('client-listening', newListenings);
  };
  io.on('connection', (socket) => {
    clients = clients.concat({
      socket,
      listensSong: null
    });
    socket.on('listening', (songId: string | null) => {
      clients = clients.map(client =>
        client.socket === socket
        ? {
          ...client,
          listensSong: songId
        }
        : client
      );
      broadcastNowListenings();
    });
    socket.on('disconnect', () => {
      clients = clients.filter(client => client.socket !== socket);
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
