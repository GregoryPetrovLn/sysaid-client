import React,{useEffect} from 'react';
import {checkLoginStatus} from "../utils/service";
import {useNavigate} from "react-router-dom";

const LoginStatusWrapper = ({children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        checkLoginStatus(navigate)
    }, [])
    return children
};

export default LoginStatusWrapper;