import React from 'react';
import './Header.scss'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useNavigate} from "react-router-dom";
import {USER_EMAIL, USER_NAME} from "../../views/login-page/LoginPage";

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem(USER_NAME);
        localStorage.removeItem(USER_EMAIL);
        navigate('/login')
    }

    return (
        <div className={'app-header'}>
            <div className={'nav-btns'}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => navigate('/')}>Calculator</Button>
                    <Button onClick={() => navigate('/history')}>History</Button>
                </ButtonGroup>
                <div className={'login-status'}>
                    <Button onClick={logout}>Logout</Button>
                    <div className={'user-name'}>Hello {localStorage.getItem(USER_NAME)}</div>
                </div>
            </div>
        </div>
    );
};

export default Header;