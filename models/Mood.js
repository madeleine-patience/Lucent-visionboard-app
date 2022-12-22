const mongoose = require('mongoose')

const MoodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  dueDate: {
    type: String,
    required: false,
  },
  mood: {
    type: Array,
    required: false,
  },
  userId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Private'
  }
})

module.exports = mongoose.model('Mood', MoodSchema);
