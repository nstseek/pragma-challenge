import { route, routeCallback, routePaleAle } from './pale-ale';

const mockServer = {
    post: jest.fn()
};

const mockBeers = {
    ipa: 14
};

const mockPostPaleAleTemperature = jest.fn();

describe('Pale Ale route test', () => {
    it('Should set post route', () => {
        // @ts-ignore
        const cb = routeCallback(mockBeers);
        // @ts-ignore
        routePaleAle(mockServer, mockBeers, cb);
        expect(mockServer.post).toHaveBeenCalledWith(route, cb);
    });

    it('Should return a callback', () => {
        // @ts-ignore
        const result = routeCallback(mockBeers);
        expect(typeof result).toEqual('function');
    });

    it('Should call postIpaTemperature', () => {
        // @ts-ignore
        routeCallback(mockBeers)({}, {}, mockPostPaleAleTemperature);
        expect(mockPostPaleAleTemperature).toHaveBeenCalledWith({}, {}, mockBeers);
    });
});
