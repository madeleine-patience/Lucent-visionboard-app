const mongoose = require("mongoose");

const RejectionSchema = new mongoose.Schema({
    redirection: {
    type: String,
    required: true,
  },
    whatYouLearned: {
    type: String,
    required: true
  },
  reDirection: {
    type: String,
    required: true,
  },
      userId: {
    type: String,
    required: true
  },

});



module.exports = mongoose.model("Rejection", RejectionSchema);

