import React from 'react';

import { shallow } from 'enzyme';

import App from './App'; // Importamos algo que aún no existe... 

const app = shallow(<App />);

it('Renders correctly', () => {
    expect(app).toMatchSnapshot();
});

it('Initialize the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('adds a new gifts to `state` when clicking `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it('add new gift to the rendered list when clicking the add gift button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.find('.gift-list').children().length).toEqual(2);
});