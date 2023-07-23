// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'

describe('test nuxt config', () => {
  it('nuxt router is defined', () => {
    expect(useNuxtApp().$router).toBeDefined()
  })

  it('should return the runtimeConfig from nuxt.config', () => {
    const config = useRuntimeConfig()
    expect(config).toBeTypeOf('object')
    expect(config?.public).toBeTypeOf('object')
  })
})
