const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Gratitude= require("../models/Gratitude")
const path = require("path")


module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      const gratitudeLog = await Gratitude.find({ userId: req.user.id });

      res.render("profile.ejs", { posts: posts, user: req.user, gratitudeLog:gratitudeLog });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("visionBoard.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  getGratitude: async (req, res) => {
    try {
      const gratitudeLog = await Gratitude.find({ userId: req.user.id });
      res.render("gratitude.ejs", { gratitudeLog: gratitudeLog, user: req.user });
      console.log(gratitudeLog) 

    } catch (err) {
      console.log(err);
    }
  },

  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/visionBoard");
    } catch (err) {
      console.log(err);
    }
  },



  createGratitude: async (req, res)=>{
    try{
        await Gratitude.create({
          gratitudeItem1: req.body.item,
          userId: req.user.id,
          date: new Date(),

        });
        console.log('Your gratitude for today has been logged!')
        res.redirect('/gratitude')
        console.log(req.body.item)
        console.log(req.user.id)
    }catch(err){
        console.log(err)
    }
},




getCreatePostPage: async (req,res) => {
  try {
      res.render('createPost.ejs', {user: req.user})
  }
  catch(err) {
      console.log(err)
  }
},
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },



  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/visionBoard");
    } catch (err) {
      res.redirect("/visionBoard");
    }
  },


  deleteGratitude: async (req, res)=>{
    const gratitudeLog = await Gratitude.find({ userId: req.user.id });

    try {
      // Find post by id
      // Delete post from db
      await Gratitude.remove({ gratitudeLog});
      console.log("Deleted Post");
      res.redirect("/gratitude");
    } catch (err) {
      res.redirect("/gratitude");
    }
  },

getAffirmationsPage: async (req, res) => {    
    try {
      res.render("affirmations.ejs");
    
    } 
    catch (err) {
      res.redirect("/gratitude");
    }
  },

clickAffirmations: async(req,res)=>{
  try{
  let randomNumber = Math.floor(Math.random() * (3))
  }
  catch (err){
  console.log(err)

    }},


getAffirmation:('/api/',(request,response)=>{

    const affirmationCategory= request.params.affirmationCategory
    if(affirmations[affirmationCategory]){
        response.json(affirmations[affirmationCategory])
    }
}),


}















