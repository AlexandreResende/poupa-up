
import * as Sequelize from 'sequelize';
import { sequelize } from '../models-persistence/sequelize';
import { createExpenseInput, createExpenseOutput } from '../data-source/expenses.ds';

export const Expense = sequelize.define<createExpenseInput, createExpenseOutput>('Expenses', {
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