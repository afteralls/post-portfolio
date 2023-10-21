<template>
<<<<<<< HEAD
<div ref="home" class="_wrapper">
  <div class="home _row">
    <HomeInfo />
    <TheSphere />
  </div>
</div>
</template>

<style scoped lang="scss">
.home {
  width: 100%;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
  }
}
=======
  <div class="home">
    <div class="home__title">
      <div class="_column" style="gap: 0.8vh">
        <h3>MOST LIKELY,</h3>
        <h1><span class="mark">I'M </span>EXACTLY THE<br><span class="mark">ONE YOU NEED</span></h1>
      </div>
      <p>Front-end developer whose goal is to create high-quality, detailed web applications and interfaces using modern technologies and approaches</p>
      <router-link class="home__link" to="/about">
        <p>More</p>
        <img src="../assets/svg/arrow-right.svg"/>
      </router-link>
    </div>
    <the-sphere/>
    <div class="home__contacts">
      <div class="home__contact">
        <a href="mailto:postapocalypsecore@gmail.com">
          <img src="../assets/svg/mail.svg"/>
          <p v-if="currentWidth > 1200">Email</p>
        </a>
      </div>
      <div class="home__contact">
        <a href="https://t.me/apocalypsecore">
          <img src="../assets/svg/telegram.svg"/>
          <p v-if="currentWidth > 1200">Telegram</p>
        </a>
      </div>
      <div class="home__contact">
        <a href="https://github.com/post-apocalypse">
          <img src="../assets/svg/github.svg"/>
          <p v-if="currentWidth > 1200">GitHub</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TheSphere from '../components/TheSphere'
import { ref, onMounted } from 'vue'

export default {
  components: { TheSphere },
  setup () {
    const currentWidth = ref(0)
    const updateWidth = () => { currentWidth.value = window.innerWidth }
    window.addEventListener('resize', updateWidth)
    onMounted(() => { updateWidth() })

    return { currentWidth }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main';

.home {
  height: 85vh;
  position: relative;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: $extra-small) {
    flex-direction: column;
    height: 90vh;
    order: 1;
  }

  @media (min-height: $large-w) and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.7em;
  }

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
      font-size: 4.4em;
      font-weight: 900;
      line-height: 0.9;
    }

    @media (max-width: $medium) {
      h1 {
        font-size: 4em;
      }
    }

    @media (min-height: $large-w) {
      h1 {
        font-size: 3.5em;
      }
      font-size: 0.8em;
    }

    @media (min-height: $large-w) and (max-width: 1500px) {
      h1 {
        font-size: 3em;
      }
      font-size: 0.8em;
    }

    @media (max-width: $extra-medium) {
      h1 {
        font-size: 3em;
      }
      max-width: 100%;
    }

    @media (max-width: $extra-small) {
      align-items: center;
      text-align: center;
      margin: $mSpace;
      gap: $mSpace;

      h1 {
        font-size: 2.5em;
      }

      p {
        font-size: 0.7em;
      }
    }

    @media (min-height: $large-w) and (max-width: 1000px) {
      align-items: center;
      margin-top: $mSpace;
      justify-content: center;
      text-align: center;
    }
  }

  &__link {
    @include all-cent;
    text-decoration: none;
    border-radius: $br-rad;
    text-align: center;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.5vh;
    transition: $transition;
    gap: $mSpace / 2;
    background-color: $mColor;
    padding: $mSpace $space;
    font-weight: 600;

    &:hover {
      box-shadow: 0 0 2.45vh 0.8vh rgba(0, 0, 0, 0.2);
      background: $sColor;
    }

    img {
      max-height: 3.3vh;
      width: auto;
    }
  }

  &__contacts {
    @include all-cent;
    position: absolute;
    bottom: $space;
    left: $space;
    gap: $mSpace;

    @media (min-height: $large-w) and (max-width: 1000px) {
      display: none;
    }

    @media (max-width: $small) {
      display: none;
    }
  }

  &__contact {
    border-radius: $br-rad;
    @include all-cent;
    height: 8.2vh;
    padding: 0 $mSpace;
    text-align: center;
    transition: $transition;
    background-color: $mColor;

    a {
      @include all-cent;
      gap: $space / 2;
    }

    &:hover {
      box-shadow: 0 0 2.45vh 0.8vh rgba(0, 0, 0, 0.2);
      background-color: $sColor !important;
    }

    img {
      height: 3.3vh;
      width: auto;
    }
  }
}

.mark {
  color: $mColor;
}
>>>>>>> 7eb84931384b9ac9328600c140af9658714b73f3
</style>
