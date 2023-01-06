const mongoose = require('mongoose')

const ComfortZoneSchema = new mongoose.Schema({
  thingsYouWantToChallenge: {
    type: String,
    required: true,
  },
  stepsToGetThere: {
    type: String,
    required: true,
  },
  whatWouldHappenIf: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
})

module.exports = mongoose.model('ComfortZone', ComfortZoneSchema)
