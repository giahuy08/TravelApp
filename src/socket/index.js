const { defaultChatSocket } = require("../config/defineModel");
const jwt = require("jsonwebtoken");
// const chatSocket = require("./chat.socket");
const { configEnv } = require("../config");
// const ACCOUNT = require("../models/Account.model");
// const DEVICE = require("../models/Device.model");
const USER = require("../models/User.model");


const server = require('http').createServer()
const socketIO = require('socket.io')(server)

socketIO.on('connection', function (client) {
  console.log('Connected...', client.id);

  client.on('message', function name(data) {
    console.log(data);
    socketIO.emit('message', data);
  })

  client.on('disconnect', function () {
    console.log('Disconnected...', client.id);
  })

  client.on('error', function (err) {
    console.log('Error detected', client.id);
    console.log(err);
  })
})


// exports.emitToSocketId = (socketId, eventName, data) => {
//   console.log(`Emit ${eventName}`, socketId, data);
//   global.io.to(`${socketId}`).emit(eventName, data);
// };

// exports.emitOverChannel = (eventName, data) => {
//   console.log(`Emit over channel ${eventName}`, data);
//   global.io.emit(eventName, data);
// };

// exports.emitRoom = (roomId, eventName, data) => {
//   console.log(`Emit Room ${roomId}_${eventName}`, data);
//   global.io.sockets.to(roomId).emit(eventName, data);
// };

// exports.findUserById = (socketId) => {
//   return global.listUser.find((e) => {
//     return e.socket === socketId;
//   });
// };
// exports.findUserBySocket = (socketId) => {
//   return global.listUser.find((e) => {
//     return e.socket === socketId;
//   });
// };

// global.listUser = [];

// exports.init = async () => {
//   global.io.on("connection", async (socket) => {
//     const header = socket.handshake.query.token;
//     const fcm = socket.handshake.query.fcm;

//     if (!header) {
//       io.sockets.sockets[socket.id].disconnect();
//     } else {
//       const token = header.split(" ")[1];
//       jwt.verify(
//         token,
//         configEnv.ACCESS_TOKEN_SECRET,
//         async (err, decodedFromToken) => {
//           if (err) {
//             io.sockets.sockets[socket.id].disconnect();
//           } else {
//             const user = await USER.findById(decodedFromToken.data.id);
//             if (user) {
//               global.listUser.push({
//                 socket: socket.id,
//                 fcm,
//                 userId: decodedFromToken.data.id,
//                 role: account.role,
//               });
//               console.log(`IVAY CCU: `, global.listUser.length);
//             }
//           }
//         }
//       );
//     }

//     // socket.on("UPDATE_DEVICE_CSS", async (data) => {
//     //   const user = this.findUserBySocket(socket.id);
//     //   const device = await DEVICE.findOneAndUpdate(
//     //     {
//     //       deviceUUid: data.deviceUUid,
//     //       creatorUser: user.userId,
//     //     },
//     //     {
//     //       statusDevice: 1,
//     //       fcm: user.fcm,
//     //     },
//     //     { new: true }
//     //   );
//     //   if (!device) {
//     //     data.fcm = user.fcm;
//     //     data.statusDevice = 1;
//     //     data.creatorUser = user.userId;
//     //     await DEVICE.create(data);
//     //   }
//     // });

//     // socket.on("DELETE_DEVICE_CSS", async (data) => {
//     //   const user = this.findUserBySocket(socket.id);
//     //   await DEVICE.findOneAndUpdate(
//     //     {
//     //       deviceUUid: data.deviceUUid,
//     //       creatorUser: user.userId,
//     //       statusDevice: 1,
//     //     },
//     //     { statusDevice: 0 }
//     //   );
//     // });

//     console.log("connect Socket", global.listUser.length);
//     socket.on(defaultChatSocket.sendMessageCSS, (data) =>
//       chatSocket.chatMessage(socket, data)
//     );
//     socket.on(defaultChatSocket.joinRoomCSS, (data) =>
//       chatSocket.joinRoom(socket, data)
//     );
//     socket.on(defaultChatSocket.leaveRoomCSS, (data) =>
//       chatSocket.leaveRoom(socket, data)
//     );

//     socket.on("disconnect", async function () {
//       global.listUser = global.listUser.filter((e) => e.socket !== socket.id);
//       console.log("Disconnect Socket");
//     });
//   });
// };
