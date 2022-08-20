import React from 'react';
import './Body.scss'

const buttons = [
    [7, 8, 9, '*'],
    [4, 5, 6, '/'],
    [1, 2, 3, '+'],
    [0, 'reset', '=', '-']
]
const Body = ({buttonHandler}) => {
    return (
        <div className={'calc-body'}>
            {buttons.map((row, idx) => (
                <div className={'row'} key={`row-${idx}`}>
                    {row.map((button, idx) => (
                        <div key={`item-${idx}`}
                             className={'item'}
                             onClick={() => buttonHandler(button)}
                        ><span>{button}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Body;