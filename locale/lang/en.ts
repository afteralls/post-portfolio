export default defineI18nLocale(() => {
  return {
    title: 'Summary',
    app: {
      lang: 'Switch to Russian',
      theme: 'Change the theme',
      error: "Oops, looks like something went wrong. Don't worry, it's not your fault!",
      back: 'Go back to the main page'
    },
    home: {
      hi: 'Hello! My name is Daniil and I...',
      desc: 'My main goal is to create high-quality, detailed applications and interfaces',
      more: 'More details'
    },
    info: {
      0: {
        title: 'Personal Information',
        desc: 'My name is Daniil Suharnikov; a perfectionist as much as possible; 90% consists of a love of music and art in general, I adhere to the philosophy of stoicism, personality code - ISTJ (instead of a thousand words)'
      },
      1: {
        title: 'Location',
        desc: 'Kazakhstan, Ust-Kamenogorsk'
      },
      2: {
        title: 'Work experience',
        desc: {
          0: 'July 2023 - Present time',
          1: 'Fullstack Developer at Altyn Shyghys LLP'
        },
        list: {
          0: 'Development of a multilingual, modular production process automation system (Nuxt, SSR)',
          1: 'Setting up a subdomain structure (Nginx), CI/CD, Linux administration and other DevOps responsibilities',
          2: 'UI-Kit development: component library and SSR configurations for Nuxt projects'
        }
      },
      3: {
        desc: {
          0: 'October 2021 - July 2023',
          1: 'Freelancer'
        },
        list: {
          0: 'Development of various client applications and landing pages on Vue.js (SPA, SSG, SSR)',
          1: 'Creating layouts and design solutions',
          2: 'Development of mobile applications and publication in the App Store and Google Play (Flutter)'
        }
      },
      4: {
        title: 'Education',
        desc: {
          0: "Double-degree program (Master's, Information Technology)",
          1: '2023 - 2025'
        },
        list: {
          0: '"EKTU named after D. Serikbaev", Ust-Kamenogorsk, Kazakhstan',
          1: 'NRNU MEPHI, Moscow, Russia'
        }
      },
      5: {
        desc: {
          0: 'Bachelor in Information and Communication Technologies',
          1: '2019 - 2023'
        },
        list: {
          0: '"EKTU named after D. Serikbaev", Ust-Kamenogorsk, Kazakhstan'
        }
      },
      skill: {
        0: 'Current tech stack',
        1: 'I also have work experience'
      }
    },
    projects: {
      recent: 'Recent projects',
      source: 'Source code',
      app: 'Application',
      stack: 'Application stack',
      0: 'UI library and ready-made SSR configuration for projects developed on the Nuxt framework',
      1: "Author's cloud gallery for quick loading and comfortable viewing of images with an authorization system, image compression and search using smart tags",
      2: 'An application for generating barcodes in various formats with the ability to customize and export'
    }
  }
})
