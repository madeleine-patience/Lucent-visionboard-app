const mongoose = require("mongoose");

const ManifestationSchema = new mongoose.Schema({
  whatToManifest: {
    type: String,
    required: true,
  },
  manifestationObstacles: {
    type: String,
    required: true
  },
  manifestationAction: {
    type: String,
    required: true,
  },
    userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default:Date.now,
    required: true,
  },
  

});

module.exports = mongoose.model("Manifestation", ManifestationSchema);