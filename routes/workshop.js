const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const workshopController = require("../controllers/workshop");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.get("/", ensureAuth, workshopController.getManifestation),
router.get("/getWorkshopOne", ensureAuth, workshopController.getWorkshopOne),
router.get("/getWorkshopTwo", ensureAuth, workshopController.getWorkshopTwo),




router.post("/createManifestation", ensureAuth, workshopController.createManifestation)        


module.exports = router;

