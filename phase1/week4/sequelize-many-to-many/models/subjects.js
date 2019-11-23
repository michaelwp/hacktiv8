'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;

    class subjects extends Model {
    }

    subjects.init({
        subject_name: DataTypes.STRING
    }, {sequelize});
    subjects.associate = function (models) {
        // associations can be defined here
        subjects.belongsTo(models.teachers);
        subjects.belongsToMany(models.students,{through: models.Studentsubject})
    };
    return subjects;
};