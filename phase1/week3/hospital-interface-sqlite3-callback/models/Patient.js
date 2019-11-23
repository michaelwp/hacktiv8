'use strict';

const db = require('./db');

class Patient {
    static create(name, diagnoses, idEmployee, cb) {
        const sqlPatient = "INSERT INTO patients (name, id_employee) VALUES (?, ?)";
        db.run(sqlPatient, [name, idEmployee], function (err) {
            if (err) {
                cb(err);
            } else {
                let idPatient = this.lastID;
                const sqlDiagnoses = "INSERT INTO diagnoses (name) VALUES (?)";
                diagnoses.forEach((item) => {
                    db.run(sqlDiagnoses, [item], function (err) {
                        if (err) {
                            cb(err);
                        } else {
                            let idDiagnose = this.lastID;
                            const sqlPatientDiagnoses = "INSERT INTO patient_diagnoses" +
                                "(id_patient, id_diagnose) VALUES (?, ?)";
                            db.run(sqlPatientDiagnoses, [idPatient, idDiagnose], function (err) {
                                if (err) {
                                    cb(err);
                                } else {
                                    cb(null, "Patient data added successfully");
                                }
                            })
                        }
                    })
                });
            }
        })
    }
}

module.exports = Patient;