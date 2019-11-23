const express = require('express');
const routes = express.Router();
const subjectController = require('../controllers/SubjectController');

routes.use(express.urlencoded({extended: true}));

routes.get('/', subjectController.viewAll);
routes.get('/add', subjectController.input);
routes.post('/add', subjectController.create);
routes.get('/delete/:id', subjectController.remove);
routes.get('/:id/enrolled-students', subjectController.enrolled);
routes.get('/:id/give-score', subjectController.giveScore);
routes.post('/:id/give-score', subjectController.giveScoreUpdate);

module.exports = routes;