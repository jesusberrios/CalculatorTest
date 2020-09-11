import React from 'react';
import {Button} from '@material-ui/core';
const DelButton = (props) => {
    const {setState, classes} = props;
    return(<Button className={classes} onClick={() => { setState() }}>
    AC
    
    </Button>)
}

export default DelButton;