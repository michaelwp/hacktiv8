'use strict';
module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.Sequelize.Model;
    const curYear = new Date().getFullYear();

    class Student extends Model {
        getFullName() {
            const birthYear = new Date(this.birthday).getFullYear();
            return {
                full_name: this.first_name + " " + this.last_name,
                gender: this.gender,
                birthday: this.birthday,
                email: this.email,
                phone: this.phone,
                height: this.height,
                age: curYear - birthYear
            };
        }

        getHeight() {
            const birthYear = new Date(this.birthday).getFullYear();
            return {
                full_name: this.first_name + " " + this.last_name,
                gender: this.gender,
                birthday: this.birthday,
                email: this.email,
                phone: this.phone,
                height: this.height,
                age: curYear - birthYear
            };
        }
    }

    Student.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        gender: DataTypes.STRING,
        birthday: DataTypes.DATEONLY,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            validate: {
                isNumeric: true,
                isLength(value) {
                    if (value.length > 13 || value.length < 10) {
                        throw new Error('Phone Must greater than 9 and less than 14');
                    }
                }
            }
        },
        height: DataTypes.INTEGER
    }, {sequelize});
    Student.associate = function (models) {
        // associations can be defined here
    };
    return Student;
};