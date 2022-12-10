const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const workshopController = require("../controllers/workshop");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.get("/", ensureAuth, workshopController.getManifestation)



module.exports = router;

