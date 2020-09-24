'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VideoTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id: {
        type: Sequelize.INTEGER
      },
      Category_id: {
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
      View_content: {
        type: Sequelize.INTEGER
      },
      Image: {
        type: Sequelize.STRING
      },
      Image_real: {
        type: Sequelize.STRING
      },
      Video_link: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('VideoTables');
  }
};