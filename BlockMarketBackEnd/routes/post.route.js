const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');
const User = require('../models/user.model');

router.post('/post', async function (req, res) {
  const {
    title,
    description,
    price,
    theme,
    pieces,
    condition,
    review,
    pictureUrl,
    token,
  } = req.body;
  console.log(req.body);
  try {
    const response = await Post.create({
      title,
      description,
      price,
      theme,
      pieces,
      condition,
      review,
      pictureUrl,
    });
    console.log('Post', Post);
    const updatedUser = await User.findOneAndUpdate(
      { token: token },
      { $push: { posts: response._id } },
      { new: true }
    );
    console.log('updatedUser', updatedUser);
    return res.status(201).json({ response, updatedUser });
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
});

router.get('/posts/:token', async function (req, res) {
  const { token } = req.params;
  try {
    const response = await User.findOne({ token }).populate('posts');
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
});

router.get('/posts', async function (req, res) {
  try {
    const response = await Post.find();
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
});

router.delete('/post/:id/:token', async function (req, res) {
  const id = req.params.id;
  const { token } = req.params.token;
  try {
    const response = await Post.findOneAndDelete({ _id: id });
    const response1 = await User.findOneAndUpdate(
      { token: token },
      { $pull: { posts: id } }
    );
    return res.status(204).json({ response, response1 });
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
});

router.get('/search/posts/:searchString', async function (req, res) {
  const searchString = req.params.searchString;
  try {
    const response = await Post.findOne({
      title: new RegExp(searchString, 'i'),
    });
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
});

router.get('/search/filters/posts/:searchString', async function (req, res) {
  const searchString = req.params.searchString;
  const { theme, condition, toNoOfPieces, fromNoOfPeices } = req.query;
  console.log(theme, condition, toNoOfPieces, fromNoOfPeices);
  try {
    const response = await Post.findOne({
      title: new RegExp(searchString, 'i'),
      theme: theme,
      condition: condition,
      pieces: { $gte: toNoOfPieces, $lte: fromNoOfPeices },
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ Error: error });
  }
});

module.exports = router;
