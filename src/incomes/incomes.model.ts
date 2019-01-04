
import { Income } from "../models/income.model";
import {
  IBasicIncomeStructure,
  ICreateIncomeInput,
  ICreateIncomeOutput,
  IGetIncomesOutput,
  IUpdateIncome,
} from "./incomes.ds";

import { v4 as uuidv4 } from "uuid";

export class IncomeService {
  public async createIncome(createIncomeData: IBasicIncomeStructure): Promise<ICreateIncomeOutput> {
    const incomeCreationInput: ICreateIncomeInput = {
      id: uuidv4(),
      ...createIncomeData,
    };
    const incomeCreationOutput: ICreateIncomeOutput = await Income.create(incomeCreationInput);

    return incomeCreationOutput;
  }

  public async getAllIncomes(): Promise<IGetIncomesOutput> {
    const allIncomes = await Income.findAll({});

    return { incomes: allIncomes };
  }

  public async getMonthlyIncomes(month: number, year: number): Promise<IGetIncomesOutput> {
    const monthlyIncomes = await Income.findAll({ where: { month, year}});

    return { incomes: monthlyIncomes };
  }

  public async updateIncome(id: string, incomeUpdateData: IUpdateIncome) {
    const updateIncome = await Income.update(incomeUpdateData, { where: { id } })
      .catch((err) => {
        return err;
      });

    return updateIncome;
  }

  public async deleteIncome(id: string) {
    const deleteIncome = await Income.destroy({ where: { id }});

    return deleteIncome;
  }
}
