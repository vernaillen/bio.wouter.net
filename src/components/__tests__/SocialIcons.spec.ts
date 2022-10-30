import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import SocialIcons from '@/components/SocialIcons.vue'

describe('SocialIcons', () => {
  it('renders properly', () => {
    const wrapper = mount(SocialIcons)
    expect(wrapper.find('a font-awesome-icon').exists()).toBe(true)
    expect(wrapper.findAll('a font-awesome-icon').length).toBe(4)
  })
})
