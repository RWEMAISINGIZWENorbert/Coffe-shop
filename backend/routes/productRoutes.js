const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.getAllProducts)
        .post('/', ProductController.createProducts)

router.get('/:id', ProductController.getOneProducts)
         .put('/:id',ProductController.updateProducts)
         .delete('/:id', ProductController.deleteProducts)

module.exports = router