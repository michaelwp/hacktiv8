'use strict';

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;

    class author extends Model {
        //
    }

    author.init({
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        religion: DataTypes.STRING,
        gender: DataTypes.STRING,
        age: DataTypes.INTEGER
    }, {sequelize});
    author.associate = function (models) {
        // associations can be defined here
    };
    return author;
};