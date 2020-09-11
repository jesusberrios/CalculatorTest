import React from 'react';
import {Button} from '@material-ui/core';

const Equal = (props) => {
    const {equal, classes} = props;
    return(<Button className={classes} onClick={() => { equal() }}>
    =
    
    </Button>)
}
export default Equal;