const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vac = new Schema(
     {
         Vac_ID: { type: String, required: true },
         Disease_Name: { type: String, required: true },
         Vaccine_Name: { type: String, required: false },
         Number_of_Dose: { type: Number, required: false },
         Stimulant: { type: String, required: false },
         Target_Group: { type: String, required: false },
         Note: { type: String, required: false }
     }, {
          versionKey: false // You should be aware of the outcome after set to false
      }, { collection: 'vaccine' }
 )

var collectionname = 'vaccine'

var tmp= mongoose.model('vaccine', Vac,collectionname)

module.exports = tmp
