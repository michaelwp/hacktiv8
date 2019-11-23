'use strict';

const fs = require('fs');
const dataAddress = fs.readFileSync('./addresses.csv', 'utf8');
const dataAddressSplit = dataAddress.split("\n");
const dataObjAddress = [];
dataAddressSplit.forEach((address) => {
    let addressSplit = address.split(",");
    dataObjAddress.push(
        {
            street: addressSplit[1],
            city: addressSplit[2],
            zip_code: addressSplit[3],
            createdAt: new Date(),
            updatedAt: new Date()
        }
    )
});

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Addresses', dataObjAddress, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Addresses', null, {});
    }
};
