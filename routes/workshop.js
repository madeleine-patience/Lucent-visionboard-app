const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const workshopController = require('../controllers/workshop')

const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Post Routes - simplified for now

router.get('/', ensureAuth, workshopController.getManifestation),
  router.get('/getWorkshopOne', ensureAuth, workshopController.getWorkshopOne),
  router.get(
    '/getLetterToTheUniverse',
    ensureAuth,
    workshopController.getLetterToTheUniverse,
  ),
  router.get('/getRedirection', ensureAuth, workshopController.getRedirection),
  router.get('/getComfortZone', ensureAuth, workshopController.getComfortZone),
  router.get('/getStress', ensureAuth, workshopController.getStress),
  router.get('/getForgiveness', ensureAuth, workshopController.getForgiveness),
  router.post(
    '/createManifestation',
    ensureAuth,
    workshopController.createManifestation,
  )
router.post('/createLetter', ensureAuth, workshopController.createLetter)
router.post(
  '/createRedirection',
  ensureAuth,
  workshopController.createRedirection,
)
router.post(
  '/createComfortZone',
  ensureAuth,
  workshopController.createComfortZone,
)
router.post('/createStress', ensureAuth, workshopController.createStress)
router.post(
  '/createForgiveness',
  ensureAuth,
  workshopController.createForgiveness,
)

module.exports = router
