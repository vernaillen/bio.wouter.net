// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxthq/ui',
    '@nuxtjs/plausible',
    'nuxt-vitest'
  ],

  colorMode: {
    fallback: 'dark'
  },

  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/linkswouter'
    }
  },

  plausible: {
    apiHost: 'https://links.vernaillen.com/plio'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'wouter on the net: the links',
      meta: [
        { name: 'description', content: 'Wouter Vernaillen: Sound alchemist, Ecstatic Dance DJ, Trance Dance facilitator, Freelance Java/JS Developer, Forever learning...' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        },
        {
          charset: 'utf-8'
        }
      ],
      bodyAttrs: {
        class: 'bg-gray-100 dark:bg-black'
      },
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: 'Javascript is required' }
      ],
      link: [
        {
          href: 'https://vernaillen.twic.pics',
          rel: 'preconnect'
        },
        {
          rel: 'icon',
          href: '/favicon.svg',
          type: 'image/svg+xml'
        }
      ]
    }
  },

  devtools: {
    enabled: true
  },

  debug: true
})
