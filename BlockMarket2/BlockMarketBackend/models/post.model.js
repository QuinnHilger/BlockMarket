const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
    max: 600,
  },

  theme: {
    type: String,
    required: true,
  },
  pieces: {
    type: Number,
    min: 1,
  },
  condition: {
    type: String,
    required: true,
  },
  review: {
    type: Number,
    required: true,
  },
  pictureUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Post', postSchema);
