//your code here
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('polldb');

db.serialize(() => {
    const sqlCandidates =
        "CREATE TABLE IF NOT EXISTS candidates(" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        "name TEXT," +
        "party TEXT," +
        "location TEXT," +
        "grade_current INTEGER" +
        ")";

    const sqlVoters =
        "CREATE TABLE IF NOT EXISTS voters(" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        "first_name TEXT," +
        "last_name TEXT," +
        "gender TEXT," +
        "age INTEGER" +
        ")";

    const sqlVotes =
        "CREATE TABLE IF NOT EXISTS votes(" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        "voter_id INTEGER," +
        "candidate_id INTEGER" +
        // "FOREIGN KEY(voter_id) REFERENCES voters(id)" +
        // "FOREIGN KEY(candidate_id) REFERENCES candidates(id)" +
        ")";

    const arraySQLTables = [
        {name: 'candidates', table: sqlCandidates},
        {name: 'voters', table: sqlVoters},
        {name: 'votes', table: sqlVotes}
    ];

    arraySQLTables.forEach((sqlQuery) => {
        db.run(sqlQuery.table, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`table ${sqlQuery.name} created successfully`);
            }
        });
    });

});



