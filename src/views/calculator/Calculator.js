import React, {useState} from 'react';
import './Calculator.scss'
import ResultDisplay from "./components/header/ResultDisplay";
import Body from "./components/body/Body";

const Calculator = () => {
    const [result, setResult] = useState('')

    const actionInputController = (btn) => {
        const lastChar = result[result.length - 1]
        if (result.length !== 0 && !!Number(lastChar)) {
            setResult((prev) => `${prev}${btn}`)
        }
        if (btn === '=') {
            setResult(eval(result.replace(/[^-()\d/*+.]/g, '')).toString())
        }
        if (btn === 'reset') {
            setResult('')
        }
    }

    const numberInputController = (btn) => setResult((prev) => `${prev}${btn}`)


    const buttonHandler = (btn) => {
        switch (typeof btn) {
            case 'string':
                actionInputController(btn)
                break;
            case 'number':
                numberInputController(btn)
                break
            default:
                return null
        }
    }
    return (
        <div className={'calculator'}>
            <div className={'calculator__wrapper'}>
                <ResultDisplay result={result}/>
                <Body buttonHandler={buttonHandler}/>
            </div>
        </div>
    );
};

export default Calculator;