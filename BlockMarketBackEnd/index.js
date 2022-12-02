const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const port = 3001;
const app = express();
const User = require('./routes/user.route');
const Post = require('./routes/post.route');
const Cart = require('./routes/cart.route');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testdb', () => {
    console.log('connected');
  },
  (e) => console.error("db error: " + e)
);

//mongoose.connect('mongodb://localhost/testdb');
/*const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/user', User);
app.use('/Post', Post);
app.use('/cart', Cart);

app.listen(port, () => {
  console.log('Server Listening on port '+ port);
});

module.exports = app;
