import { route, routeCallback, routeLager } from './lager';

const mockServer = {
    post: jest.fn()
};

const mockBeers = {
    ipa: 14
};

const mockPostLagerTemperature = jest.fn();

describe('Lager route test', () => {
    it('Should set post route', () => {
        // @ts-ignore
        const cb = routeCallback(mockBeers);
        // @ts-ignore
        routeLager(mockServer, mockBeers, cb);
        expect(mockServer.post).toHaveBeenCalledWith(route, cb);
    });

    it('Should return a callback', () => {
        // @ts-ignore
        const result = routeCallback(mockBeers);
        expect(typeof result).toEqual('function');
    });

    it('Should call postLagerTemperature', () => {
        // @ts-ignore
        routeCallback(mockBeers)({}, {}, mockPostLagerTemperature);
        expect(mockPostLagerTemperature).toHaveBeenCalledWith({}, {}, mockBeers);
    });
});
