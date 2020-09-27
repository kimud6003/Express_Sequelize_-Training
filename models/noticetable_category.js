'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NoticeTable_Category extends Model {
    static associate(models) {
      // define association here
    }
  };
  NoticeTable_Category.init({
    CategoryName: {
      type:DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'NoticeTable_Category',
  });
  return NoticeTable_Category;
};