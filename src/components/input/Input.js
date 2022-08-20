import React from 'react';
import TextField from '@mui/material/TextField';
import './Input.scss'
import {FormGroup} from '@mui/material';

const Input = ({ label}) => {
    return (
        <div className={'custom-input'}>
            <FormGroup>
                <TextField className={'custom-input__input'}
                           id="outlined-basic"
                           label={label}
                           variant="outlined"/>

            </FormGroup>
        </div>
    );
};

Input.defaultProps = {
    label: 'Label'
}

export default Input;