//Accesing mongoose package
const mongoose = require('mongoose');
//DB connection code
mongoose.connect('mongodb://localhost:27017/library');
//Schema definition
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
});
//Model creation
var BookData = mongoose.model('bookData',bookSchema);
//Exporting model
module.exports = BookData;