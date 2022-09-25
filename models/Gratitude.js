const mongoose = require("mongoose");

const GratitudeSchema = new mongoose.Schema({
  gratitudeItem: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("Gratitude", GratitudeSchema);
