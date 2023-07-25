import type { Social } from '~~/types/social'

export function useSocials (): Social[] {
  return [
    {
      name: 'GitHub',
      url: new URL('https://github.com/vernaillen/'),
      icon: 'i-uil-github'
    },
    {
      name: 'LinkedIn',
      url: new URL('https://www.linkedin.com/in/woutervernaillen/'),
      icon: 'i-uil-linkedin'
    },
    {
      name: 'Instagram',
      url: new URL('https://www.instagram.com/woutervernaillen/'),
      icon: 'i-uil-instagram'
    },
    {
      name: 'Twitter',
      url: new URL('https://twitter.com/vernaillen'),
      icon: 'i-custom-twitter'
    },
    {
      name: 'Mastodon',
      url: new URL('https://fosstodon.org/@vernaillen'),
      icon: 'i-mdi-mastodon'
    }
  ]
}
