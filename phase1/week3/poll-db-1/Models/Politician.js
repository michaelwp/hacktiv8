const db = require('./db');

class Politician {
    static create(data, cb) {
        const sqlQuery =
            "INSERT INTO candidates (name, party, location, grade_current) " +
            "VALUES (?, ?, ?, ?)";
        db.run(sqlQuery, data, (err) => {
            if (err) {
                cb(err);
            } else {
                cb(null, `data Politicians successfully add ${data}`);
            }
        });
        db.close;
    }

    static update(data, id, cb) {
        for (let key in data) {
            const sqlQuery = `UPDATE candidates SET ${key} = ? WHERE id = ?`;
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
        const sqlQuery = `DELETE FROM candidates WHERE id = ?`;
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

module.exports = Politician;