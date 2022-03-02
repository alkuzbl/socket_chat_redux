import openSocket, { Socket } from 'socket.io-client';

import { UserType } from 'redux/slices/auth-slice/types';

interface ServerToClientEvents {
  connection: (data: { message: string }) => void;
  ['sent message']: (messages: { message: string; user: UserType }[]) => void;
}
interface ClientToServerEvents {
  connection: () => void;
  ['sent message']: (message: { message: string; user: UserType }) => void;
}

export class SocketApi {
  private socket: Socket<ServerToClientEvents, ClientToServerEvents>;

  // https://back-social.herokuapp.com
  // http://localhost:3009
  constructor() {
    this.socket = openSocket('https://back-social.herokuapp.com', {
      transports: ['websocket'],
      path: '/chat',
      withCredentials: true,
    });
  }

  public on(callback: (message: string) => void) {
    this.socket.on('connection', data => callback(data.message));
  }

  public sendMessage(message: { message: string; user: UserType }) {
    this.socket.emit('sent message', message);
  }

  public getMessage(callback: (messages: { message: string; user: UserType }[]) => void) {
    this.socket.on('sent message', messages => callback(messages));
  }

  public close() {
    this.socket.close();
  }
}
