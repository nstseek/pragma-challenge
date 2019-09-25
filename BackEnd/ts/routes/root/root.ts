import * as core from 'express-serve-static-core';
import logStatus from '../../models/root/root';

const route = '/';

export default function routeRoot(server: core.Express) {
    server.get(route, (req: core.Request, res: core.Response) => logStatus(req, res));
}
