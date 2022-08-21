<template>
  <div class="not-found">
    <div class="home__title" style="text-align: center; align-items: center;">
      <div class="_column" style="gap: 0.8vh;">
        <h1>Looks like you've wandered off somewhere...</h1>
      </div>
      <router-link class="home__link" to="/">
        <p>Home</p>
        <img src="../assets/svg/arrow-right.svg"/>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/main';

.not-found {
  height: 85vh;
  width: 100vw;
  @include all-cent;

  @media (max-width: $extra-medium) {
    height: 90vh;
  }
}
</style>
