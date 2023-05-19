'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        userName: 'felipecouto',
        email: 'felipe@gmail.com',
        fullName: 'Felipe Couto',
        password:
          '$2b$10$Iy66qVyczz6dqIYU4Is26.ezG885U2L.cXT6gj26aMdfb.aDhLGCy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        userName: 'henriqueyun',
        email: 'henrique@gmail.com',
        fullName: 'HenriqueLima',
        password:
          '$2b$10$XM.VkgQAw6zgw9vQXU9A8eIykRsR/uqYWpce8bJWPemBtKvP53r7m',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
