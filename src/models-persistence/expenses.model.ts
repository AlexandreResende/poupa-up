
import { 
  createExpenseInput,
  createExpenseRequest,
  createExpenseOutput,
  updateExpense,
  getExpensesOutput } from '../data-source/expenses.ds';
import { Expense } from '../models/Expense.model';

export class ExpenseService {

  constructor() {}

  public async createExpense(createExpenseData: createExpenseRequest): Promise<createExpenseOutput> {
    const expenseCreationInput: createExpenseInput = {
      id: '1',
      ...createExpenseData,
    }
    const expenseCreationOutput: createExpenseOutput = await Expense.create(expenseCreationInput);
    
    return expenseCreationOutput;
  }

  public async getAllExpenses(): Promise<getExpensesOutput> {
    const allExpenses = await Expense.findAll({});

    return { expenses: allExpenses};
  }

  public async getMonthlyExpenses(month: number, year: number): Promise<getExpensesOutput> {
    const monthlyExpenses = await Expense.findAll({ where: { month, year}});

    return { expenses: monthlyExpenses }
  }

  public async updateExpense(id: string, expenseUpdateData: updateExpense) {
    const updateExpense = await Expense.update(expenseUpdateData, { where: { id } })
      .catch(err => {
        console.log('An error occurred when updating an Expense.');
        return err;
      });

    return updateExpense;
  }

  public async deleteExpense(id: string) {
    const deleteExpense = await Expense.destroy({ where: { id }});

    return deleteExpense;
  }
}