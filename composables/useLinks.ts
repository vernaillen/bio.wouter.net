import type { Link } from '~~/types/link'

export function useLinks (): Link[] {
  return [
    {
      label: 'Harmonics.be',
      content: 'Healing power of sound, music and dance:<br>Ecstatic dance, immersive soundbaths, music production,...',
      url: 'https://harmonics.be',
      urlDisplay: 'harmonics.be',
      image: 'https://harmonics.vercel.app/images/harmonics_svglogo_bol.png'
    },
    {
      label: 'new: Mastodon feed',
      content: 'Social feed on <a href="https://vernaillen.dev/feed" target="_blank">vernaillen.dev</a> fetching posts from my <a href="https://elk.zone/fosstodon.org/@vernaillen" target="_blank">Mastodon account</a>',
      icon: 'i-logos-mastodon-icon',
      url: 'https://vernaillen.dev/feed',
      urlDisplay: 'vernaillen.dev/feed'
    },
    {
      label: 'Are you Nuxt?',
      subTitle: 'Learning Nuxt 3',
      content: 'Latest blog post on <a href="https://vernaillen.dev/blog/nuxt" target="_blank">vernaillen.dev</a> about learning Nuxt 3',
      icon: 'i-logos-nuxt-icon',
      url: 'https://vernaillen.dev/blog/nuxt',
      urlDisplay: 'vernaillen.dev/blog/nuxt'
    },
    {
      label: 'Vernaillen.dev',
      content: 'website for my freelance consultancy services as a full stack java developer',
      url: 'https://vernaillen.dev',
      urlDisplay: 'vernaillen.dev',
      icon: 'i-custom-vernaillen-logo-light',
      iconDark: 'i-custom-vernaillen-logo-dark'
    },
    {
      label: 'Release Your Inner Dancer',
      content: 'Ecstatic Dance dj-set recorded on 3 September 2022 in Haaltert',
      icon: 'i-game-icons-oak-leaf',
      iconClass: 'text-green-500',
      url: 'https://soundcloud.com/woutervernaillen/release-your-inner-dancer-ecstatic-dance',
      urlDisplay: 'soundcloud.com/...release-your-inner-dancer...',
      soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1337357878&color=%23ff5500&inverse=false&auto_play=false&show_user=true'
    },
    {
      label: 'Vue AudioMotion Analyzer',
      subTitle: 'High-resolution real-time audio spectrum analyzer',
      content: 'Vue plugin wrapping Henrique Vianna\'s audioMotion-analyzer',
      icon: 'i-arcticons-super-sound',
      url: 'https://vue-audiomotion-analyzer.dev',
      urlDisplay: 'vue-audiomotion-analyzer.dev'
    }
    /* {
      label: 'Meditative melody',
      subTitle: 'Live jam on the Subharmonicon',
      url: 'https://www.youtube.com/watch?v=whKBW_hu4nE',
      youtube: 'https://www.youtube.com/embed/whKBW_hu4nE',
    }, */
  ]
}
