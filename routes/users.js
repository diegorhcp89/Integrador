var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController')


/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

router.get('/login', UserController.login);

router.get('/create', UserController.create);

router.post('/save', UserController.save);

module.exports = router;
