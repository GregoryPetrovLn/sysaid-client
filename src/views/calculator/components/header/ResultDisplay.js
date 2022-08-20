import React from 'react';
import './ResultDisplay.scss'
const ResultDisplay = ({result}) => {
    return (
        <div className={'calc-result-display'}>{result}</div>
    );
};

export default ResultDisplay;