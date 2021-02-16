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

/* GET cadastro page */

router.get('/cadastro', function(req, res, next){
  res.render('cadastro')
})

/* GET pagamentos page */

router.get('/pagamentos', function(req, res, next){
  res.render('pagamentos')
})


module.exports = router;
