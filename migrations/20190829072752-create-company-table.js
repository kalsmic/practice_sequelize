'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Company', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      catchPhrase: {
        type: Sequelize.TEXT
      },
      bs: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE(3),
       defaultValue: Sequelize.fn('NOW')

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        timestamps: true,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Company');
  }
};