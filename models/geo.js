'use strict';
module.exports = (sequelize, DataTypes) => {
  const GeoLocation = sequelize.define('GeoLocation', {
    lat: DataTypes.STRING,
    lng: DataTypes.STRING,
  }, {});
  GeoLocation.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};