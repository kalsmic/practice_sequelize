'use strict';
module.exports = (sequelize, DataTypes) => {
  const GeoLocation = sequelize.define('GeoLocation', {
    lat: DataTypes.STRING,
    lng: DataTypes.STRING,
  }, {});
  GeoLocation.associate = function(models) {
  };
  return Address;
};