const mongoose = require("mongoose");
const { Schema } = mongoose;

const post = new Schema({
    title: {
      type: String,
      required: [true, 'Set title'],
    },
    date: {
        type: Object,
        day:{type: String},
        month:{type: String},
        year:{type: String}
    },
    photo_position: {
        type: String,
      },
    photo: {
          type: String,
        },
    text1: {
        type: String,
      },
    text2: {
        type: String,
      },
    text3: {
        type: String,
      },
    favorite: {
      type: Boolean,
      default: false,
    },
  })
const Post = mongoose.model('post', post, "posts")

  module.exports = Post;