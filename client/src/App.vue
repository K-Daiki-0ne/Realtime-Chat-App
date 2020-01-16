<template>
  <div id="app">
    <transition name="router-anim" enter-active-class="animated slideInRight">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  height: 100vh;
}
</style>
