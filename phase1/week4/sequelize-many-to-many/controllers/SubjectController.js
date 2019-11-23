const teacherModel = require('../models').teachers;
const subjectModel = require('../models').subjects;
const studentModel = require('../models').students;
const studentSubjectModel = require('../models').Studentsubject;

class SubjectController {
    static viewAll(req, res) {
        subjectModel.findAll({
            include: teacherModel
        }).then(dataSubjects => {
            console.log(dataSubjects)
            res.render('data_subjects', {dataSubjects})
        }).catch(err => {
            res.send(err);
            console.log(err)
        });
    }

    static input(req, res) {
        res.render('input_subjects')
    }

    static create(req, res) {
        subjectModel.create({
            subject_name: req.body.subject_name,
            teacherId: req.body.teacherId
        }).then(result => {
            res.redirect('/subjects');
            console.log("Data successfully insert")
        }).catch(err => {
            res.send(err);
            console.log(err)
        })
    }

    static enrolled(req, res) {
        subjectModel.findOne({
            where: {id: req.params.id},
            include: [studentModel]
        }).then(dataSubjects => {
            res.render('data_subject_enrolled', {dataSubjects})
        }).catch(err => {
            res.send(err);
            console.log(err)
        })
    }

    static giveScore(req, res) {
        res.render('give_score');
    }

    static giveScoreUpdate(req, res) {
        studentSubjectModel.update({
            score: req.body.score
        }, {
            where: {id: req.params.id}
        }).then(result => {
            res.redirect('/subjects')
        }).catch(err => {
            res.send(err);
            console.log(err)
        })
    }

    static remove(req, res) {
        subjectModel.destroy({
            where: {id: req.params.id}
        }).then(result => {
            res.redirect('/subjects');
        }).catch(err => {
            res.send(err);
        })
    }
}

module.exports = SubjectController;