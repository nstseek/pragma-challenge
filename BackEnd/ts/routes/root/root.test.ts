import { route, routeCallback, routeRoot } from './root';

const mockServer = {
    get: jest.fn()
};

const mockLog = jest.fn();

describe('root route test', () => {
    it('should set get route', () => {
        // @ts-ignore
        routeRoot(mockServer, mockLog);
        expect(mockServer.get).toHaveBeenCalledWith(route, routeCallback);
    });

    it('should call logStatus', () => {
        // @ts-ignore
        routeCallback({}, {}, mockLog);
        expect(mockLog).toHaveBeenCalledWith({}, {});
    });
});
