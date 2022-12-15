import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'
import { expectNoClientErrors } from './utils'

await setup({
  server: true,
  browser: false,
})

describe('TheLinks', () => {
  it('renders 5 links', async () => {
    const html = await $fetch('/')
    expect(html).toContain('.itemWrapper')
    expect(html).toContain('Release Your Inner Dancer')
    expect(html).toContain('Harmonics.be')
    expect(html).toContain('Vernaillen.dev')
    expect(html).toContain('Vue AudioMotion Analyzer')
    expect(html).toContain('Meditative melody')

    await expectNoClientErrors('/')
  })
})
