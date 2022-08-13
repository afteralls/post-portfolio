<template>
  <nav class="navbar">
    <router-link class="_link" to="/"><h3>Главная</h3></router-link>
    <router-link class="_link" to="/about"><h3>Обо мне</h3></router-link>
    <router-link class="_link" to="/portfolio"><h3>Поcледние работы</h3></router-link>
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
  gap: 50px;
  height: 15vh;
  box-sizing: border-box;
  border-bottom: 1px solid black;
}

</style>
