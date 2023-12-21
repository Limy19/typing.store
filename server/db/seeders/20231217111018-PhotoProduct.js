'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'PhotoProducts',
      [
        {
          img: '/img/keys/M1W.webp',
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keys/M7W.webp',
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keys/MG75W.webp',
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/5.webp',
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/6.webp',
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/1.webp',
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/2.webp',
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/9.webp',
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/10.webp',
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/7.webp',
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/8.webp',
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/11.webp',
          productId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/12.webp',
          productId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/3.webp',
          productId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/4.webp',
          productId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keycaps/AKKONeon1.webp',
          productId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keycaps/AKKONeon2.webp',
          productId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keycaps/Base1.webp',
          productId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keycaps/Base2.webp',
          productId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keycaps/Kitting1.webp',
          productId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keycaps/Kitting2.webp',
          productId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keycaps/Marshmallow1.webp',
          productId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keycaps/Marshmallow2.webp',
          productId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keycaps/Polish1.webp',
          productId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keycaps/Polish2.webp',
          productId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keyboards/MG75W1.webp',
          productId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keyboards/MG75W2.webp',
          productId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keyboards/MONSGEEK_1.webp',
          productId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keyboards/MONSGEEK_2.webp',
          productId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keyboards/M6_1.webp',
          productId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: '/img/keyboards/M6_2.webp',
          productId: 17,
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
