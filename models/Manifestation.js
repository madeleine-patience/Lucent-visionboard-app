const mongoose = require("mongoose");

const manifestationSchema = new mongoose.Schema({
  whatToManifest: {
    type: string,
    required: true,
  },
  manifestationObstacles: {
    type: String,
    required: true
  },
  manifestationAction: {
    type: string,
    required: true,
  },
  

});

module.exports = mongoose.model("Manifestation", ManifestationSchema);
