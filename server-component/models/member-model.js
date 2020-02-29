const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Member = new Schema(
     {
          firstname: { type: String, required: true },
          lastname: { type: String, required: true},
          Note: { type: String, required: false},
          referID: { type: String, required: true}
     }, {
          versionKey: false // You should be aware of the outcome after set to false
      },{ timestamps: true}
 )

var collectionname = 'Family'

var tmp= mongoose.model('Family', Member,collectionname)

module.exports = tmp
