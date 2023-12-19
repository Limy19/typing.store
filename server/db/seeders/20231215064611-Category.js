'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'KEYBOARDS',
          img: 'https://static.insales-cdn.com/r/MEQazG8nGsc/rs:fit:1920:1920:1/plain/images/products/1/6810/674986650/ducky-mini.jpg@webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'KEYCAPS',
          img: 'https://thekey.company/cdn/shop/products/Marshmallow_Production-6_1024x1024.jpg?v=1656694795',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SWITCHES',
          img: 'https://thekey.company/cdn/shop/files/SwitchesWebsite-10_1024x1024.jpg?v=1685026064',
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
