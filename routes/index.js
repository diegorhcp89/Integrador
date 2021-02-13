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

/* coloquei em users.js */

module.exports = router;
