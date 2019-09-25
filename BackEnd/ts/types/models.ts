import * as core from 'express-serve-static-core';

export interface IJSONMessage {
    message: string;
}

export interface IResponse<T> extends core.Response {
    json(arg0: T): any;
}

export interface IRequest extends core.Request {
    body: {
        temperature: number;
    };
}

export enum Beer {
    'Pale Ale' = 'paleAle',
    Lager = 'lager',
    IPA = 'ipa',
    Stout = 'stout',
    Pilsner = 'pilsner',
    'Wheat beer' = 'wheatBeer'
}
