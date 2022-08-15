<template>
  <div class="home">
    <div class="home__title">
      <div class="_column" style="gap: 5px">
        <h3>Скорее всего,</h3>
        <h1><span class="mark">Я</span> именно тот,<br>кто <span class="mark">вам нужен</span></h1>
      </div>
      <p>Frontend-разработчик, главной целью которого является создание качественных, детально проработанных веб-приложений и интерфейсов с использоваием современных технологий и подходов</p>
      <router-link class="home__link" to="/about">
        <p>Подробнее</p>
        <img src="../assets/svg/arrow-right.svg"/>
      </router-link>
    </div>
    <the-sphere/>
    <app-contacts/>
  </div>
</template>

<script>
import TheSphere from '../components/TheSphere'
import AppContacts from '../components/AppContacts'

export default {
  components: { TheSphere, AppContacts }
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
  }

  &__link {
    @include all-cent;
    text-decoration: none;
    padding: $mSpace;
    border-radius: $br-rad;
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 3px;
    transition: $transition;
    gap: $mSpace / 2;
    position: relative;
    background-color: $mColor;
    padding: $mSpace $space;
    font-weight: 600;

    &:hover {
      box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
      background: rgba(255,255,255,0.3);
    }

    img {
      max-height: 20px;
      width: auto;
    }
  }

  & .contacts {
    position: absolute;
    bottom: $space;
    left: $space;
  }

  & .contact {
    gap: $space;
    height: 50px;
    width: auto;
    padding: 0 $mSpace;
    border-radius: $br-rad;
  }
}

.mark {
  color: $mColor;
}

</style>
