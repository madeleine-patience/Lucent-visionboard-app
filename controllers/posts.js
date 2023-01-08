const cloudinary = require('../middleware/cloudinary')
const Post = require('../models/Post')
const path = require('path')
const Gratitude = require('../models/Gratitude')
const Manifestation = require('../models/Manifestation')
const AskTheUniverse = require('../models/AskTheUniverse')
const ComfortZone = require('../models/ComfortZone')
const Rejection = require('../models/Rejection')
const Stress = require('../models/Stress')
const Forgiveness = require('../models/Forgiveness')

const dailyActivity = require('../helpers/dailyActivity')
const totalLogOfActivity = require('../helpers/totalLogOfActivity')

module.exports = {
  getProfile: async (req, res) => {
    try {

      const posts = await Post.find({ user: req.user.id })
      const gratitudeLog = await Gratitude.find({ userId: req.user.id })
      const manifesationLog = await Manifestation.find({ userId: req.user.id })
      const letterLog = await AskTheUniverse.find({ userId: req.user.id })
      const rejectionLog = await Rejection.find({ userId: req.user.id })
      const comfortZoneLog = await ComfortZone.find({ userId: req.user.id })
      const stressLog = await Stress.find({ userId: req.user.id })
      const forgivenessLog = await Forgiveness.find({ userId: req.user.id })
      let lastEntry = null
      let hasGratitude = false

      // concatenated ID array //

      let activityArray = [
        dailyActivity.generateWeeklyActivity(posts),
        dailyActivity.generateWeeklyActivity(gratitudeLog),
        dailyActivity.generateWeeklyActivity(manifesationLog),
        dailyActivity.generateWeeklyActivity(letterLog),
        dailyActivity.generateWeeklyActivity(rejectionLog),
        dailyActivity.generateWeeklyActivity(comfortZoneLog),
        dailyActivity.generateWeeklyActivity(stressLog),
        // dailyActivity.generateWeeklyActivity(forgivenessLog),
      ]

      let totalActivityLog = totalLogOfActivity.totalWeeklyLog(activityArray)
      // let weeklyPost = dailyActivity.generateWeeklyActivity(posts)

      if (gratitudeLog.length > 0) {
        const lastEntryDate = gratitudeLog[
          gratitudeLog.length - 1
        ].date.toDateString()
        const currentDate = new Date().toDateString()
        lastEntry = gratitudeLog[gratitudeLog.length - 1]
        hasGratitude = lastEntryDate === currentDate
      }

      // day of the week array //
      let sevenPreviousDays = []
      let isoFormattedDates=[]
      for (let i = 0; i < 7; i++) {
        
        dateOnly = false
        let d = new Date()
        d.setDate(d.getDate() - i)
        isoFormattedDates.push(new Date(d).toISOString().split('T')[0])
      
        sevenPreviousDays.push(
          dateOnly
            ? new Date(d).toString().slice(0, 13)
            : d.toString().slice(0, 10),
        )
      }
      sevenPreviousDays = sevenPreviousDays.reverse()
      isoFormattedDates= isoFormattedDates.reverse()
      res.render('profile.ejs', {
        posts: posts,
        user: req.user,
        gratitudeLog: gratitudeLog,
        hasGratitude: hasGratitude,
        lastEntry: lastEntry,
        weeklyActivity: dailyActivity.generateWeeklyActivity(gratitudeLog),
        weeklyPostActivity: dailyActivity.generateWeeklyActivity(posts),
        totalActivityLog: totalActivityLog,
        sevenPreviousDays: sevenPreviousDays,
        isoFormattedDates: isoFormattedDates,
      })
    } catch (err) {
      console.log(err)
    }
  },


  getSummary: async (req, res) => {
    try {
      // const post = await Post.findById(req.params.id);
      let day=req.params.date
      let nextDay=new Date(req.params.date)
      nextDay.setDate(nextDay.getDate() + 1) 
      const posts = await Post.find({ user:  req.user.id, date: {  $gte:day, $lte:nextDay } }) 
      const gratitudeLog = await Gratitude.find({ user: req.params.id, date: {  $gte:day, $lte:nextDay } })
      const manifestation = await Manifestation.find({ userId: req.user.id, date: {  $gte:day, $lte:nextDay } })
      const letter = await AskTheUniverse.find({ userId: req.user.id ,  date: {  $gte:day, $lte:nextDay }})
      const rejectionLog = await Rejection.find({ userId: req.user.id, date: {  $gte:day, $lte:nextDay }})

      // const gratitudeLog = await Gratitude.find({ userId: req.user.id });`
      res.render('summary.ejs',{
        date:req.params.date,
        posts:posts,
        gratitudeLog:gratitudeLog,
        manifestation:manifestation,
        letterLog:letter,
        rejectionLog:rejectionLog
        
      })
    } catch (err) {
      console.log(err)
    }
  },




  getFeed: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id })
      res.render('visionBoard.ejs', { posts: posts })
    } catch (err) {
      console.log(err)
    }
  },

  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      res.render('post.ejs', { post: post, user: req.user })
    } catch (err) {
      console.log(err)
    }
  },

  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path)

      let newPost = await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
        userId: req.user.id,
        date: new Date(),

      })
      res.redirect(`/post/addDescription/${newPost._id}`)
    } catch (err) {
      console.log(err)
    }
  },

  editPost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          title: req.body.title,
          caption: req.body.caption,
        },
      )
      console.log(`post ${caption} has been updated!`)

      res.redirect('/visionBoard')
    } catch (err) {
      console.log(err)
      console.log(req)
      try {
        await Post.findOneAndUpdate(
          { _id: req.params.id },
          {
            title: req.body.title,
            caption: req.body.caption,
          },
        )
        console.log(`post ${req.params.id} has been updated!`)
        res.redirect('/visionBoard')
      } catch (err) {
        console.log(err)
      }
    }
  },

  createImageDescription: async (req, res) => {
    try {
      await Gratitude.create({
        gratitudeItem1: req.body.item,
        userId: req.user.id,
        date: new Date(),
      })
      console.log('Your gratitude for today has been logged!')
      res.redirect('/visionBoard')
      console.log(req.body.item)
      console.log(req.user.id)
    } catch (err) {
      console.log(err)
    }
  },

  getEditDescription: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      res.render('addDescription.ejs', { post: post, user: req.user })
    } catch (err) {
      console.log(err)
    }
  },

  getCreatePostPage: async (req, res) => {
    try {
      res.render('createPost.ejs', { user: req.user })
    } catch (err) {
      console.log(err)
    }
  },

  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        },
      )
      console.log('Likes +1')
      res.redirect(`/post/${req.params.id}`)
    } catch (err) {
      console.log(err)
    }
  },

  deletePost: async (req, res) => {
    try {
      let post = await Post.findById({ _id: req.params.id })

      await cloudinary.uploader.destroy(post.cloudinaryId)
      await Post.remove({ _id: req.params.id })
      console.log('Deleted Post')
      res.redirect('/visionBoard')
    } catch (err) {
      res.redirect('/visionBoard')
    }
  },

  getAffirmationsPage: async (req, res) => {
    try {
      res.render('affirmations.ejs')
    } catch (err) {
      res.redirect('/affirmations')
    }
  },

  getAffirmation:
    ('/api/',
    (request, response) => {
      const affirmationCategory = request.params.affirmationCategory
      if (affirmations[affirmationCategory]) {
        response.json(affirmations[affirmationCategory])
      }
    }),
}
