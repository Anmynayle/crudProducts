const router = require('express').Router()

const productsServices = require('./products.services')

router.get('/', productsServices.getAllProducts)
router.post('/', productsServices.postProducts)

router.get('/:id', productsServices.getProductsByid)
// router.delete('/products/:id')
// router.patch('/products/:id')
module.exports = router