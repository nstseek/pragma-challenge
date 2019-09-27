import NodeServer, { exceptCallback, listenCallback } from './server';

const mockCors = jest.fn().mockReturnValue(0);

const mockServerUse = jest.fn();

const mockServerListen = jest.fn().mockReturnValue('ok');

const mockExpress = jest.fn().mockReturnValue({
    listen: mockServerListen,
    use: mockServerUse
});

const mockBodyParser = jest.fn().mockReturnValue(1);

const mockIpaRoutes = jest.fn();

const mockLagerRoutes = jest.fn();

const mockPaleAleRoutes = jest.fn();

const mockPilsnerRoutes = jest.fn();

const mockStoutRoutes = jest.fn();

const mockWheatBeerRoutes = jest.fn();

const mockRootRoutes = jest.fn();

const mockTempRoutes = jest.fn();

const port = 7000;

const mockCb = jest.fn().mockReturnValue(9);

const mockLogger = jest.fn();

describe('NodeServer test', () => {
    it('Should call routers and middlewares on server constructor', () => {
        // @ts-ignore
        const result = new NodeServer(
            // @ts-ignore
            mockExpress,
            mockCors,
            mockBodyParser,
            mockLogger,
            mockIpaRoutes,
            mockLagerRoutes,
            mockPaleAleRoutes,
            mockPilsnerRoutes,
            mockStoutRoutes,
            mockWheatBeerRoutes,
            mockRootRoutes,
            mockTempRoutes,
            port,
            mockCb
        );
        expect(mockExpress).toHaveBeenCalled();
        expect(mockCors).toHaveBeenCalled();
        expect(mockBodyParser).toHaveBeenCalledWith({ limit: '10mb' });
        expect(mockIpaRoutes).toHaveBeenCalled();
        expect(mockLagerRoutes).toHaveBeenCalled();
        expect(mockPaleAleRoutes).toHaveBeenCalled();
        expect(mockPilsnerRoutes).toHaveBeenCalled();
        expect(mockStoutRoutes).toHaveBeenCalled();
        expect(mockWheatBeerRoutes).toHaveBeenCalled();
        expect(mockRootRoutes).toHaveBeenCalled();
        expect(mockTempRoutes).toHaveBeenCalled();
    });

    it('Should call listen with port and internal cb', () => {
        // @ts-ignore
        const result = new NodeServer(
            // @ts-ignore
            mockExpress,
            mockCors,
            mockBodyParser,
            mockLogger,
            mockIpaRoutes,
            mockLagerRoutes,
            mockPaleAleRoutes,
            mockPilsnerRoutes,
            mockStoutRoutes,
            mockWheatBeerRoutes,
            mockRootRoutes,
            mockTempRoutes,
            port,
            mockCb
        );
        expect(mockServerListen).toHaveBeenCalledWith(port, result.cb);
    });

    it('Should set up middlewares with server.use', () => {
        const result = new NodeServer(
            // @ts-ignore
            mockExpress,
            mockCors,
            mockBodyParser,
            mockLogger,
            mockIpaRoutes,
            mockLagerRoutes,
            mockPaleAleRoutes,
            mockPilsnerRoutes,
            mockStoutRoutes,
            mockWheatBeerRoutes,
            mockRootRoutes,
            mockTempRoutes,
            port,
            mockCb
        );
        expect(result).toBeTruthy();
        expect(mockServerUse).toHaveBeenCalledWith(mockCors());
        expect(mockServerUse).toHaveBeenCalledWith(mockBodyParser());
        expect(mockServerUse).toHaveBeenCalledWith(mockLogger);
    });

    it('Should return a callback', () => {
        const cb = (value: boolean): any => (value ? 1 : 0);
        const result = listenCallback(7000, cb);
        expect(typeof result).toEqual('function');
    });

    it('Should call exceptCallback when err message is provided', () => {
        const cb = (value: boolean): any => (value ? 1 : 0);
        const mockExcept2Order = jest.fn();
        const mockExcept = jest.fn().mockReturnValue(mockExcept2Order);
        // @ts-ignore
        const result = listenCallback(7000, cb, mockExcept);
        result('error');
        expect(mockExcept).toHaveBeenCalledWith('error');
        expect(mockExcept2Order).toHaveBeenCalled();
    });

    it('Should throw error with err msg', () => {
        expect(exceptCallback('error')).toThrowError('error');
    });

    it('Should call setFunc when server is listening correctly', () => {
        const cb = jest.fn();
        const mockExcept2Order = jest.fn();
        const mockExcept = jest.fn().mockReturnValue(mockExcept2Order);
        // @ts-ignore
        const result = listenCallback(7000, cb, mockExcept);
        result('');
        expect(cb).toHaveBeenCalledWith(true);
    });

    it('Should initialize variables', () => {
        const result = new NodeServer(
            // @ts-ignore
            mockExpress,
            mockCors,
            mockBodyParser,
            mockLogger,
            mockIpaRoutes,
            mockLagerRoutes,
            mockPaleAleRoutes,
            mockPilsnerRoutes,
            mockStoutRoutes,
            mockWheatBeerRoutes,
            mockRootRoutes,
            mockTempRoutes,
            port,
            mockCb
        );
        expect(result.beers).toBeTruthy();
    });

    it('Should save serverHandler after listen is complete', () => {
        const result = new NodeServer(
            // @ts-ignore
            mockExpress,
            mockCors,
            mockBodyParser,
            mockLogger,
            mockIpaRoutes,
            mockLagerRoutes,
            mockPaleAleRoutes,
            mockPilsnerRoutes,
            mockStoutRoutes,
            mockWheatBeerRoutes,
            mockRootRoutes,
            mockTempRoutes,
            port,
            mockCb
        );
        expect(result.serverHandler).toEqual('ok');
    });
});
