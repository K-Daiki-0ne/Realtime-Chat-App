import Vue from 'vue'
import VueRouter from 'vue-router'
import Join from '../views/Join'
import Chat from '../views/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Join',
    component: Join
  },
  {
    path: '/chat/name/:name/room/:room',
    name: 'Chat',
    component: Chat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
