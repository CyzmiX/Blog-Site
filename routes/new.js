const express = require('express')
const router = express.Router() 
const DB = require('./../db')
const db = DB('./data/blogs.db')

router.get('/', (req, res) => {
    res.render('new')
    
})

router.post('/', (req, res) => {
    db.putData({
      title: req.body.title || 'NOT FOUND',
      desc: req.body.desc || 'NOT FOUND',
      article: req.body.article || 'NOT FOUND',
    })

    res.redirect('/')
})

module.exports = router
