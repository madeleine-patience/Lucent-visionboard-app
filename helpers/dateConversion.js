function convertDate(givenDate) {
  let dates = []
  for (let i = 0; i < givenDate.length; i++) {
    let date = givenDate[i].date.toString().slice(0, 10)
    dates.push(new Date(date).toUTCString().slice(0, 12))
  }
  return dates
}

function dayRange(d = null) {
  if (d == null) {
    d = new Date()
  } else if (typeof d == 'string') {
    d = new Date(d)
  }

  d.setHours(0)
  d.setMinutes(0)
  d.setSeconds(0)

  startDate = new Date(d)
  startDate.setDate(startDate.getDate() + 1)
  endDate = new Date(d)
  endDate.setDate(endDate.getDate() + 2)
  return [startDate, endDate]
}

module.exports = { convertDate, dayRange }
