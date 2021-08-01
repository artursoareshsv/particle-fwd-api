import cors from 'cors';
import express, { Application } from 'express';
import { join } from 'path';
import { CarController } from './controllers/car.controller';

export default class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('/api', new CarController().router);
        this.app.use('/api/assets', express.static(join(process.cwd(), 'src', 'assets')));
    }
}
