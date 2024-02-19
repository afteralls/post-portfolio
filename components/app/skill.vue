<template>
  <USpace display="row" gap="sm" :style="`background-color: rgba(${rgb}, 0.2)`" class="skill">
    <UIcon :name="icon" />
    <UText :text="name" />
  </USpace>
</template>

<script setup lang="ts">
defineProps<{ name: string; icon: string; rgb: string }>()
</script>

<style scoped lang="scss">
.skill {
  padding: toRem(5) toRem(10);
  border-radius: var(--space-m);
}
</style>
