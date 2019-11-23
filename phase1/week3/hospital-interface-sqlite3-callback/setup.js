//your code here
const db = require('./models/db');

db.serialize(() => {
    const sqlEmployee =
        "CREATE TABLE IF NOT EXISTS employees(" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        "username TEXT," +
        "password TEXT," +
        "role TEXT," +
        "loggedin INTEGER)";

    const sqlPatient =
        "CREATE TABLE IF NOT EXISTS patients(" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        "name TEXT," +
        "id_employee INTEGER)";

    const sqlDiagnoses =
        "CREATE TABLE IF NOT EXISTS diagnoses(" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        "name TEXT)";

    const sqlPatientDiagnoses =
        "CREATE TABLE IF NOT EXISTS patient_diagnoses(" +
        "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
        "id_patient INTEGER," +
        "id_diagnose INTEGER)";

    const arraySQLTables = [
        {name: 'employees', table: sqlEmployee},
        {name: 'patients', table: sqlPatient},
        {name: 'diagnoses', table: sqlDiagnoses},
        {name: 'patients_diagnoses', table: sqlPatientDiagnoses}
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



