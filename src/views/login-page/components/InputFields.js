import React from 'react';
import './InputFields.scss'
import Input from "../../../components/input/Input";

import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button} from "@mui/material";

const Schema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const InputFields = () => {

    const onSubmit = (values, {resetForm}) => {
        console.log(values)
        resetForm()
    }
    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
            }}
            validationSchema={Schema}
            onSubmit={onSubmit}
        >
            {({
                  values,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched
              }) => (
                <div className={'input-fields'}>
                    <Input title={'Username'}
                           placeholder={'Enter user name'}
                           errors={errors}
                           touched={touched}
                           id={'username'}
                           value={values.username}
                           onChange={handleChange}
                    />
                    <Input title={'Email'}
                           placeholder={'Enter user email'}
                           errors={errors}
                           touched={touched}
                           id={'email'}
                           value={values.email}
                           onChange={handleChange}
                    />
                    <Button variant={'contained'} className={'input-fields__btn-login'}
                            onClick={handleSubmit}>Login</Button>
                </div>
            )}
        </Formik>
    );
};

export default InputFields;