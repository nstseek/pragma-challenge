import * as core from 'express-serve-static-core';
import postPilsnerTemperature from '../../models/save-temp/pilsner/pilsner';
import { IBeers } from '../../types/server.type';

const route = '/pilsner';

export default function routePilsner(server: core.Express, beers: IBeers) {
    server.post(route, (req: core.Request, res: core.Response) => postPilsnerTemperature(req, res, beers));
}
