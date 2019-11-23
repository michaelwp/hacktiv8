'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;

    class teachers extends Model {
    }

    teachers.init({
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
    teachers.associate = function (models) {
        // associations can be defined here
        teachers.hasMany(models.subjects)
    };


    return teachers;
};