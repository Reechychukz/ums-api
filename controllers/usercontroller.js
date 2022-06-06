// const {crudsOperations: crusdOperations} = require('../models/usermodel');
// function showError(err){
//     if(err) console.log(err);
// }
// function get(req, res, next){
//     crusdOperations.find({}, '', function(err, records){
//         showError(err);
//         res.json({
//             successful: true,
//             records
//         })
//     });
// }

// function handlePost(request, response){
//     const{name, course, year} = request.body;
//     const addUser = new crusdOperations({
//         name,
//         course,
//         year
//     });
//     addUser.save(function(err, newRecord){
//         showError(err);
//         response.json({
//             successful: true,
//             newRecord
//         })
//     });

//     response.send("This is a post request");
// }

//module.exports = {get, handlePost};