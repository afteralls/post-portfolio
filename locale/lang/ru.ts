export default defineI18nLocale(() => {
  return {
    title: 'Резюме',
    app: {
      lang: 'Переключиться на английский',
      theme: 'Сменить тему оформления',
      error: 'Упс, кажется, что-то пошло не так. Не волнуйтесь, вы в этом не виноваты!',
      back: 'Вернуться на главную'
    },
    home: {
      hi: 'Привет! Меня зовут Даниил и я...',
      desc: 'Главной целью которого является создание качественных, детально проработанных приложений и интерфейсов',
      more: 'Подробнее'
    },
    info: {
      0: {
        title: 'Личная информация',
        desc: 'Меня зовут Даниил Сухарников; перфекционист насколько это возможно; на 90% состою из любви к музыке и искусству в целом, придерживаюсь философии стоицизма, код личности — ISTJ (вместо тысячи слов)'
      },
      1: {
        title: 'Локация',
        desc: 'Казахстан, г. Усть-Каменогорск'
      },
      2: {
        title: 'Опыт работы',
        desc: {
          0: 'Июль 2023 — Наст. время',
          1: 'Fullstack Developer в ТОО "Altyn Shyghys"'
        },
        list: {
          0: 'Разработка мультиязычной, модульной системы автоматизации производственных процессов (Nuxt, SSR)',
          1: 'Настройка сабдоменной структуры (Nginx), CI/CD, Linux-администрирование и прочие DevOps-обязанности',
          2: 'Разработка UI-Kit: библиотека компонентов и SSR конфигурации для проектов на Nuxt'
        }
      },
      3: {
        desc: {
          0: 'Октябрь 2021 — Июль 2023',
          1: 'Фрилансер'
        },
        list: {
          0: 'Разработка различных клиентких приложений и лендингов на Vue.js (SPA, SSG, SSR)',
          1: 'Создание макетов и дизайнерских решений',
          2: 'Разработка мобильных приложений и публикация в App Store и Google Play (Flutter)'
        }
      },
      4: {
        title: 'Образование',
        desc: {
          0: 'Двухдипломная программа (Магистратура, Информционные технологии)',
          1: '2023 — 2025 гг.'
        },
        list: {
          0: 'НАО "ВКТУ им. Д. Серикбаева", г. Усть-Каменогорск, Казахстан',
          1: 'НИЯУ МИФИ, г. Москва, Россия'
        }
      },
      5: {
        desc: {
          0: 'Бакалавр в области информационно-коммуникационных технологий',
          1: '2019 — 2023 гг.'
        },
        list: {
          0: 'НАО "ВКТУ им. Д. Серикбаева", г. Усть-Каменогорск, Казахстан'
        }
      },
      skill: {
        0: 'Текущий технический стек',
        1: 'Также имею опыт работы'
      }
    },
    projects: {
      recent: 'Недавние проекты',
      source: 'Исходный код',
      app: 'Приложение',
      stack: 'Стек приложени',
      0: 'UI-библиотека и готовая конфигурация SSR для проектов, разработанных на фреймворке Nuxt',
      1: 'Авторская облачная галерея для быстрой загрузки и комфортного просмотра изображений с системой авторизации, сжатия изображений и поиска по смарт-тегам',
      2: 'Приложение для генерации штрих-кодов в различных форматах с возможностью кастомизации и экспорта'
    }
  }
})
