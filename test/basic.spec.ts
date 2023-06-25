import { describe, expect, it } from 'vitest'
import { $fetch, isDev, setup } from '@nuxt/test-utils'

await setup({
  server: true,
  browser: false
})

describe('tests', () => {
  it('basic test', () => {
    expect(1 + 1).toEqual(2)
  })
})

describe('example', () => {
  it('Renders Title', async () => {
    expect(await $fetch('/')).toMatch('Wouter Vernaillen')
  })

  if (isDev()) {
    it('[dev] ensure vite client script is added', async () => {
      expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
    })
  }
})
