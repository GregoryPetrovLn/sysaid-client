import React from 'react';
import TextField from '@mui/material/TextField';
import './Input.scss'
import {FormGroup} from '@mui/material';

const Input = ({ value, id, placeholder, onChange,errors,touched}) => {
    return (
        <div className={'custom-input'}>
            <FormGroup>
                <TextField className={'custom-input__input'}
                           label={placeholder}
                           id={id}
                           name={id}
                           value={value}
                           onChange={onChange}
                           variant="outlined"/>

                {errors[id] && touched[id] ? (
                    <span className={'custom-input__error'}>{errors[id]?.toString()}</span>
                ) : null}
            </FormGroup>
        </div>
    );
};

Input.defaultProps = {
    placeholder: 'Label'
}

export default Input;