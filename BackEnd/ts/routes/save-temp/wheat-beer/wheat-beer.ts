import * as core from 'express-serve-static-core';
import postWheatBeerTemperature from '../../../models/save-temp/wheat-beer/wheat-beer';
import { IBeers } from '../../../types/server.type';

export const route = '/wheat-beer';

export const routeCallback = (beers: IBeers) => (
    req: core.Request,
    res: core.Response,
    postTemp = postWheatBeerTemperature
) => postTemp(req, res, beers);

export function routeWheatBeer(server: core.Express, beers: IBeers, callback2ord = routeCallback(beers)) {
    server.post(route, callback2ord);
}

export default routeWheatBeer;
