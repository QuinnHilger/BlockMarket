const mongoose = require('mongoose')
const User = require("./User")
const BrickPosts = require("./BrickPosts")

mongoose.connect("mongodb://localhost/testdb", () => {
    console.log("connected")
}, e => console.error(e)
)





