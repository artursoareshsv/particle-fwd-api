import axios from 'axios';
import { CarService } from '../../app/services/car.service';

const api = 'http://localhost:3030/api/car';

test('should return a list of cars', async () => {
    const response = await axios.get(api, { params: { skip: 0, offset: 1 } });
    expect(response.status).toEqual(200);
    expect(response.data).toHaveLength(1);
});

test('should return a file by id', async () => {
    const carService = new CarService();
    const [firstCar] = carService.list({ skip: 0, offset: 1 });

    const response = await axios.get(`${api}/${firstCar.id}/${firstCar.images[0].uri.split('/').pop()}`)

    expect(response.status).toEqual(200);
    expect(response.data).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            imageUrl: expect.any(String)
        })
    );
});