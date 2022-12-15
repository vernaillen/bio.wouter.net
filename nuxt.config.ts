// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  css: [
    '@/assets/base.css',
    'animate.css/animate.min.css',
  ],
  app: {
    head: {
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
    },
  },
})