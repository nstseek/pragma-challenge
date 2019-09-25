import * as BodyTypes from '../../types/models';

// @ts-ignore
function logger(req: BodyTypes.IRequest, res: BodyTypes.IResponse<BodyTypes.IJSONMessage>, next: any) {
    console.log('///// Request /////');
    console.log(req.ip);
    console.log(req.method);
    console.log(req.path);
    console.log(new Date().toLocaleString());
    next();
}

export default logger;
