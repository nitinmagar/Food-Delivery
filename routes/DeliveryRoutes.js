// routes/delivery.js

const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/DeliveryController');


router.post('/calculate-price', deliveryController.calculatePrice);

module.exports = router;
