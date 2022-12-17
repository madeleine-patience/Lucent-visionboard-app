const mongoose = require("mongoose");

const ForgivenessSchema = new mongoose.Schema({
    personToForgive: {
    type: String,
    required: true,
  },
    howTheyMadeYouFeel: {
    type: String,
    required: true
  },
  whatWouldHappenIf: { 
    type: String,
    required: true, 
  },
     
      
});   
    
       

module.exports = mongoose.model("Forgiveness", ForgivenessSchema);

 
