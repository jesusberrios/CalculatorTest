import React from 'react';
import {Button} from '@material-ui/core';
const Number = (props) => {
    const {value, setState} = props;
    return(<Button onClick={() => { setState(oldValue => {
        return oldValue + value
    }) }}>
    {value}
    
    </Button>)
}

export default Number;