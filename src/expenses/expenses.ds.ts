
export interface ICreateExpenseRequest {
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface ICreateExpenseOutput {
  id: string,
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface ICreateExpenseInput {
  id: string,
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface IGetExpensesOutput {
  expenses: ICreateExpenseOutput[]
}

export interface IUpdateExpense {
  valueSpent?: number,
  description?: string,
  category?: string,
  month?: number,
  year?: number
}