const { request } = require("express");

function check(req, res, next){
    // console.log(req.headers);
    // return;

    if(req.headers.authorization){
        console.log(req.headers.authorization);
        next()
    }
    else{
        res.send("You are not authorized")
    }

}

module.exports = {check};