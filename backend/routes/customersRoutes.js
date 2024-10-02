const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController');
const authController  = require('../controllers/authController')

router.route('/')
         .get(CustomerController.getAllCustomer)
         .post(authController.handleSignUp, CustomerController.postCustomer);

router.route('/:id')
         .get(CustomerController.getOneCustomer)
         .put(CustomerController.updateCustomer)
         .delete(CustomerController.deleteCustomer)

module.exports = router;