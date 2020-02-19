import io from 'socket.io-client';
// import { endPoint } from '../../Secret'

const url = process.env.VUE_APP_END_POINT

/* 
  local環境で使う場合
*/

export const socket = io(url);