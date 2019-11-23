const db = require('./db');

class Contact {
    static findOne(name, cb) {
        const sqlFindOne = "SELECT * FROM groups WHERE name = ?";
        db.get(sqlFindOne, name, function (err, row) {
            if (err) {
                cb(err);
            } else {
                cb(null, row);
            }
        })
    }

    static findAll() {

    }

    static create(data, cb) {
        const sqlCreate = "INSERT INTO groups " +
            "(name) VALUES (?)";

        db.run(sqlCreate, data, function (err) {
            if (err){
                cb(err);
            } else{
                cb(null, `data added successfully`)
            }
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