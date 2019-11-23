'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addresses = sequelize.define('Addresses', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Addresses.associate = function(models) {
    // associations can be defined here
  };
  return Addresses;
};