'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    suite: DataTypes.STRING,
    city: DataTypes.TEXT,
    zipcode: DataTypes.TEXT,
    geolocationId: DataTypes.INTEGER
  },{});
  Address.associate = function(models) {
    Address.belongsTo(models.GeoLocation, {foreignKey: 'geolocationId'})
  };
  return Address;
};