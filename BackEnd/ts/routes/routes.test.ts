// This test is a general test for all routes
// It does depend on models, it is expecting an output from each route
// So, if you change what a route outputs, this test will fail

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';
import logger from '../models/middleware/middleware-log';
import routeTemps from '../routes/get-temps/temps';
import routeRoot from '../routes/root/root';
import routeIpa from '../routes/save-temp/ipa/ipa';
import routeLager from '../routes/save-temp/lager/lager';
import routePaleAle from '../routes/save-temp/pale-ale/pale-ale';
import routePilsner from '../routes/save-temp/pilsner/pilsner';
import routeStout from '../routes/save-temp/stout/stout';
import routeWheatBeer from '../routes/save-temp/wheat-beer/wheat-beer';
import NodeServer from '../server';

it('Should get-temps on /temps route using GET', async () => {
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
    let response = await fetch(`http://localhost:7000/temps`);
    response = await response.json();
    server.serverHandler.close();
    expect(response).toEqual({
        ipa: 0,
        lager: 0,
        paleAle: 0,
        pilsner: 0,
        stout: 0,
        wheatBeer: 0
    });
});

it('Should get OK on / route using GET', async () => {
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
    let response = await fetch(`http://localhost:7000/`);
    response = await response.json();
    server.serverHandler.close();
    expect(response).toEqual({ message: 'Server listening' });
});

it('Should save IPA temps on /ipa route using POST and return OK', async () => {
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
    let response = await fetch(`http://localhost:7000/ipa`, {
        body: JSON.stringify({
            temperature: 9
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
    });
    response = await response.json();
    let response2 = await fetch(`http://localhost:7000/temps`);
    response2 = await response2.json();
    server.serverHandler.close();
    expect(response).toEqual({ message: 'OK' });
    expect(response2).toEqual({
        ipa: 9,
        lager: 0,
        paleAle: 0,
        pilsner: 0,
        stout: 0,
        wheatBeer: 0
    });
});

it('Should save Lager temps on /lager route using POST and return OK', async () => {
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
    let response = await fetch(`http://localhost:7000/lager`, {
        body: JSON.stringify({
            temperature: 9
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
    });
    response = await response.json();
    let response2 = await fetch(`http://localhost:7000/temps`);
    response2 = await response2.json();
    server.serverHandler.close();
    expect(response).toEqual({ message: 'OK' });
    expect(response2).toEqual({
        ipa: 0,
        lager: 9,
        paleAle: 0,
        pilsner: 0,
        stout: 0,
        wheatBeer: 0
    });
});

it('Should save Pale Ale temps on /pale-ale route using POST and return OK', async () => {
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
    let response = await fetch(`http://localhost:7000/pale-ale`, {
        body: JSON.stringify({
            temperature: 9
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
    });
    response = await response.json();
    let response2 = await fetch(`http://localhost:7000/temps`);
    response2 = await response2.json();
    server.serverHandler.close();
    expect(response).toEqual({ message: 'OK' });
    expect(response2).toEqual({
        ipa: 0,
        lager: 0,
        paleAle: 9,
        pilsner: 0,
        stout: 0,
        wheatBeer: 0
    });
});

it('Should save Pilsner temps on /pilsner route using POST and return OK', async () => {
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
    let response = await fetch(`http://localhost:7000/pilsner`, {
        body: JSON.stringify({
            temperature: 9
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
    });
    response = await response.json();
    let response2 = await fetch(`http://localhost:7000/temps`);
    response2 = await response2.json();
    server.serverHandler.close();
    expect(response).toEqual({ message: 'OK' });
    expect(response2).toEqual({
        ipa: 0,
        lager: 0,
        paleAle: 0,
        pilsner: 9,
        stout: 0,
        wheatBeer: 0
    });
});

it('Should save Stout temps on /stout route using POST and return OK', async () => {
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
    let response = await fetch(`http://localhost:7000/stout`, {
        body: JSON.stringify({
            temperature: 9
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
    });
    response = await response.json();
    let response2 = await fetch(`http://localhost:7000/temps`);
    response2 = await response2.json();
    server.serverHandler.close();
    expect(response).toEqual({ message: 'OK' });
    expect(response2).toEqual({
        ipa: 0,
        lager: 0,
        paleAle: 0,
        pilsner: 0,
        stout: 9,
        wheatBeer: 0
    });
});

it('Should save Wheat Beer temps on /wheat-beer route using POST and return OK', async () => {
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
    let response = await fetch(`http://localhost:7000/wheat-beer`, {
        body: JSON.stringify({
            temperature: 9
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
    });
    response = await response.json();
    let response2 = await fetch(`http://localhost:7000/temps`);
    response2 = await response2.json();
    server.serverHandler.close();
    expect(response).toEqual({ message: 'OK' });
    expect(response2).toEqual({
        ipa: 0,
        lager: 0,
        paleAle: 0,
        pilsner: 0,
        stout: 0,
        wheatBeer: 9
    });
});
