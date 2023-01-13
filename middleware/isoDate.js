function isoDate(req, res, next) {
  let d = new Date()
  d = new Date(d.valueOf() - 60 * 1000 * d.getTimezoneOffset())
  res.locals.isoDate = d.toISOString().split('T')[0]
  next()
}

module.exports = { isoDate }
