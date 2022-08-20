import React, {useEffect} from 'react';
import InputFields from "./components/InputFields";
import './LoginPage.scss'
import {checkLoginStatus} from "../../utils/service";
import {useNavigate} from 'react-router-dom';

export const USER_NAME = 'USER_NAME'
export const USER_EMAIL = 'USER_EMAIL'
const LoginPage = () => {
    const navigate = useNavigate();
    const onSubmit = (values, {resetForm}) => {
        localStorage.setItem(USER_NAME, values.username);
        localStorage.setItem(USER_EMAIL, values.email);
        checkLoginStatus(navigate)
        resetForm()
    }

    useEffect(() => {
        //checkLoginStatus(navigate)
    }, [])
    return (
        <div className={'login-page'}>
            <div className={'login-page__wrapper'}>
                <div className={'title'}>Login</div>
                <InputFields onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default LoginPage;