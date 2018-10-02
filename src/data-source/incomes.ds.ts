
export interface createIncomeRequest {
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface createIncomeOutput {
  id: string,
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface createIncomeInput {
  id: string,
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface getIncomesOutput {
  incomes: createIncomeOutput[]
}