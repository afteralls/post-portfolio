<template>
  <div class="info _column">
    <InfoBlock>
      <template #title>Personal details</template>
      <template #desc><h4>My name is Daniil Sukharnikov, I'm 21 years old</h4></template>
    </InfoBlock>
    <InfoBlock>
      <template #title>Experience</template>
      <template #desc>
        <h4>I've been a web developer for over 2 years, last of which I use Vue.JS Framework with its entire ecosystem</h4>
        <h4>I have extensive experience in developing adaptive, cross-browser Single Page Applications of any complexity and structure</h4>
        <h4>Recently, I've been writing in Dart language, developing mobile applications using Flutter framework</h4>
      </template>
    </InfoBlock>
    <InfoBlock>
      <template #title>Location</template>
      <template #desc><h4>Kazakhstan, Ust'-Kamenogorsk</h4></template>
    </InfoBlock>
    <InfoBlock>
      <template #title>Education</template>
      <template #desc>
        <h4>D. Serikbayev East Kazakhstan technical university (EKTU), 2019 — 2023</h4><h4>Faculty of Information Technology and Intelligent Systems</h4><h4>Specialty: Computer Engineering and Software</h4>
      </template>
    </InfoBlock>
    <InfoBlock>
      <template #title>Knowledge Of Languages</template>
      <template #desc><h4>Russian — Native</h4><h4>English — Intermediate (I read technical documentation without problems, speaking in the process of improvement)</h4></template>
    </InfoBlock>
    <InfoBlock>
      <template #title>Soft Skills</template>
      <template #desc><h4>Care for details; Creativity; Responsibility; Ability to listen and clearly express my thoughts; Honesty</h4></template>
    </InfoBlock>
    <InfoBlock>
      <template #title>Additional Information</template>
      <template #desc><h4>Perfectionist as possible. I'm 90% love for music and art in general, I adhere to the philosophy of stoicism, the personality code is ISTJ (instead of a thousand words)</h4></template>
    </InfoBlock>
  </div>
</template>

<style scoped>
.info {
  justify-content: flex-start;
  width: 60%;
}
</style>