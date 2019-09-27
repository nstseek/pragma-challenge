import { route, routeCallback, routeTemps } from './temps';

const mockServer = {
    get: jest.fn()
};

const mockBeers = {
    ipa: 3
};

const mockGetTemps = jest.fn();

describe('temps route test', () => {
    it('should set get route', () => {
        // @ts-ignore
        const cb = routeCallback(mockBeers);
        // @ts-ignore
        routeTemps(mockServer, mockBeers, cb);
        // @ts-ignore
        expect(mockServer.get).toHaveBeenCalledWith(route, cb);
    });

    it('should return a callback function', () => {
        // @ts-ignore
        const result = routeCallback(mockBeers);
        expect(typeof result).toEqual('function');
    });

    it('should call getTemp', () => {
        // @ts-ignore
        const result = routeCallback(mockBeers)({}, {}, mockGetTemps);
        expect(mockGetTemps).toHaveBeenCalledWith({}, {}, mockBeers);
    });
});
