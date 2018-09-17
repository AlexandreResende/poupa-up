
import { Income, createIncomeInput, createIncomeRequest, createIncomeOutput } from '../models/incomes.db';

export class IncomeService {

  async createIncome(createIncomeData: createIncomeRequest): Promise<createIncomeOutput> {
    const incomeCreationInput: createIncomeInput = {
      id: '1',
      ...createIncomeData,
    }
    const incomeCreationOutput: createIncomeOutput = await Income.create(incomeCreationInput);
    
    return incomeCreationOutput;
  }

}