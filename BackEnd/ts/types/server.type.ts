import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as core from 'express-serve-static-core';

export interface IServer {
    Express: typeof express;
    Cors: typeof cors;
    BodyParser: typeof bodyParser;
    server: core.Express;
    beers: IBeers;
}

export interface IBeers {
    pilsner: number;
    ipa: number;
    lager: number;
    stout: number;
    wheatBeer: number;
    paleAle: number;
}
