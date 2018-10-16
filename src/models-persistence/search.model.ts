
import { ISearchOutput } from '../data-source/searches.ds';

import { Expense } from '../models/Expense.model';
import { Income } from '../models/income.model';


export class SearchService {

  constructor() {}

  public async searchByCategory(category: string): Promise<ISearchOutput> {
    const expensesByCategory = await Expense.findAll({ where: { category }});
    const incomesByCategory = await Income.findAll({ where: { category }});

    return {
      expenses: expensesByCategory,
      incomes: incomesByCategory,
    };
  }

  public async searchByPeriod(month: number, year: number): Promise<ISearchOutput> {
    const expensesByPeriod = await Expense.findAll({ where: { month, year }});
    const incomesByPeriod = await Income.findAll({ where: { month, year }});

    return {
      expenses: expensesByPeriod,
      incomes: incomesByPeriod,
    };
  }
}
