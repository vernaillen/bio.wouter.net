import type { Social } from '~~/types/social'

export const useSocials = (): Social[] => {
  return [
    {
      name: 'GitHub',
      url: 'https://github.com/vernaillen/',
      icon: 'uil:github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/woutervernaillen/',
      icon: 'uil:linkedin',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/woutervernaillen/',
      icon: 'uil:instagram',
    },
    {
      name: 'Mastodon',
      url: 'https://fosstodon.org/@vernaillen',
      icon: 'mdi:mastodon',
    },
  ]
}
