'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expenses = sequelize.define('Expenses', {
    valueSpent: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER
  }, {});
  Expenses.associate = function(models) {
    // associations can be defined here
  };
  return Expenses;
};