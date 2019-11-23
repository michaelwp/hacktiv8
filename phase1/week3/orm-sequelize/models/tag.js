'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;

    class tag extends Model {
        //
    }

    tag.init({
        name: DataTypes.STRING
    }, {sequelize});
    tag.associate = function (models) {
        // associations can be defined here
    };
    return tag;
};