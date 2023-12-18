'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Remonts',
      [
        {
          name: 'John Doe',
          phone: '121111',
          userId: 1,
          email: '1111',
          description: 'rrrrrrrr',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Remonts', null, {});
  },
};
