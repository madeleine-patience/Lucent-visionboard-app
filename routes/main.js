const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const gratitudeController = require("../controllers/gratitudeC");
const workshopController= require("../controllers/workshop");
const moodController = require("../controllers/mood");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/visionBoard", ensureAuth, postsController.getFeed);

// router.get("/description", ensureAuth, postsController.getVisionBoardDescription);

router.get("/gratitude", ensureAuth, gratitudeController.getGratitude);
router.get("/moodBoard", ensureAuth, moodController.getMoodBoard);
router.get("/workshop", ensureAuth, workshopController.getManifestation);
// router.get("/workshop", ensureAuth, workshopController.getWorkshopOne);
// router.get("/moodBoard", ensureAuth, moodController.getCreateMoodBoard);




router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/affirmations", ensureAuth, postsController.getAffirmationsPage);
router.get("/api/", ensureAuth,postsController.getAffirmation);
// router.get("/description/", ensureAuth,postsController.getVisionBoardDescription);

module.exports = router;


