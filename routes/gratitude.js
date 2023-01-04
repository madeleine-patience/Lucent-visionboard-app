const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const gratitudeController = require('../controllers/gratitudeC')

const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Post Routes - simplified for now

router.get('/', ensureAuth, gratitudeController.getGratitude)
router.post('/createGratitude', ensureAuth, gratitudeController.createGratitude)
router.delete('/deleteGratitude/:id', gratitudeController.deleteGratitude)

router.get('/getSummary/:id', gratitudeController.getSummary)

module.exports = router
