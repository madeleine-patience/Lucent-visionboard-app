const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Gratitude= require("../models/Gratitude")
const path = require("path")


const affirmations ={
    'money':{
            "1":"I attract money to me easily and effortlessly.",
            "2":"Money is energy, and it flows into my life constantly.",
            "3":"Money falls into my lap in miraculous ways."
},
    'love':{
            "1":"I am a good human being and deserve love.",
            "2":"The more I love myself, the more love I have to give others.",
            "3":"My heart is open."
},
    'friendship':{
            "1":"My friends make me laugh, and that gives me joy.",
            "2":"I can make friends naturally and without effort.",
            "3":"Loving myself lets me love my friends genuinely."
},
    'self love': {
            "1":"I accept myself exactly as I am now.",
            "2":"I am constantly growing, evolving and becoming my best self..",
            "3":"My imperfections are what make me unique."
            },
    'health': {
            "1":"I deserve to feel healthy and vibrant.",
            "2":"It feels good to take care of myself.",
            "3":"My body is sacred and I will take care of it."
        },
    'success':{
            "1":"I am worthy enough to follow my dreams and manifest my desires.",
            "2":"I believe in myself.",
            "3":"I am worthy of my dream job and am creating the career of my dreams."

}

}

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



getAffirmation:('/api/',(request,response)=>{

    const affirmationCategory= request.params.affirmationCategory
        response.json(affirmations)
}),

}




