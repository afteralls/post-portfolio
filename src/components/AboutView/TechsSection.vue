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
  darkEN: 'https://firebasestorage.googleapis.com/v0/b/post-portfolio.appspot.com/o/Dark-EN.pdf?alt=media&token=8fd38d7f-f551-4d61-a335-88b4a2b7691a',
  lightEN: 'https://firebasestorage.googleapis.com/v0/b/post-portfolio.appspot.com/o/Light-EN.pdf?alt=media&token=7cd4263f-1934-4c39-b7b5-8864596415b3',
  darkRU: 'https://firebasestorage.googleapis.com/v0/b/post-portfolio.appspot.com/o/Dark-RU.pdf?alt=media&token=52b8d564-16ca-46fe-b432-11c92cafc332',
  lightRU: 'https://firebasestorage.googleapis.com/v0/b/post-portfolio.appspot.com/o/Light-RU.pdf?alt=media&token=d541cf24-4cf3-4c34-a44b-b678e854b0bd'
}

const linkHandler = (href: string) => window.open(href, '_blank')

const downloadResume = () => {
  const isDark = useDark()
  const lang: string | null = localStorage.getItem('lang')
  isDark.value
    ? lang === 'en' ? linkHandler(linkArr.darkEN) : linkHandler(linkArr.darkRU)
    : lang === 'en' ? linkHandler(linkArr.lightEN) : linkHandler(linkArr.lightRU)
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
