const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb", () => {
    console.log("connected")
}, e => console.error(e)
)





