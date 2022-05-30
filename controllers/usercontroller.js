const {crusdOperations} = require('../models/usermodel');
function showError(err){
    if(err) console.log(err);
}
function index(req, res, next){
    res.render('index', {title: 'Express'});
}

function handlePost(request, response){
    const{name, course, year} = request.body;
    const addUser = new crusdOperations({
        name,
        course,
        year
    });
    addUser.save(function(err, newRecord){
        showError(err);
        response.json({
            successful: true,
            newRecord
        })
    });

    response.send("This is a post request");
}

function handlePut(request, response){
    response.send("This is a put request");
}

function handlePatch(request, response){
    response.send("This is a patch request");
}

function handleDelete(request, response){
    response.send("This is a delete request");
}
module.exports = {index, handlePost, handlePut, handlePatch, handleDelete};