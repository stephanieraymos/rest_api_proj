const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
// posts.use(bodyParser.json());

//posts model
const Posts = require('../../models/Posts');

// Routes GET api/posts
//Description: GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!posts) throw Error('No Items');
    res.status(200).json(posts);
  }
  catch (err) {
    res.status(400).json({ msg: err })
  }
})

//Routes POST api/posts
//Description: create a post
router.post('/', async (req, res) => {
  const newPost = new Posts(req.body);
  console.log(req.body);

  try {
    const post = await newPost.save();
    if (!post) throw Error('Something went wrong while saving the post');

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err })

  }
})

// Routes DELETE api/posts/:id
//Description: DELETE post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id) //getting post id from parameters and deleting that specific post
    if (!post) throw Error('No post found');
    res.status(200).json({ success: true })
  }
  catch (err) {
    res.status(400).json({ msg: err })
  }
})

// Routes PATCH api/posts/:id
//Description: Update post
router.patch('/:id', async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body); //getting post id from parameters and updating that specific post
    if (!post) throw Error('Something went wrong while updating the post');
    res.status(200).json({ success: true })
  }
  catch (err) {
    res.status(400).json({ msg: err })
  }
})

module.exports = router;