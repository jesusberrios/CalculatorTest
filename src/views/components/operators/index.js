import React from 'react';
import {Button} from '@material-ui/core';
const Operator = (props) => {
    const {displayValue, value, setState} = props;
    return(<Button onClick={() => { setState(oldValue => {
        return oldValue + value
    }) }}>
    {displayValue}

    

    
    </Button>)
}
export default Operator;