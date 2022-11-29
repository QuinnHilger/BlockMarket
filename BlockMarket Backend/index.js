const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const User = require("./User")
const BrickPosts = require("./BrickPosts")
require("dotenv").config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_DB_URI,{
    userNewParser: true,
    userCreateIndex: true,
    userUnifiedTopology: true,

})

mongoose.connection.once("open", ()=> {
    console.log("Connected to MongoDB!")
})

app.post("/createUser", async (req,res) =>{
    const {email, password} = req.body

    if(!email || !password)
    return res.status(400).json("email or password not in body")

    const cur = await User.findOne({ email: email})
    if (cur) return res.status(200).json("email already in use")

    const newUser = new User ({
        email: email,
        password: password,
    })

    newUser.save().catch((err) => res.status(400).json(err))

    console.log('New block brickster in the market! Welcome ${newUser}')
    return res.status(200).json({newUser})



})



    

