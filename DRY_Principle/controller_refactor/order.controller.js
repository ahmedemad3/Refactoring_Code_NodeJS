// orderController.js
const express = require('express');
const router = express.Router();
const Order = require('../model/order');
const OrderService = require('../service/order.service')
const CrudController = require('../controller_refactor/crud.controller');

const orderController = new CrudController(Order , OrderService);



router.post('/order', orderController.create);
router.get('/order/:id', orderController.read);
router.put('/order/:id', orderController.update);
router.delete('/order/:id', orderController.delete);

// get customerOrders

router.get('/orders/:customerId', (req, res) => {
    const customerId = req.params.customerId;
  
    // Fetch order from the database
    // ...
    res.status(200).json(order);
  });

module.exports = router;