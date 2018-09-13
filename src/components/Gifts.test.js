import React from 'react';
import { shallow } from 'enzyme';
import Gifts from './Gifts';

describe('Gift', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift: { id }, removeGift: mockRemove }
    const gift = shallow(<Gifts {...props} />);

    it('Renders propertly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('Initialize the person and gift in `state`', () => {
        expect(gift.state()).toEqual({ person: '', present: '' });
    });

    describe('When typing into the person Input', () => {

        const person = 'Uncle';

        beforeEach(()=> {
            gift.find('.input-person')
                .simulate('change', { target: { value: person } }); 
        });

        it('updates the person in the `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });

    describe('When typing into the present input', () => {
        const present = 'My gift';
        
        beforeEach(() => {
            gift.find('.input-present')
                .simulate('change', { target: { value: present } });
        });

        it('updates the present in the `state`', () => {
            expect(gift.state().present).toEqual(present);
        });

    })

    describe('When clicking the `Remove gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        }); 

        it('calls the Removegift callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        });
    });
});
