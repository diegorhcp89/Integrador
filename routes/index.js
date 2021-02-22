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

router.get('/section',function(req,res,next){
  res.render('section')
})

router.get('/favorites',function(req,res,next){
  res.render('favorites')
})

/* coloquei em users.js */

router.get('/payment',function(req,res,next){
  res.render('payment')
})

router.get('/cart',function(req,res,next){
  res.render('cart')
})

router.get('/concluded',function(req,res,next){
  res.render('concluded')
})

module.exports = router;
