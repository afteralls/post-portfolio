<template>
  <div class="skill">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ bgColor?: string }>()
</script>

<style lang="scss">

</style>