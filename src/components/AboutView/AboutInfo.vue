<template>
<div class="info _column">
  <InfoBlock>
    <template #title>{{ $i18n('about.t1')}}</template>
    <template #desc><h4>{{ $i18n('about.d1')}}</h4></template>
  </InfoBlock>
  <InfoBlock>
    <template #title>{{ $i18n('about.t2')}}</template>
    <template #desc>
      <h4>{{ $i18n('about.d2.one')}}</h4>
      <h4>{{ $i18n('about.d2.two')}}</h4>
      <h4>{{ $i18n('about.d2.three')}}</h4>
    </template>
  </InfoBlock>
  <InfoBlock>
    <template #title>{{ $i18n('about.t3')}}</template>
    <template #desc><h4>{{ $i18n('about.d3')}}</h4></template>
  </InfoBlock>
  <InfoBlock>
    <template #title>{{ $i18n('about.t4')}}</template>
    <template #desc>
      <h4>{{ $i18n('about.d4.one')}}</h4>
      <h4>{{ $i18n('about.d4.two')}}</h4>
      <h4>{{ $i18n('about.d4.three')}}</h4>
    </template>
  </InfoBlock>
  <InfoBlock>
    <template #title>{{ $i18n('about.t5')}}</template>
    <template #desc>
      <h4>{{ $i18n('about.d5.one')}}</h4>
      <h4>{{ $i18n('about.d5.two')}}</h4>
    </template>
  </InfoBlock>
  <InfoBlock>
    <template #title>{{ $i18n('about.t6')}}</template>
    <template #desc><h4>{{ $i18n('about.d6')}}</h4></template>
  </InfoBlock>
</div>
</template>

<style scoped lang="scss">
.info {
  justify-content: flex-start;
  width: 60%;

  @media (max-width: 920px) {
    width: 100%;
  }
}
</style>
