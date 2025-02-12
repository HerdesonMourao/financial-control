import { prismaService } from '../../databases/prisma.js';
import type { IIncome } from '../../models/income.js';
import type { IIncomeRepository } from '../IincomeRepository.js';

export class IncomeRepository implements IIncomeRepository {
  async create(income: IIncome): Promise<IIncome> {
    return await prismaService.prisma.income.create({ data: income });
  }

  async findAll(): Promise<IIncome[]> {
    return await prismaService.prisma.income.findMany();
  }

  async findById(id: string): Promise<IIncome> {
    return await prismaService.prisma.income.findUnique({ where: { id: id } });
  }

  async update(id: string, income: IIncome): Promise<IIncome> {
    return await prismaService.prisma.income.update({
      where: { id: id },
      data: income,
    });
  }

  async delete(id: string): Promise<void> {
    await prismaService.prisma.income.delete({ where: { id: id } });
  }
}
