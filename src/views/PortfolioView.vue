<template>
  <div class="portfolio">
    <div @mouseenter="genSec" @mouseleave="def" id="generator" class="portfolio__app">
      <div class="portfolio__app-images">
        <img src="../assets/img/bg.webp" alt="Barcode Generator">
        <img src="../assets/img/bg-mob.webp" alt="Barcode Generator">
      </div>
      <h1>Генератор штрих-кодов</h1>
      <p>Приложение для генерации большого количества штрих-кодов в различных форматах с возможностью экспорта в PNG, JPG или SVG и рашриренными настройками для кастомизации внешнего вида</p>
      <div class="_row">
        <a class="home__link" href="https://github.com/post-apocalypse/barcode-gen-app">
          <p>Подробнее</p>
          <img src="../assets/svg/github.svg"/>
        </a>
        <a class="home__link" href="https://barcodegen.web.app/">
          <p>Приложение</p>
          <img src="../assets/svg/arrow-right.svg"/>
        </a>
      </div>
    </div>
    <div @mouseenter="galSec" @mouseleave="def" id="gallery" class="portfolio__app">
     <div class="portfolio__app-images">
        <img src="../assets/img/fm.webp" alt="Barcode Generator">
        <img src="../assets/img/fm-mob.webp" alt="Barcode Generator">
      </div>
      <h1>Fast Gallery</h1>
      <p>Геререя для быстрой загрузки и комфортного просмотра изображений с системой авторизации, сжатием фотографий и умным поиском по тегам. В качестве сервера выступил Firebase</p>
      <div class="_row">
        <a class="home__link" href="https://github.com/post-apocalypse/gallery">
          <p>Подробнее</p>
          <img src="../assets/svg/github.svg"/>
        </a>
        <a class="home__link" href="https://fastgallery.web.app/">
          <p>Приложение</p>
          <img src="../assets/svg/arrow-right.svg"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    const genSec = () => { document.body.style.backgroundColor = '#1f5966' }
    const galSec = () => { document.body.style.backgroundColor = '#3e5082' }
    const def = () => { document.body.style.backgroundColor = '#252423' }

    return { genSec, galSec, def }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main';

.portfolio {
  display: flex;
  gap: $space;
  margin: $space;
  width: calc(100% - ($space * 2));
  height: calc(85vh - $space * 2);
  box-sizing: border-box;

  &__app {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @include glass-effect;
    box-sizing: border-box;
    flex-direction: column;
    gap: $mSpace;
    width: 50%;
    max-width: 1000px;
    padding: $space;
    text-align: center;
    text-transform: uppercase;
  }

  &__app-images {
    display: flex;
    bottom: 0;
    position: absolute;
    gap: $mSpace;
    position: relative;

    img {
      max-height: 29.5vh;
      border-radius: 0.8vh;
      width: auto;
      transition: $transition;
    }
  }

  &__app:hover {
    .portfolio__app-images img {
      max-height: 39.3vh;
    }
  }
}
</style>
