"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "KIT ADAM",
          description: "KIT ADAM описание",
          price: 100,
          meta: JSON.stringify({ size: "full", color: "pink" }),
          categoryId: 1,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BLOCK-67 R2",
          description: "BLOCK-67 R2 описание",
          price: 70,
          meta: JSON.stringify({ size: "tkl", color: "black" }),
          categoryId: 1,
          stock: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PBTFANS DOUBLESHOT WOB",
          description: "PBTFANS DOUBLESHOT WOB описание",
          price: 30,
          categoryId: 2,
          stock: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MV TERMINAL KEYCAPS R2",
          description: "MV TERMINAL KEYCAPS R2 описание",
          price: 30,
          categoryId: 2,
          stock: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WS MORANDI SWITCH / 10PCS",
          description: "WS MORANDI SWITCH / 10PCS описание",
          price: 5,
          categoryId: 3,
          stock: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "JWK HERA SWITCH / 10PCS",
          description: "JWK HERA SWITCH / 10PCS описание",
          price: 7,
          categoryId: 3,
          stock: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "EQUALZ X TKC FRUIT SMOOTHIE SWITCHES",
          description: "JWK HERA SWITCH / 10PCS описание",
          price: 7,
          categoryId: 3,
          stock: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
