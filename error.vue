<template>
  <USpace layout="screen">
    <USpace mode="center" display="col" style="max-width: 27rem">
      <UText type="h1" :text="error.statusCode.toString()" />
      <UText type="p" gray :text="$t('app.error')" />
      <UButton :title="$t('app.back')" :icon="$ICON.home" @trigger="handleError" />
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
defineProps<{ error: { statusCode: number } }>()
const handleError = () => clearError({ redirect: '/' })
</script>
