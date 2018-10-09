
import { 
  createIncomeInput,
  createIncomeRequest,
  createIncomeOutput,
  updateIncome,
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

  public async updateIncome(id: string, incomeUpdateData: updateIncome) {
    const updateIncome = await Income.update(incomeUpdateData, { where: { id } })
      .catch(err => {
        console.log('An erro occurred when updating an income.');
        return err;
      });

    return updateIncome;
  }

  public async deleteIncome(id: string) {
    const deleteIncome = await Income.destroy({ where: { id }});

    return deleteIncome;
  }
}