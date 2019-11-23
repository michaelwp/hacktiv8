const db = require('./db');

class Contact {
    static findOne(contactPhone) {
        return new Promise((res, rej) => {
            const sqlFindOne = `SELECT * FROM contacts WHERE phonenumber = ?`;
            db.get(sqlFindOne, contactPhone, function (err, data) {
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
            const sqlCreate = "INSERT INTO contacts " +
                "(firstname, lastname, email, phonenumber, company) " +
                "VALUES (?,?,?,?,?)";

            db.run(sqlCreate, data, function (err) {
                if (err) {
                    rej(err);
                } else {
                    res(`data added successfully`);
                }
            })
        })
    }

    static read() {
        return new Promise((res, rej) => {
            const sqlReadGroupName = "SELECT groups.name, contact_groups.id_contact as id_contact FROM contact_groups\n" +
                "JOIN groups ON groups.id = contact_groups.id_group";
            db.all(sqlReadGroupName, function (err, dataGroupName) {
                if (err) {
                    rej(err);
                } else {
                    const sqlReadContact = "SELECT * FROM contacts";
                    db.all(sqlReadContact, function (err, dataContact) {
                        if (err) {
                            rej(err);
                        } else {
                            if (!dataContact) {
                                res("data is empty");
                            } else {
                                dataContact.forEach((itemContact) => {
                                    itemContact.group = dataGroupName.filter((itemGroup) => {
                                        return itemGroup.id_contact === itemContact.id;
                                    });
                                    res(itemContact);
                                });
                            }
                        }
                    })
                }
            })
        })
    }

    static update(field, value) {
        return new Promise((res, rej) => {
            const sqlUpdate = `UPDATE contacts SET ${field} = ? WHERE id = ?`;
            db.run(sqlUpdate, value, function (err) {
                if (err) {
                    rej(err)
                } else {
                    res(`data updated successfully`);
                }
            })
        })
    }

    static remove(id) {
        return new Promise((res, rej) => {
            const sqlDelete = `DELETE FROM contacts WHERE id = ?`;
            db.run(sqlDelete, id, function (err) {
                if (err) {
                    rej(err);
                } else {
                    res('data contact deleted successfully');
                }
            })
        })
    }

}

module.exports = Contact;