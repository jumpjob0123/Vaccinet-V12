const mongoose = require('mongoose')
const Schema = mongoose.Schema

const News = new Schema(
     {

         News_Header: { type: String, required: true },
         News_Sample: { type: String, required: false },
         News_Image: { type: String, required: false },
     }, {
          versionKey: false // You should be aware of the outcome after set to false
      }
 )

var collectionname = 'News'

var tmp= mongoose.model('news', News,collectionname)

module.exports = tmp
