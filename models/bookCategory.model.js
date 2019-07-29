const mongoose = require('mongoose');

let BookCate = new mongoose.Schema({
    // bookId : {type: Number, unique:true},
    bookCategoryName : {type : String , required : true,},
   
})


const BookCategory= mongoose.model('BookCategory',BookCate);

module.exports = BookCategory;