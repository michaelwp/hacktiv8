const express = require('express');
const routes = express.Router();
const studentController = require('../controllers/StudentController');

routes.use(express.urlencoded({extended: true}));

routes.get('/', studentController.viewAll);
routes.get('/add', studentController.input);
routes.post('/add', studentController.create);
routes.get('/delete/:id', studentController.remove);
routes.get('/:id/add-subject', studentController.findOne);
routes.post('/:id/add-subject', studentController.inputSubject);


module.exports = routes;