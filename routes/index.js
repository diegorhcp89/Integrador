var express = require('express');
var router = express.Router();

const promotions = require('../data/promotions')
const most = require('../data/most')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{promotions: promotions, most:most});
});

/* GET products page. */
router.get('/products',function(req,res,next){
  res.render('products')
})

/* coloquei em users.js */

module.exports = router;
