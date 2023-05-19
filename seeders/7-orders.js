'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Orders', [
      {
        id: 1,
        statusPayment: 'Aguardando pagamento',
        statusOrder: 'Aguardando pagamento',
        payment: 'Boleto',
        addressId: 1,
        cartId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        statusPayment: 'Pagamento Realizado',
        statusOrder: 'Separando Estoque',
        payment: 'Cartão',
        addressId: 3,
        cartId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
