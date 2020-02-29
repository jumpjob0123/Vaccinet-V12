const express = require('express')

const recCtrl = require('../controllers/record-ctrl')

const router = express.Router()

router.post('/record', recCtrl.createRecord)

router.get('/record/:id', recCtrl.getRecordById)
router.get('/records', recCtrl.getMovies)

module.exports = router