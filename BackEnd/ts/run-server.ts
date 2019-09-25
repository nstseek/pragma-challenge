import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import routeIpa from './routes/ipa/ipa';
import routeLager from './routes/lager/lager';
import routePaleAle from './routes/pale-ale/pale-ale';
import routePilsner from './routes/pilsner/pilsner';
import routeRoot from './routes/root/root';
import routeStout from './routes/stout/stout';
import routeTemps from './routes/temps/temps';
import routeWheatBeer from './routes/wheat-beer/wheat-beer';
import Server from './server';

// @ts-ignore
const server = new Server(
    express,
    cors,
    bodyParser,
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
