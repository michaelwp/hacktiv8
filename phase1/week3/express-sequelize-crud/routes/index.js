const routes = require('express').Router();
const modelTeachers = require('../models').teachers;
const modelSubjects = require('../models').subjects;

routes.get('/teachers', (req, res) => {
    modelTeachers.findAll().then(dataTeachers => {
        res.render('data_teachers', {dataTeachers})
    }).catch(err => {
        console.log(err);
    });
});

routes.get('/subjects', (req, res) => {
    modelSubjects.findAll().then(dataSubjects => {
        res.render('data_teachers', {dataSubjects})
    }).catch(err => {
        console.log(err);
    });
});

module.exports = routes;