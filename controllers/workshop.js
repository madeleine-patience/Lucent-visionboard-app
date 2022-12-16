const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Manifestation= require('../models/Manifestation')
const path = require("path")
const AskTheUniverse= require('../models/AskTheUniverse')
const ComfortZone= require('../models/ComfortZone')
const Rejection= require('../models/Rejection')


module.exports = {

  getManifestation: async (req, res) => {
    try {
      res.render("workshop.ejs");
     

    } catch (err) {
      console.log(err);
    }
  },



  createManifestation: async (req, res) => {
    try{
        await Manifestation.create({
          whatToManifest: req.body.whatToManifest,
          manifestationObstacles: req.body.manifestationObstacles,
          manifestationAction: req.body.manifestationAction,
          userId: req.user.id,

 

        });
        console.log('Your manifesation has been logged!')
        res.redirect('/workshop/getWorkshopOne')
        console.log(req.body.whatToManifest)
        console.log(req.body.manifestationObstacles)
        console.log(req.body.manifestationAction)

    }catch(err){
        console.log(err)
    }
},


  getWorkshopOne: async (req, res) => {
    try {

      const manifestation = await Manifestation.find({ userId: req.user.id });
      res.render("workshopOne.ejs", { manifestation: manifestation, user: req.user })
      console.log(manifestation) 
      // res.redirect('/profile');
    } catch (err) {
      console.log(err);
    }
  },


  getLetterToTheUniverse: async (req, res) => {
    try {
      const letter = await AskTheUniverse.find({ userId: req.user.id });
      res.render("workshopTwo.ejs",{letter:letter, user:req.user})
      // res.redirect('/profile');
    } catch (err) {
      console.log(err);
    }
  },

   createLetter: async (req, res) => {
    try{
        await AskTheUniverse.create({
          letterToTheUniverse: req.body.letterToTheUniverse,
          userId: req.user.id,



        });
        console.log('Your letter has been sent to the universe!')
        res.redirect('/workshop')
        console.log(req.body.letterToTheUniverse)


    }catch(err){
        console.log(err)
    }
},



      //  await Manifestation.create({
      //     whatToManifest: req.body.whatToManifest,
      //     manifestationObstacles: req.body.manifestationObstacles,
      //     manifestationAction: req.body.manifestationAction,
      //     userId: req.user.id,


  getRedirection: async (req, res) => {
    try {
      const rejection = await Rejection.find({ userId: req.user.id });
      res.render("workshopThree.ejs",{rejection:rejection, user:req.user})
      // res.redirect('/profile');
    } catch (err) {
      console.log(err);
    }
  },

   createRedirection: async (req, res) => {
    try{
        await Rejection.create({
          redirection: req.body.redirection,
          whatYouLearned: req.body.whatYouLearned,
          reDirection: req.body.reDirection,



        });
        console.log('You reflected well! Good job.')
        res.redirect('/workshop')
        console.log(req.body.redirection)


    }catch(err){
        console.log(err)
    }
},

  getComfortZone: async (req, res) => {
    try {
      const comfortZone = await ComfortZone.find({ userId: req.user.id });
      res.render("workshopFour.ejs",{comfortZone:comfortZone, user:req.user})
      // res.redirect('/profile');
    } catch (err) {
      console.log(err);
    }
  },

   createComfortZone: async (req, res) => {
    try{
        await ComfortZone.create({
          thingsYouWantToChallenge: req.body.thingsYouWantToChallenge,
          stepsToGetThere: req.body.stepsToGetThere,
          whatWouldHappenIf: req.body.whatWouldHappenIf,



        });
        console.log('You reflected well! Good job.')
        res.redirect('/workshop')
        console.log(req.body.thingsYouWantToChallenge)


    }catch(err){
        console.log(err)
    }
},


}








