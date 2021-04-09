const express = require('express');
const {getProducts, getCategory, getFamilies} = require('../controllers/admin');
const router = express.Router();

// admin/products => GET
router.get('/products', getProducts);

router.get('/category', getCategory);

router.get('/families', getFamilies);

module.exports = router;