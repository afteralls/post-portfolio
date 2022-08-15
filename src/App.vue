<template>
  <the-navbar/>
  <router-view v-slot="{ Component }">
    <Transition name="route" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
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

.route {
  &-enter-from {
    opacity: 0;

    @media (max-width: $extra-medium) {
      transform: none;
    }
  }
  &-enter-active {
    transition: all 0.2s ease-out;
  }
  &-leave-to {
    opacity: 0;

    @media (max-width: $extra-medium) {
      transform: none;
    }
  }
  &-leave-active {
    transition: all 0.2s ease-in;
  }
}
</style>
