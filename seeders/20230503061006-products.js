'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Camiseta básica',
        description: 'Camiseta básica de algodão',
        color: 'Branco',
        size: 'P',
        brand: 'Marca X',
        price: 25.0,
        discount: 0.1,
        quantity: 100,
        image:
          'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jaqueta marrom',
        description: 'Jaqueta de couro sintético marrom',
        color: 'Marrom',
        size: 'M',
        brand: 'Marca Y',
        price: 149.99,
        discount: 0.2,
        quantity: 50,
        image:
          'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Camiseta verde',
        description: 'Camiseta básica de algodão',
        color: 'Verde',
        size: 'G',
        brand: 'Marca X',
        price: 29.99,
        discount: 0,
        quantity: 80,
        image:
          'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Moletom básico',
        description: 'Moletom básico de algodão',
        color: 'Cinza',
        size: 'M',
        brand: 'Marca Z',
        price: 49.99,
        discount: 0.05,
        quantity: 120,
        image:
          'https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Camisa preta',
        description: 'Camisa social preta',
        color: 'Preto',
        size: 'GG',
        brand: 'Marca Y',
        price: 79.99,
        discount: 0,
        quantity: 60,
        image:
          'https://images.unsplash.com/photo-1602015464429-5d4eb71a7711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vestido branco',
        description: 'Vestido branco de algodão',
        color: 'Branco',
        size: 'M',
        brand: 'Marca X',
        price: 99.99,
        discount: 0.15,
        quantity: 40,
        image:
          'https://images.unsplash.com/photo-1605450081927-6b40c11c661f?ixlib=rb-4.0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Moletom Feminino Preta',
        description: 'Moletom feminino preta com capuz',
        color: 'Preto',
        size: 'M',
        brand: 'H&M',
        price: 5000,
        discount: 0,
        quantity: 10,
        image:
          'https://images.unsplash.com/photo-1521567097888-2c5fc40a8660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlYXRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Moletom Feminino Rosa',
        description: 'Moletom feminino rosa claro com estampa "Confident"',
        color: 'Rosa',
        size: 'G',
        brand: 'Confident',
        price: 8000,
        discount: 10,
        quantity: 5,
        image:
          'https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3dlYXRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Moletom Cinza',
        description: 'Moletom cinza simples com capuz',
        color: 'Cinza',
        size: 'P',
        brand: 'Zara',
        price: 4500,
        discount: 0,
        quantity: 15,
        image:
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3dlYXRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Moletom Feminino Preta Estilosa',
        description:
          'Moletom feminino preta estilosa com capuz e estampa nas mangas',
        color: 'Preto',
        size: 'M',
        brand: 'Zara',
        price: 6500,
        discount: 0,
        quantity: 8,
        image:
          'https://images.unsplash.com/photo-1556172732-bcded74ff3a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWF0c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Moletom Feminino Vermelha',
        description: 'Moletom feminino vermelho com estampa "New York"',
        color: 'Vermelho',
        size: 'GG',
        brand: 'H&M',
        price: 7500,
        discount: 0,
        quantity: 3,
        image:
          'https://images.unsplash.com/photo-1580530645929-8ac476d9cc0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHN3ZWF0c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
