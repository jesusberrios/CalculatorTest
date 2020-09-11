import React, { useState } from 'react';
import Screen from './components/screen';
import Button from './components/body/button';
import Equal from './components/body/equal';
import {calculateFn} from '../utils/calculator';
import DelButton from './components/body/delete';
import {useStyles} from './style';
import Grid from '@material-ui/core/Grid';

const Calculator = (props) => {
    const classes = useStyles();
    const {initialvalue} = props;
    const [state, setState] = useState(initialvalue);
    function equal(){
        if(state !== "0"){
            const result = calculateFn(state);
            setState(result + "");
        }
        
        
    }
    function handleChange(change){
        setState(oldValue => {
            if(oldValue === "0" || oldValue === "Syntax error"){
            return change;
            }
            return oldValue + change;
            
        })
    }
    function handleDelete(){
        setState("0");
    }
    return(<div className={classes.root}>
        <Screen classes={classes.screen} value={state} />
        <Grid items xs={4} alignItems="center">
        <Button classes={classes.operator} value="x" setState={handleChange}/>
        <Button classes={classes.operator} value="+"  setState={handleChange}/>
        <Button classes={classes.operator} value="-"  setState={handleChange}/>
        <Button classes={classes.operator} value="%"  setState={handleChange}/><br/>
        </Grid>
        <Grid container xs={12}>
        <Grid items xs={3} direction="column" justify="center" alignItems="center">
        <Button classes={classes.button} value="1" setState={handleChange}/>
        <Button classes={classes.button} value="2" setState={handleChange}/>
        <Button classes={classes.button} value="3" setState={handleChange}/><br/>
        <Button classes={classes.button} value="4" setState={handleChange}/>
        <Button classes={classes.button} value="5" setState={handleChange}/>
        <Button classes={classes.button} value="6" setState={handleChange}/><br/>
        <Button classes={classes.button} value="7" setState={handleChange}/>
        <Button classes={classes.button} value="8" setState={handleChange}/>
        <Button classes={classes.button} value="9" setState={handleChange}/><br/>
        <Button classes={classes.button} value="0" setState={handleChange}/>
        <Button classes={classes.button} value="." setState={handleChange}/>
        <DelButton classes={classes.delbutton} setState={handleDelete} />
        </Grid>
        <Grid items xs={0}>
        <Equal classes={classes.equalbutton} equal={equal}/>
        </Grid>
        </Grid>

        
        
        
         
    </div>)
}
export default Calculator;