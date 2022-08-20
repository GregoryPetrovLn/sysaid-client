import React from 'react';
import './Body.scss'
const Body = () => {
    return (
        <div className={'calc-body'}>
            <div className={'row'}>
                <div className={'item'}><span>7</span></div>
                <div className={'item'}><span>8</span></div>
                <div className={'item'}><span>9</span></div>
                <div className={'item'}><span>*</span></div>
            </div>
        </div>
    );
};

export default Body;