const db = require('../connection');

class Orders {
    static findOne() {

    }

    static findAll(customerId, day, cb) {
        const sqlFindAll = "SELECT * FROM orders WHERE customerId = ? AND day = ?";
        db.all(sqlFindAll, [customerId, day], (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        })
    }

    static create(customerName, customerId, day, itemName, pricePerItem, quantity, cb) {
        const totalPrice = (quantity * pricePerItem);
        const sqlCreate = "INSERT INTO orders " +
            "(itemName, totalPrice, quantity, day, customerId,  status) " +
            "VALUES (?, ?, ?, ?, ?, ?)";

        db.run(sqlCreate,
            [itemName, totalPrice, quantity, day, customerId, 'processed'],
            function (err) {
                if (err) {
                    cb(err);
                } else {
                    cb(null, `Hi ${customerName}, pesanan kamu sedang diproses ya..`);
                }
            });
    }

    static read(customerId, cb) {
        const sqlRead = "SELECT * FROM orders WHERE customerId = ?";
        db.all(sqlRead, [customerId], (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        })
    }

    static update() {

    }

    static remove(customerId, cb) {
        const sqlRemove = "DELETE FROM orders WHERE customerId = ?";
        db.get(sqlRemove, [customerId], function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, true);
            }
        });
    }
}

module.exports = Orders;