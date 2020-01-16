<template>
  <div class="join">
    <div class="join-container">
      <JoinHead />
      <JoinForm />
    </div>
  </div>
</template>

<script>
import JoinHead from './Head/JoinHead'
import JoinForm from './Form/JoinForm'

export default {
  name: 'JoinContainer',
  components: {
    JoinHead,
    JoinForm
  }
}
</script>

<style scoped>
.join-container {
  width: 100%;
}

@media (min-width: 320px) and (max-width: 480px) {
  .join {
    height: 100%;
  }
  .join-container {
    width: 90%;
  }
}
</style>