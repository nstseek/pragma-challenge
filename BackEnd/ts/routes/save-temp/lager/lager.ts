import * as core from 'express-serve-static-core';
import postLagerTemperature from '../../../models/save-temp/lager/lager';
import { IBeers } from '../../../types/server.type';

export const route = '/lager';

export const routeCallback = (beers: IBeers, postTemp = postLagerTemperature) => (
    req: core.Request,
    res: core.Response
) => postTemp(req, res, beers);

export function routeLager(server: core.Express, beers: IBeers, callback2ord = routeCallback(beers)) {
    server.post(route, callback2ord);
}

export default routeLager;
