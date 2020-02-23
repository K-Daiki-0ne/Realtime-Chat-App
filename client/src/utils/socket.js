import io from 'socket.io-client';
const url = process.env.VUE_APP_END_POINT


export const socket = io(url);