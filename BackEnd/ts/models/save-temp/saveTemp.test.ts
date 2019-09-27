import { Beer } from '../../types/models';
import postBeerTemperature from './saveTemp';

const mockBeers = { ipa: -15 };

const mockBeer = Beer.IPA;

describe('getTemps test', () => {
    it('should return 400 with temperature missing error message', () => {
        const mockRes = {
            json: jest.fn(),
            status: jest.fn()
        };
        const mockReq: { body: any } = {
            body: {
                temperature: null
            }
        };
        // @ts-ignore
        postBeerTemperature(mockReq, mockRes, mockBeers, mockBeer);
        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Bad request - missing temperature value' });
    });

    it('should return 400 with wrong temperature type', () => {
        const mockRes = {
            json: jest.fn(),
            status: jest.fn()
        };
        const mockReq = {
            body: {
                temperature: 'test'
            }
        };
        // @ts-ignore
        postBeerTemperature(mockReq, mockRes, mockBeers, mockBeer);
        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Bad request - wrong type on temperature value' });
    });

    it('should save temperature = 0 on correct beer', () => {
        const mockRes = {
            json: jest.fn(),
            status: jest.fn()
        };
        const mockReq = {
            body: {
                temperature: 0
            }
        };
        // @ts-ignore
        postBeerTemperature(mockReq, mockRes, mockBeers, mockBeer);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'OK' });
        expect(mockBeers.ipa).toEqual(0);
    });

    it('should save temperature != 0 on correct beer', () => {
        const mockRes = {
            json: jest.fn(),
            status: jest.fn()
        };
        const mockReq = {
            body: {
                temperature: 12
            }
        };
        // @ts-ignore
        postBeerTemperature(mockReq, mockRes, mockBeers, mockBeer);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'OK' });
        expect(mockBeers.ipa).toEqual(12);
    });
});
