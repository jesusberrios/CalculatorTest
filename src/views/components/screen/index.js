import React from 'react';

const Screen = (props) => {
    const {value, classes} = props;

    return(<div className={classes}>
     {value}
    </div>)
}
export default Screen;