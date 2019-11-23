const db = require('./db');

class Contact {
    static findOne(field, id) {
        return new Promise((res, rej) => {
            const sqlFindOne = `SELECT * FROM contact_groups WHERE ${field} = ?`;
            db.get(sqlFindOne, id, function (err, data) {
                if (err) {
                    rej(err);
                } else {
                    res(data);
                }
            })
        })
    }

    static findAll() {
        //
    }

    static create(data) {
        return new Promise((res, rej) => {
            const sqlCreate = "INSERT INTO contact_groups (id_contact, id_group) VALUES (?,?)";
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
        //
    }

    static update() {
        //
    }

    static remove(id) {
        return new Promise((res, rej) => {
            const sqlDelete = `DELETE FROM contact_groups WHERE id = ?`;
            db.run(sqlDelete, id, function (err) {
                if (err) {
                    rej(err);
                } else {
                    res('data contact group deleted successfully')
                }
            })
        })
    }

}

module.exports = Contact;