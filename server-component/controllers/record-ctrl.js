//import Cookies from 'js-cookie';
const Record = require('../models/record-model')
const util = require('util')

createRecord = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({

            success: false,
            error: 'You must provide a record',
        })
    }

    const record = new Record(body)

    if (!record) {
        return res.status(400).json({ success: false, error: err })
    }


    record
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: record._id,
                message: 'record created!',
            })
        })
        .catch(error => {  console.log(error)
            return res.status(400).json({
                error,
                message: 'record not created!',
            })
        })
}





getRecordById = async (req, res) => {
    await Record.findOne({ _id: req.params.id }, (err, record) => {
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
}

getRecordByName = async (req, res) => {
    await Record.findOne({ PatName: req.params.firstname+" "+req.params.lastname }, (err, record) => {
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
}

getRecords = async (req, res) => {
//console.log(util.inspect(req, {showHidden: false, depth: null}))

///console.log(JSON.stringify(req.body, null, 4));
   // console.log("Lemme"+req.params)

   try{
    const result = await Record.find({username : req.body.params.username});
   res.status(200).json({success:true,data:result})
       }catch(e){
           res.status(400).json({ success: false, error: e.message })
       }

   /* await Record.find({username : req.body.params.username}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))*/
}

module.exports = {
    createRecord,
    getRecords,
    getRecordById,
    getRecordByName
}