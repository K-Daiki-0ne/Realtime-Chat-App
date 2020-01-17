<template>
  <div class="navbar">
    <div class="left-content">
      <span>
        <i></i>
      </span>
    </div>
    <div class="center-content">
      <h2>{{ roomData }}</h2>
    </div>
    <div class="right-content">
      <span @click="backHome()">
        <i class="fas fa-times-circle fa-lg icon-color"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    roomData: String,
    disSocket: Function
  },
  
  methods: {
    backHome() {
      // disconnect
      this.disSocket()
      this.$router.push({
        name: 'Join'
      })
    },
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #40C4FF;
  border-radius: 14px 14px 0 0;
  height: 60px;
  width: 100%;
}

.left-content {
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 3%;
  color: white;
}
.right-content {
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
  color: #ECEFF1;
}

.center-content {
  margin-right: -22.5%;
  font-family: Times, Times New Roman, Georgia, serif;
  color: #ECEFF1;
}

.icon-color {
  color: #ECEFF1;
}

</style>