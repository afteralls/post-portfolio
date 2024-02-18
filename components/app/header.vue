<template>
  <div class="header-wrapper">
    <USpace layout="container">
      <USpace display="row" pos="between" full class="header">
        <ULink to="/" :title="$t('title')" :icon="$ICON.home" mode="index" />
        <USpace display="row">
          <UButton
            :title="$t('app.lang')"
            mode="icon"
            :icon="$ICON.language"
            @trigger="setLocale(langConfig[locale as Lang])"
          />
          <UButton
            :title="$t('app.theme')"
            mode="icon"
            :icon="$ICON[$colorMode.preference as ColorMode]"
            @trigger="$colorMode.preference = themeConfig[$colorMode.preference as ColorMode]"
          />
          <div class="divider"></div>
          <template v-for="(link, idx) in links" :key="idx">
            <ULink :to="link.to" :title="link.title" global :icon="link.icon" mode="icon" />
          </template>
        </USpace>
      </USpace>
    </USpace>
  </div>
</template>

<script setup lang="ts">
type Link = { to: string; icon: string; title: string }
type ColorMode = 'system' | 'dark' | 'light'
type Lang = 'ru' | 'en'

const links: Link[] = [
  { to: 'https://github.com/afteralls', icon: $ICON.github, title: 'Github' },
  { to: 'https://t.me/afterallspace', icon: $ICON.telegram, title: 'Telegram' },
  { to: 'mailto:afterallspace@gmail.com', icon: $ICON.email, title: 'E-Mail' }
]

const { locale, setLocale } = useI18n()
const langConfig: Record<Lang, Lang> = { ru: 'en', en: 'ru' }
const themeConfig: Record<ColorMode, ColorMode> = { system: 'dark', dark: 'light', light: 'system' }
</script>

<style scoped lang="scss">
.header-wrapper {
  position: sticky;
  box-sizing: border-box;
  top: 0;
  width: 100dvw;
  z-index: 85;
  backdrop-filter: blur(8px);
  background: linear-gradient(180deg, var(--bg) 0%, var(--tp) 100%);
  border-bottom: toRem(1) solid var(--br);
}

.divider {
  height: toRem(24);
  width: toRem(1);
  background-color: var(--txt-m);
}

.header {
  height: var(--header-height);
  z-index: 80;

  @media (max-width: $sm) {
    height: var(--mob-header-height);
  }
}
</style>
