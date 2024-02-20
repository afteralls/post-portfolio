<template>
  <USpace type="section" display="row" pos="between" full class="home">
    <USpace display="col" class="info">
      <UText type="p" gray mode="bg" :text="$t('home.hi')" />
      <UText type="h1" text="UI/Front-End Developer" />
      <UText type="p" gray :text="$t('home.desc')" />
      <ULink to="/#info" :title="$t('home.more')" :icon="$ICON.more" mode="hybrid" />
    </USpace>
    <USpace mode="center" class="logo-wrapper">
      <img src="/main.webp" width="550" height="auto" alt="Banner" />
    </USpace>
  </USpace>
</template>

<style scoped lang="scss">
.home {
  @media (max-width: $lg) {
    flex-direction: column-reverse;
  }
}

.info {
  align-items: flex-start;
  max-width: toRem(600);

  @media (max-width: $lg) {
    text-align: center;
    align-items: center;
  }
}

.logo-wrapper {
  width: toRem(550);
  filter: drop-shadow(0 0 10rem var(--m));

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: $lg) {
    width: toRem(350);
  }

  @media (max-width: $mob) {
    width: 100%;
  }
}
</style>
