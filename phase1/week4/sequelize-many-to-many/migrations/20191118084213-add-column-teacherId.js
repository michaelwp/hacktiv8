'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('subjects', 'teacherId', Sequelize.INTEGER);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('users', 'teacherId');
    }
};
