var express = require('express');
var router = express.Router();
const FavoriteController = require('../controllers/FavoriteController')

router.get('/index/:id', FavoriteController.index);

router.get('/create/:id', FavoriteController.create)

module.exports = router