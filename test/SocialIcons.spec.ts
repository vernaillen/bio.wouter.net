import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'
import { expectNoClientErrors } from './utils'

await setup({
  server: true,
  browser: false,
})

describe('SocialIcons', () => {
  it('renders properly', async () => {
    const html = await $fetch('/')

    expect(html).toContain('<div class="socialIcons')
    expect(html).toContain('<svg')
    expect(html).toContain('href="https://github.com/vernaillen/"')
    expect(html).toContain('href="https://www.linkedin.com/in/woutervernaillen/"')
    expect(html).toContain('href="https://www.instagram.com/woutervernaillen/"')
    expect(html).toContain('href="https://fosstodon.org/@vernaillen"')

    await expectNoClientErrors('/')
  })
})
