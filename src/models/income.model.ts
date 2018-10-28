
import * as Sequelize from 'sequelize';
import { sequelize } from '../db/sequelize';
import { ICreateIncomeInput, ICreateIncomeOutput } from '../incomes/incomes.ds';

export const Income = sequelize.define<ICreateIncomeInput, ICreateIncomeOutput>('Incomes', {
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