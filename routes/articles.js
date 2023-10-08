const express = require('express')
const router = express.Router() 

router.get('/', (req, res) => {
    res.send('Your in AAA')
})

module.exports = router
