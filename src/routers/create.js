const express = require('express');
const router = express.Router();
const createController = require('../controllers/createController')

router.get('/create', createController.addProduct);

module.exports = router;