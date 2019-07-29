const express = require('express');

const router = express.Router();

const studCtrl = require('../controllers/student.controller');

const stud = new studCtrl();

router.post('/create', stud.registerStudent);

router.post('/auth', stud.authentication);

router.get('/', stud.verifyToken , stud.getStudents);

// router.get('/:id', stud.getBookById);


module.exports = router;