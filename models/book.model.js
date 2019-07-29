const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
    // bookId : {type: Number, unique:true},
    bookName : {type : String , required : true,},
    authorName : {type : String , required : true,},
    pubName : {type : String , required : true,},
    pubYear : {type : Number , required : true,},
    description : {type : String , required : true,},
    noOfBook : {type : Number , required : true,},
    price : {type : Number , required : true,},
    category : {type :String , required : true,},
    bookCover: {type :String , required : true,}
})


const Book= mongoose.model('Book',bookSchema);

module.exports = Book;