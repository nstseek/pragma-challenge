type TempRanges = {
    [id in Beers]: {
        max: number;
        min: number;
    };
};

type BeerStatus = {
    [id in Beers]: Status;
};

type Temps = {
    [id in Beers]: number;
};

enum Status {
    OK = 0,
    Cold,
    Hot
}

enum Beers {
    IPA = 'ipa',
    Lager = 'lager',
    'Pale Ale' = 'paleAle',
    Pilsner = 'pilsner',
    Stout = 'stout',
    'Wheat beer' = 'wheatBeer'
}

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

const tempStatus: BeerStatus = {
    ipa: Status.OK,
    lager: Status.OK,
    paleAle: Status.OK,
    pilsner: Status.OK,
    stout: Status.OK,
    wheatBeer: Status.OK
};

const maxJump: number = 0.6;

const criticalValue: number = 1.5;

export interface ValuesGenerator {
    generateValue(key: Beers): any;
    infiniteLoop(): Temps;
    generateNormalValue(key: Beers): any;
    recoverValue(key: Beers): any;
    delay(): Promise<any>;
}

export class MockValues implements ValuesGenerator {
    signal: number = 1;
    temps: Temps;

    constructor() {
        this.temps = {
            ipa: (Math.random() * 100) % 10,
            lager: (Math.random() * 100) % 10,
            paleAle: (Math.random() * 100) % 10,
            pilsner: (Math.random() * 100) % 10,
            stout: (Math.random() * 100) % 10,
            wheatBeer: (Math.random() * 100) % 10
        };
    }

    generateValue = (key: Beers) => {
        const halfRange = (tempRange[key].max - tempRange[key].min) / 2 + tempRange[key].min;
        const temp = this.temps[key] - halfRange;
        if (Math.abs(temp) > criticalValue) {
            tempStatus[key] = temp < 0 ? Status.Cold : Status.Hot;
        }
        if (tempStatus[key] !== Status.OK) {
            this.recoverValue(key);
        } else {
            this.generateNormalValue(key);
        }
    };

    infiniteLoop = () => {
        const keys = Object.keys(this.temps);
        keys.forEach((key: any) => {
            this.generateValue(key);
        });
        return Object.assign({}, this.temps);
    };

    generateNormalValue = (key: Beers) => {
        let random = Math.random() % maxJump;
        this.signal = this.signal === 1 ? -1 : 1;
        random = random * this.signal;
        this.temps[key] = this.temps[key] + random;
    };

    recoverValue = (key: Beers) => {
        let random = Math.random() % maxJump;
        random = random * (tempStatus[key] === Status.Cold ? 1 : -1);
        this.temps[key] = this.temps[key] + random;
        const halfRange = (tempRange[key].max - tempRange[key].min) / 2 + tempRange[key].min;
        const temp = this.temps[key] - halfRange;
        if (Math.abs(temp) < 0.5) {
            tempStatus[key] = Status.OK;
        }
    };

    delay = () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(), 1000);
        });
}
