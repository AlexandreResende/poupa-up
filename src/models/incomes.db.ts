
import * as Sequelize from 'sequelize';
import { sequelize } from '../models-persistence/sequelize';
import { DataTypeAbstractNumber } from 'sequelize';

export interface createIncomeRequest {
  valueSpent: number,
  descriptionText: string,
  dataType: string,
}

export interface createIncomeOutput {
  id: string,
  valueSpent: number,
  descriptionText: string,
  dataType: string,
}

export interface createIncomeInput {
  id: string,
  valueSpent: number,
  descriptionText: string,
  dataType: string,
}

export const Income = sequelize.define<createIncomeInput, createIncomeOutput>('incomes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  valueSpent: Sequelize.NUMBER,
  descriptionText: Sequelize.STRING,
  dataType: Sequelize.STRING,
});