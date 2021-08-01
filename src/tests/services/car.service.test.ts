import { CarService } from '../../app/services/car.service';

test('should return a list of cars', () => {
    const carService = new CarService();
    const cars = carService.list({ skip: 0, offset: 1 });
    expect(cars).toBeDefined();
    expect(cars).toHaveLength(1);
});

test('should return a file by id', () => {
    const carService = new CarService();
    const [firstCar] = carService.list({ skip: 0, offset: 1 });

    const car = carService.findById(firstCar.id, firstCar.images[0].uri.split('/').pop());
    expect(car).toBeDefined();
    expect(car).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            imageUrl: expect.any(String)
        })
    );
});
