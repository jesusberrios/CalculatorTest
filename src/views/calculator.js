import React, { useState } from 'react';
import Screen from './components/screen';
import Button from './components/body/button';
import { calculateFn } from '../utils/calculator';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';

const operators = ['x', '+', '-', '%'];
const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

const Calculator = (props) => {
  const classes = useStyles();
  const { initialvalue } = props;
  const [state, setState] = useState(initialvalue);
  function equal() {
    if (state !== '0') {
      const result = calculateFn(state);
      setState(result + '');
    }
  }
  function handleChange(change) {
    setState((oldValue) => {
      if (oldValue === '0' || oldValue === 'Error' || oldValue === 'Syntax error') {
        return change;
      }
      return oldValue + change;
    });
  }
  function handleDelete() {
    setState('0');
  }
  return (
    <div className={classes.root}>
      <Screen classes={classes.screen} value={state} />
      <Grid item xs={4}>
        {operators.map((operator) => (
          <Button
            key={operator}
            classes={classes.operator}
            value={operator}
            setState={handleChange}
          />
        ))}
        <br />
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          {numbers.map((number) => (
            <Button key={number} classes={classes.button} value={number} setState={handleChange} />
          ))}
          <Button classes={classes.delbutton} setState={handleDelete} value="AC" />
        </Grid>
        <Grid>
          <Button classes={classes.equalbutton} setState={equal} value="=" />
        </Grid>
      </Grid>
    </div>
  );
};
export default Calculator;
