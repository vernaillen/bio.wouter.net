// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-gtag',
    'nuxt-icon',
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  css: [
    '@/assets/base.css',
    'animate.css/animate.min.css',
  ],
  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/linkswouter',
    },
  },
  gtag: {
    id: 'G-9H0TS07HEN',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'wouter on the net: the links',
      meta: [
        { name: 'description', content: 'Wouter Vernaillen: Sound alchemist, Ecstatic Dance DJ, Trance Dance facilitator, Freelance Java/JS Developer, Forever learning...' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        {
          charset: 'utf-8',
        },
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: 'Javascript is required' },
      ],
      link: [
        {
          href: 'https://vernaillen.twic.pics',
          rel: 'preconnect',
        },
      ],
    },
  },
})
