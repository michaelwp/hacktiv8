'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;

    class article extends Model {
        //
    }

    article.init({
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        id_author: DataTypes.INTEGER,
        id_tag: DataTypes.INTEGER
    }, {sequelize});
    article.associate = function (models) {
        // associations can be defined here
    };
    return article;
};