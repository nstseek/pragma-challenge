import { route, routeCallback, routeStout } from './stout';

const mockServer = {
    post: jest.fn()
};

const mockBeers = {
    ipa: 14
};

const mockPostStoutTemperature = jest.fn();

describe('Stout route test', () => {
    it('Should set post route', () => {
        // @ts-ignore
        const cb = routeCallback(mockBeers);
        // @ts-ignore
        routeStout(mockServer, mockBeers, cb);
        expect(mockServer.post).toHaveBeenCalledWith(route, cb);
    });

    it('Should return a callback', () => {
        // @ts-ignore
        const result = routeCallback(mockBeers);
        expect(typeof result).toEqual('function');
    });

    it('Should call postIpaTemperature', () => {
        // @ts-ignore
        routeCallback(mockBeers)({}, {}, mockPostStoutTemperature);
        expect(mockPostStoutTemperature).toHaveBeenCalledWith({}, {}, mockBeers);
    });
});
