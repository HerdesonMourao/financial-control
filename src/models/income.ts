export interface IIncome {
  id?: string;
  name: string;
  origin: string;
  value: number;
  received_in: Date;
  created_at?: Date;
  updated_at?: Date;
}
