const BookCategory = require('../models/bookCategory.model');
// const Book = BookModel.Books;

class bookCategory
{
   
    addCtegory(req,res){
        console.log(req)
        let  s1 = new BookCategory(req.body);
        s1.save((err,book)=>{
            if(err) res.status(400).send(JSON.stringify(err));
            res.status(200).send(JSON.stringify(book));
        });
    }

    getCtegory(req,res){
        console.log(req)
        // let  s1 = new BookCategory(req.body);
        BookCategory.find((err,data)=>{
            if(err)
            {
                res.sendStatus(404);
            }
            res.send(JSON.stringify(data));
        })
    }
}

module.exports = bookCategory;