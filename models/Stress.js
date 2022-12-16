const mongoose = require("mongoose");

const Stress = new mongoose.Schema({
  yourStressors: {
    type: String,
    required: true,
  },
    waysToChange: {
    type: String,
    required: true
  },
    thingstoMakeEasier: {
    type: string,
    required: true,
  },
  

});



module.exports = mongoose.model("AskTheUniverse", AskTheUniverseSchema);