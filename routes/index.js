var express = require('express');
var router = express.Router();

const promotions = require('../data/promotions')
const most = require('../data/most')

const {Theme} = require('../models');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let themes = await Theme.findAll();

  console.log(themes);

  res.render('index',{promotions: promotions, most:most, user: req.session.user, themes});
});

/* GET products page. */
router.get('/products',function(req,res,next){
  res.render('products',{user: req.session.user})
});

/* coloquei em users.js */

router.get('/payment',function(req,res,next){
  res.render('payment',{user: req.session.user})
});

router.get('/cart',function(req,res,next){
  res.render('cart',{user: req.session.user})
});

router.get('/concluded',function(req,res,next){
  res.render('concluded',{user: req.session.user})
});

module.exports = router;
