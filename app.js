const express = require('express');
const bodyParser = require('body-parser');
const book = require('./routes/book.routes');
const student = require('./routes/student.routes');
const readReq = require('./routes/bookReq.routes');
const bookCategory = require('./routes/bookCatgory.routes')
require('./models/db');

const app = express();

app.use(bodyParser.json());


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     // res.header("Access-Control-Allow-Credentials" , "true");
//     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//     next();
//   });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Content-Type : undefined" 
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use('/uploads', express.static('uploads'));

  
app.use('/api/library',book);
app.use('/api/student',student);
app.use('/api/readReq',readReq);
app.use('/api/bookCategory',bookCategory);


let port = process.env.port || 8888;

app.listen(port, () => {
    console.log('server is up and runinng on port number' +port);
    
}) 