import express from 'express';
import logStatus from './root';

const mockRes = {
    ...express.response,
    json: jest.fn(),
    status: jest.fn()
};

describe('root testes', () => {
    it('should return ok 200', () => {
        // @ts-ignore
        logStatus({}, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Server listening' });
    });
});
