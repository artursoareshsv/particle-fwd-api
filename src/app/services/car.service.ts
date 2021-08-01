import * as data from '../data/cars.json';
import { Car } from '../interfaces/car';

export class CarService {
    list({ skip, offset }: Record<string, number>): Car[] {
        const cars: Car[] = (data as any).default;
        return cars.slice(skip, offset);
    }

    findById(id: number, image: string): Partial<Car> {
        const cars: Car[] = (data as any).default;
        const foundCar = cars.find(car => car.id === id);

        return {
            id: foundCar.id,
            title: foundCar.title,
            imageUrl: foundCar.images.find(item => item.uri.split('/').pop() === image).uri
        };
    }
}
