import React from 'react';
import './Card.scss';

interface Props {
    title: string;
    temperature: number;
    tempRange: {
        max: number;
        min: number;
    };
}

interface TempRange {
    min: number;
    max: number;
}

enum Status {
    OK = 0,
    'Too hot',
    'Too cold'
}

enum StatusColor {
    green = '#00d162',
    blue = '#0000ff',
    red = '#ff005e'
}

export default class Card extends React.Component<Props> {
    filler: number;
    status: Status;
    percentage: number;
    tempThreshold: TempRange;
    statusColor: string;
    boxShadow: string;

    constructor(props: Props) {
        super(props);
        this.boxShadow = `0px 0px 15px 1px ${StatusColor.green}`;
        this.filler = 50;
        this.percentage = 100 - this.filler;
        this.status = Status.OK;
        this.statusColor = StatusColor.green;
        this.tempThreshold = {
            max: this.props.tempRange.max + (this.props.tempRange.max - this.props.tempRange.min),
            min: this.props.tempRange.min - (this.props.tempRange.max - this.props.tempRange.min)
        };
        this.evaluateFillerLength();
    }

    render() {
        this.evaluateFillerLength();
        return (
            <div className='card-container' style={{ boxShadow: this.boxShadow }}>
                <div className='card-header'>
                    <span>{this.props.title}</span>
                </div>
                <div className='gold-separator' />
                <div className='card-data'>
                    <div className='card-temperature'>
                        <div className='temperature-title'>
                            <span>Status: </span>
                            <div>
                                <span>{Status[this.status]}</span>
                                <div className='status-circle' style={{ backgroundColor: this.statusColor }}></div>
                            </div>
                        </div>
                        <div className='temperature-title'>
                            <span>Temperature: </span>
                            <span>
                                {this.props.temperature.toFixed(3)}°C ({this.percentage.toFixed(1)}%)
                            </span>
                        </div>
                        <div className='temperature-bar'>
                            <div className='temperature-filler' style={{ width: `${this.filler.toFixed(0)}%` }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    evaluateFillerLength = () => {
        const tempAboveMinimum = this.props.temperature - this.props.tempRange.min;
        const tempRange = this.props.tempRange.max - this.props.tempRange.min;
        const tempPercent = (tempAboveMinimum / tempRange) * 100;
        this.percentage = tempPercent;
        if (this.props.temperature > this.props.tempRange.max) {
            this.status = Status['Too hot'];
            this.boxShadow = `0px 0px 15px 1px ${StatusColor.red}`;
        } else if (this.props.temperature < this.props.tempRange.min) {
            this.status = Status['Too cold'];
            this.boxShadow = `0px 0px 15px 1px ${StatusColor.blue}`;
        } else {
            this.status = Status.OK;
            this.boxShadow = `0px 0px 15px 1px ${StatusColor.green}`;
        }
        if (this.props.temperature >= this.tempThreshold.max) {
            this.filler = 0;
        } else if (this.props.temperature <= this.tempThreshold.min) {
            this.filler = 99;
            this.status = Status['Too cold'];
        } else {
            const thresholdRange = this.tempThreshold.max - this.tempThreshold.min;
            const thresholdTemp = this.props.temperature - this.tempThreshold.min;
            const fillerPercent = (thresholdTemp / thresholdRange) * 100;
            this.filler = 100 - fillerPercent;
        }
        switch (this.status) {
            case Status.OK:
                this.statusColor = StatusColor.green;
                break;
            case Status['Too cold']:
                this.statusColor = StatusColor.blue;
                break;
            case Status['Too hot']:
                this.statusColor = StatusColor.red;
                break;
            default:
                this.statusColor = StatusColor.green;
        }
    };
}
