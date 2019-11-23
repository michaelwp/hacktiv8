'use strict';

const express = require('express');
const app = express();
const routesTeacher = require('./routes/teacherRouter');
const routesSubject = require('./routes/subjectRouter');
const routesStudent = require('./routes/studentRouter');


app.use('/teachers', routesTeacher);
app.use('/subjects', routesSubject);
app.use('/students', routesStudent);

app.locals.scoreLetter = require('./helpers/scoreLetter');
app.locals.hashingPassword = require('./helpers/hashingPassword');

app.get('/', (req, res) => {
    res.redirect('/students');
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});