const sequalize = require('sequelize');
const seqConnection = new sequalize('addressbook','postgres','hacktiv8', {
    host: 'localhost',
    dialect: 'postgres'
});

seqConnection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        process.exit();
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = seqConnection