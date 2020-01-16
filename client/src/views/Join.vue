<template>
  <div class="join">
    <JoinContainer />
  </div>
</template>

<script>
import JoinContainer from '../components/join/JoinContainer'
export default {
  name: 'Join',
  components: {
    JoinContainer
  }
}
</script>

<style scoped>
.join {
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
}

</style>