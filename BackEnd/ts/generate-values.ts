// this file does not have a .test.ts since it is not crucial for production, it is only meant for simulation

import fetch from 'node-fetch';

const server = 'http://localhost:7000';

const maxJump = 0.6;

const criticalValue = 1.5;

let signal = 1;

enum Status {
    OK = 0,
    Cold,
    Hot
}

type TempRanges = {
    [id in Beers]: {
        max: number;
        min: number;
    };
};

const tempRange: TempRanges = {
    ipa: {
        max: 6,
        min: 5
    },
    lager: {
        max: 7,
        min: 4
    },
    paleAle: {
        max: 6,
        min: 4
    },
    pilsner: {
        max: 6,
        min: 4
    },
    stout: {
        max: 8,
        min: 6
    },
    wheatBeer: {
        max: 5,
        min: 3
    }
};

type BeerStatus = {
    [id in Beers]: Status;
};

const tempStatus: BeerStatus = {
    ipa: Status.OK,
    lager: Status.OK,
    paleAle: Status.OK,
    pilsner: Status.OK,
    stout: Status.OK,
    wheatBeer: Status.OK
};

type Temps = {
    [id in Beers]: number;
};

const temps: Temps = {
    ipa: (Math.random() * 100) % 10,
    lager: (Math.random() * 100) % 10,
    paleAle: (Math.random() * 100) % 10,
    pilsner: (Math.random() * 100) % 10,
    stout: (Math.random() * 100) % 10,
    wheatBeer: (Math.random() * 100) % 10
};

enum Beers {
    IPA = 'ipa',
    Lager = 'lager',
    'Pale Ale' = 'paleAle',
    Pilsner = 'pilsner',
    Stout = 'stout',
    'Wheat beer' = 'wheatBeer'
}

type RouteType = {
    [id in Beers]: string;
};

const routes: RouteType = {
    ipa: 'ipa',
    lager: 'lager',
    paleAle: 'pale-ale',
    pilsner: 'pilsner',
    stout: 'stout',
    wheatBeer: 'wheat-beer'
};

const delay = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });

const infiniteLoop = async () => {
    while (1) {
        const keys = Object.keys(temps);
        keys.forEach(async (key: Beers) => {
            generateValue(key);
            await fetch(`${server}/${routes[key]}`, {
                body: JSON.stringify({
                    temperature: temps[key]
                }),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            });
        });
        await delay();
    }
};

const generateValue = (key: Beers) => {
    const halfRange = (tempRange[key].max - tempRange[key].min) / 2 + tempRange[key].min;
    const temp = temps[key] - halfRange;
    if (Math.abs(temp) > criticalValue) {
        tempStatus[key] = temp < 0 ? Status.Cold : Status.Hot;
    }
    if (tempStatus[key] !== Status.OK) {
        recoverValue(key);
    } else {
        generateNormalValue(key);
    }
};

const recoverValue = (key: Beers) => {
    let random = Math.random() % maxJump;
    random = random * (tempStatus[key] === Status.Cold ? 1 : -1);
    temps[key] = temps[key] + random;
    const halfRange = (tempRange[key].max - tempRange[key].min) / 2 + tempRange[key].min;
    const temp = temps[key] - halfRange;
    if (Math.abs(temp) < 0.5) {
        tempStatus[key] = Status.OK;
    }
};

const generateNormalValue = (key: Beers) => {
    let random = Math.random() % maxJump;
    signal = signal === 1 ? -1 : 1;
    random = random * signal;
    temps[key] = temps[key] + random;
};

infiniteLoop();
