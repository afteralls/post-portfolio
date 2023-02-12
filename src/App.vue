<template>
  <TheNavbar />
  <AppBackground class="app-background full-fixed" />
  <div class="app-wrapper full-fixed"></div>
  <div class="_container">
    <RouterView v-slot="{ Component }">
      <Transition name="main" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const i18n = inject('func') as LangFunc
router.beforeEach((to, _, next) => { document.title = i18n(to.name as string); next() })
</script>

<style scoped lang="scss">
.app-wrapper {
  backdrop-filter: blur(40px);
  background-color: var(--tp-c);
  z-index: -1;
}

.app-background { z-index: -2; }

.full-fixed {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
}
</style>
  