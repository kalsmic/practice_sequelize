'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Users','addressId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Addresses',
          key: 'id',
          as: 'address'
        }
    }),

  down:queryInterface => queryInterface.removeColumn('Users','addressId')
};
