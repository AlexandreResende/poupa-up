
import * as Sequelize from 'sequelize';
import { sequelize } from '../db/sequelize';
import { ICreateExpenseInput, ICreateExpenseOutput } from '../expenses/expenses.ds';

export const Expense = sequelize.define<ICreateExpenseInput, ICreateExpenseOutput>('Expenses', {
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