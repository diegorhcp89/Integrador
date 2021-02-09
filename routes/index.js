var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET products page. */
router.get('/products',function(req,res,next){
  res.render('products')
})

router.get('/login',function(req,res,next){
  res.render('login')
})

module.exports = router;
