import * as core from 'express-serve-static-core';
import logStatus from '../../models/root/root';

export const route = '/';

export const routeCallback = (req: core.Request, res: core.Response, log = logStatus) => log(req, res);

export function routeRoot(server: core.Express) {
    server.get(route, routeCallback);
}

export default routeRoot;
