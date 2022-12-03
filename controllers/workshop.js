const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Gratitude= require('../models/Gratitude')
const Manifestation= require('../models/Manifestation')
const path = require("path")


module.exports = {

  getManifestation: async (req, res) => {
    try {
      const manifestation = await Manifestation.find({ userId: req.user.id });
      res.render("workshop1.ejs", { manifestation: manifestation, user: req.user });
      console.log(manifestation) 

    } catch (err) {
      console.log(err);
    }
  },

  createGratitude: async (req, res) => {
    try{
        await Manifesation.create({
          whatToManifest: req.body.whatToManifest,
          manifestationObstacles: req.body.manifestationObstacles,
          manifestationAction: req.body.manifestationAction,
          userId: req.user.id,
          date: new Date(),   

        });
        console.log('Your manifesation has been logged!')
        res.redirect('/profile')
        console.log(req.body.item)
        console.log(req.user.id)
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







