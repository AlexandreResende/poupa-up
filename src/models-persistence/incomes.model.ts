
import { createIncomeInput, createIncomeRequest, createIncomeOutput } from '../data-source/incomes.ds';
import { Income } from '../models/income.model';

export class IncomeService {

  constructor() {}

  public async createIncome(createIncomeData: createIncomeRequest): Promise<createIncomeOutput> {
    const incomeCreationInput: createIncomeInput = {
      id: '1',
      ...createIncomeData,
    }
    //const incomeCreationOutput: createIncomeOutput = await Income.create(incomeCreationInput);
    
    //return incomeCreationOutput;
    return {
      id: '1',
      valueSpent: 100,
      description: 'sidhfd',
      category: 'ahsdiauhd',
    };
  }

}