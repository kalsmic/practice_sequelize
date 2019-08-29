'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Users','companyId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Company',
          key: 'id',
          as: 'company'
        }
    }),

  down: queryInterface => queryInterface.removeColumn('Users','companyId')
};
