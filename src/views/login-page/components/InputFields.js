import React from 'react';
import './InputFields.scss'
import Input from "../../../components/input/Input";
const InputFields = () => {
    return (
        <div className={'input-fields'}>
            <Input title={'Username'} label={'Enter username'}/>
            <Input title={'Email'} label={'Enter email'}/>
        </div>
    );
};

export default InputFields;