const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
    required: false,
  },
})

module.exports = mongoose.model('Feedback', GratitudeSchema)
