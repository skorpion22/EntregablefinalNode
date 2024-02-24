const express = require('express');
const routerUser = require('./user.router');
const routerCategory = require('./category.router');
const routerProduct = require('./product.router');
const routerCart = require('./cart.router');
const verifyJWT = require('../utils/verifyJWT');
const routerPurchase = require('./purchase.router');
const router = express.Router();

//! colocar las rutas aqui

router.use('/users', routerUser)
router.use('/categories', routerCategory)
router.use('/products', routerProduct)
router.use('/cart', verifyJWT, routerCart)
router.use('/purchase', verifyJWT, routerPurchase)


module.exports = router;