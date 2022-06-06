const {userSchema} = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


function get(req, res, next){
    userSchema.find({}, '', function(err, records){
        //showError(err);
        res.json({
            successful: true,
            records
        })
    });
}

function registerUser(req, res){
    const{userName, email, password, course, year} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new userSchema({
        userName, email, password: hashedPassword, course, year, role: 'user'
    });

    newUser.save(function(err){
        if(err) console.log(err);

        res.send("User Created Successfully");

    })

}

async function loginUser(req, res){
    const{userName, password} = req.body;

    const user = await userSchema.findOne({userName}, `userName password`);
    const passwordsMatch = bcrypt.compareSync(password, user.password);
    if(!passwordsMatch){
        res.send("Username or password is correct");
    }
    else{
        jwt.sign({userName : user.userName, role: user.role}, process.env.jwtkey, function(err, token){
        res.send(token);
    });}
}


module.exports = {get, registerUser, loginUser}