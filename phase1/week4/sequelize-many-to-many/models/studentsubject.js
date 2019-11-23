'use strict';
module.exports = (sequelize, DataTypes) => {
    const Studentsubject = sequelize.define('Studentsubject', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        studentId: DataTypes.INTEGER,
        subjectId: DataTypes.INTEGER,
        score: DataTypes.INTEGER
    }, {});
    Studentsubject.associate = function (models) {
        // associations can be defined here
    };
    return Studentsubject;
};