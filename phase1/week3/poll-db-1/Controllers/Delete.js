const Politician = require('../Models/Politician');
const Voter = require('../Models/Voter');
const Vote = require('../Models/Vote');

class Delete {
    static deleteData(tableName, id) {
        switch (tableName) {
            case "politician":
                Politician.delete(id, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data)
                    }
                });
                break;
            case "voter":
                Voter.delete(id, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data)
                    }
                });
                break;
            case "vote":
                Vote.delete(id, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data)
                    }
                });
                break;
        }
    }
}

module.exports = Delete;