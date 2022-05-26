function index(req, res, next){
    res.render('index', {title: 'Express'});
}

function handlePost(request, response){
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