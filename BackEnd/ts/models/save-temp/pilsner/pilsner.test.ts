import { Beer } from '../../../types/models';
import postPilsnerTemperature from './pilsner';

const mockBeers = { a: 'a' };

const mockPostBeerTemperature = jest.fn();

describe('getTemps test', () => {
    it('should return beers and 200', () => {
        // @ts-ignore
        postPilsnerTemperature({}, {}, mockBeers, mockPostBeerTemperature);
        expect(mockPostBeerTemperature).toHaveBeenCalledWith({}, {}, mockBeers, Beer.Pilsner);
    });
});
