import React, { useState } from 'react';
import Screen from './components/screen';
import Number from './components/body/number';
import Operator from './components/operators';
import Equal from './components/body/equal';

const Calculator = (props) => {
    const {initialvalue} = props;
    const [state, setState] = useState(initialvalue);
    function equal(){
        const result = eval(state);
        setState(result);
    }

    return(<div>
        <h1>Holi</h1>
        <Screen value={state} />
        {/*Cambiar * a x*/}
        <Operator value="*" displayValue="x" setState={setState}/>
        <Operator value="+" displayValue="+" setState={setState}/>
        <Operator value="-" displayValue="-" setState={setState}/>
        <Operator value="/" displayValue="/" setState={setState}/><br/>
        <Number value="1" setState={setState}/>
        <Number value="2" setState={setState}/>
        <Number value="3" setState={setState}/><br/>
        <Number value="4" setState={setState}/>
        <Number value="5" setState={setState}/>
        <Number value="6" setState={setState}/><br/>
        <Number value="7" setState={setState}/>
        <Number value="8" setState={setState}/>
        <Number value="9" setState={setState}/><br/>
        <Number value="0" setState={setState}/>
        <Number value="." setState={setState}/>
        <Equal equal={equal}/>
    </div>)
}
export default Calculator;