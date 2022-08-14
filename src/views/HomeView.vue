<template>
  <div class="home">
    <div class="home__title">
      <div class="_column" style="gap: 5px">
        <h3>Скорее всего,</h3>
        <h1><violet>Я</violet> именно тот,<br>кто <violet>вам нужен</violet></h1>
      </div>
      <p>Frontend-разработчик, главной целью которого является создание качественных, детально проработанных веб-приложений и интерфейсов с использоваием современных технологий и подходов</p>
      <router-link class="_link" to="/about">
        <p>Подробнее</p>
        <img src="../assets/svg/arrow-right.svg"/>
      </router-link>
    </div>
    <the-sphere/>
  </div>
</template>

<script>
import TheSphere from '../components/TheSphere.vue'

export default {
  components: { TheSphere },
  setup () {

  }
}
</script>

<style lang="scss">
@import '../assets/scss/main';

.home {
  height: 85vh;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &__title {
    z-index: 5;
    max-width: 60%;
    text-transform: uppercase;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: $space;
    align-items: flex-end;

    h1 {
      font-size: 5em;
      font-weight: 900;
      line-height: 0.9;
    }

    & ._link {
      background-color: $mColor;
      padding: $mSpace $space;
      font-weight: 600;

      &:hover {
        box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
        background: rgba(255,255,255,0.3);
      }
    }
  }
}

violet {
  color: $mColor;
}

</style>
