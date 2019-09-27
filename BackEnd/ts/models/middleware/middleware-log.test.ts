import logger from './middleware-log';

const mockReq = {
    ip: 'ip',
    method: 'method',
    path: 'path'
};

const next = jest.fn();

describe('middleware tests', () => {
    it('should call next without arguments', () => {
        // @ts-ignore
        logger(mockReq, {}, next);
        expect(next).toHaveBeenCalledWith();
    });
});
