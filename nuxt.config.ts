export default defineNuxtConfig({
  extends: ['github:afteralls/ui'],
  imports: {
    dirs: ['./constants']
  },
  i18n: {
    langDir: './locale/lang',
    locales: [
      { code: 'en', name: 'English', file: 'en.ts' },
      { code: 'ru', name: 'Русский', file: 'ru.ts' }
    ]
  },
  app: {
    head: { title: 'Portfolio' }
  }
})
