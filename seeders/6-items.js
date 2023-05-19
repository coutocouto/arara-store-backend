'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Items', [
      {
        id: 1,
        productId: 1,
        cartId: 1,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        productId: 2,
        cartId: 1,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        productId: 3,
        cartId: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        productId: 4,
        cartId: 2,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        productId: 5,
        cartId: 2,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        productId: 6,
        cartId: 2,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Items', null, {});
  },
};
