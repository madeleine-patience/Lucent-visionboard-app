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
  

});

module.exports = mongoose.model("Manifestation", ManifestationSchema);
