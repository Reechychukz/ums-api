const mongoose = require("mongoose");
const {Schema} = mongoose;

const user = new Schema({
    userName: String,
    email: String,
    password: String,
    course: String,
    year: String,
    role: String
});

const userSchema = mongoose.model('users', user);

module.exports = {userSchema};