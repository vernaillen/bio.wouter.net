import defaultTheme from 'tailwindcss/defaultTheme'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

const customIconSet = {
  prefix: 'custom',
  icons: {
    'vernaillen-logo': {
      body: '<g fill="none" opacity="transparent"><path fill="#000000" d="M0 0 H92 V184 H172 V0 H264 V184 H344 V0 H436 V276 H0 Z"/><path fill="#9c8e1b" d="M490 0 H582 V184 H662 V0 H754 V276 H490 Z"/></g>',
      width: 754,
      height: 400
    }
  }
}

module.exports = {
  content: [
    './app.vue',
    './assets/svg/*.svg',
    './components/*.vue',
    './components/**/*.vue',
    './content/**/*.md',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '540px',
      md: '620px',
      lg: '620px',
      xl: '620px',
      '2xl': '620px'
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Inter', ...defaultTheme.fontFamily.serif],
        mono: ['PT Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        white: '#FFFFFF',
        light: '#f2f2f2',
        black: '#0c0c0d',
        dark: '#3c3c3c',
        vernaillen: {
          DEFAULT: '#9c8e1b',
          50: '#faf9f0',
          100: '#f5f3e1',
          200: '#e6e2b5',
          300: '#d6d090',
          400: '#baaf4e',
          500: '#9c8e1b',
          600: '#8c7815',
          700: '#755d0f',
          800: '#5e4509',
          900: '#452e06',
          950: '#2e1b02'
        },
        masala: {
          DEFAULT: '#3c3c3c',
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#cfcfcf',
          300: '#b3b3b3',
          400: '#666666',
          500: '#3c3c3c',
          600: '#383232',
          700: '#2e2222',
          800: '#241515',
          900: '#1c0d0d',
          950: '#120505'
        }
      },

      typography: () => {
        return {
          DEFAULT: {
            css: {
              maxWidth: '1320px'
            }
          }
        }
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)'
      }
    }
  },
  safelist: [
    'bg-light',
    'dark:bg-black',
    'bg-gray-950',
    {
      pattern: /opacity-(0|50|100)/,
      variants: ['hover']
    }
  ],
  variants: {
    extend: {}
  },

  plugins: [
    iconsPlugin({
      collections: {
        custom: customIconSet,
        ...getIconCollections(['uil', 'logos', 'arcticons', 'mdi', 'game-icons', 'material-symbols'])
      }
    })
  ]
}
