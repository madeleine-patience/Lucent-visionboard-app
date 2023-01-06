function totalWeeklyLog(allActivity) {
  let totalDailyLogs = [null, null, null, null, null, null, null]
  for (let i = 0; i < allActivity.length; i++) {
    for (let j = i; j <= 7; j++) {
      if (allActivity[i][j]) {
        totalDailyLogs[j] = true
      }
    }
  }
  return totalDailyLogs
}
module.exports = { totalWeeklyLog }
