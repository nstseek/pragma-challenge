import * as core from 'express-serve-static-core';
import postWheatBeerTemperature from '../../../models/save-temp/wheat-beer/wheat-beer';
import { IBeers } from '../../../types/server.type';

const route = '/wheat-beer';

export default function routeWheatBeer(server: core.Express, beers: IBeers) {
    server.post(route, (req: core.Request, res: core.Response) => postWheatBeerTemperature(req, res, beers));
}
