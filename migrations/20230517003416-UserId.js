'use strict';

const { query } = require('express');
const sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('UserGameBiodata', 'user_id', {
      type: sequelize.INTEGER,
      references: {
        model: 'UserGames',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('UserGameBiodata', 'user_id', {});
  },
};
