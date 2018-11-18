
export interface IBasicExpenseStructure {
  valueSpent: number,
  description: string,
  category: string,
  month: number,
  year: number
}

export interface ICreateExpenseRequest extends IBasicExpenseStructure{ }

export interface ICreateExpenseOutput extends IBasicExpenseStructure {
  id: string,
}

export interface ICreateExpenseInput extends IBasicExpenseStructure {
  id: string,
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