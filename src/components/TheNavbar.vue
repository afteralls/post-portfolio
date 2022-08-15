<template>
  <nav class="navbar">
    <router-link class="_link" to="/"><p>Главная</p></router-link>
    <router-link class="_link" to="/about"><p>Обо мне</p></router-link>
    <router-link class="_link" to="/portfolio"><p>Поcледние работы</p></router-link>
  </nav>
</template>

<script>

export default {

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
  border-bottom: 1px solid black;
}

</style>
