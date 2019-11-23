'use strict';
module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        MemberId: DataTypes.INTEGER
    }, {});
    Tag.associate = function (models) {
        // associations can be defined here
        Tag.belongsTo(models.Member)
    };
    return Tag;
};