const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const signupSchema =new Schema({
    username : String,
    email : String,
    password : String,
    confirmPassword : String,
    phoneNumber : Number
});
var signupdata = mongoose.model('signupdata',signupSchema);
module.exports = signupdata;