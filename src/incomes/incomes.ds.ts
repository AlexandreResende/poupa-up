
export interface ICreateIncomeRequest {
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface ICreateIncomeOutput {
  id: string,
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface ICreateIncomeInput {
  id: string,
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface IGetIncomesOutput {
  incomes: ICreateIncomeOutput[]
}

export interface IUpdateIncome {
  valueSpent?: number,
  description?: string,
  category?: string,
  month?: number,
  year?: number
}