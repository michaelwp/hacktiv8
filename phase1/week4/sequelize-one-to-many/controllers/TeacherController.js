const teacherModel = require('../models').teachers;
const subjectModel = require('../models').subjects;

class TeacherController {
    static viewAll(req, res) {
        teacherModel.findAll({
            include: subjectModel
        }).then(dataTeachers => {
            res.render('data_teachers', {dataTeachers})
        }).catch(err => {
            res.send(err);
        });
    }

    static input(req, res) {
        res.render('input_teachers')
    }

    static create(req, res) {
        teacherModel.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }).then(result => {
            res.redirect('/teachers');
            console.log("Data successfully insert")
        }).catch(err => {
            res.send(err.errors[0].message);
            console.log(err.errors[0].message)
        })
    }

    static remove(req, res) {
        teacherModel.destroy({
            where: {id: req.params.id}
        }).then(result => {
            res.redirect('/teachers');
        }).catch(err => {
            res.send(err);
        })
    }
}

module.exports = TeacherController;