<template>
  <div class="_column">
    <small>Текущий стек технологий</small>
    <div class="_row">
      <div class="skill" style="background-color: rgba(233, 81, 0, 0.2)">
        <HTMLIcon />
        <h4>HTML</h4>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skill {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  transition: var(--transition);
  border-radius: var(--br-rad);

  svg {
    // height: 20px;
    width: auto;
  }

  &:hover {
    background-color: var(--accent-c-h) !important;
  }
}
</style>
