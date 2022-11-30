const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
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
    picture: Picture,

    review: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
 
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },

})

PostSchema.statics.findByTitle = function(title) {
    return this.where({ title: new RegExp(title, "i")})
}

PostSchema.statics.findByPrice = function(price) {
    return this.where({ price: new RegExp(price, "i")})
}

PostSchema.statics.findByDescription = function(description) {
    return this.where({ description: new RegExp(description, "i")})
}

PostSchema.statics.findByTheme = function(theme) {
    return this.where({ theme: new RegExp(theme, "i")})
}

PostSchema.statics.findByPieces = function(pieces) {
    return this.where({ pieces: new RegExp(pieces, "i")}) //MAY NEED TO CHANGE THIS DEPENDING ON WHETHER WE WANT TO SEARCH BY MIN PIECES, MAX PIECES, OR EXACT PIECES(CURRENT IMPLEMENTATION)
}

PostSchema.statics.findByCondition = function(condition) {
    return this.where({ condition: new RegExp(condition, "i")}) //FOR THE IMPLEMENATION OF THIS SCHEMA, BEST JUST TO IGNORE THE PICTURE OF THE CONDITION CLASS, AND JUST PROCEED IN THE SAME MANNER AS THE OTHER SCHEMA
}

PostSchema.statics.findByReview = function(review) {
    return this.where({ review: new RegExp(review, "i")})
}

//DIDNT THINK WE NEEDED A SCHEMA FOR "CREATED AT, OPEN TO CREATING IT IF NEEDED HOWEVER"


module.exports = mongoose.model("Post", PostSchema)
