require('date-utils');

const { Users } = require('../models/users.js');

const User = new Users();

// Socket.io module
const IO = (io) => {
  io.on('connection', (socket) => {
    // Join function 
    socket.on('join', ({ name, room }, callback) => {
      const { error, user } = User.addUser({ id: socket.id, name, room });

      if(error) {
        return callback(error);
      }
      socket.emit('adminMessage', {
        user: 'admin',
        text: `${user.name}, welcome to the room ${user.room}`
      });

      socket.broadcast.to(user.room).emit('adminMessage', {
        user: 'admin',
        text: `${user.name}, has joined!`
      });
      socket.join(user.room);
      io.to(user.room).emit('roomInfo', {
        room: user.room,
        users: User.showUser(user.room)
      })
    });
    
    // receive user messages
    socket.on('sendMessage', message => {
      const user = User.getUser(socket.id);
      // Herokuにdeployを行うとロンドンの時間が表示されるバグがあり
      let now    = new Date();
      const msg  = {
        text:     message,
        time:     now.toFormat('HH24:MI'),
        userId:   socket.id,
        userName: user.name
      }
      io.to(user.room).emit('message', msg);
      io.to(user.room).emit('roomInfo', {
        room: user.room,
        users: User.showUser(user.room)
      })
    });
    // Disconnection
    socket.on('disconnect', () => {
      const user = User.deleteUser(socket.id);
      if(user) {
        io.to(user.room).emit('leftUser', {
          user: 'admin',
          text: `${user.name} has left.`
        })
      }
    });
  
  });
}

module.exports = IO