<template>
<div class="_wrapper">
  <div class="portfolio">
    <div class="project _row">
      <div class="info _column">
        <h1>Cloud Gallery</h1>
          <div class="links _row">
            <a class="_btn" href="https://github.com/post-apocalypse/cloud-gallery">
              <GitHubIcon />
              <small>Подробнее</small>
            </a>
            <a class="_btn" href="https://cloud-gallery.web.app/">
              <small>Перейти к приложению</small>
              <ArrowLink />
            </a>
        </div>
        <small>Стек приложения</small>
        <div class="_stack cg">
          <HTMLItem /><CSSItem /><SassItem /><TSItem /><VueItem /><PiniaItem /><ViteItem /><GitItem /><VueRouterItem /><Node /><VueUseItem /><PWAItem /><FirebaseItem />
        </div>
        <small>Краткое описание</small>
        <h4>Author's cloud gallery for fast loading and comfortable viewing of images with an authorization system, photo compression and smart tag search</h4>
      </div>
      <div class="images _row">
        <img src="../assets/img/CG.webp" alt="#">
      </div>
    </div>
    <div class="project _row">
      <div class="images _row">
        <img src="../assets/img/BG.webp" alt="#">
      </div>
      <div class="info _column">
        <h1>Barcode Generator</h1>
        <div class="links _row">
          <a class="_btn" href="https://github.com/post-apocalypse/barcode-generator">
            <GitHubIcon />
            <small>Подробнее</small>
          </a>
          <a class="_btn" href="https://generator-space.web.app/">
            <small>Перейти к приложению</small>
            <ArrowLink />
          </a>
        </div>
        <small>Стек приложения</small>
        <div class="_stack bg">
          <HTMLItem /><CSSItem /><SassItem /><JSItem /><VueItem /><PiniaItem /><ViteItem /><GitItem /><VueRouterItem /><Node /><VueUseItem /><PWAItem />
        </div>
        <small>Краткое описание</small>
        <h4>Аpplication for generating barcodes in various formats with the possibility of customization and export system</h4>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.portfolio {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space) * 3);
}

.project {
  @media (max-width: 1100px) {
    flex-direction: column;
  }
}

.images {
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

.info {
  &:nth-child(1) {
    text-align: right;
    align-items: flex-end;
  }

  @media (max-width: 1100px) {
    order: 1;
    align-items: center;
    text-align: center;

    &:nth-child(1) {
      align-items: center;
      text-align: center;
    }
  }
}

.links {
  @media (max-width: 450px) {
    flex-direction: column;
  }
}

.cg { justify-content: flex-end; }

.cg, .bg {
  @media (max-width: 1100px) {
    justify-content: center;
  }
}
</style>