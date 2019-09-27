import getTemperatures from './getTemps';

const mockRes = {
    json: jest.fn(),
    status: jest.fn()
};

const mockBeers = { a: 'a' };

describe('getTemps test', () => {
    it('should return beers and 200', () => {
        // @ts-ignore
        getTemperatures({}, mockRes, mockBeers);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(mockBeers);
    });
});
