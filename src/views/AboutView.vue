<template>
  <div>
    <div class="main-img"><img src="../assets/img/main-bg.png" alt="Me"></div>
    <div class="about">
      <div class="about__info">
        <div class="about__item">
          <div class="about__title"><h3>Personal details</h3></div>
          <div class="about__desc"><p>My name is Daniil Sukharnikov, I'm 20 years old</p></div>
        </div>
        <div class="about__item">
          <div class="about__title"><h3>Objective</h3></div>
          <div class="about__desc">
            <p>Currently applying for the position of Junior Frontend Developer</p>
          </div>
        </div>
        <div class="about__item">
          <div class="about__title">
            <h3>Contacts</h3></div>
          <div class="about__desc">
            <p>Location: Kazakhstan, Ust’-Kamenogorsk</p>
            <div class="about__contacts" style="gap: 1.63vh;">
              <div class="about__contact" style="background-color: #ea4335;">
                <a href="mailto:postapocalypsecore@gmail.com">
                  <img src="../assets/svg/mail.svg"/>
                  <p v-if="currentWidth > 550">Email</p>
                </a>
              </div>
              <div class="about__contact" style="background-color: #0088cc;">
                <a href="https://t.me/apocalypsecore">
                  <img src="../assets/svg/telegram.svg"/>
                  <p v-if="currentWidth > 550">Telegram</p>
                </a>
              </div>
              <div class="about__contact" style="background-color: #333333">
                <a href="https://github.com/post-apocalypse">
                  <img src="../assets/svg/github.svg"/>
                  <p v-if="currentWidth > 550">GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="currentWidth > 550"></div>
        <div class="about__item">
          <div class="about__title"><h3>Education</h3></div>
          <div class="about__desc">
            <p>D. Serikbayev East Kazakhstan technical university (EKTU), 2019 — 2023</p>
            <p>Faculty of Information Technology and Intelligent Systems</p>
            <p>Specialty: Computer Engineering and Software</p>
          </div>
        </div>
        <div class="about__item">
          <div class="about__title">
            <h3>Knowledge</h3><h3>Of Languages</h3></div>
          <div class="about__desc">
            <p>English — Intermediate (I read technical documentation without problems, speaking in the process of improvement)</p>
          </div>
        </div>
        <div v-if="currentWidth > 550"></div>
        <div class="about__item">
          <div class="about__title">
            <h3>Soft Skills</h3></div>
          <div class="about__desc">
            <div style="display: flex; align-items: center; flex-wrap: wrap;">
              <p>Care for details; Creativity; Responsibility; Ability to listen and clearly express my thoughts; Honesty</p>
            </div>
          </div>
        </div>
        <div class="about__item">
          <div class="about__title">
            <h3>Additional</h3><h3>Information</h3></div>
          <div class="about__desc">
            <p>Perfectionist as possible. I'm 90% love for music and art in general, I adhere to the philosophy of stoicism, the personality code is ISTJ (instead of a thousand words)</p>
            <p v-if="currentWidth > 550">It is worth clarifying: I am a 4th year student, and the only thing I can say with confidence is that this fact will not affect the time I devote to work in any way, but it will require a few small edits to the work schedule, I hope for comprehension</p>
          </div>
        </div>
      </div>
      <div class="about__skills">
        <h3>Hard Skills</h3>
        <div class="about__skills-row">
          <div class="skill" style="background-color: rgba(233,81,0, 0.2)">
            <img src="../assets/img/html.webp" alt="HTML"><p>HTML</p>
          </div>
          <div class="skill" style="background-color: rgba(2,117,193, 0.2)">
            <img src="../assets/img/css.webp" alt="CSS"><p>CSS</p>
          </div>
          <div class="skill" style="background-color: rgba(233,202,50, 0.2)">
            <img src="../assets/svg/javascript.svg" alt="JS">
            <p>{{currentWidth > 550 ? 'JavaScript' : 'JS'}}</p>
          </div>
          <div class="skill" style="background-color: rgba(69,162,123, 0.2)">
            <img src="../assets/img/vue.webp" alt="Vue"><p>Vue</p>
          </div>
          <div class="skill" style="background-color: rgba(69,162,123, 0.2)">
            <img src="../assets/img/vuex.webp" alt="Vuex"><p>Vuex</p>
          </div>
          <div class="skill" style="background-color: rgba(69,162,123, 0.2)">
            <img src="../assets/img/router.webp" alt="Vue Router">
            <p>{{currentWidth > 550 ? 'Vue Router' : 'Router'}}</p>
          </div>
          <div class="skill" style="background-color: rgba(207,99,161, 0.2)">
            <img src="../assets/img/sass.webp" alt="Scss"><p>Scss</p>
          </div>
          <div class="skill" style="background-color: rgba(140,200,75, 0.2)">
            <img src="../assets/svg/node.svg" alt="Node.js">
            <p>{{currentWidth > 550 ? 'Node.js' : 'Node'}}</p>
          </div>
          <div class="skill" style="background-color: rgba(142,214,251, 0.2)">
            <img src="../assets/svg/webpack.svg" alt="Webpack">
            <p>{{currentWidth > 550 ? 'Webpack' : 'WP'}}</p>
          </div>
          <div class="skill" style="background-color: rgba(244,78,55, 0.2)">
            <img src="../assets/img/git.webp" alt="Git"><p>Git</p>
          </div>
          <div class="skill" style="background-color: rgba(52,164,253, 0.2)">
            <img src="../assets/img/photoshop.webp" alt="Photoshop">
            <p>{{currentWidth > 550 ? 'Photoshop' : 'Ps'}}</p>
          </div>
          <div class="skill" style="background-color: rgba(93,12,201, 0.2)">
            <img src="../assets/img/pwa.webp" alt="PWA"><p>PWA</p>
          </div>
          <div class="skill" style="background-color: rgba(51,120,201, 0.2)">
            <img src="../assets/img/typescript.webp" alt="TypeScript">
            <p>{{currentWidth > 550 ? 'TypeScript' : 'TS'}}</p>
          </div>
          <div class="skill" style="background-color: rgba(4,105,194, 0.2)">
            <img src="../assets/img/docker.webp" alt="Docker"><p>Docker</p>
          </div>
          <div class="skill" style="background-color: rgba(223,196,66, 0.2)">
            <img src="../assets/img/babel.webp" alt="Babel"><p>Babel</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
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

