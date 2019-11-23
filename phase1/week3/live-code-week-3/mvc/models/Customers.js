const db = require('../connection');

class Customers {
    static findOne(customerName, cb) {
        const sqlFindeOne = "SELECT * FROM customers WHERE name = ?";
        db.get(sqlFindeOne, [customerName], function (err, data) {
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        });
    }

    static findAll() {

    }

    static create() {

    }

    static read() {

    }

    static update() {

    }

    static remove(customerId, cb) {
        const sqlRemove = "DELETE FROM customers WHERE id = ?";
        db.get(sqlRemove, [customerId], function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, customerId);
            }
        });
    }
}

module.exports = Customers;