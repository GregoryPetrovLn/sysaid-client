import React from 'react';
import './Calculator.scss'
import ResultDisplay from "./components/header/ResultDisplay";
import Body from "./components/body/Body";
import {useDispatch, useSelector} from "react-redux";
import {setCalcHistory, setCalcResult} from "./redux/actions";

const Calculator = () => {
    const dispatch = useDispatch()
    const {result} = useSelector(state => state.calculator)

    const actionInputController = (btn) => {
        const lastChar = result[result.length - 1]
        if (result.length !== 0 && !!Number(lastChar)) {
            dispatch(setCalcResult(`${result}${btn}`))
            dispatch(setCalcHistory(btn))
        }
        if (btn === '=') {
            dispatch(setCalcResult(eval(result.replace(/[^-\d/*+.]/g, '')).toString()))
        }
        if (btn === 'reset') {
            dispatch(setCalcResult(''))
        }
    }

    const numberInputController = (btn) => {
        dispatch(setCalcResult(`${result}${btn}`))
        dispatch(setCalcHistory(btn))
    }


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