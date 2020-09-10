import React from 'react';
import {Button} from '@material-ui/core';

const Equal = (props) => {
    const {equal} = props;
    return(<Button onClick={() => { equal() }}>
    =
    
    </Button>)
}
export default Equal;