<template>
  <USpace type="section" display="col" pos="left" full class="home">
    <UText type="h2" text="Недавние проекты" />
    <USpace display="grid" class="project-wrapper" full>
      <AppProject
        v-for="(project, idx) in projects"
        :key="idx"
        :banner="project.banner"
        :title="project.title"
        :desc="project.desc"
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
    banner: '/ui.png',
    title: 'UI Kit',
    desc: 'UI-библиотека и готовая конфигурация SSR для проектов, разработанных на фреймворке Nuxt',
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
    banner: '/gallery.png',
    title: 'Cloud Gallery',
    legacy: true,
    desc: 'Авторская облачная галерея для быстрой загрузки и комфортного просмотра изображений с системой авторизации, сжатия изображений и поиска по смарт-тегам',
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
    banner: '/generator.png',
    title: 'QB Generator',
    legacy: true,
    desc: 'Приложение для генерации штрих-кодов в различных форматах с возможностью кастомизации и экспорта',
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
