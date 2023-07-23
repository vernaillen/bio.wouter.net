// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mockNuxtImport, mountSuspended } from 'vitest-environment-nuxt/utils'
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
    const component = await mountSuspended(HeaderComponent)
    expect(component.html()).toMatch('<header')
    expect(component.html()).toMatch('wouter')
  })

  it('Renders IconLogo', async () => {
    const component = await mountSuspended(IconLogo)
    expect(component.html()).toMatch('<svg')
    expect(component.html()).toMatch('fill-logo-left')
    expect(component.html()).toMatch('fill-logo-right')
  })
})
