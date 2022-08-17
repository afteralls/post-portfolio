<template>
  <div class="portfolio">
    <div @mouseenter="genSec" @mouseleave="def" id="generator" class="portfolio__app">
      <div class="portfolio__app-images">
        <img src="../assets/img/bg.webp" alt="Barcode Generator">
        <img src="../assets/img/bg-mob.webp" alt="Barcode Generator">
      </div>
      <h1>Генератор штрих-кодов</h1>
      <p>Приложение для генерации большого количества штрих-кодов в различных форматах с возможностью экспорта в PNG, JPG или SVG и расширенными настройками для кастомизации внешнего вида</p>
      <div class="_row">
        <a class="home__link" href="https://github.com/post-apocalypse/barcode-gen-app">
          <img src="../assets/svg/github.svg"/>
          <p>Подробнее</p>
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
      <p>Галерея для быстрой загрузки и комфортного просмотра изображений с системой авторизации, сжатием фотографий и умным поиском по тегам. В качестве сервера выступил Firebase</p>
      <div class="_row">
        <a class="home__link" href="https://github.com/post-apocalypse/gallery">
          <img src="../assets/svg/github.svg"/>
          <p>Подробнее</p>
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
  height: calc(85vh - ($space * 2));
  box-sizing: border-box;

  @media (max-width: $extra-small) {
    height: calc(90vh - $space);
    width: calc(100% - $space);
    justify-content: center;
    font-size: 0.5em;
    gap: $mSpace;
    flex-direction: column;
    margin: $mSpace;

    & .home__link {
      padding: $mSpace / 2;
      letter-spacing: 0;

      img {
        height: 2.45vh;
        width: auto;
      }
    }
  }

  &__app {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @include glass-effect;
    box-sizing: border-box;
    flex-direction: column;
    gap: $mSpace;
    width: 50%;
    height: 100%;
    padding: $space;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: $medium) {
      font-size: 0.7em;
      justify-content: center;
    }

    @media (max-width: $extra-medium) {
      padding: $mSpace;
      font-size: 1em;
      justify-content: center;
      gap: $mSpace / 2;

      & ._row {
        flex-direction: column;
        width: 100%;
      }

      & .home__link {
        width: 70%;
      }
    }

    @media (max-width: $extra-small) {
      width: 100%;

      & ._row {
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      & .home__link {
        width: auto;
      }
    }

    @media (min-height: $large-w) and (max-width: 1000px) {
      font-size: 0.7em;
    }
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

    @media (max-width: $medium) {
      img {
        max-height: 25vh;
        width: auto;
      }
    }

    @media (max-width: $extra-medium) {
      img {
        max-height: 18vh;
        width: auto;
      }
    }

    @media (max-width: $small) {
      img {
        max-height: 15vh;
        width: auto;
      }
    }

    @media (max-width: $extra-small) {
      img {
        max-height: 13vh;
        width: auto;
      }
    }
  }

  &__app:hover {
    .portfolio__app-images img {
      max-height: 38.3vh;
    }

    @media (max-width: $medium) {
      .portfolio__app-images img {
        max-height: 30vh;
      }
    }

    @media (max-width: $extra-medium) {
      .portfolio__app-images img {
        max-height: 22vh;
      }
    }

    @media (max-width: $small) {
      .portfolio__app-images img {
        max-height: 18vh;
      }
    }

    @media (max-width: $extra-small) {
      .portfolio__app-images img {
        max-height: 15vh;
      }
    }
  }
}
</style>
