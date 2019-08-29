'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GeoLocations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lat: {
        type: Sequelize.STRING
      },
      lng: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('GeoLocations');
  }
};