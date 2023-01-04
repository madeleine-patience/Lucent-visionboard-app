const cloudinary = require('../middleware/cloudinary')
const Post = require('../models/Post')
const path = require('path')
const Gratitude = require('../models/Gratitude')

function generateWeeklyActivity(entryLog) {
  let week = [null, null, null, null, null, null, null]
  const currentDate = new Date()
  for (let i = entryLog.length - 1; i >= 0; i--) {
    const diffTime = Math.abs(currentDate - entryLog[i].date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays >= 7) {
      break
    }
    week[diffDays] = entryLog[i]._id
  }
  return week.reverse()
}

module.exports = {
  getProfile: async (req, res) => {
    try {
      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
      const posts = await Post.find({ user: req.user.id })
      const gratitudeLog = await Gratitude.find({ userId: req.user.id })
      let lastEntry = null
      let hasGratitude = false

      // concatenated ID array //
      let weeklyPost = generateWeeklyActivity(posts)
      let weeklyGratitude = generateWeeklyActivity(posts)
      let totalActivity = weeklyPost.concat(weeklyGratitude)

      if (gratitudeLog.length > 0) {
        const lastEntryDate = gratitudeLog[
          gratitudeLog.length - 1
        ].date.toDateString()
        const currentDate = new Date().toDateString()
        lastEntry = gratitudeLog[gratitudeLog.length - 1]
        hasGratitude = lastEntryDate === currentDate
      }
      console.log(lastEntry)

      res.render('profile.ejs', {
        posts: posts,
        user: req.user,
        gratitudeLog: gratitudeLog,
        hasGratitude: hasGratitude,
        lastEntry: lastEntry,
        daysOfWeek: daysOfWeek,
        weeklyActivity: generateWeeklyActivity(gratitudeLog),
        weeklyPostActivity: generateWeeklyActivity(posts),
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
    // console.log(req);
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          title: req.body.title,
          caption: req.body.caption,
        },
      )
      // console.log(`post ${req.params.id} has been updated!`);
      console.log(`post ${caption} has been updated!`)

      res.redirect('/visionBoard')
    } catch (err) {
      console.log(err)
      // Upload image to cloudinary

      console.log(req)
      //needs a FindOneAndUpdate call - changing the post title and caption will only update the 'post' object, won't write back to the db
      //see DevDays editBlogPost
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
      // Find post by id
      let post = await Post.findById({ _id: req.params.id })

      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId)
      // Delete post from db
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
