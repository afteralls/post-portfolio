<template>
  <div class="skills-wrapper _column">
    <small>Текущий, используемый мною стек</small>
    <div class="_stack">
      <HTMLItem /><CSSItem /><SassItem /><TSItem /><VueItem /><PiniaItem /><ViteItem /><GitItem /><VueRouterItem /><Node /><VueUseItem /><PWAItem /><DartItem /><FlutterItem />
    </div>
    <small>Также знаю и использую</small>
    <div class="_stack">
      <JSItem /><VuexItem /><FirebaseItem /><TailwindItem /><WebpackItem /><DockerItem /><PHPItem /><SQLItem /><PSItem />
    </div>
    <div class="_row">
      <RouterLink to="/portfolio" class="_btn">
        <small>Последние работы</small>
      </RouterLink>
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
