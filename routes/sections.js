var express = require('express');
var router = express.Router();

const SectionController = require('../controllers/SectionController');

router.get('/produtos', SectionController.produtos); 

router.get('/themes/:id', SectionController.theme);

module.exports = router;