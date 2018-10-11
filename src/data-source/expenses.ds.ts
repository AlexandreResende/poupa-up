
export interface createExpenseRequest {
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface createExpenseOutput {
  id: string,
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface createExpenseInput {
  id: string,
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface getExpensesOutput {
  expenses: createExpenseOutput[]
}

export interface updateExpense {
  valueSpent?: number,
  description?: string,
  category?: string,
  month?: number,
  year?: number
}