import io from 'socket.io-client';
import { endPoint } from '../../Secret'

export const socket = io(endPoint);