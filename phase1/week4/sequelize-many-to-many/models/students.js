'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;

    class students extends Model {
    }

    students.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
            unique: {
                args: true,
                msg: 'Email address already in use!'
            }
        }
    }, {sequelize});
    students.associate = function (models) {
        // associations can be defined here
        students.belongsToMany(models.subjects,{through: models.Studentsubject})
    };
    return students;
};