import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TheLinks from '~/components/TheLinks.vue'

describe('components', () => {
  it('Renders The Links', async () => {
    const component = await mount(TheLinks)
    expect(component.html()).toMatch('<div class="w-full')
    expect(component.html()).toMatch('wouter')
  })
})
