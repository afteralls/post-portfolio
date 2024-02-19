export {}

declare global {
  type Skill = { name: string; icon: string; rgb: string }

  type Project = {
    banner: string
    legacy?: boolean
    title: string
    desc?: string
    sourse: string
    app?: string
    skills: Skill[]
  }
}
