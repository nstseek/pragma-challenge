import * as BodyTypes from '../../../types/models';
import { IBeers } from '../../../types/server.type';
import postBeerTemperature from '../saveTemp';

const postStoutTemperature = (
    req: BodyTypes.IRequest,
    res: BodyTypes.IResponse<BodyTypes.IJSONMessage>,
    beers: IBeers,
    postBeer = postBeerTemperature
) => postBeer(req, res, beers, BodyTypes.Beer.Stout);

export default postStoutTemperature;
