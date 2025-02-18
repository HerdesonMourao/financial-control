import type { Request, Response } from 'express';
import { CreateIncomeSchema } from '../dtos/incomeDTO.js';
import type { IncomeService } from '../services/incomeServices.js';

export class IncomeController {
  constructor(private readonly incomeServices: IncomeService) {}

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const validatedData = CreateIncomeSchema.parse(req.body);
      const income = await this.incomeServices.createIncome(validatedData);

      return res.status(201).json(income);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Unexpected error occurred' });
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const income = await this.incomeServices.getAllIncome();

      return res.status(200).json(income);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Unexpected error occured' });
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const income = await this.incomeServices.getIncomeById(id);

      return res.status(200).json(income);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Unexpected error occured' });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const validatedData = CreateIncomeSchema.parse(req.body);

      const income = await this.incomeServices.updateIncome(id, validatedData);

      return res.status(201).json(income);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Unexpected error occurred' });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const income = await this.incomeServices.deleteIncome(id);

      return res.status(200).json(income);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Unexpected error occurred' });
    }
  }
}
