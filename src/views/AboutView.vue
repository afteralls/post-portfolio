<template>
  <div class="about">
    <div class="main-img"><img src="../assets/img/main-bg.png" alt="Me"></div>
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
          <div class="_row" style="gap: 10px;">
            <div class="contact" style="background-color: #ea4335;">
              <a href="mailto:postapocalypsecore@gmail.com">
                <img src="../assets/svg/mail.svg"/>
              </a>
            </div>
            <div class="contact" style="background-color: #0088cc;">
              <a href="https://t.me/apocalypsecore">
                <img src="../assets/svg/telegram.svg"/>
              </a>
            </div>
            <div class="contact" style="background-color: #333333">
              <a href="https://github.com/post-apocalypse">
                <img src="../assets/svg/github.svg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
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
      <div class="about__item">
        <div class="about__title">
          <h3>Личные навыки</h3></div>
        <div class="about__desc">
          <div style="display: flex; align-items: center; flex-wrap: wrap;">
            <p>Внимательность к деталям</p>&nbsp;<h3>&#183;</h3>&nbsp;
            <p>Креативность</p>&nbsp;<h3>&#183;</h3>&nbsp;<p>Ответсвенность</p><br>
            <p>Умение слушать и четко излагать свои мысли</p>&nbsp;<h3>&#183;</h3>&nbsp;<p>Честность</p>
          </div>
        </div>
      </div>
      <div class="about__item">
        <div class="about__title">
          <h3>Дополнительная</h3><h3>информация</h3></div>
        <div class="about__desc">
          <p>Какие-то слова...</p>
        </div>
      </div>
    </div>
    <div class="about__skills">
    </div>
  </div>
</template>

<script>
export default {

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
}

.about {
  @include all-cent;
  font-size: 0.9em;
  width: 100%;
  z-index: 3;

  &__info, &__skills {
    width: 50%;
    box-sizing: border-box;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: $mSpace;
    padding: $mSpace 0;
  }

  &__info {
    width: 70%;
  }

  &__skills {
    width: 30%;
  }

  &__item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: $space;
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
    gap: 5px;
    width: 60%;
    justify-content: flex-start;
    flex-direction: column;
  }
}

.contact {
  border-radius: $br-rad;
  @include all-cent;
  width: 40px;
  height: 40px;
  text-align: center;

  img {
    height: 20px;
    width: auto;
  }
}
</style>
