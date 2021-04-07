var express = require('express');
var router = express.Router();
const FavoriteController = require('../controllers/FavoriteController')

router.get('/index/:id', FavoriteController.index);

module.exports = router