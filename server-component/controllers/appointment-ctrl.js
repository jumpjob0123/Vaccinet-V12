const Appointment = require('../models/appointment-model');
//const bcrypt = require("bcryptjs");
const util = require('util')
createAppointment = (req, res) => {
    const appoint = new Appointment(req.body);

        console.log(req)

           if (!appoint) {
                   return res.status(400).json({ success: false, error: err })
               }

     console.log(appoint)

    appoint.save()
        .then(reg => {
            res.sendStatus(200);
        })
        .catch(err => {

            res.status(400).send("Failed to store to database");
        });
}

updateAppointment = async (req, res) => {

    const body = req.body
    console.log(util.inspect(req.body, {showHidden: false, depth: null}))

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Appointment.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Appointment not found!',
            })
        }
         //console.log(movie.Vac_ID)
         console.log(body)
       // movie.PatientName = body.PatientName
        movie.Vaccine_Name = body.Vaccine_Name
        movie.Date = body.Date
        movie.With = body.With

        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Appointment updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Appointment not updated!',
                })
            })
    })
}



/*getData = (req, res) => {
        Appointment.findOne({ PatientName: req.body.PatientName })
            .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
    }*/

/*getallData = async (req, res) => {
    await Appointment.find({}, (err, appt) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!appt.length) {
        if (!appt.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: appt })
    }).catch(err => console.log(err))
}*/


getallData = async (req, res) => {

console.log(util.inspect(req.body, {showHidden: false, depth: null}))

try{
        const result = await Appointment.find({PatientName : req.body.params.patname});

res.status(200).json({success:true,data:result})
    }catch(e){
        res.status(400).json({ success: false, error: e.message })
    }

   /* await Appointment.find({PatientName : req.body.params.patname}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user.length) {
            return res
                .status(404)
                .json({ success: false, error: `Appointment not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))*/
}

deleteAppointment = async (req, res) => {
    await Appointment.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Appointment not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}


getAppointmentById = async (req, res) => {
     await Appointment.findOne({ _id: req.params.id }, (err, movie) => {
         if (err) {
             return res.status(400).json({ success: false, error: err })
         }

         return res.status(200).json({ success: true, data: movie })
     }).catch(err => console.log(err))
 }

// Username validation Router
/*UsernameValidation = async (req, res) => {
        Registration.findOne({ user_name: req.body.user_name })
            .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
    }*/

module.exports = {
            createAppointment,
            updateAppointment,
            getAppointmentById,
         //   login,
         //   getData,
            getallData,
            deleteAppointment
         //   UsernameValidation
}