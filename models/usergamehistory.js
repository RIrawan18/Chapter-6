'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {
    static associate(models) {
    }
  };
  UserGameHistory.init({
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserGameHistory',
  });
  return UserGameHistory;
};