<template>
  <div id="app">
    <AppHeader />
    <USpace layout="container">
      <USpace layout="wrapper">
        <div></div>
      </USpace>
    </USpace>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const i18nHead = useLocaleHead({ addSeoAttributes: true })
const colorMode = useColorMode()

useHead({
  htmlAttrs: { lang: () => i18nHead.value.htmlAttrs!.lang },
  title: () => t('title'),
  meta: [
    { name: 'theme-color', content: () => (colorMode.value === 'dark' ? '#0c0c0d' : '#ffffff') }
  ]
})
</script>
