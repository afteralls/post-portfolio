<template>
  <nav class="navbar">
    <router-link class="_link" to="/">
      <p v-if="currentWidth > 550">Home</p>
      <img v-else src="../assets/svg/home.svg" alt="Home">
    </router-link>
    <router-link class="_link" to="/about">
      <p v-if="currentWidth > 550">Resume</p>
      <img v-else src="../assets/svg/about.svg" alt="About">
    </router-link>
    <router-link class="_link" to="/portfolio">
      <p v-if="currentWidth > 550">Recent projects</p>
      <img v-else src="../assets/svg/portfolio.svg" alt="Portfolio">
    </router-link>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup () {
    const currentWidth = ref(0)
    const updateWidth = () => { currentWidth.value = window.innerWidth }
    window.addEventListener('resize', updateWidth)
    onMounted(() => { updateWidth() })

    return { currentWidth }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main';

.navbar {
  @include all-cent;
  width: 100%;
  gap: $space;
  height: 15vh;
  box-sizing: border-box;
  border-bottom: 0.16vh solid black;

  img {
    height: 2.45vh;
    width: auto;
  }

  @media (max-width: $extra-small) {
    height: 10vh;
    order: 2;
    border-bottom: none;
    border-top: 0.16vh solid black;
  }

  @media (min-height: $large-w) and (max-width: 1000px) {
    font-size: 0.45em;
    gap: $mSpace;
  }
}
</style>
