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
      Category_Id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      User_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      Title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      Content: {
        type: Sequelize.STRING,
        allowNull:false
      },
      Date: {
        type: Sequelize.DATE,
        allowNull:false
      },
      View_count: {
        type: Sequelize.INTEGER,
        allowNull:false
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