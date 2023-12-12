import defaultTheme from 'tailwindcss/defaultTheme'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

const customIconSet = {
  prefix: 'custom',
  icons: {
    'vernaillen-logo-light': {
      body: '<g fill="none" opacity="transparent"><path fill="#000000" d="M0 0 H92 V184 H172 V0 H264 V184 H344 V0 H436 V276 H0 Z"/><path fill="#9c8e1b" d="M490 0 H582 V184 H662 V0 H754 V276 H490 Z"/></g>',
      width: 754,
      height: 400
    },
    'vernaillen-logo-dark': {
      body: '<g fill="none" opacity="transparent"><path fill="#9c8e1b" d="M0 0 H92 V184 H172 V0 H264 V184 H344 V0 H436 V276 H0 Z"/><path fill="#ffffff" d="M490 0 H582 V184 H662 V0 H754 V276 H490 Z"/></g>',
      width: 754,
      height: 400
    },
    twitter: {
      body: '<g transform="translate(-281.5,-167.31)" id="layer1"><path fill="currentColor" d="M 283.94,167.31 670.33,683.95 281.5,1104 h 87.51 L 709.43,736.24 984.48,1104 h 297.8 L 874.15,558.3 1236.07,167.31 h -87.51 L 835.05,506.01 581.74,167.31 Z m 128.69,64.46 h 136.81 l 604.13,807.76 h -136.81 z" id="path1009" /></g>',
      width: 936,
      height: 1000
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

      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              maxWidth: '1320px',
              a: {
                fontWeight: theme('fontWeight.normal'),
                textDecoration: 'none',
                borderBottom: '1px solid rgba(123, 136, 86, 0.2)',
                transition: 'color 0.3s cubic-bezier(.65, 0, .28, 1)',
                position: 'relative'
              },
              'a, .primary': {
                color: 'hsla(53, 70.5%, 35.9%, 1)',
                transition: '0.4s'
              },
              'a:hover': {
                color: 'hsla(53, 70.5%, 35.9%, 0.8)'
              },
              'a::after': {
                content: '""',
                position: 'absolute',
                left: '0',
                bottom: '-2px',
                right: '0',
                height: '1px',
                backgroundImage: 'linear-gradient(to right, #7b8856, #cacfbb)',
                transformOrigin: '100% 100%',
                transform: 'scaleX(0)',
                transition: 'transform 0.3s cubic-bezier(.65, 0, .28, 1)'
              },
              'a:hover::after, a:focus::after': {
                transformOrigin: '0% 100%',
                transform: 'scaleX(1)'
              },
              'a.linkButton::after': {
                backgroundImage: 'none',
                backgroundColor: 'transparent'
              }
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
