<template>
<the-navbar/>
<router-view/>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  components: { TheNavbar },
  setup () {

  }
}
</script>

<style lang="scss">
@import './assets/scss/main';

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>
