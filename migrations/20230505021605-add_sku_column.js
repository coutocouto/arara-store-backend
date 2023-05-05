'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Products', 'sku', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    });
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('Products', 'sku');
  },
};
