const mongoose = require("mongoose");

const StressSchema = new mongoose.Schema({
  yourStressors: {
    type: String,
    required: true,
  },
    waysToChange: {
    type: String,
    required: true
  },
    thingstoMakeEasier: {
    type: String,
    required: true,
  },
    userId: {
    type: String,
    required: true
  },
  

});



module.exports = mongoose.model("Stress", StressSchema);