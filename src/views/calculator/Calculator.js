import React, {useState} from 'react';
import './Calculator.scss'
import ResultDisplay from "./components/header/ResultDisplay";
import Body from "./components/body/Body";

const Calculator = () => {
    const [result, setResult] = useState('')
    return (
        <div className={'calculator'}>
            <div className={'calculator__wrapper'}>
                <ResultDisplay result={result}/>
                <Body/>
            </div>
        </div>
    );
};

export default Calculator;