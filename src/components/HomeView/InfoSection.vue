<template>
  <div class="_column headers">
    <div class="title">
      <h3>Скорее всего,</h3>
      <h1><span :class="{ 'mark': !isDark }">Я</span> именно тот,<br>кто <span :class="{ 'mark': !isDark }">вам нужен</span></h1>
    </div>
    <h4>Mobile & UI/Frontend-разработчик, главной целью которого является создание качественных, детально проработанных приложений и интерфейсов</h4>
    <div class="actions _row">
      <RouterLink to="/about" class="_btn">
        <small>Резюме</small>
      </RouterLink>
      <RouterLink to="/about" class="_btn">
        <small>Последние работы</small>
      </RouterLink>
    </div>
    <small>... или используйте свайпы для навигации</small>
  </div>
</template>

<script setup lang="ts">
const isDark = useDark()
</script>

<style scoped lang="scss">
.headers {
  text-align: right;
  align-items: flex-end;
  text-transform: uppercase;

  @media (max-width: 920px) {
    order: 2;
    align-items: center;
    text-align: center;
  }
}

.title {
  h3 { font-size: 25px; }
  h1 {
    font-weight: 900;
    font-size: 80px;
    line-height: 0.9;
  }

  @media (max-width: 1300px) {
    h3 { font-size: 23px; }
    h1 { font-size: 50px; }
  }

  @media (max-width: 600px) {
    h3 { font-size: 18px; }
    h1 { font-size: 45px; }
  }
}

.mark {
  color: var(--accent-c);
}

.actions {
  justify-content: flex-end;

  @media (max-width: 920px) {
    justify-content: center;
  }
}
</style>