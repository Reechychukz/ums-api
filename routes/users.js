var express = require('express');
var router = express.Router();
const {
    get, 
    handlePost
} = require('../controllers/usercontroller');

const {crudsOperations: crusdOperations} = require('../models/usermodel')

/* GET home page. */
router.get('/',  get);

router.post('/', handlePost);

module.exports = router;
