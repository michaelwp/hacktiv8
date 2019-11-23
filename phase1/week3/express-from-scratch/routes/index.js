const routes = require('express').Router();
const bodyParser = require('body-parser');
const path = require('path');

routes.use(bodyParser.urlencoded({
    extended: true
}));
routes.use(bodyParser.json());

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/views/index.html');
});

routes.get('/student', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/views/input_student.html');
});

routes.post('/student', (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let age = req.body.age;
    let birthday = req.body.birthday;
    let email = req.body.email;
    let phone = req.body.phone;

    res.send(req.body);
    console.log(req.body);
});

routes.get('/teachers', (req, res) => {
    res.send("Data teachers")
});

module.exports = routes;