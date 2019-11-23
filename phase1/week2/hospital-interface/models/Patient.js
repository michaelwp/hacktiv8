'use strict';

const file = './patient.json';
const fileEmployee = './employee.json';
const FileManagement = require('./FileManagement');
const validation = require('./validation');

class Patient {
    static addPatient(name, disease, cb) {
        FileManagement.readFile(file, (err, data) => {
            if (err) {
                cb("save data failed !!!", null);
            } else {
                // check if all mandatory field are filled
                const isEmptyField = validation.isEmpty(
                    ['name', 'disease'],
                    [name, disease]
                );

                if (isEmptyField[0]) {
                    cb(isEmptyField[1]);
                    return;
                }

                FileManagement.readFile(fileEmployee, (err, dataEmployee) => {
                    if (err) {
                        cb(err);
                    } else {
                        // check is user logged in exist
                        const isLoggedInExist = dataEmployee.find((user) => {
                            return user.loggedIn;
                        });

                        if (isLoggedInExist) {
                            if (isLoggedInExist.role === 'dokter') {

                                let id = 1;

                                if (data.length > 0) {
                                    id = data[data.length - 1].id + 1;
                                }

                                data.push(
                                    {
                                        id: id,
                                        name: name,
                                        disease: disease,
                                    }
                                );

                                FileManagement.writeFile(file, data, (err, data) => {
                                    if (err) {
                                        cb(`save data failed !!!`)
                                    } else {
                                        cb(null, `data patient successfully added. Total employee : ${data.length}`);
                                    }
                                });
                            } else {
                                cb(null, "user logged in doesn't have authorized for adding patient data" )
                            }
                        } else {
                            cb(null, 'no user logged in !!!');
                        }

                    }
                });
            }
        });
    }
}

module.exports = Patient;