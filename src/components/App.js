import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Gifts from './Gifts';
import { max_number } from '../helper/index';

class App extends Component {
    constructor(){
        super(); 
        this.state = { gifts: []}
    }

    addGift = () => {
        const { gifts } = this.state;
        const ids = this.state.gifts.map(gift => gift.id);
        const max_id = max_number(ids);
        gifts.push({ id: max_id  + 1 });
        this.setState({ gifts });
    }

    removeGift = (id) => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({ gifts });
    }

    render(){
        return(
            <div> 
                <h1>Hello</h1>
                <div className='gift-list'>
                {
                    this.state.gifts.map(gift => {
                        return (
                            <Gifts 
                                key={gift.id} 
                                gift={gift}
                                removeGift={this.removeGift}
                                />
                        );
                    })
                }
                </div>
                <Button 
                    className='btn-add'
                    onClick={this.addGift}
                    >Add button</Button>
            </div>
        );
    }
}

export default App;
