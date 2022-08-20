import React from 'react';
import './Header.scss'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={'app-header'}>
            <div className={'nav-btns'}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={()=>navigate('/')}>Calculator</Button>
                    <Button onClick={()=>navigate('/history')}>History</Button>
                </ButtonGroup>
            </div>

            <div className={'login-status'}>

            </div>
        </div>
    );
};

export default Header;