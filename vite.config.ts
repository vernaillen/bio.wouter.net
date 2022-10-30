/// <reference types="vitest" />
import { URL, fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configDefaults } from 'vitest/config'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ViteSSGOptions } from 'vite-ssg'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude],
    coverage: {
      reporter: ['text', 'lcov'],
      all: true,
      include: ['src/**/*.vue'],
    },
    globals: true,
    setupFiles: ['test/matchMedia.setup.ts'],
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    format: 'cjs',
  },
})
