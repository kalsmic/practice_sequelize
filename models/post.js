'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Post;
};