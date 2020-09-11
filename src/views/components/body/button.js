import React from 'react';
import { Button } from '@material-ui/core';

const GeneralButton = (props) => {
  const { value, setState, classes } = props;
  return (
    <Button
      className={classes}
      onClick={() => {
        setState(value);
      }}
    >
      {value}
    </Button>
  );
};

export default GeneralButton;
