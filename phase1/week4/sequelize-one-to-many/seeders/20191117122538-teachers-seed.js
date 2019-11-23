'use strict';

const seedData = require('../setupData');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('teachers', seedData, {});
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('teachers', null, {});
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};
