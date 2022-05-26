var express = require('express');
var router = express.Router();
const {
    index, 
    handlePost, 
    handlePut, 
    handlePatch, 
    handleDelete
} = require('../controllers/indexcontroller');

/* GET home page. */
router.get('/',  index);

router.post('/', handlePost);

router.put('/', handlePut);

router.patch('/', handlePatch);

router.delete('/', handleDelete);
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
