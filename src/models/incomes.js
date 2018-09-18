'use strict';
module.exports = (sequelize, DataTypes) => {
  const Incomes = sequelize.define('Incomes', {
    valueSpent: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    category: DataTypes.STRING
  }, {});
  Incomes.associate = function(models) {
    // associations can be defined here
  };
  return Incomes;
};