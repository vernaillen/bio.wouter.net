import type { Social } from '~~/types/social'

export const useSocials = (): Social[] => {
  return [
    {
      name: 'GitHub',
      url: new URL('https://github.com/vernaillen/'),
      icon: 'uil:github',
    },
    {
      name: 'LinkedIn',
      url: new URL('https://www.linkedin.com/in/woutervernaillen/'),
      icon: 'uil:linkedin',
    },
    {
      name: 'Instagram',
      url: new URL('https://www.instagram.com/woutervernaillen/'),
      icon: 'uil:instagram',
    },
    {
      name: 'Mastodon',
      url: new URL('https://fosstodon.org/@vernaillen'),
      icon: 'mdi:mastodon',
    },
  ]
}
