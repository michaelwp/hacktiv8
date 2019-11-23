'use strict';

const db = require('./db');

class Employee {
    static findOne(data, field, cb) {
        const sqlQuery = `SELECT * FROM employees WHERE ${field} = ?`;
        db.get(sqlQuery, data, (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        })
    }

    static findAll() {
        //
    }

    static create(data, cb) {
        // create new data
        const sqlQuery = "INSERT INTO employees\n" +
            "(username, password, role, loggedin)\n" +
            "VALUES (?,?,?,0)";

        db.run(sqlQuery, data, (err) => {
            if (err) {
                cb(err);
            } else {
                cb(null, "Data has been added successfully")
            }
        })

    }

    static read() {
        //
    }

    static update(data, id, cb) {
        // update data
        for (let field in data) {
            const sqlQuery = `UPDATE employees SET ${field} = ? WHERE id = ?`;
            db.run(sqlQuery, [data[field], id], (err) => {
                if (err){
                    cb(err);
                } else {
                    cb(null, "data updated successfully")
                }
            })
        }

    }

    static delete() {
        //
    }
}

module.exports = Employee;