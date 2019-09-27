import * as core from 'express-serve-static-core';
import getTemperatures from '../../models/get-temp/getTemps';
import { IBeers } from '../../types/server.type';

export const route = '/temps';

export const routeCallback = (beers: IBeers) => (req: core.Request, res: core.Response, getTemp = getTemperatures) =>
    getTemp(req, res, beers);

export function routeTemps(server: core.Express, beers: IBeers, callback2ord = routeCallback(beers)) {
    server.get(route, callback2ord);
}

export default routeTemps;
