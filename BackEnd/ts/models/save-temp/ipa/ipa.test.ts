import { Beer } from '../../../types/models';
import postIpaTemperature from './ipa';

const mockBeers = { a: 'a' };

const mockPostBeerTemperature = jest.fn();

describe('getTemps test', () => {
    it('should return beers and 200', () => {
        // @ts-ignore
        postIpaTemperature({}, {}, mockBeers, mockPostBeerTemperature);
        expect(mockPostBeerTemperature).toHaveBeenCalledWith({}, {}, mockBeers, Beer.IPA);
    });
});
