const MINUTE_IN_SECONDS = 60
const HOUR_IN_SECONDS = 3600
const DAY_IN_SECONDS = 86400
const MONTH_IN_SECONDS = 2592000
const YEAR_IN_SECONDS = 31536000

// Converts a date to a human-readable "time ago" format
export const timeAgo = (date: Date) => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

  let interval = Math.floor(seconds / YEAR_IN_SECONDS)
  if (interval >= 1) {
    return interval === 1 ? "1 year ago" : `${interval} years ago`
  }

  interval = Math.floor(seconds / MONTH_IN_SECONDS)
  if (interval >= 1) {
    return interval === 1 ? "1 month ago" : `${interval} months ago`
  }

  interval = Math.floor(seconds / DAY_IN_SECONDS)
  if (interval >= 1) {
    return interval === 1 ? "1 day ago" : `${interval} days ago`
  }

  interval = Math.floor(seconds / HOUR_IN_SECONDS)
  if (interval >= 1) {
    return interval === 1 ? "1 hour ago" : `${interval} hours ago`
  }

  interval = Math.floor(seconds / MINUTE_IN_SECONDS)
  if (interval >= 1) {
    return interval === 1 ? "1 minute ago" : `${interval} minutes ago`
  }

  return "just now"
}
