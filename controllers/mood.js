const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Gratitude= require('../models/Gratitude')
const path = require("path")
const Mood = require('../models/Mood')

module.exports = {
    getMoodBoard: async (req,res)=>{
        try{
            // const postItems = await BlogPost.find({userId:req.user.id}).sort({date: -1})
            // const numberOfPosts = await BlogPost.countDocuments({userId:req.user.id})
            res.render('moodBoard.ejs')
            //  {BlogPost: postItems, postCount: numberOfPosts, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    // getEditPostPage: async (req,res)=>{
    //     console.log(req.params.id)
    //     try{
    //         const postToEdit = await BlogPost.findById(req.params.id)
    //         res.render('editPost.ejs', {blogPost: postToEdit, postId:req.params.id, user: req.user})
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    getCreateMoodBoard: async (req,res) => {
        try {
            res.render('moodBoardCreate.ejs')
        }
        catch(err) {
            console.log(err)
        }
    },

    // getDisplayPostPage: async (req,res)=>{
    //     console.log(req.params.id)
    //     try{
    //         const postToDisplay = await BlogPost.findById(req.params.id)
    //         res.render('displayOnePost.ejs', {blogPost: postToDisplay, postId:req.params.id, user: req.user})
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    createMood: async (req, res)=>{
        try{
            let newMood= await Mood.create({
                title: req.body.title,
                body: req.body.postBody,
                date: new Date(),
                dueDate: req.body.dueDate,
                mood: req.body.mood,
                userId: req.user.id})
            console.log('Blog has been posted!'),
            console.log(newMood),
            res.redirect('/moodBoard')
        }


            catch(err){
            console.log(err)
        }
    },


    // editBlogPost: async (req, res)=>{
    //     try{
    //         await BlogPost.findOneAndUpdate({_id: req.params.id}, {
    //             title: req.body.title,
    //             body: req.body.postBody,
    //             gitHub: req.body.gitHub,
    //             date: req.body.date,
    //             dueDate: req.body.dueDate,
    //             mood: req.body.mood,
    //             userId: req.user.id})
    //         console.log(`Blog post ${req.params.id} has been updated!`)
    //         res.redirect('/blogpost')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deleteMood: async (req, res)=>{
        try{
            await Mood.findOneAndDelete({_id: req.body.postIdFromJSFile})
            console.log('Deleted Post')
            res.json('Deleted It')
            
        }catch(err){
            console.log(err)
        }
    }
}
