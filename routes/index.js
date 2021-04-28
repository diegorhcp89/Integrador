var express = require('express');
var router = express.Router();

const most = require('../data/most')

const {Theme} = require('../models');
const {Sale} = require('../models');
const {Book} = require('../models');


/* GET home page. */
router.get('/', async function(req, res, next) {
  let themes = await Theme.findAll();

  let sales = await Book.findAll({
    attributes: ['title','imgPath','description','price','id'],
    include:[
      {
        model: Sale,
        required: true,
        attributes: ['percent']
      }
    ]
  });

  //console.log(sales);


  res.render('index',{most:most, user: req.session.user, themes,sales});
});

/* GET products page. */
/* coloquei em products.js */

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
