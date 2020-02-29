//import Cookies from 'js-cookie';
const News = require('../models/news-model')
const util = require('util')

createNews = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a news',
        })
    }

    const news = new News(body)

    if (!news) {
        return res.status(400).json({ success: false, error: err })
    }
        console.log(news)

    news
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: news._id,
                message: 'news created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'news not created!',
            })
        })
}





/*getRecordById = async (req, res) => {
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
}*/

getNews = async (req, res) => {
console.log(util.inspect(req, {showHidden: false, depth: null}))

///console.log(JSON.stringify(req.body, null, 4));
   // console.log("Lemme"+req.params)
    await News.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `News not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}

module.exports = {
    createNews,
    getNews
   /* createRecord,
    getRecords,
    getRecordById,*/
}