const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const addDescriptonController = require("../controllers/posts");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, addDescriptonController.getPost);

router.post("/createPost", upload.single("file"), addDescriptonController.createPost);

router.put("/likePost/:id", addDescriptonController.likePost);

router.delete("/deletePost/:id", addDescriptonController.deletePost);

router.get("/api", ensureAuth,addDescriptonController.getAffirmation);


module.exports = router;

