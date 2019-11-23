const studentModel = require('../models').students;

class TeacherController {
    static viewAll(req, res) {
        studentModel.findAll().then(dataStudents => {
            res.render('data_students', {dataStudents})
        }).catch(err => {
            res.send(err);
        });
    }

    static input(req, res) {
        res.render('input_students')
    }

    static create(req, res) {
        studentModel.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }).then(result => {
            res.redirect('/students');
            console.log("Data successfully insert")
        }).catch(err => {
            res.send(err.errors[0].message);
            console.log(err.errors[0].message)
        })
    }

    static remove(req, res) {
        studentModel.destroy({
            where: {id: req.params.id}
        }).then(result => {
            res.redirect('/students');
        }).catch(err => {
            res.send(err);
        })
    }
}

module.exports = TeacherController;