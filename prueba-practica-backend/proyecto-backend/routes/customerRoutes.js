const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Rutas relacionadas con los clientes
router.get('/customers', customerController.getAllCustomers);
router.post('/customers', customerController.createCustomer);
router.get('/customers/:id', customerController.getCustomerById);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
