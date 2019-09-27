import * as core from 'express-serve-static-core';
import postIpaTemperature from '../../../models/save-temp/ipa/ipa';
import { IBeers } from '../../../types/server.type';

export const route = '/ipa';

export const routeCallback = (beers: IBeers) => (
    req: core.Request,
    res: core.Response,
    postTemp = postIpaTemperature
) => postTemp(req, res, beers);

export function routeIpa(server: core.Express, beers: IBeers, callback2ord = routeCallback(beers)) {
    server.post(route, callback2ord);
}

export default routeIpa;
