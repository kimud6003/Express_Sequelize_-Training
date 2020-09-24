'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VideoTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  VideoTable.init({
    Category_id: DataTypes.INTEGER,
    User_id: DataTypes.INTEGER,
    Title: DataTypes.STRING,
    Content: DataTypes.STRING,
    Date: DataTypes.DATE,
    View_content: DataTypes.INTEGER,
    Image: DataTypes.STRING,
    Image_real: DataTypes.STRING,
    Video_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VideoTable',
  });
  return VideoTable;
};