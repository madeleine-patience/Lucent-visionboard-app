const date1 = new Date()
const date2 = new Date()

console.log(date1)

const getYesterday = (dateOnly = false) => {
  let d = new Date()
  d.setDate(d.getDate() - 7)
  return dateOnly ? new Date(d).toDateString() : d
}

console.log(getYesterday())

//   <h4> <%= `${gratitudeLog[i].date.getMonth()}/
//             ${gratitudeLog[i].date.getDate()} /
//             ${gratitudeLog[i].date.getFullYear()}`%> </h4> </div>

let sevenPreviousDays = []
for (let i = 0; i < 7; i++) {
  dateOnly = false
  let d = new Date()
  d.setDate(d.getDate() - i)
  sevenPreviousDays.push(
    dateOnly ? new Date(d).toString().slice(0, 13) : d.toString().slice(0, 15),
  )
}

sevenPreviousDays
