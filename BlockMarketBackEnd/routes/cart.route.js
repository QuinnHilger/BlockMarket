const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');
const User = require('../models/user.model');

router.post('/cart/:token', async function (req, res) {
  const { id } = req.body;
  const token = req.params.token;
  const updatedUser = await User.findOneAndUpdate(
    { token: token },
    { $push: { cart: id } },
    { new: true }
  );
  res.status(201).json({ updatedUser });
});

router.get('/cart/:token', async function (req, res) {
  const token = req.params.token;
  try {
    const response = await User.findOne({ token: token }).populate('cart');
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
});

router.delete('/cart/:id/:token', async function (req, res) {
  const id = req.params.id;
  const { token } = req.params.token;
  try {
    const response1 = await User.findOneAndUpdate(
      { token: token },
      { $pull: { cart: id } }
    );
    res.status(204).json({ response1 });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
});

module.exports = router;
