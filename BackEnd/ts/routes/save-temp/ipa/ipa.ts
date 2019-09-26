import * as core from 'express-serve-static-core';
import postIpaTemperature from '../../../models/save-temp/ipa/ipa';
import { IBeers } from '../../../types/server.type';

const route = '/ipa';

export default function routeIpa(server: core.Express, beers: IBeers) {
    server.post(route, (req: core.Request, res: core.Response) => postIpaTemperature(req, res, beers));
}
