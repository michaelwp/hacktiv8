const fs = require('fs');
const politicians = fs.readFileSync('./politicians.csv', 'utf8').split('\n');
const voters = fs.readFileSync('./voters.csv', 'utf8').split('\n');
const votes = fs.readFileSync('votes.csv', 'utf8').split('\n');
const db = require('./Models/db');

const insertDataPoliticians = (data) => {
    const sqlQuery =
        `INSERT INTO candidates (name, party, location, grade_current) VALUES (?, ?, ?, ?)`;
    data.forEach((item, index) => {
        let splitItem = item.split(",");
        if (index > 0) {
            db.run(sqlQuery, [splitItem[0], splitItem[1], splitItem[2], parseInt(splitItem[3])], (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("data Politician added successfully");
                }
            })
        }
    });


};

const insertDataVoters = (data) => {
    const sqlQuery = `INSERT INTO voters (first_name, last_name, gender, age) VALUES (?, ?, ?, ?)`;

    data.forEach((item, index) => {
        let splitItem = item.split(",");
        if (index > 0) {
            db.run(sqlQuery, [splitItem[0], splitItem[1], splitItem[2], splitItem[3]], (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("data Voter added successfully");
                }
            });
        }
    });
};

const insertDataVotes = (data) => {
    const sqlQuery = `INSERT INTO votes (voter_id, candidate_id) VALUES (?, ?)`;

    data.forEach((item, index) => {
        let splitItem = item.split(",");

        if (index > 0) {
            db.run(sqlQuery, [splitItem[0], splitItem[1]], (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("data Vote added successfully");
                }
            });
        }
    });
};

db.serialize(() => {
    insertDataPoliticians(politicians);
    insertDataVoters(voters);
    insertDataVotes(votes);
});
