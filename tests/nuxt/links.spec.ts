import { describe, expect, it } from 'vitest'
import { mountSuspended } from 'vitest-environment-nuxt/utils'
import TheLinks from '~/components/TheLinks.vue'

describe('components', () => {
  it('Renders The Links', async () => {
    const component = await mountSuspended(TheLinks)
    expect(component.html()).toMatch('<header')
    expect(component.html()).toMatch('wouter')
  })
})
