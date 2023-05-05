'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.removeColumn('Products', 'homePage');
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('Products', 'homePage', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },
};
