<template>
<div class="skills-wrapper _column">
  <small>{{ $i18n('about.skillsT1')}}</small>
  <div class="_stack">
    <HTMLItem /><CSSItem /><SassItem /><TSItem /><VueItem /><PiniaItem /><ViteItem /><GitItem /><VueRouterItem /><Node /><VueUseItem /><PWAItem /><DartItem /><FlutterItem />
  </div>
  <small>{{ $i18n('about.skillsT2')}}</small>
  <div class="_stack">
    <JSItem :title="$i18n('global.jsTip')" /><VuexItem /><NuxtItem /><FirebaseItem /><TailwindItem /><WebpackItem /><DockerItem /><PHPItem /><SQLItem /><PSItem /><FigmaItem />
  </div>
  <small>{{ $i18n('about.downloadT') }}</small>
  <div class="_row">
    <div @click="downloadResume" class="_btn" :title="$i18n('about.downloadT')">
      <small>{{ $i18n('about.downloadBtn') }}</small>
    </div>
    <h5>{{ $i18n('about.downloadTip') }}</h5>
  </div>
</div>
</template>

<script setup lang="ts">
const linkArr: { [key: string]: string } = {
  darkEN: 'https://firebasestorage.googleapis.com/v0/b/post-portfolio.appspot.com/o/Dark-EN.pdf?alt=media&token=230f48af-36f9-4bc6-8ca6-9228b97023c3',
  lightEN: 'https://firebasestorage.googleapis.com/v0/b/post-portfolio.appspot.com/o/Light-EN.pdf?alt=media&token=3c3cb056-3372-4fca-ac6e-6f033e7ff87b',
  darkRU: 'https://firebasestorage.googleapis.com/v0/b/post-portfolio.appspot.com/o/Dark-RU.pdf?alt=media&token=0c34324d-f94f-4eaf-a123-3240869ff093',
  lightRU: 'https://firebasestorage.googleapis.com/v0/b/post-portfolio.appspot.com/o/Light-RU.pdf?alt=media&token=8b76c739-22ad-4e30-8dd0-2185f028e4f0'
}

const downloadResume = () => {
  const isDark = useDark()
  const lang: string | null = localStorage.getItem('lang')
  switch (isDark.value) {
    case true: lang === 'en'
      ? window.open(linkArr.darkEN, '_blank')
      : window.open(linkArr.darkRU, '_blank')
      break
    case false: lang === 'en'
      ? window.open(linkArr.lightEN, '_blank')
      : window.open(linkArr.lightRU, '_blank')
      break
  }
}
</script>

<style scoped lang="scss">
.skills-wrapper {
  width: 40%;
  align-items: flex-start;

  @media (max-width: 920px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
