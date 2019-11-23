'use strict';

const data = require('../readCsv');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Students', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Students', null, {});
    }
};
