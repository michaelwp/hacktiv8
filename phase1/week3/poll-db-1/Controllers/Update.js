const Politician = require('../Models/Politician');
const Voter = require('../Models/Voter');
const Vote = require('../Models/Vote');

class Update {
    static updateData(tableName, data, id) {
        switch (tableName) {
            case "politician":
                Politician.update(data, id, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data)
                    }
                });
                break;
            case "voter":
                Voter.update(data, id, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data)
                    }
                });
                break;
            case "vote":
                Vote.update(data, id, (err, data) => {
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

module.exports = Update;