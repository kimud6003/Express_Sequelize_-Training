'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      UserID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      UserPW: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      StudentNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },    
      Access: {
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      WR_Access: {
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
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
    await queryInterface.dropTable('Users');
  }
};