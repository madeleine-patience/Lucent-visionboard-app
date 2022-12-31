const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Gratitude= require('../models/Gratitude')
const path = require("path")


module.exports = {

  getGratitude: async (req, res) => {
    try {
      const gratitudeLog = await Gratitude.find({ userId: req.user.id });
    

      res.render("gratitude.ejs", { gratitudeLog: gratitudeLog, user: req.user});
      console.log(gratitudeLog) 

    } catch (err) {
      console.log(err);
    }
  },

  createGratitude: async (req, res) => {
    try{
        await Gratitude.create({
          gratitudeItem1: req.body.item,
          userId: req.user.id,
          date: new Date(),   

        });
        console.log('Your gratitude for today has been logged!')
        res.redirect('/gratitude')
        console.log(req.body.item)
        // console.log(req.user.id)
    }catch(err){
        console.log(err)
    }
},


  deleteGratitude: async (req, res)=>{
    const gratitudeLog = await Gratitude.findById({ _id: req.params.id });

    try {
      gratitudeLog.remove()
      res.redirect("/gratitude");



    } catch (err) {
      res.redirect("/gratitude");
    }
  },



}







