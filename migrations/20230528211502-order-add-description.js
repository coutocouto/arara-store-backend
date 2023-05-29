'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Addresses',
      'description',
      Sequelize.STRING,
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Addresses',
      'description',
      Sequelize.STRING,
    );
  },
};
