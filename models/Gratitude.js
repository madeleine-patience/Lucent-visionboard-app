const mongoose = require("mongoose");

const GratitudeSchema = new mongoose.Schema({
  gratitudeItem1: {
    type: Array,
    required: true,
  },
  //Duplicate schema entries aren't required
  // gratitudeItem1: {
  //   type: Array,
  //   required: false,
  // },
  // gratitudeItem1: {
  //   type: Array,
  //   required: false,
  // },
  // gratitudeItem1: {
  //   type: Array,
  //   required: false,
  // },
  // gratitudeItem1: {
  //   type: Array,
  //   required: false,
  // },
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
