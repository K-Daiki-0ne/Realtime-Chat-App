<template>
  <div class="user-form">
    <input 
      type="text" 
      class="joinInput" 
      placeholder="Please enter your name" 
      v-model="userName"
    >
    <input 
      type="text" 
      class="joinInput hb" 
      placeholder="Please enter room name" 
      v-model="userRoom"
    >
    <button class="button hb" type="submit" @click="goChat() ">Sign In</button>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      userName: null,
      userRoom: null,
      nameValid: true,
      roomValid: true
    }
  },
  methods: {
   goChat() {
     if (!this.userName) {
       this.nameValid == false
     } else if (!this.userRoom) {
       this.roomValid == false
     } else {
       this.$router.push({ 
         name: 'Chat', 
         params: { 
           name: this.userName, 
           room: this.userRoom 
         } 
       })
     }
   }
  }
}
</script>

<style scoped>
.joinInput {
  border: none;
  border-radius: 25px;
  box-shadow: none;
  padding: 15px 20px;
  width: 100%;
  outline: none;
  text-align: center;
  font-family: Times, Times New Roman, Georgia, serif;
  font-size: 18px;
}

.button {
  color: #fff !important;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  background: #81D4FA;
  padding: 15px;
  display: inline-block;
  border: none;
  width: 100%;
  border-radius: 30px;
  box-shadow: none;
  outline: none;
}

.hb {
  margin-top: 30px;
}

.error-message {
  color: red;
}
</style>