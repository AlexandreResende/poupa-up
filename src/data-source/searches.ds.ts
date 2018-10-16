
import {
  createExpenseOutput,
} from '../data-source/expenses.ds';
import {
    createIncomeOutput,
} from '../data-source/incomes.ds';

export interface ISearchOutput {
  expenses: createExpenseOutput[],
  incomes: createIncomeOutput[],
}