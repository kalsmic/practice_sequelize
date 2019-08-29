'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    website: DataTypes.TEXT,
  }, {});
  User.associate = function(models) {
    // associations can be defined here

  };
  return User;
};