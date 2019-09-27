import * as core from 'express-serve-static-core';
import postPilsnerTemperature from '../../../models/save-temp/pilsner/pilsner';
import { IBeers } from '../../../types/server.type';

export const route = '/pilsner';

export const routeCallback = (beers: IBeers) => (
    req: core.Request,
    res: core.Response,
    postTemp = postPilsnerTemperature
) => postTemp(req, res, beers);

export function routePilsner(server: core.Express, beers: IBeers, callback2ord = routeCallback(beers)) {
    server.post(route, callback2ord);
}

export default routePilsner;
