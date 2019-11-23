'use strict';
const Employee = require('../models/Employee');
const Patient = require('../models/Patient');
const Views = require('../views/Views');

class Controller {
    static command(cmd, arg) {
        switch (cmd) {
            case "register":
                // check if all mandatory field are filledcceZ1w2w
                const isEmptyCreate = this.isEmpty(
                    ['userName', 'password', 'role'],
                    [arg[0], arg[1], arg[2]]
                );

                if (isEmptyCreate[0]) {
                    Views.showMsg(isEmptyCreate[1]);
                    return;
                }

                // is user registered ?
                this.isRegistered(arg[0], (err, data) => {
                    if (err) {
                        Views.showMsg(err);
                    } else {
                        if (!data) {
                            Employee.create([arg[0], arg[1], arg[2]], (err, data) => {
                                if (err) {
                                    Views.showMsg(err);
                                } else {
                                    Views.showMsg(data);
                                }
                            });
                        } else {
                            Views.showMsg(`User ${arg[0]} already registered !!!`);
                        }
                    }
                });
                break;
            case "login":
                // check if all mandatory field are filledcceZ1w2w
                const isEmptyLogin = this.isEmpty(
                    ['userName', 'password'],
                    [arg[0], arg[1]]
                );

                if (isEmptyLogin[0]) {
                    Views.showMsg(isEmptyLogin[1]);
                    return;
                }

                // is user registered ?
                this.isRegistered(arg[0], (err, data) => {
                    if (err) {
                        Views.showMsg(err);
                    } else {
                        if (!data) {
                            Views.showMsg(`User ${arg[0]} not registered !!!`);
                        } else {
                            // is password correct ?
                            if (data.password === arg[1]) {
                                // is someone being login ?
                                Employee.findOne([true], 'loggedin', (err, dataFindOne) => {
                                    if (err) {
                                        Views.showMsg(err);
                                    } else {
                                        if (!dataFindOne) {
                                            Employee.update({loggedin: true}, data.id, (err, dataUpdate) => {
                                                if (err) {
                                                    Views.showMsg(err);
                                                } else {
                                                    Views.showMsg(`User ${data.username} logged in successfully`);
                                                }
                                            })
                                        } else {
                                            Views.showMsg("someone has being logged in please logout first !!!");
                                        }
                                    }
                                });


                            } else {
                                Views.showMsg("wrong password !!!");
                            }
                        }
                    }
                });
                break;
            case "addpatient":
                // check if all mandatory field are filledcceZ1w2w
                const isEmptyPatient = this.isEmpty(
                    ['name', 'diagnoses'],
                    [arg[0], arg[1]]
                );

                if (isEmptyPatient[0]) {
                    Views.showMsg(isEmptyPatient[1]);
                    return;
                }

                // is someone being login
                Employee.findOne([true], 'loggedin', (err, dataFindOne) => {
                    if (err) {
                        Views.showMsg(err);
                    } else {
                        if (!dataFindOne) {
                            Views.showMsg("no one being logged in !!!");
                        } else {
                            if (dataFindOne.role === 'dokter') {
                                Patient.create(arg[0], arg.splice(1), dataFindOne.id, (err, data) => {
                                    if (err) {
                                        Views.showMsg(err);
                                    } else {
                                        Views.showMsg(data);
                                    }
                                });
                            } else {
                                Views.showMsg("you doesn't have access to add patient !!!");
                            }
                        }
                    }
                });
                break;
            case "logout":
                Employee.findOne([true], 'loggedin', (err, dataFindOne) => {
                    if (err) {
                        Views.showMsg(err);
                    } else {
                        if (!dataFindOne) {
                            Views.showMsg('no one logged in !!!');
                        } else {
                            Employee.update({loggedin: false}, dataFindOne.id, (err, dataUpdate) => {
                                if (err) {
                                    Views.showMsg(err);
                                } else {
                                    Views.showMsg(`User ${dataFindOne.username} has logout successfully`);
                                }
                            })
                        }
                    }
                });
                break;
        }
    }

    static isEmpty(fieldName, field) {
        let isEmpty = false;
        field.find((el) => {
            if (!el || el.length === 0) isEmpty = true;
        });
        return [isEmpty, `${fieldName} are mandatory, must not be empty !!!`];
    }

    static isRegistered(userName, cb) {
        Employee.findOne(userName, 'username', (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        })
    }
}

module.exports = Controller;

