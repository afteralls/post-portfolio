<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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

const router = useRouter()
router.options.scrollBehavior = (to, _, savedPosition) => {
  if (to.hash) {
    return {
      el: to.hash,
      top: 100,
      behavior: 'smooth'
    }
  } else if (savedPosition) {
    return savedPosition
  } else {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
}
</script>
