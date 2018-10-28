
import {
  ICreateExpenseOutput,
} from '../expenses/expenses.ds';
import {
    ICreateIncomeOutput,
} from '../incomes/incomes.ds';

export interface ISearchOutput {
  expenses: ICreateExpenseOutput[],
  incomes: ICreateIncomeOutput[],
}