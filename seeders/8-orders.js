'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Orders', [
      {
        id: 1,
        addressId: 1,
        cartId: 1,
        userId: 1,
        trackingCode: 'TF707415151BR',
        shippingPrice: 29.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        addressId: 3,
        cartId: 2,
        userId: 2,
        trackingCode: 'TF707415151BR',
        shippingPrice: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
