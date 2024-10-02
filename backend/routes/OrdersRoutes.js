const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');
const authController = require('../controllers/authController');

router.route('/')
        .post(orderController.createOrder)
        .get(orderController.getAllOrders)

 router.route('/:id')       
         .put(authController.handleLogin, orderController.updateOrder)
        .delete(orderController.deleteOrder);

module.exports = router;