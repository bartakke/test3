const express = require('express');

const router1 = express.Router();

const BookReqCtrl = require('../controllers/bookReq.controller');

const book1 = new BookReqCtrl();


// router1.get('/:id' , book1. if(!token){
//     res.status(403).send("to acces the resouce you must be login");
//     res.end();
//     return;
// });

router1.get('/:id', book1.verifyToken, book1.bookreq1)

// router.delete('/:id', book.deleteBook);


module.exports = router1;