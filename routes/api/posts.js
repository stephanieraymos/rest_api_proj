const express = require('express');
const router = express.Router();
//posts model
const Posts = require('../../models/Posts');

//Routes POST api/posts
//Description: create a post
router.post('/', (req, res) => {
  res.send(`Let's create post!`);
})

module.exports = router;