const db = require('./db');

class Contact {
    static findOne(name) {
        return new Promise((res, rej) => {
            const sqlFindOne = "SELECT * FROM groups WHERE name = ?";
            db.get(sqlFindOne, name, function (err, row) {
                if (err) {
                    rej(err);
                } else {
                    res(row);
                }
            })
        })
    }

    static findAll() {
        //
    }

    static create(data) {
        return new Promise((res, rej) => {
            const sqlCreate = "INSERT INTO groups (name) VALUES (?)";
            db.run(sqlCreate, data, function (err) {
                if (err) {
                    rej(err);
                } else {
                    res(`data added successfully`)
                }
            })
        })
    }

    static read() {

    }

    static update() {

    }

    static remove() {

    }

}

module.exports = Contact;