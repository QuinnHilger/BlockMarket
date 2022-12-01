const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        city: String,
    },
    state: String,
    phone: {
        type: Number,
        min:1,
        required: true,

    },
    email: {
        type: String,
        minLength: 1,
        required: true, 
        lowercase: true,
    },

    password:{
        type: String,
        minLength: 8,
        required: true,
    },

    reviews:{
        type: [String],
        
    },

    posts:{ 
         type: [mongoose.Schema.Types.ObjectId],
         ref: "BrickPosts",

    }, 
    
    token: {
        type: String,
        required: false,
    },
    
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BrickPosts',
    
    }
    
    
    {
    
    timestamps: true,
    

})


userSchema.virtual("namedEmail").get(function () {
    return '${this.name} <${this.email}>'

})

module.exports = mongoose.model("User", userSchema)
