import { Beer } from '../../../types/models';
import postPaleAleTemperature from './pale-ale';

const mockBeers = { a: 'a' };

const mockPostBeerTemperature = jest.fn();

describe('getTemps test', () => {
    it('should return beers and 200', () => {
        // @ts-ignore
        postPaleAleTemperature({}, {}, mockBeers, mockPostBeerTemperature);
        expect(mockPostBeerTemperature).toHaveBeenCalledWith({}, {}, mockBeers, Beer['Pale Ale']);
    });
});
