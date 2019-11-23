'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;

    class Member extends Model {
        addLevel() {
            switch (true) {
                case this.exp > 3000:
                    return 'level 5';
                case this.exp > 2000:
                    return 'level 4';
                case this.exp > 1500:
                    return 'level 3';
                case this.exp > 1000:
                    return 'level 2';
                default :
                    return 'level 1';
            }
        }
    }

    Member.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        username: DataTypes.STRING,
        type: DataTypes.STRING,
        exp: {
            type: DataTypes.INTEGER,
            validate: {
                maxExp() {
                    if (this.exp > 5000) {
                        throw "Exp Max 5000";
                    }
                }
            }
        },
        age: DataTypes.INTEGER
    }, {
        hooks: {
            beforeCreate(att, options) {
                att.username = att.firstName + att.lastName + att.age.toString();
                att.type = "free";
                att.exp = 0;
            }
        },
        sequelize
    });
    Member.associate = function (models) {
        // associations can be defined here
        Member.hasMany(models.Tag)
    };
    return Member;
};