
function convertDate (givenDate){
    let dates=[]
    for(let i=0; i<givenDate.length; i++){

    let date= givenDate[i].date.toString().slice(0,10)
    dates.push( new Date(date).toUTCString().slice(0,12))
}
return dates
}
module.exports = { convertDate }
