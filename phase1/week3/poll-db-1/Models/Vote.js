const db = require('./db');

class Vote {
    static create(data, cb) {
        const sqlQuery =
            "INSERT INTO votes (voter_id, candidate_id) " +
            "VALUES (?, ?)";
        db.run(sqlQuery, data, (err) => {
            if (err) {
                cb(err);
            } else {
                cb(null, `data Vote successfully add ${data}`);
            }
        });
        db.close
    }

    static update(data, id, cb) {
        for (let key in data) {
            const sqlQuery = `UPDATE votes SET ${key} = ? WHERE id = ?`;
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
        const sqlQuery = `DELETE FROM votes WHERE id = ?`;
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

module.exports = Vote;