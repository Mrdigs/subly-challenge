import { timeAgo } from "./date-helpers"

describe("timeAgo", () => {
  it('returns "just now" for the current time', () => {
    const now = new Date()
    expect(timeAgo(now)).toBe("just now")
  })

  it('returns "1 minute ago" for a date 1 minute ago', () => {
    const oneMinuteAgo = new Date(Date.now() - 60 * 1000)
    expect(timeAgo(oneMinuteAgo)).toBe("1 minute ago")
  })

  it('returns "2 minutes ago" for a date 2 minutes ago', () => {
    const twoMinutesAgo = new Date(Date.now() - 120 * 1000)
    expect(timeAgo(twoMinutesAgo)).toBe("2 minutes ago")
  })

  it('returns "1 hour ago" for a date 1 hour ago', () => {
    const oneHourAgo = new Date(Date.now() - 3600 * 1000)
    expect(timeAgo(oneHourAgo)).toBe("1 hour ago")
  })

  it('returns "1 day ago" for a date 1 day ago', () => {
    const oneDayAgo = new Date(Date.now() - 86400 * 1000)
    expect(timeAgo(oneDayAgo)).toBe("1 day ago")
  })

  it('returns "2 days ago" for a date 2 days ago', () => {
    const twoDaysAgo = new Date(Date.now() - 172800 * 1000)
    expect(timeAgo(twoDaysAgo)).toBe("2 days ago")
  })

  it('returns "1 month ago" for a date 1 month ago', () => {
    const oneMonthAgo = new Date(Date.now() - 2592000 * 1000)
    expect(timeAgo(oneMonthAgo)).toBe("1 month ago")
  })

  it('returns "1 year ago" for a date 1 year ago', () => {
    const oneYearAgo = new Date(Date.now() - 31536000 * 1000)
    expect(timeAgo(oneYearAgo)).toBe("1 year ago")
  })

  it('returns "2 years ago" for a date 2 years ago', () => {
    const twoYearsAgo = new Date(Date.now() - 63072000 * 1000)
    expect(timeAgo(twoYearsAgo)).toBe("2 years ago")
  })
})
