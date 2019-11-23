'use strict';

const file = './employee.json';
const FileManagement = require('./FileManagement');
const validation = require('./validation');

class Employee {
    static register(userName, password, role, cb) {
        FileManagement.readFile(file, (err, data) => {
            if (err) {
                cb("save data failed !!!", null);
            } else {
                // check if all mandatory field are filled
                const isEmptyField = validation.isEmpty(
                    ['userName', 'password', 'role'],
                    [userName, password, role]
                );

                if (isEmptyField[0]) {
                    cb(isEmptyField[1]);
                    return;
                }

                // default id
                let id = 1;

                // check if user are already registered
                if (data.length > 0) {
                    id = data[data.length - 1].id + 1;

                    const isUserExist = validation.isRegistered(
                        'username',
                        userName,
                        data
                    );

                    if (isUserExist[0]) {
                        cb(isUserExist[1]);
                        return;
                    }
                }

                data.push(
                    {
                        id: id,
                        username: userName,
                        password: password,
                        role: role,
                        loggedIn: false
                    }
                );

                FileManagement.writeFile(file, data, (err, data) => {
                    if (err) {
                        cb(`save data failed !!!`)
                    } else {
                        const dataWrite = JSON.stringify(data[data.length - 1], null, 4);
                        cb(null, `save data success ${dataWrite}. Total employee : ${data.length}`);
                    }
                });
            }
        });
    }

    static login(userName, password, cb) {
        FileManagement.readFile(file, (err, data) => {
            if (err) {
                cb(err);
            } else {

                // check if all mandatory field are filled
                const isEmptyField = validation.isEmpty(
                    ['userName', 'password'],
                    [userName, password]
                );

                if (isEmptyField[0]) {
                    cb(isEmptyField[1]);
                    return;
                }

                // check is user exist
                const isUserExist = validation.isRegistered(
                    'username',
                    userName,
                    data
                );

                if (!isUserExist[0]) {
                    cb(isUserExist[1]);
                    return;
                }

                // check is password match
                const isPasswordMatch = isUserExist[2].password === password;

                if (isPasswordMatch) {

                    // check is user logged in exist
                    const isLoggedInExist = data.find((user) => {
                        return user.loggedIn;
                    });

                    if (isLoggedInExist) {
                        cb(null, `user ${isLoggedInExist.username} still logged in. You need to logout first !!!`);
                        return
                    }

                    data.forEach((employee, index) => {
                        if (employee.id === isUserExist[2].id) {
                            data[index].loggedIn = true;
                        }
                    });

                    // write to file
                    FileManagement.writeFile(file, data, (err, data) => {
                        if (err) {
                            cb(err)
                        } else {
                            cb(null, `user ${userName} logged in successfully`);
                        }
                    });
                } else {
                    cb(`username / password wrong !!!`);
                }
            }
        });
    }

    static logout(cb) {
        FileManagement.readFile(file, (err, data) => {
            if (err) {
                cb(err);
            } else {
                const isLoggedInExist = data.find((user) => {
                    return user.loggedIn;
                });

                if (!isLoggedInExist) {
                    cb(null, 'no user logged in !!!');
                    return;
                }

                data.forEach((employee) => {
                    if (employee.loggedIn) {
                        employee.loggedIn = false;
                    }
                });

                FileManagement.writeFile(file, data, (err, data) => {
                    if (err) {
                        cb(err);
                    } else {
                        cb(null, "user has been successfully logout !!!");
                    }
                });
            }
        });
    }
}

module.exports = Employee;