<template>
<div class="_wrapper">
  <div class="portfolio">
    <ProjectItem
      source-link="https://github.com/afteralls/cloud-gallery"
      app-link="https://cloud-gallery.web.app/"
      :revert="true"
    >
      <template #img><img src="../assets/img/CG.webp" alt="#"></template>
      <template #title><h1>Cloud Gallery</h1></template>
      <template #techs>
        <HTMLItem /><CSSItem /><SassItem /><TSItem /><VueItem /><PiniaItem /><ViteItem /><GitItem /><VueRouterItem /><Node /><VueUseItem /><PWAItem /><FirebaseItem />
      </template>
      <template #desc><h4>{{ $i18n('portfolio.descCG') }}</h4></template>
    </ProjectItem>
    <ProjectItem
      source-link="https://github.com/afteralls/qb-generator"
      app-link="https://generator-space.web.app/"
    >
      <template #img><img src="../assets/img/BG.webp" alt="#"></template>
      <template #title><h1>Barcode Generator</h1></template>
      <template #techs>
        <HTMLItem /><CSSItem /><SassItem /><JSItem /><VueItem /><PiniaItem /><ViteItem /><GitItem /><VueRouterItem /><Node /><VueUseItem /><PWAItem />
      </template>
      <template #desc><h4>{{ $i18n('portfolio.descBG') }}</h4></template>
    </ProjectItem>
  </div>
</div>
</template>

<style scoped lang="scss">
.portfolio {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space) * 3);

  img {
    height: 450px;
    width: auto;
  }

  @media (max-width: 700px) {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
