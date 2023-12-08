// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: [
    '@vernaillen/nuxt-base-layer'
  ],

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible'
  ],

  colorMode: {
    fallback: 'dark'
  },

  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/biowouter/'
    }
  },

  plausible: {
    apiHost: 'https://bio.wouter.net/plio'
  },

  ui: {
    icons: ['circle-flags', 'heroicons', 'mdi']
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root'
    },
    locales: [
      { code: 'nl', iso: 'en-BE', file: 'nl-BE.json' },
      { code: 'en', iso: 'en-US', file: 'en-US.json' }
    ],
    langDir: 'locales/',
    lazy: false,
    defaultLocale: 'nl',
    strategy: 'prefix_except_default'
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
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
        class: 'bg-gray-50 dark:bg-black'
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

  debug: false
})
