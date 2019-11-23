//your code here
const db = require('./models/db');

db.serialize(() => {
    const sqlContacts =
        "CREATE TABLE IF NOT EXISTS contacts(" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        "firstname TEXT," +
        "lastname TEXT," +
        "email TEXT," +
        "phonenumber INTEGER," +
        "company)";

    const sqlGroups =
        "CREATE TABLE IF NOT EXISTS groups(" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        "name TEXT)";

    const sqlContactGroups =
        "CREATE TABLE IF NOT EXISTS contact_groups(" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        "id_contact INTEGER," +
        "id_group INTEGER)";

    const arraySQLTables = [
        {name: 'contacts', table: sqlContacts},
        {name: 'groups', table: sqlGroups},
        {name: 'contact_groups', table: sqlContactGroups}
    ];

    arraySQLTables.forEach((sqlQuery) => {
        return new Promise((res, rej) => {
            db.run(sqlQuery.table, (err) => {
                if (err) {
                    rej(err);
                } else {
                    res(`table ${sqlQuery.name} created successfully`);
                }
            });
        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    });

});



