import { route, routeCallback, routePilsner } from './pilsner';

const mockServer = {
    post: jest.fn()
};

const mockBeers = {
    ipa: 14
};

const mockPostPilsnerTemperature = jest.fn();

describe('Pilsner route test', () => {
    it('Should set post route', () => {
        // @ts-ignore
        const cb = routeCallback(mockBeers);
        // @ts-ignore
        routePilsner(mockServer, mockBeers, cb);
        expect(mockServer.post).toHaveBeenCalledWith(route, cb);
    });

    it('Should return a callback', () => {
        // @ts-ignore
        const result = routeCallback(mockBeers);
        expect(typeof result).toEqual('function');
    });

    it('Should call postIpaTemperature', () => {
        // @ts-ignore
        routeCallback(mockBeers)({}, {}, mockPostPilsnerTemperature);
        expect(mockPostPilsnerTemperature).toHaveBeenCalledWith({}, {}, mockBeers);
    });
});
