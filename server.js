const express = require('express')
const app = express()
const ejs = require('ejs')
const DB = require('./db')
const db = DB('./data/blogs.db')

app.use(express.urlencoded({ extended: false }))

const articlesRouter = require('./routes/articles')
const newRouter = require('./routes/new')

app.set('view engine', 'ejs')

app.use('/articles', articlesRouter)
app.use('/new', newRouter)
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('index', { 
        articles: db.getData()
    })
})

app.post('/', (req, res) => {
    db.clear()
    res.render('index', { 
        articles: db.getData(),
        fn: () => alert('ARTICLES DELETED!!')
    })
})

app.listen(3000, () => console.log('Serving in port 300'))
