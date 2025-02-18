import { Router } from 'express';
import { IncomeController } from '../controllers/incomeController.js';
import { IncomeRepository } from '../repositories/implementations/incomeRepository.js';
import { IncomeService } from '../services/incomeServices.js';

const routes = Router();

const incomeRepository = new IncomeRepository();
const incomeService = new IncomeService(incomeRepository);
const incomeController = new IncomeController(incomeService);

routes.post('/income', (req, res) => {
  incomeController.create(req, res);
});

routes.get('/income', (req, res) => {
  incomeController.getAll(req, res);
});

routes.get('/income/:id', (req, res) => {
  incomeController.getById(req, res);
});

routes.put('/income/:id', (req, res) => {
  incomeController.update(req, res);
});

routes.delete('/income/:id', (req, res) => {
  incomeController.delete(req, res);
});

export default routes;
