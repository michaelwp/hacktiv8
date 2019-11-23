const StudentModel = require('../models').Student;
const Sequelize = require('sequelize');

class StudentController {
    static createStudent(
        first_name, last_name,
        gender, birthday, email,
        phone, height
    ) {
        StudentModel.create({
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            birthday: new Date(birthday),
            email: email,
            phone: phone,
            height: height
        }).then(data => {
            console.log(data.dataValues);
        }).catch(err => {
            console.log(err.errors[0].message);
        })
    }

    static findAll() {
        StudentModel.findAll()
            .then((dataStudent) => {
                console.log(
                    dataStudent.map((data) => {
                        return (data.getFullName());
                    })
                )
            }).catch(err => {
            console.log(err);
            process.exit();
        });
    }

    static findOne(idStudent) {
        StudentModel.findOne({
            where: {id: idStudent}
        }).then((dataStudent) => {
            console.log(dataStudent.getFullName());
            process.exit();
        }).catch((err) => {
            console.log(err.ERROR);
            process.exit();
        });
    }

    static getHeight(height) {
        const Op = Sequelize.Op;
        let h = height || 0;
        StudentModel.findAll({
            where: {height: {[Op.gt]: h}}
        }).then((dataStudent) => {
            console.log(
                dataStudent.map((data) => {
                    return (data.getHeight());
                })
            )
        }).catch(err => {
            console.log(err.ERROR);
            process.exit();
        })
    }

    static getGender(gender) {
        StudentModel.findAll({
            where: {gender: gender}
        }).then(dataStudent => {
            console.log(
                dataStudent.map(student => {
                    return student.getFullName();
                })
            )
        })
    }
}

StudentController.findAll();
// StudentController.findOne(2);
// StudentController.getGender('female');
// StudentController.fullName();
// StudentController.getAge();
// StudentController.getHeight(150);
// StudentController.createStudent(
//     'Michael', 'Putong',
//     'male', '1983-05-31', 'email1234@gmail.com',
//     '087778313111', 160
// );