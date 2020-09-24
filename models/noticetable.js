'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NoticeTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NoticeTable.init({
    Category_Id: DataTypes.INTEGER,
    User_id: DataTypes.INTEGER,
    Title: DataTypes.STRING,
    Content: DataTypes.STRING,
    Date: DataTypes.DATE,
    View_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NoticeTable',
  });
  return NoticeTable;
};