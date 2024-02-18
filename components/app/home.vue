<template>
  <USpace type="section" display="row" pos="between" full class="home">
    <USpace display="col" class="info">
      <UText type="p" gray mode="bg" :text="$t('app.home.hi')" />
      <UText type="h1" text="" />
      <UText type="p" gray mode="bg" text="" />
    </USpace>
    <USpace mode="center" class="logo-wrapper">
      <UIcon size="full" name="icon" />
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
  filter: drop-shadow(0 0 10rem var(--m));
  width: toRem(350);

  @media (max-width: $lg) {
    width: toRem(200);
  }

  @media (max-width: $zf) {
    width: 100%;
  }
}
</style>
