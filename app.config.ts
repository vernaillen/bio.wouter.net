export default defineAppConfig({
  github: {
    repo: 'vernaillen/bio.wouter.net'
  },
  ui: {
    primary: 'vernaillen',
    gray: 'masala',
    button: {
      default: {
        variant: 'soft'
      },
      color: {
        gray: {
          soft: 'shadow-sm text-gray-700 dark:text-gray-200 bg-white hover:bg-primary-300 hover:bg-opacity-40 disabled:bg-gray-50 dark:bg-gray-700 dark:hover:bg-primary-900 dark:disabled:bg-gray-600'
        }
      }
    },
    container: {
      constrained: 'max-w-xl'
    }
  }
})
