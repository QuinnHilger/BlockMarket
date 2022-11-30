import express from 'express';
import mongoose from 'mongoose'; 
require("dotenv").config(); 

const app = express();
mongoose.connect(
    process.env.MONGODB_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    email: String,
    required: true,
    password: String,
    required: true,
    name: String,
    required: true,
    address: String,
    required: true,
    phoneNumber: String,
    required: true
});

const postSchema = new mongoose.Schema({
    title: "",
    required: true,
    price: "",
    required: true,
    description: "", 
    required: true,
    time: "",
    required: true,
    theme: "",
    required: true,
    numPieces: "",
    required: true,
    condition: "",
    required: true,
    setNum: "",
    required: true,
    pictures: [],
    required: true
});

const User = mongoose.model('user', userSchema);
const Post = mongoose.model('user', postSchema);
export { User, app, Post };

/*
const port = 3000;
log.save().then(() => console.log("One entry added"), (err) => console.log(err));

app.listen(port, () => console.log("Server listening to port 3000"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/