<template>
  <div>
    <div class="main-img"><img src="../assets/img/main-bg.png" alt="Me"></div>
    <div class="about">
      <div class="about__info">
        <div class="about__item">
          <div class="about__title"><h3>Личные данные</h3></div>
          <div class="about__desc"><p>Меня зовут Даниил Сухарников, мне 20 лет</p></div>
        </div>
        <div class="about__item">
          <div class="about__title"><h3>Цель</h3></div>
          <div class="about__desc">
            <p>В данный момент претендую на позицию Junior Frontend-разработчика</p>
          </div>
        </div>
        <div class="about__item">
          <div class="about__title">
            <h3>Контакты</h3></div>
          <div class="about__desc">
            <p>Местоположение: Казахстан, г. Усть-Каменогорск</p>
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
          <div class="about__title"><h3>Образование</h3></div>
          <div class="about__desc">
            <p>НАО "ВКТУ им. Д. Серикбаева", 2019 — 2023 гг.</p>
            <p>Факультет Информационных технологий и интеллектуальных систем</p>
            <p>Специальность: Вычислительная техника и программное обеспечение</p>
          </div>
        </div>
        <div class="about__item">
          <div class="about__title">
            <h3>Языки</h3></div>
          <div class="about__desc">
            <p>English — Intermediate (без проблем читаю техническую документацию, разговорный в процессе улучшения)</p>
          </div>
        </div>
        <div v-if="currentWidth > 550"></div>
        <div class="about__item">
          <div class="about__title">
            <h3>Личные навыки</h3></div>
          <div class="about__desc">
            <div style="display: flex; align-items: center; flex-wrap: wrap;">
              <p>Внимательность к деталям; Креативность; Ответсвенность; Умение слушать и чётко излагать свои мысли; Честность</p>
            </div>
          </div>
        </div>
        <div class="about__item">
          <div class="about__title">
            <h3>Дополнительная</h3><h3>информация</h3></div>
          <div class="about__desc">
            <p>Перфекционист, насколько это возможно. На 90% состою из любви к музыке и искусству в целом, придерживаюсь философии стоицизма, код личности — ISTJ (вместо тысячи слов)</p>
            <p v-if="currentWidth > 550">Стоит уточнить, что в данный момент я являюсь студентом 4-го курса, и единственное, о чём я могу сказать с уверенностью: эта данность никак не повлияет на уделяемое мною работе время, но потребует несколько небольших правок в рабочий график, надеюсь на понимание</p>
          </div>
        </div>
      </div>
      <div class="about__skills">
        <h3>Профессиональные навыки</h3>
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

    @media (max-width: $extra-small) {
      padding: 0;
      gap: 0.8vh;
    }
  }

  &__info {
    width: 73%;

    @media (max-width: $extra-small) {
      width: 100%;
    }
  }

  &__skills {
    width: 28%;
    min-width: 30%;
    position: relative;

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
    @include all-cent;
    padding: $mSpace / 2;
    text-align: center;
    transition: $transition;

    &:hover {
      box-shadow: 0 0 2.45vh 0.8vh rgba(0, 0, 0, 0.2);
      background-color: $sColor !important;
    }

    img {
      margin-right: $mSpace / 2;
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
  }

  &__title {
    width: 40%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;

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
}
</style>
