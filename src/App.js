import React from 'react';
import {Routes, Route} from "react-router-dom";
import LoginPage from "./views/login-page/LoginPage";
import Layout from "./layout/Layout";
import LoginStatusWrapper from "./wrappers/LoginStatusWrapper";

const App = () => {
    return (
        <LoginStatusWrapper>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="*" element={<Layout/>}/>
            </Routes>
        </LoginStatusWrapper>
    );
};

export default App;