.main-img {
  z-index: 1;

  img {
    position: absolute;
    height: 100vh;
    bottom: 0;
    left: 0;
  }

  @media (max-width: $extra-medium) {
    display: none;
  }

  @media (min-height: $large-w) and (max-width: 1200px) {
    display: none;
  }
}

.about {
  display: flex;
  justify-content: center;
  font-size: 0.9em;
  width: 100%;
  z-index: 3;
  height: 85vh;
  gap: $space;
  box-sizing: border-box;

  @media (min-height: $large-w) and (max-width: 1400px) {
    gap: $mSpace / 2;
    flex-direction: column;
    font-size: 0.55em !important;

    h3 {
      font-size: 0.9em;
    }
  }

  @media (min-height: 750px) and (max-width: 1400px) {
    font-size: 0.75em;
    padding: 0 $mSpace;
  }

  @media (max-width: $medium) {
    font-size: 0.75em;
    padding: 0 $mSpace;
  }

  @media (max-width: 700px) {
    font-size: 0.65em;
    gap: $mSpace;
  }

  @media (max-width: $extra-small) {
    height: 90vh;
    gap: $mSpace / 2;
    flex-direction: column;
    font-size: 0.55em;

    h3 {
      font-size: 0.9em;
    }
  }

  &__info, &__skills {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: $mSpace / 2;
    padding: $mSpace 0;

    @media (min-height: $large-w) and (max-width: 1400px) {
      padding: 0;
      gap: 0.8vh;
    }

    @media (max-width: $extra-small) {
      padding: 0;
      gap: 0.8vh;
    }
  }

  &__info {
    width: 73%;

    @media (min-height: $large-w) and (max-width: 1400px) {
      width: 100%;
    }

    @media (max-width: $extra-small) {
      width: 100%;
    }
  }

  &__skills {
    width: 28%;
    min-width: 30%;
    position: relative;

    @media (min-height: $large-w) and (max-width: 1400px) {
      width: 100% !important;
    }

    @media (max-width: $extra-medium) {
      width: 35%;
      min-width: 35%;
    }

    @media (max-width: $extra-small) {
      width: 100%;
    }
  }

  &__skills-row {
    display: flex;
    max-width: 57vh;
    flex-wrap: wrap;
    gap: $mSpace / 2;

    @media (min-height: $large-w) and (max-width: 1400px) {
      max-width: 100% !important;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: $extra-medium) {
      max-width: 40vh;
    }

    @media (max-width: $extra-small) {
      max-width: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  &__contacts {
    display: flex;
    gap: $mSpace / 2;
  }

  &__contact {
    border-radius: $br-rad / 2;
    padding: $mSpace / 2;
    text-align: center;
    transition: $transition;

    a {
      @include all-cent;
      gap: $mSpace / 2;
    }

    &:hover {
      box-shadow: 0 0 2.45vh 0.8vh rgba(0, 0, 0, 0.2);
      background-color: $sColor !important;
    }

    img {
      height: 3.3vh;
      width: auto;
    }

    @media (max-width: $extra-small) {
      padding: 0.8vh;

      img {
        margin-right: 0;
        height: 2.5vh;
        width: auto;
      }
    }

    @media (min-height: $large-w) and (max-width: 1400px) {
      padding: 0.8vh;

      img {
        margin-right: 0;
        height: 2.5vh;
        width: auto;
      }
    }
  }

  &__item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: $mSpace;
    z-index: 5;

    @media (max-width: $extra-small) {
      gap: $mSpace / 2;
    }

    @media (min-height: $large-w) and (max-width: 1400px) {
      gap: $mSpace / 2;
    }
  }

  &__title {
    width: 40%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;

    @media (min-height: $large-w) and (max-width: 1400px) {
      width: 29%;
      min-width: 29%;
    }

    @media (max-width: $extra-medium) {
      width: 29%;
      min-width: 29%;
    }
  }

  &__desc {
    display: flex;
    gap: 0.8vh;
    width: 60%;
    justify-content: flex-start;
    flex-direction: column;

    @media (min-height: $large-w) and (max-width: 1400px) {
      width: 100%;
    }

    @media (max-width: $extra-medium) {
      width: 100%;
    }
  }
}

.skill {
  border-radius: $br-rad / 2;
  @include all-cent;
  flex-direction: column;
  gap: 0.8vh;
  width: 16.3vh;
  height: 13.1vh;
  text-align: center;
  transition: $transition;

  &:hover {
    box-shadow: 0 0 2.45vh 0.8vh rgba(0, 0, 0, 0.2);
    background: $sColor !important;
  }

  img {
    height: 5.7vh;
    width: auto;
  }

  @media (min-height: 750px) and (max-width: 1400px) {
    width: 11.5vh;
    height: 10.5vh;

    img {
      height: 5vh;
      width: auto;
    }
  }

  @media (max-width: $medium) {
    width: 13.5vh;
    height: 10.5vh;

    img {
      height: 5vh;
      width: auto;
    }
  }

  @media (max-width: $extra-medium) {
    width: 11.3vh;
    height: 9vh;

    img {
      height: 3.3vh;
      width: auto;
    }
  }

  @media (max-width: $extra-small) {
    width: 6.7vh;
    height: 6.7vh;

    img {
      height: 2.5vh;
      width: auto;
    }
  }

  @media (min-height: $large-w) and (max-width: 1400px) {
    width: 6.7vh;
    height: 6.7vh;
    font-size: 0.7em;

    img {
      height: 2.5vh;
      width: auto;
    }
  }
}
</style>
