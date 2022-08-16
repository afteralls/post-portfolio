const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Резюме',
    short_name: 'post-portfolio',
    themeColor: '#252423',
    lang: 'ru',
    manifestOptions: {
      display: 'standalone',
      background_color: '#252423'
    }
  }
})
