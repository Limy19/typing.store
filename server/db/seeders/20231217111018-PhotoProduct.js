'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'PhotoProducts',
      [
        {
          img: '/img/KIT ADAM.1.jpeg',
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/KIT ADAM.2.jpeg',
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
          img: '/img/PBTFANS DOUBLESHOT WOB.1.webp',
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/PBTFANS DOUBLESHOT WOB.2.webp',
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/MV TERMINAL KEYCAPS R2.1.webp',
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/MV TERMINAL KEYCAPS R2.2.webp',
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/WS MORANDI SWITCH / 10PCS.1.webp',
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/WS MORANDI SWITCH / 10PCS.2.webp',
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
