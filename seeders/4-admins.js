'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Admins', [
      {
        id: 1,
        email: 'felipe@gmail.com',
        fullName: 'Felipe Couto',
        password:
          '$2b$10$Iy66qVyczz6dqIYU4Is26.ezG885U2L.cXT6gj26aMdfb.aDhLGCy',
        cpf: '00000000022',
        birth: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: 'henrique@gmail.com',
        fullName: 'HenriqueLima',
        password:
          '$2b$10$XM.VkgQAw6zgw9vQXU9A8eIykRsR/uqYWpce8bJWPemBtKvP53r7m',
        cpf: '00000000011',
        birth: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Admins', null, {});
  },
};
