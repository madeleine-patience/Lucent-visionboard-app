const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const moodController = require("../controllers/mood");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.get("/", ensureAuth, moodController.getMoodBoard)
router.get("/getCreateMoodBoard", ensureAuth, moodController.getCreateMoodBoard),


router.post("/createMood",  ensureAuth, moodController.createMood),


module.exports = router;





