import React from 'react';

import { shallow } from 'enzyme';

import App from './App'; // Importamos algo que aún no existe... 

describe('App', () => {
    const app = shallow(<App />);
    
    it('Renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
    
    it('Initialize the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });
    
    describe('When clicking the `Add gift` button', () => {
        const id = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(()=>{
            app.setState({ gifts: [] });
        });

        it('adds a new gifts to `state`', () => {
            expect(app.state().gifts).toEqual([{ id: id }]);
        });
        
        it('add new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length)
                    .toEqual(1);
        });

        it('Creates a Gifts Component', () => {
            expect(app.find('Gifts').exists()).toBe(true);
        });

        describe('and the user wants to remove a gitf', () => {
            beforeEach(()=> {
                 app.instance().removeGift(id );
            });

            it('Removes the gift of `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        })
    });
});
