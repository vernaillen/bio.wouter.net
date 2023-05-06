import dayjs from 'dayjs'

export function useCurrentYear () {
  const date = dayjs()
  return date.format('YYYY')
}
