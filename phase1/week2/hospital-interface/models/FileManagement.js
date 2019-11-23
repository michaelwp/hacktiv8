'use strict';

const fs = require('fs');

class FileManagement {
    static readFile(file, cb) {
        fs.readFile(file, "utf8", (err, data) => {
            if (err) {
                cb(err);
            } else {
                cb(null, JSON.parse(data))
            }
        })
    }

    static writeFile(file, data, cb) {
        fs.writeFile(file, JSON.stringify(data, null, 4), (err) => {
            if (err) {
                cb(err);
            } else {
                cb(null, data);
            }
        });
    }
}

module.exports = FileManagement;