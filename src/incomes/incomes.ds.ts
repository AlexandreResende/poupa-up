
import Category from "../enums/categories";

export interface IBasicIncomeStructure {
  value: number;
  description: string;
  category: Category;
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
  value?: number;
  description?: string;
  category?: Category;
  month?: number;
  year?: number;
}
