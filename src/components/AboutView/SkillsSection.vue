<template>
  <div class="skills-wrapper _column">
    <small>Текущий стек технологий</small>
    <div class="skills">
      <HTMLItem /><CSSItem /><SassItem /><TSItem /><VueItem /><PiniaItem /><ViteItem /><VueRouterItem /><PWAItem /><VueUseItem /><Node /><DartItem /><FlutterItem />
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills-wrapper {
  width: 40%;
}

.skills {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
