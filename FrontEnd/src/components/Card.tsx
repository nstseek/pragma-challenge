import React from 'react';
import './Card.scss';

interface Props {
    title: string;
}

interface State {
    temperature: number;
    filler: number;
    status: Status;
}

enum Status {
    OK = 0,
    Warning,
    'Too hot'
}

export default class Card extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            filler: 0,
            status: 0,
            temperature: 0
        };
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-header'>
                    <span>{this.props.title}</span>
                </div>
                <div className='gold-separator' />
                <div className='card-data'>
                    <div className='card-temperature'>
                        <div className='temperature-title'>
                            <span>Status: </span>
                            <div>
                                <span>OK</span>
                                <div className='status-circle'></div>
                            </div>
                        </div>
                        <div className='temperature-title'>
                            <span>Temperature: </span>
                            <span>8°C</span>
                        </div>
                        <div className='temperature-bar'>
                            <div className='temperature-filler' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
