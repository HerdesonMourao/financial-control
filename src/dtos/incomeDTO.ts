import { z } from 'zod';

export const CreateIncomeSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  origin: z.string({ required_error: 'Origin is required' }),
  value: z.number({ required_error: 'Value is required' }).positive(),
});

export type CreateIncomeDTO = z.infer<typeof CreateIncomeSchema>;
