import * as core from 'express-serve-static-core';
import postStoutTemperature from '../../../models/save-temp/stout/stout';
import { IBeers } from '../../../types/server.type';

export const route = '/stout';

export const routeCallback = (beers: IBeers) => (
    req: core.Request,
    res: core.Response,
    postTemp = postStoutTemperature
) => postTemp(req, res, beers);

export function routeStout(server: core.Express, beers: IBeers, callback2ord = routeCallback(beers)) {
    server.post(route, callback2ord);
}

export default routeStout;
