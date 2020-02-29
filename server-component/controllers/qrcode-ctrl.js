//import Cookies from 'js-cookie';
const Qrcode = require('../models/qrcode-model')
const util = require('util')

createQrcode = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a record',
        })
    }

    const record = new Qrcode(body)

    if (!record) {
        return res.status(400).json({ success: false, error: err })
    }
        console.log(record)

    record
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: record._id,
                message: 'qr created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'qr not created!',
            })
        })
}





/*getRecordById = async (req, res) => {
    await Qrcode.findOne({ _id: req.params.id }, (err, record) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!record) {
            return res
                .status(404)
                .json({ success: false, error: `record not found` })
        }
        return res.status(200).json({ success: true, data: record })
    }).catch(err => console.log(err))
}*/

getQrcode = async (req, res) => {
console.log(util.inspect(req, {showHidden: false, depth: null}))

///console.log(JSON.stringify(req.body, null, 4));
   // console.log("Lemme"+req.params)
    await Qrcode.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}

module.exports = {
    createQrcode,
   getQrcode,
   // getRecordById,
}