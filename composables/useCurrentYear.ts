import dayjs from 'dayjs'

export const useCurrentYear = () => {
  const date = dayjs()
  return date.format('YYYY')
}
