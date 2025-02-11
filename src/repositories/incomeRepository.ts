import type { IIncome } from '../models/income.js';

export interface IncomeRepository {
  create(income: IIncome): Promise<IIncome>;
  update(id: string, income: IIncome): Promise<IIncome>;
  findAll(): Promise<IIncome[]>;
  findById(id: string): Promise<IIncome>;
  delete(id: string): Promise<void>;
}
