import * as BodyTypes from '../../../types/models';
import { IBeers } from '../../../types/server.type';
import postBeerTemperature from '../saveTemp';

const postPilsnerTemperature = (
    req: BodyTypes.IRequest,
    res: BodyTypes.IResponse<BodyTypes.IJSONMessage>,
    beers: IBeers
) => postBeerTemperature(req, res, beers, BodyTypes.Beer.Pilsner);

export default postPilsnerTemperature;
