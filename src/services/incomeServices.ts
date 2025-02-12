import type { IIncome } from '../models/income.js';
import type { IncomeRepository } from '../repositories/implementations/incomeRepository.js';

export class IncomeService {
  constructor(private readonly incomeRepository: IncomeRepository) {}

  async createIncome(income: IIncome): Promise<IIncome> {
    return await this.incomeRepository.create(income);
  }

  async getAllIncome(): Promise<IIncome[]> {
    return await this.incomeRepository.findAll();
  }

  async getIncomeById(id: string): Promise<IIncome> {
    return await this.incomeRepository.findById(id);
  }

  async updateIncome(id: string, income: IIncome): Promise<IIncome> {
    return await this.incomeRepository.update(id, income);
  }

  async deleteIncome(id: string): Promise<void> {
    await this.incomeRepository.delete(id);
  }
}
