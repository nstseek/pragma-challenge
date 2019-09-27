import { Beer } from '../../../types/models';
import postLagerTemperature from './lager';

const mockBeers = { a: 'a' };

const mockPostBeerTemperature = jest.fn();

describe('getTemps test', () => {
    it('should return beers and 200', () => {
        // @ts-ignore
        postLagerTemperature({}, {}, mockBeers, mockPostBeerTemperature);
        expect(mockPostBeerTemperature).toHaveBeenCalledWith({}, {}, mockBeers, Beer.Lager);
    });
});
