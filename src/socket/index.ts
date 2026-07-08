import { Server as HTTPServer } from 'http';

export function initSocket(httpServer: HTTPServer) {
  // Socket.io এখানে বসবে যখন আমরা সেই ধাপে যাবো
  // const io = new SocketIOServer(httpServer, { cors: { origin: '*' } });
  // io.on('connection', (socket) => { ... });
}