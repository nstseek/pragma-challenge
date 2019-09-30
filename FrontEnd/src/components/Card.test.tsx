import { getByText, queryByAttribute } from '@testing-library/dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Card, { StatusColor, Status } from './Card';

const statusColor = {
    blue: 'rgb(0, 0, 255)',
    green: 'rgb(0, 209, 98)',
    red: 'rgb(255, 0, 94)'
};

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card temperature={6} tempRange={{ min: 2, max: 7 }} title={'Test'} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Should display the name of the beer', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card temperature={6} tempRange={{ min: 2, max: 7 }} title={'Test'} />, div);
    const span = getByText(div, 'Test');
    expect(span).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
});

it(`Should display the status text, border and color when it's ok`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card temperature={6} tempRange={{ min: 2, max: 7 }} title={'Test'} />, div);
    const span = getByText(div, 'OK');
    const card = queryByAttribute('class', div, 'card-container');
    const statusCircle = queryByAttribute('class', div, 'status-circle');
    expect(span).toBeTruthy();
    // @ts-ignore
    expect(statusCircle.style.backgroundColor).toEqual(statusColor.green);
    // @ts-ignore
    expect(card.style.boxShadow).toEqual(`0px 0px 15px 1px ${StatusColor.green}`);
    ReactDOM.unmountComponentAtNode(div);
});

it(`Should display the status text, border and color when it's too cold`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card temperature={1} tempRange={{ min: 2, max: 7 }} title={'Test'} />, div);
    const span = getByText(div, 'Too cold');
    const card = queryByAttribute('class', div, 'card-container');
    const statusCircle = queryByAttribute('class', div, 'status-circle');
    expect(span).toBeTruthy();
    // @ts-ignore
    expect(statusCircle.style.backgroundColor).toEqual(statusColor.blue);
    // @ts-ignore
    expect(card.style.boxShadow).toEqual(`0px 0px 15px 1px ${StatusColor.blue}`);
    ReactDOM.unmountComponentAtNode(div);
});

it(`Should display the status text, border and color when it's too hot`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card temperature={8} tempRange={{ min: 2, max: 7 }} title={'Test'} />, div);
    const span = getByText(div, 'Too hot');
    const card = queryByAttribute('class', div, 'card-container');
    const statusCircle = queryByAttribute('class', div, 'status-circle');
    expect(span).toBeTruthy();
    // @ts-ignore
    expect(statusCircle.style.backgroundColor).toEqual(statusColor.red);
    // @ts-ignore
    expect(card.style.boxShadow).toEqual(`0px 0px 15px 1px ${StatusColor.red}`);
    ReactDOM.unmountComponentAtNode(div);
});

it(`Should display the temperature and percentage properly, calculating correctly`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card temperature={4} tempRange={{ min: 2, max: 6 }} title={'Test'} />, div);
    const temp = getByText(div, '4.000°C (50.0%)');
    expect(temp).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
});

it('Should adjust the bar completion based on temperature', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card temperature={4} tempRange={{ min: 2, max: 6 }} title={'Test'} />, div);
    const tempBar = queryByAttribute('class', div, 'temperature-filler');
    // @ts-ignore
    expect(tempBar.style.width).toEqual('50%');
    ReactDOM.unmountComponentAtNode(div);
});

it('Should calculate correctly the percentages based on temperature > maxThreshold and set the props', () => {
    const element = new Card({
        tempRange: {
            max: 6,
            min: 2
        },
        temperature: 11,
        title: 'Test'
    });
    expect(element.boxShadow).toEqual(`0px 0px 15px 1px ${StatusColor.red}`);
    expect(element.status).toEqual(Status['Too hot']);
    expect(element.filler).toEqual(0);
});

it(
    'Should calculate correctly the percentages based on minThreshold > temperature < maxThreshold ' +
        'and set the props',
    () => {
        const element = new Card({
            tempRange: {
                max: 6,
                min: 2
            },
            temperature: 4,
            title: 'Test'
        });
        expect(element.boxShadow).toEqual(`0px 0px 15px 1px ${StatusColor.green}`);
        expect(element.status).toEqual(Status.OK);
        expect(element.filler).toEqual(50);
    }
);

it('Should calculate correctly the percentages based on temperature < minThreshold and set the props', () => {
    const element = new Card({
        tempRange: {
            max: 6,
            min: 2
        },
        temperature: -3,
        title: 'Test'
    });
    expect(element.boxShadow).toEqual(`0px 0px 15px 1px ${StatusColor.blue}`);
    expect(element.status).toEqual(Status['Too cold']);
    expect(element.filler).toEqual(99);
});

it('Should call evaluate percentage method and set variables on the constructor', () => {
    const mockCard = Card;
    const mockEval = jest.fn();
    mockCard.prototype.evaluateFillerLength = mockEval;
    const element = new mockCard({
        tempRange: {
            max: 6,
            min: 2
        },
        temperature: 4,
        title: 'Test'
    });
    expect(mockEval).toHaveBeenCalled();
    expect(element.boxShadow).toEqual(`0px 0px 15px 1px ${StatusColor.green}`);
    expect(element.filler).toEqual(50);
    expect(element.percentage).toEqual(100 - element.filler);
    expect(element.status).toEqual(Status.OK);
    expect(element.statusColor).toEqual(StatusColor.green);
    expect(element.tempThreshold).toEqual({
        max: element.props.tempRange.max + (element.props.tempRange.max - element.props.tempRange.min),
        min: element.props.tempRange.min - (element.props.tempRange.max - element.props.tempRange.min)
    });
});
