import cors from 'cors';
import express, { type Express } from 'express';
import routes from './routes/index.js';

class App {
  public readonly app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/api', routes);
  }
}

export default new App().app;
