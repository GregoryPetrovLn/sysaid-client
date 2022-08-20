import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './History.scss'
import {Button} from "@mui/material";
import {resetCalcHistory} from "../calculator/redux/actions";

const History = () => {
    const dispatch = useDispatch()
    const {history} = useSelector(state => state.calculator)
    const resetBtnHandler = () => dispatch(resetCalcHistory())

    return (
        <div className={'calc-history'}>
            {history.length > 0 && <Button className={'clear-btn'}
                                           onClick={resetBtnHandler}
                                           variant={'contained'}>Clear History</Button>}
            {history.slice(-20).map((item, idx) => (
                <div key={idx} className={'item'}>{idx + 1}: {item}</div>
            ))}
        </div>
    );
};

export default History;