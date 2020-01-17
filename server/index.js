const express =require('express');
const socketIo = require('socket.io');
const http = require('http');
const router = require('./router/index.js');
const IO = require('./utils/socket.js');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express()
const server = http.createServer(app);
const io = socketIo(server);

app.use(router);
app.use(cors());

IO(io)

server.listen(port, () => console.log(`Server lisning on ${port}`));