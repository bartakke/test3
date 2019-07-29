// const mongoose = require('mongoose');
require('./db');

const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String},
    password : {type:String}, 
    rollno: {type:Number,required:true,unique:true},
    college: {type:String},
    city: {type:String}
});

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;