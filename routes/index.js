var express = require('express');
var router = express.Router();
const indexcontroller = require('../controllers/indexcontroller');

/* GET home page. */
router.get('/', indexcontroller);
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
