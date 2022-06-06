var express = require('express');
var router = express.Router();
const {
    get, 
    registerUser,
    loginUser
} = require('../controllers/auth');
const { check } = require('../auth-middlewares/checkIfLoggedIn');

//restricted route
router.get('/users', check, get);

router.post('/register', registerUser);

router.post('/login', loginUser);

//unrestricted get route
router.get('/general', function(req, res){
    res.send("Anyone can access this route");
});


module.exports = router;
