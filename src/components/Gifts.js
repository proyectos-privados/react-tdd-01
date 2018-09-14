import React, {Component} from 'react';

import { Form, FormControl, Button, ControlLabel, FormGroup } from 'react-bootstrap';

class Gifts extends Component{
    constructor(){
        super();
        this.state = { person: '', present: '' }
    }
    render(){
        return(
            <div className='gift'>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl 
                            className='input-person' 
                            onChange={event => this.setState({ person: event.target.value })}
                            />

                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl
                            className='input-present'
                            onChange={event => this.setState({ present: event.target.value })}
                            />
                    </FormGroup>
                </Form>
                <Button
                    onClick={()=> this.props.removeGift(this.props.gift.id)} 
                    className='btn-remove'
                >Remove gift</Button>
            </div>
        )
    }
}

export default Gifts;