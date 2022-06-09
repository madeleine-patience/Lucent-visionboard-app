const mongoose = require("mongoose");

const ComfortZone = new mongoose.Schema({
  letterToTheUniverse: {
    type: String,
    required: true,
  },
    userId: {
    type: String,
    required: true
  },
  // date: {
  //   type: Date,
  //   required: true, 
  // },
   

});  

  

module.exports = mongoose.model("AskTheUniverse", AskTheUniverseSchema);

 

git add .
git commit -m "update" --date "2022-06-08"
git push