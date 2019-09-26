import * as core from 'express-serve-static-core';
import postLagerTemperature from '../../../models/save-temp/lager/lager';
import { IBeers } from '../../../types/server.type';

const route = '/lager';

export default function routeLager(server: core.Express, beers: IBeers) {
    server.post(route, (req: core.Request, res: core.Response) => postLagerTemperature(req, res, beers));
}
