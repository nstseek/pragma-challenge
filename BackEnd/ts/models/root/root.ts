import * as BodyTypes from '../../types/models';

// @ts-ignore
const logStatus = (req: BodyTypes.IRequest, res: BodyTypes.IResponse<BodyTypes.IJSONMessage>) => {
    res.status(200);
    res.json({ message: 'Server listening' });
};

export default logStatus;
