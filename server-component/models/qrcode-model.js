const mongoose = require('mongoose')
const Schema = mongoose.Schema

const qr = new Schema(
     {
         qrcode_ID: { type: String, required: true },
         Vaccine_name: { type: String, required: true },
         Disease_name: { type: String, required: true },
         qrcode_img: { type: String, required: false },
     }, {
          versionKey: false // You should be aware of the outcome after set to false
      }
 )

var collectionname = 'qrcode'

var tmp= mongoose.model('qrcode', qr,collectionname)

module.exports = tmp
