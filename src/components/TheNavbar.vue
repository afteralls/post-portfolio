<template>
  <nav class="navbar">
    <router-link class="link" to="/"><h3>Главная</h3></router-link>
    <router-link class="link" to="/"><h3>Обо мне</h3></router-link>
    <router-link class="link" to="/"><h3>Поcледние работы</h3></router-link>
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
  width: 90%;
  gap: 50px;
  height: 15vh;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
}

.link {
  @include all-cent;
  text-decoration: none;
  text-align: center;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: $transition;

  &:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
    background: rgba(255,255,255,0.3);
  }

  img {
    margin: $space;
    max-height: 20px;
    width: auto;
  }
}

</style>
