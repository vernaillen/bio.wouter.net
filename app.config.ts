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
          soft: 'shadow-sm text-gray-700 dark:text-gray-200 bg-white hover:bg-gray-50 disabled:bg-gray-50 dark:bg-gray-500 dark:hover:bg-gray-400 dark:disabled:bg-gray-400'
        }
      }
    }
  }
})
