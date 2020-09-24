'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NoticeTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id: {
        type: Sequelize.INTEGER
      },
      Category_Id: {
        type: Sequelize.INTEGER
      },
      User_id: {
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      Content: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.DATE
      },
      View_count: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('NoticeTables');
  }
};