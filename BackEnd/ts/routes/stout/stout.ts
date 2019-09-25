import * as core from 'express-serve-static-core';
import postStoutTemperature from '../../models/save-temp/stout/stout';
import { IBeers } from '../../types/server.type';

const route = '/stout';

export default function routeStout(server: core.Express, beers: IBeers) {
    server.post(route, (req: core.Request, res: core.Response) => postStoutTemperature(req, res, beers));
}
