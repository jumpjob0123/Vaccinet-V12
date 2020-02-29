const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appt = new Schema(
     {
         PatientName: { type: String, required: true },
         Vaccine_Name: { type: String, required: true },
         Date: { type: Date, required: true },
         With: { type: String, required: false },

     }, {
          versionKey: false // You should be aware of the outcome after set to false
      }, { collection: 'Appointment' }
 )

var collectionname = 'Appointment'

var tmp= mongoose.model('Appointment', appt,collectionname)

module.exports = tmp
