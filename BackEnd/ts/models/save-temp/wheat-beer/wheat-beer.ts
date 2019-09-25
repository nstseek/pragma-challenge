import * as BodyTypes from '../../../types/models';
import { IBeers } from '../../../types/server.type';
import postBeerTemperature from '../saveTemp';

const postWheatBeerTemperature = (
    req: BodyTypes.IRequest,
    res: BodyTypes.IResponse<BodyTypes.IJSONMessage>,
    beers: IBeers
) => postBeerTemperature(req, res, beers, BodyTypes.Beer['Wheat beer']);

export default postWheatBeerTemperature;
