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
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    picture: picture,

    review: {
        type: String,
        required: true,
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },

})

PostSchema.statics.findByTitle = function(title) {
    return this.where({ title: new RegExp(title, "i")})
}

PostSchema.statics.findByDescription = function(description) {
    return this.where({ description: new RegExp(description, "i")})
}

module.exports = mongoose.model("Post", PostSchema)