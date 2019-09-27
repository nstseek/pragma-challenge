import * as core from 'express-serve-static-core';
import logStatus from '../../models/root/root';

export const route = '/';

export const routeCallback = (log = logStatus) => (req: core.Request, res: core.Response) => log(req, res);

export function routeRoot(server: core.Express, cb = routeCallback(logStatus)) {
    server.get(route, cb);
}

export default routeRoot;
