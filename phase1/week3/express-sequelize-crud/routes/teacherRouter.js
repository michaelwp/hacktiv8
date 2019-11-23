const express = require('express');
const routes = express.Router();
const teacherController = require('../controllers/TeacherController');

routes.use(express.urlencoded({extended: true}));

routes.get('/', teacherController.viewAll);
routes.get('/add', teacherController.input);
routes.post('/add', teacherController.create);

module.exports = routes;