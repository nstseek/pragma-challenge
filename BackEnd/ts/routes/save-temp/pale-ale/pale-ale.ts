import * as core from 'express-serve-static-core';
import postPaleAleTemperature from '../../../models/save-temp/pale-ale/pale-ale';
import { IBeers } from '../../../types/server.type';

export const route = '/pale-ale';

export const routeCallback = (beers: IBeers) => (
    req: core.Request,
    res: core.Response,
    postTemp = postPaleAleTemperature
) => postTemp(req, res, beers);

export function routePaleAle(server: core.Express, beers: IBeers, callback2ord = routeCallback(beers)) {
    server.post(route, callback2ord);
}

export default routePaleAle;
