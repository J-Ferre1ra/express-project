const express = require('express')
const arrayProducts = require('../data/products')
const router = express.Router()

router.get('/', (req, res)=>{
    res.json(arrayProducts)
})

module.exports = router