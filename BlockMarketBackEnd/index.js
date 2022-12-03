const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const User = require('./routes/user.route');
const Post = require('./routes/post.route');
const Cart = require('./routes/cart.route');

mongoose.connect(
  'mongodb://localhost/testdb',
  () => {
    console.log('connected');
  },
  (e) => console.error(e)
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/user', User);
app.use('/Post', Post);
app.use('/cart', Cart);

app.listen(3000, () => {
  console.log('Server Listening on port 3000');
});

module.exports = app;
