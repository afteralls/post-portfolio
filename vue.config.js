const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Post-Portfolio',
    short_name: 'post-portfolio',
    themeColor: '#252423',
    lang: 'en',
    manifestOptions: {
      display: 'standalone',
      background_color: '#252423'
    }
  }
})
