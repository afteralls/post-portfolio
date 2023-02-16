<template>
<div class="_wrapper">
  <div class="resume">
    <AboutInfo />
    <TechsSection />
  </div>
</div>
</template>

<style scoped lang="scss">
.resume {
  width: 100%;
  display: flex;
  gap: calc(var(--space) * 2);
  align-items: flex-start;

  @media (max-width: 920px) {
    flex-direction: column;
  }
}
</style>
