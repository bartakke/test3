const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
// const router = express.Router();

const BookCtrl = require('../controllers/book.controller');
const Book = require('../models/book.model');

const book = new BookCtrl();
var path = require('path')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
    //   cb(null, new Date().toISOString() + file.originalname);
    cb(null, Date.now() + file.originalname);
    }
});


const upload = multer({storage: storage, limits: {
    fileSize: 1024 * 1024 * 5
}});



router.post('/create',  upload.single('bookCover'), (req, res, next) =>{
      // bookCover = req.file.path;
    // console.log();
    // console.log(bookCover);

        const book1 = new Book({
            _id : new mongoose.Types.ObjectId(),
            bookName: req.body.bookName,
            authorName: req.body.authorName,
            pubName: req.body.pubName,
            pubYear: req.body.pubYear,
            description: req.body.description,
            noOfBook: req.body.noOfBook,
            price: req.body.price,
            category: req.body.category,
            bookCover : req.file.path,
        });

        console.log(book1);
    // let  s1 = new Book(req.body);
    book1.save((err,book)=>{
        if(err) res.status(400).send(JSON.stringify(err));
        res.status(200).send(JSON.stringify(book));
    })
})

    


router.get('/', book.getBook);

router.get('/:id', book.getBookById);

// router.get('/:id', book.bookreq);

router.delete('/:id', book.deleteBook);

router.put('/:id', book.updateBook);

module.exports = router;