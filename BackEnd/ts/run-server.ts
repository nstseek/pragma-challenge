// this file does not have tests since it's only a starter, it does not need a test

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import logger from './models/middleware/middleware-log';
import routeTemps from './routes/get-temps/temps';
import routeRoot from './routes/root/root';
import routeIpa from './routes/save-temp/ipa/ipa';
import routeLager from './routes/save-temp/lager/lager';
import routePaleAle from './routes/save-temp/pale-ale/pale-ale';
import routePilsner from './routes/save-temp/pilsner/pilsner';
import routeStout from './routes/save-temp/stout/stout';
import routeWheatBeer from './routes/save-temp/wheat-beer/wheat-beer';
import NodeServer from './server';

// @ts-ignore
const server = new NodeServer(
    express,
    cors,
    bodyParser,
    logger,
    routeIpa,
    routeLager,
    routePaleAle,
    routePilsner,
    routeStout,
    routeWheatBeer,
    routeRoot,
    routeTemps,
    7000
);
