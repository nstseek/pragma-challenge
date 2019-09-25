import * as BodyTypes from '../../types/models';
import { IBeers } from '../../types/server.type';

const postBeerTemperature = (
    req: BodyTypes.IRequest,
    res: BodyTypes.IResponse<BodyTypes.IJSONMessage>,
    beers: IBeers,
    beer: BodyTypes.Beer
) => {
    if (!req.body.temperature && req.body.temperature !== 0) {
        res.status(400);
        res.json({ message: 'Bad request - missing temperature value' });
    } else if (typeof req.body.temperature !== 'number') {
        res.status(400);
        res.json({ message: 'Bad request - wrong type on temperature value' });
    } else {
        beers[beer] = req.body.temperature;
        res.status(200);
        res.json({ message: 'OK' });
    }
};

export default postBeerTemperature;
