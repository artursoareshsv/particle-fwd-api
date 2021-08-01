import { Request, Response, Router } from 'express';
import { CarService } from '../services/car.service';

export class CarController {
    public router: Router;
    private carService: CarService;

    constructor() {
        this.router = Router();
        this.carService = new CarService();
        this.routes();
    }

    private routes(): void {
        this.router.get('/car', this.list);
        this.router.get('/car/:id/:image', this.findById);
    }

    public list = (req: Request, res: Response): Response => {
        const pagination = req.query as unknown as Record<string, number>;
        const cars = this.carService.list(pagination);

        return res.status(200).send(cars);
    };

    public findById = (req: Request, res: Response): Response => {
        const cars = this.carService.findById(Number(req.params.id), String(req.params.image));

        return res.status(200).send(cars);
    };
}
