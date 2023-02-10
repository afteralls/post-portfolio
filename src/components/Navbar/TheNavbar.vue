<template>
  <nav ref="navSize" class="nav-wrapper">
    <div class="_container">
      <div class="nav">
        <nav class="_row">
          <RouterLink class="link" to="/">
            <small v-if="width > 600">Главная</small>
            <div v-else class="_i"><HomeIcon /></div>
          </RouterLink>
          <RouterLink class="link" to="/about">
            <small v-if="width > 600">Резюме</small>
            <div v-else class="_i"><PersonIcon /></div>
          </RouterLink>
          <RouterLink class="link" to="/portfolio">
            <small v-if="width > 600">Последние работы</small>
            <div v-else class="_i"><PortfolioIcon /></div>
          </RouterLink>
        </nav>
        <div v-if="width > 900" class="_row">
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
}

.link {
  padding: calc(var(--space) / 2);
  border-radius: var(--space);
}

.active {
  transition: var(--transition);
  color: var(--dark-txt-c);
  fill: var(--dark-txt-c);
  background-color: var(--accent-c);
  padding: calc(var(--space) / 2);
  border-radius: var(--space);
}
</style>
