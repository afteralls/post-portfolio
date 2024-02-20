<template>
  <USpace layout="wrapper">
    <AppHome />
    <AppInfo />
    <AppProjects />
  </USpace>
</template>

<script setup lang="ts">
const { t } = useI18n()
const title = 'UI/Front-End Developer'
const desc = computed(() => t('home.desc'))
const image = '/main.webp'

useSeoMeta({
  description: () => desc.value,
  ogTitle: title,
  ogDescription: () => desc.value,
  ogImage: image,
  ogUrl: 'https://afteralls.netlify.app/',
  twitterTitle: title,
  twitterDescription: () => desc.value,
  twitterImage: image,
  twitterCard: 'summary'
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>
