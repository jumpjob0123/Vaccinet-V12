const express = require('express')

//const Image = require('../models/image-model')
//const multer = require('multer')


const MovieCtrl = require('../controllers/movie-ctrl')
const recCtrl = require('../controllers/record-ctrl')
const userCtrl = require('../controllers/user-ctrl')
const apptCtrl = require('../controllers/appointment-ctrl')
const newsCtrl = require('../controllers/news-ctrl')
const qrCtrl = require('../controllers/qrcode-ctrl')
const memberCtrl = require('../controllers/member-ctrl')

const router = express.Router()


/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        // rejects storing a file
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.route("/uploadmulter")
    .post(upload.single('imageData'), (req, res, next) => {
        console.log(req.body);
        const newImage = new Image({
            imageName: req.body.imageName,
            imageData: req.file.path
        });

        newImage.save()
            .then((result) => {
                console.log(result);
                res.status(200).json({
                    success: true,
                    document: result
                });
            })
            .catch((err) => next(err));
    });*/

router.post('/createvaccine', MovieCtrl.createMovie)
router.put('/updatevac/:id', MovieCtrl.updateMovie)
router.delete('/vaccine/:id', MovieCtrl.deleteMovie)
router.get('/vaccine/:id', MovieCtrl.getMovieById)
router.get('/vaccines', MovieCtrl.getMovies)


router.post('/record', recCtrl.createRecord)
router.get('/record/:id', recCtrl.getRecordById)
router.get('/records/:name', recCtrl.getRecordByName)
router.post('/records', recCtrl.getRecords)


router.post('/register',userCtrl.createUser)
router.post('/validateUsername',userCtrl.UsernameValidation)
router.post('/login',userCtrl.login)

router.post('/addappointment',apptCtrl.createAppointment)
router.post('/appointment',apptCtrl.getallData)
router.put('/appointment/:id',apptCtrl.updateAppointment)
router.get('/appointmentid/:id', apptCtrl.getAppointmentById)
router.delete('/appt/:id', apptCtrl.deleteAppointment)

router.post('/addnews',newsCtrl.createNews)
router.get('/news',newsCtrl.getNews)

router.post('/addqrcode',qrCtrl.createQrcode)
router.get('/getqrcode',qrCtrl.getQrcode)

router.post('/addmember',memberCtrl.createMember)
router.get('/members',memberCtrl.getMembers)

module.exports = router
