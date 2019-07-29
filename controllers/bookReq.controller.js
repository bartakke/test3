const Book = require('../models/book.model');
// const Book = BookModel.Books;
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
class BookReqCtrl
{
    verifyToken(req, res, next) {
        let token12 = req.header('Authorization');
            // console.log("Token: "+token12);
        if(!req.headers.authorization) {
          return res.status(401).send('Unauthorized request')
        }
        // let token = req.headers.authorization.split(' ')[1]
        // if(token === 'null') {
        //   return res.status(401).send('Unauthorized request')    
        // }
        let payload = jwt.verify(token12, 'fbfgb');
        if(!payload) {
          return res.status(401).send('Unauthorized request')    
        }
        req.userId = payload.subject
        // console.log("token verify");
        next()
      }

    bookreq1(req,res)
    {   
        // const token = req.header('Authorization');
        // var decoded = jwt_decode(token);
        // console.log(decoded);

        // if(!token){
        //     res.status(403).send("to acces the resouce you must be login");
        //     res.end();
        //     return;
        // }
        // jwt.verify(token,"fbfgb",function(err,student){
        // console.log(student);
        //     if(err){
        //     student.status(403).send("not authorize");
        //     student.end();
        //     return;
        //     }

            // console.log("bookreq");

            var bookId = req.body.bookId;
            var studId = req.body.studId;

            console.log(bookId);
            Book.findById(req.params.id,(err,data)=>{
                if(err)
                {
                    res.sendStatus(404);
                }
                res.send(JSON.stringify(data));

            });
        //})
       
    }
}    

module.exports = BookReqCtrl;