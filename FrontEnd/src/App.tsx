import { faBeer, faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.scss';
import Card from './components/Card';

export const server = 'http://localhost:7000';

export const delay = 1000;

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
        this.fetchTemps();
    }

    render() {
        return (
            <div className='app'>
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

    fetchTemps = async (setTime = setTimeout, fetchData = fetch) => {
        const response = await fetchData(`${server}/temps`);
        const temps = await response.json();
        this.setState(this.setStateTemps(temps));
        setTime(this.fetchTemps, delay);
    };

    setStateTemps = (temps: State['temps']) => (previousState: State) => ({ ...previousState, temps });
}
