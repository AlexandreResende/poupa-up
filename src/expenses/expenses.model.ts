
import { Expense } from "../models/expense.model";
import {
  IBasicExpenseStructure,
  ICreateExpenseInput,
  ICreateExpenseOutput,
  IGetExpensesOutput,
  IUpdateExpense,
} from "./expenses.ds";

import { v4 as uuidv4 } from "uuid";

export class ExpenseService {
  public async createExpense(createExpenseData: IBasicExpenseStructure): Promise<ICreateExpenseOutput> {
    const expenseCreationInput: ICreateExpenseInput = {
      id: uuidv4(),
      ...createExpenseData,
    };
    const expenseCreationOutput: ICreateExpenseOutput = await Expense.create(expenseCreationInput);

    return expenseCreationOutput;
  }

  public async getAllExpenses(): Promise<IGetExpensesOutput> {
    const allExpenses = await Expense.findAll({});

    return { expenses: allExpenses};
  }

  public async getMonthlyExpenses(month: number, year: number): Promise<IGetExpensesOutput> {
    const monthlyExpenses = await Expense.findAll({ where: { month, year}});

    return { expenses: monthlyExpenses };
  }

  public async updateExpense(id: string, expenseUpdateData: IUpdateExpense) {
    const updateExpense = await Expense.update(expenseUpdateData, { where: { id } })
      .catch((err) => {
        return err;
      });

    return updateExpense;
  }

  public async deleteExpense(id: string) {
    const deleteExpense = await Expense.destroy({ where: { id }});

    return deleteExpense;
  }
}
