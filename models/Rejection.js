const mongoose = require("mongoose");

const Rejection = new mongoose.Schema({
    rejection: {
    type: String,
    required: true,
  },
    whatYouLearned: {
    type: String,
    required: true
  },
  reDirection: {
    type: string,
    required: true,
  },
  

});



module.exports = mongoose.model("AskTheUniverse", AskTheUniverseSchema);