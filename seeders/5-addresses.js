'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Addresses', [
      {
        id: 1,
        description: 'Casa',
        country: 'Brasil',
        city: 'São Paulo',
        state: 'SP',
        address: 'Av Itaquera',
        number: 7291,
        cep: '08295000',
        complement: '403 Bloco 5',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        description: 'Casa 2',
        country: 'Brasil',
        city: 'São Paulo',
        state: 'SP',
        address: 'Rua Francisco Albani',
        number: 32,
        cep: '08255740',
        complement: '32A',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        description: 'Casa',
        country: 'Italia',
        city: 'Roma',
        state: 'RO',
        address: 'Rua Pizza',
        number: 102,
        cep: '002541741',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        description: 'Trabalho',
        country: 'França',
        city: 'Paris',
        state: 'PA',
        address: 'Rua Croissant',
        number: 151,
        cep: '015267411',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};
