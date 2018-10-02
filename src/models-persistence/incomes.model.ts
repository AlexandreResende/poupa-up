
import { 
  createIncomeInput,
  createIncomeRequest,
  createIncomeOutput,
  getIncomesOutput } from '../data-source/incomes.ds';
import { Income } from '../models/income.model';

export class IncomeService {

  constructor() {}

  public async createIncome(createIncomeData: createIncomeRequest): Promise<createIncomeOutput> {
    const incomeCreationInput: createIncomeInput = {
      id: '1',
      ...createIncomeData,
    }
    const incomeCreationOutput: createIncomeOutput = await Income.create(incomeCreationInput);
    
    return incomeCreationOutput;
  }

  public async getAllIncomes(): Promise<getIncomesOutput> {
    const allIncomes = await Income.findAll({});

    return { incomes: allIncomes};
  }

  public async getMonthlyIncomes(month: number, year: number): Promise<getIncomesOutput> {
    const monthlyIncomes = await Income.findAll({ where: { month, year}});

    return { incomes: monthlyIncomes }
  }
}