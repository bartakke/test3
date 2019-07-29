const mongoose =require('mongoose');

let bookReqSchema = new mongoose.Schema({
    bookId : {type: Number, unique:true},
    studId : {type: Number, unique:true} 
})


const Book= mongoose.model('Book',bookSchema);

module.exports = Book;