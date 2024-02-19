<template>
  <USpace id="info" type="section" display="col" full pos="left">
    <USpace display="grid" pos="between" class="info">
      <USpace display="col">
        <USpace v-for="(field, idx) in fieldCollection" :key="idx" display="grid" class="field">
          <UText type="span" :text="field.title ? $t(field.title) : ''" class="align" />
          <UText v-if="typeof field.desc === 'string'" type="p" gray :text="$t(field.desc)" />
          <USpace v-else display="col" gap="bit">
            <UText v-for="(note, num) in field.desc" :key="num" type="p" :text="$t(note)" />
            <template v-if="field.list">
              <USpace
                v-for="(note, num) in field.list"
                :key="num"
                display="row"
                gap="sm"
                style="align-items: flex-start"
              >
                <UText type="p" gray text="—" />
                <UText type="p" gray :text="$t(note)" />
              </USpace>
            </template>
          </USpace>
        </USpace>
      </USpace>
      <USpace display="col" class="skills">
        <template v-for="(item, idx) in skillCollection" :key="idx">
          <UText type="span" :text="$t(item.title)" />
          <USpace display="row" gap="bit" style="flex-wrap: wrap" class="skill-wrapper">
            <AppSkill
              v-for="(skill, num) in item.skills"
              :key="num"
              :name="skill.name"
              :icon="skill.icon"
              :rgb="skill.rgb"
            />
          </USpace>
        </template>
      </USpace>
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
type Field = { title?: string; desc: string | string[]; list?: string[] }
type SkillCollection = { title: string; skills: Skill[] }

const fieldCollection: Field[] = [
  { title: 'info.0.title', desc: 'info.0.desc' },
  { title: 'info.1.title', desc: 'info.1.desc' },
  {
    title: 'info.2.title',
    desc: ['info.2.desc.0', 'info.2.desc.1'],
    list: ['info.2.list.0', 'info.2.list.1', 'info.2.list.2']
  },
  {
    desc: ['info.3.desc.0', 'info.3.desc.1'],
    list: ['info.3.list.0', 'info.3.list.1', 'info.3.list.2']
  },
  {
    title: 'info.4.title',
    desc: ['info.4.desc.0', 'info.4.desc.1'],
    list: ['info.4.list.0', 'info.4.list.1']
  },
  { desc: ['info.5.desc.0', 'info.5.desc.1'], list: ['info.5.list.0'] }
]

const skillCollection: SkillCollection[] = [
  {
    title: 'info.skill.0',
    skills: [
      { name: 'Vue', icon: 'logos:vue', rgb: '65, 184, 131' },
      { name: 'Nuxt', icon: 'logos:nuxt-icon', rgb: '0, 220, 130' },
      { name: 'TypeScript', icon: 'skill-icons:typescript', rgb: '0, 122, 204' },
      { name: 'Vite', icon: 'vscode-icons:file-type-vite', rgb: '189, 52, 254' },
      { name: 'SCSS', icon: 'vscode-icons:file-type-scss', rgb: '205, 103, 153' },
      { name: 'Docker', icon: 'devicon:docker', rgb: '0, 170, 218' },
      { name: 'VueUse', icon: 'logos:vueuse', rgb: '65, 184, 131' },
      { name: 'Pinia', icon: 'logos:pinia', rgb: '236, 183, 50' },
      { name: 'Git', icon: 'devicon:git', rgb: '243, 79, 41' },
      { name: 'Vue Router', icon: 'logos:vue', rgb: '65, 184, 131' },
      { name: 'Node.js', icon: 'vscode-icons:file-type-node', rgb: '131, 205, 41' },
      { name: 'PWA', icon: 'logos:pwa', rgb: '90, 15, 200' }
    ]
  },
  {
    title: 'info.skill.1',
    skills: [
      { name: 'Vuex', icon: 'logos:vue', rgb: '65, 184, 131' },
      { name: 'Vitest', icon: 'logos:vitest', rgb: '114, 155, 27' },
      { name: 'Storybook', icon: 'devicon:storybook', rgb: '255, 71, 133' },
      { name: 'Prisma', icon: 'skill-icons:prisma', rgb: '103, 126, 235' },
      { name: 'Webpack', icon: 'logos:webpack', rgb: '28, 120, 192' },
      { name: 'Firebase', icon: 'logos:firebase', rgb: '255, 167, 18' },
      { name: 'Tailwind', icon: 'vscode-icons:file-type-tailwind', rgb: '68, 168, 179' },
      { name: 'PostgreSQL', icon: 'logos:postgresql', rgb: '51, 103, 145' },
      { name: 'Figma', icon: 'logos:figma', rgb: '162, 89, 255' },
      { name: 'Photoshop', icon: 'devicon:photoshop', rgb: '49, 168, 255' },
      { name: 'Dart', icon: 'logos:dart', rgb: '64, 196, 255' },
      { name: 'Flutter', icon: 'logos:flutter', rgb: '71, 197, 251' }
    ]
  }
]
</script>

<style scoped lang="scss">
.info {
  grid-template-columns: 3.3fr 1fr;

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
    gap: toRem(3);
    grid-template-columns: 1fr;
  }
}

.align {
  text-align: right;

  @media (max-width: $zf) {
    text-align: left;
  }
}

.skills {
  @media (max-width: $lg) {
    text-align: center;
  }

  @media (max-width: $zf) {
    text-align: left;
  }
}

.skill-wrapper {
  @media (max-width: $lg) {
    justify-content: center;
  }

  @media (max-width: $zf) {
    justify-content: flex-start;
  }
}
</style>
