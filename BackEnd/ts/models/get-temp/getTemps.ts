import * as BodyTypes from '../../types/models';
import { IBeers } from '../../types/server.type';

// @ts-ignore
const getTemperatures = (req: BodyTypes.IRequest, res: BodyTypes.IResponse<IBeers>, beers: IBeers) => {
    res.status(200);
    res.json(beers);
};

export default getTemperatures;
