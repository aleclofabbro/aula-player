// tslint:disable-next-line:no-require-imports no-var-requires
import * as socketIo from 'socket.io';

interface ClientInfo {
  listensSong: string | null;
  // tslint:disable-next-line:no-any
  socket: any;
}

// tslint:disable-next-line:no-any
export const ws = (server: any) => {
  const io = socketIo(server);
  let clients: ClientInfo[] = [];
  const broadcastNowListenings = (toSocket?: SocketIO.Socket) => {
    const newListenings = clients
      .map(client => client.listensSong)
      .filter<string>((id): id is string => typeof id === 'string');
    (toSocket || io.sockets).emit('clients-listening', newListenings);
  };
  // tslint:disable-next-line:no-any
  io.on('connection', (socket: any) => {
    clients = clients.concat({
      socket,
      listensSong: null
    });
    broadcastNowListenings(socket);
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
