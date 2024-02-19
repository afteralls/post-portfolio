<template>
  <USpace type="section" display="col" pos="left" full class="home">
    <UText type="h2" :text="$t('projects.recent')" />
    <USpace display="grid" class="project-wrapper" full>
      <AppProject
        v-for="(project, idx) in projects"
        :key="idx"
        :banner="project.banner"
        :title="project.title"
        :desc="$t(`projects.${idx}`)"
        :legacy="project.legacy"
        :app="project.app"
        :sourse="project.sourse"
        :skills="project.skills"
      />
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
const projects: Project[] = [
  {
    banner: '/ui.webp',
    title: 'UI Kit',
    sourse: 'https://github.com/afteralls/ui',
    skills: [
      { name: 'Vue', icon: 'logos:vue', rgb: '65, 184, 131' },
      { name: 'Nuxt', icon: 'logos:nuxt-icon', rgb: '0, 220, 130' },
      { name: 'TypeScript', icon: 'skill-icons:typescript', rgb: '0, 122, 204' },
      { name: 'Vite', icon: 'vscode-icons:file-type-vite', rgb: '189, 52, 254' },
      { name: 'VueUse', icon: 'logos:vueuse', rgb: '65, 184, 131' },
      { name: 'SCSS', icon: 'vscode-icons:file-type-scss', rgb: '205, 103, 153' }
    ]
  },
  {
    banner: '/gallery.webp',
    title: 'Cloud Gallery',
    legacy: true,
    sourse: 'https://github.com/afteralls/cloud-gallery',
    app: 'https://cloud-gallery.web.app/',
    skills: [
      { name: 'Vue', icon: 'logos:vue', rgb: '65, 184, 131' },
      { name: 'TypeScript', icon: 'skill-icons:typescript', rgb: '0, 122, 204' },
      { name: 'Vite', icon: 'vscode-icons:file-type-vite', rgb: '189, 52, 254' },
      { name: 'VueUse', icon: 'logos:vueuse', rgb: '65, 184, 131' },
      { name: 'Firebase', icon: 'logos:firebase', rgb: '255, 167, 18' },
      { name: 'SCSS', icon: 'vscode-icons:file-type-scss', rgb: '205, 103, 153' },
      { name: 'Pinia', icon: 'logos:pinia', rgb: '236, 183, 50' },
      { name: 'Vue Router', icon: 'logos:vue', rgb: '65, 184, 131' },
      { name: 'PWA', icon: 'logos:pwa', rgb: '90, 15, 200' }
    ]
  },
  {
    banner: '/generator.webp',
    title: 'QB Generator',
    legacy: true,
    sourse: 'https://github.com/afteralls/qb-generator',
    app: 'https://qb-generator.web.app/',
    skills: [
      { name: 'Vue', icon: 'logos:vue', rgb: '65, 184, 131' },
      { name: 'TypeScript', icon: 'skill-icons:typescript', rgb: '0, 122, 204' },
      { name: 'Vite', icon: 'vscode-icons:file-type-vite', rgb: '189, 52, 254' },
      { name: 'VueUse', icon: 'logos:vueuse', rgb: '65, 184, 131' },
      { name: 'SCSS', icon: 'vscode-icons:file-type-scss', rgb: '205, 103, 153' },
      { name: 'Pinia', icon: 'logos:pinia', rgb: '236, 183, 50' },
      { name: 'Vue Router', icon: 'logos:vue', rgb: '65, 184, 131' },
      { name: 'PWA', icon: 'logos:pwa', rgb: '90, 15, 200' }
    ]
  }
]
</script>

<style scoped lang="scss">
.project-wrapper {
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: $lg) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $sm) {
    grid-template-columns: 1fr;
  }
}
</style>
