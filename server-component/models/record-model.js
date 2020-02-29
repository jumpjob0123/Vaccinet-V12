const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Booklet = new Schema(
     {
       //  PatID: { type: String, required: true },
         PatName: { type: String, required: true },
      //   VacID: { type: String, required: true },
         VacName: { type: String, required: true },
         VacCount: { type: Number, required: false },
         DiseaseName: { type: String, require: false},
         time: { type: [String], required: false },
         files64: { type: String, required: false },
         username: { type: String, required: true }
     },{ timestamps: true,versionKey: false },
 )

// const Movie = new Schema(
//     {
//         name: { type: String, required: true },
//         time: { type: String, required: true },
//         rating: { type: String, required: false },
//     },
//     { timestamps: true }
// )
var collectionname = 'booklet'
var book= mongoose.model('booklet', Booklet,collectionname)
module.exports = book
