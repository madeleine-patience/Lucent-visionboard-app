function generateWeeklyActivity(entryLog) {
  let week = [null, null, null, null, null, null, null]
  const currentDate = new Date(
    new Date(Date.now()).toLocaleString('en-US', { timeZone: 'UTC' }),
  )
  for (let i = entryLog.length - 1; i >= 0; i--) {
    const diffTime = Math.abs(currentDate - entryLog[i].date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1

    if (diffDays >= 7) {
      break
    }
    week[diffDays] = entryLog[i]._id
  }
  return week.reverse()
}

module.exports = { generateWeeklyActivity }
