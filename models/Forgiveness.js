const mongoose = require('mongoose')
const ForgivenessSchema = new mongoose.Schema({
  personToForgive: {
    type: String,
    required: true,
  },
  howTheyMadeYouFeel: {
    type: String,
    required: true,
  },
  howTheyWereFeeling: {
    type: String,
    required: true,
  },
  stepsToForgivness: {
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

module.exports = mongoose.model('Forgiveness', ForgivenessSchema)
