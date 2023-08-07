export default defineAppConfig({
  longDateFormat: 'DD MMMM YYYY',
  shortDateFormat: 'DD MMM YYYY',
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
    }
  }
})
