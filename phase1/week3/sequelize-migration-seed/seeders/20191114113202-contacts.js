'use strict';

const fs = require('fs');
const dataContact = fs.readFileSync('./contacts.csv', 'utf8');
const dataContactSplit = dataContact.split("\n");
const dataObjContact = [];
dataContactSplit.forEach((contact) => {
    let contactSplit = contact.split(",");
    dataObjContact.push(
        {
            name: contactSplit[1],
            email: contactSplit[2],
            phone: contactSplit[3],
            createdAt: new Date(),
            updatedAt: new Date()
        }
    )
});

console.log(dataObjContact);

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Contacts', dataObjContact, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(
            'Contacts', null, {}
        );
    }
};
