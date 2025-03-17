const express = require('express')
const arrayProducts = require('../data/products')
const router = express.Router()

router.get('/', (req, res)=>{
    res.json(arrayProducts)
})
router.get('/:id', (req, res, next)=>{
    const product = arrayProducts.find( p=> p.id === parseInt(req.params.id))
    if (!product) {
        return next({type: 'notFound', message: 'Produto não encontrado'})
    }
    res.json(product)
})


router.get('/test-error', (req, res, next)=>{
    next(new Error('Esse é um erro de teste'))
})

module.exports = router