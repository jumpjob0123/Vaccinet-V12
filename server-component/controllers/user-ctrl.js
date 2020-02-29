const Registration = require('../models/user-model');
const bcrypt = require("bcryptjs");

createUser = (req, res) => {
    const register = new Registration(req.body);

        console.log(req.body)

           if (!register) {
                   return res.status(400).json({ success: false, error: err })
               }

     console.log(register)

    register.save()
        .then(reg => {
            res.sendStatus(200);
        })
        .catch(err => {

            res.status(400).send("Failed to store to database");
        });
}

login = (req, res) => {
    Registration.findOne({ user_name: req.body.user_name })
        .then(user => {
            console.log("User from login", user)
            if (!user) res.sendStatus(204);
            else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
            }
        });
}

getData = (req, res) => {
        Registration.findOne({ user_name: req.body.user_name })
            .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
    }

getallData = async (req, res) => {
    await Registration.find({}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

// Username validation Router
UsernameValidation = async (req, res) => {
        Registration.findOne({ user_name: req.body.user_name })
            .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
    }

module.exports = {
            createUser,
            login,
            getData,
            getallData,
            UsernameValidation
}