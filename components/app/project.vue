<template>
  <USpace display="col" block="alt" full>
    <NuxtImg :src="banner" :alt="title" />
    <USpace display="row" gap="sm" style="align-items: flex-end">
      <UText type="h3" :text="title" />
      <UText v-if="legacy" gray text="(Legacy)" />
    </USpace>
    <UText type="p" gray :text="desc" />
    <USpace display="row">
      <ULink :to="sourse" :title="$t('projects.source')" :icon="$ICON.github" global mode="icon" />
      <ULink
        v-if="app"
        :to="app"
        :title="$t('projects.app')"
        icon="icon-park-solid:more-app"
        global
        mode="icon"
      />
    </USpace>
    <UText type="span" :text="$t('projects.stack')" />
    <USpace display="row" gap="bit" style="flex-wrap: wrap">
      <AppSkill
        v-for="(skill, num) in skills"
        :key="num"
        :name="skill.name"
        :icon="skill.icon"
        :rgb="skill.rgb"
      />
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
defineProps<{
  banner: string
  title: string
  legacy?: boolean
  desc: string
  sourse: string
  app?: string
  skills: Skill[]
}>()
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: toRem(200);
  object-fit: cover;
  border-radius: var(--br-rad);
}
</style>
