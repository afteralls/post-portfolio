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
                  <p>Email</p>
                </a>
              </div>
              <div class="about__contact" style="background-color: #0088cc;">
                <a href="https://t.me/apocalypsecore">
                  <img src="../assets/svg/telegram.svg"/>
                  <p>Telegram</p>
                </a>
              </div>
              <div class="about__contact" style="background-color: #333333">
                <a href="https://github.com/post-apocalypse">
                  <img src="../assets/svg/github.svg"/>
                  <p>GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br/>
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
        <br/>
        <div class="about__item">
          <div class="about__title">
            <h3>Личные навыки</h3></div>
          <div class="about__desc">
            <div style="display: flex; align-items: center; flex-wrap: wrap;">
              <p>Внимательность к деталям</p>&nbsp;<h3>&#183;</h3>&nbsp;
              <p>Креативность</p>&nbsp;<h3>&#183;</h3>&nbsp;<p>Ответсвенность</p><br>
              <p>Умение слушать и чётко излагать свои мысли</p>&nbsp;<h3>&#183;</h3>&nbsp;<p>Честность</p>
            </div>
          </div>
        </div>
        <div class="about__item">
          <div class="about__title">
            <h3>Дополнительная</h3><h3>информация</h3></div>
          <div class="about__desc">
            <p>Перфекционист, насколько это возможно. На 90% состою из любви к музыке и искусству в целом, придерживаюсь философии стоицизма, код личности — ISTJ (вместо тысячи слов)</p>
            <p>Стоит уточнить, что в данный момент я являюсь студентом 4-го курса, и единственное, о чём я могу сказать с уверенностью: эта данность никак не повлияет на уделяемое мною работе время, но потребует несколько небольших правок в рабочий график, надеюсь на понимание</p>
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
            <img src="../assets/svg/javascript.svg" alt="JS"><p>JavaScript</p>
          </div>
        </div>
        <div class="about__skills-row">
          <div class="skill" style="background-color: rgba(69,162,123, 0.2)">
            <img src="../assets/img/vue.webp" alt="Vue"><p>Vue</p>
          </div>
          <div class="skill" style="background-color: rgba(69,162,123, 0.2)">
            <img src="../assets/img/vuex.webp" alt="Vuex"><p>Vuex</p>
          </div>
          <div class="skill" style="background-color: rgba(69,162,123, 0.2)">
            <img src="../assets/img/router.webp" alt="Vue Router"><p>Vue Router</p>
          </div>
        </div>
        <div class="about__skills-row">
          <div class="skill" style="background-color: rgba(207,99,161, 0.2)">
            <img src="../assets/img/sass.webp" alt="Scss"><p>Scss</p>
          </div>
          <div class="skill" style="background-color: rgba(140,200,75, 0.2)">
            <img src="../assets/svg/node.svg" alt="Node.js"><p>Node.js</p>
          </div>
          <div class="skill" style="background-color: rgba(142,214,251, 0.2)">
            <img src="../assets/svg/webpack.svg" alt="Webpack"><p>Webpack</p>
          </div>
        </div>
        <div class="about__skills-row">
          <div class="skill" style="background-color: rgba(244,78,55, 0.2)">
            <img src="../assets/img/git.webp" alt="Git"><p>Git</p>
          </div>
          <div class="skill" style="background-color: rgba(52,164,253, 0.2)">
            <img src="../assets/img/photoshop.webp" alt="Photoshop"><p>Photoshop</p>
          </div>
          <div class="skill" style="background-color: rgba(93,12,201, 0.2)">
            <img src="../assets/img/pwa.webp" alt="PWA"><p>PWA</p>
          </div>
        </div>
        <h3>Также знаком с </h3>
        <div class="about__skills-row">
          <div class="skill" style="background-color: rgba(51,120,201, 0.2)">
            <img src="../assets/img/typescript.webp" alt="TypeScript"><p>TypeScript</p>
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
}

.about {
  display: flex;
  font-size: 0.9em;
  width: 100%;
  z-index: 3;
  gap: $space;

  &__info, &__skills {
    box-sizing: border-box;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: $mSpace / 2;
    padding: $mSpace 0;
  }

  &__info {
    width: 70%;
  }

  &__skills {
    width: 30%;
    position: relative;
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
  }

  &__skills-row {
    display: flex;
    gap: $mSpace / 2;
  }

  &__item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: $mSpace;
    z-index: 5;
  }

  &__title {
    width: 40%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
  }

  &__desc {
    display: flex;
    gap: 0.8vh;
    width: 60%;
    justify-content: flex-start;
    flex-direction: column;
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
}
</style>
