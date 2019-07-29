const Book = require('../models/book.model');
// const Book = BookModel.Books;
// const multer = require('multer');
// const upload = multer({dest :'/upload/'});

class BookCtrl
{
    // createBook(req,res)
    // {   

    //     // const id  = Book.count();
    //     console.log(req.file);
    //     let  s1 = new Book(req.body);
    //     s1.save((err,book)=>{
    //         if(err) res.status(400).send(JSON.stringify(err));
    //         res.status(200).send(JSON.stringify(book));
    //     });

    // }

    // const upload = multer({
    //     storage: storage,
    //     limits: {
    //       fileSize: 1024 * 1024 * 5
    //     },
    //     fileFilter: fileFilter
    //   });

    addCtegory(req,res){
        let  s1 = new Book(req.body);
        s1.save((err,book)=>{
            if(err) res.status(400).send(JSON.stringify(err));
            res.status(200).send(JSON.stringify(book));
        });
    }
    
    getBook(req,res)
    {
        Book.find((err,data)=>{
            if(err)
            {
                res.sendStatus(404);
            }
            res.send(JSON.stringify(data));
        })
    }
    
    getBookById(req,res)
    {
        // console.log("id is:"+req.params.id);
        Book.findById(req.params.id,(err,data)=>{
            if(err)
            {
                res.sendStatus(404);
            }
            res.send(JSON.stringify(data));
        });
    }

    deleteBook(req,res)
    {
        // console.log("id is:"+req.params.id);
        var bookId = req.params.id;
        
        Book.findOneAndDelete({_id:bookId},function(err,ter){

            if(err)
            return console.error(err);

             console.log(ter);
            // res.JSON("deleted..... ");
             res.send(JSON.stringify(ter));
        
         });
    }

    updateBook(req,res)
    {
        // console.log("id is:"+req.params.id);
        var bookId = req.params.id;
        var coll=JSON.stringify(req.body);
        
        // console.log("Roll "+roll1);
        console.log("body "+coll);
        Book.update({_id:bookId},req.body,function(err,ter){

            if(err)
            return console.error(err);

             console.log(ter);
            // res.JSON("deleted..... ");
             res.send(JSON.stringify(ter));
        
         });
    }
    // bookreq(req,res)
    // {
    //     console.log("bookreq");
    //     Book.findById(req.params.id,(err,data)=>{
    //         if(err)
    //         {
    //             res.sendStatus(404);
    //         }
    //         res.send(JSON.stringify(data));
    //     });
    // }
}    

module.exports = BookCtrl;