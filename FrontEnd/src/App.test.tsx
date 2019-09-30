import React from 'react';
import ReactDOM from 'react-dom';
import App, { delay, server } from './App';

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Should fetch temps and schedule the next fetch with setTimeout', async () => {
    const appElement = new App('');
    const setTimeout = jest.fn();
    const setStateFn = jest.fn();
    const response = { json: jest.fn().mockReturnValue(1) };
    const fetchData = jest.fn().mockReturnValue(response);
    // @ts-ignore
    appElement.setStateTemps = jest.fn().mockReturnValue(1);
    appElement.setState = setStateFn;
    // @ts-ignore
    await appElement.fetchTemps(setTimeout, fetchData);
    expect(fetchData).toHaveBeenCalledWith(`${server}/temps`);
    expect(setTimeout).toHaveBeenCalledWith(appElement.fetchTemps, delay);
    expect(response.json).toHaveBeenCalled();
    // @ts-ignore
    expect(setStateFn).toHaveBeenCalledWith(1);
});

it('Should save temps on state returning the new state', () => {
    const appElement = new App('');
    const temps = { test: 'testing' };
    // @ts-ignore
    const cb1ord = appElement.setStateTemps(temps);
    // @ts-ignore
    const newState = cb1ord({ temps: { test: 'testing2' } });
    expect(newState).toEqual({ temps: { test: 'testing' } });
});
