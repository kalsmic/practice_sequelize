'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    catchPhrase: DataTypes.TEXT,
    bs: DataTypes.TEXT
  }, {});
  Company.associate = function(models) {
    Company.belongsToMany(models.User)
    // associations can be defined here
  };
  return Address;
};