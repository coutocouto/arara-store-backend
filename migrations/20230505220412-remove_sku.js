'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.removeColumn('Products', 'sku');
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('Products', 'sku', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    });
  },
};
