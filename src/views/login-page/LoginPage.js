import React from 'react';
import InputFields from "./components/InputFields";
import './LoginPage.scss'

const LoginPage = () => {
    return (
        <div className={'login-page'}>
            <div className={'login-page__wrapper'}>
                <div className={'title'}>Login</div>
                <InputFields/>
            </div>
        </div>
    );
};

export default LoginPage;