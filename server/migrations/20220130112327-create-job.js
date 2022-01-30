"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tittle: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      requirement: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      jobDescription: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      statusJob: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Jobs");
  },
};
