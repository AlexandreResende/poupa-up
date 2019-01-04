
import * as Sequelize from 'sequelize';
import { sequelize } from '../db/sequelize';
import { ICreateIncomeInput, ICreateIncomeOutput } from '../incomes/incomes.ds';

export const Income = sequelize.define<ICreateIncomeInput, ICreateIncomeOutput>('Incomes', {
  id: {
    type: Sequelize.STRING,
    autoIncrement: false,
    primaryKey: true
  },
  value: Sequelize.FLOAT,
  description: Sequelize.TEXT,
  category: Sequelize.STRING,
  month: Sequelize.INTEGER,
  year: Sequelize.INTEGER
});