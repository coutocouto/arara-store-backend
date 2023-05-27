'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Orders',
      'shippingPrice',
      Sequelize.DECIMAL(10, 2),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Orders',
      'shippingPrice',
      Sequelize.DECIMAL(10, 2),
    );
  },
};
