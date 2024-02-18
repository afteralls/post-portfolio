<template>
  <USpace type="section" display="col" full pos="left">
    <USpace display="grid" pos="between" class="info">
      <USpace display="col">
        <USpace v-for="(field, idx) in fieldCollection" :key="idx" display="grid" class="field">
          <UText type="span" :text="field.title ? field.title : ''" class="align" />
          <UText v-if="typeof field.desc === 'string'" type="p" gray :text="field.desc" />
          <USpace v-else display="col" gap="bit">
            <UText v-for="(note, num) in field.desc" :key="num" type="p" gray :text="note" />
            <template v-if="field.list">
              <USpace
                v-for="(note, num) in field.list"
                :key="num"
                display="row"
                gap="sm"
                style="align-items: flex-start"
              >
                <UText type="p" gray text="—" />
                <UText type="p" gray :text="note" />
              </USpace>
            </template>
          </USpace>
        </USpace>
      </USpace>
      <USpace display="col">
        <UText type="span" text="Техничечкий стек" />
        <USpace display="row" gap="bit" style="flex-wrap: wrap">
          <AppSkill name="Nuxt" icon="logos:nuxt-icon" rgb="0, 220, 130" />
        </USpace>
      </USpace>
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
type Field = { title?: string; desc: string | string[]; list?: string[] }

const fieldCollection: Field[] = [
  {
    title: 'Личная информация',
    desc: 'Меня зовут Даниил Сухарников, мне 22 года; перфекционист насколько это возможно; на 90% состою из любви к музыке и искусству в целом, придерживаюсь философии стоицизма, код личности — ISTJ (вместо тысячи слов)'
  },
  {
    title: 'Локация',
    desc: 'Казахстан, г. Усть-Каменогорск'
  },
  {
    title: 'Опыт работы',
    desc: ['Июль 2023 — Наст. время', 'Fullstack Developer в ТОО "Altyn Shyghys"'],
    list: ['Разработка кросс-модульной системы автоматизации производственных процессов']
  },
  {
    title: '',
    desc: ['Октябрь 2021 — Июль 2023', 'Фрилансер']
  },
  {
    title: 'Образование',
    desc: [
      'Двухдипломная программа (Магистратура, научно-педагогическое направление)',
      '2023 — 2025 гг.'
    ],
    list: [
      'НАО "ВКТУ им. Д. Серикбаева", г. Усть-Каменогорск, Казахстан',
      'НИЯУ МИФИ, г. Москва, Россия'
    ]
  },
  {
    title: '',
    desc: [
      'Бакалавр в области информационно-коммуникационных технологий',
      '2019 — 2023 гг.',
      'НАО "ВКТУ им. Д. Серикбаева", г. Усть-Каменогорск, Казахстан'
    ]
  }
]
</script>

<style scoped lang="scss">
.info {
  grid-template-columns: 2.5fr 1fr;

  @media (max-width: $lg) {
    grid-template-columns: 1fr;
  }
}

.field {
  grid-template-columns: toRem(150) 1fr;

  @media (max-width: $sm) {
    grid-template-columns: toRem(105) 1fr;
  }

  @media (max-width: $zf) {
    gap: toRem(3) !important;
    grid-template-columns: 1fr;
  }
}

.align {
  text-align: right;

  @media (max-width: $zf) {
    text-align: left;
  }
}
</style>
