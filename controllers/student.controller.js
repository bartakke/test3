const Student = require('../models/student.model');
// const Book = require('../models/book.model');
const jwt = require('jsonwebtoken');
// const Book = BookModel.Books;
const _ = require('lodash');
const bcrypt = require('bcrypt');


class StudentCtrl
{
   
    registerStudent(req,res)
    {
        // const id = Book.count();
        // console.log(id);
        let studentObj = _.pick(req.body,['name','email','password','rollno','college','city']);

        bcrypt.hash(studentObj.password, 5 , function(err, ecrptPass){
            studentObj.password = ecrptPass;
            const s1 = new Student(studentObj);

            // let  s1 = new Student(req.body);
            // jwt.sign({id: stud._id}, "fbfgb", { expiresIn: '1h'}, function(err, token){   
            //     if(err) res.status(400).send(err);
            //     // console.log("in token");
            //     res.status(200).send({"token": token});

            s1.save((err,book)=>{
                console.log("student is inserted into database"); 
                if(err) res.status(400).send(JSON.stringify(err));
                res.status(200).send(JSON.stringify(book));
            });
        // });  
        });
    }

    //  verifyToken(req, res, next) {
    //     console.log(req.headers);
    //     let token = req.header('Authorization');
    //     console.log("Token: "+token);
        
    //     if(!req.headers.Authorization) {
    //       return res.status(401).send('Unauthorized request')

    //     }
    //     let token = req.headers.Authorization.split(' ')[1]
    //     if(!token) {
    //       return res.status(401).send('Unauthorized. You must login')    
    //     }
        

        
    //         jwt.verify(token, 'fbfgb',function(err,payload){
                
    //             console.log("Err: "+err);
                

    //     if(err) {
    //         return res.status(401).send('Unauthorized. invalid token');
    //       }
    //       req.userId = payload.subject
    //       console.log("granted");
    //       next();

          

    //         });
            
    //   }
      

     verifyToken(req, res, next) {
        let token12 = req.header('Authorization');
            console.log("Token: "+token12);
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
        console.log("token verify");
        next()
      }

    getStudents(req,res)
    {
        console.log("in student");
        Student.find((err,data)=>{
            if(err)
            {
                res.sendStatus(404);
            }
            res.send(JSON.stringify(data));
        })
    }
    
    authentication(req,res){
        
        // const {error} = validate(req.body);
    
        // if(error) {
        //    return  res.status(400).send(JSON.stringify(error.details[0].message));
        // }  
        Student.findOne({ email : req.body.email}, function(err,stud){
            if(err || stud == null)
            {   
                res.status(404).send("Invalid email");
                return;
            }
            // console.log("in findone");
            // console.log(req.body.password +" " + stud.password);
            bcrypt.compare(req.body.password, stud.password , function(err, result){
            if(err || result == false)
            {   
                res.status(404).send("Invalid passtdtdtyh");
                return;
            }
            // console. log("in bcrpy compare");

            var stud = Student.findOne({ email : req.body.email});
            jwt.sign({id: stud._id}, "fbfgb", { expiresIn: '1h'}, function(err, token){   
                if(err) res.status(400).send(err);
                // console.log("in token");
                res.status(200).send({"token": token});
                // console.log("out token");
            });
        })//
    
            // if(req.body.password != stud.password){
            //     res.status(404).send("invalid Password");
            // }   
        })
    }

    
}

module.exports = StudentCtrl;