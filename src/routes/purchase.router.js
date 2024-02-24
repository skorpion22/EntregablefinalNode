const { getAll } = require('../controllers/purchase.controllers');
const express = require('express');

const routerPurchase = express.Router();

routerPurchase.route('/')
    .get(getAll)

module.exports = routerPurchase;