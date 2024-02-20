<template>
  <USpace layout="wrapper">
    <AppHome />
    <AppInfo />
    <AppProjects />
  </USpace>
</template>

<script setup lang="ts">
const title = 'UI/Front-End Developer'
const desc = 'My main goal is to create high-quality, detailed applications and interfaces'
const image = '/main.webp'

useSeoMeta({
  description: desc,
  ogTitle: title,
  ogDescription: desc,
  ogImage: image,
  ogUrl: 'https://afteralls.netlify.app/',
  twitterTitle: title,
  twitterDescription: desc,
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
