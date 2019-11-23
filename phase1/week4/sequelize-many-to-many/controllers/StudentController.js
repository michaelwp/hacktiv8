const studentModel = require('../models').students;
const subjectModel = require('../models').subjects;
const studentSubjectModel = require('../models').Studentsubject;

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

    static findOne(req, res) {
        const data = {};
        studentModel.findOne({
            where: {id: req.params.id}
        }).then(dataStudent => {
            data.student = dataStudent;
            return subjectModel.findAll()
        }).then(dataSubject => {
            data.subject = dataSubject;
            res.render('data_student_subject', {data});
        }).catch(err => {
            res.send(err);
        })
    }

    static inputSubject(req, res) {
        studentSubjectModel.create({
            studentId: req.body.studentId,
            subjectId: req.body.subjectId
        }).then(result => {
            console.log(req.body);
            res.redirect('/students');
            console.log("Data successfully insert")
        }).catch(err => {
            res.send(err);
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