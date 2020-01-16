<template>
  <div class="message">
    <div class="container" >
      <ul class="text-area">
        <li 
          v-for="(msg, i) in messages" 
          :key="i" 
          :class="{ owner: msg.userName == ownName }">
          <b class="user-name">
            {{ msg.userName }}
            <i class="time">{{ msg.time }}</i>
          </b>
          <br>
          <div class="main-message">
            {{ msg.text }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { socket } from '../../../utils/socket'
export default {
  name: 'Message',
  props: {
    name: String
  },
  data() {
    return {
      ownName: '',
      messages: []
    }
  },
  mounted() {
    socket.on('message', message => {
      this.messages.push(message)
    })
  },
  created() {
    this.ownName = this.$route.params['name'];
  }
}
</script>

<style scoped>
.message {
  padding: 2.5% 0;
  overflow: auto;
  flex: auto;
  max-width: 100%;
  min-width: 60%;
}

.text-area {
  display: inline-block;
  width: 100%;
  height: 70vh;
  padding: 0;
  vertical-align: top;
  padding: 1%;
  list-style: none;
}

.text-area li {
  float: left;
  clear: both;
  padding: 5px;
  background: steelblue;
  margin-bottom: 14px;
  border-radius: 15px;
  min-width: 40%;
  max-width: 80%;
}

.text-area li.owner {
  float: right;
  background-color: yellowgreen;
  color: #000;;
}

.text-area i.time {
  margin-right: 10%;
  float: right;
  font-size: 12px;
}

.user-name {
  margin-left: 5%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 15px; 
}

.main-message {
  margin-left: 5%;
}
.container {
  display: flex;
  justify-content: flex-end;
  padding: 0%;
  margin-top: 1px;
}

</style>
