var express = require('express');
var router = express.Router();

const promotions = require('../data/promotions')
const most = require('../data/most')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{promotions: promotions, most:most, user: req.session.user});
});

/* GET products page. */
router.get('/products',function(req,res,next){
  res.render('products',{user: req.session.user})
})

router.get('/section',function(req,res,next){
  res.render('section',{user: req.session.user})
})

// router.get('/favorites',function(req,res,next){
  // res.render('favorites')
// })

/* coloquei em users.js */

router.get('/payment',function(req,res,next){
  res.render('payment',{user: req.session.user})
})

router.get('/cart',function(req,res,next){
  res.render('cart',{user: req.session.user})
})

router.get('/concluded',function(req,res,next){
  res.render('concluded',{user: req.session.user})
})

module.exports = router;
