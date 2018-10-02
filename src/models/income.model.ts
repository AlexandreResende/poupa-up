
import * as Sequelize from 'sequelize';
import { sequelize } from '../models-persistence/sequelize';
import { createIncomeInput, createIncomeOutput } from '../data-source/incomes.ds';

export const Income = sequelize.define<createIncomeInput, createIncomeOutput>('incomes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  valueSpent: Sequelize.FLOAT,
  description: Sequelize.TEXT,
  category: Sequelize.STRING,
  month: Sequelize.INTEGER,
  year: Sequelize.INTEGER
});