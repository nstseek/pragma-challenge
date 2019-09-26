import { faBeer, faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.scss';
import Card from './components/Card';
import * as MockValues from './mockValues';

const server = 'http://localhost:7000';

const delay = 1000;

interface State {
    temps: {
        ipa: number;
        lager: number;
        paleAle: number;
        pilsner: number;
        stout: number;
        wheatBeer: number;
    };
}

export default class App extends React.Component<any, State> {
    mocker: MockValues.ValuesGenerator;

    constructor(props: any) {
        super(props);
        this.state = {
            temps: {
                ipa: 5,
                lager: 5,
                paleAle: 5,
                pilsner: 5,
                stout: 5,
                wheatBeer: 5
            }
        };
        this.mocker = new MockValues.MockValues();
        this.updateMockTemps();
    }

    render() {
        return (
            <div className='app'>
                <span className='watermark'>Todos os valores aqui são gerados usando Math.random()</span>
                <div className='header-container'>
                    <div className='icon-container'>
                        <FontAwesomeIcon icon={faCloud} className='cloud' />
                        <FontAwesomeIcon icon={faBeer} className='beer' />
                    </div>
                    <span className='title'>Beer temperature control system</span>
                </div>
                <div className='cards-container'>
                    <Card title='IPA' temperature={this.state.temps.ipa} tempRange={{ max: 6, min: 5 }} />
                    <Card title='Lager' temperature={this.state.temps.lager} tempRange={{ max: 7, min: 4 }} />
                    <Card title='Pale Ale' temperature={this.state.temps.paleAle} tempRange={{ max: 6, min: 4 }} />
                    <Card title='Pilsner' temperature={this.state.temps.pilsner} tempRange={{ max: 6, min: 4 }} />
                    <Card title='Stout' temperature={this.state.temps.stout} tempRange={{ max: 8, min: 6 }} />
                    <Card title='Wheat beer' temperature={this.state.temps.wheatBeer} tempRange={{ max: 5, min: 3 }} />
                </div>
            </div>
        );
    }

    updateMockTemps = () => {
        const temps = this.mocker.infiniteLoop();
        this.setState((previousState: State) => ({
            ...previousState,
            temps
        }));
        setTimeout(this.updateMockTemps, 1000);
    };

    fetchTemps = async () => {
        const response = await fetch(`${server}/temps`);
        const temps = await response.json();
        this.setState((previousState: State) => ({ ...previousState, temps }));
        setTimeout(this.fetchTemps, delay);
    };
}
