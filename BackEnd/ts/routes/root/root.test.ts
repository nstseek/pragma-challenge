import { route, routeCallback, routeRoot } from './root';

const mockServer = {
    get: jest.fn()
};

const mockLog = jest.fn();

describe('root route test', () => {
    it('should set get route', () => {
        const routeCb = routeCallback(mockLog);
        // @ts-ignore
        routeRoot(mockServer, routeCb);
        expect(mockServer.get).toHaveBeenCalledWith(route, routeCb);
    });

    it('should call logStatus', () => {
        // @ts-ignore
        routeCallback(mockLog)({}, {});
        expect(mockLog).toHaveBeenCalledWith({}, {});
    });
});
