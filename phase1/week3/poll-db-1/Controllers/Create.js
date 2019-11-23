const Politician = require('../Models/Politician');
const Voter = require('../Models/Voter');
const Vote = require('../Models/Vote');

class Create {
    static createData(tableName, data) {
        switch (tableName) {
            case "politician":
                Politician.create([data[0], data[1], data[2], data[3]], (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
                break;
            case "voter":
                Voter.create([data[0], data[1], data[2], data[3]], (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
                break;
            case "vote":
                Vote.create([data[0], data[1]], (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
                break;
        }
    }
}

module.exports = Create;