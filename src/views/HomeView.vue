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
    <div class="home__contacts">
      <div class="home__contact">
        <a href="mailto:postapocalypsecore@gmail.com">
          <img src="../assets/svg/mail.svg"/>
          <p>Email</p>
        </a>
      </div>
      <div class="home__contact">
        <a href="https://t.me/apocalypsecore">
          <img src="../assets/svg/telegram.svg"/>
          <p>Telegram</p>
        </a>
      </div>
      <div class="home__contact">
        <a href="https://github.com/post-apocalypse">
          <img src="../assets/svg/github.svg"/>
          <p>GitHub</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TheSphere from '../components/TheSphere'

export default {
  components: { TheSphere }
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
    border-radius: $br-rad;
    text-align: center;
    color: white;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: $transition;
    gap: $mSpace / 2;
    background-color: $mColor;
    padding: $mSpace $space;
    font-weight: 600;

    &:hover {
      box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
      background: $sColor;
    }

    img {
      max-height: 20px;
      width: auto;
    }
  }

  &__contacts {
    @include all-cent;
    position: absolute;
    bottom: $space;
    left: $space;
    gap: $mSpace;
  }

  &__contact {
    border-radius: $br-rad;
    @include all-cent;
    height: 50px;
    padding: 0 $mSpace;
    text-align: center;
    transition: $transition;
    background-color: $mColor;

    &:hover {
      box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
      background-color: $sColor !important;
    }

    img {
      margin-right: $mSpace / 2;
      height: 20px;
      width: auto;
    }
  }
}

.mark {
  color: $mColor;
}

</style>
