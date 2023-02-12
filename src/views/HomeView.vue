<template>
<div class="_wrapper">
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
</style>
