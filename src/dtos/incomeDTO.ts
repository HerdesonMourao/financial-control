import { z } from 'zod';

export const CreateIncomeSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  origin: z.string({ required_error: 'Origin is required' }),
  value: z.number({ required_error: 'Value is required' }).positive(),
  received_in: z.date({ required_error: 'Received in is required' }),
});

export type CreateIncomeDTO = z.infer<typeof CreateIncomeSchema>;
