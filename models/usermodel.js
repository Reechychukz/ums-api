//const { stringify } = require("jade/lib/utils");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const crudSchema = new Schema({
    name: String,
    course: String,
    year: String
});

const crudsOperations = mongoose.model('crude', crudSchema);

module.exports = {crudsOperations: crudsOperations}