'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'KEYBOARDS',
          img: 'https://keygem.com/cdn/shop/products/unknown_f5342996-bb16-4237-8078-4f51fe50eee4.png?v=1652281200&width=1000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'KEYCAPS',
          img: 'https://keygem.com/cdn/shop/products/51-zp1kHvyL._AC_SL1500_-removebg.png?v=1613505237&width=1000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SWITCHES',
          img: 'https://keygem.com/cdn/shop/files/P1020123.jpg?v=1690543892&width=1000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
