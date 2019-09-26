import { faBeer, faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.scss';
import Card from './components/Card';

export default class App extends React.Component {
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
                    <Card />
                </div>
            </div>
        );
    }
}
