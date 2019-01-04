
export interface IBasicExpenseStructure {
  value: number;
  description: string;
  category: string;
  month: number;
  year: number;
}

export interface ICreateExpenseOutput extends IBasicExpenseStructure {
  id: string;
}

export interface ICreateExpenseInput extends IBasicExpenseStructure {
  id: string;
}

export interface IGetExpensesOutput {
  expenses: ICreateExpenseOutput[];
}

export interface IUpdateExpense {
  value?: number;
  description?: string;
  category?: string;
  month?: number;
  year?: number;
}
