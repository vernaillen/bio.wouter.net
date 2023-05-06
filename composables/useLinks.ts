import type { Link } from '~~/types/link'

export function useLinks (): Link[] {
  return [
    {
      title: 'Nuxt 3',
      subTitle: 'Latest blog post on vernaillen.dev about learning Nuxt 3',
      url: new URL('https://vernaillen.dev/blog/nuxt'),
      image: '/images/nuxt-logo-green-light.png',
      expand: true
    },
    {
      title: 'Harmonics.be',
      subTitle: 'Healing power of sound, music and dance',
      content: 'Ecstatic dance, immersive soundbaths, music production,...',
      url: new URL('https://harmonics.be')
    },
    {
      title: 'Vernaillen.dev',
      subTitle: 'Senior Full Stack Developer',
      content: 'a brand new website for my freelance consultancy services as a full stack java developer',
      url: new URL('https://vernaillen.dev')
    },
    {
      title: 'Release Your Inner Dancer',
      subTitle: 'Ecstatic Dance dj-set recorded on 3 September 2022 in Haaltert',
      url: new URL('https://soundcloud.com/woutervernaillen/release-your-inner-dancer-ecstatic-dance'),
      soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1337357878&color=%23ff5500&inverse=false&auto_play=false&show_user=true'
    },
    {
      title: 'Vue AudioMotion Analyzer',
      subTitle: 'High-resolution real-time audio spectrum analyzer',
      content: 'Vue plugin wrapping Henrique Vianna\'s audioMotion-analyzer',
      url: new URL('https://vue-audiomotion-analyzer.dev/')
    }
    /* {
      title: 'Meditative melody',
      subTitle: 'Live jam on the Subharmonicon',
      url: new URL('https://www.youtube.com/watch?v=whKBW_hu4nE'),
      youtube: 'https://www.youtube.com/embed/whKBW_hu4nE',
    }, */
  ]
}
