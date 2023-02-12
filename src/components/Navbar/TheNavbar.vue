<template>
<nav ref="navSize" class="nav-wrapper">
  <div class="_container">
    <div class="nav">
      <nav class="_row">
        <RouterLink class="link _i" to="/">
          <HomeIcon class="mob-only" />
          <small class="pc-only">Главная</small>
        </RouterLink>
        <RouterLink class="link _i" to="/about">
          <div class="mob-only"><PersonIcon /></div>
          <small class="pc-only">Резюме</small>
        </RouterLink>
        <RouterLink class="link _i" to="/portfolio">
          <div class="mob-only"><PortfolioIcon /></div>
          <small class="pc-only">Последние работы</small>
        </RouterLink>
      </nav>
      <div v-if="width > 920" class="_row">
        <NavThemeSwitcher />
        <div class="_br"></div>
        <div class="_i"><TranslateIcon @click="changeLang" /></div>
        <div class="_br"></div>
        <NavContacts />
      </div>
      <NavMobMenu v-else>
        <template #theme><NavThemeSwitcher /></template>
        <template #translation><div class="_i"><TranslateIcon @click="changeLang" /></div></template>
        <template #contacts><NavContacts /></template>
      </NavMobMenu>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
const changeLang = inject('i18n') as any
const curLang = inject('curLang') as string
const navSize = ref<HTMLInputElement | null>(null)
const width = ref<number>(0)
useResizeObserver(navSize, entries => width.value = entries[0].contentRect.width)
onMounted(() => document.documentElement.lang = curLang)
</script>

<style scoped lang="scss">
.nav-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 8;
  background-color: var(--tp-c);
  backdrop-filter: blur(8px);
}

.nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: var(--space);
  padding: var(--space);

  h3 {
    text-transform: uppercase;
  }
}

.link {
  transition: var(--transition);
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
}

.pc-only {
  @media (max-width: 600px) {
    display: none;
  }
}

.mob-only {
  display: flex;
  align-items: center;

  @media (min-width: 600px) {
    display: none;
  }
}

.active {
  border-bottom: 2px solid var(--txt-c);
}
</style>
