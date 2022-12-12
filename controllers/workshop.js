const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Manifestation= require('../models/Manifestation')
const path = require("path")
const AskTheUniverse= require('../models/AskTheUniverse')


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


//   deleteGratitude: async (req, res)=>{
//     const gratitudeLog = await Gratitude.findById({ _id: req.params.id });

//     try {
//       gratitudeLog.remove()
//       res.redirect("/gratitude");



//     } catch (err) {
//       res.redirect("/gratitude");
//     }
//   },



}







