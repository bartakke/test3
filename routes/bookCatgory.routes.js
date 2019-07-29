const express = require('express');

const router2 = express.Router();

const bookCategory = require('../controllers/bookCategory.controller');

const book2 = new bookCategory();


// router1.get('/:id' , book1. if(!token){
//     res.status(403).send("to acces the resouce you must be login");
//     res.end();
//     return;
// });

router2.post('/name', book2.addCtegory)

router2.get('/', book2.getCtegory)
// router.delete('/:id', book.deleteBook);


module.exports = router2;