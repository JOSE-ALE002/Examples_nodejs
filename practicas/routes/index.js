const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// ROUTES
router.get('/', controller.index);

router.get('/products', controller.product);

router.post('/new_product', controller.newProduct);

module.exports = router;