const db = require('./db');

class Contact {
    static findOne(contactPhone, cb) {
        const sqlFindOne = `SELECT * FROM contacts WHERE phonenumber = ?`;
        db.get(sqlFindOne, contactPhone, function (err, data) {
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
        const sqlCreate = "INSERT INTO contacts " +
            "(firstname, lastname, email, phonenumber, company) " +
            "VALUES (?,?,?,?,?)";

        db.run(sqlCreate, data, function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, `data added successfully`);
            }
        })
    }

    static read(cb) {
        const sqlReadGroupName = "SELECT groups.name, contact_groups.id_contact as id_contact FROM contact_groups\n" +
            "JOIN groups ON groups.id = contact_groups.id_group";
        db.all(sqlReadGroupName, function (err, dataGroupName) {
            if (err) {
                cb(err);
            } else {
                const sqlReadContact = "SELECT * FROM contacts";
                db.all(sqlReadContact, function(err, dataContact){
                    if (err){
                        cb(err);
                    } else {
                        if (!dataContact) {
                            cb("data is empty");
                        } else {
                            dataContact.forEach((itemContact) => {
                                itemContact.group = dataGroupName.filter((itemGroup) => {
                                    return itemGroup.id_contact === itemContact.id;
                                });
                                cb(itemContact);
                            });
                        }
                    }
                })
            }
        })
    }

    static update(field, value, cb) {
        const sqlUpdate = `UPDATE contacts SET ${field} = ? WHERE id = ?`;
        db.run(sqlUpdate, value, function (err) {
            if (err) {
                cb(err)
            } else {
                cb(null, `data updated successfully`);
            }
        })
    }

    static remove(id, cb) {
        const sqlDelete = `DELETE FROM contacts WHERE id = ?`;
        db.run(sqlDelete, id, function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, 'data contact deleted successfully')
            }
        })
    }

}

module.exports = Contact;