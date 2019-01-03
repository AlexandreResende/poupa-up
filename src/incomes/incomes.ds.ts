
export interface IBasicIncomeStructure {
  valueSpent: number;
  description: string;
  category: string;
  month: number;
  year: number;
}

export interface ICreateIncomeOutput extends IBasicIncomeStructure {
  id: string;
}

export interface ICreateIncomeInput extends IBasicIncomeStructure {
  id: string;
}

export interface IGetIncomesOutput {
  incomes: ICreateIncomeOutput[];
}

export interface IUpdateIncome {
  valueSpent?: number;
  description?: string;
  category?: string;
  month?: number;
  year?: number;
}
