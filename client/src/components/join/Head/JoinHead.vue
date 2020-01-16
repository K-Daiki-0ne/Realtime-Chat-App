<template>
  <div class="join-head">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'JoinHead',
  data() {
    return {
      text: 'Real Time Chat'
    }
  }
}
</script>

<style scoped>
.join-head {
  color: white;
  font-size: 1.5em;
  padding-bottom: 10px;
  /* border-bottom: 2px solid ; */
}
</style>