'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      street: {
        type: Sequelize.STRING
      },
      suite: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.TEXT
      },
      zipcode: {
        type: Sequelize.TEXT
      },
      geoLocationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'GeoLocations',
          key: 'id',
          as: 'geo'
        }
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
    return queryInterface.dropTable('Addresses');
  }
};