'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'PhotoProducts',
      [
        {
          img: '/img/5.jpeg',
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/6.jpeg',
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/1.webp',
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/2.webp',
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/9.webp',
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/10.webp',
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/7.webp',
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/8.webp',
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/11.webp',
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/12.webp',
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/3.webp',
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/4.webp',
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhotoProducts', null, {});
  },
};
