import * as core from 'express-serve-static-core';
import postPaleAleTemperature from '../../models/save-temp/pale-ale/pale-ale';
import { IBeers } from '../../types/server.type';

const route = '/pale-ale';

export default function routePaleAle(server: core.Express, beers: IBeers) {
    server.post(route, (req: core.Request, res: core.Response) => postPaleAleTemperature(req, res, beers));
}
