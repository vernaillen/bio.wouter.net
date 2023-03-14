import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    bootstrap: false,
    config: { id: 'G-9H0TS07HEN' },
  })
})
