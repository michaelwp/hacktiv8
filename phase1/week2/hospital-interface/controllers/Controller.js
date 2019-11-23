'use strict';
const Employee = require('../models/Employee');
const Patient = require('../models/Patient');
const Views = require('../views/Views');

class Controller {
    static command(cmd, arg) {
        switch (cmd) {
            case "register":
                Employee.register(arg[0], arg[1], arg[2], (err, data) => {
                    if (err) {
                        Views.showMsg(err);
                    } else {
                        Views.showMsg(data);
                    }
                });
                break;
            case "login":
                Employee.login(arg[0], arg[1], (err, data) => {
                    if (err) {
                        Views.showMsg(err);
                    } else {
                        Views.showMsg(data);
                    }
                });
                break;
            case "addpatient":
                Patient.addPatient(arg[0], arg.splice(1), (err, data) => {
                    if (err) {
                        Views.showMsg(err);
                    } else {
                        Views.showMsg(data);
                    }
                });
                break;
            case "logout":
                Employee.logout((err, data) => {
                    if (err) {
                        Views.showMsg(err);
                    } else {
                        Views.showMsg(data);
                    }
                });
                break;
        }
    }
}

module.exports = Controller;

