// @vitest-environment nuxt
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { mockNuxtImport } from 'vitest-environment-nuxt/utils'
import HeaderComponent from '~/components/HeaderComponent.vue'
import IconLogo from '~/components/IconLogo.vue'

mockNuxtImport('useColorMode', () => {
  return () => {
    return {
      value: 'light',
      preference: 'dark'
    }
  }
})

describe('components', () => {
  it('test useColorMode mock', () => {
    expect(useColorMode().value).toMatchInlineSnapshot('"light"')
    expect(useColorMode().preference).toMatchInlineSnapshot('"dark"')
  })

  it('Renders HeaderComponent', async () => {
    const component = await mount(HeaderComponent)
    expect(component.vm).toBeTruthy()
    expect(component.html()).toMatch('<header')
    expect(component.html()).toContain('wouter')
  })

  it('Renders IconLogo', async () => {
    const component = await mount(IconLogo)
    expect(component.html()).toMatch('<svg')
    expect(component.html()).toMatch('class="fill-black dark:fill-primary-500"')
  })
})
