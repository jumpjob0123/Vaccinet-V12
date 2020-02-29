const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImageSchema = new Schema({
  imageName: {
    type: String,
    default: "none",
    required: true
  },
  imageData: {
    type: String,
    required: true
  }
}, {timestamps: false})

var Image = mongoose.model('image',ImageSchema)

module.exports = Image