import { Beer } from '../../../types/models';
import postWheatBeerTemperature from './wheat-beer';

const mockBeers = { a: 'a' };

const mockPostBeerTemperature = jest.fn();

describe('getTemps test', () => {
    it('should return beers and 200', () => {
        // @ts-ignore
        postWheatBeerTemperature({}, {}, mockBeers, mockPostBeerTemperature);
        expect(mockPostBeerTemperature).toHaveBeenCalledWith({}, {}, mockBeers, Beer['Wheat beer']);
    });
});
