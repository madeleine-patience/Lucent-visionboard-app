const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Manifestation= require('../models/Manifestation')
const path = require("path")
const AskTheUniverse= require('../models/AskTheUniverse')
const ComfortZone= require('../models/ComfortZone')
const Rejection= require('../models/Rejection')
const Stress= require('../models/Stress')
const Forgiveness= require('../models/Forgiveness')


module.exports = {

  getManifestation: async (req, res) => {
    try {
      const manifesationLog = await Manifestation.find({ userId: req.user.id });
      const letterLog = await AskTheUniverse.find({ userId: req.user.id });
      const rejectionLog = await Rejection.find({ userId: req.user.id });
      const comfortZoneLog = await ComfortZone.find({ userId: req.user.id });
      const stressLog = await Stress.find({ userId: req.user.id });
      const forgivenessLog = await Forgiveness.find({ userId: req.user.id });



      res.render("workshop.ejs",{ 
      manifesationLog: manifesationLog,
      user: req.user, 
      letterLog:letterLog,
      rejectionLog:rejectionLog,
      comfortZoneLog:comfortZoneLog,
      stressLog:stressLog,
      forgivenessLog:forgivenessLog

    });
      console.log(comfortZone.length) 

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
          userId: req.user.id,



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
          userId: req.user.id,



        });
        console.log('You reflected well! Good job.')
        res.redirect('/workshop')
        console.log(req.body.thingsYouWantToChallenge)


    }catch(err){
        console.log(err)
    }
},

  getStress: async (req, res) => {
    try {
      const stress = await Stress.find({ userId: req.user.id });
      res.render("workshopFive.ejs",{stress:stress, user:req.user})
      // res.redirect('/profile');
    } catch (err) {
      console.log(err);
    }
  },

   createStress: async (req, res) => {
    try{
        await Stress.create({
          yourStressors: req.body.yourStressors,
          waysToChange: req.body.waysToChange,
          thingstoMakeEasier: req.body.thingstoMakeEasier,
          userId: req.user.id,

        });
        console.log('You are on the path to find less stress in your life! ')
        res.redirect('/workshop')
        console.log(req.body.yourStressors)


    }catch(err){
        console.log(err)
    }
},


  getForgiveness: async (req, res) => {
    try {
      const forgive = await Forgiveness.find({ userId: req.user.id });
      res.render("workshopSix.ejs",{forgive:forgive, user:req.user})
    } catch (err) {
      console.log(err);
    }
  },

   createForgivness: async (req, res) => {
    try{
        await Forgiveness.create({
          personToForgive: req.body.personToForgive,
          howTheyMadeYouFeel: req.body.howTheyMadeYouFeel,
          howTheyWereFeeling: req.body.howTheyWereFeeling,
          stepsToForgivness: req.body.stepsToForgivness,
          whatYouGain: req.body.whatYouGain,
          userId: req.user.id,

        });
        console.log('You are on the path to find less stress in your life! ')
        res.redirect('/workshop')


    }catch(err){
        console.log(err)
    }
},



}








