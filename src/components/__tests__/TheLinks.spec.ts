import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import TheLinks from '@/components/TheLinks.vue'

describe('TheLinks', () => {
  it('renders 5 links', () => {
    const wrapper = mount(TheLinks, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    expect(wrapper.find('.itemWrapper').exists()).toBe(true)
    expect(wrapper.findAll('.itemWrapper').length).toBe(5)
  })
})
