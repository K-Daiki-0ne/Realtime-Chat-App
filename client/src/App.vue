<template>
  <div id="app">
    <transition name="router-anim" enter-active-class="animated slideInRight">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    console.log(process.env.VUE_APP_END_POINT)
  }
}
</script>


<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  height: 100vh;
}
</style>
