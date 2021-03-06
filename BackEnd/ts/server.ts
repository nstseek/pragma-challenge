import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as core from 'express-serve-static-core';
import { Server } from 'http';
import logger from './models/middleware/middleware-log';
import routeTemps from './routes/get-temps/temps';
import routeRoot from './routes/root/root';
import routeLager from './routes/save-temp/lager/lager';
import routeIpa from './routes/save-temp/lager/lager';
import routePaleAle from './routes/save-temp/pale-ale/pale-ale';
import routePilsner from './routes/save-temp/pilsner/pilsner';
import routeStout from './routes/save-temp/stout/stout';
import routeWheatBeer from './routes/save-temp/wheat-beer/wheat-beer';
import { IBeers, IServer } from './types/server.type';

type SetFunc = (value: boolean) => any;

type ErrFunc = (err: string) => any;

export const exceptCallback = (err: string) => () => {
    throw new Error(err);
};

export const listenCallback = (port: number, setFunc: SetFunc, except = exceptCallback) => (
    err: string
) => {
    if (err) {
        except(err)();
    } else {
        console.log(`Listening on port ${port}`);
        setFunc(true);
    }
};

export default class NodeServer implements IServer {
    Express: typeof express;
    Cors: typeof cors;
    BodyParser: typeof bodyParser;
    server: core.Express;
    beers: IBeers;
    ready: boolean;
    serverHandler: Server;
    cbSetStatus: SetFunc;
    cb: ErrFunc;
    err: string;

    constructor(
        expressLib: typeof express,
        corsLib: typeof cors,
        bodyParserLib: typeof bodyParser,
        loggerMiddleware: typeof logger,
        ipaRoutes: typeof routeIpa,
        lagerRoutes: typeof routeLager,
        paleAleRoutes: typeof routePaleAle,
        pilsnerRoutes: typeof routePilsner,
        stoutRoutes: typeof routeStout,
        wheatBeerRoutes: typeof routeWheatBeer,
        rootRoutes: typeof routeRoot,
        tempsRoutes: typeof routeTemps,
        port: number,
        cb = listenCallback,
        cbStatus = (value: boolean) => (this.ready = value)
    ) {
        this.cbSetStatus = cbStatus;
        this.cb = cb(port, this.cbSetStatus);
        this.Cors = corsLib;
        this.ready = false;
        this.Express = expressLib;
        this.BodyParser = bodyParserLib;
        this.server = this.Express();
        this.server.use(this.Cors());
        this.server.use(this.BodyParser({ limit: '10mb' }));
        this.server.use(loggerMiddleware);
        this.serverHandler = this.server.listen(port, this.cb);
        this.beers = {
            ipa: 0,
            lager: 0,
            paleAle: 0,
            pilsner: 0,
            stout: 0,
            wheatBeer: 0
        };
        rootRoutes(this.server);
        ipaRoutes(this.server, this.beers);
        lagerRoutes(this.server, this.beers);
        paleAleRoutes(this.server, this.beers);
        pilsnerRoutes(this.server, this.beers);
        stoutRoutes(this.server, this.beers);
        wheatBeerRoutes(this.server, this.beers);
        tempsRoutes(this.server, this.beers);
    }
}
