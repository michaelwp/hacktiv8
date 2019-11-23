const db = require('./db');

class Voter {
    static create(data, cb) {
        const sqlQuery =
            "INSERT INTO voters (first_name, last_name, gender, age) " +
            "VALUES (?, ?, ?, ?)";
        db.run(sqlQuery, data, (err) => {
            if (err) {
                cb(err);
            } else {
                cb(null, `data Voter successfully add ${data}`);
            }
        });

        db.close();
    }

    static update(data, id, cb) {
        for (let key in data) {
            const sqlQuery = `UPDATE voters SET ${key} = ? WHERE id = ?`;
            db.run(sqlQuery, [data[key], id], (err) => {
                if (err) {
                    cb(err);
                } else {
                    cb(null, `Data successfuly update ${key}:${data[key]}`);
                }
            })
        }
        db.close
    }

    static delete(id, cb) {
        const sqlQuery = `DELETE FROM voters WHERE id = ?`;
        db.run(sqlQuery, id, (err) => {
            if (err) {
                cb(err);
            } else {
                cb(null, `Data successfuly delete id:${id}`);
            }
        });
        db.close
    }
}

module.exports = Voter;