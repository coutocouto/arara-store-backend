'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      statusPayment: {
        type: Sequelize.ENUM(
          'Aguardando pagamento',
          'Aguardando aprovação',
          'Pagamento Efetuado',
        ),
        defaultValue: 'Aguardando pagamento',
      },
      statusOrder: {
        type: Sequelize.ENUM(
          'Aguardando pagamento',
          'Pagamento aprovado',
          'Em envio',
          'Entregue',
        ),
        defaultValue: 'Aguardando pagamento',
      },
      payment: {
        type: Sequelize.ENUM('Boleto', 'Pix', 'Débito', 'Crédito'),
        defaultValue: null,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      addressId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Addresses',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        allowNull: true,
      },
      cartId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Carts',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Orders');
  },
};
