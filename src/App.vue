<template>
<TheNavbar />
<AppBackground class="app-background _full-fixed" />
<div class="app-wrapper _full-fixed"></div>
<div class="_container">
  <RouterView v-slot="{ Component }">
    <Transition name="main" mode="out-in">
      <div class="wrapper">
        <component :is="Component" />
      </div>
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


.wrapper {
  margin: 6rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: var(--space);
  box-sizing: border-box;
  gap: calc(var(--space) * 3);

  @media(max-width: 900px) {
    margin: 3.75rem auto 0 auto;
  }
}
</style>
  