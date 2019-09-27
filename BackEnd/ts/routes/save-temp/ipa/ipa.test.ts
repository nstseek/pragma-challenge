import { route, routeCallback, routeIpa } from './ipa';

const mockServer = {
    post: jest.fn()
};

const mockBeers = {
    ipa: 14
};

const mockPostIpaTemperature = jest.fn();

describe('ipa route test', () => {
    it('should set post route', () => {
        // @ts-ignore
        const cb = routeCallback(mockBeers);
        // @ts-ignore
        routeIpa(mockServer, mockBeers, cb);
        expect(mockServer.post).toHaveBeenCalledWith(route, cb);
    });

    it('should return a callback', () => {
        // @ts-ignore
        const result = routeCallback(mockBeers);
        expect(typeof result).toEqual('function');
    });

    it('should call postIpaTemperature', () => {
        // @ts-ignore
        routeCallback(mockBeers)({}, {}, mockPostIpaTemperature);
        expect(mockPostIpaTemperature).toHaveBeenCalledWith({}, {}, mockBeers);
    });
});
