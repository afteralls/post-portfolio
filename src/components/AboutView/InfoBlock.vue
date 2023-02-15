<template>
<div class="block _row">
  <div class="title"><small><slot name="title" /></small></div>
  <div class="desc"><slot name="desc" /></div>
</div>
</template>

<style scoped lang="scss">
.block {
  align-items: flex-start;
  justify-content: flex-start;
}

.title {
  width: 30%;
  text-align: right;
}

.desc {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
