import * as core from 'express-serve-static-core';
import getTemperatures from '../../models/get-temp/getTemps';
import { IBeers } from '../../types/server.type';

const route = '/temps';

export default function routeTemps(server: core.Express, beers: IBeers) {
    server.get(route, (req: core.Request, res: core.Response) => getTemperatures(req, res, beers));
}
