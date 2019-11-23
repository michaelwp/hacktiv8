const db = require('./db');

class Contact {
    static findOne(field, id, cb) {
        const sqlFindOne = `SELECT * FROM contact_groups WHERE ${field} = ?`;
        db.get(sqlFindOne, id, function (err, data) {
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        })
    }

    static findAll() {

    }

    static create(data, cb) {
        const sqlCreate = "INSERT INTO contact_groups " +
            "(id_contact, id_group) VALUES (?,?)";

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

    static remove(id, cb) {
        const sqlDelete = `DELETE FROM contact_groups WHERE id = ?`;
        db.run(sqlDelete, id, function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, 'data contact group deleted successfully')
            }
        })
    }

}

module.exports = Contact;