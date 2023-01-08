const mongoose = require("mongoose");

const GratitudeSchema = new mongoose.Schema({
  gratitudeItem1: {
    type: Array,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
  

});

module.exports = mongoose.model("Gratitude", GratitudeSchema);
