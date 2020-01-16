<template>
  <div class="Chat">
    <div class="container">
      <ChatNavbar :roomData="room" :disSocket="disSocket"/>
      <ChatMessage :name="userName" />
        <div class="text-input">
          <form class="message-form">
            <input 
              type="text"
              placeholder=""
              class="message-input"
              v-model="message"
              @keydown.enter.prevent="sendMessage()"
            >
            <button @click.prevent="sendMessage()" class="send-message">
              <i class="fas fa-paper-plane send-button"></i>
            </button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import { socket } from '../../utils/socket'
import ChatNavbar from '../Chat/Navbar/ChatNavbar'
import ChatMessage from '../Chat/Message/ChatMessage'
export default {
  name: 'Chat',
  data() {
    return {
      userName: '',
      room: '',
      adminMessage: {}, 
      message: '',
    }
  },
  methods: {
    getParams() {
      this.userName = this.$route.params['name'];
      this.room = this.$route.params['room']
    },
    sendMessage() {
      if(this.message) {
        socket.emit('sendMessage', this.message)
        this.message = ''
      }
      // console.log(this.message, this.messages)
    },
    disSocket() {
      // disconnect
      socket.emit('disconnect');
      socket.off()
    }
  },
  mounted() {
    socket.on('adminMessage', adminMessage => {
      this.$alertify.success(adminMessage.text);      
    }),
    socket.on('leftUser', leftUser => {
      this.$alertify.warning(leftUser.text)
    })
  },
  created() {
    this.getParams()
    socket.emit('join', { 
      name: this.userName,
      room: this.room
     }, (error) => {
       if(error) {
         this.$alertify.alertWithTitle(error, 'Pease try register again');
       }
     })
  },
  beforeDestroy() {
    this.disSocket()
  },
  components: {
    ChatNavbar,
    ChatMessage
  }
}
</script>

<style scoped>
.Chat {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #444444;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #EEEEEE;
  border-radius: 15px;
  height: 75%;
  width: 40%;
}

.message-form {
  display: flex;
  border-top: 2px solid #d3d3d3;
}

.message-input {
  border: none;
  border-radius: 0px 0px 0 15px;
  padding: 2.25%;
  width: 85%;
  font-size: 1.2em;
}

input:focus, textarea:focus, select:focus {
  outline: none;
}

.send-message {
  color: #fff;
  background: #40C4FF;
  padding: 5px;
  display: inline-block;
  border: none;
  width: 20%;
  border-radius: 0 0 14.5px 0;
}


@media (min-width: 320px) and (max-width: 480px) {

  .container {
    width: 90%;
    height: 90%;
  }
}

@media (min-width: 480px) and (max-width: 1200px) {
  .container {
    width: 60%;
  }
}
</style>