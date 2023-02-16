<template>
<div class="skills-wrapper _column">
  <small>{{ $i18n('about.skillsT1')}}</small>
  <div class="_stack">
    <HTMLItem /><CSSItem /><SassItem /><TSItem /><VueItem /><PiniaItem /><ViteItem /><GitItem /><VueRouterItem /><Node /><VueUseItem /><PWAItem /><DartItem /><FlutterItem />
  </div>
  <small>{{ $i18n('about.skillsT2')}}</small>
  <div class="_stack">
    <JSItem :title="$i18n('global.jsTip')" /><VuexItem /><NuxtItem /><FirebaseItem /><TailwindItem /><WebpackItem /><DockerItem /><PHPItem /><SQLItem /><PSItem />
  </div>
</div>
</template>

<style scoped lang="scss">
.skills-wrapper {
  width: 40%;

  @media (max-width: 920px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
